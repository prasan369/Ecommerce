import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';

import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cartItems, user } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          CH <span className="highlight">Electronics</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Navigation & Search */}
        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <div className="search-bar">
            {/* Search Input will go here */}
            <div className="search-input-wrapper">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="Search products..." />
            </div>
          </div>

          <nav className="main-nav">
            <Link to="/category/smartphones">Smartphones</Link>
            <Link to="/category/audio">Audio</Link>
            <Link to="/category/accessories">Accessories</Link>
            <Link to="/deals" className="highlight-text">Daily Deals</Link>
          </nav>
        </div>

        {/* Actions */}
        <div className="header-actions">
          <Link to="/cart" className="action-btn">
            <ShoppingCart size={24} />
            {cartCount > 0 && <span className="badge">{cartCount}</span>}
          </Link>
          <Link to={user ? "/profile" : "/login"} className="action-btn">
            {user ? (
              <div className="user-avatar-small" style={{ width: '24px', height: '24px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', color: '#fff', fontWeight: 'bold' }}>
                {user.email[0].toUpperCase()}
              </div>
            ) : (
              <User size={24} />
            )}
          </Link>
        </div>
      </div>

      <style>{`
        .header {
          background-color: var(--background);
          border-bottom: 1px solid #222;
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-main);
          text-decoration: none;
        }
        .highlight {
          color: var(--primary);
        }
        .highlight-text {
          color: var(--primary);
          font-weight: 600;
        }
        
        /* Search */
        .search-bar {
          flex: 1;
          max-width: 400px;
          margin: 0 2rem;
        }
        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-input-wrapper input {
          width: 100%;
          padding: 0.5rem 1rem 0.5rem 2.5rem;
          border-radius: var(--radius);
          border: 1px solid #333;
          background-color: #111;
          color: var(--text-main);
        }
        .search-icon {
          position: absolute;
          left: 0.75rem;
          color: var(--text-muted);
        }

        /* Nav */
        .nav-wrapper {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: space-between;
        }
        .main-nav {
          display: flex;
          gap: 1.5rem;
        }
        .main-nav a {
          color: var(--text-main);
          font-weight: 500;
        }
        .main-nav a:hover {
          color: var(--primary);
        }

        /* Actions */
        .header-actions {
          display: flex;
          gap: 1rem;
          align-items: center;
        }
        .action-btn {
          color: var(--text-main);
          position: relative;
          display: flex;
          align-items: center;
        }
        .action-btn:hover {
          color: var(--primary);
        }
        .badge {
          position: absolute;
          top: -8px;
          right: -8px;
          background-color: var(--primary);
          color: #fff;
          font-size: 0.75rem;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        
        .mobile-menu-btn {
            display: none;
            background: none;
            color: var(--text-main);
            padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: block;
          }
          .nav-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background-color: var(--background);
            flex-direction: column;
            padding: 1rem;
            display: none;
            border-bottom: 1px solid #222;
          }
          .nav-wrapper.open {
            display: flex;
          }
          .search-bar {
            margin: 0 0 1rem 0;
            width: 100%;
            max-width: none;
          }
          .main-nav {
            flex-direction: column;
            width: 100%;
            gap: 1rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
