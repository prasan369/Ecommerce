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
        // Fetch product by ID
        const { data, error } = await supabase
          .from('products')
          .select('*, categories(name)')
          .eq('id', id)
          .single();

        if (error) throw error;

        // Map/Normalize data
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
    // Normalize for cart (ensure 'image' property exists)
    const cartItem = {
      ...product,
      image: product.images[0]
    };

    // Add multiple items based on quantity
    for (let i = 0; i < quantity; i++) {
      addToCart(cartItem);
    }
    alert('Added to cart!');
  };

  if (loading) return <div className="product-details-page container" style={{ textAlign: 'center', padding: '4rem' }}>Loading...</div>;
  if (error || !product) return <div className="product-details-page container" style={{ textAlign: 'center', padding: '4rem' }}>{error || 'Product not found'}</div>;

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
              <Star size={16} fill="#FFC107" stroke="#FFC107" />
              <Star size={16} fill="#FFC107" stroke="#FFC107" />
              <Star size={16} fill="#FFC107" stroke="#FFC107" />
              <Star size={16} fill="#FFC107" stroke="#FFC107" />
              <Star size={16} fill="#FFC107" stroke="#FFC107" />
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
              <span style={{ color: '#10B981' }}>In Stock ({product.stock_quantity})</span>
            ) : (
              <span style={{ color: '#EF4444' }}>Out of Stock</span>
            )}
          </div>

          <div className="actions-section">
            <div className="quantity-selector">
              <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>-</button>
              <span>{quantity}</span>
              <button onChange={() => { }} onClick={() => setQuantity(quantity + 1)}>+</button>
            </div>
            <button className="add-to-cart-btn" onClick={handleAddToCart} disabled={product.stock_quantity <= 0}>
              <ShoppingCart size={20} /> {product.stock_quantity > 0 ? 'Add to Cart' : 'Out of Stock'}
            </button>
            <button className="wishlist-btn-large">
              <Heart size={20} />
            </button>
          </div>

          <div className="features-grid">
            <div className="feature-item">
              <ShieldCheck size={24} className="icon" />
              <div>
                <h4>1 Year Warranty</h4>
                <p>Official manufacturer warranty</p>
              </div>
            </div>
            <div className="feature-item">
              <Truck size={24} className="icon" />
              <div>
                <h4>Free Shipping</h4>
                <p>On all orders over $500</p>
              </div>
            </div>
            <div className="feature-item">
              <RotateCcw size={24} className="icon" />
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
              <tr><td>No specifications available</td></tr>
            )}
          </tbody>
        </table>
      </div>

      <style>{`
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
          background-color: #1a1a1a;
          border-radius: var(--radius);
          overflow: hidden;
          margin-bottom: 1rem;
          border: 1px solid #222;
        }
        .main-image {
          width: 100%;
          height: auto;
          display: block;
        }
        .thumbnail-list {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .thumbnail {
          width: 80px;
          height: 80px;
          border: 1px solid #333;
          border-radius: var(--radius);
          overflow: hidden;
          cursor: pointer;
          background: #111;
          padding: 0;
        }
        .thumbnail.active {
          border-color: var(--primary);
        }
        .thumbnail img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .breadcrumb {
          color: var(--text-muted);
          font-size: 0.9rem;
          margin-bottom: 1rem;
        }
        .product-title {
          font-size: 2.5rem;
          margin: 0 0 1rem 0;
          line-height: 1.2;
        }
        .rating-row {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }
        .reviews-count {
          color: var(--text-muted);
          font-size: 0.9rem;
        }
        
        .price-section {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }
        .current-price {
          font-size: 2rem;
          font-weight: 700;
          color: var(--primary);
        }
        .old-price {
          text-decoration: line-through;
          color: var(--text-muted);
          font-size: 1.2rem;
        }
        .save-badge {
          background-color: rgba(252, 136, 1, 0.1);
          color: var(--primary);
          padding: 4px 8px;
          border-radius: 4px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .description {
          line-height: 1.7;
          color: #ccc;
          margin-bottom: 2rem;
        }

        .stock-status {
            margin-bottom: 1.5rem;
            font-weight: 600;
        }

        .actions-section {
          display: flex;
          gap: 1rem;
          margin-bottom: 2.5rem;
          flex-wrap: wrap;
        }
        .quantity-selector {
          display: flex;
          align-items: center;
          border: 1px solid #333;
          border-radius: var(--radius);
          overflow: hidden;
        }
        .quantity-selector button {
          background: #222;
          color: #fff;
          width: 40px;
          height: 48px;
          font-size: 1.2rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .quantity-selector button:hover {
          background-color: #333;
        }
        .quantity-selector span {
          width: 40px;
          text-align: center;
          font-weight: 600;
        }
        .add-to-cart-btn {
          flex: 1;
          background-color: var(--primary);
          color: #fff;
          font-weight: 700;
          font-size: 1.1rem;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 0.75rem;
          transition: background 0.3s;
          padding: 0 2rem;
        }
        .add-to-cart-btn:hover {
          background-color: var(--primary-hover);
        }
        .add-to-cart-btn:disabled {
            background-color: #333;
            cursor: not-allowed;
        }
        .wishlist-btn-large {
          width: 48px;
          height: 48px;
          border: 1px solid #333;
          background: transparent;
          color: #fff;
          border-radius: var(--radius);
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .wishlist-btn-large:hover {
          border-color: var(--primary);
          color: var(--primary);
        }

        .features-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.5rem;
          border-top: 1px solid #222;
          padding-top: 2rem;
        }
        .feature-item {
          display: flex;
          gap: 1rem;
          align-items: flex-start;
        }
        .feature-item .icon {
          color: var(--primary);
          margin-top: 4px;
        }
        .feature-item h4 {
          margin: 0 0 0.25rem 0;
          font-size: 1rem;
        }
        .feature-item p {
          margin: 0;
          font-size: 0.9rem;
          color: var(--text-muted);
        }

        .specs-section {
          background-color: #111;
          padding: 2rem;
          border-radius: var(--radius);
          border: 1px solid #222;
        }
        .specs-section h2 {
          margin-top: 0;
          margin-bottom: 1.5rem;
          font-size: 1.5rem;
        }
        .specs-table {
          width: 100%;
          border-collapse: collapse;
        }
        .specs-table th, .specs-table td {
          padding: 1rem;
          border-bottom: 1px solid #222;
          text-align: left;
        }
        .specs-table th {
          width: 30%;
          color: var(--text-muted);
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
