import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Headphones, Gamepad2, Laptop, Watch, Camera } from 'lucide-react';

const categories = [
  { id: 'smartphones', name: 'Smartphones', icon: Smartphone },
  { id: 'audio', name: 'Audio', icon: Headphones },
  { id: 'gaming', name: 'Gaming', icon: Gamepad2 },
  { id: 'laptops', name: 'Laptops', icon: Laptop },
  { id: 'wearables', name: 'Wearables', icon: Watch },
  { id: 'cameras', name: 'Cameras', icon: Camera },
];

const CategoryGrid = () => {
  return (
    <div className="category-grid">
      {categories.map((cat) => (
        <Link to={`/category/${cat.id}`} key={cat.id} className="category-card">
          <div className="cat-icon-wrapper">
            <cat.icon size={28} />
            <div className="icon-glow" />
          </div>
          <span className="cat-label">{cat.name}</span>
        </Link>
      ))}

      <style>{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 1rem;
          margin-bottom: 2rem;
        }
        .category-card {
          background: rgba(255, 255, 255, 0.02);
          border: 1px solid var(--border);
          padding: 2rem 1rem;
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.4s ease;
          color: rgba(255, 255, 255, 0.6);
          text-align: center;
          text-decoration: none;
          position: relative;
          overflow: hidden;
        }
        .category-card:hover {
          transform: translateY(-4px);
          border-color: var(--border-hover);
          background: rgba(0, 229, 255, 0.04);
          color: var(--primary);
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.08);
        }
        .cat-icon-wrapper {
          position: relative;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.04);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.4s ease;
        }
        .icon-glow {
          position: absolute;
          inset: -10px;
          border-radius: 50%;
          background: radial-gradient(circle, rgba(0, 229, 255, 0.2), transparent);
          opacity: 0;
          transition: opacity 0.4s ease;
          pointer-events: none;
        }
        .category-card:hover .icon-glow {
          opacity: 1;
        }
        .category-card:hover .cat-icon-wrapper {
          background: rgba(0, 229, 255, 0.1);
        }
        .cat-label {
          font-size: 0.8rem;
          font-weight: 600;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
      `}</style>
    </div>
  );
};

export default CategoryGrid;
