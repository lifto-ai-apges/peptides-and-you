import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { peptides } from '../data/peptides';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, CheckCircle2, ShieldCheck, FlaskConical, FileText, Star, Database } from 'lucide-react';

const Stars = ({ rating = 5 }) => (
  <div className="stars" style={{marginBottom: 6}}>
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={15}
        fill={i < rating ? '#E63946' : 'transparent'}
        color={i < rating ? '#E63946' : '#D4D4D8'}
        strokeWidth={1.5} />
    ))}
  </div>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = peptides.find(p => p.id === id);

  useEffect(() => { window.scrollTo(0, 0); }, [id]);

  if (!product) return (
    <div style={{paddingTop: 240, textAlign: 'center', fontSize: 20, fontWeight: 700, color: 'var(--text-secondary)', minHeight: '60vh'}}>
      Material not found in catalog.
    </div>
  );

  // Product JSON-LD
  const productSchema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "sku": product.id,
    "brand": { "@type": "Brand", "name": "Peptides and You" },
    "offers": {
      "@type": "Offer",
      "priceCurrency": "GBP",
      "price": product.price.toFixed(2),
      "availability": "https://schema.org/InStock",
      "url": `https://peptidesandyou.co.uk/product/${product.id}`,
      "seller": { "@type": "Organization", "name": "Peptides and You" },
      "shippingDetails": {
        "@type": "OfferShippingDetails",
        "shippingDestination": { "@type": "DefinedRegion", "addressCountry": "GB" },
        "deliveryTime": { "@type": "ShippingDeliveryTime", "handlingTime": { "@type": "QuantitativeValue", "minValue": 0, "maxValue": 1, "unitCode": "DAY" }, "transitTime": { "@type": "QuantitativeValue", "minValue": 1, "maxValue": 2, "unitCode": "DAY" } }
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": product.rating,
      "reviewCount": 47,
      "bestRating": 5
    }
  };

  return (
    <div style={{paddingTop: 180, paddingBottom: 60, background: 'var(--bg)', minHeight: '100vh'}}>
      <Helmet>
        <title>{product.name} | Lab-Verified Research Peptide | Buy Online UK | Peptides and You</title>
        <meta name="description" content={`${product.shortDescription} 99.8%+ purity, COA included. UK next-day delivery available. Research use only.`} />
        <meta name="keywords" content={product.seoKeywords.join(', ') + ', buy peptides UK, research peptides UK'} />
        <link rel="canonical" href={`https://peptidesandyou.co.uk/product/${product.id}`} />
        <meta property="og:title" content={`${product.name} | Peptides and You`} />
        <meta property="og:description" content={product.shortDescription} />
        <meta property="og:type" content="product" />
        <meta property="og:url" content={`https://peptidesandyou.co.uk/product/${product.id}`} />
        <meta property="product:price:amount" content={product.price.toFixed(2)} />
        <meta property="product:price:currency" content="GBP" />
        <meta name="geo.region" content="GB-ENG" />
        <meta name="geo.placename" content="London" />
        <script type="application/ld+json">{JSON.stringify(productSchema)}</script>
      </Helmet>

      <div className="container">
        <Link to="/shop" style={{
          display: 'inline-flex', alignItems: 'center', gap: 6, marginBottom: 24,
          color: 'var(--text-secondary)', fontWeight: 700, fontSize: 13, letterSpacing: '0.04em',
        }}>
          <ArrowLeft size={15} /> Back to Catalog
        </Link>

        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, alignItems: 'flex-start'}}>
          {/* Image */}
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} style={{position: 'sticky', top: 200}}>
            <div style={{
              background: '#fff', aspectRatio: '1', borderRadius: 16,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              border: '1px solid var(--border)', position: 'relative',
            }}>
              <div style={{
                width: 140, height: 140, borderRadius: '50%',
                background: '#F0F0F2', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <FlaskConical size={56} color="#E63946" strokeWidth={1.2} style={{opacity: 0.3}} />
              </div>

              {product.size && (
                <div style={{
                  position: 'absolute', top: 16, right: 16,
                  background: '#F0F0F2', padding: '5px 12px', borderRadius: 6,
                  fontSize: 12, fontWeight: 700, color: 'var(--text-secondary)',
                }}>
                  {product.size}
                </div>
              )}

              <div style={{
                position: 'absolute', bottom: 16, right: 16,
                background: '#fff', padding: '10px 14px', borderRadius: 10,
                boxShadow: 'var(--shadow-sm)', border: '1px solid var(--border)',
                display: 'flex', alignItems: 'center', gap: 10,
              }}>
                <div style={{width: 32, height: 32, borderRadius: 8, background: '#ECFDF5', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <ShieldCheck size={17} color="#16A34A" />
                </div>
                <div>
                  <p style={{fontSize: 9, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)'}}>Purity</p>
                  <p style={{fontSize: 13, fontWeight: 700, color: 'var(--text)'}}>99.8%+</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div initial={{ opacity: 0, x: 16 }} animate={{ opacity: 1, x: 0 }}>
            {/* Category */}
            <span style={{
              display: 'inline-block', padding: '4px 12px', borderRadius: 6,
              background: 'rgba(230,57,70,0.08)', border: '1px solid rgba(230,57,70,0.12)',
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em',
              color: '#E63946', marginBottom: 12,
            }}>
              {product.category}
            </span>

            <h1 className="outfit" style={{fontSize: 40, fontWeight: 800, color: 'var(--text)', marginBottom: 10, letterSpacing: '-0.02em'}}>
              {product.name}
            </h1>

            <Stars rating={product.rating} />

            <div style={{display: 'flex', alignItems: 'center', gap: 16, margin: '12px 0 24px'}}>
              <p className="outfit" style={{fontSize: 28, fontWeight: 800, color: '#E63946'}}>
                {product.originalPrice && (
                  <span style={{fontSize: 18, color: 'var(--text-light)', textDecoration: 'line-through', marginRight: 10, fontWeight: 500}}>
                    £{product.originalPrice.toFixed(2)}
                  </span>
                )}
                £{product.price.toFixed(2)}
              </p>
              <div style={{height: 28, width: 1, background: 'var(--border)'}} />
              <p style={{display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, fontWeight: 700, color: '#16A34A'}}>
                <CheckCircle2 size={15} /> In Stock
              </p>
            </div>

            <p style={{fontSize: 15, color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: 28}}>
              {product.description}
            </p>

            {/* Benefits */}
            <div style={{background: '#fff', padding: 24, borderRadius: 12, border: '1px solid var(--border)', marginBottom: 24}}>
              <h3 className="outfit" style={{fontSize: 15, fontWeight: 700, marginBottom: 14, color: 'var(--text)'}}>Research Indicators</h3>
              <ul style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 12, listStyle: 'none', padding: 0}}>
                {product.benefits.map((benefit, i) => (
                  <li key={i} style={{display: 'flex', alignItems: 'flex-start', gap: 8, fontSize: 13, fontWeight: 500, color: 'var(--text-secondary)'}}>
                    <CheckCircle2 size={15} color="#E63946" style={{marginTop: 2, flexShrink: 0}} />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* CTAs */}
            <div style={{display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 360, marginBottom: 28}}>
              <button className="btn-primary" style={{padding: '14px 28px', fontSize: 15, width: '100%'}}>
                <ShoppingCart size={18} /> Add to Basket
              </button>
              <button className="btn-outline" style={{padding: '12px 28px', fontSize: 14, width: '100%'}}>
                <FileText size={18} /> Download COA / SDS
              </button>
            </div>

            {/* Quick Specs */}
            <div style={{display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12}}>
              {[
                { label: 'Purity', value: '99.8%+' },
                { label: 'Format', value: 'Lyophilised' },
                { label: 'Protocol', value: 'ISO-9001' },
              ].map(spec => (
                <div key={spec.label} style={{
                  background: '#fff', border: '1px solid var(--border)',
                  padding: '16px 12px', borderRadius: 10, textAlign: 'center',
                }}>
                  <span style={{display: 'block', fontSize: 10, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.06em', color: 'var(--text-muted)', marginBottom: 4}}>
                    {spec.label}
                  </span>
                  <span className="outfit" style={{fontSize: 17, fontWeight: 800, color: 'var(--text)'}}>{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Scientific Section */}
        <section style={{marginTop: 64, paddingTop: 40, borderTop: '1px solid var(--border)'}}>
          <div style={{display: 'grid', gridTemplateColumns: '280px 1fr', gap: 40}}>
            <div>
              <div style={{
                width: 44, height: 44, borderRadius: 10, background: 'rgba(230,57,70,0.08)',
                display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14,
              }}>
                <Database size={22} color="#E63946" />
              </div>
              <h2 className="outfit" style={{fontSize: 22, fontWeight: 800, marginBottom: 8, color: 'var(--text)'}}>Scientific Analysis</h2>
              <p style={{fontSize: 13, color: 'var(--text-muted)', fontWeight: 500}}>
                Biochemical background for <strong style={{color: 'var(--text-secondary)'}}>{product.name}</strong> research.
              </p>
            </div>
            <div style={{fontSize: 14, color: 'var(--text-secondary)', lineHeight: 1.8}}>
              <p style={{marginBottom: 16}}>
                The molecular architecture of <strong>{product.name}</strong> is synthesised via automated solid-phase peptide synthesis (SPPS),
                minimising human intervention and maximising batch consistency. Analytical evaluation focuses on&nbsp;
                <strong>{product.seoKeywords[1]}</strong> and secondary structural stability.
              </p>
              <p>
                Researchers investigating <strong>{product.seoKeywords[2]}</strong> will find this material maintains optimal binding affinity.
                Our facility implements strict cold-chain management from synthesis to storage, preventing degradation of sensitive amino acid sequences.
              </p>
            </div>
          </div>
        </section>

        {/* Responsive override */}
        <style>{`
          @media (max-width: 768px) {
            [style*="grid-template-columns: 1fr 1fr"] { grid-template-columns: 1fr !important; }
            [style*="grid-template-columns: 280px 1fr"] { grid-template-columns: 1fr !important; }
          }
        `}</style>
      </div>
    </div>
  );
};

export default ProductDetails;
