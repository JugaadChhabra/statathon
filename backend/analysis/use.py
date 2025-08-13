from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from .core import analyze

class AnalyzeDirectView(APIView):
    def post(self, request):
        input_text = request.data.get("input_text", "")
        options = request.data.get("options", {})
        result, confidence, explanation = analyze(input_text, options)
        return Response({
            "result": result,
            "confidence": confidence,
            "explanation": explanation
        }, status=status.HTTP_200_OK)