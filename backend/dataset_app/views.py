from django.shortcuts import render
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
import os

@api_view(['GET'])
@permission_classes([AllowAny])
def datasets(request):
    """Return all available datasets from the data folder"""
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
        
        # If no CSV files found, return at least the housing expenditure dataset
        if not datasets:
            datasets = [{
                "id": "housing-expenditure",
                "name": "Housing expenditure dataset",
                "file": "LEVEL - 05 ( Sec 5 & 6).csv"
            }]
            
        return Response(datasets)
    except Exception as e:
        return Response([{
            "id": "housing-expenditure",
            "name": "Housing expenditure dataset",
            "file": "LEVEL - 05 ( Sec 5 & 6).csv"
        }])
