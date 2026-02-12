import React, { useState, useEffect } from 'react';
import Hero from '../components/Hero';
import DailyDeals from '../components/DailyDeals';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import { supabase } from '../lib/supabaseClient';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTrendingProducts = async () => {
            setLoading(true);
            try {
                const { data, error } = await supabase
                    .from('products')
                    .select('*')
                    .order('created_at', { ascending: false })
                    .limit(8);

                if (error) throw error;

                const mappedProducts = (data || []).map(p => ({
                    ...p,
                    price: parseFloat(p.price),
                    sale_price: p.sale_price ? parseFloat(p.sale_price) : null,
                    image: p.images && p.images.length > 0 ? p.images[0] : p.image_url || 'https://via.placeholder.com/300'
                }));
                setProducts(mappedProducts);
            } catch (err) {
                console.error('Error fetching trending products:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchTrendingProducts();
    }, []);

    return (
        <div className="home-page">
            <Hero />

            <div className="container">
                <DailyDeals />

                <section className="section">
                    <div className="section-header">
                        <div className="section-title-group">
                            <span className="section-label">EXPLORE</span>
                            <h2 className="section-title">Shop by Category</h2>
                        </div>
                    </div>
                    <CategoryGrid />
                </section>

                <section className="section">
                    <div className="section-header">
                        <div className="section-title-group">
                            <span className="section-label">NEW ARRIVALS</span>
                            <h2 className="section-title">Trending Products</h2>
                        </div>
                        <a href="/category/all" className="view-all">
                            View All
                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                <path d="M4 10h12m-6-6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                            </svg>
                        </a>
                    </div>

                    {loading ? (
                        <div className="loading-state">
                            <div className="loading-spinner" />
                            <span>Loading products...</span>
                        </div>
                    ) : (
                        <div className="product-grid">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                    {!loading && products.length === 0 && (
                        <div className="empty-state">No products found.</div>
                    )}
                </section>
            </div>

            <Footer />

            <style>{`
        .home-page {
            background: var(--background);
        }
        .section {
            margin-bottom: 5rem;
        }
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 2rem;
            padding-bottom: 1.25rem;
            border-bottom: 1px solid var(--border);
        }
        .section-title-group {
            display: flex;
            flex-direction: column;
            gap: 0.35rem;
        }
        .section-label {
            font-size: 0.7rem;
            font-weight: 600;
            letter-spacing: 2px;
            color: var(--primary);
        }
        .section-title {
            font-size: clamp(1.5rem, 3vw, 2rem);
            font-weight: 800;
            margin: 0;
            letter-spacing: -0.02em;
        }
        .view-all {
            color: rgba(255, 255, 255, 0.5);
            font-weight: 500;
            font-size: 0.875rem;
            display: inline-flex;
            align-items: center;
            gap: 0.4rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }
        .view-all:hover {
            color: var(--primary);
        }
        .view-all:hover svg {
            transform: translateX(3px);
        }
        .view-all svg {
            transition: transform 0.3s ease;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
            gap: 1.5rem;
        }
        .loading-state {
            text-align: center;
            padding: 4rem 1rem;
            color: rgba(255, 255, 255, 0.35);
            display: flex;
            flex-direction: column;
            align-items: center;
            gap: 1rem;
            font-size: 0.9rem;
        }
        .loading-spinner {
            width: 28px;
            height: 28px;
            border: 2px solid var(--border);
            border-top-color: var(--primary);
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
        }
        @keyframes spin {
            to { transform: rotate(360deg); }
        }
        .empty-state {
            text-align: center;
            color: rgba(255, 255, 255, 0.3);
            padding: 3rem;
            font-size: 0.9rem;
        }
      `}</style>
        </div>
    );
};

export default Home;
