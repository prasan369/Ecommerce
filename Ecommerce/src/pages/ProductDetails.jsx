import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { ShoppingCart, Heart, Star, ShieldCheck, Truck, RotateCcw } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { supabase } from '../lib/supabaseClient';

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedImage, setSelectedImage] = useState('');
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*, categories(name)')
          .eq('id', id)
          .single();

        if (error) throw error;

        const mappedProduct = {
          ...data,
          price: parseFloat(data.price),
          sale_price: data.sale_price ? parseFloat(data.sale_price) : null,
          images: data.images && data.images.length > 0 ? data.images : [data.image_url || 'https://via.placeholder.com/600'],
          category: data.categories?.name || 'Uncategorized',
          specs: data.specs || {}
        };

        setProduct(mappedProduct);
        setSelectedImage(mappedProduct.images[0]);
      } catch (err) {
        console.error('Error fetching product:', err);
        setError('Product not found or error loading details.');
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProduct();
    }
  }, [id]);

  const handleAddToCart = () => {
    if (!product) return;
    const cartItem = {
      ...product,
      image: product.images[0]
    };

    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }
    alert('Added to cart!');
  };

  if (loading) return (
    <div className="product-details-page container" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '60vh' }}>
      <div style={{ textAlign: 'center', color: 'rgba(255,255,255,0.4)' }}>
        <div className="loading-spinner" style={{ width: 28, height: 28, border: '2px solid rgba(255,255,255,0.08)', borderTopColor: '#00e5ff', borderRadius: '50%', animation: 'spin 0.8s linear infinite', margin: '0 auto 1rem' }} />
        Loading...
      </div>
    </div>
  );
  if (error || !product) return <div className="product-details-page container" style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.4)' }}>{error || 'Product not found'}</div>;

  return (
    <div className="product-details-page container">
      <div className="product-layout">
        <div className="product-gallery">
          <div className="main-image-container">
            <img src={selectedImage} alt={product.name} className="main-image" />
          </div>
          <div className="thumbnail-list">
            {product.images.map((img, idx) => (
              <button
                key={idx}
                className={`thumbnail ${selectedImage === img ? 'active' : ''}`}
                onClick={() => setSelectedImage(img)}
              >
                <img src={img} alt={`Thumbnail ${idx}`} />
              </button>
            ))}
          </div>
        </div>

        <div className="product-info">
          <div className="breadcrumb">
            Electronics / {product.category} / {product.name}
          </div>

          <h1 className="product-title">{product.name}</h1>

          <div className="rating-row">
            <div className="stars">
              <Star size={14} fill="#00e5ff" stroke="#00e5ff" />
              <Star size={14} fill="#00e5ff" stroke="#00e5ff" />
              <Star size={14} fill="#00e5ff" stroke="#00e5ff" />
              <Star size={14} fill="#00e5ff" stroke="#00e5ff" />
              <Star size={14} fill="#00e5ff" stroke="#00e5ff" />
            </div>
            <span className="reviews-count">(24 reviews)</span>
          </div>

          <div className="price-section">
            <span className="current-price">${product.sale_price || product.price}</span>
            {product.sale_price && (
              <>
                <span className="old-price">${product.price}</span>
                <span className="save-badge">Save ${(product.price - product.sale_price).toFixed(2)}</span>
              </>
            )}
          </div>

          <p className="description">{product.description}</p>

          <div className="stock-status">
            {product.stock_quantity > 0 ? (
              <span className="in-stock">● In Stock ({product.stock_quantity})</span>
            ) : (
              <span className="out-of-stock">● Out of Stock</span>
            )}
          </div>

          <div className="actions-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
              <span>{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={product.stock_quantity <= 0}>
              <ShoppingCart size={18} /> {product.stock_quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="wishlist-btn-large">
              <Heart size={18} />
            </button>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <div className="feature-icon-wrap"><ShieldCheck size={20} /></div>
              <div>
                <h4>1 Year Warranty</h4>
                <p>Official manufacturer warranty</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrap"><Truck size={20} /></div>
              <div>
                <h4>Free Shipping</h4>
                <p>On all orders over $500</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon-wrap"><RotateCcw size={20} /></div>
              <div>
                <h4>30 Day Returns</h4>
                <p>Hassle-free return policy</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="specs-section">
        <h2>Technical Specifications</h2>
        <table className="specs-table">
          <tbody>
            {(product.specs && Object.keys(product.specs).length > 0) ? Object.entries(product.specs).map(([key, value]) => (
              <tr key={key}>
                <th>{key}</th>
                <td>{value}</td>
              </tr>
            )) : (
              <tr><td style={{ color: 'rgba(255,255,255,0.3)' }}>No specifications available</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <style>{`
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        .product-details-page {
          padding-top: 2rem;
          padding-bottom: 4rem;
        }
        .product-layout {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3rem;
          margin-bottom: 4rem;
        }
        @media (min-width: 768px) {
          .product-layout {
            grid-template-columns: 1fr 1fr;
          }
        }
        
        .main-image-container {
          background: #0a0a0f;
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 1rem;
          border: 1px solid var(--border);
        }
        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .thumbnail-list {
          display: flex;
          gap: 0.75rem;
          flex-wrap: wrap;
        }
        .thumbnail {
          width: 72px;
          height: 72px;
          border: 1px solid var(--border);
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          background: #0a0a0f;
          padding: 0;
          transition: all 0.3s ease;
        }
        .thumbnail.active {
          border-color: var(--primary);
          box-shadow: 0 0 0 2px rgba(0, 229, 255, 0.15);
        }
        .thumbnail:hover {
          border-color: rgba(255, 255, 255, 0.2);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .breadcrumb {
          color: rgba(255, 255, 255, 0.3);
          font-size: 0.8rem;
          margin-bottom: 1rem;
        }
        .product-title {
          font-size: clamp(1.5rem, 3vw, 2.25rem);
          font-weight: 800;
          margin: 0 0 1rem 0;
          line-height: 1.2;
          letter-spacing: -0.02em;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .stars {
          display: flex;
          gap: 2px;
        }
        .reviews-count {
          color: rgba(255, 255, 255, 0.35);
          font-size: 0.85rem;
        }
        
        .price-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .current-price {
          font-size: 2rem;
          font-weight: 800;
          color: var(--primary);
        }
        .old-price {
          text-decoration: line-through;
          color: rgba(255, 255, 255, 0.3);
          font-size: 1.1rem;
        }
        .save-badge {
          background: rgba(0, 229, 255, 0.1);
          color: var(--primary);
          padding: 4px 10px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.8rem;
          border: 1px solid rgba(0, 229, 255, 0.15);
        }

        .description {
          line-height: 1.8;
          color: rgba(255, 255, 255, 0.5);
          margin-bottom: 1.5rem;
          font-size: 0.95rem;
        }

        .stock-status {
            margin-bottom: 1.5rem;
            font-weight: 600;
            font-size: 0.9rem;
        }
        .in-stock {
            color: #34c759;
        }
        .out-of-stock {
            color: #ff3b30;
        }

        .actions-section {
          display: flex;
          gap: 0.75rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid var(--border);
          border-radius: var(--radius);
          overflow: hidden;
        }
        .quantity-selector button {
          background: rgba(255, 255, 255, 0.04);
          color: rgba(255, 255, 255, 0.7);
          width: 42px;
          height: 48px;
          font-size: 1.1rem;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.2s ease;
        }
        .quantity-selector button:hover {
          background: rgba(0, 229, 255, 0.08);
          color: var(--primary);
        }
        .quantity-selector span {
          width: 42px;
          text-align: center;
          font-weight: 600;
          font-variant-numeric: tabular-nums;
        }
        .add-to-cart-btn {
          flex: 1;
          background: var(--primary);
          color: var(--background);
          font-weight: 700;
          font-size: 0.95rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          transition: all 0.3s ease;
          padding: 0 2rem;
          letter-spacing: 0.3px;
        }
        .add-to-cart-btn:hover:not(:disabled) {
          box-shadow: 0 8px 24px rgba(0, 229, 255, 0.3);
          transform: translateY(-1px);
        }
        .add-to-cart-btn:disabled {
            background: rgba(255, 255, 255, 0.06);
            color: rgba(255, 255, 255, 0.25);
            cursor: not-allowed;
        }
        .wishlist-btn-large {
          width: 48px;
          height: 48px;
          border: 1px solid var(--border);
          background: transparent;
          color: rgba(255, 255, 255, 0.5);
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.3s ease;
        }
        .wishlist-btn-large:hover {
          border-color: var(--border-hover);
          color: var(--primary);
          background: rgba(0, 229, 255, 0.06);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
          border-top: 1px solid var(--border);
          padding-top: 2rem;
        }
        .feature-item {
          display: flex;
          gap: 0.75rem;
          align-items: flex-start;
        }
        .feature-icon-wrap {
          width: 40px;
          height: 40px;
          min-width: 40px;
          border-radius: 50%;
          background: rgba(0, 229, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
        }
        .feature-item h4 {
          margin: 0 0 0.2rem 0;
          font-size: 0.9rem;
          font-weight: 600;
        }
        .feature-item p {
          margin: 0;
          font-size: 0.8rem;
          color: rgba(255, 255, 255, 0.35);
        }

        .specs-section {
          background: rgba(255, 255, 255, 0.02);
          padding: 2rem;
          border-radius: var(--radius);
          border: 1px solid var(--border);
        }
        .specs-section h2 {
          margin: 0 0 1.5rem;
          font-size: 1.25rem;
          font-weight: 700;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
        }
        .specs-table th, .specs-table td {
          padding: 0.85rem 1rem;
          border-bottom: 1px solid var(--border);
          text-align: left;
          font-size: 0.9rem;
        }
        .specs-table th {
          width: 30%;
          color: rgba(255, 255, 255, 0.4);
          font-weight: 500;
        }
        .specs-table tr:last-child th, .specs-table tr:last-child td {
          border-bottom: none;
        }
      `}</style>
    </div>
  );
};

export default ProductDetails;
