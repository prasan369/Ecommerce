import React, { useState, useEffect } from 'react';
import { BarChart, Package, Users, DollarSign, Plus, Edit, Trash2, X, Save, Upload, Image as ImageIcon, Loader } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const AdminDashboard = () => {
    const [activeTab, setActiveTab] = useState('overview');
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [showAddModal, setShowAddModal] = useState(false);

    // Form State
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        price: '',
        sale_price: '',
        category_id: '',
        stock_quantity: '',
        image_url: '', // Main image
        images: '' // comma separated for additional, or we could make this an array later
    });

    const [uploading, setUploading] = useState(false);
    const [imageFile, setImageFile] = useState(null);
    const [previewUrl, setPreviewUrl] = useState('');
    const [editingProduct, setEditingProduct] = useState(null);

    const fetchProducts = async () => {
        setLoading(true);
        const { data, error } = await supabase
            .from('products')
            .select('*, categories(name)')
            .order('created_at', { ascending: false });

        if (error) console.error('Error fetching products:', error);
        else setProducts(data || []);
        setLoading(false);
    };

    const fetchCategories = async () => {
        const { data, error } = await supabase.from('categories').select('*');
        if (error) console.error('Error fetching categories:', error);
        else setCategories(data || []);
    };

    useEffect(() => {
        fetchProducts();
        fetchCategories();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(file);
            // Create a local preview URL
            const objectUrl = URL.createObjectURL(file);
            setPreviewUrl(objectUrl);
        }
    };

    const uploadImage = async (file) => {
        try {
            setUploading(true);
            const fileExt = file.name.split('.').pop();
            const fileName = `${Math.random()}.${fileExt}`;
            const filePath = `${fileName}`;

            const { error: uploadError } = await supabase.storage
                .from('product-images')
                .upload(filePath, file);

            if (uploadError) {
                throw uploadError;
            }

            const { data } = supabase.storage
                .from('product-images')
                .getPublicUrl(filePath);

            return data.publicUrl;
        } catch (error) {
            console.error('Error uploading image:', error);
            alert('Error uploading image!');
            return null;
        } finally {
            setUploading(false);
        }
    };

    const handleEdit = (product) => {
        setEditingProduct(product);
        setFormData({
            name: product.name,
            description: product.description || '',
            price: product.price,
            sale_price: product.sale_price || '',
            category_id: product.category_id || '',
            stock_quantity: product.stock_quantity,
            image_url: product.images && product.images.length > 0 ? product.images[0] : '',
            images: product.images && product.images.length > 1 ? product.images.slice(1).join(', ') : ''
        });
        setPreviewUrl(product.images && product.images.length > 0 ? product.images[0] : '');
        setShowAddModal(true);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        let finalImageUrl = formData.image_url;

        // If a file was selected, upload it first
        if (imageFile) {
            const uploadedUrl = await uploadImage(imageFile);
            if (uploadedUrl) {
                finalImageUrl = uploadedUrl;
            } else {
                return; // Stop if upload failed
            }
        }

        const slug = formData.name.toLowerCase().replace(/ /g, '-').replace(/[^\w-]+/g, '');
        // For simplicity, we'll just put the main image in the images array for now
        // or keep existing logic if user enters CSV manually
        let imagesArray = formData.images ? formData.images.split(',').map(s => s.trim()) : [];

        if (finalImageUrl) {
            // If main image URL changed or new file uploaded, make it first
            if (!imagesArray.includes(finalImageUrl)) {
                imagesArray.unshift(finalImageUrl);
            } else if (imagesArray[0] !== finalImageUrl) {
                // Ensure it's first if it exists but isn't first
                imagesArray = imagesArray.filter(url => url !== finalImageUrl);
                imagesArray.unshift(finalImageUrl);
            }
        }

        const productData = {
            name: formData.name,
            description: formData.description,
            price: parseFloat(formData.price),
            sale_price: formData.sale_price ? parseFloat(formData.sale_price) : null,
            category_id: formData.category_id ? parseInt(formData.category_id) : null,
            stock_quantity: parseInt(formData.stock_quantity) || 0,
            images: imagesArray,
            // details: {} // jsonb
        };

        if (!editingProduct) {
            // New product needs slug
            productData.slug = slug + '-' + Date.now();
        }

        let error;
        let data;

        if (editingProduct) {
            // Update
            const response = await supabase
                .from('products')
                .update(productData)
                .eq('id', editingProduct.id)
                .select();
            data = response.data;
            error = response.error;
        } else {
            // Insert
            const response = await supabase
                .from('products')
                .insert([productData])
                .select();
            data = response.data;
            error = response.error;
        }

        if (error) {
            alert('Error saving product: ' + error.message);
        } else {
            if (editingProduct) {
                setProducts(products.map(p => p.id === editingProduct.id ? data[0] : p));
            } else {
                setProducts([data[0], ...products]);
            }
            setShowAddModal(false);
            resetForm();
        }
    };

    const resetForm = () => {
        setFormData({
            name: '', description: '', price: '', sale_price: '',
            category_id: '', stock_quantity: '', image_url: '', images: ''
        });
        setImageFile(null);
        setPreviewUrl('');
        setEditingProduct(null);
    };

    const handleDelete = async (id) => {
        if (!window.confirm('Are you sure you want to delete this product?')) return;

        const { error } = await supabase.from('products').delete().eq('id', id);
        if (error) {
            alert('Error deleting product: ' + error.message);
        } else {
            setProducts(products.filter(p => p.id !== id));
        }
    };

    // Stats (Mock for now, can be real later)
    const stats = [
        { label: 'Total Sales', value: '$12,450', icon: DollarSign, color: '#FC8801' },
        { label: 'Total Orders', value: '145', icon: Package, color: '#3257A7' },
        { label: 'Active Users', value: '2,340', icon: Users, color: '#10B981' },
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
                </div>
            )}

            {activeTab === 'products' && (
                <div className="products-section">
                    <div className="section-actions">
                        <h2>Product Management</h2>
                        <button className="btn-primary" onClick={() => { resetForm(); setShowAddModal(true); }}><Plus size={16} /> Add Product</button>
                    </div>

                    {loading ? (
                        <p>Loading products...</p>
                    ) : (
                        <div className="table-container">
                            <table className="admin-table">
                                <thead>
                                    <tr>
                                        <th>Image</th>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Stock</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.map(product => (
                                        <tr key={product.id}>
                                            <td>
                                                <div className="product-thumb">
                                                    {product.images && product.images[0] ? (
                                                        <img src={product.images[0]} alt={product.name} />
                                                    ) : (
                                                        <div className="no-image">No Img</div>
                                                    )}
                                                </div>
                                            </td>
                                            <td>{product.name}</td>
                                            <td>${product.price}</td>
                                            <td>{product.stock_quantity}</td>
                                            <td>{product.categories?.name || '-'}</td>
                                            <td className="actions-cell">
                                                <button className="icon-btn edit" onClick={() => handleEdit(product)}><Edit size={16} /></button>
                                                <button className="icon-btn delete" onClick={() => handleDelete(product.id)}><Trash2 size={16} /></button>
                                            </td>
                                        </tr>
                                    ))}
                                    {products.length === 0 && (
                                        <tr>
                                            <td colSpan="6" style={{ textAlign: 'center' }}>No products found. Add one!</td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    )}
                </div>
            )}

            {/* Add/Edit Product Modal */}
            {showAddModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h2>{editingProduct ? 'Edit Product' : 'Add New Product'}</h2>
                            <button className="close-btn" onClick={() => { setShowAddModal(false); resetForm(); }}><X size={24} /></button>
                        </div>
                        <form onSubmit={handleSubmit} className="product-form">
                            <div className="form-group">
                                <label>Product Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Price</label>
                                    <input type="number" name="price" value={formData.price} onChange={handleInputChange} required step="0.01" />
                                </div>
                                <div className="form-group">
                                    <label>Sale Price (Optional)</label>
                                    <input type="number" name="sale_price" value={formData.sale_price} onChange={handleInputChange} step="0.01" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Category</label>
                                    <select name="category_id" value={formData.category_id} onChange={handleInputChange} required>
                                        <option value="">Select Category</option>
                                        {categories.map(cat => (
                                            <option key={cat.id} value={cat.id}>{cat.name}</option>
                                        ))}
                                    </select>
                                    {categories.length === 0 && <small className="text-muted">No categories found. Please add categories in DB first.</small>}
                                </div>
                                <div className="form-group">
                                    <label>Stock Quantity</label>
                                    <input type="number" name="stock_quantity" value={formData.stock_quantity} onChange={handleInputChange} required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Description</label>
                                <textarea name="description" value={formData.description} onChange={handleInputChange} rows="3"></textarea>
                            </div>

                            {/* Image Upload Section */}
                            <div className="form-group">
                                <label>Product Image</label>
                                <div className="image-upload-wrapper">
                                    <div className="upload-box" onClick={() => document.getElementById('fileInput').click()}>
                                        {previewUrl ? (
                                            <img src={previewUrl} alt="Preview" className="upload-preview" />
                                        ) : formData.image_url ? (
                                            <img src={formData.image_url} alt="URL Preview" className="upload-preview" />
                                        ) : (
                                            <div className="upload-placeholder">
                                                <Upload size={24} />
                                                <span>Click to Upload Image</span>
                                            </div>
                                        )}
                                    </div>
                                    <input
                                        type="file"
                                        id="fileInput"
                                        accept="image/*"
                                        onChange={handleFileChange}
                                        style={{ display: 'none' }}
                                    />
                                    {uploading && <div className="uploading-indicator"><Loader className="spin" size={16} /> Uploading...</div>}
                                </div>
                                <div className="or-divider"><span>OR</span></div>
                                <input
                                    type="text"
                                    name="image_url"
                                    value={formData.image_url}
                                    onChange={(e) => { handleInputChange(e); setPreviewUrl(''); }}
                                    placeholder="Enter Image URL directly"
                                    className="url-input"
                                />
                            </div>

                            <div className="form-actions">
                                <button type="button" className="btn-secondary" onClick={() => { setShowAddModal(false); resetForm(); }}>Cancel</button>
                                <button type="submit" className="btn-primary" disabled={uploading}>
                                    {uploading ? 'Uploading...' : <><Save size={18} /> {editingProduct ? 'Update Product' : 'Save Product'}</>}
                                </button>
                            </div>
                        </form>
                    </div>
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
                    cursor: pointer;
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
                
                .section-actions {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 1.5rem;
                }

                .table-container {
                    overflow-x: auto;
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
                .product-thumb {
                    width: 48px;
                    height: 48px;
                    border-radius: 4px;
                    overflow: hidden;
                    background: #222;
                }
                .product-thumb img {
                    width: 100%;
                    height: 100%;
                    object-fit: cover;
                }
                .no-image {
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 0.7rem;
                    color: #555;
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
                    cursor: pointer;
                }
                .icon-btn.edit:hover {
                    color: var(--primary);
                    background: rgba(252, 136, 1, 0.1);
                }
                .icon-btn.delete:hover {
                    color: var(--alert);
                    background: rgba(217, 37, 10, 0.1);
                }

                /* Modal Styles */
                .modal-overlay {
                    position: fixed;
                    top: 0;
                    left: 0;
                    right: 0;
                    bottom: 0;
                    background: rgba(0,0,0,0.7);
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    backdrop-filter: blur(4px);
                }
                .modal-content {
                    background: #111;
                    padding: 2rem;
                    border-radius: var(--radius);
                    border: 1px solid #333;
                    width: 100%;
                    max-width: 600px;
                    max-height: 90vh;
                    overflow-y: auto;
                }
                .modal-header {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-bottom: 2rem;
                }
                .close-btn {
                    background: none;
                    color: var(--text-muted);
                    padding: 0;
                }
                
                .form-group {
                    margin-bottom: 1.5rem;
                }
                .form-row {
                    display: grid;
                    grid-template-columns: 1fr 1fr;
                    gap: 1rem;
                }
                .form-group label {
                    display: block;
                    margin-bottom: 0.5rem;
                    color: var(--text-muted);
                }
                .form-group input, .form-group select, .form-group textarea {
                    width: 100%;
                    padding: 0.75rem;
                    background: #222;
                    border: 1px solid #333;
                    color: #fff;
                    border-radius: 4px;
                }
                .form-group input:focus, .form-group select:focus, .form-group textarea:focus {
                    outline: none;
                    border-color: var(--primary);
                }

                /* Image Upload Styles */
                .image-upload-wrapper {
                    margin-bottom: 1rem;
                }
                .upload-box {
                    width: 100%;
                    height: 150px;
                    border: 2px dashed #444;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    cursor: pointer;
                    overflow: hidden;
                    background: #1a1a1a;
                    transition: border-color 0.2s;
                }
                .upload-box:hover {
                    border-color: var(--primary);
                }
                .upload-placeholder {
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--text-muted);
                }
                .upload-preview {
                    width: 100%;
                    height: 100%;
                    object-fit: contain;
                }
                .or-divider {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    margin: 1rem 0;
                    color: var(--text-muted);
                    font-size: 0.8rem;
                }
                .or-divider::before, .or-divider::after {
                    content: '';
                    flex: 1;
                    height: 1px;
                    background: #333;
                    margin: 0 1rem;
                }
                .uploading-indicator {
                    margin-top: 0.5rem;
                    color: var(--primary);
                    font-size: 0.9rem;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .spin {
                    animation: spin 1s linear infinite;
                }
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }

                .form-actions {
                    display: flex;
                    justify-content: flex-end;
                    gap: 1rem;
                    margin-top: 2rem;
                }
                .btn-secondary {
                    background: #222;
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--radius);
                }
                .btn-primary {
                    background: var(--primary);
                    color: #fff;
                    padding: 0.75rem 1.5rem;
                    border-radius: var(--radius);
                    font-weight: 600;
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                }
                .btn-primary:disabled {
                    opacity: 0.7;
                    cursor: not-allowed;
                }
                .text-muted {
                    color: #666;
                    font-size: 0.8rem;
                    margin-top: 0.25rem;
                    display: block;
                }
            `}</style>
        </div>
    );
};

export default AdminDashboard;
