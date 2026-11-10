import { useState } from 'react';
import '../styles/pages.css';
import '../styles/inner-pages.css';
import '../styles/coe.css';
import { driveImageUrl } from '../utils/googleDrive';

interface BoardMember {
  name: string;
  role: string;
  image: string;
}

const boardMembers: BoardMember[] = [
  {
    name: 'Dr. N.V. Ramana Rao',
    role: 'Director, NIT Raipur & Board Director, NITRRFIE',
    image: '/uploads/2025/09/Dr.-N.-V.-Ramana-Rao-qaw8galtwhyued5rna0uepdzdiuzclg1jlqjkae4bg-1.jpg',
  },
  {
    name: 'Dr. Samir Bajpai',
    role: 'Head, Career Development Centre, NIT Raipur & Board Director, NITRRFIE',
    image: '/uploads/2025/09/Prof.Bajapi-q3alc1u2ne7k13wfl2yabxob4zhbom9eddc58r0lek-1.jpg',
  },
  {
    name: 'Dr. Anuj Kumar Shukla',
    role: 'Assistant Professor, Department of Mechanical Engineering, NIT Raipur & Faculty I/c. NITRRFIE',
    image: '/uploads/2025/09/Dr.-Anuj-Shukla-q3alcwuqwxe0o8ndjycz47uiqp8fqmojhmv62vqlp8-1.jpg',
  },
  {
    name: 'Mr. Sunil Agarwal (Ex IRTS)',
    role: 'Non-Executive Chairman, Sarthak Metals Limited, Bhilai, Chhattisgarh',
    image: '/uploads/2025/09/WhatsApp-Image-2025-09-19-at-12.21.18.jpeg',
  },
  {
    name: 'Mr. Maharshi Vaishnav',
    role: 'Chief Executive Officer, Motilal Oswal Foundation',
    image: '/uploads/2025/09/WhatsApp-Image-2025-09-19-at-22.09.20.jpeg',
  },
  {
    name: 'Mr. Abinash Mishra (IAS)',
    role: 'Collector & District Magistrate, District Dhamtari, Chhattisgarh',
    image: '/uploads/2025/09/2025040717-1-scaled.jpeg',
  },
  {
    name: 'Dr. Om Prakash Vyas',
    role: 'Director, IIIT Naya Raipur',
    image: '/uploads/2025/09/Vyas_2.png',
  },
  {
    name: 'Dr. C. Krishna Mohan',
    role: 'Professor, Department of Computer Science and Engineering, IIT Hyderabad',
    image: '/uploads/2025/09/Prof-CKM.webp',
  },
  {
    name: 'Mr. Atul Dwivedi',
    role: 'Alumnus – 1998, Mining Engineering GEC-NIT Raipur & Managing Director, Technoblast Mining Corporation Group',
    image: '/uploads/2025/09/atul.png',
  },
  {
    name: 'Mr. Pawan Kataria',
    role: 'Assistant Registrar, CDC and P&D, NIT Raipur & Officer I/c. NITRRFIE',
    image: '/uploads/2025/09/Pawan-kataria-q3alf2vco6ctfvi1we30d65s1ojwhia9gd0gwuixcs-1.jpg',
  },
];

const partners = [
  {
    name: 'Motilal Oswal Foundation',
    logo: '/uploads/macieet/motilal-oswal.png',
    accentColor: '#004b87',
    desc: 'Providing financial endowment and strategic industry advisory to support high-growth research and infrastructure.',
  },
  {
    name: 'Government of Chhattisgarh',
    logo: '/uploads/macieet/cg-govt.png',
    accentColor: '#ea580c',
    desc: 'Enabling state level policy support, local ecosystem integration, and skilling outreach for regional talent.',
  },
  {
    name: 'NIT Raipur',
    logo: '/uploads/macieet/nit-raipur.png',
    accentColor: '#1e3a8a',
    desc: 'Hosting the incubator and labs inside the campus, offering deep technical expertise and academic research access.',
  },
];

const proposedDesignImages = [
  { src: '/uploads/macieet/design/1.webp', title: 'Proposed Facility Design 1' },
  { src: '/uploads/macieet/design/2.webp', title: 'Proposed Facility Design 2' },
  { src: '/uploads/macieet/design/3.webp', title: 'Proposed Facility Design 3' },
  { src: '/uploads/macieet/design/4.webp', title: 'Proposed Facility Design 4' },
  { src: '/uploads/macieet/design/5.webp', title: 'Proposed Facility Design 5' },
  { src: '/uploads/macieet/design/6.webp', title: 'Proposed Facility Design 6' },
];

