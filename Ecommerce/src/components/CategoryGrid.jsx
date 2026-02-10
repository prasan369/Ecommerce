import React from 'react';
import { Link } from 'react-router-dom';
import { Smartphone, Headphones, Gamepad2, Laptop, Watch, Camera } from 'lucide-react';

const categories = [
    { id: 'smartphones', name: 'Smartphones', icon: Smartphone, color: '#FF6B6B' },
    { id: 'audio', name: 'Audio', icon: Headphones, color: '#4ECDC4' },
    { id: 'gaming', name: 'Gaming', icon: Gamepad2, color: '#FFE66D' },
    { id: 'laptops', name: 'Laptops', icon: Laptop, color: '#1A535C' },
    { id: 'wearables', name: 'Wearables', icon: Watch, color: '#FF9F1C' },
    { id: 'cameras', name: 'Cameras', icon: Camera, color: '#2EC4B6' },
];

const CategoryGrid = () => {
    return (
        <div className="category-grid">
            {categories.map((cat) => (
                <Link to={`/category/${cat.id}`} key={cat.id} className="category-card">
                    <div className="icon-wrapper" style={{ '--accent-color': cat.color }}>
                        <cat.icon size={32} />
                    </div>
                    <span className="category-name">{cat.name}</span>
                </Link>
            ))}

            <style>{`
        .category-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
          gap: 1.5rem;
          margin-bottom: 2rem;
        }
        .category-card {
          background-color: var(--surface-dark);
          border: 1px solid #222;
          padding: 1.5rem;
          border-radius: var(--radius);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1rem;
          transition: all 0.3s ease;
          color: var(--text-main);
          text-align: center;
        }
        .category-card:hover {
          transform: translateY(-5px);
          border-color: var(--primary);
          background-color: #1a1a1a;
        }
        .icon-wrapper {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background-color: rgba(255,255,255,0.05);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--accent-color);
          transition: all 0.3s ease;
        }
        .category-card:hover .icon-wrapper {
          background-color: var(--accent-color);
          color: #000;
        }
        .category-name {
          font-weight: 600;
        }
      `}</style>
        </div>
    );
};

export default CategoryGrid;
