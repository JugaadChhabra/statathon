'use client';

// ============================================================================
// ENHANCED ADMIN DASHBOARD THEME COLORS
// ============================================================================
const THEME_COLORS = {
  dark: {
    // Background gradients
    primaryBg: 'from-slate-900 via-purple-900 to-slate-900',
    secondaryBg: 'from-slate-800 via-slate-900 to-slate-800',
    
    // Card backgrounds
    cardBg: 'rgba(15, 23, 42, 0.8)',
    cardBorder: 'rgba(148, 163, 184, 0.2)',
    cardGlow: '#6366f1',
    
    // Text colors
    textPrimary: '#f8fafc',
    textSecondary: '#cbd5e1',
    textMuted: '#64748b',
    
    // Accent colors
    accent: {
      primary: '#6366f1',
      secondary: '#8b5cf6',
      success: '#10b981',
      warning: '#f59e0b',
      error: '#ef4444',
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #6366f1, #8b5cf6)',
      secondary: 'linear-gradient(135deg, #1e293b, #334155)',
      success: 'linear-gradient(135deg, #059669, #10b981)',
      glass: 'linear-gradient(135deg, rgba(15, 23, 42, 0.9), rgba(30, 41, 59, 0.8))',
    }
  },
  light: {
    // Background gradients
    primaryBg: 'from-slate-50 via-blue-50 to-slate-50',
    secondaryBg: 'from-white via-slate-50 to-white',
    
    // Card backgrounds
    cardBg: 'rgba(255, 255, 255, 0.9)',
    cardBorder: 'rgba(203, 213, 225, 0.3)',
    cardGlow: '#3b82f6',
    
    // Text colors
    textPrimary: '#1e293b',
    textSecondary: '#475569',
    textMuted: '#64748b',
    
    // Accent colors
    accent: {
      primary: '#3b82f6',
      secondary: '#6366f1',
      success: '#059669',
      warning: '#d97706',
      error: '#dc2626',
    },
    
    // Gradients
    gradients: {
      primary: 'linear-gradient(135deg, #3b82f6, #6366f1)',
      secondary: 'linear-gradient(135deg, #f8fafc, #e2e8f0)',
      success: 'linear-gradient(135deg, #059669, #10b981)',
      glass: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9), rgba(248, 250, 252, 0.8))',
    }
  }
};

// ============================================================================
// ENHANCED STYLES UTILITY
// ============================================================================
export const createStyles = (isDark: boolean) => {
  const theme = isDark ? THEME_COLORS.dark : THEME_COLORS.light;
  
  return {
    // Enhanced glass morphism card
    glassmorphCard: (glowColor: string | null = null, variant: 'default' | 'elevated' | 'flat' = 'default') => {
      const actualGlow = glowColor || theme.cardGlow;
      
      const variants = {
        default: {
          transform: 'translateY(0)',
          boxShadow: isDark 
            ? `0 8px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px ${theme.cardBorder}, 0 0 20px ${actualGlow}20`
            : `0 8px 32px rgba(59, 130, 246, 0.15), 0 0 0 1px ${theme.cardBorder}, 0 0 20px ${actualGlow}15`,
        },
        elevated: {
          transform: 'translateY(-2px)',
          boxShadow: isDark 
            ? `0 20px 40px rgba(0, 0, 0, 0.5), 0 0 0 1px ${theme.cardBorder}, 0 0 30px ${actualGlow}30`
            : `0 20px 40px rgba(59, 130, 246, 0.2), 0 0 0 1px ${theme.cardBorder}, 0 0 30px ${actualGlow}25`,
        },
        flat: {
          transform: 'translateY(0)',
          boxShadow: isDark 
            ? `0 4px 16px rgba(0, 0, 0, 0.3), 0 0 0 1px ${theme.cardBorder}`
            : `0 4px 16px rgba(59, 130, 246, 0.1), 0 0 0 1px ${theme.cardBorder}`,
        }
      };
      
      return {
        background: theme.cardBg,
        border: `1px solid ${theme.cardBorder}`,
        borderRadius: '24px',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        padding: '2rem',
        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        position: 'relative' as const,
        overflow: 'hidden' as const,
        ...variants[variant],
      };
    },
    
    // Enhanced form input with admin dashboard styling
    formInput: {
      width: '100%',
      padding: '16px 20px',
      borderRadius: '16px',
      border: `2px solid ${isDark ? 'rgba(99, 102, 241, 0.3)' : 'rgba(59, 130, 246, 0.3)'}`,
      background: theme.cardBg,
      color: theme.textPrimary,
      fontSize: '1rem',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      outline: 'none',
      fontFamily: "'Inter', -apple-system, sans-serif",
      fontWeight: '500',
      boxShadow: isDark 
        ? `inset 0 2px 4px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(99, 102, 241, 0.2)`
        : `inset 0 2px 4px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(59, 130, 246, 0.2)`,
    },
    
    // Enhanced label styling
    label: {
      display: 'block',
      marginBottom: '12px',
      fontWeight: '700',
      color: theme.textPrimary,
      fontSize: '1rem',
      fontFamily: "'Inter', -apple-system, sans-serif",
      textShadow: isDark ? '0 2px 4px rgba(0, 0, 0, 0.5)' : 'none',
      letterSpacing: '0.01em'
    },
    
    // Enhanced gradient text
    gradientText: {
      backgroundImage: isDark 
        ? 'linear-gradient(135deg, #ffffff, #e2e8f0)'
        : 'linear-gradient(135deg, #1e293b, #475569)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    
    // Admin dashboard specific styles
    dashboardContainer: {
      background: isDark 
        ? 'linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)'
        : 'linear-gradient(135deg, #f8fafc 0%, #e0e7ff 50%, #f8fafc 100%)',
      minHeight: '100vh',
      position: 'relative' as const,
    },
    
    sectionCard: {
      background: theme.cardBg,
      border: `1px solid ${theme.cardBorder}`,
      borderRadius: '20px',
      padding: '2rem',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      boxShadow: isDark 
        ? '0 8px 32px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(148, 163, 184, 0.1)'
        : '0 8px 32px rgba(59, 130, 246, 0.1), 0 0 0 1px rgba(203, 213, 225, 0.3)',
      transition: 'all 0.3s ease',
    },
    
    primaryButton: {
      background: theme.gradients.primary,
      color: 'white',
      border: 'none',
      borderRadius: '16px',
      padding: '16px 32px',
      fontSize: '1rem',
      fontWeight: '700',
      cursor: 'pointer',
      transition: 'all 0.3s ease',
      fontFamily: "'Inter', -apple-system, sans-serif",
      boxShadow: isDark 
        ? '0 8px 24px rgba(99, 102, 241, 0.4)'
        : '0 8px 24px rgba(59, 130, 246, 0.3)',
    },
    
    statsCard: {
      background: theme.cardBg,
      border: `1px solid ${theme.cardBorder}`,
      borderRadius: '16px',
      padding: '1.5rem',
      backdropFilter: 'blur(16px)',
      WebkitBackdropFilter: 'blur(16px)',
      boxShadow: isDark 
        ? '0 4px 16px rgba(0, 0, 0, 0.2)'
        : '0 4px 16px rgba(59, 130, 246, 0.1)',
    },
    
    // Theme colors accessor
    theme
  };
};