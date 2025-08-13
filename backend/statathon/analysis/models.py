from django.db import models
from django.utils import timezone
# Create your models here.


class Analysis(models.Model):
    input_text = models.TextField(
        help_text = "Original text inp for analysis"
    )

    result = models.CharField(
        max_length = 100,
        help_text="Analysis result/category"
    )

    confidence = models.FloatField(
        help_text = "Confidence "
    )