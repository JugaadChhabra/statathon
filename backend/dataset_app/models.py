from django.db import models
from django.contrib.postgres.fields import ArrayField
from django.core.validators import MinValueValidator, MaxValueValidator
from auth_app.models import User

class Dataset(models.Model):
    name = models.CharField(
        max_length=255,
        help_text="Name of the dataset"
    )
    description = models.TextField(
        help_text="Description of the dataset contents"
    )
    file_path = models.CharField(
        max_length=500,
        help_text="Path to the dataset file"
    )
    schema = models.JSONField(
        help_text="JSON schema describing the dataset structure"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'datasets'
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.name} ({self.id})"

class DatasetAccess(models.Model):
    ROLE_CHOICES = [
        ('viewer', 'Viewer'),
        ('analyst', 'Analyst'),
        ('admin', 'Administrator')
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.CASCADE,
        related_name='dataset_accesses'
    )
    dataset = models.ForeignKey(
        Dataset,
        on_delete=models.CASCADE,
        related_name='user_accesses'
    )
    role = models.CharField(
        max_length=20,
        choices=ROLE_CHOICES,
        default='viewer'
    )
    rate_limit = models.IntegerField(
        default=100,
        validators=[MinValueValidator(1), MaxValueValidator(1000)],
        help_text="Number of queries allowed per hour"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'dataset_access'
        unique_together = ['user', 'dataset']
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.user.email} - {self.dataset.name} ({self.role})"

class QueryLog(models.Model):
    STATUS_CHOICES = [
        ('success', 'Success'),
        ('error', 'Error'),
        ('timeout', 'Timeout')
    ]

    user = models.ForeignKey(
        User,
        on_delete=models.SET_NULL,
        null=True,
        related_name='queries'
    )
    dataset = models.ForeignKey(
        Dataset,
        on_delete=models.SET_NULL,
        null=True,
        related_name='queries'
    )
    query = models.TextField(
        help_text="SQL query executed"
    )
    status = models.CharField(
        max_length=20,
        choices=STATUS_CHOICES
    )
    error_message = models.TextField(
        null=True,
        blank=True
    )
    execution_time = models.FloatField(
        help_text="Query execution time in seconds"
    )
    row_count = models.IntegerField(
        help_text="Number of rows returned"
    )
    ip_address = models.GenericIPAddressField(
        help_text="Client IP address"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        db_table = 'query_logs'
        ordering = ['-created_at']

    def __str__(self):
        return f"Query by {self.user.email} on {self.dataset.name}"

class Variable(models.Model):
    TYPE_CHOICES = [
        ('numeric', 'Numeric'),
        ('categorical', 'Categorical'),
        ('datetime', 'DateTime'),
        ('text', 'Text')
    ]

    dataset = models.ForeignKey(
        Dataset,
        on_delete=models.CASCADE,
        related_name='variables'
    )
    name = models.CharField(
        max_length=255,
        help_text="Variable name in the dataset"
    )
    display_name = models.CharField(
        max_length=255,
        help_text="Human-readable name for the variable"
    )
    description = models.TextField(
        help_text="Description of what the variable represents"
    )
    data_type = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES
    )
    is_nullable = models.BooleanField(
        default=True
    )
    possible_values = ArrayField(
        models.CharField(max_length=255),
        null=True,
        blank=True,
        help_text="List of possible values for categorical variables"
    )
    min_value = models.FloatField(
        null=True,
        blank=True,
        help_text="Minimum value for numeric variables"
    )
    max_value = models.FloatField(
        null=True,
        blank=True,
        help_text="Maximum value for numeric variables"
    )
    is_sensitive = models.BooleanField(
        default=False,
        help_text="Whether this variable contains sensitive data"
    )
    requires_aggregation = models.BooleanField(
        default=False,
        help_text="Whether this variable must be aggregated in queries"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'variables'
        unique_together = ['dataset', 'name']
        ordering = ['name']

    def __str__(self):
        return f"{self.display_name} ({self.data_type})"

class DatasetRelationship(models.Model):
    TYPE_CHOICES = [
        ('one_to_one', 'One-to-One'),
        ('one_to_many', 'One-to-Many'),
        ('many_to_many', 'Many-to-Many')
    ]

    source_dataset = models.ForeignKey(
        Dataset,
        on_delete=models.CASCADE,
        related_name='source_relationships'
    )
    target_dataset = models.ForeignKey(
        Dataset,
        on_delete=models.CASCADE,
        related_name='target_relationships'
    )
    relationship_type = models.CharField(
        max_length=20,
        choices=TYPE_CHOICES
    )
    join_conditions = models.JSONField(
        help_text="JSON describing the join conditions between datasets"
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    class Meta:
        db_table = 'dataset_relationships'
        unique_together = ['source_dataset', 'target_dataset']
        ordering = ['-created_at']

    def __str__(self):
        return f"{self.source_dataset.name} -> {self.target_dataset.name}"
