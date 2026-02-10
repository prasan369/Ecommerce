import React, { useState } from 'react';
import { BarChart, Package, Users, DollarSign, Plus, Edit, Trash2 } from 'lucide-react';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');

    const stats = [
        { label: 'Total Sales', value: '$12,450', icon: DollarSign, color: '#FC8801' },
        { label: 'Total Orders', value: '145', icon: Package, color: '#3257A7' },
        { label: 'Active Users', value: '2,340', icon: Users, color: '#10B981' },
    ];

    const mockProducts = [
        { id: 1, name: 'MDR-Z1R Premium Headphones', price: '2299.00', stock: 12 },
        { id: 2, name: 'Pro X Superlight Gaming Mouse', price: '159.99', stock: 45 },
        { id: 3, name: 'Mechanical Keyboard RGB', price: '129.50', stock: 30 },
        { id: 4, name: 'UltraWide Monitor 34"', price: '499.00', stock: 8 },
        { id: 5, name: 'Smartphone Pro Max', price: '1099.00', stock: 15 },
    ];

    return (
        <div className="admin-dashboard container">
            <div className="admin-header">
                <h1>Admin Dashboard</h1>
                <div className="admin-nav">
                    <button className={activeTab === 'overview' ? 'active' : ''} onClick={() => setActiveTab('overview')}>Overview</button>
                    <button className={activeTab === 'products' ? 'active' : ''} onClick={() => setActiveTab('products')}>Products</button>
                    <button className={activeTab === 'orders' ? 'active' : ''} onClick={() => setActiveTab('orders')}>Orders</button>
                </div>
            </div>

            {activeTab === 'overview' && (
                <div className="overview-section">
                    <div className="stats-grid">
                        {stats.map((stat, index) => (
                            <div key={index} className="stat-card">
                                <div className="stat-icon" style={{ backgroundColor: `${stat.color}20`, color: stat.color }}>
                                    <stat.icon size={24} />
                                </div>
                                <div className="stat-info">
                                    <h3>{stat.value}</h3>
                                    <p>{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="chart-placeholder">
                        <BarChart size={48} color="#444" />
                        <p>Sales Analytics Chart Placeholder</p>
                    </div>
                </div>
            )}

            {activeTab === 'products' && (
                <div className="products-section">
                    <div className="section-actions">
                        <h2>Product Management</h2>
                        <button className="btn-primary"><Plus size={16} /> Add Product</button>
                    </div>

                    <table className="admin-table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Price</th>
                                <th>Stock</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {mockProducts.map(product => (
                                <tr key={product.id}>
                                    <td>#{product.id}</td>
                                    <td>{product.name}</td>
                                    <td>${product.price}</td>
                                    <td>{product.stock}</td>
                                    <td className="actions-cell">
                                        <button className="icon-btn edit"><Edit size={16} /></button>
                                        <button className="icon-btn delete"><Trash2 size={16} /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}

            {activeTab === 'orders' && (
                <div className="orders-section">
                    <h2>Recent Orders</h2>
                    <p>Order management interface would go here.</p>
                </div>
            )}

            <style>{`
                .admin-dashboard {
                    padding-top: 2rem;
                    padding-bottom: 4rem;
                }
                .admin-header {
                    margin-bottom: 2rem;
                    border-bottom: 1px solid #222;
                    padding-bottom: 1rem;
                }
                .admin-nav {
                    display: flex;
                    gap: 1rem;
                    margin-top: 1rem;
                }
                .admin-nav button {
                    background: none;
                    color: var(--text-muted);
                    padding: 0.5rem 1rem;
                    border-bottom: 2px solid transparent;
                    border-radius: 0;
                }
                .admin-nav button.active {
                    color: var(--primary);
                    border-bottom-color: var(--primary);
                }

                .stats-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
                    gap: 1.5rem;
                    margin-bottom: 2rem;
                }
                .stat-card {
                    background: #111;
                    padding: 1.5rem;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                    display: flex;
                    align-items: center;
                    gap: 1rem;
                }
                .stat-icon {
                    width: 48px;
                    height: 48px;
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }
                .stat-info h3 {
                    margin: 0;
                    font-size: 1.5rem;
                }
                .stat-info p {
                    margin: 0;
                    color: var(--text-muted);
                    font-size: 0.9rem;
                }

                .chart-placeholder {
                    background: #111;
                    height: 300px;
                    border-radius: var(--radius);
                    border: 1px solid #222;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    color: var(--text-muted);
                }

                .section-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .admin-table {
                    width: 100%;
                    border-collapse: collapse;
                    background: #111;
                    border-radius: var(--radius);
                    overflow: hidden;
                }
                .admin-table th, .admin-table td {
                    padding: 1rem;
                    text-align: left;
                    border-bottom: 1px solid #222;
                }
                .admin-table th {
                    background: #1a1a1a;
                    color: var(--text-muted);
                    font-weight: 500;
                }
                .actions-cell {
                    display: flex;
                    gap: 0.5rem;
                }
                .icon-btn {
                    padding: 0.5rem;
                    border-radius: 4px;
                    background: #222;
                    color: var(--text-muted);
                }
                .icon-btn.edit:hover {
                    color: var(--primary);
                    background: rgba(252, 136, 1, 0.1);
                }
                .icon-btn.delete:hover {
                    color: var(--alert);
                    background: rgba(217, 37, 10, 0.1);
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
