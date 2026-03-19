import React from 'react';
import { Mail, Phone, MapPin, Droplets, Instagram, Twitter, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer bg-surface pt-20 pb-10 border-t border-border mt-20">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <Droplets className="text-primary" size={28} />
              <span className="text-2xl font-bold outfit-font">
                Peptides<span className="text-primary">andYou</span>
              </span>
            </div>
            <p className="text-text-muted mb-6 leading-relaxed">
              Premium peptide solutions for research and physical optimization. Quality, transparency, and results.
            </p>
            <div className="flex gap-4">
              <a href="#" className="p-2 glass-panel hover:bg-primary/20 transition-all rounded-full"><Instagram size={18} /></a>
              <a href="#" className="p-2 glass-panel hover:bg-primary/20 transition-all rounded-full"><Twitter size={18} /></a>
              <a href="#" className="p-2 glass-panel hover:bg-primary/20 transition-all rounded-full"><Facebook size={18} /></a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 outfit-font">Quick Links</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="/" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="/shop" className="hover:text-primary transition-colors">Shop All Products</a></li>
              <li><a href="/#about" className="hover:text-primary transition-colors">About Us</a></li>
              <li><a href="/#faq" className="hover:text-primary transition-colors">Research FAQ</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 outfit-font">Categories</h4>
            <ul className="space-y-4 text-text-muted">
              <li><a href="/shop?cat=Recovery" className="hover:text-primary transition-colors">Recovery & Repair</a></li>
              <li><a href="/shop?cat=Performance" className="hover:text-primary transition-colors">Performance & Muscle</a></li>
              <li><a href="/shop?cat=Metabolic" className="hover:text-primary transition-colors">Metabolic Health</a></li>
              <li><a href="/shop?cat=Beauty" className="hover:text-primary transition-colors">Anti-Aging & Beauty</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-6 outfit-font">Contact</h4>
            <ul className="space-y-4 text-text-muted">
              <li className="flex items-center gap-3"><Mail size={18} className="text-primary" /> contact@peptidesandyou.com</li>
              <li className="flex items-center gap-3"><Phone size={18} className="text-primary" /> +44 0123 456 789</li>
              <li className="flex items-center gap-3"><MapPin size={18} className="text-primary" /> London, United Kingdom</li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-text-muted">
            © {new Date().getFullYear()} Peptides and You. All rights reserved. For research purposes only.
          </p>
          <div className="flex gap-8 text-sm text-text-muted">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Shipping</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
