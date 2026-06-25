import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, CheckCircle } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const serviceCategories = [
  {
    id: 'haircuts',
    name: 'Haircuts & Styling',
    items: [
      { id: 'sig-cut', name: 'Signature Haircut', price: '$45', duration: '30 Min', desc: 'Precision clipper and scissors work, finished with hot lather neck shave and styling.' },
      { id: 'buzz-cut', name: 'Elite Buzz Cut', price: '$30', duration: '20 Min', desc: 'Single-guard clean cut all over, including edging, hot lather neck shave, and wash.' },
      { id: 'kid-cut', name: 'Young Gent Cut', price: '$35', duration: '30 Min', desc: 'Trendy styling for gentlemen under 12. Fun and comfortable experience.' },
      { id: 'hair-wash', name: 'Wash & Premium Style', price: '$25', duration: '20 Min', desc: 'Invigorating shampoo treatment, blow dry, and custom style using luxury pomade.' },
    ]
  },
  {
    id: 'beards',
    name: 'Shaves & Beard Care',
    items: [
      { id: 'beard-groom', name: 'Royal Beard Grooming', price: '$35', duration: '30 Min', desc: 'Detailed trim, custom edge outline with straight razor, hot towel, and conditioning oil.' },
      { id: 'classic-shave', name: 'Classic Hot Towel Shave', price: '$45', duration: '45 Min', desc: 'Traditional straight razor shave with essential pre-shave oil, thick lather, hot towels, and soothing balm.' },
      { id: 'trim-line', name: 'Beard Lineup Only', price: '$20', duration: '15 Min', desc: 'Quick razor lineup on the cheeks and neck area to keep your look sharp.' },
    ]
  },
  {
    id: 'combos',
    name: 'Grooming Packages',
    items: [
      { id: 'combo-hair-beard', name: 'The Classic Combo', price: '$70', duration: '60 Min', desc: 'Our standard Signature Haircut paired with the Royal Beard Grooming. Save $10.' },
      { id: 'gold-pack', name: 'The Gold Executive Treatment', price: '$95', duration: '75 Min', desc: 'Signature Haircut, Classic Hot Towel Shave, skin consultation, and charcoal mask facial.' },
      { id: 'royal-king', name: 'The Royal Ritual', price: '$130', duration: '90 Min', desc: 'The ultimate saloon ritual: Haircut, Hot Shave, Facial Scrub, Head massage, and complimentary top-shelf drink.' },
    ]
  },
  {
    id: 'treatments',
    name: 'Facial & Skin Care',
    items: [
      { id: 'charcoal-mask', name: 'Charcoal Mask Facial', price: '$25', duration: '20 Min', desc: 'Deep-pore cleansing mask to extract impurities, hydrate the skin, and reduce shine.' },
      { id: 'skin-exfoliate', name: 'Hot Towel Scrub', price: '$20', duration: '15 Min', desc: 'Gentle exfoliating face scrub with hot towels, essential oils, and light facial massage.' },
    ]
  }
];

function Services() {
  const [activeTab, setActiveTab] = useState('haircuts');
  const navigate = useNavigate();

  const handleBookService = (serviceName) => {
    // Navigate to booking page and pass the service name in state
    navigate('/booking', { state: { selectedService: serviceName } });
  };

  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Premium Menu</span>
            <h1 className="section-title">Services & Pricing</h1>
            <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
              We provide full-service grooming tailored specifically to your needs. Discover our range of haircuts, razor shaves, and skin treatments.
            </p>
          </div>

          {/* Navigation Tabs */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '50px',
              borderBottom: '1px solid var(--border-color)',
              paddingBottom: '20px',
            }}
          >
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveTab(category.id)}
                style={{
                  background: 'none',
                  border: 'none',
                  padding: '12px 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  fontWeight: activeTab === category.id ? 600 : 400,
                  color: activeTab === category.id ? 'var(--accent-gold)' : 'var(--text-secondary)',
                  cursor: 'pointer',
                  borderBottom: activeTab === category.id ? '2px solid var(--accent-gold)' : '2px solid transparent',
                  transition: 'var(--transition-fast)',
                }}
              >
                {category.name}
              </button>
            ))}
          </div>

          {/* Service Items Grid */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="grid-2"
          >
            {serviceCategories
              .find((cat) => cat.id === activeTab)
              .items.map((service) => (
                <div
                  key={service.id}
                  className="card"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'baseline',
                        marginBottom: '14px',
                      }}
                    >
                      <h3 style={{ fontSize: '1.4rem', fontFamily: 'var(--font-heading)' }}>
                        {service.name}
                      </h3>
                      <span className="text-gold" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>
                        {service.price}
                      </span>
                    </div>
                    <p style={{ fontSize: '0.95rem', marginBottom: '24px' }}>
                      {service.desc}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      borderTop: '1px solid rgba(255, 255, 255, 0.05)',
                      paddingTop: '16px',
                    }}
                  >
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
                      <Clock size={14} className="text-gold" /> {service.duration}
                    </span>
                    <button
                      onClick={() => handleBookService(service.name)}
                      className="btn btn-gold"
                      style={{
                        padding: '8px 18px',
                        fontSize: '0.8rem',
                        fontWeight: 600,
                      }}
                    >
                      Book This
                    </button>
                  </div>
                </div>
              ))}
          </motion.div>

          {/* Quick Notice Banner */}
          <div
            style={{
              marginTop: '80px',
              backgroundColor: 'var(--bg-secondary)',
              border: '1px dashed var(--accent-gold)',
              borderRadius: '8px',
              padding: '30px',
              textAlign: 'center',
            }}
          >
            <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }} className="text-gold">Need Custom Grooming?</h3>
            <p style={{ maxWidth: '600px', margin: '0 auto', fontSize: '0.95rem' }}>
              We accommodate specialized cuts, coloring, wedding party groups, and private events. Please visit our <Link to="/contact" className="text-gold" style={{ textDecoration: 'underline' }}>Contact Page</Link> or call us directly at <strong>(310) 555-0199</strong> to discuss customized requirements.
            </p>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Services;
