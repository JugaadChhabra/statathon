import re
from typing import Dict, List, Tuple, Any
from collections import defaultdict, Counter
import math

# Enhanced keyword dictionaries with domain-specific terms
CATEGORY_KEYWORDS_V2 = {
    "Policy Analysis": {
        # Core policy terms (weight 4)
        "policy": 4, "government": 4, "legislation": 4, "regulation": 4,
        # Implementation terms (weight 3)
        "initiative": 3, "framework": 3, "strategy": 3, "implementation": 3,
        "scheme": 3, "guideline": 3, "compliance": 3,
        # Legal terms (weight 2)
        "act": 2, "bill": 2, "ordinance": 2, "amendment": 2, "authority": 2, "committee": 2,
        # Context terms (weight 1)
        "directive": 1, "mandate": 1, "reform": 1
    },
    "Economic Analysis": {
        # Core economic terms (weight 4)
        "economic": 4, "economy": 4, "financial": 4, "market": 4,
        # Metrics terms (weight 3)
        "growth": 3, "revenue": 3, "gdp": 3, "inflation": 3, "budget": 3,
        # Financial terms (weight 2)
        "cost": 2, "investment": 2, "expenditure": 2, "subsidy": 2, "tax": 2,
        "income": 2, "profit": 2, "loss": 2, "fiscal": 2, "monetary": 2,
        # Trade terms (weight 1)
        "trade": 1, "export": 1, "import": 1, "commerce": 1
    },
    "Environmental Impact": {
        # Core environmental (weight 4)
        "environment": 4, "climate": 4, "pollution": 4, "sustainability": 4,
        # Impact terms (weight 3)
        "carbon": 3, "emission": 3, "renewable": 3, "conservation": 3,
        "biodiversity": 3, "waste": 3,
        # Specific terms (weight 2)
        "recycle": 2, "ecology": 2, "forest": 2, "wildlife": 2, "water": 2,
        "air": 2, "soil": 2, "hazardous": 2,
        # Technical terms (weight 1)
        "greenhouse": 1, "ecosystem": 1, "deforestation": 1
    },
    "Healthcare Analysis": {
        # Core healthcare (weight 4)
        "health": 4, "healthcare": 4, "medical": 4, "hospital": 4,
        # Professional terms (weight 3)
        "patient": 3, "treatment": 3, "doctor": 3, "nurse": 3, "clinic": 3,
        # Medical terms (weight 2)
        "vaccine": 2, "diagnosis": 2, "disease": 2, "infection": 2,
        "medicine": 2, "surgery": 2, "therapy": 2,
        # Public health (weight 1)
        "wellness": 1, "immunization": 1, "epidemic": 1, "pandemic": 1
    },
    "Infrastructure Assessment": {
        # Core infrastructure (weight 4)
        "infrastructure": 4, "transportation": 4, "construction": 4, "facility": 4,
        # Transport terms (weight 3)
        "road": 3, "bridge": 3, "railway": 3, "airport": 3, "port": 3,
        # Utility terms (weight 2)
        "utility": 2, "network": 2, "building": 2, "pipeline": 2,
        "electricity": 2, "power": 2, "telecom": 2,
        # Context terms (weight 1)
        "urban": 1, "rural": 1, "maintenance": 1
    },
    "Education Analysis": {
        # Core education (weight 4)
        "education": 4, "school": 4, "university": 4, "student": 4,
        # Academic terms (weight 3)
        "teacher": 3, "curriculum": 3, "exam": 3, "degree": 3,
        # System terms (weight 2)
        "college": 2, "syllabus": 2, "literacy": 2, "enrollment": 2,
        "scholarship": 2, "tuition": 2,
        # Context terms (weight 1)
        "classroom": 1, "institute": 1, "dropout": 1, "qualification": 1
    },
    "Social Welfare": {
        # Core welfare (weight 4)
        "welfare": 4, "social": 4, "poverty": 4, "benefit": 4,
        # Support terms (weight 3)
        "housing": 3, "employment": 3, "insurance": 3, "pension": 3,
        # Aid terms (weight 2)
        "subsidy": 2, "grant": 2, "aid": 2, "support": 2, "assistance": 2,
        # Program terms (weight 1)
        "scheme": 1, "program": 1, "community": 1, "unemployment": 1
    },
    "Agriculture & Rural": {
        # Core agriculture (weight 4)
        "agriculture": 4, "farmer": 4, "crop": 4, "farming": 4,
        # Production terms (weight 3)
        "irrigation": 3, "harvest": 3, "yield": 3, "livestock": 3,
        # Input terms (weight 2)
        "fertilizer": 2, "pesticide": 2, "seed": 2, "tractor": 2,
        # Context terms (weight 1)
        "rural": 1, "village": 1, "dairy": 1, "cooperative": 1, "market": 1
    },
    "Technology & Innovation": {
        # Core tech (weight 4)
        "technology": 4, "innovation": 4, "digital": 4, "software": 4,
        # Modern tech (weight 3)
        "ai": 3, "data": 3, "internet": 3, "automation": 3,
        # Specific tech (weight 2)
        "hardware": 2, "robotics": 2, "startup": 2, "research": 2,
        "development": 2, "it": 2,
        # Advanced tech (weight 1)
        "blockchain": 1, "cloud": 1, "cyber": 1, "machine learning": 1
    }
}

