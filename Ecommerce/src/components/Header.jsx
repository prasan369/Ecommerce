import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ShoppingCart, User, Search, Menu, X } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';
import { useCart } from '../context/CartContext';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [activeSuggestion, setActiveSuggestion] = useState(-1);
  const navigate = useNavigate();
  const { cartItems, user } = useCart();
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);
  const searchRef = useRef(null);
  const debounceRef = useRef(null);

  // Debounced search
  useEffect(() => {
    if (debounceRef.current) clearTimeout(debounceRef.current);

    if (searchQuery.trim().length < 2) {
      setSuggestions([]);
      setShowSuggestions(false);
      return;
    }

    debounceRef.current = setTimeout(async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id, name, price, sale_price, images, image_url')
          .ilike('name', `%${searchQuery.trim()}%`)
          .limit(6);

        if (error) throw error;

        const mapped = (data || []).map(p => ({
          ...p,
          image: p.images && p.images.length > 0 ? p.images[0] : p.image_url || '',
          displayPrice: p.sale_price ? parseFloat(p.sale_price) : parseFloat(p.price),
        }));

        setSuggestions(mapped);
        setShowSuggestions(mapped.length > 0);
        setActiveSuggestion(-1);
      } catch (err) {
        console.error('Search error:', err);
      }
    }, 300);

    return () => clearTimeout(debounceRef.current);
  }, [searchQuery]);

  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setShowSuggestions(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    const trimmed = searchQuery.trim();
    if (trimmed) {
      navigate(`/category/all?search=${encodeURIComponent(trimmed)}`);
      setSearchQuery('');
      setShowSuggestions(false);
      setIsMenuOpen(false);
    }
  };

  const handleSuggestionClick = (product) => {
    navigate(`/product/${product.id}`);
    setSearchQuery('');
    setShowSuggestions(false);
    setIsMenuOpen(false);
  };

  const handleKeyDown = (e) => {
    if (!showSuggestions) return;

    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActiveSuggestion(prev => Math.min(prev + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActiveSuggestion(prev => Math.max(prev - 1, -1));
    } else if (e.key === 'Enter' && activeSuggestion >= 0) {
      e.preventDefault();
      handleSuggestionClick(suggestions[activeSuggestion]);
    }
  };

  return (
    <header className="header">
      <div className="container header-container">
        {/* Logo */}
        <Link to="/" className="logo">
          CH <span className="logo-accent">Electronics</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <button
          className="mobile-menu-btn"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

        {/* Search */}
        <div className={`nav-wrapper ${isMenuOpen ? 'open' : ''}`}>
          <form className="search-bar" onSubmit={handleSearch} ref={searchRef}>
            <div className="search-input-wrapper">
              <Search className="search-icon" size={18} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => suggestions.length > 0 && setShowSuggestions(true)}
                onKeyDown={handleKeyDown}
                autoComplete="off"
              />
            </div>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div className="suggestions-dropdown">
                {suggestions.map((product, index) => (
                  <button
                    key={product.id}
                    type="button"
                    className={`suggestion-item ${index === activeSuggestion ? 'active' : ''}`}
                    onClick={() => handleSuggestionClick(product)}
                    onMouseEnter={() => setActiveSuggestion(index)}
                  >
                    <div className="suggestion-img">
                      {product.image ? (
                        <img src={product.image} alt="" />
                      ) : (
                        <div className="img-placeholder" />
                      )}
                    </div>
                    <div className="suggestion-info">
                      <span className="suggestion-name">{product.name}</span>
                      <span className="suggestion-price">${product.displayPrice.toFixed(2)}</span>
                    </div>
                  </button>
                ))}
                <button
                  type="submit"
                  className="suggestion-view-all"
                  onClick={handleSearch}
                >
                  View all results for "{searchQuery}"
                </button>
              </div>
            )}
          </form>
        </div>

        {/* Actions */}
        <div className="header-actions">
          <Link to="/cart" className="action-btn">
            <ShoppingCart size={22} />
            {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
          </Link>
          <Link to={user ? "/profile" : "/login"} className="action-btn">
            {user ? (
              <div className="user-avatar">
                {user.email[0].toUpperCase()}
              </div>
            ) : (
              <User size={22} />
            )}
          </Link>
        </div>
      </div>

      <style>{`
        .header {
          background: rgba(5, 5, 8, 0.85);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-bottom: 1px solid var(--border);
          padding: 1rem 0;
          position: sticky;
          top: 0;
          z-index: 100;
        }
        .header-container {
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1.5rem;
        }
        .logo {
          font-size: 1.35rem;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.02em;
          white-space: nowrap;
        }
        .logo-accent {
          color: var(--primary);
        }
        
        /* Search */
        .search-bar {
          flex: 1;
          max-width: 420px;
          position: relative;
        }
        .search-input-wrapper {
          position: relative;
          display: flex;
          align-items: center;
        }
        .search-input-wrapper input {
          width: 100%;
          padding: 0.6rem 1rem 0.6rem 2.5rem;
          border-radius: 40px;
          border: 1px solid var(--border);
          background: rgba(255, 255, 255, 0.04);
          color: #fff;
          font-size: 0.875rem;
          transition: all 0.3s ease;
          font-family: inherit;
        }
        .search-input-wrapper input::placeholder {
          color: rgba(255, 255, 255, 0.3);
        }
        .search-input-wrapper input:focus {
          outline: none;
          border-color: var(--border-hover);
          background: rgba(255, 255, 255, 0.06);
          box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
        }
        .search-icon {
          position: absolute;
          left: 0.85rem;
          color: rgba(255, 255, 255, 0.3);
          pointer-events: none;
        }

        /* Suggestions Dropdown */
        .suggestions-dropdown {
          position: absolute;
          top: calc(100% + 6px);
          left: 0;
          right: 0;
          background: rgba(12, 12, 18, 0.98);
          backdrop-filter: blur(24px);
          border: 1px solid var(--border);
          border-radius: 12px;
          overflow: hidden;
          z-index: 200;
          box-shadow: 0 16px 48px rgba(0, 0, 0, 0.5);
          animation: dropIn 0.2s ease;
        }
        @keyframes dropIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .suggestion-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          width: 100%;
          padding: 0.7rem 1rem;
          background: none;
          border: none;
          color: #fff;
          text-align: left;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: inherit;
          font-size: 0.875rem;
        }
        .suggestion-item:hover,
        .suggestion-item.active {
          background: rgba(0, 229, 255, 0.06);
        }
        .suggestion-item + .suggestion-item {
          border-top: 1px solid rgba(255, 255, 255, 0.04);
        }
        .suggestion-img {
          width: 36px;
          height: 36px;
          border-radius: 6px;
          overflow: hidden;
          background: rgba(255, 255, 255, 0.04);
          flex-shrink: 0;
        }
        .suggestion-img img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .img-placeholder {
          width: 100%;
          height: 100%;
          background: rgba(255, 255, 255, 0.06);
        }
        .suggestion-info {
          display: flex;
          flex-direction: column;
          gap: 2px;
          min-width: 0;
        }
        .suggestion-name {
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
          font-weight: 500;
        }
        .suggestion-price {
          font-size: 0.75rem;
          color: var(--primary);
          font-weight: 600;
        }
        .suggestion-view-all {
          display: block;
          width: 100%;
          padding: 0.7rem 1rem;
          background: none;
          border: none;
          border-top: 1px solid var(--border);
          color: var(--primary);
          font-size: 0.8rem;
          font-weight: 500;
          text-align: center;
          cursor: pointer;
          transition: background 0.15s ease;
          font-family: inherit;
        }
        .suggestion-view-all:hover {
          background: rgba(0, 229, 255, 0.04);
        }

        /* Nav wrapper */
        .nav-wrapper {
          display: flex;
          align-items: center;
          flex: 1;
          justify-content: center;
        }

        /* Actions */
        .header-actions {
          display: flex;
          gap: 0.5rem;
          align-items: center;
        }
        .action-btn {
          color: rgba(255, 255, 255, 0.7);
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        .action-btn:hover {
          color: var(--primary);
          background: rgba(0, 229, 255, 0.08);
        }
        .cart-badge {
          position: absolute;
          top: 2px;
          right: 2px;
          background: var(--primary);
          color: var(--background);
          font-size: 0.65rem;
          font-weight: 700;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .user-avatar {
          width: 28px;
          height: 28px;
          background: var(--primary);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 0.75rem;
          color: var(--background);
          font-weight: 700;
        }
        
        .mobile-menu-btn {
          display: none;
          background: none;
          color: rgba(255, 255, 255, 0.7);
          padding: 0.5rem;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
            align-items: center;
          }
          .nav-wrapper {
            position: absolute;
            top: 100%;
            left: 0;
            right: 0;
            background: rgba(5, 5, 8, 0.95);
            backdrop-filter: blur(20px);
            flex-direction: column;
            padding: 1rem 1.5rem;
            display: none;
            border-bottom: 1px solid var(--border);
          }
          .nav-wrapper.open {
            display: flex;
          }
          .search-bar {
            width: 100%;
            max-width: none;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;
