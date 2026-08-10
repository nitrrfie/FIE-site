import { Link } from 'react-router-dom';
import '../styles/pages.css';
import '../styles/inner-pages.css';
import '../styles/coe.css';

// --- Placeholders ---
// REPLACE THESE CONSTANTS WITH REAL IMAGE PATHS LATER (Commented out as they are currently unused)
// const placeholderImage = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="800" height="600"><rect width="100%" height="100%" fill="%23cbd5e1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="24px" fill="%23475569">Image Placeholder</text></svg>';
// const placeholderAvatar = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400"><rect width="100%" height="100%" fill="%23cbd5e1"/><text x="50%" y="50%" dominant-baseline="middle" text-anchor="middle" font-family="sans-serif" font-size="16px" fill="%23475569">Avatar</text></svg>';

// --- Icons ---
const IconTarget = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
  </svg>
);
const IconEye = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" /><circle cx="12" cy="12" r="3" />
  </svg>
);
const IconMining = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 3L3 21" /><path d="M15 3h6v6" /><path d="M11 13l-2 2" /><path d="M7 17l-2 2" />
  </svg>
);
const IconSteel = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 22v-8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8" /><path d="M14 2v10" /><path d="M10 2v10" />
  </svg>
);
const IconHealth = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
  </svg>
);
const IconResearch = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M9 3h6v6l3.5 8A2 2 0 0 1 16.6 20H7.4a2 2 0 0 1-1.9-3L9 9V3z" />
  </svg>
);
const IconTalent = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);
const IconStartup = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);
const IconAdoption = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconCheck = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
const IconServer = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" /><line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
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
// const CloseIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
//     <line x1="18" y1="6" x2="6" y2="18" />
//     <line x1="6" y1="6" x2="18" y2="18" />
//   </svg>
// );

// --- Data ---
const focusAreas = [
  { icon: <IconMining />, title: 'Mining & Minerals', desc: 'AI-powered solutions for mining automation, predictive maintenance, and resource optimization.' },
  { icon: <IconSteel />, title: 'Steel & Industries', desc: 'Industrial analytics, safety monitoring, and process optimization for manufacturing.' },
  { icon: <IconHealth />, title: 'Healthcare & Multidisciplinary', desc: 'AI-driven diagnostics, medical image analysis, and predictive healthcare systems.' },
];

const corePillars = [
  { icon: <IconResearch />, title: 'Research & Innovation', desc: 'Advancing applied AI research, industry-sponsored projects, IP generation, and tech commercialization.' },
  { icon: <IconTalent />, title: 'Talent & AI Skilling', desc: 'Comprehensive AI training programs, faculty development, certifications, and industry learning.' },
  { icon: <IconStartup />, title: 'Startup Incubation', desc: 'Supporting AI startups through mentorship, seed funding, investor connections, and infrastructure.' },
  { icon: <IconAdoption />, title: 'Use Case Adoption', desc: 'Developing practical AI solutions and pilot deployments for industries and government.' },
];

const keyInitiatives = [
  { title: 'AI Research Labs', desc: 'Advanced AI, Machine Learning, Deep Learning, Computer Vision, Generative AI, Blockchain, IoT, and Industry 4.0 laboratories.' },
  { title: 'Smart Mining & Industry 4.0', desc: 'AI-powered solutions for mining automation, predictive maintenance, safety monitoring, resource optimization, and industrial analytics.' },
  { title: 'Healthcare AI', desc: 'AI-driven healthcare diagnostics, medical image analysis, predictive healthcare systems, and multidisciplinary research applications.' },
  { title: 'Startup Incubation Program', desc: 'Structured incubation support for AI startups with access to mentors, funding opportunities, technical resources, and industry networks.' },
  { title: 'Hackathons & Grand Challenges', desc: 'Industry-focused innovation challenges aimed at solving real-world problems while fostering innovation among students, startups, and professionals.' },
  { title: 'AI Skilling Programs', desc: 'Specialized training programs, workshops, certification courses, faculty development programs, and industry readiness initiatives.' },
];

