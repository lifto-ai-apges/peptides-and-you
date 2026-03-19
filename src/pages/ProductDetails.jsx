import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { peptides } from '../data/peptides';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ShoppingCart, ArrowLeft, CheckCircle2, Info, Activity, Database } from 'lucide-react';

const ProductDetails = () => {
  const { id } = useParams();
  const product = peptides.find(p => p.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!product) return <div className="pt-40 text-center text-2xl">Product not found.</div>;

  return (
    <div className="product-details-page pt-32 pb-20">
      <Helmet>
        <title>{product.name} - Peptides and You | Research Grade</title>
        <meta name="description" content={product.shortDescription} />
        <meta name="keywords" content={product.seoKeywords.join(', ')} />
      </Helmet>

      <div className="container">
        <Link to="/shop" className="inline-flex items-center gap-2 text-text-muted hover:text-primary transition-colors mb-8 group">
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" /> Back to Catalog
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Image/Visual Column */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="sticky top-32"
          >
            <div className="glass-panel aspect-square relative bg-surface-bright flex items-center justify-center p-12 border-primary/20">
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5"></div>
               <div className="relative w-full h-full border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-center">
                  <Activity size={80} className="text-primary mb-6 animate-pulse" />
                  <h4 className="text-2xl font-bold opacity-30 outfit-font uppercase tracking-widest">{product.name}</h4>
                  <p className="text-xs text-text-muted mt-4 font-mono">LAB-BATCH: #PAU-{Math.floor(Math.random() * 10000)}</p>
               </div>
            </div>
          </motion.div>

          {/* Content Column */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-block px-4 py-1.5 bg-secondary/20 text-secondary text-xs uppercase font-extrabold tracking-widest rounded-full mb-6 border border-secondary/20">
              {product.category}
            </div>
            <h1 className="text-5xl md:text-6xl mb-4 outfit-font">{product.name}</h1>
            <p className="text-2xl font-bold text-primary mb-8">${product.price}</p>
            
            <p className="text-lg text-text-muted mb-10 leading-relaxed italic border-l-4 border-primary/30 pl-6">
              {product.description}
            </p>

            <div className="glass-panel p-8 mb-10 border-white/5">
              <h3 className="text-xl font-bold mb-6 flex items-center gap-3 outfit-font"><Info size={20} className="text-primary" /> Key Benefits for Research</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-text-muted font-medium">
                    <CheckCircle2 size={16} className="text-primary mt-0.5 flex-shrink-0" />
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <button className="flex-1 btn-primary py-4 flex items-center justify-center gap-3">
                <ShoppingCart size={20} /> Add to Order
              </button>
              <button className="px-6 btn-secondary border-white/10 hover:bg-white/5">
                Lab Certificates (COA)
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
               <div className="glass-panel p-4 text-center">
                  <span className="block text-[10px] uppercase font-bold text-text-muted mb-1 tracking-tighter">Purity</span>
                  <span className="text-lg font-bold text-primary">99.8%</span>
               </div>
               <div className="glass-panel p-4 text-center">
                  <span className="block text-[10px] uppercase font-bold text-text-muted mb-1 tracking-tighter">Format</span>
                  <span className="text-lg font-bold text-secondary">Lyophilized</span>
               </div>
               <div className="glass-panel p-4 text-center">
                  <span className="block text-[10px] uppercase font-bold text-text-muted mb-1 tracking-tighter">Storage</span>
                  <span className="text-lg font-bold text-accent">-20°C</span>
               </div>
            </div>
          </motion.div>
        </div>

        {/* AI Optimization / Dynamic SEO Section */}
        <section className="mt-32 pt-20 border-t border-border">
           <div className="flex items-center gap-4 mb-8">
              <div className="p-3 bg-primary/20 rounded-xl">
                 <Database size={24} className="text-primary" />
              </div>
              <h2 className="text-3xl font-bold outfit-font">In-depth Technical Analysis</h2>
           </div>
           <div className="glass-panel p-10 bg-surface/40 leading-relaxed space-y-6 text-text-muted">
              <p>
                The molecular structure of <strong>{product.name}</strong> has been extensively studied for its potential in 
                regulating specific physiological processes. When utilized in research environments, biological indicators 
                suggest a high affinity for cellular signaling pathways related to {product.category.toLowerCase()} and systemic optimization.
              </p>
              <p>
                Research data points to <strong>{product.seoKeywords[1]}</strong> as a primary mechanism of action. 
                Our synthesis protocol ensures that the peptide remains stable and bio-identical to its natural counterpart 
                (where applicable), providing researchers with the highest fidelity data points possible.
              </p>
           </div>
        </section>
      </div>
    </div>
  );
};

export default ProductDetails;
