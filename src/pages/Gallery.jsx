import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';

const galleryItems = [
  { id: 1, title: 'Textured Modern Crop', category: 'haircuts', img: '/images/haircut.png', desc: 'Textured fringe styling paired with skin fade sides.' },
  { id: 2, title: 'Royal Beard Outlining', category: 'beard', img: '/images/beard.png', desc: 'Precision straight razor outline on cheeks and neck.' },
  { id: 3, title: 'Luxury Station View', category: 'interior', img: '/images/interior.png', desc: 'Handcrafted leather styling chairs and bespoke gold mirrors.' },
  { id: 4, title: 'Mid Fade Pompadour', category: 'haircuts', img: '/images/haircut.png', desc: 'Classic pompadour re-imagined with modern mid fade.' },
  { id: 5, title: 'The Hot Razor Grooming', category: 'beard', img: '/images/beard.png', desc: 'Traditional close shave with hot lather treatments.' },
  { id: 6, title: 'Lounge & Reception', category: 'interior', img: '/images/interior.png', desc: 'Comfortable waiting area featuring gold accents and refreshments.' },
];

function Gallery() {
  const [filter, setFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredItems = filter === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === filter);

  const handleOpenLightbox = (index) => {
    setSelectedImage(index);
  };

  const handleCloseLightbox = () => {
    setSelectedImage(null);
  };

  const handleNextImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev + 1) % filteredItems.length);
  };

  const handlePrevImage = (e) => {
    e.stopPropagation();
    setSelectedImage((prev) => (prev - 1 + filteredItems.length) % filteredItems.length);
  };

  const filterTabs = [
    { id: 'all', name: 'All Photos' },
    { id: 'haircuts', name: 'Haircuts' },
    { id: 'beard', name: 'Beard & Shaves' },
    { id: 'interior', name: 'Shop Interior' },
  ];

  return (
    <PageTransition>
      <section className="section" style={{ minHeight: '100vh', paddingTop: 'calc(var(--header-height) + 40px)', backgroundColor: 'var(--bg-primary)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">Visual Portfolio</span>
            <h1 className="section-title">The Gallery</h1>
            <p style={{ maxWidth: '600px', margin: '15px auto 0' }}>
              Explore our master work. Browse cuts, beard trims, razor styling, and get a look inside our luxury salon setup in Beverly Hills.
            </p>
          </div>

          {/* Filter Navigation */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              flexWrap: 'wrap',
              gap: '12px',
              marginBottom: '40px',
            }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setFilter(tab.id);
                  setSelectedImage(null); // Reset lightbox mapping if filter changes
                }}
                style={{
                  background: 'none',
                  border: '1px solid',
                  borderColor: filter === tab.id ? 'var(--accent-gold)' : 'var(--border-color)',
                  borderRadius: '30px',
                  padding: '8px 24px',
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.9rem',
                  color: filter === tab.id ? 'var(--bg-primary)' : 'var(--text-primary)',
                  backgroundColor: filter === tab.id ? 'var(--accent-gold)' : 'transparent',
                  cursor: 'pointer',
                  transition: 'var(--transition-fast)',
                }}
              >
                {tab.name}
              </button>
            ))}
          </div>

          {/* Photo Grid */}
          <motion.div
            layout
            className="grid-3"
            style={{ gap: '24px' }}
          >
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  style={{
                    position: 'relative',
                    borderRadius: '8px',
                    overflow: 'hidden',
                    height: '300px',
                    border: '1px solid var(--border-color)',
                    cursor: 'pointer',
                  }}
                  onClick={() => handleOpenLightbox(index)}
                  className="gallery-item-card"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.5s ease',
                    }}
                    className="gallery-image"
                  />
                  {/* Hover Overlay */}
                  <div
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: '100%',
                      height: '100%',
                      backgroundColor: 'rgba(18, 18, 18, 0.85)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '24px',
                      opacity: 0,
                      transition: 'opacity 0.3s ease',
                      textAlign: 'center',
                    }}
                    className="gallery-overlay"
                  >
                    <ZoomIn className="text-gold" size={28} style={{ marginBottom: '12px' }} />
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '6px' }}>{item.title}</h3>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              backgroundColor: 'rgba(10, 10, 10, 0.95)',
              zIndex: 1000,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onClick={handleCloseLightbox}
          >
            {/* Close button */}
            <button
              onClick={handleCloseLightbox}
              style={{
                position: 'absolute',
                top: '24px',
                right: '24px',
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '8px',
                zIndex: 1010,
              }}
            >
              <X size={30} />
            </button>

            {/* Main Lightbox Container */}
            <div
              style={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                maxWidth: '90%',
                maxHeight: '75%',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Prev button */}
              <button
                onClick={handlePrevImage}
                className="lightbox-nav-btn lightbox-btn-left"
              >
                <ChevronLeft size={24} />
              </button>

              <motion.img
                key={selectedImage}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                src={filteredItems[selectedImage].img}
                alt={filteredItems[selectedImage].title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '75vh',
                  objectFit: 'contain',
                  borderRadius: '4px',
                  border: '1px solid var(--border-color)',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.8)',
                }}
              />

              {/* Next button */}
              <button
                onClick={handleNextImage}
                className="lightbox-nav-btn lightbox-btn-right"
              >
                <ChevronRight size={24} />
              </button>
            </div>

            {/* Captions */}
            <div
              style={{
                marginTop: '20px',
                textAlign: 'center',
                color: '#fff',
                padding: '0 20px',
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <h3 style={{ fontSize: '1.4rem', color: 'var(--accent-gold)', marginBottom: '8px' }}>
                {filteredItems[selectedImage].title}
              </h3>
              <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                {filteredItems[selectedImage].desc}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        .gallery-item-card:hover .gallery-overlay {
          opacity: 1 !important;
        }
        .gallery-item-card:hover .gallery-image {
          transform: scale(1.05);
        }
        .lightbox-nav-btn {
          position: absolute;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid rgba(255, 255, 255, 0.1);
          color: #fff;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          z-index: 1010;
          transition: var(--transition-fast);
        }
        .lightbox-nav-btn:hover {
          background: var(--accent-gold);
          color: var(--bg-primary);
          border-color: var(--accent-gold);
        }
        .lightbox-btn-left {
          left: -60px;
        }
        .lightbox-btn-right {
          right: -60px;
        }
        @media (max-width: 768px) {
          .gallery-overlay {
            opacity: 1 !important;
            background: linear-gradient(to top, rgba(18,18,18,0.9), transparent) !important;
            justify-content: flex-end !important;
          }
          .gallery-overlay svg {
            display: none;
          }
          .lightbox-btn-left {
            left: 10px;
          }
          .lightbox-btn-right {
            right: 10px;
          }
        }
      `}</style>
    </PageTransition>
  );
}

export default Gallery;
