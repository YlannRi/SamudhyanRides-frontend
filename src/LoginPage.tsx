import React, { useState } from 'react';

type LoginPageProps = {
  onAuthSuccess?: () => void;
};

const LoginPage: React.FC<LoginPageProps> = ({ onAuthSuccess }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // For now we just mark the user as "logged in"
    if (onAuthSuccess) {
      onAuthSuccess();
    }
  };

  return (
    <div className="auth-wrapper">
      <h1 className="auth-title">Welcome back</h1>
      <p className="auth-subtitle">
        Sign in to manage your rides or create a new account.
      </p>

      <div className="auth-card">
        <div className="auth-toggle">
          <button
            type="button"
            className={`auth-toggle-button ${
              mode === 'login' ? 'auth-toggle-button-active' : ''
            }`}
            onClick={() => setMode('login')}
          >
            Log in
          </button>
          <button
            type="button"
            className={`auth-toggle-button ${
              mode === 'signup' ? 'auth-toggle-button-active' : ''
            }`}
            onClick={() => setMode('signup')}
          >
            Sign up
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {mode === 'signup' && (
            <>
              <div className="auth-field">
                <label className="auth-label" htmlFor="name">
                  Full name
                </label>
                <input
                  id="name"
                  type="text"
                  className="auth-input"
                  placeholder="Alex Doe"
                  required
                />
              </div>
            </>
          )}

          <div className="auth-field">
            <label className="auth-label" htmlFor="email">
              Email or university username
            </label>
            <input
              id="email"
              type="email"
              className="auth-input"
              placeholder="you@example.com"
              required
            />
          </div>

          <div className="auth-field">
            <label className="auth-label" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              className="auth-input"
              placeholder="Enter your password"
              required
            />
          </div>

          {mode === 'signup' && (
            <div className="auth-field">
              <label className="auth-label" htmlFor="confirm">
                Confirm password
              </label>
              <input
                id="confirm"
                type="password"
                className="auth-input"
                placeholder="Repeat your password"
                required
              />
            </div>
          )}

          {mode === 'login' && (
            <div className="auth-helper-row">
              <button type="button" className="auth-link-button">
                Forgot password?
              </button>
            </div>
          )}

          <button type="submit" className="auth-submit">
            {mode === 'login' ? 'Continue' : 'Create account'}
          </button>
        </form>

        <p className="auth-footer-text">
          By continuing, you agree to the terms and privacy policy.
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
