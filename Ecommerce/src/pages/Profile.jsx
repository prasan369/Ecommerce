import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabaseClient';
import { useNavigate } from 'react-router-dom';
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

        // Mock fetching orders for now
        // In real app: const { data } = await supabase.from('orders').select('*').eq('user_id', user.id);
        setTimeout(() => {
            setOrders([
                { id: 'ORD-12345', date: '2023-10-15', total: 299.00, status: 'Delivered' },
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
                        <User size={40} color="#fff" />
                    </div>
                    <div>
                        <h1>{user.email}</h1>
                        <p className="user-id">ID: {user.id.slice(0, 8)}...</p>
                    </div>
                </div>
                <button onClick={handleSignOut} className="btn-secondary logout-btn">
                    <LogOut size={16} /> Sign Out
                </button>
            </div>

            <div className="profile-layout">
                <div className="profile-card">
                    <h2><MapPin size={20} /> Shipping Address</h2>
                    <p className="muted-text">No address saved yet.</p>
                    <button className="btn-text">Add Address</button>
                </div>

                <div className="profile-content">
                    <h2><Package size={20} /> Order History</h2>
                    {loading ? (
                        <p>Loading orders...</p>
                    ) : (
                        <div className="orders-list">
                            {orders.map(order => (
                                <div key={order.id} className="order-card">
                                    <div className="order-header">
                                        <span className="order-id">#{order.id}</span>
                                        <span className={`status-badge ${order.status.toLowerCase()}`}>{order.status}</span>
                                    </div>
                                    <div className="order-details">
                                        <span>{order.date}</span>
                                        <span className="order-total">${order.total.toFixed(2)}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>

            <style>{`
                .profile-page {
                    padding-top: 3rem;
                    padding-bottom: 4rem;
                }
                .profile-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 3rem;
                    padding-bottom: 2rem;
                    border-bottom: 1px solid #222;
                }
                .profile-info {
                    display: flex;
                    align-items: center;
                    gap: 1.5rem;
                }
                .avatar {
                    width: 80px;
                    height: 80px;
                    background: #222;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    border: 2px solid #333;
                }
                .profile-info h1 {
                    margin: 0 0 0.25rem 0;
                    font-size: 1.5rem;
                }
                .user-id {
                    color: var(--text-muted);
                    font-size: 0.9rem;
                    margin: 0;
                }
                .logout-btn {
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    border: 1px solid #333;
                    background: transparent;
                    color: var(--text-muted);
                    padding: 0.5rem 1rem;
                    border-radius: 4px;
                }
                .logout-btn:hover {
                    border-color: var(--alert);
                    color: var(--alert);
                }

                .profile-layout {
                    display: grid;
                    grid-template-columns: 300px 1fr;
                    gap: 2rem;
                }
                @media (max-width: 768px) {
                    .profile-layout {
                        grid-template-columns: 1fr;
                    }
                }

                .profile-card, .profile-content {
                    background: #111;
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                }
                .profile-card h2, .profile-content h2 {
                    margin-top: 0;
                    margin-bottom: 1.5rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    font-size: 1.2rem;
                }

                .orders-list {
                    display: flex;
                    flex-direction: column;
                    gap: 1rem;
                }
                .order-card {
                    background: #1a1a1a;
                    padding: 1rem;
                    border-radius: 4px;
                    border: 1px solid #333;
                }
                .order-header {
                    display: flex;
                    justify-content: space-between;
                    margin-bottom: 0.5rem;
                }
                .order-id {
                    font-weight: 600;
                    color: #fff;
                }
                .status-badge {
                    font-size: 0.8rem;
                    padding: 0.2rem 0.5rem;
                    border-radius: 4px;
                    text-transform: uppercase;
                    font-weight: 700;
                }
                .status-badge.delivered {
                    background: rgba(16, 185, 129, 0.2);
                    color: #10B981;
                }
                .status-badge.processing {
                    background: rgba(50, 87, 167, 0.2);
                    color: #3257A7;
                }
                
                .order-details {
                    display: flex;
                    justify-content: space-between;
                    color: var(--text-muted);
                    font-size: 0.9rem;
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
                    margin-top: 0.5rem;
                }
                .btn-text:hover {
                    text-decoration: underline;
                }
            `}</style>
        </div>
    );
};

export default Profile;
