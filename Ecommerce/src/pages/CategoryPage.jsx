import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import { SlidersHorizontal } from 'lucide-react';
import { supabase } from '../lib/supabaseClient';

const CategoryPage = () => {
    const { id } = useParams(); // category slug from url
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

                if (id && id.toLowerCase() !== 'all') {
                    // Fetch category ID by slug (case-insensitive search if possible, or assume exact match)
                    // We'll normalize to lowercase for slug comparison if your slugs are lowercase
                    const { data: catData, error: catError } = await supabase
                        .from('categories')
                        .select('id, name')
                        .ilike('slug', id)
                        .maybeSingle();

                    if (catData) {
                        query = query.eq('category_id', catData.id);
                        catName = catData.name;
                    } else {
                        // Fallback or empty if category doesn't exist
                        // For now, if category not found, we might show empty or all? 
                        // Let's filter by a non-existent ID to show empty
                        console.warn('Category not found:', id);
                        query = query.eq('category_id', -1);
                        catName = id.charAt(0).toUpperCase() + id.slice(1);
                    }
                }

                const { data, error } = await query;

                if (error) throw error;

                // Map DB fields to Component expectations if necessary
                // DB: stock_quantity, images[]. Component: stock, image (single)
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
    }, [id]);

    // Sorting Logic
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
                <h1 className="page-title">{displayedCategoryName}</h1>
                <div className="breadcrumb">Home / Categories / {displayedCategoryName}</div>
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
                        <span>Showing {sortedProducts.length} results</span>
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

                    {loading ? (
                        <div className="loading-state">Loading products...</div>
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
        .no-results, .loading-state {
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
