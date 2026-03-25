import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Award } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      paddingTop: 200, paddingBottom: 80,
      background: '#111827',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Subtle gradient accent - no edge glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 600, height: 600,
        background: 'radial-gradient(circle, rgba(230,57,70,0.08) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{position: 'relative', zIndex: 2}}>
        <div style={{maxWidth: 700, margin: '0 auto', textAlign: 'center'}}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: 8,
              padding: '6px 14px', borderRadius: 8,
              background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
              marginBottom: 28, fontSize: 11, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.7)',
            }}>
              <ShieldCheck size={14} color="#E63946" />
              Certified Research Standards · 99.8% Purity
            </div>

            {/* Heading - HIGH CONTRAST */}
            <h1 className="outfit" style={{
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, color: '#FFFFFF',
              letterSpacing: '-0.02em',
            }}>
              Premium Grade{' '}
              <span style={{color: '#E63946'}}>Peptide Research</span>
            </h1>

            {/* Subtitle - VISIBLE */}
            <p style={{
              fontSize: 17, color: 'rgba(255,255,255,0.65)',
              maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7,
            }}>
              Accelerate your biological discovery with lab-verified, 99%+ purity peptides. UK-based, next-day delivery available.
            </p>

            {/* CTAs */}
            <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48}}>
              <Link to="/shop" className="btn-primary" style={{padding: '14px 32px', fontSize: 15}}>
                View Full Catalog <ArrowRight size={18} />
              </Link>
              <Link to="/#about" className="btn-outline-white" style={{padding: '14px 32px', fontSize: 15}}>
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
              paddingTop: 28, borderTop: '1px solid rgba(255,255,255,0.1)',
            }}>
              {[
                { value: '99.8%', label: 'Average Purity' },
                { value: '24h', label: 'UK Express' },
                { value: 'COA', label: 'Batch Included' },
              ].map((stat) => (
                <div key={stat.label} style={{textAlign: 'center'}}>
                  <div className="outfit" style={{fontSize: 26, fontWeight: 800, color: '#FFFFFF'}}>{stat.value}</div>
                  <div style={{fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'rgba(255,255,255,0.45)', marginTop: 2}}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
