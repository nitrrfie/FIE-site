import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/components.css';
import { driveImageUrl } from '../utils/googleDrive';

interface Slide {
  bg: string;
  title?: string;
  subtitle?: string;
  cta?: { label: string; to: string; external?: boolean };
}

const slides: Slide[] = [
  {
    bg: '/choose-us-image-03.png',
    title: 'NIT Raipur Foundation for Innovation & Entrepreneurship',
    subtitle: 'A DST-NIDHI supported Technology Business Incubator nurturing next-generation startups from NIT Raipur campus.',
    cta: { label: 'Apply for Incubation', to: 'https://docs.google.com/forms/d/e/1FAIpQLSfSK5YM3qAJscTdMboNMh9FpP5F5bl3ikTcDjc4BAh9kb13Wg/viewform', external: true },
  },
  {
    bg: '/uploads/01-new.jpeg',
    title: 'Empowering Innovators & Entrepreneurs',
    subtitle: 'From idea to market-ready startup — we provide the infrastructure, mentorship, and funding to make it happen.',
    cta: { label: 'Know More', to: '/about' },
  },
  {
    bg: '/uploads/02-min.jpg',
    title: 'Building the Future of Chhattisgarh',
    subtitle: 'Join a thriving ecosystem of startups, mentors, and industry partners at NIT Raipur\'s incubation centre.',
    cta: { label: 'Our Startups', to: '/ecosystem-partners' },
  },
  {
    bg: '/uploads/03-min.jpeg',
    title: 'World-Class Infrastructure & Support',
    subtitle: 'Office spaces, high-speed networks, computing resources, and access to state-of-the-art institute labs.',
    cta: { label: 'Learn More', to: '/about/policy-procedures' },
  },
  {
    bg: '/uploads/01-min.jpg',
    title: 'Cleantech · ICT · Multidisciplinary Innovation',
    subtitle: 'Focused on technology-driven startups in cleantech, information & communication technology, and more.',
    cta: { label: 'Contact Us', to: '/contact' },
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5500);
    return () => clearInterval(timer);
  }, []);

  const goTo = (idx: number) => {
    if (idx === current) return;
    setTransitioning(true);
    setTimeout(() => setTransitioning(false), 300);
    setCurrent(idx);
  };

  const slide = slides[current];

  return (
    <section className="hero" aria-label="Hero banner">
      {slides.map((s, i) => (
        <div
          key={i}
          className={`hero__slide${i === current ? ' hero__slide--active' : ''}`}
          style={{ backgroundImage: `url(${driveImageUrl(s.bg)})` }}
          aria-hidden={i !== current}
        />
      ))}

      {/* Overlay */}
      <div className="hero__overlay" />

      {/* Content */}
      <div className={`hero__content${transitioning ? ' hero__content--fade' : ''}`}>
        <div className="hero__badge">NIDHI TBI — Supported by DST, Govt. of India</div>
        {slide.title && <h1 className="hero__title">{slide.title}</h1>}
        {slide.subtitle && <p className="hero__subtitle">{slide.subtitle}</p>}
        {slide.cta && (
          <div className="hero__actions">
            {slide.cta.external ? (
              <a
                href={slide.cta.to}
                target="_blank"
                rel="noopener noreferrer"
                className="btn hero__btn hero__btn--primary"
              >
                {slide.cta.label}
              </a>
            ) : (
              <Link to={slide.cta.to} className="btn hero__btn hero__btn--primary">
                {slide.cta.label}
              </Link>
            )}
            <Link to="/contact" className="btn hero__btn hero__btn--outline">
              Get in Touch
            </Link>
          </div>
        )}
      </div>

      {/* Dots */}
      <div className="hero__dots" role="tablist" aria-label="Slide controls">
        {slides.map((_, i) => (
          <button
            key={i}
            role="tab"
            aria-selected={i === current}
            aria-label={`Go to slide ${i + 1}`}
            className={`hero__dot${i === current ? ' hero__dot--active' : ''}`}
            onClick={() => goTo(i)}
          />
        ))}
      </div>

      {/* Arrows */}
      <button
        className="hero__arrow hero__arrow--prev"
        onClick={() => goTo((current - 1 + slides.length) % slides.length)}
        aria-label="Previous slide"
      >
        &#8249;
      </button>
      <button
        className="hero__arrow hero__arrow--next"
        onClick={() => goTo((current + 1) % slides.length)}
        aria-label="Next slide"
      >
        &#8250;
      </button>
    </section>
  );
}
