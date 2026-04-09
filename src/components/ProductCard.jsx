import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Star } from 'lucide-react';

const Stars = ({ rating = 5 }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={13}
        fill={i < rating ? '#D4AF37' : 'transparent'}
        color={i < rating ? '#D4AF37' : '#D4D4D8'}
        strokeWidth={1.5} />
    ))}
  </div>
);

const ProductCard = ({ product }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="product-card"
    >
      <div className="product-card-image">
        {product.type === 'stack' && <div className="badge-top">Stack</div>}
        <img src="/peptide-vial.png" alt={`${product.name} peptide vial`} style={{
          width: '100%', height: '100%', objectFit: 'cover',
        }} />
      </div>

      <div className="product-card-body">
        <div className="card-title-row">
          <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
            <h3 className="card-title">{product.name}</h3>
          </Link>
          {product.size && <span className="card-size">{product.size}</span>}
        </div>

        <span style={{
          display: 'inline-block', fontSize: 10, fontWeight: 600,
          color: 'var(--primary)', background: 'var(--primary-light)',
          padding: '2px 8px', borderRadius: 4, marginBottom: 6,
          textTransform: 'uppercase', letterSpacing: '0.04em',
        }}>{product.category}</span>

        <Stars rating={product.rating} />

        <p style={{
          fontSize: 12, color: 'var(--text-secondary)', lineHeight: 1.5,
          margin: '6px 0 10px', minHeight: 36,
          display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>{product.shortDescription}</p>

        <div className="card-price">
          {product.originalPrice && (
            <span className="old-price">£{product.originalPrice.toFixed(2)}</span>
          )}
          £{product.price.toFixed(2)}
        </div>

        <Link to={`/product/${product.id}`} className="card-btn">
          Add to basket
        </Link>
      </div>
    </motion.div>
  );
};

export default ProductCard;
