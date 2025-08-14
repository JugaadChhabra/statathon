// API utilities for Django backend integration
const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000';

export interface AnalysisOptions {
  survey_name?: string;
  surveyName?: string;
  survey_year?: number;
  surveyYear?: number;
  analysis_type?: string;
  analysisType?: string;
  min_responses?: number;
  minResponses?: number;
  confidence_level?: number;
  confidence?: number;
  question_filter?: string;
  questionFilter?: string;
}

export interface BackendAnalysisRequest {
  input_text: string;
  options?: {
    survey_name?: string;
    survey_year?: number;
    analysis_type?: string;
    min_responses?: number;
    confidence_level?: number;
    question_filter?: string;
  };
}

export interface BackendAnalysisResponse {
  id: number;
  input_text: string;
  result: string;
  confidence: number;
  explanation_json: {
    top_factors?: string[];
    summary?: string;
    insights?: string[];
    [key: string]: unknown;
  };
  latency_ms: number;
  created_at: string;
}

export interface Dataset {
  id: string;
  name: string;
  file: string;
}

export interface User {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  organization?: string;
}

export interface AuthResponse {
  access: string;
  refresh: string;
  user: User;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface RegisterRequest {
  email: string;
  password: string;
  first_name?: string;
  last_name?: string;
  organization?: string;
  role?: string;
}

export interface HealthStatus {
  status: string;
  version: string;
  services: {
    database: string;
    analysis_engine: string;
  };
}

// Main analysis endpoint - calls Django backend
export async function analyzeText(input_text: string, options: AnalysisOptions = {}): Promise<BackendAnalysisResponse> {
  try {
    const requestData: BackendAnalysisRequest = {
      input_text,
      options: {
        survey_name: options.survey_name || options.surveyName,
        survey_year: options.survey_year || options.surveyYear,
        analysis_type: options.analysis_type || options.analysisType,
        min_responses: options.min_responses || options.minResponses,
        confidence_level: options.confidence_level || options.confidence,
        question_filter: options.question_filter || options.questionFilter
      }
    };

    const token = localStorage.getItem('access_token');
    const headers: HeadersInit = {
      "Content-Type": "application/json",
      "Accept": "application/json"
    };
    
    if (token) {
      headers.Authorization = `Bearer ${token}`;
    }

    console.log('Making API request to:', `${API_BASE_URL}/analysis/analyze/`);
    console.log('Request data:', requestData);

    const response = await fetch(`${API_BASE_URL}/analysis/analyze/`, {
      method: "POST",
      headers,
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Try to refresh token
        const refreshed = await refreshToken();
        if (refreshed) {
          return analyzeText(input_text, options); // Retry with new token
        }
        throw new Error('Authentication required');
      }
      const errorText = await response.text();
      throw new Error(`API request failed: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const data = await response.json();
    console.log('API response:', data);
    return data;
  } catch (error) {
    console.error('Error in analyzeText:', error);
    throw error;
  }
}

// Get analysis history
export async function getAnalyses(): Promise<BackendAnalysisResponse[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/analysis/analyses/`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch analyses: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching analyses:', error);
    return [];
  }
}

// Health check endpoint
export async function getHealth(): Promise<HealthStatus | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/analysis/health/`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Health check failed: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error checking health:', error);
    return null;
  }
}

// Get available survey datasets
export async function getSurveyDatasets(): Promise<Dataset[]> {
  try {
    const response = await fetch(`${API_BASE_URL}/analysis/survey-datasets/`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch datasets: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error fetching datasets:', error);
    return [{
      id: "housing-expenditure",
      name: "Housing expenditure dataset",
      file: "LEVEL - 05 ( Sec 5 & 6).csv"
    }];
  }
}

// Auth functions
export async function login(credentials: LoginRequest): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/login/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(credentials)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Login failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Store tokens in localStorage
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
}

export async function register(userData: RegisterRequest): Promise<AuthResponse> {
  try {
    const response = await fetch(`${API_BASE_URL}/api/v1/auth/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || `Registration failed: ${response.status}`);
    }

    const data = await response.json();
    
    // Store tokens in localStorage
    localStorage.setItem('access_token', data.access);
    localStorage.setItem('refresh_token', data.refresh);
    localStorage.setItem('user', JSON.stringify(data.user));
    
    return data;
  } catch (error) {
    console.error('Error during registration:', error);
    throw error;
  }
}

export async function logout(): Promise<void> {
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
}

export async function getCurrentUser(): Promise<User | null> {
  try {
    const token = localStorage.getItem('access_token');
    if (!token) return null;

    const response = await fetch(`${API_BASE_URL}/api/v1/auth/profile/`, {
      method: "GET",
      headers: {
        "Accept": "application/json",
        "Authorization": `Bearer ${token}`
      }
    });

    if (!response.ok) {
      if (response.status === 401) {
        // Token expired, try to refresh
        const refreshed = await refreshToken();
        if (refreshed) {
          return getCurrentUser(); // Retry with new token
        }
        logout(); // Clear invalid tokens
        return null;
      }
      throw new Error(`Failed to get user profile: ${response.status}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error getting current user:', error);
    return null;
  }
}

export async function refreshToken(): Promise<boolean> {
  try {
    const refresh = localStorage.getItem('refresh_token');
    if (!refresh) return false;

    const response = await fetch(`${API_BASE_URL}/api/v1/auth/token/refresh/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({ refresh })
    });

    if (!response.ok) {
      logout(); // Clear invalid tokens
      return false;
    }

    const data = await response.json();
    localStorage.setItem('access_token', data.access);
    
    return true;
  } catch (error) {
    console.error('Error refreshing token:', error);
    logout(); // Clear invalid tokens
    return false;
  }
}

export function getStoredUser(): User | null {
  try {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
  } catch (error) {
    console.error('Error parsing stored user:', error);
    return null;
  }
}

export function isAuthenticated(): boolean {
  return !!localStorage.getItem('access_token');
}
