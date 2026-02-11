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
                    <h2 className="section-title">Shop by Category</h2>
                    <CategoryGrid />
                </section>

                <section className="section">
                    <div className="section-header">
                        <h2 className="section-title">Trending Products</h2>
                        {/* href to a general products page if it exists, otherwise just /category/all */}
                        <a href="/category/all" className="view-all">View All</a>
                    </div>

                    {loading ? (
                        <div style={{ textAlign: 'center', padding: '2rem', color: '#888' }}>Loading trending products...</div>
                    ) : (
                        <div className="product-grid">
                            {products.map(product => (
                                <ProductCard key={product.id} product={product} />
                            ))}
                        </div>
                    )}
                    {!loading && products.length === 0 && (
                        <div style={{ textAlign: 'center', color: '#888' }}>No products found.</div>
                    )}
                </section>
            </div>

            <Footer />

            <style>{`
        .section {
            margin-bottom: 4rem;
        }
        .section-header {
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
            margin-bottom: 1.5rem;
            border-bottom: 1px solid #222;
            padding-bottom: 1rem;
        }
        .section-title {
            font-size: 2rem;
            margin: 0;
            color: var(--text-main);
            border-left: 4px solid var(--primary);
            padding-left: 1rem;
        }
        .view-all {
            color: var(--primary);
            font-weight: 600;
        }
        .view-all:hover {
            color: var(--primary-hover);
            text-decoration: underline;
        }
        .product-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
            gap: 2rem;
        }
      `}</style>
        </div>
    );
};

export default Home;
