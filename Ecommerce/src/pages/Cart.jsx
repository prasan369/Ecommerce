import React from 'react';
import { useCart } from '../context/CartContext';
import { Trash2, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cartItems, removeFromCart, updateQuantity, total } = useCart();

    if (cartItems.length === 0) {
        return (
            <div className="empty-cart container">
                <ShoppingBag size={64} style={{ color: '#333', marginBottom: '1rem' }} />
                <h2>Your cart is empty</h2>
                <p>Looks like you haven't added anything yet.</p>
                <Link to="/" className="btn btn-primary" style={{ marginTop: '1rem' }}>Start Shopping</Link>

                <style>{`
            .empty-cart {
               text-align: center;
               padding: 4rem 1rem;
               display: flex;
               flex-direction: column;
               align-items: center;
               justify-content: center;
               min-height: 50vh;
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
                                        <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                        <span>{item.quantity}</span>
                                        <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                                    </div>
                                    <button className="remove-btn" onClick={() => removeFromCart(item.id)}>
                                        <Trash2 size={18} />
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
                        <span>Free</span>
                    </div>
                    <div className="summary-row total">
                        <span>Total</span>
                        <span>${total.toFixed(2)}</span>
                    </div>
                    <button className="checkout-btn">
                        Proceed to Checkout
                    </button>
                </div>
            </div>

            <style>{`
         .cart-page {
            padding-top: 2rem;
            padding-bottom: 4rem;
         }
         .cart-layout {
            display: grid;
            grid-template-columns: 1fr 350px;
            gap: 3rem;
         }
         @media (max-width: 900px) {
            .cart-layout {
               grid-template-columns: 1fr;
            }
         }

         .cart-items {
            display: flex;
            flex-direction: column;
            gap: 1.5rem;
         }
         .cart-item {
            background-color: #1a1a1a;
            border: 1px solid #333;
            border-radius: var(--radius);
            padding: 1rem;
            display: flex;
            gap: 1.5rem;
            align-items: center;
         }
         .item-image {
             width: 100px;
             height: 100px;
             background: #000;
             border-radius: 4px;
             overflow: hidden;
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
             margin: 0 0 0.5rem 0;
             font-size: 1.1rem;
         }
         .item-price {
             color: var(--primary);
             font-weight: 600;
             margin-bottom: 1rem;
         }
         
         .item-actions {
             display: flex;
             align-items: center;
             gap: 1rem;
         }
         .qty-control {
             display: flex;
             align-items: center;
             border: 1px solid #444;
             border-radius: 4px;
         }
         .qty-control button {
             width: 30px;
             height: 30px;
             background: #222;
             color: #fff;
             display: flex;
             align-items: center;
             justify-content: center;
         }
         .qty-control span {
             width: 30px;
             text-align: center;
             font-weight: 600;
         }
         .remove-btn {
             background: none;
             color: var(--alert);
             padding: 0.5rem;
             border-radius: 4px;
         }
         .remove-btn:hover {
             background: rgba(217, 37, 10, 0.1);
         }
         
         .item-subtotal {
             font-weight: 700;
             font-size: 1.2rem;
             min-width: 100px;
             text-align: right;
         }

         .cart-summary {
             background: #111;
             padding: 1.5rem;
             border-radius: var(--radius);
             border: 1px solid #222;
             height: fit-content;
         }
         .cart-summary h2 {
             margin-top: 0;
             margin-bottom: 1.5rem;
             font-size: 1.5rem;
         }
         .summary-row {
             display: flex;
             justify-content: space-between;
             margin-bottom: 1rem;
             color: var(--text-muted);
         }
         .summary-row.total {
             color: var(--text-main);
             font-weight: 800;
             font-size: 1.5rem;
             border-top: 1px solid #333;
             padding-top: 1rem;
             margin-bottom: 1.5rem;
         }
         .checkout-btn {
             background-color: var(--primary);
             color: #fff;
             width: 100%;
             padding: 1rem;
             font-weight: 700;
             border-radius: var(--radius);
         }
         .checkout-btn:hover {
             background-color: var(--primary-hover);
         }
      `}</style>
        </div>
    );
};

export default Cart;
