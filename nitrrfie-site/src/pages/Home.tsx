import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
// import NewsTicker from '../components/NewsTicker';
import EventsCalendar from '../components/EventsCalendar';
import '../styles/home.css';
import { driveImageUrl } from '../utils/googleDrive';

/* ── Inline SVG icon components ── */
const IconBuilding = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" /><path d="M9 3v18M15 3v18M3 9h18M3 15h18" />
  </svg>
);
const IconFlask = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 3h6v6l3.5 8A2 2 0 0 1 16.6 20H7.4a2 2 0 0 1-1.9-3L9 9V3z" /><path d="M6.4 15h11.2" />
  </svg>
);
const IconBriefcase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2M12 12v4M10 14h4" />
  </svg>
);
const IconBricks = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="4" width="20" height="4" rx="1" /><rect x="2" y="12" width="20" height="4" rx="1" /><rect x="2" y="20" width="20" height="0" rx="1" /><line x1="6" y1="8" x2="6" y2="12" /><line x1="18" y1="8" x2="18" y2="12" />
  </svg>
);
const IconCoins = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="8" cy="14" r="5" /><path d="M12.5 9.5a5 5 0 1 1 0 9" /><path d="M14 5a5 5 0 1 1 0 9" />
  </svg>
);
const IconUserCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><polyline points="16 11 18 13 22 9" />
  </svg>
);
const IconClipboard = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M9 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2h-3" /><rect x="9" y="2" width="6" height="4" rx="1" /><line x1="9" y1="12" x2="15" y2="12" /><line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);
const IconServer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="8" rx="2" /><rect x="2" y="14" width="20" height="8" rx="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
  </svg>
);
const IconSettings = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="3" /><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);
const IconUsers = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconBarChart = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /><line x1="2" y1="20" x2="22" y2="20" />
  </svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);
const IconHome = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" /><polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);
const IconArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
  </svg>
);

/* ── Policy icon map ── */
const policyIcons: Record<string, React.ReactElement> = {
  'pre-incubation': <IconBricks />,
  'resource-mobilization': <IconCoins />,
  'eligibility': <IconUserCheck />,
  'admissibility': <IconClipboard />,
  'infrastructure': <IconServer />,
  'services': <IconSettings />,
  'mentoring': <IconUsers />,
  'assessment': <IconBarChart />,
  'tenure': <IconClock />,
  'rent': <IconHome />,
  'exit': <IconArrowRight />,
};

const highlightPolicies = [
  { id: 'pre-incubation', title: 'Pre-Incubation Policy', desc: 'Guidelines for supporting student, faculty, and staff ideas from prototyping to launch.', image: '/uploads/2023/03/bricks-g4e190fcd6_1280.jpg' },
  { id: 'resource-mobilization', title: 'Resource Mobilization', desc: 'Financial framework and funding options through state, central, and private CSR channels.', image: '/uploads/2023/03/save-up-g4f7af71fc_1280.jpg' },
  { id: 'eligibility', title: 'Start-up Eligibility', desc: 'Who can apply — eligibility terms for students, alumni, faculty, staff, and external candidates.', image: '/uploads/2023/03/skills-g028342292_1280.jpg' },
  { id: 'admissibility', title: 'Admissibility Procedure', desc: 'The screening steps, business plan requirements, and pitch processes for selection.', image: '/uploads/2023/03/mark-g0efc5d5ff_1280.jpg' },
  { id: 'infrastructure', title: 'Infrastructure Support', desc: 'Office spaces, high-speed networks, computing, and access to institute labs.', image: '/uploads/2023/03/apple-g0dee40d46_1280.jpg' },
  { id: 'services', title: 'Services', desc: 'Legal aid, startup filings, IPR patent registration, seed funding, and business training.', image: '/uploads/2023/03/rawpixel-799380-unsplash.jpg' },
  { id: 'mentoring', title: 'Mentoring & Advisory', desc: 'Strategic consulting and technical guidance from empaneled industry experts and faculty.', image: '/uploads/2023/03/consulting-3055704_1280.jpg' },
  { id: 'assessment', title: 'Periodic Assessment', desc: 'Quarterly review parameters and progress metrics to maintain incubator space.', image: '/uploads/2023/03/business-g93e882de7_1280.jpg' },
  { id: 'tenure', title: 'Tenure in Incubation Centre', desc: 'Office lease durations (24–36 months) and rules for lease extensions.', image: '/uploads/2023/03/hourglass-620397_1280.jpg' },
  { id: 'rent', title: 'Rent Policy', desc: 'Subsidized office rates decided and revised periodically by the Board of Directors.', image: '/uploads/2023/03/house-5902665_1280.jpg' },
  { id: 'exit', title: 'Exit Policy', desc: 'Conditions under which startups graduate or leave the incubation centre.', image: '/uploads/2023/03/light-box-1773916_1280.jpg' },
];

