'use client';

import React, { ReactNode, CSSProperties } from "react";
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../utils/styles';

// ============================================================================
// REUSABLE COMPONENTS
// ============================================================================

interface GlassCardProps {
  children: ReactNode;
  style?: CSSProperties;
  glowColor?: string | null;
  onHover?: boolean;
}

export const GlassCard = ({ children, style = {}, glowColor = null, onHover = true }: GlassCardProps) => {
  const { isDark } = useTheme();
  const styles = createStyles(isDark);
  const cardStyle = { ...styles.glassmorphCard(glowColor), ...style };

  const handleMouseEnter = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onHover) return;
    const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
    const element = e.currentTarget;
    element.style.transform = 'translateY(-4px) scale(1.01)';
    element.style.boxShadow = isDark 
      ? `0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(148, 163, 184, 0.2), 0 0 30px ${actualGlow}30`
      : `0 20px 40px rgba(59, 130, 246, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.5), 0 0 30px ${actualGlow}25`;
  };

  const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!onHover) return;
    const actualGlow = glowColor || (isDark ? '#6d28d9' : '#3b82f6');
    const element = e.currentTarget;
    element.style.transform = 'translateY(0) scale(1)';
    element.style.boxShadow = isDark 
      ? `0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1), 0 0 20px ${actualGlow}20`
      : `0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px rgba(255, 255, 255, 0.3), 0 0 20px ${actualGlow}15`;
  };

  return (
    <div 
      style={cardStyle}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        height: '1px',
        background: isDark 
          ? 'linear-gradient(90deg, transparent, rgba(148, 163, 184, 0.8), transparent)'
          : 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.9), transparent)',
        borderRadius: '20px 20px 0 0'
      }} />
      {children}
    </div>
  );
};

interface FormFieldProps {
  label: string;
  children: ReactNode;
  error?: string | null;
}

export const FormField = ({ label, children, error = null }: FormFieldProps) => {
  const { isDark } = useTheme();
  const styles = createStyles(isDark);

  return (
    <div>
      <label style={styles.label}>{label}</label>
      {children}
      {error && (
        <div style={{
          color: '#dc2626',
          fontSize: '0.875rem',
          marginTop: '8px',
          fontFamily: "'Inter', -apple-system, sans-serif"
        }}>
          {error}
        </div>
      )}
    </div>
  );
};

interface LoadingSpinnerProps {
  size?: string;
}

export const LoadingSpinner = ({ size = '20px' }: LoadingSpinnerProps) => (
  <div style={{
    width: size,
    height: size,
    border: '3px solid rgba(255, 255, 255, 0.3)',
    borderTop: '3px solid white',
    borderRadius: '50%',
    animation: 'spin 1s linear infinite'
  }} />
);

interface StatusBadgeProps {
  isValid: boolean;
  validText?: string;
  invalidText?: string;
}

export const StatusBadge = ({ isValid, validText = "Ready", invalidText = "Missing fields" }: StatusBadgeProps) => {
  return (
    <div style={{
      padding: '16px 24px',
      borderRadius: '24px',
      fontSize: '1rem',
      fontWeight: '700',
      fontFamily: "'Inter', -apple-system, sans-serif",
      background: isValid 
        ? 'linear-gradient(135deg, rgba(34, 197, 94, 0.2), rgba(34, 197, 94, 0.3))'
        : 'linear-gradient(135deg, rgba(239, 68, 68, 0.2), rgba(239, 68, 68, 0.3))',
      color: isValid ? '#059669' : '#dc2626',
      border: isValid 
        ? '2px solid rgba(34, 197, 94, 0.4)' 
        : '2px solid rgba(239, 68, 68, 0.4)',
      backdropFilter: 'blur(12px)',
      WebkitBackdropFilter: 'blur(12px)',
      display: 'flex',
      alignItems: 'center',
      gap: '12px',
      boxShadow: isValid
        ? '0 4px 16px rgba(34, 197, 94, 0.2)'
        : '0 4px 16px rgba(239, 68, 68, 0.2)'
    }}>
      {isValid ? `✅ ${validText}` : `⚠️ ${invalidText}`}
    </div>
  );
};
