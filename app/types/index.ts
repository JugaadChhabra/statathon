// Survey form data structure
export interface SurveyFormData {
  surveyName: string;
  surveyYear: number;
  questionFilter: string;
  minResponses: number;
  analysisType: 'summary' | 'detailed' | 'comparative' | 'statistical';
  confidence: number;
}

// Analysis result structure to match Django backend response
export interface AnalysisResult {
  id?: number;
  title: string;
  confidence: number;
  factors: string[];
  latency: number;
  timestamp: string;
  version: string;
  summary?: string;
  insights?: string[];
  methodology?: string;
  dataQuality?: {
    sampleSize: number;
    responseRate: number;
    completeness: number;
  };
}

// Form validation errors
export interface ValidationErrors {
  [key: string]: string | undefined;
}

// Survey metadata (for dropdown options)
export interface SurveyMetadata {
  name: string;
  year: number;
  description: string;
  totalResponses: number;
  datasetSize: string;
  lastUpdated: string;
  categories: string[];
}

// Analysis statistics for dashboard
export interface AnalysisStats {
  totalAnalyses: number;
  successRate: number;
  avgProcessingTime: number;
  popularSurveys: string[];
  recentActivity: {
    date: string;
    count: number;
  }[];
}