const infrastructure = [
  '10,000+ Sq. Ft. Innovation Facility',
  'GPU Computing Cluster',
  'High Performance Computing Infrastructure (HPC)',
  'AI Workstations',
  'Smart Classrooms',
  'Research Labs',
  'Testing & Validation Labs',
  'Startup Co-working Space',
  'IoT & Robotics Lab',
  'Prototyping Lab',
  'MLOps Deployment Environment',
  'Cloud Computing Platforms',
  'Data Analytics Infrastructure'
];

const partners = {
  academic: ['IIT Bhilai', 'IIT Delhi', 'IIM Raipur', 'AIIMS Raipur', 'ISB Hyderabad', 'IIM Bangalore', 'IIM Lucknow', 'CIPET Raipur'],
  industry: ['SAIL', 'NMDC', 'SECL', 'Coal India', 'NTPC', 'BALCO', 'CSPDCL', 'Jindal Steel & Power', 'NALCO', 'Adani Group'],
  government: ['IndiaAI Mission', 'Startup India', 'Startup Chhattisgarh', 'CHiPS', 'CSR Partners', 'Innovation & Entrepreneurship Networks']
};



const beneficiaries = ['Students', 'Researchers', 'Startups', 'MSMEs', 'Industry Professionals', 'Government Departments', 'Faculty Members', 'Entrepreneurs', 'Women Innovators', 'Rural Innovators'];


