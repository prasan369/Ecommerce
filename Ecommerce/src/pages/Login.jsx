import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
import { Mail, Lock, Loader, ArrowRight } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });
        if (error) throw error;
        alert('Check your email for the login link!');
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });
        if (error) throw error;
        navigate('/');
      }
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      });
      if (error) throw error;
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-glow" />
      <div className="auth-card">
        <div className="auth-badge">
          <span className="badge-dot" />
          <span>CH ELECTRONICS</span>
        </div>
        <h1 className="auth-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
        <p className="auth-subtitle">
          {isSignUp ? 'Join CH Electronics today.' : 'Sign in to access your orders and profile.'}
        </p>

        {error && <div className="auth-error">{error}</div>}

        <div className="social-auth">
          <button className="social-btn" onClick={handleGoogleLogin}>
            <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill="#4285F4"></path>
              <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill="#34A853"></path>
              <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill="#FBBC05"></path>
              <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill="#EA4335"></path>
            </svg>
            Continue with Google
          </button>
        </div>

        <div className="divider">
          <span>Or continue with email</span>
        </div>

        <form onSubmit={handleAuth} className="auth-form">
          <div className="form-group">
            <label>Email</label>
            <div className="input-wrapper">
              <Mail size={16} className="input-icon" />
              <input
                type="email"
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
          </div>

          <div className="form-group">
            <label>Password</label>
            <div className="input-wrapper">
              <Lock size={16} className="input-icon" />
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
          </div>

          <button type="submit" className="auth-btn" disabled={loading}>
            {loading ? <Loader className="spin" size={18} /> : (isSignUp ? 'Sign Up' : 'Sign In')}
            {!loading && <ArrowRight size={16} />}
          </button>
        </form>

        <div className="auth-footer">
          <p>
            {isSignUp ? 'Already have an account?' : "Don't have an account?"}
            <button
              className="toggle-btn"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </div>
      </div>

      <style>{`
        .auth-page {
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
          position: relative;
          overflow: hidden;
          background: var(--background);
        }
        .auth-glow {
          position: absolute;
          width: 600px;
          height: 600px;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
          pointer-events: none;
        }
        .auth-card {
          position: relative;
          background: rgba(255, 255, 255, 0.02);
          padding: 3rem;
          border-radius: 12px;
          border: 1px solid var(--border);
          width: 100%;
          max-width: 420px;
          backdrop-filter: blur(20px);
        }
        .auth-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          font-size: 0.65rem;
          font-weight: 600;
          letter-spacing: 2px;
          color: var(--primary);
          margin-bottom: 1.5rem;
        }
        .badge-dot {
          width: 5px;
          height: 5px;
          background: var(--primary);
          border-radius: 50%;
          box-shadow: 0 0 8px rgba(0, 229, 255, 0.6);
        }
        .auth-title {
          margin: 0 0 0.5rem 0;
          font-size: 2rem;
          font-weight: 800;
          letter-spacing: -0.02em;
        }
        .auth-subtitle {
          color: rgba(255, 255, 255, 0.4);
          margin: 0 0 2rem 0;
          font-size: 0.9rem;
        }
        .auth-error {
          background: rgba(255, 59, 48, 0.08);
          color: #ff3b30;
          padding: 0.75rem 1rem;
          border-radius: 6px;
          margin-bottom: 1.5rem;
          font-size: 0.85rem;
          border: 1px solid rgba(255, 59, 48, 0.15);
        }
        .form-group {
          margin-bottom: 1.25rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.4rem;
          color: rgba(255, 255, 255, 0.5);
          font-size: 0.8rem;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background: rgba(255, 255, 255, 0.04);
          border: 1px solid var(--border);
          border-radius: 8px;
          color: #fff;
          font-size: 0.9rem;
          font-family: inherit;
          transition: all 0.3s ease;
        }
        .input-wrapper input::placeholder {
          color: rgba(255, 255, 255, 0.2);
        }
        .input-wrapper input:focus {
          border-color: var(--border-hover);
          outline: none;
          box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
          background: rgba(255, 255, 255, 0.06);
        }
        .input-icon {
          position: absolute;
          left: 12px;
          top: 50%;
          transform: translateY(-50%);
          color: rgba(255, 255, 255, 0.25);
        }
        .auth-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.85rem;
          font-weight: 600;
          margin-top: 0.5rem;
          background: var(--primary);
          color: var(--background);
          border-radius: 8px;
          font-size: 0.9rem;
          transition: all 0.3s ease;
          letter-spacing: 0.3px;
        }
        .auth-btn:hover:not(:disabled) {
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
          transform: translateY(-1px);
        }
        .auth-btn:disabled {
          opacity: 0.6;
        }
        .spin {
          animation: spin 1s linear infinite;
        }
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .auth-footer {
          margin-top: 2rem;
          text-align: center;
          color: rgba(255, 255, 255, 0.35);
          border-top: 1px solid var(--border);
          padding-top: 1.5rem;
          font-size: 0.875rem;
        }
        .auth-footer p {
          margin: 0;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
          font-size: 0.875rem;
          transition: opacity 0.2s;
        }
        .toggle-btn:hover {
          opacity: 0.8;
        }

        .social-auth {
           margin-bottom: 1.5rem;
        }
        .social-btn {
           width: 100%;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.75rem;
           padding: 0.8rem;
           border-radius: 8px;
           font-weight: 500;
           cursor: pointer;
           transition: all 0.3s ease;
           border: 1px solid var(--border);
           background: rgba(255, 255, 255, 0.04);
           color: #fff;
           font-size: 0.875rem;
           font-family: inherit;
        }
        .social-btn:hover {
           background: rgba(255, 255, 255, 0.08);
           border-color: rgba(255, 255, 255, 0.15);
        }
        
        .divider {
           display: flex;
           align-items: center;
           text-align: center;
           margin-bottom: 1.5rem;
           color: rgba(255, 255, 255, 0.25);
        }
        .divider::before, .divider::after {
           content: '';
           flex: 1;
           border-bottom: 1px solid var(--border);
        }
        .divider span {
           padding: 0 12px;
           font-size: 0.75rem;
           letter-spacing: 0.3px;
        }
      `}</style>
    </div>
  );
};

export default Login;
