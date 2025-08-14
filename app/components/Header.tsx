'use client';

import React, { useState } from 'react';
import { useTheme } from './context/ThemeContext';
import { useAuth } from './context/AuthContext';
import { createStyles } from './utils/styles';
import AuthModal from './auth/AuthModal';

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

            {/* Auth Section */}
            <AuthButton />

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
          </div>
        </div>
      </div>
    </header>
  );
};

// Auth Button Component
const AuthButton = () => {
  const { user, logout } = useAuth();
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [showUserMenu, setShowUserMenu] = useState(false);

  if (user) {
    return (
      <div className="relative">
        <button
          onClick={() => setShowUserMenu(!showUserMenu)}
          className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          <div className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-bold">
            {user.first_name ? user.first_name[0].toUpperCase() : user.email[0].toUpperCase()}
          </div>
          <span className="text-sm font-medium">{user.first_name || user.email}</span>
        </button>

        {showUserMenu && (
          <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border py-1 z-10">
            <div className="px-3 py-2 border-b">
              <p className="text-sm font-medium">{user.first_name} {user.last_name}</p>
              <p className="text-xs text-gray-500">{user.email}</p>
              <p className="text-xs text-blue-600">{user.role}</p>
            </div>
            <button
              onClick={() => {
                logout();
                setShowUserMenu(false);
              }}
              className="w-full text-left px-3 py-2 text-sm hover:bg-gray-100 text-red-600"
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setShowAuthModal(true)}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium"
      >
        Sign In
      </button>
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />
    </>
  );
};

export default Header;