# Sentiment indicators with weights
SENTIMENT_INDICATORS = {
    "positive": {
        "improved": 3, "growth": 3, "success": 3, "effective": 3, "beneficial": 3,
        "excellent": 2, "good": 2, "positive": 2, "increasing": 2, "rising": 2,
        "progress": 2, "achievement": 2, "opportunity": 2,
        "better": 1, "gain": 1, "advantage": 1, "boost": 1
    },
    "negative": {
        "declined": 3, "crisis": 3, "problem": 3, "threat": 3, "failure": 3,
        "poor": 2, "bad": 2, "negative": 2, "decreasing": 2, "falling": 2,
        "issue": 2, "challenge": 2, "concern": 2,
        "worse": 1, "loss": 1, "risk": 1, "difficulty": 1
    },
    "neutral": {
        "stable": 2, "maintained": 2, "consistent": 2, "steady": 2,
        "unchanged": 1, "similar": 1, "comparable": 1
    }
}

# Context patterns for better classification
CONTEXT_PATTERNS = {
    "Policy Analysis": [
        r"government\s+(announced|implemented|proposed)",
        r"policy\s+(framework|initiative|reform)",
        r"(act|bill|legislation)\s+(passed|introduced|enacted)"
    ],
    "Economic Analysis": [
        r"\d+\.?\d*%\s+(growth|decline|increase|decrease)",
        r"(gdp|revenue|budget|fiscal)\s+(year|quarter|period)",
        r"economic\s+(impact|analysis|report|data)"
    ],
    "Environmental Impact": [
        r"climate\s+(change|impact|action)",
        r"carbon\s+(emission|footprint|neutral)",
        r"environmental\s+(protection|impact|assessment)"
    ]
}


def analyze_v2(input_text: str, options: Dict = None) -> Tuple[str, float, Dict]:
    """
    Enhanced analysis function with better features while maintaining determinism
    
    New features:
    - Weighted keyword scoring
    - Context pattern matching
    - Sentiment analysis integration
    - N-gram analysis for better accuracy
    - Multi-factor confidence calculation
    """
    if options is None:
        options = {}

    text_lower = input_text.lower()
    words = re.findall(r'\b\w+\b', text_lower)
    
    # Enhanced scoring with multiple factors
    category_scores = _calculate_enhanced_scores(text_lower, words)
    
    # Apply context pattern bonuses
    category_scores = _apply_context_patterns(text_lower, category_scores)
    
    # Handle edge cases
    if not category_scores or all(score == 0 for score in category_scores.values()):
        result = "General Content"
        confidence = 0.1
    else:
        result = max(category_scores.keys(), key=lambda k: category_scores[k])
        confidence = _calculate_enhanced_confidence(text_lower, words, category_scores)

    explanation = _generate_enhanced_explanation(text_lower, words, category_scores, result)

    return result, confidence, explanation


