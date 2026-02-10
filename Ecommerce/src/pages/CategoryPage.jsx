import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';

const ALL_PRODUCTS = [
    { id: 1, name: 'MDR-Z1R Premium Headphones', price: 2299.00, sale_price: 1999.00, category: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500' },
    { id: 2, name: 'Pro X Superlight Gaming Mouse', price: 159.99, sale_price: null, category: 'Gaming', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500' },
    { id: 3, name: 'Mechanical Keyboard RGB', price: 129.50, sale_price: 89.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=500' },
    { id: 4, name: 'UltraWide Monitor 34"', price: 499.00, sale_price: 449.00, category: 'Monitors', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500' },
    { id: 5, name: 'Smartphone Pro Max', price: 1099.00, sale_price: null, category: 'Smartphones', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500' },
    { id: 6, name: 'Wireless Earbuds', price: 199.00, sale_price: 149.00, category: 'Audio', image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=500' },
    { id: 7, name: 'Gaming Console 5', price: 499.00, sale_price: null, category: 'Gaming', image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=500' },
    { id: 8, name: 'Smart Watch Series 7', price: 399.00, sale_price: 379.00, category: 'Wearables', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500' },
];

const CategoryPage = () => {
    const { id } = useParams(); // category id from url
    const categoryName = id ? id.charAt(0).toUpperCase() + id.slice(1) : 'All Products';

    const [products, setProducts] = useState([]);
    const [sortBy, setSortBy] = useState('relevance');
    const [priceRange, setPriceRange] = useState([0, 3000]);

    useEffect(() => {
        // Simulate fetching and filtering
        let filtered = ALL_PRODUCTS;
        if (id) {
            // Simple mapping for demo purposes. In real app, match exactly or use ID.
            if (id !== 'all') {
                filtered = filtered.filter(p => p.category.toLowerCase() === id.toLowerCase() || (id === 'smartphones' && p.category === 'Smartphones'));
            }
        }

        // Sort
        if (sortBy === 'price-low') {
            filtered.sort((a, b) => (a.sale_price || a.price) - (b.sale_price || b.price));
        } else if (sortBy === 'price-high') {
            filtered.sort((a, b) => (b.sale_price || b.price) - (a.sale_price || a.price));
        }

        setProducts([...filtered]);
    }, [id, sortBy]);

    return (
        <div className="category-page container">
            <div className="page-header">
                <h1 className="page-title">{categoryName}</h1>
                <div className="breadcrumb">Home / Categories / {categoryName}</div>
            </div>

            <div className="content-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3><SlidersHorizontal size={18} /> Filters</h3>
                    </div>

                    <div className="filter-group">
                        <h4>Price Range</h4>
                        <div className="price-inputs">
                            <input type="number" placeholder="Min" />
                            <span>-</span>
                            <input type="number" placeholder="Max" />
                        </div>
                    </div>

                    <div className="filter-group">
                        <h4>Availability</h4>
                        <label className="checkbox-label">
                            <input type="checkbox" defaultChecked /> In Stock
                        </label>
                        <label className="checkbox-label">
                            <input type="checkbox" /> On Sale
                        </label>
                    </div>
                </aside>

                {/* Product Grid */}
                <main className="product-listing">
                    <div className="listing-header">
                        <span>Showing {products.length} results</span>
                        <div className="sort-wrapper">
                            <label>Sort by:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="relevance">Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                        </div>
                    </div>

                    {products.length > 0 ? (
                        <div className="products-grid">
                            {products.map(p => (
                                <ProductCard key={p.id} product={p} />
                            ))}
                        </div>
                    ) : (
                        <div className="no-results">
                            No products found in this category.
                        </div>
                    )}
                </main>
            </div>

            <style>{`
        .category-page {
           padding-top: 2rem;
           padding-bottom: 4rem;
        }
        .page-header {
           margin-bottom: 2rem;
           border-bottom: 1px solid #222;
           padding-bottom: 1rem;
        }
        .page-title {
           margin: 0 0 0.5rem 0;
           font-size: 2.5rem;
        }
        .breadcrumb {
           color: var(--text-muted);
        }
        
        .content-layout {
           display: grid;
           grid-template-columns: 250px 1fr;
           gap: 2rem;
        }
        @media (max-width: 768px) {
           .content-layout {
              grid-template-columns: 1fr;
           }
           .filters-sidebar {
              display: none; /* Hide filters on mobile for now */
           }
        }

        .filters-sidebar {
           background: #111;
           padding: 1.5rem;
           border-radius: var(--radius);
           height: fit-content;
           border: 1px solid #222;
        }
        .filter-group {
           margin-bottom: 2rem;
        }
        .filter-group h3 {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin-top: 0;
        }
        .filter-group h4 {
           margin-bottom: 1rem;
           font-size: 1rem;
        }
        .price-inputs {
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        .price-inputs input {
           width: 100%;
           padding: 0.5rem;
           background: #222;
           border: 1px solid #333;
           color: #fff;
           border-radius: 4px;
        }
        .checkbox-label {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin-bottom: 0.5rem;
           cursor: pointer;
        }

        .listing-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
           background: #111;
           padding: 1rem;
           border-radius: var(--radius);
           border: 1px solid #222;
        }
        .sort-wrapper {
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        .sort-wrapper select {
           background: #222;
           color: #fff;
           border: 1px solid #333;
           padding: 0.5rem;
           border-radius: 4px;
        }

        .products-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
           gap: 2rem;
        }
        .no-results {
           text-align: center;
           padding: 3rem;
           background: #111;
           border-radius: var(--radius);
           color: var(--text-muted);
        }
      `}</style>
        </div>
    );
};

export default CategoryPage;
