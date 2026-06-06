import React, { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { categories } from '../data';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { Filter } from 'lucide-react';

export const Shop = () => {
  const { products } = useProducts();
  const [searchParams, setSearchParams] = useSearchParams();
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  
  const categoryFilter = searchParams.get('category');
  const sortFilter = searchParams.get('sort') || 'popular';
  const searchQuery = searchParams.get('q') || '';

  const updateFilter = (key: string, value: string | null) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  const [visibleCount, setVisibleCount] = useState(24);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      result = result.filter(p => p.name.toLowerCase().includes(q) || (p.description || '').toLowerCase().includes(q) || (p.brand || '').toLowerCase().includes(q));
    }

    if (categoryFilter) {
      result = result.filter(p => p.category === categoryFilter);
    }
    
    switch (sortFilter) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      default:
        // 'popular' based on reviewsCount
        result.sort((a, b) => b.reviewsCount - a.reviewsCount);
    }
    
    return result;
  }, [categoryFilter, sortFilter]);

  // Reset visible count when filters change
  React.useEffect(() => {
    setVisibleCount(24);
  }, [categoryFilter, sortFilter]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
      <div className="flex justify-between items-end border-b border-slate-100 pb-4 mb-6">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">
            {searchQuery ? `Search: "${searchQuery}"` : 'All Tools'}
          </h1>
          <div className="flex items-center gap-3 mt-1">
            <p className="text-slate-500">{filteredProducts.length} products found</p>
            {searchQuery && (
              <button 
                onClick={() => updateFilter('q', null)}
                className="text-xs text-red-500 hover:underline font-bold"
              >
                Clear search
              </button>
            )}
          </div>
        </div>
        
        <div className="hidden sm:flex items-center gap-4">
          <label className="text-sm text-slate-600 font-medium">Sort by:</label>
          <select 
            value={sortFilter}
            onChange={(e) => updateFilter('sort', e.target.value)}
            className="border-slate-200 rounded-lg font-medium text-slate-700 p-2 border focus:outline-none focus:ring-2 focus:ring-teal-500"
          >
            <option value="popular">Most Popular</option>
            <option value="rating">Highest Rated</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
          </select>
        </div>
        
        <button 
          className="sm:hidden flex items-center gap-2 p-2 bg-slate-100 rounded-lg border border-slate-200"
          onClick={() => setIsMobileFiltersOpen(!isMobileFiltersOpen)}
        >
          <Filter size={18} />
          <span>Filters</span>
        </button>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Sidebar Filters */}
        <div className={`w-full md:w-64 flex-shrink-0 ${isMobileFiltersOpen ? 'block' : 'hidden md:block'}`}>
          <div className="bg-slate-50/50 p-6 rounded-2xl border border-slate-100 sticky top-24">
            <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Categories</h3>
            <ul className="space-y-1">
              <li>
                <button 
                  onClick={() => updateFilter('category', null)}
                  className={`w-full flex items-center px-3 py-2 rounded-lg text-sm transition-colors ${!categoryFilter ? 'bg-teal-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                >
                  All Products
                </button>
              </li>
              {categories.map(cat => (
                <li key={cat}>
                  <button 
                    onClick={() => updateFilter('category', cat)}
                    className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${categoryFilter === cat ? 'bg-teal-600 text-white font-medium' : 'text-slate-600 hover:bg-slate-100'}`}
                  >
                    <span>{cat}</span>
                    {categoryFilter === cat && <span className="text-[10px] opacity-70">✓</span>}
                  </button>
                </li>
              ))}
            </ul>
            
            {/* Mobile sort (duplicated for mobile UX) */}
            <div className="mt-8 sm:hidden">
              <h3 className="text-[11px] font-bold uppercase text-slate-400 tracking-widest mb-4">Sort By</h3>
              <select 
                value={sortFilter}
                onChange={(e) => updateFilter('sort', e.target.value)}
                className="w-full border-slate-200 rounded-lg font-medium text-slate-700 p-2 border focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <option value="popular">Most Popular</option>
                <option value="rating">Highest Rated</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
            
            <div className="mt-8">
              <div className="bg-teal-50 p-4 rounded-xl border border-teal-100">
                <p className="text-xs text-teal-800 font-bold mb-1">WhatsApp Support</p>
                <p className="text-[10px] text-teal-600 mb-3">Direct tech inquiry</p>
                <a href="https://wa.me/971501234567" target="_blank" rel="noopener noreferrer" className="w-full bg-[#25D366] text-white py-2 rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#1ebd5a] transition-colors">
                  💬 Chat Now
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="flex-grow flex flex-col">
          {filteredProducts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visibleProducts.map(product => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
              {visibleCount < filteredProducts.length && (
                <div className="mt-12 flex justify-center">
                  <button 
                    onClick={() => setVisibleCount(c => c + 24)}
                    className="px-8 py-3 bg-white border border-slate-200 shadow-sm text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-colors"
                  >
                    Load More Products
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-900 mb-2">No products found</h3>
              <p className="text-slate-500 mb-6">Try adjusting your filters or search terms.</p>
              <button 
                onClick={() => updateFilter('category', null)}
                className="px-6 py-2 bg-white border border-slate-200 rounded-lg text-slate-900 shadow-sm hover:bg-slate-50 font-medium transition-colors"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
