import React, { useState, useEffect } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const CategoryPage = () => {
    const { id } = useParams();
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('search') || '';
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [sortBy, setSortBy] = useState('relevance');
    const [displayedCategoryName, setDisplayedCategoryName] = useState('');

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                let query = supabase.from('products').select('*');
                let catName = 'All Products';

                if (searchQuery) {
                    query = query.ilike('name', `%${searchQuery}%`);
                    catName = `Search: "${searchQuery}"`;
                } else if (id && id.toLowerCase() !== 'all') {
                    const { data: catData } = await supabase
                        .from('categories')
                        .select('id, name')
                        .ilike('slug', id)
                        .maybeSingle();

                    if (catData) {
                        query = query.eq('category_id', catData.id);
                        catName = catData.name;
                    } else {
                        console.warn('Category not found:', id);
                        query = query.eq('category_id', -1);
                        catName = id.charAt(0).toUpperCase() + id.slice(1);
                    }
                }

                const { data, error } = await query;
                if (error) throw error;

                const mappedProducts = (data || []).map(p => ({
                    ...p,
                    price: parseFloat(p.price),
                    sale_price: p.sale_price ? parseFloat(p.sale_price) : null,
                    image: p.images && p.images.length > 0 ? p.images[0] : p.image_url || 'https://via.placeholder.com/300'
                }));

                setProducts(mappedProducts);
                setDisplayedCategoryName(catName);
            } catch (err) {
                console.error('Error fetching data:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [id, searchQuery]);

    const sortedProducts = React.useMemo(() => {
        let sorted = [...products];
        if (sortBy === 'price-low') {
            sorted.sort((a, b) => (a.sale_price || a.price) - (b.sale_price || b.price));
        } else if (sortBy === 'price-high') {
            sorted.sort((a, b) => (b.sale_price || b.price) - (a.sale_price || a.price));
        } else if (sortBy === 'newest') {
            sorted.sort((a, b) => new Date(b.created_at) - new Date(a.created_at));
        }
        return sorted;
    }, [products, sortBy]);

    return (
        <div className="category-page container">
            <div className="page-header">
                <div>
                    <span className="page-label">CATEGORY</span>
                    <h1 className="page-title">{displayedCategoryName}</h1>
                </div>
                <div className="breadcrumb">Home / Categories / {displayedCategoryName}</div>
            </div>

            <div className="content-layout">
                {/* Sidebar Filters */}
                <aside className="filters-sidebar">
                    <div className="filter-group">
                        <h3><SlidersHorizontal size={16} /> Filters</h3>
                    </div>

                    <div className="filter-group">
                        <h4>Price Range</h4>
                        <div className="price-inputs">
                            <input type="number" placeholder="Min" />
                            <span>—</span>
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
                        <span className="results-count">{sortedProducts.length} results</span>
                        <div className="sort-wrapper">
                            <label>Sort:</label>
                            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                                <option value="relevance">Relevance</option>
                                <option value="price-low">Price: Low to High</option>
                                <option value="price-high">Price: High to Low</option>
                                <option value="newest">Newest Arrivals</option>
                            </select>
                        </div>
                    </div>

                    {loading ? (
                        <div className="loading-state">
                            <div className="loading-spinner" />
                            <span>Loading products...</span>
                        </div>
                    ) : sortedProducts.length > 0 ? (
                        <div className="products-grid">
                            {sortedProducts.map(p => (
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
           margin-bottom: 2.5rem;
           border-bottom: 1px solid var(--border);
           padding-bottom: 1.25rem;
           display: flex;
           justify-content: space-between;
           align-items: flex-end;
        }
        .page-label {
           font-size: 0.7rem;
           font-weight: 600;
           letter-spacing: 2px;
           color: var(--primary);
           display: block;
           margin-bottom: 0.35rem;
        }
        .page-title {
           margin: 0;
           font-size: clamp(1.75rem, 4vw, 2.5rem);
           font-weight: 800;
           letter-spacing: -0.02em;
        }
        .breadcrumb {
           color: rgba(255, 255, 255, 0.3);
           font-size: 0.8rem;
        }
        
        .content-layout {
           display: grid;
           grid-template-columns: 240px 1fr;
           gap: 2rem;
        }
        @media (max-width: 768px) {
           .content-layout {
              grid-template-columns: 1fr;
           }
           .filters-sidebar {
              display: none;
           }
        }

        .filters-sidebar {
           background: rgba(255, 255, 255, 0.02);
           padding: 1.5rem;
           border-radius: var(--radius);
           height: fit-content;
           border: 1px solid var(--border);
           position: sticky;
           top: 80px;
        }
        .filter-group {
           margin-bottom: 1.75rem;
        }
        .filter-group:last-child {
           margin-bottom: 0;
        }
        .filter-group h3 {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin: 0 0 1rem;
           font-size: 0.9rem;
           font-weight: 700;
        }
        .filter-group h4 {
           margin: 0 0 0.75rem;
           font-size: 0.75rem;
           font-weight: 600;
           letter-spacing: 1px;
           text-transform: uppercase;
           color: rgba(255, 255, 255, 0.5);
        }
        .price-inputs {
           display: flex;
           align-items: center;
           gap: 0.5rem;
        }
        .price-inputs span {
           color: rgba(255, 255, 255, 0.2);
        }
        .price-inputs input {
           width: 100%;
           padding: 0.5rem 0.6rem;
           background: rgba(255, 255, 255, 0.04);
           border: 1px solid var(--border);
           color: #fff;
           border-radius: 6px;
           font-size: 0.85rem;
           font-family: inherit;
        }
        .price-inputs input:focus {
           outline: none;
           border-color: var(--border-hover);
        }
        .checkbox-label {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           margin-bottom: 0.6rem;
           cursor: pointer;
           color: rgba(255, 255, 255, 0.6);
           font-size: 0.875rem;
        }
        .checkbox-label input[type="checkbox"] {
           accent-color: var(--primary);
        }

        .listing-header {
           display: flex;
           justify-content: space-between;
           align-items: center;
           margin-bottom: 1.5rem;
           background: rgba(255, 255, 255, 0.02);
           padding: 0.85rem 1.25rem;
           border-radius: var(--radius);
           border: 1px solid var(--border);
        }
        .results-count {
           font-size: 0.85rem;
           color: rgba(255, 255, 255, 0.4);
        }
        .sort-wrapper {
           display: flex;
           align-items: center;
           gap: 0.5rem;
           font-size: 0.85rem;
           color: rgba(255, 255, 255, 0.5);
        }
        .sort-wrapper select {
           background: rgba(255, 255, 255, 0.04);
           color: #fff;
           border: 1px solid var(--border);
           padding: 0.4rem 0.6rem;
           border-radius: 6px;
           font-family: inherit;
           font-size: 0.85rem;
        }
        .sort-wrapper select:focus {
           outline: none;
           border-color: var(--border-hover);
        }

        .products-grid {
           display: grid;
           grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
           gap: 1.5rem;
        }
        .no-results, .loading-state {
           text-align: center;
           padding: 4rem 2rem;
           background: rgba(255, 255, 255, 0.02);
           border-radius: var(--radius);
           color: rgba(255, 255, 255, 0.35);
           border: 1px solid var(--border);
           display: flex;
           flex-direction: column;
           align-items: center;
           gap: 1rem;
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
      `}</style>
        </div>
    );
};

export default CategoryPage;
