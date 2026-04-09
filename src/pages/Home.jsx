import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { peptides } from '../data/peptides';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, FlaskConical, FileCheck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPeptides = peptides.filter(p => p.type === 'peptide').slice(0, 3);

  // Organization JSON-LD
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peptides and You",
    "url": "https://peptidesandyou.com",
    "logo": "https://peptidesandyou.com/logo.png",
    "description": "Premium pharmaceutical-grade peptides. Lab tested with Certificate of Analysis included.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service",
      "email": "info@peptidesandyou.com",
      "areaServed": "PH",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/peptidesandyou",
      "https://www.facebook.com/peptidesandyou"
    ]
  };

  // WebSite schema for search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Peptides and You",
    "url": "https://peptidesandyou.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://peptidesandyou.com/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const features = [
    {
      icon: FileCheck,
      title: 'Lab Tested & COA Included',
      desc: 'Every product is third-party lab tested. Certificate of Analysis supplied with every batch — transparency you can verify.',
    },
    {
      icon: FlaskConical,
      title: 'Pharmaceutical-Grade Quality',
      desc: 'All products are lyophilised powder vials, manufactured to pharmaceutical standards. Consistent purity across every product we sell.',
    },
    {
      icon: ShieldCheck,
      title: 'Trusted & Verified',
      desc: 'Trusted by practitioners and clients across the Philippines and Southeast Asia. Secure, discreet shipping on every order.',
    },
  ];

  return (
    <div style={{background: 'var(--bg)'}}>
      <Helmet>
        <title>Peptides & You | Premium Pharmaceutical-Grade Peptides | Lab Tested | COA Included</title>
        <meta name="description" content="Premium pharmaceutical-grade peptides. BPC-157, TB-500, GHK-Cu, Epithalon, Retatrutide and more. Lab tested with Certificate of Analysis. Fast delivery." />
        <meta name="keywords" content="peptides, buy peptides, BPC-157, TB-500, GHK-Cu, peptide supplier, pharmaceutical grade peptides, COA peptides, lab tested peptides" />
        <link rel="canonical" href="https://peptidesandyou.com" />

        {/* Open Graph */}
        <meta property="og:title" content="Peptides & You | Premium Pharmaceutical-Grade Peptides" />
        <meta property="og:description" content="Lab tested peptides with COA included. BPC-157, TB-500, GHK-Cu, Retatrutide and more." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peptidesandyou.com" />
        <meta property="og:site_name" content="Peptides and You" />
        <meta property="og:locale" content="en_PH" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptides & You | Premium Pharmaceutical-Grade Peptides" />
        <meta name="twitter:description" content="Lab tested peptides with COA included. Fast delivery." />

        {/* Geo Tags */}
        <meta name="geo.region" content="PH-00" />
        <meta name="geo.placename" content="Manila" />
        <meta name="geo.position" content="14.5995;120.9842" />
        <meta name="ICBM" content="14.5995, 120.9842" />
        <meta name="DC.title" content="Peptides and You - Premium Peptides" />
        <meta name="DC.creator" content="Peptides and You" />
        <meta name="DC.subject" content="Peptides" />
        <meta name="DC.language" content="en" />
        <meta name="DC.coverage" content="Philippines" />

        {/* Structured Data */}
        <script type="application/ld+json">{JSON.stringify(orgSchema)}</script>
        <script type="application/ld+json">{JSON.stringify(websiteSchema)}</script>
      </Helmet>

      <Hero />

      {/* Featured Products */}
      <section style={{padding: '64px 0'}}>
        <div className="container">
          <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: 16, marginBottom: 28}}>
            <div>
              <h2 className="section-heading" style={{fontSize: 26}}>Featured Peptides</h2>
              <p style={{color: 'var(--text-secondary)', fontSize: 14, maxWidth: 450, lineHeight: 1.6}}>
                Our most popular lab-tested compounds, trusted by practitioners and clients.
              </p>
            </div>
            <Link to="/shop" className="btn-outline" style={{padding: '10px 22px', fontSize: 13}}>
              View All Products <ArrowRight size={16} />
            </Link>
          </div>
          <div className="product-grid">
            {featuredPeptides.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section id="about" style={{padding: '64px 0', background: '#fff'}}>
        <div className="container">
          <div style={{textAlign: 'center', marginBottom: 40}}>
            <h2 className="section-heading" style={{fontSize: 26}}>Why Peptides & You</h2>
            <p style={{color: 'var(--text-secondary)', fontSize: 14, maxWidth: 520, margin: '0 auto', lineHeight: 1.6}}>
              Premium quality, lab-verified purity, and transparent sourcing — everything you need to trust what you're using.
            </p>
          </div>
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 20}}>
            {features.map((f) => (
              <div key={f.title} style={{
                background: 'var(--bg)', padding: '32px 28px', borderRadius: 14,
                border: '1px solid var(--border)', transition: 'all 0.3s',
              }}>
                <div style={{
                  width: 48, height: 48, borderRadius: 10,
                  background: 'var(--primary-light)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <f.icon size={24} color="var(--primary)" />
                </div>
                <h3 className="outfit" style={{fontSize: 17, fontWeight: 700, marginBottom: 8, color: 'var(--text)'}}>
                  {f.title}
                </h3>
                <p style={{fontSize: 13, color: 'var(--text-secondary)', lineHeight: 1.7}}>
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{padding: '72px 0', background: '#1A1A2E', position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(212,175,55,0.1), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{maxWidth: 600, margin: '0 auto', textAlign: 'center'}}>
            <h2 className="outfit" style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              color: '#fff', marginBottom: 16, lineHeight: 1.2,
            }}>
              Your Body Deserves{' '}
              <span style={{color: '#D4AF37'}}>Premium Grade.</span>
            </h2>
            <p style={{fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28, lineHeight: 1.7}}>
              Every product lab tested. COA included. Trusted by practitioners across Southeast Asia.
            </p>
            <Link to="/shop" className="btn-primary" style={{padding: '14px 32px', fontSize: 15}}>
              Browse the Catalog <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
