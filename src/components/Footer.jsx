import React from 'react';
import { Mail, Phone, MapPin, FlaskConical, Instagram, Facebook, MessageCircle, ShieldCheck } from 'lucide-react';

const Footer = () => {
  return (
    <footer>
      {/* Main Footer */}
      <div style={{background: '#1A1A2E', color: '#fff', paddingTop: 56, paddingBottom: 40}}>
        <div className="container">
          <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 40, marginBottom: 40}}>
            {/* Brand */}
            <div>
              <div style={{display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16}}>
                <div style={{width: 32, height: 32, background: 'linear-gradient(135deg, #D4AF37, #B8972F)', borderRadius: 7, display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                  <FlaskConical size={17} color="#fff" />
                </div>
                <span className="outfit" style={{fontSize: 17, fontWeight: 800, color: '#fff'}}>
                  Peptides<span style={{fontStyle: 'italic'}}>&You</span>
                </span>
              </div>
              <p style={{color: 'rgba(255,255,255,0.55)', fontSize: 13, lineHeight: 1.7, marginBottom: 20}}>
                Premium pharmaceutical-grade peptides. All products are lyophilised powder vials supplied with Certificate of Analysis. Lab tested and verified pure.
              </p>
              <div style={{display: 'flex', gap: 8}}>
                {[Instagram, Facebook, MessageCircle].map((Icon, i) => (
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
                {['All Peptides', 'Healing & Recovery', 'Anti-Aging & Skin', 'Weight Management', 'Growth Hormone', 'Cognitive & Neuro'].map(item => (
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
                {['Lab Testing & COA', 'Shipping Info', 'Returns Policy', 'FAQs', 'Contact Us'].map(item => (
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
                  <Mail size={16} color="#D4AF37" style={{marginTop: 2, flexShrink: 0}} /> info@peptidesandyou.com
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13}}>
                  <MessageCircle size={16} color="#D4AF37" style={{marginTop: 2, flexShrink: 0}} /> WhatsApp Available
                </li>
                <li style={{display: 'flex', alignItems: 'flex-start', gap: 10, color: 'rgba(255,255,255,0.5)', fontSize: 13}}>
                  <MapPin size={16} color="#D4AF37" style={{marginTop: 2, flexShrink: 0}} />
                  Philippines
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
              <strong style={{color: 'rgba(255,255,255,0.5)'}}>Disclaimer.</strong> All products are sold as lyophilised powder vials for research purposes. Certificate of Analysis supplied with every order. Consult a healthcare professional before use.
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{background: '#12122A', padding: '14px 0'}}>
        <div className="container" style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 12}}>
          <div style={{display: 'flex', alignItems: 'center', gap: 6, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)', letterSpacing: '0.04em'}}>
            <ShieldCheck size={13} color="#D4AF37" /> © 2026 Peptides and You
          </div>
          <div style={{display: 'flex', gap: 20, fontSize: 11, fontWeight: 600, color: 'rgba(255,255,255,0.3)'}}>
            <a href="#" style={{color: 'inherit'}}>Privacy Policy</a>
            <a href="#" style={{color: 'inherit'}}>Terms of Service</a>
            <a href="#" style={{color: 'inherit'}}>Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
