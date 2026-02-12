import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Featured products data - replace with your actual products
  const products = [
    {
      id: 1,
      name: 'Pro Max Phone',
      category: 'Smartphones',
      price: '$999',
      image: 'https://images.unsplash.com/photo-1592286927505-83aee7b08aa0?w=800&q=80',
      badge: 'New'
    },
    {
      id: 2,
      name: 'Ultra Laptop',
      category: 'Laptops',
      price: '$1,899',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      badge: 'Best Seller'
    },
    {
      id: 3,
      name: 'Wireless Buds',
      category: 'Audio',
      price: '$249',
      image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=800&q=80',
      badge: 'Hot'
    }
  ];

  // Auto-advance carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % products.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [products.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + products.length) % products.length);
  };

  return (
    <div className="hero-container">
      {/* Accent glow */}
      <div className="accent-glow" />
      
      <div className="hero-grid">
        {/* Left side - Content */}
        <div className="hero-content">
          <div className="hero-badge">
            <span className="badge-dot" />
            <span>FEATURED COLLECTION</span>
          </div>

          <h1 className="hero-title">
            Premium
            <br />
            Electronics
          </h1>

          <p className="hero-subtitle">
            Discover cutting-edge technology designed for those who demand 
            the best. Performance, quality, and innovation in every product.
          </p>

          <div className="hero-cta">
            <Link to="/products" className="cta-primary">
              <span>Shop Collection</span>
              <div className="cta-glow" />
            </Link>
            <Link to="/deals" className="cta-secondary">
              <span>View All Deals</span>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </Link>
          </div>

          {/* Carousel indicators */}
          <div className="carousel-dots">
            {products.map((_, index) => (
              <button
                key={index}
                className={`dot ${currentSlide === index ? 'active' : ''}`}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Right side - Carousel */}
        <div className="hero-carousel">
          <div className="carousel-wrapper">
            {/* Slides */}
            <div 
              className="carousel-track"
              style={{ transform: `translateX(-${currentSlide * 100}%)` }}
            >
              {products.map((product) => (
                <div key={product.id} className="carousel-slide">
                  <div className="product-card">
                    {/* Product glow */}
                    <div className="product-glow" />
                    
                    {/* Badge */}
                    <div className="product-badge">{product.badge}</div>
                    
                    {/* Product image */}
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="product-image"
                    />
                    
                    {/* Product info */}
                    <div className="product-info">
                      <div className="product-category">{product.category}</div>
                      <div className="product-name">{product.name}</div>
                      <div className="product-price">{product.price}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation arrows */}
            <button className="carousel-arrow prev" onClick={prevSlide} aria-label="Previous slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M15 18l-6-6 6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <button className="carousel-arrow next" onClick={nextSlide} aria-label="Next slide">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path d="M9 18l6-6-6-6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap');

        .hero-container {
          position: relative;
          min-height: 100vh;
          width: 100%;
          background: #050508;
          overflow: hidden;
        }

        /* Accent glow */
        .accent-glow {
          position: absolute;
          width: 1000px;
          height: 1000px;
          top: 50%;
          right: 20%;
          transform: translate(0, -50%);
          background: radial-gradient(circle, rgba(0, 229, 255, 0.06) 0%, transparent 70%);
          animation: glowPulse 8s ease-in-out infinite;
          pointer-events: none;
        }

        @keyframes glowPulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        /* Grid layout */
        .hero-grid {
          position: relative;
          z-index: 10;
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 100vh;
          max-width: 1600px;
          margin: 0 auto;
          align-items: center;
          gap: 4rem;
          padding: 2rem;
        }

        /* Left side - Content */
        .hero-content {
          padding: 2rem;
          animation: fadeInLeft 1s ease-out;
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        /* Badge */
        .hero-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(0, 229, 255, 0.8);
          margin-bottom: 2.5rem;
          animation: fadeInLeft 1s ease-out 0.2s both;
        }

        .badge-dot {
          width: 6px;
          height: 6px;
          background: #00e5ff;
          border-radius: 50%;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.8);
          animation: dotPulse 2s ease-in-out infinite;
        }

        @keyframes dotPulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }

        /* Title */
        .hero-title {
          font-family: 'Inter', sans-serif;
          font-size: clamp(3.5rem, 8vw, 7rem);
          font-weight: 900;
          line-height: 0.95;
          color: #ffffff;
          margin-bottom: 1.5rem;
          letter-spacing: -0.03em;
          animation: fadeInLeft 1s ease-out 0.3s both;
        }

        /* Subtitle */
        .hero-subtitle {
          font-family: 'Inter', sans-serif;
          font-size: 1.125rem;
          font-weight: 300;
          line-height: 1.7;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 3rem;
          max-width: 500px;
          animation: fadeInLeft 1s ease-out 0.4s both;
        }

        /* CTAs */
        .hero-cta {
          display: flex;
          gap: 1.5rem;
          align-items: center;
          flex-wrap: wrap;
          margin-bottom: 3rem;
          animation: fadeInLeft 1s ease-out 0.5s both;
        }

        .cta-primary {
          position: relative;
          display: inline-flex;
          align-items: center;
          padding: 1.25rem 3rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #050508;
          background: #00e5ff;
          text-decoration: none;
          transition: all 0.3s ease;
          overflow: hidden;
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.4);
        }

        .cta-primary:hover .cta-glow {
          opacity: 1;
        }

        .cta-glow {
          position: absolute;
          inset: -40px;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.6), transparent);
          filter: blur(30px);
          opacity: 0;
          transition: opacity 0.3s ease;
          pointer-events: none;
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2.5rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.9rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          color: #ffffff;
          background: transparent;
          border: 1px solid rgba(255, 255, 255, 0.15);
          text-decoration: none;
          transition: all 0.3s ease;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.05);
          border-color: rgba(0, 229, 255, 0.3);
          transform: translateX(4px);
        }

        .cta-secondary svg {
          transition: transform 0.3s ease;
        }

        .cta-secondary:hover svg {
          transform: translateX(4px);
        }

        /* Carousel dots */
        .carousel-dots {
          display: flex;
          gap: 0.75rem;
          animation: fadeInLeft 1s ease-out 0.6s both;
        }

        .dot {
          width: 40px;
          height: 3px;
          background: rgba(255, 255, 255, 0.2);
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          padding: 0;
        }

        .dot.active {
          background: #00e5ff;
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.6);
        }

        .dot:hover {
          background: rgba(0, 229, 255, 0.5);
        }

        /* Right side - Carousel */
        .hero-carousel {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          animation: fadeInRight 1s ease-out 0.4s both;
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(40px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .carousel-wrapper {
          position: relative;
          width: 100%;
          max-width: 600px;
          overflow: hidden;
        }

        .carousel-track {
          display: flex;
          transition: transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .carousel-slide {
          min-width: 100%;
          padding: 2rem;
        }

        /* Product card */
        .product-card {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .product-glow {
          position: absolute;
          inset: -20%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.15) 0%, transparent 70%);
          filter: blur(60px);
          opacity: 0.8;
          animation: productGlow 4s ease-in-out infinite;
        }

        @keyframes productGlow {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }

        .product-badge {
          position: absolute;
          top: 0;
          right: 10%;
          padding: 0.5rem 1.25rem;
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 1px;
          color: #050508;
          background: #00e5ff;
          text-transform: uppercase;
          z-index: 10;
        }

        .product-image {
          position: relative;
          width: 100%;
          height: auto;
          display: block;
          filter: drop-shadow(0 20px 60px rgba(0, 0, 0, 0.5));
          margin-bottom: 2rem;
        }

        .product-info {
          text-align: center;
          width: 100%;
        }

        .product-category {
          font-family: 'Inter', sans-serif;
          font-size: 0.75rem;
          font-weight: 500;
          letter-spacing: 2px;
          color: rgba(0, 229, 255, 0.7);
          text-transform: uppercase;
          margin-bottom: 0.5rem;
        }

        .product-name {
          font-family: 'Inter', sans-serif;
          font-size: 1.75rem;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 0.75rem;
        }

        .product-price {
          font-family: 'Inter', sans-serif;
          font-size: 1.25rem;
          font-weight: 600;
          color: rgba(255, 255, 255, 0.6);
        }

        /* Navigation arrows */
        .carousel-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: rgba(0, 229, 255, 0.1);
          border: 1px solid rgba(0, 229, 255, 0.3);
          color: #00e5ff;
          cursor: pointer;
          transition: all 0.3s ease;
          z-index: 20;
        }

        .carousel-arrow:hover {
          background: rgba(0, 229, 255, 0.2);
          transform: translateY(-50%) scale(1.1);
        }

        .carousel-arrow.prev {
          left: 0;
        }

        .carousel-arrow.next {
          right: 0;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .hero-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
            padding: 2rem 1rem;
          }

          .hero-content {
            padding: 1rem;
            text-align: center;
          }

          .hero-badge {
            justify-content: center;
          }

          .hero-subtitle {
            margin-left: auto;
            margin-right: auto;
          }

          .hero-cta {
            justify-content: center;
          }

          .carousel-dots {
            justify-content: center;
          }

          .hero-carousel {
            order: -1;
            min-height: 50vh;
          }
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 3rem;
          }

          .hero-subtitle {
            font-size: 1rem;
          }

          .hero-cta {
            flex-direction: column;
            width: 100%;
          }

          .cta-primary,
          .cta-secondary {
            width: 100%;
            justify-content: center;
          }

          .carousel-slide {
            padding: 1rem;
          }

          .product-name {
            font-size: 1.5rem;
          }

          .carousel-arrow {
            width: 40px;
            height: 40px;
          }
        }
      `}</style>
    </div>
  );
};

export default Hero;