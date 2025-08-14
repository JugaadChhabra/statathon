from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.db import models
from django.core.validators import MinValueValidator
import uuid
from .managers import UserManager

class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(unique=True, max_length=255)
    first_name = models.CharField(max_length=150, blank=True)
    last_name = models.CharField(max_length=150, blank=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    date_joined = models.DateTimeField(auto_now_add=True)

    objects = UserManager()

    USERNAME_FIELD = "email"
    REQUIRED_FIELDS = []  # No extra required fields when creating superuser

    # API specific fields
    api_key = models.UUIDField(
        default=uuid.uuid4,
        unique=True,
        help_text="API key for authentication"
    )
    daily_query_limit = models.IntegerField(
        default=1000,
        validators=[MinValueValidator(1)],
        help_text="Maximum number of queries allowed per day"
    )
    organization = models.CharField(
        max_length=255,
        blank=True,
        help_text="User's organization or institution"
    )
    role = models.CharField(
        max_length=50,
        default='researcher',
        choices=[
            ('researcher', 'Researcher'),
            ('student', 'Student'),
            ('admin', 'Administrator'),
            ('public', 'Public User')
        ]
    )
    last_active = models.DateTimeField(
        null=True,
        blank=True,
        help_text="Last API activity timestamp"
    )

    def __str__(self):
        return self.email
        
    def get_full_name(self):
        return f"{self.first_name} {self.last_name}".strip() or self.email
