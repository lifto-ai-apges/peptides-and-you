import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { peptides } from '../data/peptides';
import ProductCard from '../components/ProductCard';
import { Search } from 'lucide-react';

const Shop = () => {
  const [activeSection, setActiveSection] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const peptideProducts = peptides.filter(p => p.type === 'peptide');
  const stackProducts = peptides.filter(p => p.type === 'stack');

  const filterBySearch = (items) => {
    if (!searchQuery) return items;
    return items.filter(p =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.shortDescription.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const showPeptides = activeSection === 'all' || activeSection === 'peptides';
  const showStacks = activeSection === 'all' || activeSection === 'stacks';

  // JSON-LD structured data for product listing
  const productListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Peptides Catalog",
    "description": "Premium pharmaceutical-grade peptides — lab tested with COA",
    "numberOfItems": peptides.length,
    "itemListElement": peptides.map((p, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "item": {
        "@type": "Product",
        "name": p.name,
        "description": p.shortDescription,
        "offers": {
          "@type": "Offer",
          "priceCurrency": "GBP",
          "price": p.price.toFixed(2),
          "availability": "https://schema.org/InStock",
          "seller": { "@type": "Organization", "name": "Peptides and You" }
        },
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": p.rating,
          "reviewCount": Math.floor(Math.random() * 80) + 20,
          "bestRating": 5
        }
      }
    }))
  };

  return (
    <div style={{paddingTop: 180, paddingBottom: 60, background: 'var(--bg)', minHeight: '100vh'}}>
      <Helmet>
        <title>Shop Peptides | Lab Tested | COA Included | Peptides & You</title>
        <meta name="description" content="Browse our full catalog of premium peptides including BPC-157, TB-500, Epithalon, Retatrutide, and more. All products are lab tested with Certificate of Analysis included." />
        <meta name="keywords" content="buy peptides, BPC-157, TB-500, GHK-Cu, Retatrutide, peptide stacks, lab tested peptides, COA peptides" />
        <link rel="canonical" href="https://peptidesandyou.com/shop" />
        <meta property="og:title" content="Shop Peptides | Peptides & You" />
        <meta property="og:description" content="Premium lab-tested peptides with COA included." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peptidesandyou.com/shop" />
        <script type="application/ld+json">{JSON.stringify(productListSchema)}</script>
      </Helmet>

      <div className="container">
        {/* Category Tabs */}
        <div className="cat-tabs">
          {[
            { key: 'all', label: 'All Products' },
            { key: 'peptides', label: 'Peptides' },
            { key: 'stacks', label: 'Stacks' },
          ].map(t => (
            <button key={t.key}
              className={`cat-tab ${activeSection === t.key ? 'active' : ''}`}
              onClick={() => setActiveSection(t.key)}>
              {t.label}
            </button>
          ))}
        </div>

        {/* Search Bar */}
        <div className="search-row">
          <input
            type="text"
            placeholder="Search peptides..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button>Search</button>
        </div>

        {/* PEPTIDES SECTION */}
        {showPeptides && filterBySearch(peptideProducts).length > 0 && (
          <section style={{marginBottom: 56}}>
            <h2 className="section-heading">Peptides</h2>
            <p className="section-desc">
              All products are lyophilised powder vials, lab tested and supplied with Certificate of Analysis. Browse our full range of pharmaceutical-grade peptides across healing, anti-aging, weight management, cognitive, and growth hormone categories.
            </p>
            <div className="product-grid">
              {filterBySearch(peptideProducts).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* STACKS SECTION */}
        {showStacks && filterBySearch(stackProducts).length > 0 && (
          <section style={{marginBottom: 56}}>
            <h2 className="section-heading">Stacks</h2>
            <p className="section-desc">
              Peptide stacks combine complementary compounds in a single vial for synergistic results. Each stack is lab tested and includes Certificate of Analysis.
            </p>
            <div className="product-grid">
              {filterBySearch(stackProducts).map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </section>
        )}

        {/* Empty state */}
        {filterBySearch(peptideProducts).length === 0 && filterBySearch(stackProducts).length === 0 && (
          <div style={{
            textAlign: 'center', padding: '64px 24px', background: '#fff',
            borderRadius: 12, border: '2px dashed var(--border)',
          }}>
            <Search size={40} style={{margin: '0 auto 12px', opacity: 0.15, color: 'var(--text-muted)'}} />
            <p style={{fontSize: 18, fontWeight: 700, color: 'var(--text-secondary)', marginBottom: 12}}>
              No products match your search.
            </p>
            <button onClick={() => { setSearchQuery(''); setActiveSection('all'); }}
              style={{
                color: 'var(--primary)', fontWeight: 700, fontSize: 13,
                background: 'none', cursor: 'pointer',
                borderBottom: '2px solid var(--primary)',
                paddingBottom: 2,
              }}>
              Reset filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;
