import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FlaskConical, Star } from 'lucide-react';

const Stars = ({ rating = 5 }) => (
  <div className="stars">
    {[...Array(5)].map((_, i) => (
      <Star key={i} size={13}
        fill={i < rating ? '#E63946' : 'transparent'}
        color={i < rating ? '#E63946' : '#D4D4D8'}
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
        <div className="icon-circle">
          <FlaskConical size={40} color="#E63946" strokeWidth={1.3} style={{opacity: 0.35}} />
        </div>
      </div>

      <div className="product-card-body">
        <div className="card-title-row">
          <Link to={`/product/${product.id}`} style={{textDecoration: 'none'}}>
            <h3 className="card-title">{product.name}</h3>
          </Link>
          {product.size && <span className="card-size">{product.size}</span>}
        </div>

        <Stars rating={product.rating} />

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
