from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.utils import timezone
import json
# Create your models here.


class Analysis(models.Model):
    input_text = models.TextField(
        help_text = "Original text input for analysis"
    )

    result = models.CharField(
        max_length = 100,
        help_text="Analysis result/category"
    )

    confidence = models.FloatField(
        help_text = "Confidence score (0.0 to 1.0)"
    )

    explanation_json = models.JSONField(
        help_text = "Detailed explanation and factors",
        default=dict
    )

    latency_ms = models.PositiveIntegerField(
        help_text="Processing time in milliseconds"
    )

    created_at = models.DateTimeField(
        default=timezone.now,
        help_text="When analysis was performed"
    )

    class Meta:
        db_table = 'analysis'
        ordering = ['-created_at']
        indexes = [
            models.Index(fields=['created_at']),
            models.Index(fields=['result']),
            models.Index(fields=['confidence']),
        ]

    def __str__(self):
        return f"Analysis {self.id}: {self.result} ({self.confidence:.3f})"
    

