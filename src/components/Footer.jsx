import React from 'react';
import { Link } from 'react-router-dom';
import { Scissors, Phone, MapPin, Clock, MessageSquare, Shield } from 'lucide-react';

const InstagramIcon = ({ size = 24, className, style }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    style={style}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      style={{
        backgroundColor: 'var(--bg-darker)',
        borderTop: '1px solid var(--border-color)',
        paddingTop: '80px',
        paddingBottom: '40px',
        color: 'var(--text-secondary)',
      }}
    >
      <div className="container">
        <div
          className="grid-4"
          style={{
            marginBottom: '60px',
          }}
        >
          {/* Logo & About */}
          <div>
            <Link to="/" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <Scissors className="text-gold" size={24} style={{ transform: 'rotate(-45deg)' }} />
              <span
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '1.4rem',
                  fontWeight: 'bold',
                  color: 'var(--text-primary)',
                  letterSpacing: '0.05em',
                }}
              >
                BOYS <span className="text-gold">SALOON</span>
              </span>
            </Link>
            <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
              Experience grooming at its finest. From classic cuts to custom styling and beard trims, our master barbers have you covered.
            </p>
            <div style={{ display: 'flex', gap: '15px' }}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                aria-label="Instagram"
              >
                <InstagramIcon size={18} />
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '38px',
                  height: '38px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--bg-secondary)',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'var(--accent-gold)';
                  e.currentTarget.style.color = 'var(--accent-gold)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'var(--border-color)';
                  e.currentTarget.style.color = 'var(--text-primary)';
                }}
                aria-label="WhatsApp"
              >
                <MessageSquare size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              Quick Links
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li>
                <Link to="/" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/services" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/about" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              Contact Us
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <li style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin size={18} className="text-gold" style={{ marginTop: '3px', flexShrink: 0 }} />
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ fontSize: '0.95rem', lineHeight: '1.4' }}
                  className="footer-link-hover"
                >
                  123 Luxury Lane, Suite 400<br />Beverly Hills, CA 90210
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <a href="tel:+13105550199" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  (310) 555-0199
                </a>
              </li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <MessageSquare size={18} className="text-gold" style={{ flexShrink: 0 }} />
                <a href="https://wa.me/13105550199" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.95rem' }} className="footer-link-hover">
                  Chat on WhatsApp
                </a>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3
              style={{
                fontSize: '1.1rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                marginBottom: '24px',
                color: 'var(--text-primary)',
              }}
            >
              Opening Hours
            </h3>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.95rem' }}>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '6px' }}>
                <span>Mon – Fri:</span>
                <span style={{ color: 'var(--text-primary)' }}>9:00 AM – 8:00 PM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255, 255, 255, 0.05)', paddingBottom: '6px' }}>
                <span>Saturday:</span>
                <span style={{ color: 'var(--text-primary)' }}>9:00 AM – 6:00 PM</span>
              </li>
              <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px' }}>
                <span>Sunday:</span>
                <span className="text-gold" style={{ fontWeight: 500 }}>Closed</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom */}
        <div
          style={{
            borderTop: '1px solid rgba(201, 168, 76, 0.1)',
            paddingTop: '30px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '15px',
            fontSize: '0.85rem',
          }}
        >
          <span>&copy; {currentYear} Boys Saloon. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
              <Shield size={14} className="text-gold" /> Premium Barbershop Quality
            </span>
          </div>
        </div>
      </div>
      <style>{`
        .footer-link-hover:hover {
          color: var(--accent-gold) !important;
        }
      `}</style>
    </footer>
  );
}

export default Footer;
