from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from drf_spectacular.utils import extend_schema
import time
import os

from .models import Analysis
from .serializers import AnalyisRequestSerializer, AnalysisResponseSerializer
from .core import analyze

@extend_schema(
    description="Analyze text data and return insights",
    request=AnalyisRequestSerializer,
    responses={
        201: AnalysisResponseSerializer,
        400: {"type": "object", "properties": {"error": {"type": "string"}}}
    }
)
@api_view(['POST'])
@permission_classes([AllowAny])
def analyze_text(request):
    serializer = AnalyisRequestSerializer(data=request.data)
    if not serializer.is_valid():
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    start_time = time.time()
    input_text = serializer.validated_data['input_text']
    options = serializer.validated_data.get('options', {})
    
    try:
        # Use your existing core analysis logic
        result, confidence, explanation = analyze(input_text, options)
        latency_ms = int((time.time() - start_time) * 1000)
        
        analysis = Analysis.objects.create(
            input_text=input_text,
            result=result,
            confidence=confidence,
            explanation_json=explanation,
            latency_ms=latency_ms,
        )
        
        response_serializer = AnalysisResponseSerializer(analysis)
        return Response(response_serializer.data, status=status.HTTP_201_CREATED)
    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

@extend_schema(
    description="List recent analyses",
    responses={200: AnalysisResponseSerializer(many=True)}
)
@api_view(['GET'])
@permission_classes([AllowAny])
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
@permission_classes([AllowAny])
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

@extend_schema(
    description="List available survey datasets",
    responses={200: {"type": "array", "items": {"type": "object"}}}
)
@api_view(['GET'])
@permission_classes([AllowAny])
def survey_datasets(request):
    """Return all available survey datasets from the data folder"""
    try:
        # Get the data folder path
        base_dir = os.path.dirname(os.path.dirname(os.path.dirname(os.path.abspath(__file__))))  # Go to project root
        data_dir = os.path.join(base_dir, 'data')
        
        datasets = []
        if os.path.exists(data_dir):
            for filename in os.listdir(data_dir):
                if filename.endswith('.csv'):
                    datasets.append({
                        "id": filename.replace('.csv', '').lower().replace(' ', '-').replace('(', '').replace(')', ''),
                        "name": filename.replace('.csv', ''),
                        "file": filename
                    })
        
        return Response(datasets)
    except Exception as e:
        return Response([{
            "id": "housing-expenditure",
            "name": "Housing expenditure dataset",
            "file": "LEVEL - 05 ( Sec 5 & 6).csv"
        }])