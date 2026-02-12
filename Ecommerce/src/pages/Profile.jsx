import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabaseClient';
import { useNavigate, Link } from 'react-router-dom';
import { User, Package, LogOut, MapPin } from 'lucide-react';

const Profile = () => {
    const { user } = useCart();
    const navigate = useNavigate();
    const [orders, setOrders] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            return;
        }

        setTimeout(() => {
            setOrders([
                { id: 'ORD-12345', date: '2023-10-15', total: 299.00, status: 'Shipped' },
                { id: 'ORD-67890', date: '2023-11-02', total: 129.50, status: 'Processing' }
            ]);
            setLoading(false);
        }, 1000);
    }, [user, navigate]);

    const handleSignOut = async () => {
        await supabase.auth.signOut();
        navigate('/');
    };

    if (!user) return null;

    return (
        <div className="profile-page container">
            <div className="profile-header">
                <div className="profile-info">
                    <div className="avatar">
                        <User size={32} />
                    </div>
                    <div>
                        <h1>{user.email}</h1>
                        <p className="user-id">ID: {user.id.slice(0, 8)}...</p>
                    </div>
                </div>
                <button onClick={handleSignOut} className="logout-btn">
                    <LogOut size={16} /> Sign Out
                </button>
            </div>

            <div className="profile-layout">
                <div className="profile-card">
                    <h2><MapPin size={18} /> Shipping Address</h2>
                    <p className="muted-text">No address saved yet.</p>
                    <button className="btn-text">Add Address</button>
                </div>

                <div className="profile-content">
                    <h2><Package size={18} /> Order History</h2>
                    {loading ? (
                        <div className="loading-state">
                            <div className="loading-spinner" />
                            <span>Loading orders...</span>
                        </div>
                    ) : (
                        <div className="orders-list">
                            {orders.map(order => (
                                <Link to={`/order/${order.id}`} key={order.id} className="order-card">
                                    <div className="order-header">
                                        <span className="order-id">#{order.id}</span>
                                        <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                                    </div>
                                    <div className="order-details">
                                        <span>{order.date}</span>
                                        <span className="order-total">${order.total.toFixed(2)}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .profile-page {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2.5rem;
                    padding-bottom: 1.5rem;
                    border-bottom: 1px solid var(--border);
                }
                .profile-info {
                    display: flex;
                    align-items: center;
                    gap: 1.25rem;
                }
                .avatar {
                    width: 64px;
                    height: 64px;
                    background: rgba(0, 229, 255, 0.08);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    color: var(--primary);
                    border: 1px solid rgba(0, 229, 255, 0.2);
                }
                .profile-info h1 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.35rem;
                    font-weight: 700;
                }
                .user-id {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 0.8rem;
                    margin: 0;
                    font-family: monospace;
                }
                .logout-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: 1px solid var(--border);
                    background: transparent;
                    color: rgba(255, 255, 255, 0.5);
                    padding: 0.55rem 1.25rem;
                    border-radius: var(--radius);
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: all 0.3s ease;
                    font-family: inherit;
                }
                .logout-btn:hover {
                    border-color: rgba(255, 59, 48, 0.3);
                    color: #ff3b30;
                    background: rgba(255, 59, 48, 0.06);
                }

                .profile-layout {
                    display: grid;
                    grid-template-columns: 280px 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .profile-layout {
                        grid-template-columns: 1fr;
                    }
                }

                .profile-card, .profile-content {
                    background: rgba(255, 255, 255, 0.02);
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid var(--border);
                }
                .profile-card {
                    height: fit-content;
                }
                .profile-card h2, .profile-content h2 {
                    margin: 0 0 1.25rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.05rem;
                    font-weight: 700;
                }
                .muted-text {
                    color: rgba(255, 255, 255, 0.3);
                    font-size: 0.875rem;
                    margin: 0 0 0.75rem;
                }

                .orders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 0.75rem;
                }
                .order-card {
                    background: rgba(255, 255, 255, 0.03);
                    padding: 1.15rem;
                    border-radius: 8px;
                    border: 1px solid var(--border);
                    transition: all 0.3s ease;
                    text-decoration: none;
                    color: inherit;
                    display: block;
                }
                .order-card:hover {
                    border-color: var(--border-hover);
                    background: rgba(0, 229, 255, 0.03);
                }
                .order-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .order-id {
                    font-weight: 600;
                    color: #fff;
                    font-size: 0.9rem;
                }
                .status-badge {
                    font-size: 0.7rem;
                    padding: 3px 8px;
                    border-radius: 4px;
                    text-transform: uppercase;
                    font-weight: 700;
                    letter-spacing: 0.5px;
                }
                .status-badge.delivered {
                    background: rgba(52, 199, 89, 0.1);
                    color: #34c759;
                    border: 1px solid rgba(52, 199, 89, 0.15);
                }
                .status-badge.processing {
                    background: rgba(0, 229, 255, 0.1);
                    color: var(--primary);
                    border: 1px solid rgba(0, 229, 255, 0.15);
                }
                .status-badge.shipped {
                    background: rgba(255, 159, 10, 0.1);
                    color: #ff9f0a;
                    border: 1px solid rgba(255, 159, 10, 0.15);
                }
                
                .order-details {
                    display: flex;
                    justify-content: space-between;
                    color: rgba(255, 255, 255, 0.35);
                    font-size: 0.85rem;
                }
                .order-total {
                    color: #fff;
                    font-weight: 600;
                }
                .btn-text {
                    background: none;
                    border: none;
                    color: var(--primary);
                    padding: 0;
                    cursor: pointer;
                    font-size: 0.85rem;
                    font-weight: 500;
                    transition: opacity 0.2s;
                }
                .btn-text:hover {
                    opacity: 0.7;
                }
                .loading-state {
                    text-align: center;
                    padding: 3rem 1rem;
                    color: rgba(255, 255, 255, 0.35);
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 1rem;
                    font-size: 0.9rem;
                }
                .loading-spinner {
                    width: 24px;
                    height: 24px;
                    border: 2px solid var(--border);
                    border-top-color: var(--primary);
                    border-radius: 50%;
                    animation: spin 0.8s linear infinite;
                }
                @keyframes spin {
                    to { transform: rotate(360deg); }
                }
            `}</style>
        </div>
    );
};

export default Profile;
