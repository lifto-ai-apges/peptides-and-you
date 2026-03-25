import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { peptides } from '../data/peptides';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Microscope, Beaker, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPeptides = peptides.filter(p => p.type === 'peptide').slice(0, 3);

  // Organization JSON-LD
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Peptides and You",
    "url": "https://peptidesandyou.co.uk",
    "logo": "https://peptidesandyou.co.uk/logo.png",
    "description": "UK-based supplier of premium lab-verified research peptides with 99.8% purity.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Precision Park Biotech Hub",
      "addressLocality": "London",
      "postalCode": "E14 9GE",
      "addressCountry": "GB"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+44-20-7946-0123",
      "contactType": "customer service",
      "email": "lab@peptidesandyou.co.uk",
      "areaServed": "GB",
      "availableLanguage": "English"
    },
    "sameAs": [
      "https://www.instagram.com/peptidesandyou",
      "https://twitter.com/peptidesandyou"
    ]
  };

  // WebSite schema for search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Peptides and You",
    "url": "https://peptidesandyou.co.uk",
    "potentialAction": {
      "@type": "SearchAction",
      "target": "https://peptidesandyou.co.uk/shop?q={search_term_string}",
      "query-input": "required name=search_term_string"
    }
  };

  const features = [
    {
      icon: Microscope,
      title: 'Lab-Verified Purity',
      desc: 'Every batch undergoes HPLC and mass spectrometry testing to guarantee 99%+ purity and consistency.',
    },
    {
      icon: Beaker,
      title: 'Stable Synthesis',
      desc: 'Our stabilisation protocols ensure lyophilised materials retain maximum efficacy during storage and transport.',
    },
    {
      icon: ShieldCheck,
      title: 'UK-Wide Integrity',
      desc: 'Climate-controlled shipping across the UK with secure, discreet packaging for your research materials.',
    },
  ];

  return (
    <div style={{background: 'var(--bg)'}}>
      <Helmet>
        <title>Peptides and You | Premium Research Peptides UK | 99.8% Purity | Next-Day Delivery</title>
        <meta name="description" content="UK's leading supplier of lab-verified research peptides. BPC-157, TB-500, GHK-Cu, Epithalon and more. 99.8% purity, COA included, same-day dispatch with next-day UK delivery." />
        <meta name="keywords" content="research peptides UK, buy peptides UK, BPC-157 UK, TB-500, GHK-Cu, peptide supplier UK, lab-grade peptides, 99% purity peptides, next-day delivery peptides" />
        <link rel="canonical" href="https://peptidesandyou.co.uk" />

        {/* Open Graph */}
        <meta property="og:title" content="Peptides and You | Premium Research Peptides UK" />
        <meta property="og:description" content="Lab-verified research peptides. 99.8% purity, COA included, next-day UK delivery." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://peptidesandyou.co.uk" />
        <meta property="og:site_name" content="Peptides and You" />
        <meta property="og:locale" content="en_GB" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Peptides and You | Premium Research Peptides UK" />
        <meta name="twitter:description" content="Lab-verified research peptides. 99.8% purity, next-day UK delivery." />

        {/* Geo Tags */}
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="London" />
        <meta name="geo.position" content="51.5074;-0.1278" />
        <meta name="ICBM" content="51.5074, -0.1278" />
        <meta name="DC.title" content="Peptides and You - Research Peptides UK" />
        <meta name="DC.creator" content="Peptides and You Ltd" />
        <meta name="DC.subject" content="Research Peptides" />
        <meta name="DC.language" content="en-GB" />
        <meta name="DC.coverage" content="United Kingdom" />

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
                Our most popular lab-verified compounds, trusted by researchers across the UK.
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
            <h2 className="section-heading" style={{fontSize: 26}}>The Precision Standard</h2>
            <p style={{color: 'var(--text-secondary)', fontSize: 14, maxWidth: 520, margin: '0 auto', lineHeight: 1.6}}>
              Bridging the gap between complex biochemistry and reliable research procurement in the UK.
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
                  background: 'rgba(230,57,70,0.08)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: 18,
                }}>
                  <f.icon size={24} color="#E63946" />
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
      <section style={{padding: '72px 0', background: '#111827', position: 'relative', overflow: 'hidden'}}>
        <div style={{
          position: 'absolute', top: '50%', right: '10%', transform: 'translateY(-50%)',
          width: 400, height: 400,
          background: 'radial-gradient(circle, rgba(230,57,70,0.1), transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div className="container" style={{position: 'relative', zIndex: 2}}>
          <div style={{maxWidth: 600, margin: '0 auto', textAlign: 'center'}}>
            <h2 className="outfit" style={{
              fontSize: 'clamp(24px, 4vw, 42px)', fontWeight: 800,
              color: '#fff', marginBottom: 16, lineHeight: 1.2,
            }}>
              Reliable Data Starts with{' '}
              <span style={{color: '#E63946'}}>Precision Materials.</span>
            </h2>
            <p style={{fontSize: 15, color: 'rgba(255,255,255,0.55)', marginBottom: 28, lineHeight: 1.7}}>
              Trusted by academic researchers and metabolic specialists across the United Kingdom.
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
