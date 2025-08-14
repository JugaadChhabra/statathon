'use client';

import React, { useState, useEffect } from 'react';
import { useTheme } from './context/ThemeContext';
import { createStyles } from './utils/styles';
import { SurveyFormData, ValidationErrors, SurveyMetadata, AnalysisStats } from '../types';
import { analyzeText, getAnalyses, getHealth, getSurveyDatasets } from './utils/api';


// Simple inline components
const InputValidation = ({ error }: { error?: string }) => (
  error ? <div className="text-red-500 text-sm mt-1">{error}</div> : null
);

const AnimatedButton = ({ 
  children, 
  loading, 
  style, 
  className, 
  onClick 
}: { 
  children: React.ReactNode; 
  loading: boolean; 
  style?: React.CSSProperties; 
  className?: string;
  onClick: () => void;
}) => (
  <button
    type="submit"
    disabled={loading}
    className={`transition-all duration-300 ${className || ''}`}
    style={style}
    onClick={onClick}
  >
    {children}
  </button>
);

// Stat card component for dashboard metrics
const StatCard = ({ 
  title, 
  value, 
  icon, 
  color, 
  subtitle 
}: { 
  title: string; 
  value: string | number; 
  icon: string; 
  color: string; 
  subtitle?: string; 
}) => {
  const { isDark } = useTheme();
  const styles = createStyles(isDark);
  
  return (
    <div 
      className="p-4 rounded-lg"
      style={styles.glassmorphCard(color)}
    >
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
          {title}
        </span>
        <span className="text-xl">{icon}</span>
      </div>
      <div className="text-2xl font-bold" style={{ color: styles.theme.textPrimary }}>
        {value}
      </div>
      {subtitle && (
        <div className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
          {subtitle}
        </div>
      )}
    </div>
  );
};

// ============================================================================
// ADMIN DASHBOARD SURVEY CONFIGURATION
// ============================================================================
interface AnalysisParametersFormProps {
  onAnalyze: (data: SurveyFormData) => void;
  loading: boolean;
  validationErrors: Record<string, string>;
}

