import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, Zap, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex items-center pt-24 pb-12 overflow-hidden bg-bg-alt">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[100px] rounded-full -mr-32 -mt-32"></div>
      
      <div className="container relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white border border-border rounded-full mb-8 shadow-sm">
              <ShieldCheck size={16} className="text-secondary" />
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-text-muted">Certified Research Standards</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl mb-8 leading-[1.05] tracking-tight">
              Premium Grade <br />
              <span className="glow-text font-extrabold">Peptide Research</span>
            </h1>
            
            <p className="text-xl text-text-muted mb-12 max-w-xl leading-relaxed">
              Accelerate your biological discovery with lab-verified, 99%+ purity peptides. Designed for clinical-grade precision and reliability.
            </p>

            <div className="flex flex-wrap gap-5">
              <Link to="/shop" className="btn-primary flex items-center gap-2 text-lg">
                View Full Catalog <ArrowRight size={20} />
              </Link>
              <Link to="/#about" className="btn-secondary text-lg">
                Stability Data
              </Link>
            </div>

            <div className="mt-16 pt-8 border-t border-border flex items-center gap-10">
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 line-height-1">99.8%</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Average Purity</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 line-height-1">24h</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Global Express</span>
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-bold text-slate-900 line-height-1">COA</span>
                <span className="text-xs font-bold text-text-muted uppercase tracking-widest">Batch Included</span>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="hidden lg:block relative"
          >
            <div className="relative z-10 bg-white p-4 rounded-[40px] shadow-2xl border border-border">
              <div className="aspect-square bg-slate-50 rounded-[32px] flex items-center justify-center overflow-hidden relative">
                 <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                 <Activity size={180} className="text-primary/20 absolute bottom-0 right-0 -mr-10 -mb-10" />
                 <div className="relative z-20 flex flex-col items-center">
                    <div className="w-24 h-24 bg-white rounded-2xl shadow-lg flex items-center justify-center mb-6">
                       <Zap size={48} className="text-primary" />
                    </div>
                    <div className="space-y-3 px-12 text-center">
                       <div className="h-2 w-32 bg-primary/20 rounded-full mx-auto"></div>
                       <div className="h-4 w-48 bg-slate-200 rounded-lg mx-auto"></div>
                       <div className="h-4 w-40 bg-slate-200 rounded-lg mx-auto"></div>
                    </div>
                 </div>
              </div>
            </div>
            {/* Trust Badges */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-border z-20 flex items-center gap-4 animate-fade-in">
               <div className="bg-secondary/10 p-2 rounded-lg">
                  <ShieldCheck size={24} className="text-secondary" />
               </div>
               <div>
                  <p className="text-xs font-bold text-text-muted uppercase tracking-tighter">Verified Batch</p>
                  <p className="text-sm font-bold text-slate-900">HPLC Cert: #98421</p>
               </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