export default function Aicoe() {
  return (
    <main>
      {/* 1. Hero Banner (with solid color placeholder background) */}
      <div className="page-hero" style={{ backgroundColor: '#1e293b', minHeight: '420px', padding: '60px 0', height: 'auto' }}>
        <div className="page-hero__overlay" style={{ background: 'linear-gradient(45deg, rgba(15,23,42,0.9) 0%, rgba(30,58,138,0.7) 100%)' }} />
        <div className="page-hero__content">
          <img src="/uploads/AI-CoE-Logoo.webp" alt="AI-CoE Logo" style={{ width: '90%', maxWidth: '300px', height: 'auto', display: 'block', margin: '0 auto 1.5rem auto' }} />
          <h1 className="page-hero__title" style={{ marginBottom: '1rem', textAlign: 'center' }}>AI Centre of Excellence (AI-CoE)</h1>
          <p style={{ color: '#e2e8f0', fontSize: 'clamp(1rem, 4.5vw, 1.25rem)', marginTop: '1rem', maxWidth: '800px', textAlign: 'center', fontWeight: 500, margin: '1rem auto 0 auto' }}>
            Transforming Industries Through Artificial Intelligence
          </p>
          <p className="page-hero__breadcrumb" style={{ marginTop: '2rem', textAlign: 'center' }}>
            <Link to="/">Home</Link> &rsaquo; Centre of Excellence &rsaquo; AI-CoE
          </p>
        </div>
      </div>

      {/* 2. About AI-CoE */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Overview</span>
            <h2 className="section-title--lg">About AI-CoE</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="text-editor" style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', color: 'var(--color-text-dark)', lineHeight: '1.8' }}>
            <p>
              The Artificial Intelligence Centre of Excellence (AI-CoE) at NIT Raipur Foundation for Innovation & Entrepreneurship (NITRRFIE) is envisioned as a premier innovation hub dedicated to advancing AI-driven research, startup incubation, workforce development, and industry adoption. Supported by the IndiaAI Mission, Ministry of Electronics and Information Technology, NIT Raipur, Government of Chhattisgarh and aligned with the vision of Viksit Bharat, the Centre aims to accelerate digital transformation across key sectors of Chhattisgarh and India.
            </p>
            <p style={{ marginTop: '20px' }}>
              The AI Centre of Excellence serves as a bridge between academic research, industry challenges, government initiatives, and entrepreneurial innovation. By leveraging NIT Raipur’s academic expertise and strategic partnerships, the Centre develops scalable AI solutions that address real-world problems.
            </p>
            <div style={{ marginTop: '30px', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px' }}>
              {['AI Research & Innovation', 'Industry-Academia Collaboration', 'Startup Incubation', 'AI Skill Development', 'AI Product Development', 'Sector-Specific AI Deployments'].map((tag, i) => (
                <span key={i} style={{ padding: '8px 16px', background: 'var(--color-bg)', borderRadius: '20px', fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-primary)', border: '1px solid #e2e8f0' }}>
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 2.5. Call for Problem Statements / Challenges */}
      <section id="problem-statements" className="section" style={{ background: '#ffffff', paddingTop: '10px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{
            background: 'linear-gradient(135deg, #1e293b 0%, #0f172a 100%)',
            borderRadius: '16px',
            padding: '40px 30px',
            color: '#ffffff',
            boxShadow: '0 10px 30px rgba(15,23,42,0.15)',
            maxWidth: '100%',
            margin: '0 auto'
          }}>
            <div style={{ textAlign: 'center', marginBottom: '32px' }}>
              <span className="section-eyebrow" style={{ color: 'var(--color-primary)', fontWeight: 700 }}>Active Invitation</span>
              <h2 className="section-title--lg" style={{ color: '#ffffff', marginTop: '10px', marginBottom: '16px', fontSize: 'clamp(1.6rem, 5vw, 2.2rem)' }}>Call for Problem Statements &amp; Challenges</h2>
              <hr className="section-divider section-divider--center" style={{ borderColor: 'var(--color-primary)' }} />
              <p style={{ color: '#cbd5e1', maxWidth: '800px', margin: '20px auto 0', fontSize: '1rem', lineHeight: '1.7' }}>
                NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE) invites Problem Statements and Challenges from Public Sector Undertakings (PSUs), private industries, multinational corporations (MNCs), industry associations, and government bodies at state, national, and international levels.
              </p>
            </div>

            {/* Domains Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: '24px',
              marginBottom: '32px'
            }}>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 'bold' }}>01</div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px', fontWeight: 600 }}>Mining &amp; Minerals</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>Operational efficiency, safety improvements, resource optimization, and autonomous systems.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 'bold' }}>02</div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px', fontWeight: 600 }}>Steel &amp; Industries</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>Process optimization, predictive maintenance, quality assurance, and environmental compliance.</p>
              </div>
              <div style={{ background: 'rgba(255,255,255,0.05)', padding: '24px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <div style={{ color: 'var(--color-primary)', fontSize: '1.5rem', marginBottom: '12px', fontWeight: 'bold' }}>03</div>
                <h3 style={{ fontSize: '1.15rem', color: '#ffffff', marginBottom: '8px', fontWeight: 600 }}>Healthcare &amp; Multidisciplinary</h3>
                <p style={{ color: '#94a3b8', fontSize: '0.9rem', lineHeight: '1.6' }}>AI-enabled diagnostics, healthcare delivery, automation, and decision-support systems.</p>
              </div>
            </div>

            {/* Engagement Details */}
            <p style={{ color: '#e2e8f0', fontSize: '0.95rem', textAlign: 'center', lineHeight: '1.7', marginBottom: '30px' }}>
              Selected challenges will be shared with startups, researchers, and innovators for developing practical, scalable solutions through hackathons, proof-of-concept development, pilot deployments, and industry-academia collaborations.
            </p>

            {/* Indicative Tags */}
            <div style={{ textAlign: 'center', marginBottom: '36px' }}>
              <span style={{ fontSize: '0.85rem', color: '#94a3b8', textTransform: 'uppercase', letterSpacing: '1px', display: 'block', marginBottom: '12px', fontWeight: 600 }}>Indicative Challenge Areas</span>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px' }}>
                {['Predictive Maintenance', 'Process Optimization', 'Quality Assurance', 'Automation', 'Workplace Safety', 'Resource Efficiency', 'Environmental Compliance', 'Decision-Support Systems', 'Socio-Economic Impact'].map((tag, i) => (
                  <span key={i} style={{ padding: '6px 12px', background: 'rgba(255,255,255,0.08)', borderRadius: '4px', fontSize: '0.8rem', color: '#e2e8f0', border: '1px solid rgba(255,255,255,0.1)' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA Link Button */}
            <div style={{ textAlign: 'center' }}>
              <a
                href="https://docs.google.com/forms/u/5/d/e/1FAIpQLSdaxMs4JW7UtHQyVhSeVcImBEf4q825R84Bl1slHxPNXRTzTA/viewform?usp=send_form"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--primary"
                style={{
                  padding: '12px 30px',
                  fontSize: '0.95rem',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  boxShadow: '0 4px 14px rgba(255, 120, 46, 0.4)'
                }}
              >
                Submit Problem Statement / Challenge
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 3. Vision & Mission */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '30px', marginTop: '32px' }}>
            <div className="coe-partner-card" style={{ flex: '1 1 350px', maxWidth: '480px' }}>
              <div className="coe-partner-card__icon-box">
                <IconTarget />
              </div>
              <h3 className="coe-partner-card__title">Mission</h3>
              <p className="coe-partner-card__desc" style={{ fontSize: '1.05rem' }}>
                To create indigenous AI technologies, foster innovation, support startups, and develop industry-ready solutions that generate measurable socio-economic impact.
              </p>
            </div>
            <div className="coe-partner-card" style={{ flex: '1 1 350px', maxWidth: '480px' }}>
              <div className="coe-partner-card__icon-box">
                <IconEye />
              </div>
              <h3 className="coe-partner-card__title">Vision</h3>
              <p className="coe-partner-card__desc" style={{ fontSize: '1.05rem' }}>
                To establish a nationally recognized Centre of Excellence that accelerates digital transformation through cutting-edge AI research, indigenous technology development, startup incubation, workforce skilling, and impactful AI deployments aligned with the IndiaAI Mission.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Focus Areas */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Strategic Domains</span>
            <h2 className="section-title--lg">Focus Areas</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="coe-partners">
            {focusAreas.map((area, i) => (
              <div key={i} className="coe-partner-card" style={{ background: '#fff' }}>
                <div className="coe-partner-card__icon-box" style={{ background: '#e0e7ff', color: '#4f46e5' }}>
                  {area.icon}
                </div>
                <h3 className="coe-partner-card__title">{area.title}</h3>
                <p className="coe-partner-card__desc">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Core Pillars */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Our Foundation</span>
            <h2 className="section-title--lg">Core Pillars</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px', marginTop: '40px' }}>
            {corePillars.map((pillar, i) => (
              <div key={i} className="coe-partner-card" style={{ textAlign: 'left', alignItems: 'flex-start' }}>
                <div className="coe-partner-card__icon-box" style={{ margin: '0 0 20px 0', width: '50px', height: '50px' }}>
                  {pillar.icon}
                </div>
                <h3 className="coe-partner-card__title" style={{ textAlign: 'left', marginBottom: '12px' }}>{pillar.title}</h3>
                <p className="coe-partner-card__desc" style={{ textAlign: 'left', margin: 0 }}>{pillar.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Infrastructure Showcase & 7. Programs */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">

          {/* Key Initiatives */}
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Activities & Programs</span>
            <h2 className="section-title--lg">Key Initiatives</h2>
            <hr className="section-divider section-divider--center" />
          </div>
          <div className="coe-lab-grid" style={{ marginBottom: '80px' }}>
            {keyInitiatives.map((init, i) => (
              <div key={i} className="coe-lab-card" style={{ background: '#fff' }}>
                <h3 className="coe-lab-card__title">{init.title}</h3>
                <p className="coe-lab-card__desc">{init.desc}</p>
              </div>
            ))}
          </div>

          {/* Infrastructure */}
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Facilities</span>
            <h2 className="section-title--lg">Planned Infrastructure</h2>
            <hr className="section-divider section-divider--center" />
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginTop: '40px' }}>
            {infrastructure.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '16px', background: '#fff', borderRadius: '8px', border: '1px solid #e2e8f0' }}>
                <span style={{ color: 'var(--color-primary)' }}><IconServer /></span>
                <span style={{ fontWeight: 600, color: 'var(--color-text-dark)', fontSize: '0.95rem' }}>{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. Partners Section */}
      <section className="section" style={{ background: '#f1f5f9', paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Collaboration</span>
            <h2 className="section-title--lg">Strategic Partners</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'center', gap: '32px', marginTop: '40px' }}>

            {/* Academic (Hidden for now)
            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Academic Partners</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {partners.academic.map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
            </div>
            */}

            {/* Industry (Hidden for now)
            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Industry Partners</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {partners.industry.map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
            </div>
            */}

            {/* Government */}
            <div style={{ background: '#fff', padding: '30px', borderRadius: '12px', boxShadow: '0 4px 6px -1px rgba(0,0,0,0.05)', width: '100%', maxWidth: '450px' }}>
              <h3 style={{ fontSize: '1.25rem', color: 'var(--color-primary)', marginBottom: '20px', borderBottom: '2px solid #e2e8f0', paddingBottom: '10px' }}>Ecosystem & Government</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {partners.government.map((p, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.95rem', color: '#475569' }}>
                    <IconCheck /> {p}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>



      {/* 10. Beneficiaries & Why AI-CoE */}
      <section className="section" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="container">
          <div className="grid-2" style={{ gap: '60px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>

            {/* Beneficiaries */}
            <div>
              <h2 className="section-title--lg" style={{ marginBottom: '20px' }}>Target Beneficiaries</h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                {beneficiaries.map((b, i) => (
                  <span key={i} style={{ padding: '8px 16px', background: '#f1f5f9', borderRadius: '4px', fontSize: '0.9rem', color: '#334155', fontWeight: 500 }}>
                    {b}
                  </span>
                ))}
              </div>
            </div>

            {/* Why AI-CoE */}
            <div>
              <h2 className="section-title--lg" style={{ marginBottom: '20px' }}>Why AI-CoE?</h2>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <li>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Industry-Oriented Research</strong>
                  <span style={{ color: '#475569' }}>Research focused on solving practical industrial challenges.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Startup Ecosystem</strong>
                  <span style={{ color: '#475569' }}>End-to-end support for AI-driven startups.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Skilled Workforce</strong>
                  <span style={{ color: '#475569' }}>Developing future-ready AI talent for industry.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Innovation & Commercialization</strong>
                  <span style={{ color: '#475569' }}>Transforming research outcomes into deployable solutions.</span>
                </li>
                <li>
                  <strong style={{ display: 'block', fontSize: '1.1rem', color: 'var(--color-primary)' }}>Regional Development</strong>
                  <span style={{ color: '#475569' }}>Driving digital transformation and economic growth across Chhattisgarh.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* NEW: Contact Section (Matches MACIEET Style) */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Get In Touch</span>
            <h2 className="section-title--lg">Partner With Us</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <p style={{ maxWidth: '700px', margin: '20px auto 40px auto', fontSize: '1.1rem', color: 'var(--color-text-dark)', lineHeight: '1.8', textAlign: 'center' }}>
            Collaborate with us on research, innovation, startup development, workforce skilling, and AI-driven transformation.
          </p>

          <div className="coe-contact-strip">
            <div className="coe-contact-item">
              <div className="coe-contact-item__icon">
                <MapPinIcon />
              </div>
              <div className="coe-contact-item__body">
                <h3>Address</h3>
                <p>
                  AI-CoE, NIT Raipur Campus, Raipur, Chhattisgarh – 492010
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

    </main>
  );
}