const cultureItems = [
  { title: 'Social Activities', image: '/uploads/2023/01/10865944_1520194588202891_6950284804550590165_o.jpg' },
  { title: 'Run for Unity', image: '/uploads/2023/01/DSC_0162-scaled.jpg' },
  { title: 'Convocation', image: '/uploads/2023/01/25626997_1969118126643866_189985695804440119_o.jpg' },
  { title: 'Photo Sessions', image: '/uploads/2023/01/294169148_443373871135174_6604444109825772205_n.jpg' },
];

const learnMoreCards = [
  {
    icon: <IconBuilding />,
    title: 'About NITRRFIE',
    desc: 'National Institute of Technology Raipur (erstwhile Government Engineering College Raipur), situated in Raipur, Chhattisgarh — a government-backed institution with a thriving incubation ecosystem.',
    link: '/about',
    accent: 'var(--color-primary)',
  },
  {
    icon: <IconFlask />,
    title: 'Incubation Cell',
    desc: "NIT Raipur's incubation cell, also known as NITRRFIE, has been started to provide facilities to technology-driven startups, helping them grow from idea to market.",
    link: '/mentorship/faculty',
    accent: 'var(--color-accent)',
  },
  {
    icon: <IconBriefcase />,
    title: 'Recruitment',
    desc: 'Know about various openings in NIT Raipur Incubation Cell. We provide the best perks for our employees with various facilities and growth opportunities.',
    link: '/announcements',
    accent: '#2eb87f',
  },
];

const stats = [
  { value: '50+', label: 'Startups Incubated', color: 'var(--color-primary)' },
  { value: '450+', label: 'Applications Received', color: 'var(--color-accent)' },
  { value: '300+', label: 'Mentors & Advisors', color: '#2eb87f' },
  // { value: '₹2Cr+', label: 'Funding Facilitated',    color: '#9b59b6' },
];

