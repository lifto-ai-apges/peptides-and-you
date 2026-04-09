import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Award, FlaskConical, FileCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section style={{
      paddingTop: 200, paddingBottom: 80,
      background: '#FFFFFF',
      position: 'relative', overflow: 'hidden',
    }}>
      {/* Hero background image */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'url(/hero-bg.png)',
        backgroundSize: 'cover', backgroundPosition: 'center',
        opacity: 0.12, pointerEvents: 'none',
      }} />

      {/* Subtle warm gradient accent */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 700, height: 700,
        background: 'radial-gradient(circle, rgba(184,151,47,0.06) 0%, transparent 70%)',
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
              background: 'var(--primary-light)', border: '1px solid rgba(184,151,47,0.2)',
              marginBottom: 28, fontSize: 11, fontWeight: 700,
              textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--primary)',
            }}>
              <FileCheck size={14} color="var(--primary)" />
              Lab Tested · COA Included · All Products
            </div>

            {/* Heading */}
            <h1 className="outfit" style={{
              fontSize: 'clamp(32px, 5.5vw, 60px)',
              fontWeight: 800, lineHeight: 1.1,
              marginBottom: 20, color: 'var(--text)',
              letterSpacing: '-0.02em',
            }}>
              Premium{' '}
              <span style={{
                background: 'linear-gradient(135deg, #D4AF37, #B8972F)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>Peptides & You</span>
            </h1>

            {/* Subtitle */}
            <p style={{
              fontSize: 17, color: 'var(--text-secondary)',
              maxWidth: 520, margin: '0 auto 36px', lineHeight: 1.7,
            }}>
              Pharmaceutical-grade lyophilised peptides. Every product lab-tested with Certificate of Analysis included. Trusted by practitioners across Southeast Asia.
            </p>

            {/* CTAs */}
            <div style={{display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap', marginBottom: 48}}>
              <Link to="/shop" className="btn-primary" style={{padding: '14px 32px', fontSize: 15}}>
                Shop All Peptides <ArrowRight size={18} />
              </Link>
              <Link to="/#about" className="btn-outline" style={{padding: '14px 32px', fontSize: 15}}>
                Learn More
              </Link>
            </div>

            {/* Stats */}
            <div style={{
              display: 'flex', justifyContent: 'center', gap: 48, flexWrap: 'wrap',
              paddingTop: 28, borderTop: '1px solid var(--border)',
            }}>
              {[
                { value: '12', label: 'Products' },
                { value: 'COA', label: 'Every Batch' },
                { value: 'Lab', label: 'Tested & Verified' },
              ].map((stat) => (
                <div key={stat.label} style={{textAlign: 'center'}}>
                  <div className="outfit" style={{fontSize: 26, fontWeight: 800, color: 'var(--primary)'}}>{stat.value}</div>
                  <div style={{fontSize: 11, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--text-muted)', marginTop: 2}}>
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
