import React from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-content container">
                <h1 className="hero-title">
                    Next-Gen <br />
                    <span className="highlight">Tech Is Here</span>
                </h1>
                <p className="hero-subtitle">
                    Experience the future with our curated collection of premium electronics.
                    Unbeatable performance, stunning design.
                </p>
                <div className="hero-actions">
                    <Link to="/category/smartphones" className="btn btn-primary">
                        Shop Latest
                    </Link>
                    <Link to="/deals" className="btn btn-outline">
                        View Deals
                    </Link>
                </div>
            </div>

            {/* Background Image Overlay */}
            <div className="hero-overlay"></div>

            <style>{`
        .hero {
          position: relative;
          height: 500px; /* Adjust height as needed */
          display: flex;
          align-items: center;
          overflow: hidden;
          background-image: url('/assets/hero_banner.png'); /* Assumes image is placed here */
          background-size: cover;
          background-position: center;
          margin-bottom: 2rem;
        }

        .hero-overlay {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(90deg, #000 0%, rgba(0,0,0,0.6) 50%, rgba(0,0,0,0) 100%);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          width: 100%;
          max-width: 600px;
        }

        .hero-title {
          font-size: 3.5rem;
          font-weight: 800;
          line-height: 1.1;
          margin-bottom: 1rem;
          color: #fff;
        }

        .hero-subtitle {
          font-size: 1.1rem;
          color: #ccc;
          margin-bottom: 2rem;
          line-height: 1.6;
        }

        .hero-actions {
          display: flex;
          gap: 1rem;
        }

        .btn {
          padding: 0.8rem 2rem;
          border-radius: var(--radius);
          font-weight: 600;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-block;
        }

        .btn-primary {
          background-color: var(--primary);
          color: #fff;
          border: 1px solid var(--primary);
        }

        .btn-primary:hover {
          background-color: var(--primary-hover);
          border-color: var(--primary-hover);
        }

        .btn-outline {
          background-color: transparent;
          color: #fff;
          border: 1px solid #fff;
        }

        .btn-outline:hover {
          background-color: #fff;
          color: #000;
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero {
            height: 400px;
            background-position: center right;
          }
          .hero-content {
              padding: 0 1rem;
          }
        }
      `}</style>
        </section>
    );
};

export default Hero;