export default function Home() {
  const [activeCultureIndex, setActiveCultureIndex] = useState(1);
  const [activePopup, setActivePopup] = useState<'hiring' | 'aicoe' | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setActivePopup('hiring');
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const handleCloseHiring = () => {
    setActivePopup('aicoe');
  };

  const handleCloseAicoe = () => {
    setActivePopup(null);
  };

  return (
    <main>
      {/* Hero */}
      <HeroSlider />

      {/* News Ticker */}
      {/* <NewsTicker /> */}

      {/* About Section */}
      <section className="section home-about">
        <div className="container">
          <div className="home-about__grid">
            {/* Image */}
            <div className="home-about__img-wrap">
              <img
                src={driveImageUrl("/uploads/intro.jpg")}
                alt="NITRRFIE Innovation Hub"
                className="home-about__img"
                loading="lazy"
              />
              <div className="home-about__badge">
                <span className="home-about__badge-num">Est.</span>
                <span className="home-about__badge-year">2021</span>
              </div>
              <div className="home-about__dot-pattern" />
            </div>

            {/* Text */}
            <div className="home-about__text">
              <span className="section-eyebrow">Welcome to NITRRFIE</span>
              <hr className="section-divider" />
              <h2 className="home-about__heading">
                Learn More<br />
                <em>About Us</em>
              </h2>
              <p className="home-about__desc">
                NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE) is a
                Not-for-profit Company governed by Section-8 of Companies Act 2013 and a
                Technology Business Incubator of NIT Raipur to support Startups under the National
                Initiative for Developing and Harnessing Innovations (NIDHI) – Technology Business
                Incubator (TBI) program of Department of Science &amp; Technology (DST).
              </p>
              <p className="home-about__desc">
                NITRRFIE, established in March 2021, aims to support technology-based startups with a
                focus on thrust areas including Cleantech, Information and Communication Technology
                (ICT), and Multidisciplinary Technology Integration.
              </p>
              <div className="home-about__actions">
                <Link to="/about" className="btn btn--primary">Know More</Link>
                <Link to="/about/policy-procedures" className="btn btn--text">
                  Policies &amp; Norms →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learn More Cards */}
      <section className="section section--bg home-cards">
        <div className="container">
          <div className="grid-3" style={{ gap: '24px' }}>
            {learnMoreCards.map((card, idx) => (
              <div
                key={idx}
                className="home-card"
                style={{ '--card-accent': card.accent } as React.CSSProperties}
              >
                <div className="home-card__icon-wrap">{card.icon}</div>
                <h3 className="home-card__title">{card.title}</h3>
                <p className="home-card__desc">{card.desc}</p>
                <Link to={card.link} className="home-card__link">
                  Learn More →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture & Highlights Accordion */}
      <section className="section culture-section">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Campus Life</span>
            <h2 className="section-title">NIT Raipur Culture &amp; Highlights</h2>
            <hr className="section-divider section-divider--center" />
            <p className="section-subtitle" style={{ maxWidth: '680px', margin: '0 auto' }}>
              To harness the ample creativity from students &amp; people in the institute and to fuel
              the growth, the foundation of National Institute of Technology Raipur organizes various activities.
            </p>
          </div>

          <div className="culture-accordion">
            {cultureItems.map((item, idx) => (
              <div
                key={idx}
                className={`culture-panel${idx === activeCultureIndex ? ' culture-panel--active' : ''}`}
                style={{ backgroundImage: `url(${driveImageUrl(item.image)})` }}
                onMouseEnter={() => setActiveCultureIndex(idx)}
                onClick={() => setActiveCultureIndex(idx)}
              >
                {idx === activeCultureIndex ? (
                  <h3 className="culture-panel__title">{item.title}</h3>
                ) : (
                  <h3 className="culture-panel__label">{item.title}</h3>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="home-stats">
        <div className="home-stats__inner">
          <div className="container">
            <div className="home-stats__header">
              <span className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>Our Growth</span>
              <h2 className="home-stats__title">Building the Future</h2>
              <p className="home-stats__sub">
                We're incubating the next generation of groundbreaking ideas. Are you ready to be part of it?
              </p>
            </div>
            <div className="home-stats__grid">
              {stats.map((s, i) => (
                <div key={i} className="home-stat">
                  <span className="home-stat__val" style={{ color: s.color }}>{s.value}</span>
                  <span className="home-stat__label">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Events Calendar and Highlights section */}
      <EventsCalendar />

      {/* Highlights / Policies grid */}
      <section className="section home-programmes">
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Policies &amp; Guidelines</span>
            <h2 className="section-title--lg">NITRRFIE Highlights</h2>
            <hr className="section-divider section-divider--center" />
            <p className="section-subtitle">
              A platform for start-ups by budding entrepreneurs and intrapreneurs to convert
              innovative ideas into commercially viable products and services.
            </p>
          </div>

          <div className="grid-3" style={{ gap: '22px' }}>
            {highlightPolicies.map((policy) => (
              <div key={policy.id} className="policy-card">
                <div className="policy-card__img-wrap">
                  <img src={driveImageUrl(policy.image)} alt={policy.title} className="policy-card__img" />
                  <div className="policy-card__icon-badge">
                    {policyIcons[policy.id]}
                  </div>
                </div>
                <div className="policy-card__body">
                  <h3 className="policy-card__title">{policy.title}</h3>
                  <p className="policy-card__desc">{policy.desc}</p>
                  <Link to={`/about/policy-procedures#${policy.id}`} className="policy-card__link">
                    Learn More →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="home-cta">
        <div className="home-cta__overlay" />
        <div className="container home-cta__content">
          <span className="home-cta__eyebrow">Start Your Journey</span>
          <h2 className="home-cta__title">Ready to Build Your Startup?</h2>
          <p className="home-cta__sub">
            Join NITRRFIE and get access to mentorship, infrastructure, and funding.
          </p>
          <div className="home-cta__actions">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfSK5YM3qAJscTdMboNMh9FpP5F5bl3ikTcDjc4BAh9kb13Wg/viewform?usp=sharing&ouid=111435562742645601337"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
            >
              Apply Now
            </a>
            <Link to="/contact" className="btn btn--outline">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="section home-partners">
        <div className="container">
          <div className="section-header section-header--center">
            <h3 className="home-partners__heading">Supported By</h3>
          </div>
          <div className="home-partners__logos">
            <img src={driveImageUrl('/uploads/NITRR-1.png')} alt="NIT Raipur" className="home-partners__logo--nitrr" />
            <img src={driveImageUrl('/uploads/DST-NIDHI_Original-Logo-H.png')} alt="DST NIDHI" />
            <img src={driveImageUrl('/uploads/Startup-India.png')} alt="Startup India" />
            <img src={driveImageUrl('/uploads/Startup-Chhattisgarh.png')} alt="Startup Chhattisgarh" />
          </div>
        </div>
      </section>

      {/* Hiring Pop-up Modal */}
      {activePopup === 'hiring' && (
        <div className="popup-overlay" onClick={handleCloseHiring}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleCloseHiring} aria-label="Close popup">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="popup-content">
              <span className="popup-eyebrow">We're Hiring!</span>
              <h2 className="popup-title" style={{ marginBottom: '16px' }}>We're Hiring!</h2>
              
              <p className="popup-desc" style={{ marginBottom: '28px' }}>
                Applications are now open for the position of Accountant cum Administrator at NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE). If you're a motivated professional with experience in accounting and administration, we'd love to hear from you.
              </p>

              <div className="popup-actions">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdLlQFvLldqrRen7kdhZ9C-F5il5BTwHzmU4FSGR8n1EUlN9g/viewform?usp=sharing&ouid=111435562742645601337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary popup-btn"
                  onClick={handleCloseHiring}
                >
                  Apply Now
                </a>
                <Link 
                  to="/announcements?tab=Notice&open=recruitment-accountant-admin-2026" 
                  className="btn btn--outline popup-btn popup-btn--details"
                  onClick={() => setActivePopup(null)}
                >
                  View Recruitment Notice
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* AICOE Pop-up Modal */}
      {activePopup === 'aicoe' && (
        <div className="popup-overlay" onClick={handleCloseAicoe}>
          <div className="popup-modal" onClick={(e) => e.stopPropagation()}>
            <button className="popup-close" onClick={handleCloseAicoe} aria-label="Close popup">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="popup-content">
              <span className="popup-eyebrow">Active Invitation</span>
              <h2 className="popup-title">AI Centre of Excellence (AI-CoE)</h2>
              <h3 className="popup-subtitle">Call for Problem Statements &amp; Challenges</h3>
              
              <p className="popup-desc">
                NITRRFIE invites Public Sector Undertakings (PSUs), private industries, MNCs, and industry associations to submit real-world challenges. Selected statements will be shared with startups and innovators for AI-driven solution development.
              </p>

              <div className="popup-domains">
                <div className="popup-domain-tag">Mining &amp; Minerals</div>
                <div className="popup-domain-tag">Steel &amp; Industries</div>
                <div className="popup-domain-tag">Healthcare &amp; Multidisciplinary</div>
              </div>

              <div className="popup-actions">
                <a
                  href="https://docs.google.com/forms/u/5/d/e/1FAIpQLSdaxMs4JW7UtHQyVhSeVcImBEf4q825R84Bl1slHxPNXRTzTA/viewform?usp=send_form"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn--primary popup-btn"
                >
                  Submit Challenge
                </a>
                <Link 
                  to="/aicoe#problem-statements" 
                  className="btn btn--outline popup-btn popup-btn--details" 
                  onClick={handleCloseAicoe}
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
