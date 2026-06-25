import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Send, Check } from 'lucide-react';
import PageTransition from '../components/PageTransition';

function Contact() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValues.name || !formValues.email || !formValues.message) return;
    
    // Simulate API call
    setTimeout(() => {
      setFormSubmitted(true);
      setFormValues({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Get in Touch</span>
            <h1 className="section-title">Contact Us</h1>
            <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
              Have questions, feedback, or custom booking requests? Reach out to us via phone, WhatsApp, or through the contact form below.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '32px', marginBottom: '60px' }}>
            {/* Phone Card */}
            <div className="card" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '20px' }}>
                <Phone size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Call Direct</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>For booking cancellations, group events, or walk-in inquiries.</p>
              <a href="tel:+13105550199" style={{ fontSize: '1.2rem', fontWeight: 'bold' }} className="text-gold">
                (310) 555-0199
              </a>
            </div>

            {/* WhatsApp Card */}
            <div className="card" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '20px' }}>
                <MessageSquare size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>WhatsApp Chat</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>Message us for quick booking inquiries, image submissions, or timings.</p>
              <a href="https://wa.me/13105550199" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1.2rem', fontWeight: 'bold' }} className="text-gold">
                Chat on WhatsApp
              </a>
            </div>

            {/* Address Card */}
            <div className="card" style={{ textAlign: 'center', padding: '40px 30px' }}>
              <div style={{ display: 'inline-flex', padding: '14px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '20px' }}>
                <MapPin size={24} />
              </div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Our Location</h3>
              <p style={{ fontSize: '0.9rem', marginBottom: '16px' }}>Located in Beverly Hills' luxury commercial center. Parking validated.</p>
              <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" style={{ fontSize: '1rem', fontWeight: 'bold' }} className="text-gold">
                123 Luxury Lane, Beverly Hills, CA
              </a>
            </div>
          </div>

          <div className="grid-2" style={{ alignItems: 'start', gap: '40px' }}>
            {/* Contact Form */}
            <div className="card" style={{ padding: '40px' }}>
              <h2 style={{ fontSize: '1.8rem', marginBottom: '24px', color: 'var(--accent-gold)' }}>Send Message</h2>
              {formSubmitted ? (
                <div
                  style={{
                    backgroundColor: 'rgba(201, 168, 76, 0.08)',
                    border: '1px solid var(--accent-gold)',
                    borderRadius: '8px',
                    padding: '30px',
                    textAlign: 'center',
                  }}
                >
                  <div style={{ display: 'inline-flex', padding: '12px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.15)', color: 'var(--accent-gold)', marginBottom: '16px' }}>
                    <Check size={28} />
                  </div>
                  <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>Thank You!</h3>
                  <p style={{ fontSize: '0.95rem' }}>Your query has been submitted. Our team will contact you shortly.</p>
                  <button onClick={() => setFormSubmitted(false)} className="btn btn-outline" style={{ marginTop: '20px', padding: '8px 20px', fontSize: '0.8rem' }}>
                    Send another query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-name">Full Name</label>
                    <input
                      id="contact-name"
                      type="text"
                      name="name"
                      value={formValues.name}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. John Smith"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-email">Email Address</label>
                    <input
                      id="contact-email"
                      type="email"
                      name="email"
                      value={formValues.email}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. john@example.com"
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-subject">Subject (Optional)</label>
                    <input
                      id="contact-subject"
                      type="text"
                      name="subject"
                      value={formValues.subject}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="e.g. Group booking request"
                    />
                  </div>

                  <div className="form-group">
                    <label className="form-label" htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      value={formValues.message}
                      onChange={handleChange}
                      className="form-control"
                      rows={5}
                      placeholder="Type your message details here..."
                      style={{ resize: 'vertical' }}
                      required
                    />
                  </div>

                  <button type="submit" className="btn btn-gold" style={{ width: '100%', gap: '10px' }}>
                    <Send size={16} /> Send Enquiry
                  </button>
                </form>
              )}
            </div>

            {/* Location Map Visual */}
            <div className="card" style={{ padding: '0', overflow: 'hidden' }}>
              <div style={{ padding: '30px' }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '12px', color: 'var(--accent-gold)' }}>Our Headquarters</h2>
                <p style={{ fontSize: '0.95rem', marginBottom: '20px' }}>
                  Conveniently situated on the corner of Luxury Lane & Golden Blvd. Valet parking is located at the front entrance of the building.
                </p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '0.9rem' }}>
                  <span style={{ display: 'flex', gap: '10px' }}><Clock size={16} className="text-gold" /> Mon - Fri: 9:00 AM - 8:00 PM</span>
                  <span style={{ display: 'flex', gap: '10px' }}><Clock size={16} className="text-gold" /> Saturday: 9:00 AM - 6:00 PM</span>
                  <span style={{ display: 'flex', gap: '10px' }}><Clock size={16} className="text-gold" /> Sunday: Closed</span>
                </div>
              </div>

              {/* Visual Map Simulator */}
              <div
                style={{
                  height: '350px',
                  backgroundColor: 'var(--bg-darker)',
                  borderTop: '1px solid var(--border-color)',
                  position: 'relative',
                }}
              >
                {/* Map Grid background */}
                <div
                  style={{
                    position: 'absolute',
                    inset: 0,
                    backgroundImage: 'radial-gradient(rgba(201, 168, 76, 0.1) 1.5px, transparent 1.5px)',
                    backgroundSize: '16px 16px',
                  }}
                />

                {/* Simulated Street Paths */}
                <div style={{ position: 'absolute', top: '40%', left: 0, width: '100%', height: '40px', backgroundColor: 'rgba(255,255,255,0.02)', borderTop: '1px dashed rgba(201,168,76,0.1)', borderBottom: '1px dashed rgba(201,168,76,0.1)' }} />
                <div style={{ position: 'absolute', top: 0, left: '60%', width: '50px', height: '100%', backgroundColor: 'rgba(255,255,255,0.02)', borderLeft: '1px dashed rgba(201,168,76,0.1)', borderRight: '1px dashed rgba(201,168,76,0.1)' }} />

                {/* Map Pin */}
                <div
                  style={{
                    position: 'absolute',
                    top: '40%',
                    left: '60%',
                    transform: 'translate(-50%, -50%)',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}
                >
                  <div
                    style={{
                      padding: '6px 12px',
                      backgroundColor: 'var(--bg-secondary)',
                      border: '1px solid var(--accent-gold)',
                      borderRadius: '4px',
                      fontSize: '0.75rem',
                      fontWeight: 'bold',
                      color: 'var(--accent-gold)',
                      boxShadow: '0 4px 10px rgba(0,0,0,0.5)',
                      whiteSpace: 'nowrap',
                      marginBottom: '6px',
                    }}
                  >
                    Boys Saloon HQ
                  </div>
                  <MapPin size={32} fill="var(--accent-gold)" color="#fff" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Contact;
