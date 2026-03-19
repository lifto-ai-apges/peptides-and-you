import React from 'react';
import { Mail, Phone, MapPin, Droplets, Instagram, Twitter, Facebook, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-slate-900 pt-24 pb-12 text-white/90">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-20">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-8">
              <div className="p-1.5 bg-primary rounded-lg">
                 <Droplets className="text-white" size={24} />
              </div>
              <span className="text-2xl font-bold outfit-font tracking-tight text-white">
                Peptides<span className="italic">andYou</span>
              </span>
            </div>
            <p className="text-white/60 mb-8 leading-relaxed text-sm">
              World-leading supplier of high-purity research peptides. Our laboratory protocols ensure 99.8% average purity across our entire catalog.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2.5 bg-white/5 hover:bg-white/10 transition-all rounded-lg border border-white/5"><Instagram size={18} /></a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-white/10 transition-all rounded-lg border border-white/5"><Twitter size={18} /></a>
              <a href="#" className="p-2.5 bg-white/5 hover:bg-white/10 transition-all rounded-lg border border-white/5"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Direct Catalog</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="/shop" className="hover:text-primary transition-colors">All Research Materials</a></li>
              <li><a href="/shop?cat=Recovery" className="hover:text-primary transition-colors">Tissue Repair (BPC-157)</a></li>
              <li><a href="/shop?cat=Metabolic" className="hover:text-primary transition-colors">Metabolic Optimization</a></li>
              <li><a href="/shop?cat=Performance" className="hover:text-primary transition-colors">High Performance GHRPs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Research Support</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li><a href="/#about" className="hover:text-primary transition-colors">Lab Protocols</a></li>
              <li><a href="/#safety" className="hover:text-primary transition-colors">Safety Data Sheets (SDS)</a></li>
              <li><a href="/#shipping" className="hover:text-primary transition-colors">Cold Chain Logistics</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">Common Research FAQs</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 text-white">Global Headquarters</h4>
            <ul className="space-y-5 text-white/60 text-sm">
              <li className="flex items-start gap-4"><Mail size={20} className="text-primary mt-1" /> lab@peptidesandyou.com</li>
              <li className="flex items-start gap-4"><Phone size={20} className="text-primary mt-1" /> +44 20 7946 0123</li>
              <li className="flex items-start gap-4"><MapPin size={20} className="text-primary mt-1" /> Precision Park Biotech Hub, <br />London, E14 9GE, UK</li>
            </ul>
          </div>
        </div>

        <div className="pt-10 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2 text-xs font-bold text-white/40 uppercase tracking-widest">
            <ShieldCheck size={14} className="text-primary" /> Established 2018 | Lab-Verified Integrity
          </div>
          <div className="flex gap-8 text-xs text-white/40 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Supply</a>
            <a href="#" className="hover:text-white transition-colors">Wholesale</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
