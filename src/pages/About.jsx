import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Scissors, Star, Trophy, Users } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const team = [
  {
    name: 'Alex Vance',
    role: 'Founder & Master Barber',
    specialty: 'Fades, Razor Shading, Styling',
    exp: '12+ Years Experience',
    bio: 'Alex founded Boys Saloon in 2026 with a mission to bring classic Italian-inspired barber rituals back to Beverly Hills.',
    img: '/images/haircut.png'
  },
  {
    name: 'Leo Sterling',
    role: 'Senior Grooming Craftsman',
    specialty: 'Traditional Hot Shaves, Beard Design',
    exp: '8 Years Experience',
    bio: 'Leo is our razor specialist. His meticulous attention to skin prep and hot towel rituals has earned him a devoted following.',
    img: '/images/beard.png'
  },
  {
    name: 'Marcus Dane',
    role: 'Expert Hair Stylist',
    specialty: 'Scissors Cut, Long Hair, Coloring',
    exp: '6 Years Experience',
    bio: 'Marcus brings a contemporary edge to the team, specializing in textured scissor cuts and custom styling techniques.',
    img: '/images/interior.png'
  }
];

function About() {
  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          
          {/* Main Intro */}
          <div className="grid-2" style={{ alignItems: 'center', marginBottom: '80px' }}>
            <div>
              <span className="section-subtitle">Our Legacy</span>
              <h1 style={{ fontSize: '3rem', marginBottom: '24px', fontFamily: 'var(--font-heading)' }}>
                Bespoke Grooming for the Modern Gentleman
              </h1>
              <p style={{ marginBottom: '20px' }}>
                Boys Saloon was built on a simple foundation: grooming is an art form. We believe that stepping into a barber shop shouldn't be a chore, but an indulgent ritual of self-care.
              </p>
              <p style={{ marginBottom: '20px' }}>
                Every tool, product, chair, and light in our lounge is carefully curated to maximize your relaxation and deliver styling precision. Our master craftsmen combine traditional barber legacy with modern trends to create look profiles that define.
              </p>
              <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
                <div>
                  <h3 className="text-gold" style={{ fontSize: '2rem', fontWeight: 'bold' }}>100%</h3>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Satisfaction</span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
                <div>
                  <h3 className="text-gold" style={{ fontSize: '2rem', fontWeight: 'bold' }}>20k+</h3>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Cuts Crafted</span>
                </div>
                <div style={{ width: '1px', backgroundColor: 'var(--border-color)' }} />
                <div>
                  <h3 className="text-gold" style={{ fontSize: '2rem', fontWeight: 'bold' }}>3</h3>
                  <span style={{ fontSize: '0.85rem', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Master Barbers</span>
                </div>
              </div>
            </div>

            {/* Accent Image Wrapper */}
            <div style={{ position: 'relative', borderRadius: '8px', overflow: 'hidden', height: '450px', border: '1px solid var(--border-color)' }}>
              <img
                src="/images/interior.png"
                alt="Saloon Interior view"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
              <div style={{ position: 'absolute', inset: 0, border: '10px solid rgba(201, 168, 76, 0.1)', pointerEvents: 'none' }} />
            </div>
          </div>

          {/* Philosophy Icons */}
          <div
            className="grid-3"
            style={{
              padding: '60px 0',
              borderTop: '1px solid var(--border-color)',
              borderBottom: '1px solid var(--border-color)',
              marginBottom: '80px',
            }}
          >
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="text-gold" style={{ marginTop: '4px' }}><Shield size={28} /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Cleanliness & Safety</h3>
                <p style={{ fontSize: '0.9rem' }}>Autoclave sanitation for all scissors and razors. Pristine work surfaces for every client.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="text-gold" style={{ marginTop: '4px' }}><Trophy size={28} /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Award-Winning Team</h3>
                <p style={{ fontSize: '0.9rem' }}>Voted Beverly Hills' top grooming specialist in 2026. Skilled in contemporary and vintage cuts.</p>
              </div>
            </div>
            <div style={{ display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div className="text-gold" style={{ marginTop: '4px' }}><Users size={28} /></div>
              <div>
                <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>Complimentary Hospitality</h3>
                <p style={{ fontSize: '0.9rem' }}>Enjoy single malt whiskeys, hot espresso, or filtered water during your consultation.</p>
              </div>
            </div>
          </div>

          {/* Team Showcase */}
          <div>
            <div className="section-header">
              <span className="section-subtitle">The Craftsmen</span>
              <h2 className="section-title">Meet Our Barbers</h2>
            </div>

            <div className="grid-3">
              {team.map((barber, index) => (
                <motion.div
                  key={barber.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.5 }}
                  className="card"
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px', padding: '0', overflow: 'hidden' }}
                >
                  <div style={{ height: '280px', position: 'relative' }}>
                    <img
                      src={barber.img}
                      alt={barber.name}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                    />
                    <div style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', padding: '20px 24px', background: 'linear-gradient(to top, var(--bg-secondary), transparent)' }}>
                      <span className="text-gold" style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600 }}>
                        {barber.exp}
                      </span>
                    </div>
                  </div>
                  <div style={{ padding: '0 24px 30px' }}>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '4px' }}>{barber.name}</h3>
                    <span style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '14px' }}>
                      {barber.role}
                    </span>
                    <p style={{ fontSize: '0.95rem', marginBottom: '14px', color: 'var(--text-secondary)' }}>
                      {barber.bio}
                    </p>
                    <span style={{ fontSize: '0.85rem', display: 'block' }}>
                      <strong>Expertise:</strong> <span className="text-gold">{barber.specialty}</span>
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </section>
    </PageTransition>
  );
}

export default About;
