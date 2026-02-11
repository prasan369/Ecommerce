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

    const [paymentMethod, setPaymentMethod] = useState('esewa');
    const [orderId, setOrderId] = useState(null);

    const generateOrderId = () => `ORD-${Math.floor(Math.random() * 1000000)}`;

    const handlePaymentSubmit = async () => {
        setLoading(true);
        setError(null);

        const newOrderId = generateOrderId();
        setOrderId(newOrderId);

        try {
            if (paymentMethod === 'esewa') {
                // Prepare eSewa Form
                const amount = total.toFixed(2);
                const total_amount = amount;

                // Populate hidden form
                document.getElementById('amount').value = amount;
                document.getElementById('total_amount').value = total_amount;
                document.getElementById('transaction_uuid').value = newOrderId;
                document.getElementById('signature').value = 'dummy_signature_for_test'; // In real app, fetch from backend

                // Submit form
                document.getElementById('esewa-form').submit();

            } else if (paymentMethod === 'khalti') {
                const { initiateKhaltiPayment } = await import('../lib/paymentUtils');
                initiateKhaltiPayment(
                    total,
                    newOrderId,
                    `Order #${newOrderId}`,
                    (payload) => {
                        console.log('Success:', payload);
                        // Success callback
                        setLoading(false);
                        setStep(3);
                        clearCart();
                    },
                    (error) => {
                        console.error('Error:', error);
                        setLoading(false);
                        setError('Payment Failed');
                    }
                );
            } else if (paymentMethod === 'cod') {
                // Simulate API call
                setTimeout(() => {
                    setLoading(false);
                    setStep(3);
                    clearCart();
                }, 1000);
            }
        } catch (err) {
            setLoading(false);
            setError(err.message);
        }
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
                    <div className="checkout-form">
                        <h2>Select Payment Method</h2>
                        <div className="order-summary-box">
                            <div className="summary-row">
                                <span>Total to Pay:</span>
                                <span className="total-amount">${total.toFixed(2)}</span>
                            </div>
                        </div>

                        <div className="payment-options">
                            <label className={`payment-option ${paymentMethod === 'esewa' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="esewa"
                                    checked={paymentMethod === 'esewa'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <div className="payment-logo esewa">eSewa</div>
                            </label>

                            <label className={`payment-option ${paymentMethod === 'khalti' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="khalti"
                                    checked={paymentMethod === 'khalti'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <div className="payment-logo khalti">Khalti</div>
                            </label>

                            <label className={`payment-option ${paymentMethod === 'cod' ? 'selected' : ''}`}>
                                <input
                                    type="radio"
                                    name="payment"
                                    value="cod"
                                    checked={paymentMethod === 'cod'}
                                    onChange={(e) => setPaymentMethod(e.target.value)}
                                />
                                <div className="payment-logo cod">
                                    <Truck size={20} /> Cash on Delivery
                                </div>
                            </label>
                        </div>

                        <div className="payment-actions">
                            <button type="button" className="btn-secondary" onClick={() => setStep(1)}>Back</button>
                            <button className="btn-primary" onClick={handlePaymentSubmit} disabled={loading}>
                                {loading ? 'Processing...' : `Pay with ${paymentMethod === 'cod' ? 'Cash' : paymentMethod.toUpperCase()}`}
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="success-message">
                        <CheckCircle size={64} color="#3257A7" />
                        <h2>Order Confirmed!</h2>
                        <p>Thank you for your purchase, {formData.name}.</p>
                        <p>Your order number is #{orderId}</p>
                        <p className="payment-method-badge">Paid via {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod.toUpperCase()}</p>
                        <button className="btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
                    </div>
                )}
            </div>
            {/* Hidden eSewa Form */}
            <form id="esewa-form" action="https://rc-epay.esewa.com.np/api/epay/main/v2/form" method="POST" style={{ display: 'none' }}>
                <input type="text" id="amount" name="amount" required />
                <input type="text" id="tax_amount" name="tax_amount" value="0" required />
                <input type="text" id="total_amount" name="total_amount" required />
                <input type="text" id="transaction_uuid" name="transaction_uuid" required />
                <input type="text" id="product_code" name="product_code" value="EPAYTEST" required />
                <input type="text" id="product_service_charge" name="product_service_charge" value="0" required />
                <input type="text" id="product_delivery_charge" name="product_delivery_charge" value="0" required />
                <input type="text" id="success_url" name="success_url" value={`${window.location.origin}/order/success`} required />
                <input type="text" id="failure_url" name="failure_url" value={`${window.location.origin}/checkout`} required />
                <input type="text" id="signed_field_names" name="signed_field_names" value="total_amount,transaction_uuid,product_code" required />
                <input type="text" id="signature" name="signature" required />
            </form>

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

                .payment-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 1rem;
                    margin-bottom: 2rem;
                }
                .payment-option {
                    cursor: pointer;
                    position: relative;
                }
                .payment-option input {
                    position: absolute;
                    opacity: 0;
                }
                .payment-logo {
                    border: 2px solid #333;
                    border-radius: var(--radius);
                    padding: 1.5rem;
                    text-align: center;
                    font-weight: 700;
                    transition: all 0.2s;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: #1a1a1a;
                    height: 100px;
                }
                .payment-option.selected .payment-logo {
                    border-color: var(--primary);
                    background: rgba(252, 136, 1, 0.1);
                }
                .esewa { color: #60bb46; }
                .khalti { color: #5c2d91; }
                .cod { color: var(--text-main); }
                
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
