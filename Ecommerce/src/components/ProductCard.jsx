import React from 'react';
import { ShoppingCart, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
   const { id, name, price, sale_price, image, category } = product;
   const isSale = sale_price && sale_price < price;
   const { addToCart } = useCart();

   return (
      <div className="product-card">
         <div className="card-image-wrapper">
            <img src={image || 'https://via.placeholder.com/300'} alt={name} className="product-image" />
            {isSale && <span className="sale-badge">SALE</span>}
            <button className="wishlist-btn">
               <Heart size={18} />
            </button>
            <div className="quick-actions">
               <button className="quick-add-btn" onClick={() => addToCart(product)}>
                  <ShoppingCart size={16} /> Add to Cart
               </button>
            </div>
         </div>

         <div className="card-details">
            <span className="category-label">{category}</span>
            <h3 className="product-name">
               <Link to={`/product/${id}`}>{name}</Link>
            </h3>
            <div className="price-row">
               {isSale ? (
                  <>
                     <span className="current-price">${sale_price}</span>
                     <span className="old-price">${price}</span>
                  </>
               ) : (
                  <span className="current-price">${price}</span>
               )}
            </div>
         </div>

         <style>{`
        .product-card {
           background: rgba(255, 255, 255, 0.02);
           border: 1px solid var(--border);
           border-radius: var(--radius);
           overflow: hidden;
           transition: all 0.4s ease;
           position: relative;
        }
        .product-card:hover {
           transform: translateY(-4px);
           box-shadow: 0 12px 32px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(0, 229, 255, 0.15);
           border-color: var(--border-hover);
        }
        
        .card-image-wrapper {
           position: relative;
           height: 220px;
           background: #0a0a0f;
           overflow: hidden;
        }
        .product-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.6s ease;
        }
        .product-card:hover .product-image {
           transform: scale(1.08);
        }

        .sale-badge {
           position: absolute;
           top: 12px;
           left: 12px;
           background: var(--primary);
           color: var(--background);
           padding: 3px 10px;
           font-size: 0.65rem;
           font-weight: 700;
           letter-spacing: 1px;
           border-radius: 3px;
        }

        .wishlist-btn {
           position: absolute;
           top: 12px;
           right: 12px;
           background: rgba(5, 5, 8, 0.6);
           backdrop-filter: blur(8px);
           color: rgba(255, 255, 255, 0.6);
           border-radius: 50%;
           width: 34px;
           height: 34px;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 0;
           transition: all 0.3s ease;
           border: 1px solid rgba(255, 255, 255, 0.1);
        }
        .wishlist-btn:hover {
           background: rgba(0, 229, 255, 0.15);
           color: var(--primary);
           border-color: var(--border-hover);
        }

        .quick-actions {
           position: absolute;
           bottom: -50px;
           left: 0;
           right: 0;
           padding: 12px;
           background: linear-gradient(transparent, rgba(5, 5, 8, 0.95));
           display: flex;
           justify-content: center;
           transition: bottom 0.4s ease;
        }
        .product-card:hover .quick-actions {
           bottom: 0;
        }

        .quick-add-btn {
           background: var(--primary);
           color: var(--background);
           width: 100%;
           padding: 0.6rem;
           border-radius: 6px;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.5rem;
           font-weight: 600;
           font-size: 0.8rem;
           letter-spacing: 0.3px;
           transition: all 0.3s ease;
        }
        .quick-add-btn:hover {
           box-shadow: 0 4px 16px rgba(0, 229, 255, 0.3);
        }

        .card-details {
           padding: 1rem 1.15rem;
        }
        .category-label {
           color: rgba(255, 255, 255, 0.35);
           font-size: 0.7rem;
           text-transform: uppercase;
           letter-spacing: 1px;
           font-weight: 500;
        }
        .product-name {
           margin: 0.5rem 0;
           font-size: 0.95rem;
           font-weight: 600;
           line-height: 1.4;
        }
        .product-name a {
           color: #fff;
           transition: color 0.2s;
           text-decoration: none;
        }
        .product-name a:hover {
           color: var(--primary);
        }
        .price-row {
           display: flex;
           align-items: baseline;
           gap: 0.5rem;
        }
        .current-price {
           color: var(--primary);
           font-weight: 700;
           font-size: 1.1rem;
        }
        .old-price {
           color: rgba(255, 255, 255, 0.3);
           text-decoration: line-through;
           font-size: 0.85rem;
        }
      `}</style>
      </div>
   );
};

export default ProductCard;
