'use client';

import React from 'react';
import { useTheme } from './context/ThemeContext';
import { createStyles } from './utils/styles';

// ============================================================================
// ADMIN DASHBOARD HEADER
// ============================================================================
const Header = () => {
  const { isDark, toggleTheme } = useTheme();
  const styles = createStyles(isDark);

  return (
    <header className="sticky top-0 z-50 backdrop-blur-xl border-b" style={{
      borderColor: styles.theme.cardBorder,
      background: styles.theme.cardBg,
    }}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          
          {/* Logo and Title */}
          <div className="flex items-center gap-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-2xl font-bold"
              style={{
                background: styles.theme.gradients.primary,
                boxShadow: isDark 
                  ? '0 8px 16px rgba(99, 102, 241, 0.3)'
                  : '0 8px 16px rgba(59, 130, 246, 0.2)'
              }}
            >
              📊
            </div>
            <div>
              <h1 className="text-2xl font-bold" style={styles.gradientText}>
                Survey Explorer
              </h1>
              <p className="text-sm" style={{ color: styles.theme.textMuted }}>
                Advanced Analytics Dashboard
              </p>
            </div>
          </div>

          {/* Navigation and Theme Toggle */}
          <div className="flex items-center gap-6">
            
            {/* Status Indicator */}
            <div className="flex items-center gap-2">
              <div 
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: styles.theme.accent.success }}
              ></div>
              <span className="text-sm font-medium" style={{ color: styles.theme.textSecondary }}>
                System Online
              </span>
            </div>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-3 rounded-xl transition-all duration-300 hover:scale-105"
              style={{
                background: styles.theme.cardBg,
                border: `1px solid ${styles.theme.cardBorder}`,
                color: styles.theme.textPrimary,
                boxShadow: isDark 
                  ? '0 4px 12px rgba(0, 0, 0, 0.3)'
                  : '0 4px 12px rgba(0, 0, 0, 0.1)'
              }}
              title={`Switch to ${isDark ? 'light' : 'dark'} mode`}
            >
              <span className="text-lg">
                {isDark ? '☀️' : '🌙'}
              </span>
            </button>

            {/* User Avatar */}
            <div 
              className="w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold"
              style={{
                background: styles.theme.gradients.secondary,
                color: styles.theme.textPrimary,
                border: `2px solid ${styles.theme.cardBorder}`
              }}
            >
              👤
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
