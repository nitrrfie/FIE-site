import '../styles/pages.css';
import '../styles/about.css';
import { driveImageUrl } from '../utils/googleDrive';

const VisionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
  </svg>
);

const MissionIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
  </svg>
);

const ObjectivesIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/>
  </svg>
);

const purposes = [
  'Facilitate the translation of ideas and innovations emerging from the scientific, technological knowledge capital, into viable startups, thus contributing to the socio-economic development and well-being of the region and country.',
  'Create an environment for successful translation of scientific research and knowledge into commercially viable enterprises by building and sharing resources, networks, competencies, and expertise in key areas at the interfaces of technology and innovation, business and entrepreneurship, and governance and policy.',
  'To foster the spirit of innovation and entrepreneurship in individuals and groups to address the current and emerging societal needs by providing an effective channel to bridge the gap between scientific research and knowledge creation at National Institute of Technology (NIT) Raipur and allied institutions.',
  'To facilitate co-operation and interaction between academia and industry (specifically between NIT Raipur and enterprises, entrepreneurs in various sectors) and promote innovation through formal and informal means, to identify, conceptualize, implement joint projects between companies/ entrepreneurs and faculty/students of NIT Raipur.',
];

const strives = [
  'To incubate and nurture the translation of innovations right from the idea phase to a successful startup by providing support and handholding through all the stages and steps of the entrepreneurial journey and help the resulting ventures survive in the competitive market and reach a stage where they can scale-up further.',
  'To construct, build, erect, establish, equip, fabricate, install, own and operate regular and R&D facilities providing incubation support to various research projects undertaken by enterprises and entrepreneurs.',
  'To create and disseminate knowledge and experience related to creation, growth and success of entrepreneurial ventures.',
];

const objectivesList = [
  'To create a policy framework to guide all the stakeholders regarding various regulations, modalities, procedures, and facilities available to support and assist the innovation and entrepreneurial activities.',
  'To create an institutional framework to carry out innovation and startup support activities.',
  'To create an enabling eco-system to nurture and promote innovation and startup culture in students, faculty and staff members, alumni of NIT Raipur and society at large.',
  'To provide a system to facilitate startups in every step of their entrepreneurial journey.',
  'To facilitate optimal utilization of various resources already available in the institute for support of innovation and startup activities.',
];