const AnalysisParametersForm: React.FC<AnalysisParametersFormProps> = ({ onAnalyze, loading, validationErrors }) => {
  const { isDark } = useTheme();
  const styles = createStyles(isDark);
  
  // Form state management
  const [formData, setFormData] = useState<SurveyFormData>({
    surveyName: '',
    surveyYear: 2024,
    questionFilter: '',
    minResponses: 100,
    analysisType: 'summary',
    confidence: 95
  });
  
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [activeField, setActiveField] = useState<string | null>(null);
  const [stats, setStats] = useState<AnalysisStats | null>(null);
  const [selectedSurvey, setSelectedSurvey] = useState<SurveyMetadata | null>(null);
  const [availableSurveys, setAvailableSurveys] = useState<SurveyMetadata[]>([]);
  const [analysisTypes, setAnalysisTypes] = useState<Array<{ value: string; label: string; description: string }>>([]);

  // Load statistics and health on component mount
  useEffect(() => {
    const loadData = async () => {
      try {
        // Load recent analyses for statistics
        const analyses = await getAnalyses();
        const health = await getHealth();
        
        // Set statistics from backend data
        setStats({
          totalAnalyses: analyses.length,
          successRate: health ? 1.0 : 0.0,
          avgProcessingTime: 0,
          popularSurveys: [],
          recentActivity: []
        });

        // Load actual datasets from backend
        const datasets = await getSurveyDatasets();
        const surveys: SurveyMetadata[] = datasets.map((dataset, index) => ({
          id: dataset.id,
          name: dataset.name,
          year: 2023, // Default year, can be extracted from dataset name if needed
          responseCount: 1000 + index * 500, // Mock response count
          datasetSize: `${Math.round((index + 1) * 2.5)}MB`,
          description: `Survey data from ${dataset.file}`,
          tags: ['housing', 'expenditure', 'survey'],
          lastUpdated: '2024-01-15'
        }));
        
        setAvailableSurveys(surveys);
        setAnalysisTypes([
          { value: 'descriptive', label: 'Descriptive Analysis', description: 'Basic statistical summary' },
          { value: 'comparative', label: 'Comparative Analysis', description: 'Compare across groups' },
          { value: 'trend', label: 'Trend Analysis', description: 'Time-based patterns' },
          { value: 'correlation', label: 'Correlation Analysis', description: 'Variable relationships' }
        ]);
        
      } catch (error) {
        console.error('Failed to load data:', error);
        // Set fallback stats
        setStats({
          totalAnalyses: 0,
          successRate: 0,
          avgProcessingTime: 0,
          popularSurveys: [],
          recentActivity: []
        });
        setAvailableSurveys([]);
        setAnalysisTypes([]);
      }
    };
    
    loadData();
  }, []);

  // Update selected survey when survey name changes
  useEffect(() => {
    const survey = availableSurveys.find(s => s.name === formData.surveyName);
    setSelectedSurvey(survey || null);
    if (survey) {
      setFormData(prev => ({ ...prev, surveyYear: survey.year }));
    }
  }, [formData.surveyName, availableSurveys]);

  // Validation logic
  const validateForm = (): boolean => {
    const newErrors: ValidationErrors = {};
    
    if (!formData.surveyName.trim()) {
      newErrors.surveyName = 'Survey selection is required';
    }
    
    if (formData.minResponses < 50 || formData.minResponses > 10000) {
      newErrors.minResponses = 'Must be between 50 and 10,000';
    }
    
    if (formData.confidence < 90 || formData.confidence > 99) {
      newErrors.confidence = 'Must be between 90% and 99%';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      onAnalyze(formData);
    }
  };

  const handleInputChange = (field: keyof SurveyFormData, value: string | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  // Enhanced input component with admin styling
  const FormField = ({ 
    label, 
    children, 
    error, 
    icon 
  }: { 
    label: string; 
    children: React.ReactNode; 
    error?: string;
    icon?: string;
  }) => (
    <div className="space-y-3">
      <label style={styles.label} className="flex items-center gap-2">
        {icon && <span className="text-lg">{icon}</span>}
        {label}
      </label>
      {children}
      <InputValidation error={error} />
    </div>
  );

  // Enhanced stats cards
  const StatsCard = ({ title, value, icon, color }: { 
    title: string; 
    value: string | number; 
    icon: string;
    color: string;
  }) => (
    <div 
      style={styles.statsCard}
      className="group hover:scale-105 transition-all duration-300"
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
          {title}
        </span>
        <span className="text-xl" style={{ color }}>{icon}</span>
      </div>
      <div className="text-2xl font-bold" style={{ color: styles.theme.textPrimary }}>
        {value}
      </div>
    </div>
  );

  return (
    <div style={styles.dashboardContainer} className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Header Card */}
        <div 
          style={styles.glassmorphCard(styles.theme.accent.primary, 'elevated')}
          className="text-center"
        >
          <h1 className="text-4xl font-bold mb-4" style={styles.gradientText}>
            Survey Analysis Configuration
          </h1>
          <p className="text-lg" style={{ color: styles.theme.textSecondary }}>
            Configure your survey analysis parameters with precision and ease
          </p>
        </div>

        {/* Quick Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <StatCard 
            title="Available Surveys" 
            value={availableSurveys.length} 
            icon="📊" 
            color={styles.theme.accent.primary}
            subtitle="Backend datasets"
          />
          <StatCard 
            title="Total Analyses" 
            value={stats?.totalAnalyses || 0} 
            icon="�" 
            color={styles.theme.accent.success}
            subtitle="Completed successfully"
          />
          <StatCard 
            title="Success Rate" 
            value={`${((stats?.successRate || 0) * 100).toFixed(1)}%`} 
            icon="✅" 
            color={styles.theme.accent.warning}
            subtitle="Analysis reliability"
          />
          <StatCard 
            title="Avg Processing" 
            value={`${(stats?.avgProcessingTime || 0).toFixed(1)}s`} 
            icon="⚡" 
            color={styles.theme.accent.secondary}
            subtitle="Response time"
          />
        </div>

        {/* Main Configuration Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Survey Selection Card */}
          <div style={styles.glassmorphCard(styles.theme.accent.primary)}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">🔍</span>
              <h2 className="text-2xl font-bold" style={{ color: styles.theme.textPrimary }}>
                Survey Selection
              </h2>
            </div>
            
            <div className="space-y-6">
              <FormField label="Survey Dataset" icon="📋" error={errors.surveyName}>
                <select
                  style={{
                    ...styles.formInput,
                    borderColor: activeField === 'surveyName' 
                      ? styles.theme.accent.primary 
                      : styles.formInput.border,
                  }}
                  value={formData.surveyName}
                  onChange={(e) => handleInputChange('surveyName', e.target.value)}
                  onFocus={() => setActiveField('surveyName')}
                  onBlur={() => setActiveField(null)}
                  className="hover:border-opacity-60 focus:border-opacity-100"
                  title="Select survey dataset"
                >
                  <option value="">Select a survey...</option>
                  {availableSurveys.map(survey => (
                    <option key={survey.name} value={survey.name}>
                      {survey.name} ({survey.year}) - {survey.datasetSize}
                    </option>
                  ))}
                </select>
                {selectedSurvey && (
                  <div className="mt-2 p-3 rounded-lg bg-gray-100 dark:bg-gray-800">
                    <p className="text-sm" style={{ color: styles.theme.textSecondary }}>
                      <strong>{selectedSurvey.description}</strong>
                    </p>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {selectedSurvey.categories.map(category => (
                        <span 
                          key={category}
                          className="px-2 py-1 text-xs rounded-full bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200"
                        >
                          {category}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs mt-2" style={{ color: styles.theme.textSecondary }}>
                      {selectedSurvey.totalResponses.toLocaleString()} responses • Last updated: {selectedSurvey.lastUpdated}
                    </p>
                  </div>
                )}
              </FormField>

              <FormField label="Survey Year" icon="📅" error={errors.surveyYear}>
                <select
                  style={{
                    ...styles.formInput,
                    borderColor: activeField === 'surveyYear' 
                      ? styles.theme.accent.primary 
                      : styles.formInput.border,
                  }}
                  value={formData.surveyYear}
                  onChange={(e) => handleInputChange('surveyYear', parseInt(e.target.value))}
                  onFocus={() => setActiveField('surveyYear')}
                  onBlur={() => setActiveField(null)}
                  className="hover:border-opacity-60 focus:border-opacity-100"
                  title="Select survey year"
                  disabled={!!selectedSurvey} // Auto-set based on selected survey
                >
                  {selectedSurvey ? (
                    <option value={selectedSurvey.year}>{selectedSurvey.year}</option>
                  ) : (
                    <>
                      <option value={2024}>2024</option>
                      <option value={2023}>2023</option>
                      <option value={2022}>2022</option>
                      <option value={2021}>2021</option>
                      <option value={2020}>2020</option>
                    </>
                  )}
                </select>
                {selectedSurvey && (
                  <p className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
                    Year automatically set based on survey selection
                  </p>
                )}
              </FormField>
            </div>
          </div>

          {/* Analysis Parameters Card */}
          <div style={styles.glassmorphCard(styles.theme.accent.secondary)}>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-2xl">⚙️</span>
              <h2 className="text-2xl font-bold" style={{ color: styles.theme.textPrimary }}>
                Analysis Parameters
              </h2>
            </div>
            
            <div className="space-y-6">
              <FormField label="Analysis Type" icon="🎯" error={errors.analysisType}>
                <select
                  style={{
                    ...styles.formInput,
                    borderColor: activeField === 'analysisType' 
                      ? styles.theme.accent.secondary 
                      : styles.formInput.border,
                  }}
                  value={formData.analysisType}
                  onChange={(e) => handleInputChange('analysisType', e.target.value)}
                  onFocus={() => setActiveField('analysisType')}
                  onBlur={() => setActiveField(null)}
                  className="hover:border-opacity-60 focus:border-opacity-100"
                  title="Select analysis type"
                >
                  {analysisTypes.map(type => (
                    <option key={type.value} value={type.value}>
                      {type.label}
                    </option>
                  ))}
                </select>
                <p className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
                  {analysisTypes.find(t => t.value === formData.analysisType)?.description || 'Select an analysis type for details'}
                </p>
              </FormField>

              <FormField label="Minimum Responses" icon="📊" error={errors.minResponses}>
                <input
                  type="number"
                  style={{
                    ...styles.formInput,
                    borderColor: activeField === 'minResponses' 
                      ? styles.theme.accent.secondary 
                      : styles.formInput.border,
                  }}
                  value={formData.minResponses}
                  onChange={(e) => handleInputChange('minResponses', parseInt(e.target.value))}
                  onFocus={() => setActiveField('minResponses')}
                  onBlur={() => setActiveField(null)}
                  min="50"
                  max="10000"
                  step="50"
                  placeholder="Minimum sample size..."
                  className="hover:border-opacity-60 focus:border-opacity-100"
                />
              </FormField>
            </div>
          </div>
        </div>

        {/* Advanced Options Card */}
        <div style={styles.glassmorphCard(styles.theme.accent.success)}>
          <div className="flex items-center gap-3 mb-6">
            <span className="text-2xl">🔬</span>
            <h2 className="text-2xl font-bold" style={{ color: styles.theme.textPrimary }}>
              Advanced Configuration
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FormField label="Question Filter" icon="🔍" error={errors.questionFilter}>
              <input
                type="text"
                style={{
                  ...styles.formInput,
                  borderColor: activeField === 'questionFilter' 
                    ? styles.theme.accent.success 
                    : styles.formInput.border,
                }}
                value={formData.questionFilter}
                onChange={(e) => handleInputChange('questionFilter', e.target.value)}
                onFocus={() => setActiveField('questionFilter')}
                onBlur={() => setActiveField(null)}
                placeholder="Filter questions by keyword..."
                className="hover:border-opacity-60 focus:border-opacity-100"
              />
            </FormField>

            <FormField label="Confidence Level" icon="📈" error={errors.confidence}>
              <div className="space-y-2">
                <input
                  type="range"
                  min="90"
                  max="99"
                  value={formData.confidence}
                  onChange={(e) => handleInputChange('confidence', parseInt(e.target.value))}
                  className="w-full h-2 rounded-lg appearance-none cursor-pointer"
                  title={`Confidence level: ${formData.confidence}%`}
                  aria-label={`Confidence level: ${formData.confidence}%`}
                  style={{
                    background: `linear-gradient(to right, ${styles.theme.accent.success} 0%, ${styles.theme.accent.success} ${((formData.confidence - 90) / 9) * 100}%, ${styles.theme.cardBorder} ${((formData.confidence - 90) / 9) * 100}%, ${styles.theme.cardBorder} 100%)`
                  }}
                />
                <div className="flex justify-between text-sm" style={{ color: styles.theme.textSecondary }}>
                  <span>90%</span>
                  <span className="font-semibold" style={{ color: styles.theme.accent.success }}>
                    {formData.confidence}%
                  </span>
                  <span>99%</span>
                </div>
              </div>
            </FormField>
          </div>
        </div>

        {/* Action Card */}
        <div style={styles.glassmorphCard(null, 'elevated')} className="text-center">
          <form onSubmit={handleSubmit}>
            <AnimatedButton
              onClick={() => {}}
              loading={loading}
              className="text-lg px-12 py-4"
              style={styles.primaryButton}
            >
              {loading ? (
                <div className="flex items-center gap-3">
                  <div className="animate-spin w-5 h-5 border-2 border-white border-t-transparent rounded-full"></div>
                  Analyzing Data...
                </div>
              ) : (
                <div className="flex items-center gap-3">
                  <span>🚀</span>
                  Start Analysis
                </div>
              )}
            </AnimatedButton>
            
            {/* Display validation errors from parent component */}
            {validationErrors.general && (
              <div className="mt-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
                <p className="text-red-400 text-sm">{validationErrors.general}</p>
              </div>
            )}
          </form>
          
          <p className="mt-4 text-sm" style={{ color: styles.theme.textMuted }}>
            Analysis typically takes 30-60 seconds depending on dataset size
          </p>
        </div>
      </div>
    </div>
  );
};

export default AnalysisParametersForm;
