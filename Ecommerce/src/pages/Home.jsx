import React from 'react';
import Hero from '../components/Hero';
import DailyDeals from '../components/DailyDeals';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';

const SAMPLE_PRODUCTS = [
    {
        id: 1,
        name: 'MDR-Z1R Premium Headphones',
        price: 2299.00,
        sale_price: 1999.00,
        category: 'Audio',
        image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 2,
        name: 'Pro X Superlight Gaming Mouse',
        price: 159.99,
        sale_price: null,
        category: 'Gaming',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 3,
        name: 'Mechanical Keyboard RGB',
        price: 129.50,
        sale_price: 89.99,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    },
    {
        id: 4,
        name: 'UltraWide Monitor 34"',
        price: 499.00,
        sale_price: 449.00,
        category: 'Monitors',
        image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
    }
];

const Home = () => {
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
                        <a href="/products" className="view-all">View All</a>
                    </div>

                    <div className="product-grid">
                        {SAMPLE_PRODUCTS.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
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
