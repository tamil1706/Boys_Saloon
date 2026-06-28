import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Calendar, Clock, User, Phone, Check, MapPin, Scissors } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const servicesList = [
  'Signature Haircut ($45)',
  'Elite Buzz Cut ($30)',
  'Young Gent Cut ($35)',
  'Wash & Premium Style ($25)',
  'Royal Beard Grooming ($35)',
  'Classic Hot Towel Shave ($45)',
  'Beard Lineup Only ($20)',
  'The Classic Combo ($70)',
  'The Gold Executive Treatment ($95)',
  'The Royal Ritual ($130)',
  'Charcoal Mask Facial ($25)',
  'Hot Towel Scrub ($20)'
];

const barbers = [
  { id: 'alex', name: 'Alex Vance', role: 'Master Barber', desc: 'Fade Specialist', img: '/images/haircut.png' },
  { id: 'leo', name: 'Leo Sterling', role: 'Senior Barber', desc: 'Shave Craftsman', img: '/images/beard.png' },
  { id: 'marcus', name: 'Marcus Dane', role: 'Stylist & Color', desc: 'Long Hair & Trim', img: '/images/interior.png' },
];

const timeSlots = [
  '09:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '01:30 PM', '02:30 PM', '03:30 PM', '04:30 PM', '05:30 PM', '06:30 PM'
];

