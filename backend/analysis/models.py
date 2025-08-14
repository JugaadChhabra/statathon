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
    

class Dataset(models.Model):
    name = models.CharField(max_length=200)
    file_path = models.CharField(max_length=500)
    description = models.TextField(blank=True)
    section = models.CharField(max_length=100, blank = True)
    level = models.CharField(max_length=50, blank = True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now = True)

    columns = ArrayField(models.CharField(max_length = 200), default = list)
    row_count = models.IntegerField(default=0)
    file_size = models.BigIntegerField(default = 0)

    class Meta:
        db_table = 'datasets'
        ordering = ['level', 'name']

        def __str__(self):
            return f"{self.loyal} - {self.name}"
        
class DatasetChunk(models.Model):
    dataset = models.ForeignKey(Dataset, on_delete=models.CASCADE, related_name= 'chunks')
    chunk_index = models.IntegerField()
    content = models.TextField()
    metadata = models.JSON(default = dict)

    keywords = ArrayField(models.CharField(max_length = 100), default = list)

    created_at = models.DateTimeField(auto_now_add = True)

    class Meta:
        db_table = 'dataset_chunks'
        indexes = [
            models.Index(fields = ['dataset', 'chunk_index'])
        ]

        def __str__(self):
            return f"{self.dataset.name} - Chunk {self.chunk_index}"
        

class Query(models.Model):
    query_text = models.TextField()
    response = models.TextField()
    relevant_datasets = models.ManyToManyField(Dataset, blank = True)

    query_type = models.CharField(max_length=100, blank = True)
    sql_query = models.TextField(blank= True)
    confidence = models.FloatField(default = 0.0)

    created_at = models.DateTimeField(auto_now_add=True)
    latency_ms = models.IntegerField(default = 0)

    class Meta:
        db_table = 'queries'
        ordering = ['-created_at']
        

    def __str__(self):
        return f"Query: {self.query_text[:50]}"