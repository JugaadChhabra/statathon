'use client';

import React, { useState } from "react";
import { ThemeProvider } from './context/ThemeContext';
import Header from './Header';
import AnalysisParametersForm from './AnalysisParametersForm';
import AnalysisResults from './AnalysisResults';
import { SurveyFormData, AnalysisResult } from '../types';
import { analyzeText } from "./utils/api";

// ============================================================================
// MAIN SURVEY EXPLORER COMPONENT
// ============================================================================
const SurveyExplorerApp = () => {
  const [analysisResult, setAnalysisResult] = useState<AnalysisResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [validationErrors, setValidationErrors] = useState<Record<string, string>>({});

  const handleAnalyze = async (formData: SurveyFormData) => {
    setLoading(true);
    setValidationErrors({});
    
    try {
      // Create input text with survey parameters
      const input_text = `Survey Analysis Request: ${formData.surveyName} (${formData.surveyYear})`;
      
      // Prepare options object for Django backend
      const options = {
        survey_name: formData.surveyName,
        survey_year: formData.surveyYear,
        analysis_type: formData.analysisType,
        min_responses: formData.minResponses,
        confidence_level: formData.confidence,
        question_filter: formData.questionFilter || ''
      };
      
      // Call Django backend API
      const backendResult = await analyzeText(input_text, options);
      
      // Transform backend response to frontend AnalysisResult format
      const analysisResult: AnalysisResult = {
        id: backendResult.id,
        title: `${formData.surveyName} Analysis for ${formData.surveyYear}`,
        confidence: Math.round((backendResult.confidence || 0) * 100), // Convert 0.0-1.0 to percentage
        factors: backendResult.explanation_json?.top_factors || [],
        latency: backendResult.latency_ms || 0,
        timestamp: new Date(backendResult.created_at || new Date()).toLocaleString(),
        version: '2.1.0',
        summary: backendResult.explanation_json?.summary || backendResult.result,
        insights: backendResult.explanation_json?.insights || [],
        methodology: `Analysis conducted using ${formData.analysisType} approach with ${formData.confidence}% confidence level.`,
        dataQuality: backendResult.explanation_json?.dataQuality as AnalysisResult['dataQuality']
      };
      
      setAnalysisResult(analysisResult);
    } catch (error) {
      console.error('Analysis failed:', error);
      setValidationErrors({
        general: error instanceof Error ? error.message : 'Analysis failed. Please try again.'
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen relative overflow-hidden bg-gradient-to-br from-blue-400 via-purple-500 to-purple-600">
      {/* Animated Background Elements */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          background: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.1"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          animation: 'float 6s ease-in-out infinite'
        }}
      />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <Header />
        
        <main className="px-8 pb-16">
          <AnalysisParametersForm 
            onAnalyze={handleAnalyze}
            loading={loading}
            validationErrors={validationErrors}
          />
          
          {analysisResult && (
            <AnalysisResults result={analysisResult} />
          )}
        </main>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        * {
          box-sizing: border-box;
        }
        
        body {
          margin: 0;
          font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', sans-serif;
        }
      `}</style>
    </div>
  );
};

const SurveyExplorer = () => {
  return (
    <ThemeProvider>
      <SurveyExplorerApp />
    </ThemeProvider>
  );
};

export default SurveyExplorer;
