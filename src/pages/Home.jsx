import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Scissors, Star, Clock, CheckCircle, ChevronLeft, ChevronRight, Award, Flame, UserCheck } from 'lucide-react';
import PageTransition from '../components/PageTransition';

function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      quote: "The attention to detail here is unparalleled. Every cut feels like a custom tailoring session. The atmosphere is premium and relaxing.",
      name: "Marcus Aurelius",
      title: "Loyal Customer",
      stars: 5,
    },
    {
      quote: "Best beard trim in town, hands down. The straight razor finish is extremely sharp, and the hot towel massage is rejuvenating.",
      name: "Arthur Pendragon",
      title: "Gentleman Patron",
      stars: 5,
    },
    {
      quote: "An absolute luxury experience. Booking was simple, and the barbers are true master craftsmen. I highly recommend the Gold Package.",
      name: "Leonidas Spartan",
      title: "Vip Client",
      stars: 5,
    },
  ];

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const servicesTeaser = [
    {
      title: "Signature Haircut",
      price: "$45",
      duration: "30 Min",
      desc: "Tailored precision cut completed with a warm lather neck shave and premium styling finish.",
    },
    {
      title: "Royal Beard Grooming",
      price: "$35",
      duration: "30 Min",
      desc: "Complete beard shaping with clipper trim, straight razor line definition, and essential conditioning oils.",
    },
    {
      title: "The Gold Package",
      price: "$75",
      duration: "60 Min",
      desc: "Our top-tier service combining the Signature Haircut, Beard Trim, Charcoal Mask, and hot towel massage.",
    },
  ];

  return (
    <PageTransition>
      {/* Hero Section */}
      <section
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          paddingTop: 'var(--header-height)',
          overflow: 'hidden',
          backgroundColor: '#121212',
        }}
      >
        {/* Background Image / Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to right, rgba(18, 18, 18, 0.95) 30%, rgba(18, 18, 18, 0.4)), url("/images/interior.png")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: 1,
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '650px' }}>
            <motion.span
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{
                display: 'inline-block',
                color: 'var(--accent-gold)',
                textTransform: 'uppercase',
                letterSpacing: '0.2em',
                fontSize: '0.9rem',
                fontWeight: 600,
                marginBottom: '16px',
              }}
            >
              ESTABLISHED IN 2026 • PREMIUM GROOMING
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 50 }}
              style={{
                lineHeight: '1.1',
                marginBottom: '24px',
                fontFamily: 'var(--font-heading)',
              }}
              className="hero-title"
            >
              Crafting Confidence, <br />
              <span className="text-gold">One Cut at a Time</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              style={{
                fontSize: '1.2rem',
                marginBottom: '36px',
                color: 'var(--text-secondary)',
                fontWeight: 300,
              }}
            >
              Step into Beverly Hills' finest barbershop. Enjoy master craftsmanship, relaxing treatments, and a premium atmosphere designed for the modern gentleman.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}
            >
              <Link to="/booking" className="btn btn-gold">
                Book Appointment
              </Link>
              <Link to="/services" className="btn btn-outline">
                View Menu
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            cursor: 'pointer',
          }}
          onClick={() => window.scrollTo({ top: window.innerHeight - 80, behavior: 'smooth' })}
        >
          <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: 'var(--text-secondary)', marginBottom: '8px' }}>
            Scroll Down
          </span>
          <div style={{ width: '1px', height: '40px', backgroundColor: 'var(--accent-gold)' }} />
        </motion.div>
      </section>

      {/* Services Teaser Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Our Specialties</span>
            <h2 className="section-title">Signature Services</h2>
          </div>

          <div className="grid-3">
            {servicesTeaser.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="card"
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '260px',
                }}
              >
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1.4rem' }}>{service.title}</h3>
                    <span className="text-gold" style={{ fontSize: '1.4rem', fontWeight: 'bold' }}>{service.price}</span>
                  </div>
                  <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>{service.desc}</p>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '16px' }}>
                  <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Clock size={14} /> {service.duration}
                  </span>
                  <Link to="/booking" style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--accent-gold)' }} className="text-gold">
                    Book Now →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link to="/services" className="btn btn-outline">
              Explore All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Why Choose Us</span>
            <h2 className="section-title">The Saloon Standards</h2>
          </div>

          <div className="grid-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ textAlign: 'center', padding: '20px' }}
            >
              <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '24px' }}>
                <Award size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Master Craftsmanship</h3>
              <p style={{ fontSize: '0.95rem' }}>
                Our barbers are rigorously trained, highly experienced, and passionate about the art of professional men's grooming.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
              style={{ textAlign: 'center', padding: '20px' }}
            >
              <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '24px' }}>
                <Flame size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Premium Products</h3>
              <p style={{ fontSize: '0.95rem' }}>
                We use exclusively top-tier organic oils, pomades, and treatments to protect and maintain your hair, skin, and beard.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              style={{ textAlign: 'center', padding: '20px' }}
            >
              <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '24px' }}>
                <UserCheck size={36} />
              </div>
              <h3 style={{ fontSize: '1.4rem', marginBottom: '16px' }}>Tailored Vibe</h3>
              <p style={{ fontSize: '0.95rem' }}>
                A luxury interior, customized music, complimentary premium beverages, and zero rush. It's more than a haircut — it's a ritual.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Teaser Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Visual Portfolio</span>
            <h2 className="section-title">In the Details</h2>
          </div>

          <div className="grid-3" style={{ gap: '20px' }}>
            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ overflow: 'hidden', borderRadius: '8px', height: '350px', cursor: 'pointer', border: '1px solid var(--border-color)', position: 'relative' }}
            >
              <img src="/images/haircut.png" alt="Trendy Cut" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <span className="text-gold" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Precision Haircuts</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ overflow: 'hidden', borderRadius: '8px', height: '350px', cursor: 'pointer', border: '1px solid var(--border-color)', position: 'relative' }}
            >
              <img src="/images/beard.png" alt="Beard Grooming" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <span className="text-gold" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Royal Beard Care</span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              style={{ overflow: 'hidden', borderRadius: '8px', height: '350px', cursor: 'pointer', border: '1px solid var(--border-color)', position: 'relative' }}
            >
              <img src="/images/interior.png" alt="Shop Interior" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px', background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)' }}>
                <span className="text-gold" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Luxury Atmosphere</span>
              </div>
            </motion.div>
          </div>

          <div className="text-center" style={{ marginTop: '50px' }}>
            <Link to="/gallery" className="btn btn-outline">
              View Full Gallery
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="section" style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border-color)', overflow: 'hidden' }}>
        <div className="container" style={{ position: 'relative' }}>
          <div className="section-header">
            <span className="section-subtitle">Reviews</span>
            <h2 className="section-title">What Our Guests Say</h2>
          </div>

          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center', position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '4px', marginBottom: '24px' }}>
              {[...Array(testimonials[activeTestimonial].stars)].map((_, i) => (
                <Star key={i} size={20} fill="var(--accent-gold)" color="var(--accent-gold)" />
              ))}
            </div>

            <motion.p
              key={activeTestimonial}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '1.6rem',
                fontStyle: 'italic',
                lineHeight: '1.6',
                color: 'var(--text-primary)',
                marginBottom: '30px',
              }}
            >
              "{testimonials[activeTestimonial].quote}"
            </motion.p>

            <h4 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '4px' }}>
              {testimonials[activeTestimonial].name}
            </h4>
            <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--text-muted)' }}>
              {testimonials[activeTestimonial].title}
            </span>

            {/* Testimonials Navigation */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
              <button
                onClick={handlePrevTestimonial}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={handleNextTestimonial}
                style={{
                  background: 'none',
                  border: '1px solid var(--border-color)',
                  color: 'var(--text-primary)',
                  width: '45px',
                  height: '45px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
                onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--accent-gold)'; e.currentTarget.style.color = 'var(--accent-gold)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border-color)'; e.currentTarget.style.color = 'var(--text-primary)'; }}
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="section" style={{ backgroundColor: 'var(--bg-darker)', position: 'relative', overflow: 'hidden' }}>
        {/* Glow effect background */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(201, 168, 76, 0.08) 0%, transparent 70%)',
            zIndex: 1,
            pointerEvents: 'none',
          }}
        />

        <div className="container" style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
          <div style={{ maxWidth: '600px', margin: '0 auto' }}>
            <Scissors className="text-gold" size={32} style={{ marginBottom: '24px', transform: 'rotate(-45deg)' }} />
            <h2 style={{ fontSize: '3rem', marginBottom: '20px' }}>Ready for a Fresh Look?</h2>
            <p style={{ marginBottom: '36px' }}>
              Experience the master difference. Select your preferred service, choose an available date, and book your slot in less than a minute. Walk-ins are subject to availability.
            </p>
            <Link to="/booking" className="btn btn-gold" style={{ padding: '16px 36px' }}>
              Book an Appointment Now
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Home;
