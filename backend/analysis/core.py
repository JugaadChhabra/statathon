import re
from typing import Dict, List, Tuple, Any
from collections import defaultdict

CATEGORY_KEYWORDS = {
    "Policy Analysis": [
        "policy", "government", "legislation", "regulation", "initiative", "framework", "strategy", "implementation",
        "scheme", "guideline", "compliance", "act", "bill", "ordinance", "amendment", "authority", "committee"
    ],
    "Economic Analysis": [
        "economic", "economy", "financial", "market", "growth", "revenue", "cost", "investment", "gdp", "inflation",
        "expenditure", "budget", "subsidy", "tax", "income", "profit", "loss", "fiscal", "monetary", "trade", "export", "import"
    ],
    "Environmental Impact": [
        "environment", "climate", "pollution", "sustainability", "carbon", "emission", "renewable", "conservation",
        "biodiversity", "waste", "recycle", "ecology", "forest", "wildlife", "water", "air", "soil", "hazardous", "greenhouse"
    ],
    "Healthcare Analysis": [
        "health", "healthcare", "medical", "hospital", "patient", "treatment", "vaccine", "diagnosis", "wellness",
        "doctor", "nurse", "clinic", "disease", "infection", "medicine", "surgery", "therapy", "immunization", "epidemic", "pandemic"
    ],
    "Infrastructure Assessment": [
        "infrastructure", "transportation", "construction", "road", "bridge", "utility", "network", "facility",
        "building", "railway", "airport", "port", "pipeline", "electricity", "power", "telecom", "urban", "rural", "maintenance"
    ],
    "Education Analysis": [
        "education", "school", "college", "university", "student", "teacher", "curriculum", "syllabus", "exam",
        "literacy", "enrollment", "dropout", "scholarship", "tuition", "classroom", "institute", "degree", "qualification"
    ],
    "Social Welfare": [
        "welfare", "benefit", "social", "poverty", "housing", "employment", "unemployment", "insurance", "pension",
        "subsidy", "grant", "aid", "support", "assistance", "scheme", "program", "community", "ngo", "volunteer"
    ],
    "Agriculture & Rural": [
        "agriculture", "farmer", "crop", "irrigation", "harvest", "yield", "fertilizer", "pesticide", "rural",
        "village", "livestock", "dairy", "farming", "agrarian", "seed", "tractor", "market", "cooperative"
    ],
    "Technology & Innovation": [
        "technology", "innovation", "digital", "software", "hardware", "internet", "ai", "machine learning", "data",
        "automation", "robotics", "startup", "research", "development", "it", "cyber", "cloud", "blockchain"
    ]
}


def get_category_keywords_weighted() -> Dict[str, Dict[str, int]]:
    
    weights = {}
    for category, keywords in CATEGORY_KEYWORDS.items():
        weighted = {}
        for i, kw in enumerate(keywords):
            weighted[kw] = 3 if i < 4 else 2  # First 4 keywords get weight 3, rest get 2
        weights[category] = weighted
    return weights


def analyze(input_text: str, options: Dict = None) -> Tuple[str, float, Dict]:
    if options is None:
        options = {}

    text_lower = input_text.lower()
    words = re.findall(r'\b\w+\b', text_lower)

    category_scores = _calculate_category_scores(text_lower, words)
    
    if not category_scores or all(score == 0 for score in category_scores.values()):
        result = "General Content"
        confidence = 0.1
    else:
        result = max(category_scores.keys(), key=lambda k: category_scores[k])
        confidence = _calculate_confidence(category_scores, words)

    explanation = _generate_explanation(text_lower, words, category_scores, result)

    return result, confidence, explanation


