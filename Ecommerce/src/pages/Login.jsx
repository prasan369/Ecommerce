import React, { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { Mail, Lock, Loader, ArrowRight, Github } from 'lucide-react';

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
        <div className="auth-page container">
            <div className="auth-card">
                <h1 className="auth-title">{isSignUp ? 'Create Account' : 'Welcome Back'}</h1>
                <p className="auth-subtitle">
                    {isSignUp ? 'Join CH Electronics today.' : 'Sign in to access your orders and profile.'}
                </p>

                {error && <div className="auth-error">{error}</div>}

                <div className="social-auth">
                    <button className="social-btn google" onClick={handleGoogleLogin}>
                        <svg width="18" height="18" viewBox="0 0 18 18" xmlns="http://www.w3.org/2000/svg">
                            <path d="M17.64 9.2c0-.637-.057-1.251-.164-1.84H9v3.481h4.844a4.14 4.14 0 0 1-1.796 2.716v2.259h2.908c1.702-1.567 2.684-3.875 2.684-6.615z" fill-rule="evenodd" fill-opacity="1" fill="#4285F4" stroke="none"></path>
                            <path d="M9 18c2.43 0 4.467-.806 5.956-2.18L12.049 13.56c-.806.54-1.836.86-3.049.86-2.344 0-4.328-1.584-5.036-3.715H.957v2.332A8.997 8.997 0 0 0 9 18z" fill-rule="evenodd" fill-opacity="1" fill="#34A853" stroke="none"></path>
                            <path d="M3.964 10.71A5.41 5.41 0 0 1 3.682 9c0-.593.102-1.17.282-1.71V4.958H.957A8.996 8.996 0 0 0 0 9c0 1.452.348 2.827.957 4.042l3.007-2.332z" fill-rule="evenodd" fill-opacity="1" fill="#FBBC05" stroke="none"></path>
                            <path d="M9 3.58c1.321 0 2.508.454 3.44 1.345l2.582-2.58C13.463.891 11.426 0 9 0A8.997 8.997 0 0 0 .957 4.958L3.964 7.29C4.672 5.163 6.656 3.58 9 3.58z" fill-rule="evenodd" fill-opacity="1" fill="#EA4335" stroke="none"></path>
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
                            <Mail size={18} className="input-icon" />
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
                            <Lock size={18} className="input-icon" />
                            <input
                                type="password"
                                placeholder="••••••••"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <button type="submit" className="btn-primary auth-btn" disabled={loading}>
                        {loading ? <Loader className="spin" size={20} /> : (isSignUp ? 'Sign Up' : 'Sign In')}
                        {!loading && <ArrowRight size={18} />}
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
          min-height: 80vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem 1rem;
        }
        .auth-card {
          background: #111;
          padding: 2.5rem;
          border-radius: var(--radius);
          border: 1px solid #222;
          width: 100%;
          max-width: 450px;
        }
        .auth-title {
          margin: 0 0 0.5rem 0;
          text-align: center;
          font-size: 2rem;
        }
        .auth-subtitle {
          color: var(--text-muted);
          text-align: center;
          margin-bottom: 2rem;
        }
        .auth-error {
          background: rgba(217, 37, 10, 0.1);
          color: var(--alert);
          padding: 0.75rem;
          border-radius: 4px;
          margin-bottom: 1.5rem;
          font-size: 0.9rem;
          text-align: center;
        }
        .form-group {
          margin-bottom: 1.5rem;
        }
        .form-group label {
          display: block;
          margin-bottom: 0.5rem;
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        .input-wrapper {
          position: relative;
        }
        .input-wrapper input {
          width: 100%;
          padding: 0.75rem 0.75rem 0.75rem 2.5rem;
          background: #222;
          border: 1px solid #333;
          border-radius: 4px;
          color: #fff;
          font-size: 1rem;
        }
        .input-wrapper input:focus {
          border-color: var(--primary);
          outline: none;
        }
        .input-icon {
          position: absolute;
          left: 10px;
          top: 50%;
          transform: translateY(-50%);
          color: var(--text-muted);
        }
        .auth-btn {
          width: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.8rem;
          font-weight: 600;
          margin-top: 1rem;
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
          color: var(--text-muted);
          border-top: 1px solid #222;
          padding-top: 1.5rem;
        }
        .toggle-btn {
          background: none;
          border: none;
          color: var(--primary);
          font-weight: 600;
          cursor: pointer;
          margin-left: 0.5rem;
        }
        .toggle-btn:hover {
          text-decoration: underline;
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
           border-radius: 4px;
           font-weight: 500;
           cursor: pointer;
           transition: background-color 0.2s;
           border: 1px solid #333;
           background: #fff;
           color: #333;
        }
        .social-btn:hover {
           background: #f1f1f1;
        }
        
        .divider {
           display: flex;
           align-items: center;
           text-align: center;
           margin-bottom: 1.5rem;
           color: var(--text-muted);
        }
        .divider::before, .divider::after {
           content: '';
           flex: 1;
           border-bottom: 1px solid #333;
        }
        .divider span {
           padding: 0 10px;
           font-size: 0.8rem;
        }
      `}</style>
        </div>
    );
};

export default Login;
