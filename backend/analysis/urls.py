from django.urls import path
from . import views

urlpatterns = [
    path('analyze/', views.analyze_text, name='analyze'),
    path('analyses/', views.list_analyses, name='list-analyses'),
    path('health/', views.health, name='health'),
    path('survey-datasets/', views.survey_datasets, name='survey-datasets'),
]
