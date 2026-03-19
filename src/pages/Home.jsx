import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { peptides } from '../data/peptides';
import { ArrowRight, Beaker, ShieldCheck, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPeptides = peptides.slice(0, 4);

  return (
    <div className="home-page">
      <Hero />
      
      {/* Featured Section */}
      <section className="section-padding relative">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
            <div>
              <h2 className="text-4xl md:text-5xl mb-4 glow-text">Featured Research</h2>
              <p className="text-text-muted max-w-xl">
                Our most sought-after research peptides, verified for 99%+ purity and optimal absorption.
              </p>
            </div>
            <Link to="/shop" className="btn-secondary flex items-center gap-2 group">
              View All Products <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredPeptides.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="about" className="section-padding bg-surface/30">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="glass-panel p-10 border-primary/10">
              <div className="bg-primary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <ShieldCheck className="text-primary" size={28} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font">Lab Verified</h3>
              <p className="text-text-muted leading-relaxed">
                Every batch undergoes rigorous HPLC and MS testing to ensure absolute purity and concentration.
              </p>
            </div>
            
            <div className="glass-panel p-10 border-secondary/10">
              <div className="bg-secondary/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Beaker className="text-secondary" size={28} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font">Synthesized for Bioavailability</h3>
              <p className="text-text-muted leading-relaxed">
                Utilizing state-of-the-art synthesis techniques to maximize cellular uptake and research efficacy.
              </p>
            </div>
            
            <div className="glass-panel p-10 border-accent/10">
              <div className="bg-accent/20 w-14 h-14 rounded-2xl flex items-center justify-center mb-6">
                <Zap className="text-accent" size={28} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font">Rapid Logistics</h3>
              <p className="text-text-muted leading-relaxed">
                Discrete, temperature-optimized shipping worldwide to preserve the integrity of your research materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SEO/Info Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full pointer-events-none"></div>
        <div className="container">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl mb-8 outfit-font">The Future of <span className="text-primary">Human Optimization</span></h2>
            <div className="space-y-6 text-text-muted leading-relaxed text-lg">
              <p>
                At <strong>Peptides and You</strong>, we bridge the gap between cutting-edge biochemistry and personal research. Our mission is to provide 
                the highest grade peptides like <strong>BPC-157</strong>, <strong>TB-500</strong>, and <strong>Retatrutide</strong> to researchers globaly.
              </p>
              <p>
                From <strong>tissue repair</strong> and <strong>metabolic health</strong> to <strong>cognitive enhancement</strong>, our catalog 
                is curated to support a wide range of biological objectives. We believe in transparency, data-driven results, and unwavering quality.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
