import React from 'react';
import { Facebook, Twitter, Instagram, Youtube, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container footer-content">
                <div className="footer-section brand">
                    <h3 className="footer-logo">CH <span className="highlight">Electronics</span></h3>
                    <p>Your one-stop shop for premium electronics. Quality guaranteed.</p>
                    <div className="social-links">
                        <a href="#"><Facebook size={20} /></a>
                        <a href="#"><Twitter size={20} /></a>
                        <a href="#"><Instagram size={20} /></a>
                        <a href="#"><Youtube size={20} /></a>
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
                        <li><MapPin size={16} /> 123 Tech Street, Digital City</li>
                        <li><Phone size={16} /> +1 (555) 123-4567</li>
                        <li><Mail size={16} /> support@chelectronics.com</li>
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
          background-color: #0a0a0a;
          border-top: 1px solid #222;
          padding-top: 4rem;
          margin-top: auto;
          color: var(--text-muted);
        }
        .footer-content {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 2rem;
          padding-bottom: 3rem;
        }
        .footer-logo {
          color: var(--text-main);
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }
        .brand p {
          margin-bottom: 1.5rem;
          line-height: 1.6;
        }
        .social-links {
          display: flex;
          gap: 1rem;
        }
        .social-links a {
          color: var(--text-muted);
          transition: color 0.3s;
        }
        .social-links a:hover {
          color: var(--primary);
        }
        .footer-section h4 {
          color: var(--text-main);
          margin-bottom: 1.25rem;
          font-size: 1.1rem;
        }
        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .footer-section li {
          margin-bottom: 0.75rem;
        }
        .footer-section a {
          color: var(--text-muted);
          transition: color 0.3s;
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
          background-color: #000;
          padding: 1.5rem 0;
          text-align: center;
          font-size: 0.9rem;
          border-top: 1px solid #111;
        }
      `}</style>
        </footer>
    );
};

export default Footer;