def _calculate_enhanced_scores(text: str, words: List[str]) -> Dict[str, float]:
    """Enhanced scoring with weighted keywords and n-grams"""
    scores = defaultdict(float)
    
    # 1. Weighted keyword scoring
    for category, keywords in CATEGORY_KEYWORDS_V2.items():
        for word in words:
            if word in keywords:
                scores[category] += keywords[word]
    
    # 2. Bigram analysis for better context
    bigrams = _extract_bigrams(words)
    for category, keywords in CATEGORY_KEYWORDS_V2.items():
        for bigram in bigrams:
            bigram_text = " ".join(bigram)
            if bigram_text in keywords:
                scores[category] += keywords[bigram_text] * 1.5  # Bonus for phrases
    
    # 3. Word frequency boost (common domain words get less weight)
    word_freq = Counter(words)
    for category in scores:
        # Reduce score for very common words
        common_words = sum(1 for word in words if word_freq[word] > 2)
        if common_words > 0:
            scores[category] *= (1 - min(common_words * 0.1, 0.3))
    
    # Normalize scores
    if scores:
        max_score = max(scores.values())
        if max_score > 0:
            scores = {k: v/max_score for k, v in scores.items()}
    
    # Ensure all categories have a score
    for category in CATEGORY_KEYWORDS_V2.keys():
        if category not in scores:
            scores[category] = 0.0
    
    return dict(scores)


def _apply_context_patterns(text: str, scores: Dict[str, float]) -> Dict[str, float]:
    """Apply context pattern bonuses"""
    enhanced_scores = scores.copy()
    
    for category, patterns in CONTEXT_PATTERNS.items():
        if category in enhanced_scores:
            for pattern in patterns:
                if re.search(pattern, text, re.IGNORECASE):
                    enhanced_scores[category] += 0.2  # Context bonus
                    break  # Only one bonus per category
    
    return enhanced_scores


def _extract_bigrams(words: List[str]) -> List[Tuple[str, str]]:
    """Extract bigrams from word list"""
    return [(words[i], words[i+1]) for i in range(len(words)-1)]


def _calculate_enhanced_confidence(text: str, words: List[str], category_scores: Dict[str, float]) -> float:
    """Enhanced confidence calculation with multiple factors"""
    if not category_scores:
        return 0.1
    
    max_score = max(category_scores.values())
    sorted_scores = sorted(category_scores.values(), reverse=True)
    
    # Factor 1: Score separation (how clear the winner is)
    if len(sorted_scores) >= 2:
        separation = sorted_scores[0] - sorted_scores[1]
        separation_factor = min(separation * 2, 0.3)
    else:
        separation_factor = 0.1
    
    # Factor 2: Text length adequacy
    length_factor = min(len(words) / 30, 1.0)  # Optimal around 30 words
    
    # Factor 3: Quantitative content boost
    quant_signals = len(_extract_quantitative_signals(text))
    quant_factor = min(quant_signals * 0.05, 0.15)
    
    # Factor 4: Sentiment consistency
    sentiment_factor = _calculate_sentiment_consistency(words)
    
    # Factor 5: Keyword density
    total_keywords = sum(1 for word in words 
                        for category_keywords in CATEGORY_KEYWORDS_V2.values() 
                        if word in category_keywords)
    density_factor = min(total_keywords / len(words), 0.2) if words else 0
    
    # Combine factors
    confidence = (max_score * 0.4 + 
                 separation_factor * 0.25 + 
                 length_factor * 0.15 + 
                 quant_factor * 0.1 + 
                 sentiment_factor * 0.05 + 
                 density_factor * 0.05)
    
    return min(max(confidence, 0.1), 0.95)


def _calculate_sentiment_consistency(words: List[str]) -> float:
    """Calculate sentiment consistency factor"""
    sentiment_scores = {"positive": 0, "negative": 0, "neutral": 0}
    
    for word in words:
        for sentiment, sentiment_words in SENTIMENT_INDICATORS.items():
            if word in sentiment_words:
                sentiment_scores[sentiment] += sentiment_words[word]
    
    total_sentiment = sum(sentiment_scores.values())
    if total_sentiment == 0:
        return 0.05  # Neutral baseline
    
    # Reward consistent sentiment
    max_sentiment = max(sentiment_scores.values())
    consistency = max_sentiment / total_sentiment
    
    return consistency * 0.1


