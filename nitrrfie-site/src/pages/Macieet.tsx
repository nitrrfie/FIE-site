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

const labs = [
  { id: '01', title: 'Incubation Center', desc: 'Pre-incubation and incubation workspace facilities for startups.' },
  { id: '02', title: 'Cleantech & Sustainability Lab', desc: 'Focus on green energy, waste reduction, and eco-friendly technologies.' },
  { id: '03', title: '3D Printing & Additive Manufacturing Lab', desc: 'Advanced printing equipment for rapid prototyping and industrial design.' },
  { id: '04', title: 'Robotics & Automation Lab', desc: 'Skilling and programming resources for industrial automation systems.' },
  { id: '05', title: 'AR-VR & IoT Lab', desc: 'Smart systems, sensors, and augmented/virtual reality development engines.' },
  { id: '06', title: 'AI & ML Labs', desc: 'High-performance computing for artificial intelligence and machine learning models.' },
  { id: '07', title: 'Data Analytics & Computing Equipment Lab', desc: 'Analytics infrastructure for big data processing and business intelligence.' },
  { id: '08', title: 'Blockchain & Cybersecurity Lab', desc: 'Encrypted storage development and system vulnerability testing suites.' },
];

const galleryImages = [
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.28.jpeg', title: 'MACIEET Facility View 1' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.27.jpeg', title: 'MACIEET Facility View 2' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.27-1.jpeg', title: 'Inauguration & Lab Setup' },
  { src: '/uploads/2025/09/WhatsApp-Image-2025-09-16-at-15.39.26.jpeg', title: 'Lab Launch Event' },
];

// Icons
const AwardIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="8" r="7" />
    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
  </svg>
);

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const BookOpenIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
  </svg>
);

const MapPinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);

const GlobeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function Macieet() {
  const [activePhoto, setActivePhoto] = useState<string | null>(null);

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/10865944_1520194588202891_6950284804550590165_o.jpg')})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">MACIEET</h1>
          <p className="page-hero__breadcrumb">
            <a href="/">Home</a> &rsaquo; Centre of Excellence
          </p>
        </div>
      </div>

      {/* About Section */}
      <section className="section" style={{ paddingBottom: '30px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Joint Venture</span>
            <h2 className="section-title--lg">About MACIEET</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="text-editor" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', color: 'var(--color-text-dark)', lineHeight: '1.8' }}>
            <p>
              Smt. Mithilesh Agrawal Centre of Excellence for Innovation &amp; Entrepreneurship in Engineering &amp; Technology (MACIEET) is being established jointly by <strong>Motilal Oswal Foundation</strong>, the <strong>Government of Chhattisgarh</strong>, and <strong>NIT Raipur</strong> at the NIT Raipur Campus through its Section-8 Company - NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE), to support start-ups and conduct skilling programs in emerging technologies.
            </p>
          </div>

          <div className="coe-partners">
            <div className="coe-partner-card">
              <div className="coe-partner-card__icon-box">
                <AwardIcon />
              </div>
              <h3 className="coe-partner-card__title">Motilal Oswal Foundation</h3>
              <p className="coe-partner-card__desc">
                Providing financial endowment and strategic industry advisory to support high-growth research and infrastructure.
              </p>
            </div>
            <div className="coe-partner-card">
              <div className="coe-partner-card__icon-box">
                <ShieldIcon />
              </div>
              <h3 className="coe-partner-card__title">Government of Chhattisgarh</h3>
              <p className="coe-partner-card__desc">
                Enabling state level policy support, local ecosystem integration, and skilling outreach for regional talent.
              </p>
            </div>
            <div className="coe-partner-card">
              <div className="coe-partner-card__icon-box">
                <BookOpenIcon />
              </div>
              <h3 className="coe-partner-card__title">NIT Raipur</h3>
              <p className="coe-partner-card__desc">
                Hosting the incubator and labs inside the campus, offering deep technical expertise and academic research access.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Governing Board */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Strategic Direction</span>
            <h2 className="section-title--lg">Governing Board</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="team-grid" style={{ gridTemplateColumns: 'repeat(3, 1fr)', marginTop: '40px' }}>
            {boardMembers.map((m, i) => (
              <div key={i} className="team-card">
                <div className="team-card__avatar">
                  <img
                    src={driveImageUrl(m.image)}
                    alt={m.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp';
                    }}
                  />
                </div>
                <div className="team-card__body">
                  <h3 className="team-card__name">{m.name}</h3>
                  <p className="team-card__role" style={{ color: 'var(--color-text)', textTransform: 'none', fontWeight: 600, fontSize: '0.85rem', letterSpacing: '0' }}>{m.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proposed Facilities */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Skilling & Infrastructure</span>
            <h2 className="section-title--lg">Proposed Facilities &amp; Labs</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="coe-lab-grid">
            {labs.map((l, i) => (
              <div key={i} className="coe-lab-card">
                <span className="coe-lab-card__num">{l.id}</span>
                <h3 className="coe-lab-card__title">{l.title}</h3>
                <p className="coe-lab-card__desc">{l.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Laboratory Previews / Gallery */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Event Highlights</span>
            <h2 className="section-title--lg">MACIEET Gallery</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="coe-gallery-grid">
            {galleryImages.map((img, i) => (
              <div key={i} className="coe-gallery-item" onClick={() => setActivePhoto(driveImageUrl(img.src))}>
                <img src={driveImageUrl(img.src)} alt={img.title} loading="lazy" />
                <div className="coe-gallery-item__overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title--lg">Contact Us</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="coe-contact-strip" style={{ marginTop: '40px' }}>
            <div className="coe-contact-item">
              <div className="coe-contact-item__icon">
                <MapPinIcon />
              </div>
              <div className="coe-contact-item__body">
                <h3>Address</h3>
                <p>
                  MACIEET, NIT Raipur Campus, Raipur, Chhattisgarh – 492010
                </p>
              </div>
            </div>

            <div className="coe-contact-item">
              <div className="coe-contact-item__icon">
                <GlobeIcon />
              </div>
              <div className="coe-contact-item__body">
                <h3>Website</h3>
                <p>
                  <a href="/" target="_blank" rel="noopener noreferrer">
                    nitrrfie.in
                  </a>
                </p>
              </div>
            </div>

            <div className="coe-contact-item">
              <div className="coe-contact-item__icon">
                <MailIcon />
              </div>
              <div className="coe-contact-item__body">
                <h3>Email</h3>
                <p>
                  <a href="mailto:nitrrfie@nitrr.ac.in">
                    nitrrfie@nitrr.ac.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activePhoto && (
        <div className="gallery-lightbox" onClick={() => setActivePhoto(null)}>
          <button className="gallery-lightbox__close" onClick={() => setActivePhoto(null)} aria-label="Close">
            <CloseIcon />
          </button>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            <img
              src={activePhoto}
              alt="MACIEET Gallery Preview"
              className="gallery-lightbox__img"
            />
          </div>
        </div>
      )}
    </main>
  );
}
