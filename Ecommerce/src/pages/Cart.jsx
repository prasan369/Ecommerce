import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, total } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart container">
                <div className="empty-icon-wrap">
                    <ShoppingBag size={48} />
                </div>
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/" className="btn-primary" style={{ marginTop: '1rem', textDecoration: 'none' }}>Start Shopping</Link>

                <style>{`
            .empty-cart {
               text-align: center;
               padding: 6rem 1rem;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               min-height: 60vh;
            }
            .empty-icon-wrap {
               width: 80px;
               height: 80px;
               border-radius: 50%;
               background: rgba(255, 255, 255, 0.03);
               border: 1px solid var(--border);
               display: flex;
               align-items: center;
               justify-content: center;
               color: rgba(255, 255, 255, 0.2);
               margin-bottom: 1.5rem;
            }
            .empty-cart h2 {
               font-weight: 700;
               font-size: 1.5rem;
               margin: 0 0 0.5rem;
            }
            .empty-cart p {
               color: rgba(255, 255, 255, 0.4);
               margin: 0;
            }
          `}</style>
            </div>
        );
    }

    return (
        <div className="cart-page container">
            <h1 className="page-title">Shopping Cart</h1>

            <div className="cart-layout">
                <div className="cart-items">
                    {cartItems.map(item => (
                        <div key={item.id} className="cart-item">
                            <div className="item-image">
                                <img src={item.image} alt={item.name} />
                            </div>
                            <div className="item-details">
                                <h3>{item.name}</h3>
                                <p className="item-price">${item.sale_price || item.price}</p>

                                <div className="item-actions">
                                    <div className="qty-control">
                                        <button onClick={() => updateQuantity(item.id, -1)}>−</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                            <div className="item-subtotal">
                                ${((item.sale_price || item.price) * item.quantity).toFixed(2)}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="cart-summary">
                    <h2>Order Summary</h2>
                    <div className="summary-row">
                        <span>Subtotal</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <div className="summary-row">
                        <span>Shipping</span>
                        <span className="free-tag">Free</span>
                    </div>
                    <div className="summary-divider" />
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <Link to="/checkout" className="checkout-btn">
                        Proceed to Checkout
                    </Link>
                </div>
            </div>

            <style>{`
         .cart-page {
            padding-top: 2rem;
            padding-bottom: 4rem;
         }
         .cart-layout {
            display: grid;
            grid-template-columns: 1fr 380px;
            gap: 2rem;
            align-items: flex-start;
         }
         @media (max-width: 900px) {
            .cart-layout {
               grid-template-columns: 1fr;
            }
         }

         .cart-items {
            display: flex;
            flex-direction: column;
            gap: 1rem;
         }
         .cart-item {
            background: rgba(255, 255, 255, 0.02);
            border: 1px solid var(--border);
            border-radius: var(--radius);
            padding: 1.25rem;
            display: flex;
            gap: 1.25rem;
            align-items: center;
            transition: border-color 0.3s ease;
         }
         .cart-item:hover {
            border-color: rgba(255, 255, 255, 0.12);
         }
         .item-image {
             width: 90px;
             height: 90px;
             background: #0a0a0f;
             border-radius: 6px;
             overflow: hidden;
             flex-shrink: 0;
         }
         .item-image img {
             width: 100%;
             height: 100%;
             object-fit: cover;
         }
         .item-details {
             flex: 1;
         }
         .item-details h3 {
             margin: 0 0 0.35rem 0;
             font-size: 1rem;
             font-weight: 600;
         }
         .item-price {
             color: var(--primary);
             font-weight: 600;
             margin: 0 0 0.75rem 0;
             font-size: 0.95rem;
         }
         
         .item-actions {
             display: flex;
             align-items: center;
             gap: 0.75rem;
         }
         .qty-control {
             display: flex;
             align-items: center;
             border: 1px solid var(--border);
             border-radius: 6px;
             overflow: hidden;
         }
         .qty-control button {
             width: 32px;
             height: 32px;
             background: rgba(255, 255, 255, 0.04);
             color: rgba(255, 255, 255, 0.7);
             display: flex;
             align-items: center;
             justify-content: center;
             font-size: 1rem;
             transition: all 0.2s ease;
         }
         .qty-control button:hover {
             background: rgba(0, 229, 255, 0.08);
             color: var(--primary);
         }
         .qty-control span {
             width: 36px;
             text-align: center;
             font-weight: 600;
             font-size: 0.9rem;
             font-variant-numeric: tabular-nums;
         }
         .remove-btn {
             background: none;
             color: rgba(255, 255, 255, 0.3);
             padding: 0.4rem;
             border-radius: 6px;
             display: flex;
             align-items: center;
             transition: all 0.2s ease;
         }
         .remove-btn:hover {
             background: rgba(255, 59, 48, 0.1);
             color: #ff3b30;
         }
         
         .item-subtotal {
             font-weight: 700;
             font-size: 1.1rem;
             min-width: 90px;
             text-align: right;
             font-variant-numeric: tabular-nums;
         }

         .cart-summary {
             background: rgba(255, 255, 255, 0.02);
             padding: 2rem;
             border-radius: var(--radius);
             border: 1px solid var(--border);
             position: sticky;
             top: 100px;
         }
         .cart-summary h2 {
             margin: 0 0 1.5rem;
             font-size: 1.25rem;
             font-weight: 700;
         }
         .summary-row {
             display: flex;
             justify-content: space-between;
             margin-bottom: 0.75rem;
             color: rgba(255, 255, 255, 0.45);
             font-size: 0.9rem;
         }
         .free-tag {
             color: var(--primary);
             font-weight: 500;
         }
         .summary-divider {
             height: 1px;
             background: var(--border);
             margin: 1rem 0;
         }
         .summary-row.total {
             color: #fff;
             font-weight: 800;
             font-size: 1.35rem;
             margin-bottom: 1.5rem;
         }
         .checkout-btn {
             background: var(--primary);
             color: var(--background);
             width: 100%;
             padding: 1rem;
             font-weight: 700;
             font-size: 0.9rem;
             border-radius: var(--radius);
             text-align: center;
             display: block;
             text-decoration: none;
             transition: all 0.3s ease;
             letter-spacing: 0.3px;
         }
         .checkout-btn:hover {
             box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
             transform: translateY(-1px);
             color: var(--background);
         }
      `}</style>
        </div>
    );
};

export default Cart;
