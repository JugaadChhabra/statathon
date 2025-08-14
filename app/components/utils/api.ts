// API utilities for Django backend integration
// Based on Django backend structure in statathon project
// Backend endpoints: /api/v1/analyze/, /api/v1/analyses/, /api/v1/health/

const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL || 'http://localhost:8000/api/v1';

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

    console.log('Making API request to:', `${API_BASE_URL}/analyze/`);
    console.log('Request data:', requestData);

    const response = await fetch(`${API_BASE_URL}/analyze/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify(requestData)
    });

    if (!response.ok) {
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
    const response = await fetch(`${API_BASE_URL}/analyses/`, {
      method: "GET",
      headers: {
        "Accept": "application/json"
      }
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch analyses: ${response.status}`);
    }

    const data = await response.json();
    // Django typically returns paginated results
    return data.results || data;
  } catch (error) {
    console.error('Error fetching analyses:', error);
    return [];
  }
}

// Health check endpoint
export async function getHealth(): Promise<HealthStatus | null> {
  try {
    const response = await fetch(`${API_BASE_URL}/health/`, {
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
