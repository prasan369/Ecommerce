import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container footer-content">
        <div className="footer-section brand">
          <h3 className="footer-logo">CH <span className="logo-accent">Electronics</span></h3>
          <p className="brand-desc">Your one-stop shop for premium electronics. Quality guaranteed.</p>
          <div className="social-links">
            <a href="https://www.facebook.com/" target='_blank' rel="noreferrer"><Facebook size={18} /></a>
            <a href="https://www.twitter.com/" target='_blank' rel="noreferrer"><Twitter size={18} /></a>
            <a href="https://www.instagram.com/" target='_blank' rel="noreferrer"><Instagram size={18} /></a>
            <a href="https://www.youtube.com/" target='_blank' rel="noreferrer"><Youtube size={18} /></a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#">About Us</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">Contact</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#">Shipping Policy</a></li>
            <li><a href="#">Returns & Refunds</a></li>
            <li><a href="#">Terms & Conditions</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <ul>
            <li><MapPin size={15} /> 123 Tech Street, Digital City</li>
            <li><Phone size={15} /> +1 (555) 123-4567</li>
            <li><Mail size={15} /> support@chelectronics.com</li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CH Electronics. All rights reserved.</p>
        </div>
      </div>

      <style>{`
        .footer {
          position: relative;
          background: #030305;
          border-top: 1px solid var(--border);
          padding-top: 5rem;
          margin-top: auto;
          overflow: hidden;
        }
        .footer-glow {
          position: absolute;
          top: -200px;
          left: 50%;
          transform: translateX(-50%);
          width: 600px;
          height: 400px;
          background: radial-gradient(ellipse, rgba(0, 229, 255, 0.04) 0%, transparent 70%);
          pointer-events: none;
        }
        .footer-content {
          position: relative;
          display: grid;
          grid-template-columns: 1.5fr 1fr 1fr 1fr;
          gap: 3rem;
          padding-bottom: 4rem;
        }
        @media (max-width: 900px) {
          .footer-content {
            grid-template-columns: 1fr 1fr;
            gap: 2.5rem;
          }
        }
        @media (max-width: 500px) {
          .footer-content {
            grid-template-columns: 1fr;
          }
        }
        .footer-logo {
          color: #fff;
          font-size: 1.35rem;
          font-weight: 800;
          margin: 0 0 1rem 0;
          letter-spacing: -0.02em;
        }
        .logo-accent {
          color: var(--primary);
        }
        .brand-desc {
          color: rgba(255, 255, 255, 0.4);
          line-height: 1.7;
          font-size: 0.875rem;
          margin: 0 0 1.5rem 0;
        }
        .social-links {
          display: flex;
          gap: 0.75rem;
        }
        .social-links a {
          color: rgba(255, 255, 255, 0.35);
          width: 36px;
          height: 36px;
          border-radius: 50%;
          border: 1px solid var(--border);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .social-links a:hover {
          color: var(--primary);
          border-color: var(--border-hover);
          background: rgba(0, 229, 255, 0.06);
          box-shadow: 0 0 12px rgba(0, 229, 255, 0.1);
        }
        .footer-section h4 {
          color: #fff;
          margin: 0 0 1.25rem 0;
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.75rem;
          font-size: 0.875rem;
          color: rgba(255, 255, 255, 0.35);
        }
        .footer-section a {
          color: rgba(255, 255, 255, 0.35);
          transition: all 0.3s ease;
          font-size: 0.875rem;
        }
        .footer-section a:hover {
          color: var(--primary);
        }
        .contact li {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }
        .footer-bottom {
          border-top: 1px solid var(--border);
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.25);
        }
        .footer-bottom p {
          margin: 0;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
