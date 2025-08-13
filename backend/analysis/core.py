import re
from typing import Dict, List, Tuple, Any
from collections import defaultdict

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

def _calculate_category_scores(text: str, words: List[str]) -> Dict[str, float]:
    keywords = {
        "Policy Analysis": {
            "policy": 3, "government": 2, "legislation": 3, "regulation": 2,
            "initiative": 2, "framework": 2, "strategy": 2, "implementation": 2
        },
        "Economic Analysis": {
            "economic": 3, "economy": 3, "financial": 2, "market": 2, "growth": 2,
            "revenue": 2, "cost": 2, "investment": 2, "gdp": 3, "inflation": 2
        },
        "Environmental Impact": {
            "environment": 3, "climate": 3, "pollution": 2, "sustainability": 2,
            "carbon": 2, "emission": 2, "renewable": 2, "conservation": 2
        },
        "Healthcare Analysis": {
            "health": 3, "healthcare": 3, "medical": 2, "hospital": 2, "patient": 2,
            "treatment": 2, "vaccine": 2, "diagnosis": 2, "wellness": 2
        },
        "Infrastructure Assessment": {
            "infrastructure": 3, "transportation": 2, "construction": 2, "road": 2,
            "bridge": 2, "utility": 2, "network": 2, "facility": 2
        }
    }

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
