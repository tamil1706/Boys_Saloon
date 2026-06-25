import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Scissors } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <header
        className={`navbar-header ${scrolled ? 'navbar-scrolled' : ''}`}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: 'var(--header-height)',
          zIndex: 100,
          display: 'flex',
          alignItems: 'center',
          transition: 'var(--transition-smooth)',
          borderBottom: scrolled ? '1px solid var(--border-color)' : '1px solid transparent',
          backgroundColor: scrolled ? 'rgba(18, 18, 18, 0.85)' : 'transparent',
          backdropFilter: scrolled ? 'blur(12px)' : 'none',
        }}
      >
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <Scissors className="text-gold" size={24} style={{ transform: 'rotate(-45deg)' }} />
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                color: 'var(--text-primary)',
                letterSpacing: '0.05em',
              }}
            >
              BOYS <span className="text-gold">SALOON</span>
            </span>
          </Link>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }} className="desktop-nav">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    position: 'relative',
                    padding: '8px 0',
                    fontSize: '0.9rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  }}
                  className="nav-link-hover"
                >
                  {link.name}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      style={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        width: '100%',
                        height: '2px',
                        backgroundColor: 'var(--accent-gold)',
                      }}
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Book Now Button (Desktop) */}
          <div className="desktop-cta" style={{ display: 'flex', alignItems: 'center' }}>
            <Link to="/booking" className="btn btn-gold" style={{ padding: '10px 20px', fontSize: '0.85rem' }}>
              Book Now
            </Link>
          </div>

          {/* Hamburger Menu Toggle (Mobile) */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--text-primary)',
              cursor: 'pointer',
              display: 'none',
            }}
            className="mobile-menu-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
              position: 'fixed',
              top: 'var(--header-height)',
              left: 0,
              width: '100%',
              backgroundColor: 'rgba(26, 26, 26, 0.98)',
              borderBottom: '1px solid var(--border-color)',
              zIndex: 99,
              padding: '24px',
              display: 'flex',
              flexDirection: 'column',
              gap: '20px',
              backdropFilter: 'blur(10px)',
            }}
            className="mobile-nav-menu"
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  style={{
                    fontSize: '1.1rem',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    fontWeight: 500,
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
                    color: isActive ? 'var(--accent-gold)' : 'var(--text-primary)',
                  }}
                >
                  {link.name}
                </Link>
              );
            })}
            <Link
              to="/booking"
              className="btn btn-gold"
              style={{ width: '100%', marginTop: '10px' }}
            >
              Book Now
            </Link>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS details to show/hide elements */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav, .desktop-cta {
            display: none !important;
          }
          .mobile-menu-toggle {
            display: block !important;
          }
        }
        .nav-link-hover:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </>
  );
}

export default Navbar;