const labs = [
  { id: '01', tag: 'Startup Incubation', title: 'Incubation Center', desc: 'Pre-incubation and incubation workspace facilities for startups.' },
  { id: '02', tag: 'CleanTech & Energy', title: 'Cleantech & Sustainability Lab', desc: 'Focus on green energy, waste reduction, and eco-friendly technologies.' },
  { id: '03', tag: 'Rapid Prototyping', title: '3D Printing & Additive Manufacturing Lab', desc: 'Advanced printing equipment for rapid prototyping and industrial design.' },
  { id: '04', tag: 'Robotics & Automation', title: 'Robotics & Automation Lab', desc: 'Skilling and programming resources for industrial automation systems.' },
  { id: '05', tag: 'IoT & Immersive Tech', title: 'AR-VR & IoT Lab', desc: 'Smart systems, sensors, and augmented/virtual reality development engines.' },
  { id: '06', tag: 'AI & DeepTech', title: 'AI & ML Labs', desc: 'High-performance computing for artificial intelligence and machine learning models.' },
  { id: '07', tag: 'Data & High Compute', title: 'Data Analytics & Computing Equipment Lab', desc: 'Analytics infrastructure for big data processing and business intelligence.' },
  { id: '08', tag: 'Cybersecurity & Web3', title: 'Blockchain & Cybersecurity Lab', desc: 'Encrypted storage development and system vulnerability testing suites.' },
];

const galleryImages = [
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.28.jpeg', title: 'MACIEET Facility View 1' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.27.jpeg', title: 'MACIEET Facility View 2' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.27-1.jpeg', title: 'Inauguration & Lab Setup' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.26.jpeg', title: 'Lab Launch Event' },
];

