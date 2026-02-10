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
               <Heart size={20} />
            </button>
            <div className="quick-actions">
               <button className="quick-add-btn" onClick={() => addToCart(product)}>
                  <ShoppingCart size={18} /> Add to Cart
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
           background-color: var(--surface-dark);
           border: 1px solid #222;
           border-radius: var(--radius);
           overflow: hidden;
           transition: transform 0.3s ease, box-shadow 0.3s ease;
           position: relative;
        }
        .product-card:hover {
           transform: translateY(-5px);
           box-shadow: 0 10px 20px rgba(0,0,0,0.5);
           border-color: var(--primary);
        }
        
        .card-image-wrapper {
           position: relative;
           height: 200px;
           background-color: #1a1a1a;
           overflow: hidden;
        }
        .product-image {
           width: 100%;
           height: 100%;
           object-fit: cover;
           transition: transform 0.5s ease;
        }
        .product-card:hover .product-image {
           transform: scale(1.05);
        }

        .sale-badge {
           position: absolute;
           top: 10px;
           left: 10px;
           background-color: var(--alert);
           color: #fff;
           padding: 2px 8px;
           font-size: 0.75rem;
           font-weight: 700;
           border-radius: 4px;
        }

        .wishlist-btn {
           position: absolute;
           top: 10px;
           right: 10px;
           background: rgba(0,0,0,0.5);
           color: #fff;
           border-radius: 50%;
           width: 32px;
           height: 32px;
           display: flex;
           align-items: center;
           justify-content: center;
           padding: 0;
           transition: background 0.3s;
        }
        .wishlist-btn:hover {
           background: var(--primary);
        }

        .quick-actions {
           position: absolute;
           bottom: -50px; /* Hidden initially */
           left: 0;
           right: 0;
           padding: 10px;
           background: rgba(0,0,0,0.8);
           display: flex;
           justify-content: center;
           transition: bottom 0.3s ease;
        }
        .product-card:hover .quick-actions {
           bottom: 0;
        }

        .quick-add-btn {
           background-color: var(--primary);
           color: #fff;
           width: 100%;
           padding: 0.5rem;
           border-radius: 4px;
           display: flex;
           align-items: center;
           justify-content: center;
           gap: 0.5rem;
           font-weight: 600;
        }
        .quick-add-btn:hover {
           background-color: var(--primary-hover);
        }

        .card-details {
           padding: 1rem;
        }
        .category-label {
           color: var(--text-muted);
           font-size: 0.8rem;
           text-transform: uppercase;
           letter-spacing: 0.5px;
        }
        .product-name {
           margin: 0.5rem 0;
           font-size: 1rem;
           line-height: 1.4;
        }
        .product-name a {
           color: var(--text-main);
           transition: color 0.2s;
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
           color: var(--text-muted);
           text-decoration: line-through;
           font-size: 0.9rem;
        }
      `}</style>
      </div>
   );
};

export default ProductCard;
