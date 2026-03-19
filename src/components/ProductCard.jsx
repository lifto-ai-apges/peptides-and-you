import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ShoppingCart, Heart, Activity, ArrowUpRight } from 'lucide-react';

const ProductCard = ({ product }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -8 }}
      transition={{ duration: 0.5 }}
      className="glass-panel group overflow-hidden border border-white/5 hover:border-primary/30 transition-all"
    >
      <div className="relative aspect-[4/5] bg-surface-bright flex items-center justify-center overflow-hidden">
        {/* Placeholder image representation */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 group-hover:from-primary/10 group-hover:to-secondary/10 transition-all duration-700"></div>
        <div className="relative w-32 h-32 glass-panel flex items-center justify-center rounded-full border-white/10 group-hover:scale-110 transition-transform duration-500">
           <span className="text-4xl font-bold opacity-20">{product.name.charAt(0)}</span>
           <Activity size={40} className="absolute text-primary/30 group-hover:text-primary transition-colors duration-500" />
        </div>
        
        {/* Badge */}
        <div className="absolute top-4 left-4 bg-primary/20 backdrop-blur-md text-primary text-[10px] uppercase font-bold px-3 py-1 rounded-full border border-primary/20">
          {product.category}
        </div>
        
        {/* Hover Actions */}
        <div className="absolute bottom-4 left-0 right-0 px-4 translate-y-12 group-hover:translate-y-0 transition-transform duration-500">
           <button className="w-full bg-white text-bg font-bold py-3 rounded-xl flex items-center justify-center gap-2 text-sm">
             <ShoppingCart size={16} /> Add to Cart
           </button>
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <Link to={`/product/${product.id}`}>
            <h3 className="text-xl font-bold hover:text-primary transition-colors outfit-font">{product.name}</h3>
          </Link>
          <span className="text-lg font-bold text-primary">${product.price}</span>
        </div>
        <p className="text-sm text-text-muted mb-6 line-clamp-2 leading-relaxed">
          {product.shortDescription}
        </p>
        <Link 
          to={`/product/${product.id}`} 
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-secondary hover:text-primary transition-colors group/link"
        >
          View Technical Data <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
