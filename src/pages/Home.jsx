import React from 'react';
import Hero from '../components/Hero';
import ProductCard from '../components/ProductCard';
import { peptides } from '../data/peptides';
import { ArrowRight, Beaker, ShieldCheck, Zap, Activity, Microscope } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const featuredPeptides = peptides.slice(0, 4);

  return (
    <div className="home-page bg-white">
      <Hero />
      
      {/* Featured Section */}
      <section className="section-padding relative bg-bg-alt">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <div className="flex items-center gap-2 text-primary text-xs font-bold uppercase tracking-widest mb-4">
                 <Activity size={16} /> Research Priority
              </div>
              <h2 className="text-4xl md:text-5xl mb-6 tracking-tight">Scientifically Optimized Materials</h2>
              <p className="text-text-muted text-lg leading-relaxed">
                Our materials are synthesized in ISO-certified laboratories, ensuring maximum molecular stability and documented purity.
              </p>
            </div>
            <Link to="/shop" className="btn-secondary flex items-center gap-2 group mb-2">
              Explore Full Collection <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredPeptides.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Professional Layout */}
      <section id="about" className="section-padding bg-white">
        <div className="container">
          <div className="text-center mb-16">
             <h2 className="text-3xl md:text-5xl mb-6 tracking-tight">The Precision Standard</h2>
             <p className="text-text-muted max-w-2xl mx-auto text-lg">
                We bridge the gap between complex biochemistry and reliable research procurement.
             </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            <div className="bg-bg-alt p-12 rounded-3xl border border-border transition-all hover:bg-white hover:shadow-xl group">
              <div className="bg-primary-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-primary group-hover:text-white transition-all">
                <Microscope size={32} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font font-bold">Lab-Verified Purity</h3>
              <p className="text-text-muted leading-relaxed">
                Every batch is subjected to high-performance liquid chromatography (HPLC) and mass spectrometry (MS) to guarantee 99%+ accuracy.
              </p>
            </div>
            
            <div className="bg-bg-alt p-12 rounded-3xl border border-border transition-all hover:bg-white hover:shadow-xl group">
              <div className="bg-secondary-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-secondary group-hover:text-white transition-all">
                <Beaker size={32} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font font-bold">Stable Synthesis</h3>
              <p className="text-text-muted leading-relaxed">
                Our proprietary stabilization protocols ensure that lyophilized materials retain maximum efficacy during storage and transport.
              </p>
            </div>
            
            <div className="bg-bg-alt p-12 rounded-3xl border border-border transition-all hover:bg-white hover:shadow-xl group">
              <div className="bg-accent-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-accent group-hover:text-white transition-all">
                <ShieldCheck size={32} />
              </div>
              <h3 className="text-2xl mb-4 outfit-font font-bold">Global Integrity</h3>
              <p className="text-text-muted leading-relaxed">
                Climate-controlled shipping and secure, discrete packaging prioritize the physical and thermal integrity of your sensitive materials.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Quote / Conversion Section */}
      <section className="section-padding bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-primary-20 blur-[150px] -mr-48"></div>
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl mb-10 tracking-tight leading-tight font-bold">
               Reliable Data Starts with <br />
               <span className="text-primary italic">Precision Materials.</span>
            </h2>
            <p className="text-xl text-white/60 mb-12 leading-relaxed">
               Trusted by academic researchers and metabolic specialists worldwide for consistent batch-to-batch reliability and transparent analytical reporting.
            </p>
            <Link to="/shop" className="btn-primary inline-flex items-center gap-2 text-xl px-12 py-5">
               Begin Procurement <ArrowRight size={22} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