export default function About() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/10865944_1520194588202891_6950284804550590165_o.jpg')})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">About NITRRFIE</h1>
          <p className="page-hero__breadcrumb">
            <a href="/">Home</a> &rsaquo; About Us
          </p>
        </div>
      </div>

      {/* Section 1: About Introduction (Who We Are) */}
      <section className="section">
        <div className="container">
          <div className="about-heading-wrap about-watermark">
            <span className="section-eyebrow">Overview</span>
            <h2 className="section-title">
              <span className="about-heading-focused">About</span> NITRRFIE
            </h2>
            <hr className="section-divider section-divider--center" />
          </div>

          <div className="about-intro-container animate-fade-in">
            <div className="about-intro-text">
              <p>
                NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE) is a Not-for-profit Company governed by Section-8 of Companies Act 2013 and a Technology Business Incubator of NIT Raipur to support Startups under the National Initiative for Developing and Harnessing Innovations (NIDHI) - Technology Business Incubator (TBI) program of Department of Science and Technology (DST).
              </p>
              <p>
                NITRRFIE, established in March 2021, aims to support technology-based startups with a focus on thrust areas including, but not limited to, Cleantech, Information and Communication Technology (ICT), and Multidisciplinary Technology Integration.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Purpose (Split 2-Column Grid) */}
      <section className="section about-purpose-section">
        <div className="container">
          <div className="about-purpose-layout">
            
            {/* Left Column: Purpose Cards */}
            <div className="animate-scale-up">
              <div className="section-header">
                <span className="section-eyebrow">Our Mission Criticals</span>
                <h2 className="section-title--lg" style={{ color: 'var(--color-secondary)' }}>Purpose</h2>
                <hr className="section-divider" style={{ width: '48px', margin: '12px 0 24px 0' }} />
              </div>
              
              <div className="about-purpose-grid">
                {purposes.map((text, i) => (
                  <div key={i} className="about-purpose-card">
                    <span className="about-purpose-card__num">0{i + 1}</span>
                    <p>{text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Decorative Media Card */}
            <div className="about-purpose-media-card animate-scale-up" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/lightbulb-g49b1ff64a_1920.jpg')})` }}>
              <div className="about-purpose-media-overlay">
                <h3 className="about-purpose-media-title">Empowering Ideas</h3>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Section 3: Our Approach (Striving Columns) */}
      <section className="section about-approach-section" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/lee-miller-47629-unsplash.jpg')})` }}>
        <div className="container">
          
          <div className="about-approach-header">
            <span className="section-eyebrow" style={{ color: 'var(--color-primary)' }}>Vision to Action</span>
            <h2>Our <span className="about-heading-focused">approach</span> to achieve</h2>
            <p className="section-subtitle">Time has changed</p>
            <p style={{ marginTop: '20px', color: 'rgba(255, 255, 255, 0.85)' }}>
              To achieve the above objectives the NITRRFIE will strive:
            </p>
          </div>

          <div className="about-strive-grid">
            {strives.map((text, i) => (
              <div key={i} className="about-strive-card animate-scale-up">
                <span className="about-strive-card__num">0{i + 1}</span>
                <hr className="about-strive-card__divider" />
                <p>{text}</p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Section 4: Vision, Mission & Objectives */}
      <section className="section about-vmo-section" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/03/torres-del-paine-mountains-granite-granite-rock-57456.jpeg')})` }}>
        <div className="container">
          
          {/* Row 1: Vision & Mission side-by-side */}
          <div className="about-vmo-grid">
            
            {/* Vision */}
            <div className="about-vmo-card animate-scale-up">
              <div className="about-vmo-icon"><VisionIcon /></div>
              <h3>Vision</h3>
              <p>
                To be a center of excellence and a coveted place for innovative and enterprising minds providing an effective and efficient innovation and startup eco-system.
              </p>
            </div>

            {/* Mission */}
            <div className="about-vmo-card animate-scale-up">
              <div className="about-vmo-icon"><MissionIcon /></div>
              <h3>Mission</h3>
              <p>
                To support and nurture startups with innovative ideas, creative acumen, human values, professional ethics, ecofriendly approach and contribute actively towards making India self-reliant as well as pave a way for making the planet more sustainable for generations to come.
              </p>
              <p style={{ marginTop: '14px' }}>
                To excel in supporting startup and innovation ecosystem in the region and to nurture the innovative mindsets among all the stakeholders through curricular and co-curricular offerings that will create a cascading effect and emerge as a leading center in the country for Innovation and Incubation. NIT Raipur aims to become the first choice for students aiming Entrepreneurship as a Career Option.
              </p>
            </div>

          </div>

          {/* Row 2: Objectives full width */}
          <div className="about-objectives-card animate-scale-up">
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="about-vmo-icon" style={{ marginBottom: 0 }}><ObjectivesIcon /></div>
              <h3 style={{ margin: 0 }}>Objectives</h3>
            </div>
            
            <div className="about-objectives-list">
              {objectivesList.map((obj, i) => (
                <div key={i} className="about-objectives-item">
                  <span className="about-objectives-item__icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <p>{obj}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Section 5: Partners Ribbon (Mono-shaded supporting agencies) */}
      <section className="about-partners-section">
        <div className="container">
          <div className="about-partners-wrap">
            {[
              { src: '/uploads/NITRR-1.png', alt: 'NIT Raipur', className: 'about-partners-logo--nitrr' },
              { src: '/uploads/DST-NIDHI_Original-Logo-H.png', alt: 'DST NIDHI' },
              { src: '/uploads/Startup-India.png', alt: 'Startup India' },
              { src: '/uploads/Startup-Chhattisgarh.png', alt: 'Startup Chhattisgarh' },
            ].map((p) => (
              <div key={p.alt} className="about-partners-logo">
                <img src={driveImageUrl(p.src)} alt={p.alt} className={p.className} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
