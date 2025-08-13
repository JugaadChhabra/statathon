from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
import time

from .models import Analysis
from .serializers import AnalyisRequestSerializer, AnalysisResponseSerializer

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

@api_view(['GET'])
def list_analyses(request):
    analyses = Analysis.objects.all()[:20]
    serializer=AnalysisResponseSerializer(analyses, many = True)
    return Response(serializer.data)