def _calculate_category_scores(text_lower: str, words: List[str]) -> Dict[str, float]:

    keywords = get_category_keywords_weighted()
    scores = defaultdict(float)

    for category, category_keywords in keywords.items():
        for word in words:
            if word in category_keywords:
                scores[category] += category_keywords[word]

    # Normalize scores
    if scores:
        max_score = max(scores.values())
        if max_score > 0:
            scores = {k: v/max_score for k, v in scores.items()}

    # Ensure all categories have a score
    for category in keywords.keys():
        if category not in scores:
            scores[category] = 0.0

    return dict(scores)


def _calculate_confidence(category_scores: Dict[str, float], words: List[str]) -> float:

    max_score = max(category_scores.values()) if category_scores else 0
    sorted_scores = sorted(category_scores.values(), reverse=True)

    if len(sorted_scores) >= 2:
        gap = sorted_scores[0] - sorted_scores[1]  # FIXED: was sorted_scores[2]
        gap_boost = min(gap * 0.3, 0.2)
    else:
        gap_boost = 0

    length_factor = min(len(words) / 50, 1.0)

    has_numbers = any(char.isdigit() for char in ' '.join(words))
    number_boost = 0.1 if has_numbers else 0

    confidence = max_score * length_factor + gap_boost + number_boost
    return min(max(confidence, 0.1), 0.95)


def _generate_explanation(text: str, words: List[str], category_scores: Dict[str, float], result: str) -> Dict[str, Any]:
    """
    UPDATED: Generate human-readable explanations as requested
    """
    # Get top categories by score
    sorted_categories = sorted(category_scores.items(), key=lambda x: x[1], reverse=True)
    top_categories = [cat for cat, score in sorted_categories[:3] if score > 0]

    # Find keywords that contributed to the classification
    keywords_found = []
    if result in CATEGORY_KEYWORDS:
        keywords_found = [word for word in words if word in CATEGORY_KEYWORDS[result]]

    # Extract quantitative signals
    quantitative_signals = _extract_quantitative_signals(text)
    
    # Generate human-readable top factors
    top_factors = []
    
    # Factor 1: Primary category match
    if keywords_found:
        keywords_str = ", ".join(keywords_found[:3])
        top_factors.append(f"Strong {result.lower()} indicators found: {keywords_str}")
    else:
        top_factors.append(f"Classification based on contextual analysis for {result.lower()}")
    
    # Factor 2: Alternative categories consideration
    if len(top_categories) > 1:
        alt_categories = ", ".join(top_categories[1:3])
        top_factors.append(f"Also considered: {alt_categories}")
    else:
        top_factors.append("Clear single-category classification")
    
    # Factor 3: Content characteristics
    if quantitative_signals:
        top_factors.append(f"Contains {len(quantitative_signals)} quantitative elements: {quantitative_signals[0]}")
    elif len(words) > 100:
        top_factors.append("Comprehensive content with detailed analysis")
    else:
        top_factors.append("Concise content with focused messaging")

    return {
        "top_factors": top_factors,  # Human-readable strings as requested
        "keywords_found": keywords_found[:5],  # Limit for readability
        "category_scores": dict(sorted_categories),  # Ordered by relevance
        "reasoning": f"Classified as '{result}' based on keyword analysis and content structure.",
        "metadata": {
            "word_count": len(words),
            "quantitative_signals": quantitative_signals,
            "confidence_factors": {
                "keyword_density": len(keywords_found) / len(words) if words else 0,
                "category_clarity": sorted_categories[0][1] if sorted_categories else 0
            }
        }
    }


def _extract_quantitative_signals(text: str) -> List[str]:
    """Extract numbers, percentages, and metrics from text"""
    patterns = [
        r'\d+\.?\d*%',  # Percentages
        r'\$\d+\.?\d*[kmb]?',  # Money
        r'\d+\.?\d*\s*(million|billion|thousand)',  # Large numbers
        r'\d+\.?\d*\s*(years?|months?|days?)',  # Time periods
        r'\d{4}',  # Years
    ]
    
    signals = []
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        signals.extend(matches)
    
    return signals[:5]  # Limit to 5 signals for readability