import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck, CheckCircle, AlertTriangle } from 'lucide-react';

const Checkout = () => {
    const { cartItems, total, clearCart } = useCart();
    const navigate = useNavigate();

    const [step, setStep] = useState(1); // 1: Shipping, 2: Payment, 3: Success
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
        cardName: '',
        cardNumber: '',
        expiry: '',
        cvc: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleShippingSubmit = (e) => {
        e.preventDefault();
        setStep(2);
    };

    const handlePaymentSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setError(null);

        // Simulate Stripe Payment
        setTimeout(() => {
            setLoading(false);
            if (formData.cardNumber === '4242424242424241') {
                setError('Card declined. Please try again.');
            } else {
                setStep(3);
                clearCart();
            }
        }, 2000);
    };

    if (cartItems.length === 0 && step !== 3) {
        return (
            <div className="container" style={{ padding: '4rem', textAlign: 'center' }}>
                <h2>Your cart is empty. Redirecting...</h2>
                {setTimeout(() => navigate('/'), 2000) && null}
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <div className="checkout-container">
                <div className="checkout-steps">
                    <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>1. Shipping</div>
                    <div className="step-line"></div>
                    <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>2. Payment</div>
                    <div className="step-line"></div>
                    <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>3. Confirm</div>
                </div>

                {error && (
                    <div className="error-message">
                        <AlertTriangle size={18} /> {error}
                    </div>
                )}

                {step === 1 && (
                    <form onSubmit={handleShippingSubmit} className="checkout-form">
                        <h2>Shipping Information</h2>
                        <div className="form-group">
                            <label>Full Name</label>
                            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Email Address</label>
                            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Address</label>
                            <input type="text" name="address" value={formData.address} onChange={handleChange} required />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>City</label>
                                <input type="text" name="city" value={formData.city} onChange={handleChange} required />
                            </div>
                            <div className="form-group">
                                <label>Zip Code</label>
                                <input type="text" name="zip" value={formData.zip} onChange={handleChange} required />
                            </div>
                        </div>
                        <button type="submit" className="btn-primary">Continue to Payment</button>
                    </form>
                )}

                {step === 2 && (
                    <form onSubmit={handlePaymentSubmit} className="checkout-form">
                        <h2>Payment Details</h2>
                        <div className="order-summary-box">
                            <div className="summary-row">
                                <span>Total to Pay:</span>
                                <span className="total-amount">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="form-group">
                            <label>Name on Card</label>
                            <input type="text" name="cardName" value={formData.cardName} onChange={handleChange} required />
                        </div>
                        <div className="form-group">
                            <label>Card Number</label>
                            <div className="input-with-icon">
                                <CreditCard size={18} className="icon" />
                                <input type="text" name="cardNumber" value={formData.cardNumber} onChange={handleChange} placeholder="0000 0000 0000 0000" required maxLength="19" />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Expiry Date</label>
                                <input type="text" name="expiry" value={formData.expiry} onChange={handleChange} placeholder="MM/YY" required maxLength="5" />
                            </div>
                            <div className="form-group">
                                <label>CVC</label>
                                <input type="text" name="cvc" value={formData.cvc} onChange={handleChange} placeholder="123" required maxLength="4" />
                            </div>
                        </div>

                        <div className="payment-actions">
                            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                            <button type="submit" className="btn-primary" disabled={loading}>
                                {loading ? 'Processing...' : `Pay $${total.toFixed(2)}`}
                            </button>
                        </div>
                    </form>
                )}

                {step === 3 && (
                    <div className="success-message">
                        <CheckCircle size={64} color="#3257A7" />
                        <h2>Order Confirmed!</h2>
                        <p>Thank you for your purchase, {formData.name}.</p>
                        <p>Your order number is #ORD-{Math.floor(Math.random() * 100000)}</p>
                        <button className="btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
                    </div>
                )}
            </div>

            <style>{`
                .checkout-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .checkout-container {
                    max-width: 600px;
                    margin: 0 auto;
                }
                .checkout-steps {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    margin-bottom: 3rem;
                }
                .step-indicator {
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .step-indicator.active {
                    color: var(--primary);
                    font-weight: 700;
                }
                .step-line {
                    flex: 1;
                    height: 1px;
                    background: #333;
                    margin: 0 1rem;
                }

                .checkout-form {
                    background: #111;
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                }
                .checkout-form h2 {
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                }

                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    background: #222;
                    border: 1px solid #333;
                    border-radius: 4px;
                    color: #fff;
                    font-size: 1rem;
                }
                .form-group input:focus {
                    border-color: var(--primary);
                    outline: none;
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .btn-primary, .btn-secondary {
                    width: 100%;
                    padding: 0.8rem;
                    border-radius: var(--radius);
                    font-weight: 600;
                    font-size: 1rem;
                    margin-top: 1rem;
                }
                .btn-primary {
                    background-color: var(--primary);
                    color: #fff;
                }
                .btn-primary:hover:not(:disabled) {
                    background-color: var(--primary-hover);
                }
                .btn-primary:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                
                .btn-secondary {
                    background-color: transparent;
                    border: 1px solid #333;
                    color: var(--text-muted);
                }
                .btn-secondary:hover {
                    border-color: #555;
                    color: #fff;
                }

                .payment-actions {
                    display: flex;
                    gap: 1rem;
                }

                .order-summary-box {
                    background: #1a1a1a;
                    padding: 1rem;
                    border-radius: 4px;
                    margin-bottom: 1.5rem;
                    border: 1px dashed #333;
                }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 600;
                }
                .total-amount {
                    color: var(--primary);
                    font-size: 1.2rem;
                }

                .input-with-icon {
                    position: relative;
                }
                .input-with-icon .icon {
                    position: absolute;
                    left: 10px;
                    top: 50%;
                    transform: translateY(-50%);
                    color: var(--text-muted);
                }
                .input-with-icon input {
                    padding-left: 2.5rem;
                }

                .success-message {
                    text-align: center;
                    padding: 3rem;
                    background: #111;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                }
                .success-message h2 {
                    margin-top: 1rem;
                }
                .success-message p {
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                }

                .error-message {
                    background: rgba(217, 37, 10, 0.1);
                    color: var(--alert);
                    padding: 1rem;
                    border-radius: 4px;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
            `}</style>
        </div>
    );
};

export default Checkout;