def _generate_enhanced_explanation(text: str, words: List[str], 
                                 category_scores: Dict[str, float], result: str) -> Dict[str, Any]:
    """Generate enhanced explanation with better insights"""
    
    # Get top categories and keywords
    sorted_categories = sorted(category_scores.items(), key=lambda x: x[1], reverse=True)
    keywords_found = [word for word in words if word in CATEGORY_KEYWORDS_V2.get(result, {})]
    
    # Analyze sentiment
    sentiment_analysis = _analyze_text_sentiment(words)
    
    # Extract quantitative signals
    quant_signals = _extract_quantitative_signals(text)
    
    # Generate human-readable factors
    top_factors = []
    
    # Factor 1: Classification strength
    if keywords_found:
        top_keywords = sorted(keywords_found, key=lambda w: CATEGORY_KEYWORDS_V2[result].get(w, 0), reverse=True)[:3]
        top_factors.append(f"Strong {result.lower()} classification based on key terms: {', '.join(top_keywords)}")
    else:
        top_factors.append(f"Contextual classification as {result.lower()} based on semantic analysis")
    
    # Factor 2: Alternative considerations
    if len(sorted_categories) > 1 and sorted_categories[1][1] > 0.1:
        second_category = sorted_categories[1][0]
        confidence_gap = sorted_categories[0][1] - sorted_categories[1][1]
        if confidence_gap < 0.3:
            top_factors.append(f"Also shows {second_category.lower()} characteristics (close classification)")
        else:
            top_factors.append(f"Clear classification with {second_category.lower()} as secondary theme")
    else:
        top_factors.append("Unambiguous single-category classification")
    
    # Factor 3: Content characteristics
    if quant_signals:
        top_factors.append(f"Data-rich content with {len(quant_signals)} quantitative elements: {quant_signals[0]}")
    elif sentiment_analysis["dominant"] != "neutral":
        sentiment_desc = sentiment_analysis["dominant"]
        top_factors.append(f"Content shows {sentiment_desc} sentiment with contextual depth")
    else:
        word_density = len(set(words)) / len(words) if words else 0
        if word_density > 0.7:
            top_factors.append("Rich vocabulary indicating comprehensive analysis")
        else:
            top_factors.append("Focused content with consistent terminology")
    
    return {
        "top_factors": top_factors,
        "keywords_found": keywords_found[:5],
        "category_scores": dict(sorted_categories),
        "sentiment_analysis": sentiment_analysis,
        "reasoning": f"Enhanced classification as '{result}' using weighted keyword analysis, context patterns, and sentiment indicators.",
        "metadata": {
            "version": "2.0",
            "word_count": len(words),
            "unique_words": len(set(words)),
            "quantitative_signals": quant_signals,
            "classification_confidence_factors": {
                "keyword_density": len(keywords_found) / len(words) if words else 0,
                "category_separation": sorted_categories[0][1] - sorted_categories[1][1] if len(sorted_categories) > 1 else 1.0,
                "content_richness": len(set(words)) / len(words) if words else 0
            }
        }
    }


def _analyze_text_sentiment(words: List[str]) -> Dict[str, Any]:
    """Analyze overall text sentiment"""
    sentiment_scores = {"positive": 0, "negative": 0, "neutral": 0}
    sentiment_words_found = {"positive": [], "negative": [], "neutral": []}
    
    for word in words:
        for sentiment, sentiment_dict in SENTIMENT_INDICATORS.items():
            if word in sentiment_dict:
                sentiment_scores[sentiment] += sentiment_dict[word]
                sentiment_words_found[sentiment].append(word)
    
    total_score = sum(sentiment_scores.values())
    if total_score == 0:
        return {"dominant": "neutral", "scores": sentiment_scores, "words": sentiment_words_found}
    
    dominant = max(sentiment_scores.keys(), key=lambda k: sentiment_scores[k])
    
    return {
        "dominant": dominant,
        "scores": {k: v/total_score for k, v in sentiment_scores.items()},
        "words": sentiment_words_found,
        "strength": sentiment_scores[dominant] / total_score
    }


def _extract_quantitative_signals(text: str) -> List[str]:
    """Extract quantitative signals from text"""
    patterns = [
        r'\d+\.?\d*%',  # Percentages
        r'\$\d+\.?\d*[kmb]?',  # Money
        r'\d+\.?\d*\s*(million|billion|thousand|crore|lakh)',  # Large numbers
        r'\d+\.?\d*\s*(years?|months?|days?|quarters?)',  # Time periods
        r'(19|20)\d{2}',  # Years
        r'\d+\.?\d*\s*(km|meter|hectare|kg|ton)',  # Measurements
    ]
    
    signals = []
    for pattern in patterns:
        matches = re.findall(pattern, text, re.IGNORECASE)
        signals.extend(matches)
    
    return list(set(signals))[:7]  # Remove duplicates, limit to 7