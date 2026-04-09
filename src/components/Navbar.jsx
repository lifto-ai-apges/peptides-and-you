import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShieldCheck, Truck, FlaskConical, User, ShoppingCart, CheckCircle, FileCheck } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'HOME', path: '/' },
    { name: 'ABOUT', path: '/#about' },
    { name: 'LAB TESTED', path: '/#testing' },
    { name: 'SHOP', path: '/shop', highlight: true },
    { name: 'CONTACT', path: '/#contact' },
  ];

  return (
    <header style={{position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100}}>
      {/* Announcement Bar */}
      <div className="announcement-bar">
        <span><ShieldCheck size={13} style={{verticalAlign: '-2px'}} /> Secure & discreet shipping</span>
        <span><FileCheck size={13} style={{verticalAlign: '-2px'}} /> Lab Tested · COA Included</span>
        <span><Truck size={13} style={{verticalAlign: '-2px'}} /> Fast delivery</span>
      </div>

      {/* Trust Bar */}
      <div className="trust-bar">
        <div className="trust-item">
          <FileCheck size={14} color="var(--primary)" />
          <span>Certificate of Analysis</span>
        </div>
        <div className="trust-item">
          <CheckCircle size={14} color="#16A34A" />
          <span>Lab Tested & Verified</span>
        </div>
        <div className="trust-item">
          <Truck size={14} color="var(--primary)" />
          <span>PH & International Delivery</span>
        </div>
      </div>

      {/* Main Nav */}
      <nav style={{
        background: '#fff',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        boxShadow: scrolled ? 'var(--shadow-sm)' : 'none',
        transition: 'all 0.2s',
      }}>
        <div className="container" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 60}}>
          {/* Logo */}
          <Link to="/" style={{display: 'flex', alignItems: 'center', gap: 8}}>
            <div style={{
              width: 32, height: 32, background: 'var(--gold-gradient)', borderRadius: 7,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <FlaskConical size={17} color="#fff" />
            </div>
            <span className="outfit" style={{fontSize: 17, fontWeight: 800, color: 'var(--text)', letterSpacing: '-0.02em'}}>
              Peptides<span style={{color: 'var(--primary)', fontStyle: 'italic'}}>&You</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <div style={{display: 'flex', alignItems: 'center', gap: 28}} className="desktop-nav">
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}
                style={{
                  fontSize: 12, fontWeight: 700, letterSpacing: '0.06em',
                  color: link.highlight ? 'var(--primary)' : (location.pathname === link.path ? 'var(--primary)' : 'var(--text-secondary)'),
                  transition: 'color 0.2s',
                }}>
                {link.name}
              </Link>
            ))}
          </div>

          {/* Right: Search + Icons */}
          <div style={{display: 'flex', alignItems: 'center', gap: 12}} className="desktop-nav">
            <div style={{position: 'relative'}}>
              <input type="text" placeholder="Search..." style={{
                width: 180, padding: '8px 12px 8px 32px', border: '1.5px solid var(--border)',
                borderRadius: 7, fontSize: 12, outline: 'none', fontFamily: 'inherit',
                background: '#FAFAFA', color: 'var(--text)',
              }} />
              <Search size={14} style={{position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-light)'}} />
            </div>
            <button style={{
              background: 'var(--gold-gradient)', color: '#fff', padding: '8px 16px',
              borderRadius: 7, fontWeight: 700, fontSize: 12,
            }}>Search</button>
            <User size={20} style={{color: 'var(--text-secondary)', cursor: 'pointer'}} />
            <div style={{position: 'relative', cursor: 'pointer'}}>
              <ShoppingCart size={20} style={{color: 'var(--text-secondary)'}} />
              <span style={{
                position: 'absolute', top: -5, right: -7,
                background: 'var(--primary)', color: '#fff',
                fontSize: 9, fontWeight: 800, width: 16, height: 16,
                borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>0</span>
            </div>
          </div>

          {/* Mobile Toggle */}
          <button onClick={() => setIsOpen(!isOpen)}
            className="mobile-toggle"
            style={{display: 'none', background: 'none', padding: 4}}>
            {isOpen ? <X size={24} color="var(--text)" /> : <Menu size={24} color="var(--text)" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div style={{
            background: '#fff', borderTop: '1px solid var(--border)',
            padding: 20, display: 'flex', flexDirection: 'column', gap: 14,
          }}>
            {navLinks.map((link) => (
              <Link key={link.name} to={link.path}
                style={{fontSize: 14, fontWeight: 700, color: link.highlight ? 'var(--primary)' : 'var(--text)'}}
                onClick={() => setIsOpen(false)}>
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-toggle { display: block !important; }
          .announcement-bar span { margin: 0 8px; font-size: 10px; }
          .trust-bar { gap: 16px; padding: 8px 12px; }
          .trust-item { font-size: 10px; }
        }
      `}</style>
    </header>
  );
};

export default Navbar;