// Clean Icons
const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Macieet() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);
  const [bannerLoaded, setBannerLoaded] = useState(false);

  return (
    <main>
      {/* ────────────────────────────────────────────────────────
          1. LANDING BANNER (2744x1080 Space)
          ──────────────────────────────────────────────────────── */}
      <section className="macieet-hero" aria-label="MACIEET Hero Banner">
        {/* Banner image: When banner.webp is uploaded to /uploads/macieet/banner.webp, it loads automatically */}
        <img
          src="/uploads/macieet/banner.webp"
          alt="Smt. Mithilesh Agrawal Centre of Excellence for Innovation &amp; Entrepreneurship in Engineering &amp; Technology (MACIEET)"
          className="macieet-hero__img"
          width="2744"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
          onLoad={() => setBannerLoaded(true)}
          onError={() => setBannerLoaded(false)}
          style={{ display: bannerLoaded ? 'block' : 'none' }}
        />

        {/* 2744x1080 Placeholder container active while banner graphic is prepared */}
        {!bannerLoaded && (
          <div className="macieet-hero__placeholder">
            <img
              src="/uploads/macieet/macieet-logo.jpg"
              alt="MACIEET Emblem"
              className="macieet-hero__placeholder-logo"
            />
            <span className="macieet-hero__placeholder-badge">2744 &times; 1080 Banner Space</span>
            <h1 className="macieet-hero__placeholder-title">
              Smt. Mithilesh Agrawal Centre of Excellence for Innovation &amp; Entrepreneurship in Engineering &amp; Technology
            </h1>
          </div>
        )}

        <h1 className="visually-hidden">
          Smt. Mithilesh Agrawal Centre of Excellence for Innovation &amp; Entrepreneurship in Engineering &amp; Technology (MACIEET), NIT Raipur
        </h1>
      </section>

      {/* ────────────────────────────────────────────────────────
          2. ABOUT MACIEET
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Overview</span>
            <h2 className="section-title--lg">About MACIEET</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-about-grid">
            <div className="macieet-about__body">
              <p className="macieet-about__lead">
                Smt. Mithilesh Agrawal Centre of Excellence for Innovation &amp; Entrepreneurship in Engineering &amp; Technology (MACIEET) is being established jointly by <strong>Motilal Oswal Foundation</strong>, the <strong>Government of Chhattisgarh</strong>, and <strong>NIT Raipur</strong>.
              </p>
              <p>
                Operating at the NIT Raipur Campus through its Section-8 Company — <strong>NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE)</strong>, the Centre is dedicated to incubating transformative start-ups, fostering deep-tech research, and conducting world-class skilling programs in emerging technologies across the region.
              </p>
            </div>

            <div className="macieet-about__emblem-card">
              <img
                src="/uploads/macieet/macieet-logo.jpg"
                alt="MACIEET Official Seal"
                className="macieet-about__emblem-img"
              />
              <h3 className="macieet-about__emblem-title">MACIEET</h3>
              <p className="macieet-about__emblem-sub">
                Joint initiative of Motilal Oswal Foundation, Government of Chhattisgarh &amp; NIT Raipur
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          3. ESTABLISHED JOINTLY BY
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Tripartite Collaboration</span>
            <h2 className="section-title--lg">Established Jointly By</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-partners-grid">
            {partners.map((p, i) => (
              <div
                key={i}
                className="macieet-partner-card"
                style={{ '--partner-accent': p.accentColor } as React.CSSProperties}
              >
                <div className="macieet-partner-card__logo-frame">
                  <img
                    src={p.logo}
                    alt={`${p.name} logo`}
                    className="macieet-partner-card__logo"
                    loading="lazy"
                  />
                </div>
                <h3 className="macieet-partner-card__title">{p.name}</h3>
                <p className="macieet-partner-card__desc">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          4. PROPOSED DESIGN (Photos auto-scroll marquee)
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '48px', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Architectural Vision</span>
            <h2 className="section-title--lg">Proposed Design</h2>
            <hr className="section-divider section-divider--center" />
          </div>
        </div>

        {/* Continuous auto-scroll marquee slider */}
        <div className="macieet-design-slider">
          <div className="macieet-design-viewport">
            <div className="macieet-design-track">
              {/* Doubled array for seamless -50% infinite keyframe loop */}
              {[...proposedDesignImages, ...proposedDesignImages].map((img, i) => (
                <div
                  key={i}
                  className="macieet-design-item"
                  onClick={() => setActivePhoto(img.src)}
                  title="Click to view full preview"
                  aria-hidden={i >= proposedDesignImages.length}
                >
                  <img
                    src={img.src}
                    alt={i < proposedDesignImages.length ? img.title : ''}
                    width="1920"
                    height="1080"
                    loading="lazy"
                    decoding="async"
                  />
                  <span className="macieet-design-item__badge">Proposed Concept</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          5. GOVERNING BOARD
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Leadership &amp; Advisory</span>
            <h2 className="section-title--lg">Governing Board</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-board-grid">
            {boardMembers.map((m, i) => (
              <div key={i} className="macieet-board-card">
                <div className="macieet-board-card__avatar">
                  <img
                    src={driveImageUrl(m.image)}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp';
                    }}
                  />
                </div>
                <h3 className="macieet-board-card__name">{m.name}</h3>
                <p className="macieet-board-card__role">{m.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          6. PROPOSED FACILITIES & LABS
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Skilling &amp; Infrastructure</span>
            <h2 className="section-title--lg">Proposed Facilities &amp; Labs</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-labs-grid">
            {labs.map((l, i) => (
              <div key={i} className="macieet-lab-card">
                <span className="macieet-lab-card__num">{l.id}</span>
                <span className="macieet-lab-card__tag">{l.tag}</span>
                <h3 className="macieet-lab-card__title">{l.title}</h3>
                <p className="macieet-lab-card__desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          7. GALLERY (Static 4 photos, No auto-scroll)
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px', background: '#f8fafc' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Photo Highlights</span>
            <h2 className="section-title--lg">Gallery</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-gallery-grid">
            {galleryImages.map((img, i) => (
              <div
                key={i}
                className="macieet-gallery-item"
                onClick={() => setActivePhoto(driveImageUrl(img.src))}
                title="Click to view full preview"
              >
                <img src={driveImageUrl(img.src)} alt={img.title} loading="lazy" />
                <div className="macieet-gallery-item__overlay">
                  <span className="macieet-gallery-item__caption">{img.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ────────────────────────────────────────────────────────
          8. CONTACT US
          ──────────────────────────────────────────────────────── */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '80px', background: '#ffffff' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title--lg">Contact Us</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="macieet-contact-grid">
            <div className="macieet-contact-card">
              <div className="macieet-contact-card__icon">
                <MapPinIcon />
              </div>
              <div className="macieet-contact-card__content">
                <h3>Address</h3>
                <p>
                  MACIEET, NIT Raipur Campus, G.E. Road, Raipur, Chhattisgarh – 492010
                </p>
              </div>
            </div>

            <div className="macieet-contact-card">
              <div className="macieet-contact-card__icon">
                <GlobeIcon />
              </div>
              <div className="macieet-contact-card__content">
                <h3>Website</h3>
                <p>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    nitrrfie.in
                  </a>
                </p>
              </div>
            </div>

            <div className="macieet-contact-card">
              <div className="macieet-contact-card__icon">
                <MailIcon />
              </div>
              <div className="macieet-contact-card__content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:nitrrfie@nitrr.ac.in">
                    nitrrfie@nitrr.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="macieet-contact-actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdxsTL_dAOkdw2d-boXCrk3B513FtuM_kIJhSQJdv3HhOcfFA/viewform?usp=dialog"
              target="_blank"
              rel="noopener noreferrer"
              className="macieet-btn-primary"
            >
              Apply for Incubation &rarr;
            </a>
            <a
              href="mailto:nitrrfie@nitrr.ac.in"
              className="macieet-btn-secondary"
            >
              Partner with MACIEET
            </a>
          </div>
        </div>
      </section>

      {/* Lightbox Modal for Proposed Design and Gallery Photos */}
      {activePhoto && (
        <div className="gallery-lightbox" onClick={() => setActivePhoto(null)}>
          <button
            className="gallery-lightbox__close"
            onClick={() => setActivePhoto(null)}
            aria-label="Close Preview"
          >
            <CloseIcon />
          </button>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activePhoto}
              alt="MACIEET Full Preview"
              className="gallery-lightbox__img"
            />
          </div>
        </div>
      )}
    </main>
  );
}
