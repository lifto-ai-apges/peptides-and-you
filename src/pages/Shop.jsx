import React, { useState, useEffect } from 'react';
import { peptides } from '../data/peptides';
import ProductCard from '../components/ProductCard';
import { Search, Filter, ShieldCheck } from 'lucide-react';

const Shop = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const categories = ['All', ...new Set(peptides.map(p => p.category))];

  const filteredPeptides = peptides.filter(p => {
    const matchesCategory = activeCategory === 'All' || p.category === activeCategory;
    const matchesSearch = p.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="shop-page pt-32 pb-20 bg-white">
      <div className="container">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-primary-5 border-primary-10 rounded-full mb-6 text-primary text-[10px] font-bold uppercase tracking-widest">
             <ShieldCheck size={14} /> Full Batch Transparency
          </div>
          <h1 className="text-5xl md:text-6xl mb-6 tracking-tight font-bold">Laboratory Inventory</h1>
          <p className="text-text-muted text-lg max-w-2xl mx-auto leading-relaxed">
            Browse our clinical-grade peptide catalog. All materials ship with a lot-specific Certificate of Analysis.
          </p>
        </div>

        {/* Professional Filters & Search Bar */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 mb-16 bg-bg-alt p-6 rounded-3xl border border-border">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-3 rounded-xl text-sm font-bold transition-all border ${
                  activeCategory === cat 
                    ? 'bg-primary text-white border-primary shadow-lg shadow-primary/20 scale-105' 
                    : 'bg-white text-text-muted border-border hover:border-primary/40'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          
          <div className="relative w-full lg:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-text-muted" size={20} />
            <input
              type="text"
              placeholder="Filter by molecule name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-border rounded-xl pl-12 pr-4 py-4 text-sm outline-none focus:border-primary focus:ring-4 focus:ring-primary-5 transition-all font-semibold"
            />
          </div>
        </div>

        {/* Product Grid */}
        {filteredPeptides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
            {filteredPeptides.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-32 bg-bg-alt rounded-3xl border border-dashed border-border">
            <Filter size={48} className="mx-auto text-text-muted mb-4 opacity-30" />
            <p className="text-xl text-text-muted font-bold">No research materials match your criteria.</p>
            <button onClick={() => {setSearchQuery(''); setActiveCategory('All');}} className="mt-6 text-primary font-extrabold uppercase text-xs tracking-widest border-b-2 border-primary/20 hover:border-primary transition-all">Reset All Filters</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
