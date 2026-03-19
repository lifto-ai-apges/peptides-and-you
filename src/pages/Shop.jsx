import React, { useState } from 'react';
import { peptides } from '../data/peptides';
import ProductCard from '../components/ProductCard';
import { Search, SlidersHorizontal } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const categories = ['All', ...new Set(peptides.map(p => p.category))];

  const filteredPeptides = peptides.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-page pt-32 pb-20">
      <div className="container">
        <div className="mb-16">
          <h1 className="text-5xl md:text-6xl mb-6 glow-text text-center">Research Catalog</h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto text-lg">
            Explore our comprehensive library of premium peptides. Filter by category or search for specific research requirements.
          </p>
        </div>

        {/* Filters & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12 glass-panel p-4 border-white/5">
          <div className="flex flex-wrap gap-2">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-surface-bright text-text-muted hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={18} />
            <input
              type="text"
              placeholder="Search peptides..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-surface-bright border border-white/10 rounded-xl pl-12 pr-4 py-3 text-sm outline-none focus:border-primary/50 transition-all font-medium"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredPeptides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredPeptides.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <p className="text-xl text-text-muted">No products found matching your search.</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-4 text-primary font-bold">Clear all filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
