from rest_framework import serializers
from .models import Analysis

class AnalyisRequestSerializer(serializers.Serializer):
    input_text = serializers.CharField(
        max_length = 10000,
        help_text = "Text to analyze"
    )

    options = serializers.DictField(
        required = False,
        help_text ="optional analysis parameters"
    )

class AnalysisResponseSerializer(serializers.ModelSerializer):

    class Meta:
        model = Analysis
        fields=[
            'id',
            'input_text',
            'result',
            'confidence',
            'explanation_json',
            'latency_ms',
            'created_at'
        ]
        read_only_fields=['id', 'created_at']