function Booking() {
  const location = useLocation();
  const navigate = useNavigate();

  const [bookingMode, setBookingMode] = useState('form'); // 'form' or 'calendly'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
    barber: 'alex',
    date: '',
    time: '',
  });

  const [error, setError] = useState('');

  // Handle pre-selected service from navigate state
  useEffect(() => {
    if (location.state && location.state.selectedService) {
      // Find matching service option
      const matchingService = servicesList.find(s => s.toLowerCase().includes(location.state.selectedService.toLowerCase()));
      if (matchingService) {
        setFormData(prev => ({ ...prev, service: matchingService }));
      }
    }
  }, [location]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleBarberSelect = (barberId) => {
    setFormData(prev => ({ ...prev, barber: barberId }));
  };

  const handleTimeSelect = (timeSlot) => {
    setFormData(prev => ({ ...prev, time: timeSlot }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');

    // Validations
    if (!formData.name.trim()) return setError('Please enter your full name.');
    if (!formData.phone.trim()) return setError('Please enter your contact phone number.');
    if (!formData.service) return setError('Please choose a grooming service.');
    if (!formData.date) return setError('Please select a date.');
    if (!formData.time) return setError('Please pick an available time slot.');

    const selectedBarberObj = barbers.find(b => b.id === formData.barber);

    // Mock GA4 conversion event tracking
    console.log("GA4 Event: purchase", {
      transaction_id: "BS-" + Math.floor(Math.random() * 900000 + 100000),
      value: parseFloat(formData.service.match(/\$(\d+)/)?.[1] || "0"),
      currency: "USD",
      items: [{
        item_name: formData.service,
        item_category: "Grooming",
        quantity: 1
      }]
    });

    // Navigate to thank you page
    navigate('/thank-you', {
      state: {
        appointmentDetails: {
          ...formData,
          barberName: selectedBarberObj?.name || 'Any Barber',
        }
      }
    });
  };

  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Secure Your Spot</span>
            <h1 className="section-title">Book Appointment</h1>
            <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
              Select your service, date, and barber to reserve your seat instantly. Zero booking fees.
            </p>
          </div>

          {/* Toggle Embed Option */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              marginBottom: '40px',
            }}
          >
            <div
              style={{
                backgroundColor: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '30px',
                padding: '4px',
                display: 'inline-flex',
              }}
            >
              <button
                onClick={() => setBookingMode('form')}
                style={{
                  background: bookingMode === 'form' ? 'var(--accent-gold)' : 'none',
                  border: 'none',
                  padding: '8px 24px',
                  borderRadius: '25px',
                  color: bookingMode === 'form' ? 'var(--bg-primary)' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                Saloon Form
              </button>
              <button
                onClick={() => setBookingMode('calendly')}
                style={{
                  background: bookingMode === 'calendly' ? 'var(--accent-gold)' : 'none',
                  border: 'none',
                  padding: '8px 24px',
                  borderRadius: '25px',
                  color: bookingMode === 'calendly' ? 'var(--bg-primary)' : 'var(--text-primary)',
                  fontWeight: 600,
                  fontSize: '0.85rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                Calendly Embed
              </button>
            </div>
          </div>

          <div className="grid-3" style={{ alignItems: 'start' }}>
            {/* Form Section / Embed Container */}
            <div style={{ gridColumn: 'span 2' }}>
              {bookingMode === 'form' ? (
                <form
                  onSubmit={handleSubmit}
                  className="card"
                  style={{
                    padding: '40px',
                  }}
                >
                  {error && (
                    <div
                      style={{
                        backgroundColor: 'rgba(239, 68, 68, 0.1)',
                        border: '1px solid rgba(239, 68, 68, 0.3)',
                        borderRadius: '4px',
                        padding: '12px 16px',
                        color: '#ef4444',
                        fontSize: '0.9rem',
                        marginBottom: '24px',
                      }}
                    >
                      {error}
                    </div>
                  )}

                  {/* Customer Information */}
                  <div className="grid-2">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name-input">Full Name</label>
                      <input
                        id="name-input"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g. John Doe"
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label" htmlFor="phone-input">Phone Number</label>
                      <input
                        id="phone-input"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="form-control"
                        placeholder="e.g. (310) 555-0199"
                      />
                    </div>
                  </div>

                  {/* Service Selection */}
                  <div className="form-group">
                    <label className="form-label" htmlFor="service-select">Grooming Service</label>
                    <select
                      id="service-select"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="form-control"
                    >
                      <option value="">-- Choose a service --</option>
                      {servicesList.map((serviceOption) => (
                        <option key={serviceOption} value={serviceOption}>
                          {serviceOption}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Barber Selection */}
                  <div className="form-group" style={{ marginTop: '30px' }}>
                    <label className="form-label">Select Barber</label>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '16px' }}>
                      {barbers.map((barber) => {
                        const isSelected = formData.barber === barber.id;
                        return (
                          <div
                            key={barber.id}
                            onClick={() => handleBarberSelect(barber.id)}
                            style={{
                              border: isSelected ? '1px solid var(--accent-gold)' : '1px solid rgba(255,255,255,0.05)',
                              borderRadius: '8px',
                              padding: '16px',
                              textAlign: 'center',
                              cursor: 'pointer',
                              backgroundColor: isSelected ? 'rgba(201, 168, 76, 0.05)' : 'var(--bg-secondary)',
                              transition: 'var(--transition-smooth)',
                            }}
                          >
                            <div style={{ width: '60px', height: '60px', borderRadius: '50%', overflow: 'hidden', margin: '0 auto 10px', position: 'relative' }}>
                              <img src={barber.img} alt={barber.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                              {isSelected && (
                                <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(201, 168, 76, 0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                  <Check size={18} color="#fff" />
                                </div>
                              )}
                            </div>
                            <h4 style={{ fontSize: '0.95rem', margin: '0 0 2px' }}>{barber.name}</h4>
                            <span style={{ fontSize: '0.75rem', color: 'var(--text-secondary)' }}>{barber.desc}</span>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Date and Time Selector */}
                  <div className="grid-2" style={{ marginTop: '30px' }}>
                    <div className="form-group">
                      <label className="form-label" htmlFor="date-input">Select Date</label>
                      <input
                        id="date-input"
                        type="date"
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        className="form-control"
                        min={new Date().toISOString().split('T')[0]}
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Available Time</label>
                      <div
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'repeat(3, 1fr)',
                          gap: '10px',
                          maxHeight: '130px',
                          overflowY: 'auto',
                          border: '1px solid var(--border-color)',
                          borderRadius: '4px',
                          padding: '10px',
                          backgroundColor: 'var(--bg-primary)',
                        }}
                      >
                        {timeSlots.map((slot) => {
                          const isSelected = formData.time === slot;
                          return (
                            <button
                              key={slot}
                              type="button"
                              onClick={() => handleTimeSelect(slot)}
                              style={{
                                padding: '6px',
                                border: '1px solid',
                                borderColor: isSelected ? 'var(--accent-gold)' : 'var(--border-color)',
                                borderRadius: '4px',
                                fontSize: '0.8rem',
                                color: isSelected ? 'var(--bg-primary)' : 'var(--text-primary)',
                                backgroundColor: isSelected ? 'var(--accent-gold)' : 'var(--bg-secondary)',
                                cursor: 'pointer',
                                transition: 'var(--transition-fast)',
                              }}
                            >
                              {slot}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-gold"
                    style={{ width: '100%', marginTop: '20px', padding: '16px' }}
                  >
                    Confirm Booking
                  </button>
                </form>
              ) : (
                <div
                  className="card"
                  style={{
                    minHeight: '600px',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: 0,
                    overflow: 'hidden',
                  }}
                >
                  {/* Calendly simulator banner */}
                  <div style={{ width: '100%', padding: '16px', borderBottom: '1px solid var(--border-color)', backgroundColor: 'var(--bg-primary)', textAlign: 'center' }}>
                    <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                      Embedded Widget Simulator • Renders standard inline Calendly container
                    </span>
                  </div>
                  <div style={{ flex: 1, width: '100%', height: '550px', background: '#f5f5f5', position: 'relative' }}>
                    {/* Simulated Calendly Widget */}
                    <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', color: '#333', fontFamily: 'sans-serif', padding: '30px' }}>
                      <div style={{ display: 'flex', borderBottom: '1px solid #ddd', paddingBottom: '20px', marginBottom: '20px' }}>
                        <div style={{ flex: 1 }}>
                          <h2 style={{ color: '#111', fontSize: '1.5rem', marginBottom: '8px' }}>Signature Cut & Styling</h2>
                          <p style={{ color: '#666', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}><Clock size={16} /> 30 Min</p>
                        </div>
                        <div style={{ textAlign: 'right' }}>
                          <Scissors color="var(--accent-gold)" size={32} />
                        </div>
                      </div>

                      <h3 style={{ color: '#111', fontSize: '1.1rem', marginBottom: '16px' }}>Select Date & Time</h3>
                      <div className="calendly-flex-container">
                        <div style={{ flex: 1.2, border: '1px solid #eee', borderRadius: '8px', padding: '16px', background: '#fff', textAlign: 'center' }}>
                          <p style={{ fontWeight: 'bold', marginBottom: '10px' }}>June 2026</p>
                          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '8px', fontSize: '0.85rem' }}>
                            {['S','M','T','W','T','F','S'].map((d, i) => <span key={i} style={{ color: '#999', fontWeight: 'bold' }}>{d}</span>)}
                            {[...Array(30)].map((_, i) => {
                              const day = i + 1;
                              const isToday = day === 25;
                              return (
                                <span
                                  key={i}
                                  style={{
                                    padding: '6px',
                                    borderRadius: '50%',
                                    background: isToday ? 'var(--accent-gold)' : 'none',
                                    color: isToday ? '#fff' : '#333',
                                    cursor: 'pointer',
                                    fontWeight: isToday ? 'bold' : 'normal'
                                  }}
                                >
                                  {day}
                                </span>
                              );
                            })}
                          </div>
                        </div>
                        <div style={{ flex: 0.8, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                          <button style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>09:00 AM</button>
                          <button style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>10:30 AM</button>
                          <button style={{ padding: '12px', border: '1px solid #ddd', borderRadius: '4px', background: '#fff', cursor: 'pointer', fontWeight: 'bold' }}>01:00 PM</button>
                          <button
                            onClick={() => {
                              // Simulate successful widget booking
                              navigate('/thank-you', {
                                state: {
                                  appointmentDetails: {
                                    name: 'Valued Guest',
                                    phone: '(310) 555-0199',
                                    service: 'Signature Cut & Styling ($45)',
                                    barberName: 'Alex Vance',
                                    date: new Date().toISOString().split('T')[0],
                                    time: '10:30 AM'
                                  }
                                }
                              });
                            }}
                            className="btn btn-gold"
                            style={{ padding: '12px', marginTop: 'auto', background: '#111', color: '#fff' }}
                          >
                            Confirm Widget Slot
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Sidebar Details (Hours & Map Pin) */}
            <div>
              {/* Working Hours Card */}
              <div className="card" style={{ marginBottom: '24px' }}>
                <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Clock size={18} /> Opening Hours
                </h3>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '12px', fontSize: '0.9rem' }}>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px' }}>
                    <span>Monday - Friday:</span>
                    <span>9:00 AM - 8:00 PM</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(255,255,255,0.05)', paddingBottom: '6px' }}>
                    <span>Saturday:</span>
                    <span>9:00 AM - 6:00 PM</span>
                  </li>
                  <li style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '6px' }}>
                    <span>Sunday:</span>
                    <span className="text-gold" style={{ fontWeight: 500 }}>Closed</span>
                  </li>
                </ul>
              </div>

              {/* Location Map Card */}
              <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                <div style={{ padding: '24px 24px 16px' }}>
                  <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', marginBottom: '8px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={18} /> Location Map
                  </h3>
                  <p style={{ fontSize: '0.85rem' }}>
                    123 Luxury Lane, Suite 400 Beverly Hills, CA 90210
                  </p>
                </div>
                {/* Visual Map Simulator */}
                <div
                  style={{
                    height: '200px',
                    backgroundColor: 'var(--bg-darker)',
                    borderTop: '1px solid var(--border-color)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  {/* Grid Lines mockup */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundImage: 'radial-gradient(rgba(201, 168, 76, 0.1) 1.5px, transparent 1.5px)',
                      backgroundSize: '16px 16px',
                    }}
                  />
                  {/* Map Pin */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '50%',
                      left: '50%',
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
                      Boys Saloon
                    </div>
                    <MapPin size={32} fill="var(--accent-gold)" color="#fff" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}

export default Booking;
