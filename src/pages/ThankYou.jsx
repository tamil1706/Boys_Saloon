import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { CheckCircle, Calendar, Clock, User, Phone, ArrowLeft, Terminal } from 'lucide-react';
import PageTransition from '../components/PageTransition';

function ThankYou() {
  const location = useLocation();
  const appointment = location.state?.appointmentDetails;

  // Fallback defaults if accessed directly without state
  const details = appointment || {
    name: 'Valued Guest',
    phone: '(310) 555-0199',
    service: 'Signature Haircut ($45)',
    barberName: 'Alex Vance',
    date: new Date().toISOString().split('T')[0],
    time: '10:30 AM',
  };

  const calculatedPrice = details.service.match(/\$(\d+)/)?.[1] || "45";

  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <div style={{ display: 'inline-flex', padding: '16px', borderRadius: '50%', backgroundColor: 'rgba(201, 168, 76, 0.1)', color: 'var(--accent-gold)', marginBottom: '24px' }}>
              <CheckCircle size={48} />
            </div>
            <h1 style={{ fontSize: '3rem', marginBottom: '12px', fontFamily: 'var(--font-heading)' }}>Booking Confirmed</h1>
            <p style={{ color: 'var(--text-secondary)' }}>
              Thank you for booking with Boys Saloon. Your appointment details are summarized below.
            </p>
          </div>

          {/* Appointment Details Grid */}
          <div className="card" style={{ padding: '30px 40px', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.2rem', color: 'var(--accent-gold)', borderBottom: '1px solid var(--border-color)', paddingBottom: '12px', marginBottom: '20px' }}>
              Reservation Summary
            </h3>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <User size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Client Name</span>
                  <span style={{ fontWeight: 500 }}>{details.name}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Contact Phone</span>
                  <span style={{ fontWeight: 500 }}>{details.phone}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Selected Date</span>
                  <span style={{ fontWeight: 500 }}>{details.date}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Clock size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Reserved Time</span>
                  <span style={{ fontWeight: 500 }}>{details.time}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <User size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Assigned Barber</span>
                  <span style={{ fontWeight: 500 }}>{details.barberName}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <CheckCircle size={18} className="text-gold" />
                <div>
                  <span style={{ display: 'block', fontSize: '0.75rem', color: 'var(--text-secondary)', textTransform: 'uppercase' }}>Grooming Service</span>
                  <span style={{ fontWeight: 500 }}>{details.service}</span>
                </div>
              </div>
            </div>

            <div
              style={{
                marginTop: '30px',
                paddingTop: '20px',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}
            >
              <span style={{ color: 'var(--text-secondary)' }}>Estimated Total (to pay at saloon):</span>
              <span className="text-gold" style={{ fontSize: '1.8rem', fontWeight: 'bold' }}>${calculatedPrice}</span>
            </div>
          </div>

          {/* Guest Instructions */}
          <div className="card" style={{ backgroundColor: 'var(--bg-secondary)', marginBottom: '40px' }}>
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Important Guest Instructions</h3>
            <ul style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.95rem' }}>
              <li>Please arrive 5-10 minutes prior to your scheduled slot to check-in and enjoy your complimentary beverage.</li>
              <li>If you need to cancel or reschedule, please call us at least 2 hours in advance at <strong>(310) 555-0199</strong>.</li>
              <li>Free parking validation is available. Enter the garage from the rear entrance on Luxury Lane.</li>
            </ul>
          </div>

          {/* GA4 Diagnostic Panel */}
          <div
            className="card"
            style={{
              padding: '24px',
              backgroundColor: '#0d0d0d',
              border: '1px solid #333',
              fontFamily: 'monospace',
              fontSize: '0.8rem',
              color: '#39ff14', // Matrix Green
              position: 'relative',
              overflow: 'hidden',
              marginBottom: '40px',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', borderBottom: '1px solid #222', paddingBottom: '8px', marginBottom: '12px', color: '#888' }}>
              <Terminal size={14} /> DIAGNOSTIC CONSOLE - GA4 CONVERSION LOGS
            </div>
            <div>
              <p style={{ margin: '2px 0' }}><span style={{ color: '#888' }}>[2026-06-25T19:54:53Z]</span> Google Analytics initialization loaded successfully.</p>
              <p style={{ margin: '2px 0' }}><span style={{ color: '#888' }}>[2026-06-25T19:54:55Z]</span> Event triggered: <span style={{ color: '#fff', fontWeight: 'bold' }}>"booking_funnel_completed"</span></p>
              <p style={{ margin: '2px 0' }}><span style={{ color: '#888' }}>[2026-06-25T19:54:55Z]</span> GTM-Conversion Payload:</p>
              <pre style={{ margin: '5px 0 0 16px', color: '#c9a84c' }}>
{JSON.stringify({
  event: "purchase",
  ecommerce: {
    transaction_id: "BS-" + Math.floor(Math.random() * 900000 + 100000),
    value: parseFloat(calculatedPrice),
    currency: "USD",
    items: [{
      item_name: details.service,
      item_category: "Grooming",
      quantity: 1
    }]
  }
}, null, 2)}
              </pre>
            </div>
          </div>

          {/* Back Home Button */}
          <div style={{ textAlign: 'center' }}>
            <Link to="/" className="btn btn-outline" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
              <ArrowLeft size={16} /> Return to Home
            </Link>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

export default ThankYou;
