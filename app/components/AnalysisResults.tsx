'use client';

import React from "react";
import { useTheme } from './context/ThemeContext';
import { createStyles } from './utils/styles';
import { GlassCard } from './shared/SharedComponents';
import { AnalysisResult } from '../types';

interface AnalysisResultsProps {
  result: AnalysisResult | null;
}

// ============================================================================
// ANALYSIS RESULTS COMPONENT
// ============================================================================
const AnalysisResults = ({ result }: AnalysisResultsProps) => {
  const { isDark } = useTheme();
  const styles = createStyles(isDark);

  // Handle empty/undefined data gracefully
  if (!result) return null;

  const {
    title = 'Analysis Results',
    confidence = 0,
    factors = [],
    latency = 0,
    timestamp = new Date().toLocaleString(),
    version = '1.0.0',
    summary,
    insights = [],
    methodology,
    dataQuality
  } = result;

  return (
    <div className="space-y-6">
      {/* Main Results Card */}
      <GlassCard style={{ marginBottom: '2rem' }} glowColor={isDark ? '#10b981' : '#059669'}>
        <h3 
          className="m-0 mb-6 text-2xl font-bold flex items-center gap-3"
          style={{ 
            fontFamily: "'Inter', -apple-system, sans-serif",
            ...styles.gradientText,
            textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none'
          }}
        >
          📊 {title}
        </h3>

        {/* Analysis Summary */}
        {summary && (
          <div className="mb-6 p-4 rounded-lg" style={{ backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(5, 150, 105, 0.1)' }}>
            <h4 className="text-lg font-semibold mb-2" style={{ color: styles.theme.textPrimary }}>
              Executive Summary
            </h4>
            <p className="text-sm leading-relaxed" style={{ color: styles.theme.textSecondary }}>
              {summary}
            </p>
          </div>
        )}

        {/* Key Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="p-4 rounded-lg" style={{ backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)' }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
                Confidence Score
              </span>
              <span className="text-xl">🎯</span>
            </div>
            <div className="text-2xl font-bold" style={{ color: styles.theme.accent.primary }}>
              {confidence}%
            </div>
            <div className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
              Statistical reliability
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: isDark ? 'rgba(168, 85, 247, 0.1)' : 'rgba(147, 51, 234, 0.1)' }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
                Processing Time
              </span>
              <span className="text-xl">⚡</span>
            </div>
            <div className="text-2xl font-bold" style={{ color: styles.theme.accent.secondary }}>
              {latency}s
            </div>
            <div className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
              Analysis duration
            </div>
          </div>

          <div className="p-4 rounded-lg" style={{ backgroundColor: isDark ? 'rgba(16, 185, 129, 0.1)' : 'rgba(5, 150, 105, 0.1)' }}>
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
                Factors Identified
              </span>
              <span className="text-xl">🔍</span>
            </div>
            <div className="text-2xl font-bold" style={{ color: styles.theme.accent.success }}>
              {factors.length}
            </div>
            <div className="text-xs mt-1" style={{ color: styles.theme.textSecondary }}>
              Key findings
            </div>
          </div>
        </div>
      </GlassCard>

      {/* Key Factors */}
      {factors.length > 0 && (
        <GlassCard glowColor={isDark ? '#3b82f6' : '#2563eb'}>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: styles.theme.textPrimary }}>
            🔑 Key Factors
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {factors.map((factor, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg border-l-4"
                style={{ 
                  backgroundColor: isDark ? 'rgba(59, 130, 246, 0.1)' : 'rgba(37, 99, 235, 0.1)',
                  borderLeftColor: styles.theme.accent.primary
                }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">📌</span>
                  <span className="text-sm" style={{ color: styles.theme.textPrimary }}>
                    {factor}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Insights */}
      {insights.length > 0 && (
        <GlassCard glowColor={isDark ? '#8b5cf6' : '#7c3aed'}>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: styles.theme.textPrimary }}>
            💡 Key Insights
          </h4>
          <div className="space-y-3">
            {insights.map((insight, index) => (
              <div 
                key={index}
                className="p-3 rounded-lg"
                style={{ backgroundColor: isDark ? 'rgba(139, 92, 246, 0.1)' : 'rgba(124, 58, 237, 0.1)' }}
              >
                <div className="flex items-start gap-2">
                  <span className="text-lg">🎯</span>
                  <span className="text-sm" style={{ color: styles.theme.textPrimary }}>
                    {insight}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </GlassCard>
      )}

      {/* Data Quality Metrics */}
      {dataQuality && (
        <GlassCard glowColor={isDark ? '#10b981' : '#059669'}>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: styles.theme.textPrimary }}>
            📈 Data Quality Assessment
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: styles.theme.accent.success }}>
                {dataQuality.sampleSize.toLocaleString()}
              </div>
              <div className="text-sm" style={{ color: styles.theme.textSecondary }}>
                Sample Size
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: styles.theme.accent.success }}>
                {(dataQuality.responseRate * 100).toFixed(1)}%
              </div>
              <div className="text-sm" style={{ color: styles.theme.textSecondary }}>
                Response Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold" style={{ color: styles.theme.accent.success }}>
                {(dataQuality.completeness * 100).toFixed(1)}%
              </div>
              <div className="text-sm" style={{ color: styles.theme.textSecondary }}>
                Data Completeness
              </div>
            </div>
          </div>
        </GlassCard>
      )}

      {/* Methodology */}
      {methodology && (
        <GlassCard glowColor={isDark ? '#6366f1' : '#4f46e5'}>
          <h4 className="text-xl font-bold mb-4 flex items-center gap-2" style={{ color: styles.theme.textPrimary }}>
            🔬 Methodology
          </h4>
          <div className="p-4 rounded-lg" style={{ backgroundColor: isDark ? 'rgba(99, 102, 241, 0.1)' : 'rgba(79, 70, 229, 0.1)' }}>
            <p className="text-sm leading-relaxed" style={{ color: styles.theme.textSecondary }}>
              {methodology}
            </p>
          </div>
        </GlassCard>
      )}

      {/* Analysis Metadata */}
      <GlassCard>
        <h4 className="text-lg font-semibold mb-3 flex items-center gap-2" style={{ color: styles.theme.textPrimary }}>
          ℹ️ Analysis Metadata
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <span style={{ color: styles.theme.textSecondary }}>Completed: </span>
            <span style={{ color: styles.theme.textPrimary }}>{timestamp}</span>
          </div>
          <div>
            <span style={{ color: styles.theme.textSecondary }}>Version: </span>
            <span style={{ color: styles.theme.textPrimary }}>{version}</span>
          </div>
        </div>
      </GlassCard>
    </div>
  );
};

export default AnalysisResults;
