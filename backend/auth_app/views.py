from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.response import Response
from rest_framework_simplejwt.tokens import RefreshToken
from django.contrib.auth import authenticate
from django.contrib.auth.password_validation import validate_password
from django.core.exceptions import ValidationError

from drf_yasg.utils import swagger_auto_schema
from drf_yasg import openapi

from .models import User


@swagger_auto_schema(
    method="post",
    operation_description="Register a new user",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "email": openapi.Schema(type=openapi.TYPE_STRING, format="email"),
            "password": openapi.Schema(type=openapi.TYPE_STRING, minLength=8),
            "first_name": openapi.Schema(type=openapi.TYPE_STRING),
            "last_name": openapi.Schema(type=openapi.TYPE_STRING),
            "organization": openapi.Schema(type=openapi.TYPE_STRING),
            "role": openapi.Schema(
                type=openapi.TYPE_STRING,
                enum=["researcher", "student", "admin", "public"],
            ),
        },
        required=["email", "password"],
    ),
    responses={
        201: "User registered successfully (returns tokens + user details)",
        400: "Validation error",
    },
    tags=["Authentication"],
)
@api_view(["POST"])
@permission_classes([AllowAny])
def register(request):
    """Register a new user"""
    try:
        email = request.data.get("email")
        password = request.data.get("password")
        first_name = request.data.get("first_name", "")
        last_name = request.data.get("last_name", "")
        organization = request.data.get("organization", "")
        role = request.data.get("role", "researcher")

        if not email or not password:
            return Response(
                {"error": "Email and password are required"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        if User.objects.filter(email=email).exists():
            return Response(
                {"error": "User with this email already exists"},
                status=status.HTTP_400_BAD_REQUEST,
            )

        # Validate password
        try:
            validate_password(password)
        except ValidationError as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)

        # Create user
        user = User.objects.create_user(
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name,
            organization=organization,
            role=role,
        )

        # Generate JWT tokens
        refresh = RefreshToken.for_user(user)

        return Response(
            {
                "access": str(refresh.access_token),
                "refresh": str(refresh),
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "role": user.role,
                    "organization": user.organization,
                },
            },
            status=status.HTTP_201_CREATED,
        )

    except Exception as e:
        return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


@swagger_auto_schema(
    method="get",
    operation_description="Get current user profile",
    responses={200: "User profile object"},
    tags=["Authentication"],
)
@api_view(["GET"])
@permission_classes([IsAuthenticated])
def profile(request):
    """Get current user profile"""
    user = request.user
    return Response(
        {
            "id": user.id,
            "email": user.email,
            "first_name": user.first_name,
            "last_name": user.last_name,
            "role": user.role,
            "organization": user.organization,
            "daily_query_limit": user.daily_query_limit,
            "date_joined": user.date_joined.isoformat(),
        }
    )


@swagger_auto_schema(
    method="post",
    operation_description="Login with email and password",
    request_body=openapi.Schema(
        type=openapi.TYPE_OBJECT,
        properties={
            "email": openapi.Schema(type=openapi.TYPE_STRING, format="email"),
            "password": openapi.Schema(type=openapi.TYPE_STRING),
        },
        required=["email", "password"],
    ),
    responses={
        200: "JWT tokens + user details",
        401: "Invalid credentials",
    },
    tags=["Authentication"],
)
@api_view(["POST"])
@permission_classes([AllowAny])
def login(request):
    """Login with email and password"""
    email = request.data.get("email")
    password = request.data.get("password")

    if not email or not password:
        return Response(
            {"error": "Email and password are required"},
            status=status.HTTP_400_BAD_REQUEST,
        )

    user = authenticate(email=email, password=password)
    if user is None:
        return Response(
            {"error": "Invalid credentials"}, status=status.HTTP_401_UNAUTHORIZED
        )

    refresh = RefreshToken.for_user(user)

    return Response(
        {
            "access": str(refresh.access_token),
            "refresh": str(refresh),
            "user": {
                "id": user.id,
                "email": user.email,
                "first_name": user.first_name,
                "last_name": user.last_name,
                "role": user.role,
                "organization": user.organization,
            },
        }
    )
