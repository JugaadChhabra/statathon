from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
import time

from .models import Analysis
from .serializers import AnalyisRequestSerializer, AnalysisResponseSerializer

@extend_schema(
    description="Analyze text data and return insights",
    request=AnalyisRequestSerializer,
    responses={
        201: AnalysisResponseSerializer,
        400: {"type": "object", "properties": {"error": {"type": "string"}}}
    }
)
@api_view(['POST'])
def analyze_text(request):
    serializer = AnalyisRequestSerializer(data=request.data)
    if serializer.is_valid():
        start_time = time.time()

        result="Sample"
        confidence=0.85
        explanation=  {"top_factors": ["factor1", "factor2"]}
        latency_ms = int((time.time() - start_time)*1000)

        analysis = Analysis.objects.create(
            input_text = serializer.validated_data['input_text'],
            result= result,
            confidence= confidence,
            explanation_json = explanation,
            latency_ms = latency_ms
        )

        response_serializer = AnalysisResponseSerializer(analysis)
        return Response(response_serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@extend_schema(
    description="List recent analyses",
    responses={200: AnalysisResponseSerializer(many=True)}
)
@api_view(['GET'])
def list_analyses(request):
    analyses = Analysis.objects.all()[:20]
    serializer = AnalysisResponseSerializer(analyses, many=True)
    return Response(serializer.data)

@extend_schema(
    description="Health check endpoint",
    responses={
        200: {
            "type": "object",
            "properties": {
                "status": {"type": "string"},
                "version": {"type": "string"},
                "services": {
                    "type": "object",
                    "properties": {
                        "database": {"type": "string"},
                        "analysis_engine": {"type": "string"}
                    }
                }
            }
        }
    }
)
@api_view(['GET'])
def health(request):
    """Health check endpoint"""
    return Response({
        "status": "healthy",
        "version": "v0",
        "services": {
            "database": "connected",
            "analysis_engine": "ready"
        }
    })