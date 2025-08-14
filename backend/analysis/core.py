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
            weighted[kw] = 3 if i < 4 else 2
        weights[category] = weighted
    return weights

def _generate_explanation(text: str, words: List[str], category_scores: Dict[str, float], result: str) -> Dict[str, Any]:
    sorted_categories = sorted(category_scores.items(), key=lambda x: x[1], reverse=True)
    top_factors = [cat for cat, score in sorted_categories[:3] if score > 0]

    keywords_found = [word for word in words if word in CATEGORY_KEYWORDS.get(result, [])]

    return {
        "top_factors": top_factors,
        "keywords_found": keywords_found,
        "category_scores": category_scores
    }

def analyze(input_text: str, options: Dict = None) -> Tuple[str, float, Dict]:
    if options is None:
        options = {}

    text_lower = input_text.lower()

    words = re.findall(r'\b\w+\b', text_lower)

    category_scores = _calculate_category_scores(text_lower, words)
    result = max(category_scores.keys(), key = lambda k: category_scores[k])

    confidence = _calculate_confidence(category_scores, words)

    explanation = _generate_explanation(text_lower, words, category_scores, result)

    return result, confidence, explanation

def _calculate_category_scores(words: List[str]) -> Dict[str, float]:
    keywords = get_category_keywords_weighted()

    scores = defaultdict(float)

    for category, category_keywords in keywords.items():
        for word in words:
            if word in category_keywords:
                scores[category] += category_keywords[word]

    if scores:
        max_score = max(scores.values())
        if max_score > 0:
            scores = {k: v/max_score for k, v in scores.items()}

    for category in keywords.keys():
        if category not in scores:
            scores[category] = 0.0

    return dict(scores)

def _calculate_confidence(category_scores: Dict[str, float], words: List[str]) -> float:
    max_score = max(category_scores.values()) if category_scores else 0

    sorted_scores = sorted(category_scores.values(), reverse=True)

    if len(sorted_scores) >= 2:
        gap = sorted_scores[0] - sorted_scores[2]
        gap_boost = min(gap * 0.3, 0.2)

        length_factor = min(len(words) / 50, 1.0)  
    
    has_numbers = any(char.isdigit() for char in ' '.join(words))
    number_boost = 0.1 if has_numbers else 0
    
    confidence = max_score * length_factor + gap_boost + number_boost
    return min(max(confidence, 0.1), 0.95)  
