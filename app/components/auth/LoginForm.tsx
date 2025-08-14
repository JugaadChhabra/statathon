'use client';

import React, { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { createStyles } from '../utils/styles';

interface LoginFormProps {
  onSwitchToRegister: () => void;
  onClose?: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onSwitchToRegister, onClose }) => {
  const { login } = useAuth();
  const { theme } = useTheme();
  const styles = createStyles(theme);
  
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      await login(formData);
      onClose?.();
    } catch (err: any) {
      setError(err.message || 'Login failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="w-full max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6 text-center" style={{ color: styles.theme.textPrimary }}>
        Sign In
      </h2>
      
      {error && (
        <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: styles.theme.textPrimary }}>
            Email
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            style={{
              backgroundColor: styles.theme.backgroundSecondary,
              borderColor: styles.theme.border,
              color: styles.theme.textPrimary,
              focusRingColor: styles.theme.accent.primary
            }}
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" style={{ color: styles.theme.textPrimary }}>
            Password
          </label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2"
            style={{
              backgroundColor: styles.theme.backgroundSecondary,
              borderColor: styles.theme.border,
              color: styles.theme.textPrimary
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full py-2 px-4 rounded-md font-medium transition-colors"
          style={{
            backgroundColor: loading ? styles.theme.textSecondary : styles.theme.accent.primary,
            color: 'white'
          }}
        >
          {loading ? 'Signing in...' : 'Sign In'}
        </button>
      </form>

      <div className="mt-4 text-center">
        <span style={{ color: styles.theme.textSecondary }}>Don't have an account? </span>
        <button
          onClick={onSwitchToRegister}
          className="font-medium hover:underline"
          style={{ color: styles.theme.accent.primary }}
        >
          Sign up
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
