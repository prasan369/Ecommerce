import React, { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';
import { Truck, CheckCircle, AlertTriangle } from 'lucide-react';

const Checkout = () => {
    const { cartItems, total, clearCart } = useCart();
    const navigate = useNavigate();

    const [step, setStep] = useState(1);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        address: '',
        city: '',
        zip: '',
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
                const amount = total.toFixed(2);
                const total_amount = amount;

                document.getElementById('amount').value = amount;
                document.getElementById('total_amount').value = total_amount;
                document.getElementById('transaction_uuid').value = newOrderId;
                document.getElementById('signature').value = 'dummy_signature_for_test';

                document.getElementById('esewa-form').submit();

            } else if (paymentMethod === 'khalti') {
                const { initiateKhaltiPayment } = await import('../lib/paymentUtils');
                initiateKhaltiPayment(
                    total,
                    newOrderId,
                    `Order #${newOrderId}`,
                    (payload) => {
                        console.log('Success:', payload);
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
            <div className="container" style={{ padding: '4rem', textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
                <h2>Your cart is empty. Redirecting...</h2>
                {setTimeout(() => navigate('/'), 2000) && null}
            </div>
        );
    }

    return (
        <div className="checkout-page container">
            <div className="checkout-container">
                <div className="checkout-steps">
                    <div className={`step-indicator ${step >= 1 ? 'active' : ''}`}>
                        <span className="step-num">1</span> Shipping
                    </div>
                    <div className={`step-line ${step >= 2 ? 'filled' : ''}`} />
                    <div className={`step-indicator ${step >= 2 ? 'active' : ''}`}>
                        <span className="step-num">2</span> Payment
                    </div>
                    <div className={`step-line ${step >= 3 ? 'filled' : ''}`} />
                    <div className={`step-indicator ${step >= 3 ? 'active' : ''}`}>
                        <span className="step-num">3</span> Confirm
                    </div>
                </div>

                {error && (
                    <div className="error-message">
                        <AlertTriangle size={16} /> {error}
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
                        <button type="submit" className="checkout-btn-primary">Continue to Payment</button>
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
                            <button type="button" className="checkout-btn-secondary" onClick={() => setStep(1)}>Back</button>
                            <button className="checkout-btn-primary" onClick={handlePaymentSubmit} disabled={loading}>
                                {loading ? 'Processing...' : `Pay with ${paymentMethod === 'cod' ? 'Cash' : paymentMethod.toUpperCase()}`}
                            </button>
                        </div>
                    </div>
                )}

                {step === 3 && (
                    <div className="success-message">
                        <div className="success-icon">
                            <CheckCircle size={48} />
                        </div>
                        <h2>Order Confirmed!</h2>
                        <p>Thank you for your purchase, {formData.name}.</p>
                        <p className="order-num">Order #{orderId}</p>
                        <span className="payment-method-badge">
                            Paid via {paymentMethod === 'cod' ? 'Cash on Delivery' : paymentMethod.toUpperCase()}
                        </span>
                        <button className="checkout-btn-primary" onClick={() => navigate('/')}>Continue Shopping</button>
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
                    color: rgba(255, 255, 255, 0.25);
                    font-weight: 500;
                    font-size: 0.85rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    transition: color 0.3s ease;
                }
                .step-num {
                    width: 26px;
                    height: 26px;
                    border-radius: 50%;
                    border: 1px solid var(--border);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.75rem;
                    font-weight: 700;
                    transition: all 0.3s ease;
                }
                .step-indicator.active {
                    color: var(--primary);
                }
                .step-indicator.active .step-num {
                    border-color: var(--primary);
                    background: rgba(0, 229, 255, 0.1);
                    color: var(--primary);
                }
                .step-line {
                    flex: 1;
                    height: 1px;
                    background: var(--border);
                    margin: 0 0.75rem;
                    transition: background 0.3s ease;
                }
                .step-line.filled {
                    background: rgba(0, 229, 255, 0.3);
                }

                .checkout-form {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .checkout-form h2 {
                    margin: 0 0 1.5rem;
                    font-size: 1.25rem;
                    font-weight: 700;
                }

                .form-group {
                    margin-bottom: 1.25rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.4rem;
                    color: rgba(255, 255, 255, 0.5);
                    font-size: 0.8rem;
                    font-weight: 500;
                    letter-spacing: 0.3px;
                }
                .form-group input {
                    width: 100%;
                    padding: 0.75rem;
                    background: rgba(255, 255, 255, 0.04);
                    border: 1px solid var(--border);
                    border-radius: 8px;
                    color: #fff;
                    font-size: 0.9rem;
                    font-family: inherit;
                    transition: all 0.3s ease;
                }
                .form-group input::placeholder {
                    color: rgba(255, 255, 255, 0.2);
                }
                .form-group input:focus {
                    border-color: var(--border-hover);
                    outline: none;
                    box-shadow: 0 0 0 3px rgba(0, 229, 255, 0.08);
                    background: rgba(255, 255, 255, 0.06);
                }

                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }

                .checkout-btn-primary {
                    width: 100%;
                    padding: 0.85rem;
                    border-radius: var(--radius);
                    font-weight: 600;
                    font-size: 0.9rem;
                    margin-top: 0.75rem;
                    background: var(--primary);
                    color: var(--background);
                    transition: all 0.3s ease;
                    letter-spacing: 0.3px;
                    border: none;
                }
                .checkout-btn-primary:hover:not(:disabled) {
                    box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
                    transform: translateY(-1px);
                }
                .checkout-btn-primary:disabled {
                    opacity: 0.6;
                    cursor: not-allowed;
                }
                
                .checkout-btn-secondary {
                    width: 100%;
                    padding: 0.85rem;
                    border-radius: var(--radius);
                    font-weight: 500;
                    font-size: 0.9rem;
                    margin-top: 0.75rem;
                    background: transparent;
                    border: 1px solid var(--border);
                    color: rgba(255, 255, 255, 0.6);
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .checkout-btn-secondary:hover {
                    border-color: rgba(255, 255, 255, 0.15);
                    color: #fff;
                }

                .payment-actions {
                    display: flex;
                    gap: 1rem;
                }

                .order-summary-box {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.15rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    border: 1px dashed rgba(0, 229, 255, 0.15);
                }
                .summary-row {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    font-weight: 600;
                    color: rgba(255, 255, 255, 0.6);
                }
                .total-amount {
                    color: var(--primary);
                    font-size: 1.35rem;
                    font-weight: 800;
                }

                .payment-options {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
                    gap: 0.75rem;
                    margin-bottom: 1.5rem;
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
                    border: 1px solid var(--border);
                    border-radius: var(--radius);
                    padding: 1.5rem;
                    text-align: center;
                    font-weight: 700;
                    transition: all 0.3s ease;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 0.5rem;
                    background: rgba(255, 255, 255, 0.02);
                    height: 100px;
                }
                .payment-option:hover .payment-logo {
                    border-color: rgba(255, 255, 255, 0.15);
                }
                .payment-option.selected .payment-logo {
                    border-color: var(--primary);
                    background: rgba(0, 229, 255, 0.06);
                    box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.1);
                }
                .esewa { color: #60bb46; }
                .khalti { color: #5c2d91; }
                .cod { color: rgba(255, 255, 255, 0.7); }
                
                .error-message {
                    background: rgba(255, 59, 48, 0.08);
                    color: #ff3b30;
                    padding: 0.85rem 1.15rem;
                    border-radius: 8px;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 0.875rem;
                    border: 1px solid rgba(255, 59, 48, 0.15);
                }

                .success-message {
                    text-align: center;
                    padding: 3rem 2rem;
                    background: rgba(255, 255, 255, 0.02);
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .success-icon {
                    width: 72px;
                    height: 72px;
                    border-radius: 50%;
                    background: rgba(0, 229, 255, 0.08);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 0 auto 1.5rem;
                    color: var(--primary);
                }
                .success-message h2 {
                    margin: 0 0 0.5rem;
                    font-size: 1.75rem;
                    font-weight: 800;
                }
                .success-message p {
                    color: rgba(255, 255, 255, 0.4);
                    margin: 0 0 0.5rem;
                    font-size: 0.95rem;
                }
                .order-num {
                    color: rgba(255, 255, 255, 0.5) !important;
                    font-family: monospace;
                }
                .payment-method-badge {
                    display: inline-block;
                    background: rgba(0, 229, 255, 0.08);
                    color: var(--primary);
                    padding: 4px 12px;
                    border-radius: 4px;
                    font-size: 0.8rem;
                    font-weight: 600;
                    margin: 1rem 0 1.5rem;
                    border: 1px solid rgba(0, 229, 255, 0.12);
                }
            `}</style>
        </div>
    );
};

export default Checkout;
