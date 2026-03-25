import React from 'react';
import { Mail, Phone, MapPin, FlaskConical, Instagram, Twitter, Facebook, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div style={{background: '#111827', color: '#fff', paddingTop: 56, paddingBottom: 40}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40}}>
            {/* Brand */}
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
                <div style={{width: 32, height: 32, background: '#E63946', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FlaskConical size={17} color="#fff" />
                </div>
                <span className="outfit" style={{fontSize: 17, fontWeight: 800, color: '#fff'}}>
                  Peptides<span style={{fontStyle: 'italic'}}>andYou</span>
                </span>
              </div>
              <p style={{color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7, marginBottom: 20}}>
                UK-based supplier of premium research peptides. ISO-certified laboratory protocols ensure 99.8% average purity across our entire catalog.
              </p>
              <div style={{display: 'flex', gap: 8}}>
                {[Instagram, Twitter, Facebook].map((Icon, i) => (
                  <a key={i} href="#" style={{
                    padding: 8, background: 'rgba(255,255,255,0.06)', borderRadius: 6,
                    border: '1px solid rgba(255,255,255,0.08)', display: 'flex',
                  }}>
                    <Icon size={15} color="rgba(255,255,255,0.6)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Catalog */}
            <div>
              <h4 className="outfit" style={{fontSize: 14, fontWeight: 700, marginBottom: 18, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em'}}>
                Catalog
              </h4>
              <ul className="space-y-4">
                {['All Research Peptides', 'Tissue Repair (BPC-157)', 'Metabolic Optimisation', 'Performance GHRPs', 'Peptide Stacks'].map(item => (
                  <li key={item}><a href="/shop" style={{color: 'rgba(255,255,255,0.5)', fontSize: 13, transition: 'color 0.2s'}}>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Support */}
            <div>
              <h4 className="outfit" style={{fontSize: 14, fontWeight: 700, marginBottom: 18, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em'}}>
                Support
              </h4>
              <ul className="space-y-4">
                {['Lab Protocols', 'Safety Data Sheets', 'UK Shipping Info', 'Returns Policy', 'FAQs'].map(item => (
                  <li key={item}><a href="#" style={{color: 'rgba(255,255,255,0.5)', fontSize: 13}}>{item}</a></li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="outfit" style={{fontSize: 14, fontWeight: 700, marginBottom: 18, color: '#fff', textTransform: 'uppercase', letterSpacing: '0.06em'}}>
                Contact
              </h4>
              <ul className="space-y-5">
                <li style={{display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13}}>
                  <Mail size={16} color="#E63946" style={{marginTop: 2, flexShrink: 0}} /> lab@peptidesandyou.co.uk
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13}}>
                  <Phone size={16} color="#E63946" style={{marginTop: 2, flexShrink: 0}} /> +44 20 7946 0123
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13}}>
                  <MapPin size={16} color="#E63946" style={{marginTop: 2, flexShrink: 0}} />
                  Precision Park Biotech Hub,<br />London, E14 9GE, United Kingdom
                </li>
              </ul>
            </div>
          </div>

          {/* Disclaimer */}
          <div style={{
            padding: '14px 20px', background: 'rgba(255,255,255,0.03)',
            borderRadius: 8, border: '1px solid rgba(255,255,255,0.06)', marginBottom: 0,
          }}>
            <p style={{fontSize: 11, color: 'rgba(255,255,255,0.35)', lineHeight: 1.7, textAlign: 'center'}}>
              <strong style={{color: 'rgba(255,255,255,0.5)'}}>Research Use Only.</strong> Products are sold strictly for laboratory and research purposes. Not for human consumption. By purchasing, you agree that materials will be used exclusively for in-vitro research.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{background: '#0B0F1A', padding: '14px 0'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em'}}>
            <ShieldCheck size={13} color="#E63946" /> © 2025 Peptides and You Ltd · Registered in England & Wales
          </div>
          <div style={{display: 'flex', gap: 20, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)'}}>
            <a href="#" style={{color: 'inherit'}}>Privacy Policy</a>
            <a href="#" style={{color: 'inherit'}}>Terms of Supply</a>
            <a href="#" style={{color: 'inherit'}}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
