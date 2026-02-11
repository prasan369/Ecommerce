import React, { useEffect, useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { Package, Truck, CheckCircle, Clock, ArrowLeft, MapPin } from 'lucide-react';

const OrderDetail = () => {
    const { id } = useParams();
    const { user } = useCart();
    const navigate = useNavigate();
    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        // Mock Fetch Order Details
        // In real app: supabase.from('orders').select('*, order_items(*)').eq('id', id).single();
        setTimeout(() => {
            // Mock data simulating different statuses based on ID or random
            const mockOrder = {
                id: id,
                date: '2023-10-15',
                total: 299.00,
                status: 'Shipped', // Options: Placed, Processing, Shipped, Delivered
                items: [
                    { name: 'MDR-Z1R Premium Headphones', price: 299.00, quantity: 1, image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100' }
                ],
                shippingAddress: {
                    name: 'John Doe',
                    line1: '123 Tech Street',
                    city: 'Silicon Valley',
                    zip: '94000',
                    country: 'USA'
                }
            };
            setOrder(mockOrder);
            setLoading(false);
        }, 1000);
    }, [id, user, navigate]);

    if (loading) return <div className="container" style={{ padding: '4rem' }}>Loading order details...</div>;
    if (!order) return <div className="container" style={{ padding: '4rem' }}>Order not found.</div>;

    const steps = ['Placed', 'Processing', 'Shipped', 'Delivered'];
    const currentStepIndex = steps.indexOf(order.status);

    return (
        <div className="order-detail-page container">
            <Link to="/profile" className="back-link"><ArrowLeft size={16} /> Back to Orders</Link>

            <div className="order-header-main">
                <div>
                    <h1>Order #{order.id}</h1>
                    <p className="order-date">Placed on {order.date}</p>
                </div>
                <div className="order-total-badge">
                    Total: ${order.total.toFixed(2)}
                </div>
            </div>

            <div className="tracking-section">
                <h2>Tracking Status</h2>
                <div className="steps-container">
                    {steps.map((step, index) => {
                        const isCompleted = index <= currentStepIndex;
                        const isCurrent = index === currentStepIndex;

                        let Icon = Clock;
                        if (index === 0) Icon = Package;
                        if (index === 2) Icon = Truck;
                        if (index === 3) Icon = CheckCircle;

                        return (
                            <div key={step} className={`step-item ${isCompleted ? 'completed' : ''} ${isCurrent ? 'current' : ''}`}>
                                <div className="step-icon">
                                    <Icon size={20} />
                                </div>
                                <span className="step-label">{step}</span>
                                {index < steps.length - 1 && <div className={`step-line ${index < currentStepIndex ? 'completed' : ''}`}></div>}
                            </div>
                        );
                    })}
                </div>
                {order.status === 'Shipped' && (
                    <div className="tracking-info-box">
                        <Truck size={20} />
                        <div>
                            <strong>On the way</strong>
                            <p>Expected delivery: Oct 20, 2023</p>
                        </div>
                    </div>
                )}
            </div>

            <div className="order-content-grid">
                <div className="items-section">
                    <h3>Items in Order</h3>
                    <div className="order-items-list">
                        {order.items.map((item, idx) => (
                            <div key={idx} className="order-item-row">
                                <img src={item.image} alt={item.name} className="item-thumb" />
                                <div className="item-info">
                                    <h4>{item.name}</h4>
                                    <p>Qty: {item.quantity}</p>
                                </div>
                                <div className="item-price">
                                    ${item.price.toFixed(2)}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="shipping-section">
                    <h3>Shipping Details</h3>
                    <div className="address-card">
                        <MapPin size={20} className="pin-icon" />
                        <div>
                            <strong>{order.shippingAddress.name}</strong>
                            <p>{order.shippingAddress.line1}</p>
                            <p>{order.shippingAddress.city}, {order.shippingAddress.zip}</p>
                            <p>{order.shippingAddress.country}</p>
                        </div>
                    </div>
                </div>
            </div>

            <style>{`
                .order-detail-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .back-link {
                    display: inline-flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-muted);
                    margin-bottom: 2rem;
                    text-decoration: none;
                }
                .back-link:hover {
                    color: var(--primary);
                }

                .order-header-main {
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: 2rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 1rem;
                }
                .order-header-main h1 {
                    margin: 0 0 0.5rem 0;
                }
                .order-date {
                    color: var(--text-muted);
                    margin: 0;
                }
                .order-total-badge {
                    font-size: 1.5rem;
                    font-weight: 700;
                    color: var(--primary);
                }

                .tracking-section {
                    background: #111;
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                    margin-bottom: 2rem;
                }
                .tracking-section h2 {
                    margin-top: 0;
                    margin-bottom: 2rem;
                    font-size: 1.25rem;
                }
                
                .steps-container {
                    display: flex;
                    justify-content: space-between;
                    position: relative;
                    margin-bottom: 2rem;
                }
                .step-item {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    position: relative;
                    flex: 1;
                    z-index: 1;
                }
                .step-icon {
                    width: 40px;
                    height: 40px;
                    background: #222;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #333;
                    color: var(--text-muted);
                    margin-bottom: 0.5rem;
                    transition: all 0.3s;
                }
                .step-item.completed .step-icon, .step-item.current .step-icon {
                    background: var(--primary);
                    border-color: var(--primary);
                    color: #fff;
                }
                .step-label {
                    font-size: 0.9rem;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .step-item.completed .step-label, .step-item.current .step-label {
                    color: #fff;
                }

                .step-line {
                    position: absolute;
                    top: 20px;
                    left: 50%;
                    width: 100%;
                    height: 2px;
                    background: #333;
                    z-index: -1;
                }
                .step-line.completed {
                    background: var(--primary);
                }
                /* Hide line for last item */
                .step-item:last-child .step-line {
                    display: none;
                }
                
                .tracking-info-box {
                    background: rgba(50, 87, 167, 0.1);
                    border: 1px solid rgba(50, 87, 167, 0.3);
                    border-radius: 4px;
                    padding: 1rem;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    color: #3388ff;
                }

                .order-content-grid {
                    display: grid;
                    grid-template-columns: 2fr 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .order-content-grid {
                        grid-template-columns: 1fr;
                    }
                    .steps-container {
                        font-size: 0.8rem;
                    }
                }

                .items-section, .shipping-section {
                    background: #111;
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                }
                .items-section h3, .shipping-section h3 {
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                    font-size: 1.1rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 0.5rem;
                }

                .order-item-row {
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                    margin-bottom: 1rem;
                    padding-bottom: 1rem;
                    border-bottom: 1px solid #1a1a1a;
                }
                .order-item-row:last-child {
                    border-bottom: none;
                    margin-bottom: 0;
                    padding-bottom: 0;
                }
                .item-thumb {
                    width: 60px;
                    height: 60px;
                    border-radius: 4px;
                    background: #000;
                    object-fit: cover;
                }
                .item-info {
                    flex: 1;
                }
                .item-info h4 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1rem;
                }
                .item-info p {
                    margin: 0;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }
                .item-price {
                    font-weight: 600;
                }

                .address-card {
                    display: flex;
                    gap: 1rem;
                    color: var(--text-muted);
                }
                .pin-icon {
                    color: var(--primary);
                    flex-shrink: 0;
                }
                .address-card strong {
                    color: #fff;
                    display: block;
                    margin-bottom: 0.25rem;
                }
                .address-card p {
                    margin: 0;
                    line-height: 1.4;
                }
            `}</style>
        </div>
    );
};

export default OrderDetail;
