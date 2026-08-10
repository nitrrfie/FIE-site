import '../styles/pages.css';
import '../styles/inner-pages.css';
import { driveImageUrl } from '../utils/googleDrive';

interface Partner {
  name: string;
  shortName?: string;
  role: string;
  image?: string;
  desc: string;
  link: string;
}

const corePartners: Partner[] = [
  {
    name: 'Department of Science & Technology',
    role: 'Government Supporting Agency',
    image: '/uploads/2023/ecosystem/DST.jpg',
    desc: 'The Department of Science and Technology (DST) supports NITRRFIE under the NIDHI-TBI scheme to nurture technology business incubation across India.',
    link: 'https://dst.gov.in/',
  },
  {
    name: 'Ministry of Electronics And Information Technology',
    role: 'Government Supporting Agency',
    image: '/uploads/2023/ecosystem/E&IT (2).png',
    desc: 'The Ministry of Electronics and Information Technology (MeitY) supports the TIDE 2.0 scheme to foster ICT-led entrepreneurship across India.',
    link: 'https://dst.gov.in/',
  },
  
  {
    name: 'Ministry of Science And Technology - Department of Scientific and Industrial Research',
    role: 'Government Supporting Agency',
    image: '/uploads/2023/ecosystem/Ministry_of_Science_and_Technology_India.png',
    desc: 'The Department of Scientific and Industrial Research (DSIR) supports the PRISM scheme to empower individual innovators and technology-based startups.',
    link: 'https://dst.gov.in/',
  },
  {
    name: 'CHHATTISGARH GOVERNMENT',
    role: 'Government Supporting Agency',
    image: '/uploads/2023/ecosystem/CG GOVT.png',
    desc: 'The Department of Scientific and Industrial Research (DSIR) supports the PRISM scheme to empower individual innovators and technology-based startups.',
    link: 'https://dst.gov.in/',
  },
  // {
  //   name: 'Startup India',
  //   role: 'National Ecosystem Partner', 
  //   image: '/uploads/2023/03/Startup-India.png',
  //   desc: 'A flagship Government of India initiative building a strong ecosystem for nurturing innovation and startups to drive sustainable economic growth.',
  //   link: 'https://www.startupindia.gov.in/',
  // },
  // {
  //   name: 'Startup Chhattisgarh',
  //   role: 'State Ecosystem Partner',
  //   image: '/uploads/2023/03/Startup-Chhattisgarh.png',
  //   desc: 'Government of Chhattisgarh initiative to promote entrepreneurship, support incubators, and finance early-stage startups within the state.',
  //   link: 'https://startup.cgstate.gov.in/',
  // },
  // {
  //   name: 'National Institute of Technology Raipur',
  //   role: 'Host Institution & Academic Partner',
  //   image: '/uploads/2023/03/NITRR-1.png',
  //   desc: "One of India's premier technical institutions, hosting the NITRRFIE Technology Business Incubator and providing laboratory and research facilities.",
  //   link: 'http://nitrr.ac.in/',
  // },
  // {
  //   name: 'G20 India Presidency',
  //   role: 'Global Innovation Alliance Affiliate',
  //   image: '/uploads/2023/03/G20.png',
  //   desc: 'NITRRFIE aligns with the G20 Startup20 Engagement Group mandates to foster global collaboration and policy directives for startup scaling.',
  //   link: 'https://www.g20.org/',
  // },
];

const mouPartners: Partner[] = [
  {
    name: 'IndiaAI',
    shortName: 'IndiaAI',
    role: 'National AI Mission / Independent Business Division',
    image: '/uploads/2023/ecosystem/INDIA AI.png',
    desc: "A centralized hub and mission-driven division established to accelerate India's AI ecosystem through computing access, startup support, skilling, and responsible governance.",
    link: 'https://indiaai.gov.in/',
  },
  {
    name: 'DST NIDHI',
    shortName: 'DST NIDHI',
    role: 'Umbrella Innovation Programme',
    image: '/uploads/2023/ecosystem/DST N.jpg',
    desc: 'An initiative by the Department of Science and Technology (DST) to foster an innovation-driven startup ecosystem through financial support, infrastructure, and mentorship for entrepreneurs.',
    link: 'https://nidhi.dst.gov.in',
  },
  {
    name: 'T-HUB',
    shortName: 'T-Hub',
    role: 'Startup Incubator & Innovation Hub',
    image: '/uploads/2023/ecosystem/T-Hub_Logo-PNG.png',
    desc: "ndia's leading startup incubator and innovation ecosystem enabler based in Hyderabad.",
    link: 'https://t-hub.co',
  },
  {
    name: 'Digital INDIA',
    shortName: 'Digital India',
    image: '/uploads/2023/ecosystem/digital_india-removebg-preview.png',
    role: 'Digital Transformation Initiative',
    desc: 'Government of India flagship programme to transform India into a digitally empowered society and knowledge economy.',
    link: 'https://www.digitalindia.gov.in',
  },
  {
    name: 'IIM Calcutta Innovation Park',
    shortName: 'IIMCIP',
    image: '/uploads/2023/ecosystem/iim k.jpg',
    role: 'Technology Business Incubator / Startup Incubator',
    desc: 'Startup incubator under IIM Calcutta that promotes entrepreneurship, innovation, and social-impact ventures across India.',
    link: 'https://www.iimcip.org/',
  },
  {
    name: 'OP Jindal Globak University',
    shortName: 'JGU',
    role: 'Higher Education Institution / University',
    image: '/uploads/2023/ecosystem/O._P._Jindal_Global_University_Logo.png',
    desc: 'A multidisciplinary private university recognized as an Institution of Eminence, known for global education and research.',
    link: 'https://jgu.edu.in/',
  },
  {
    name: 'Shaheed Mahendra Karma Vishwavidyalaya, Bastar',
    shortName: 'SMKV',
    role: 'State University',
    image: '/uploads/2023/ecosystem/adsda.jpg',
    desc: 'A state university in Bastar focused on higher education, research, innovation, and regional development.',
    link: 'https://www.smkvbastar.ac.in/',
  },
  {
    name: 'Subhash Chandra Bose Biotechnology Incubation Centre',
    shortName: 'SCBInc',
    role: 'Biotechnology Incubator / Startup Incubation Centre',
    image: '/uploads/2023/ecosystem/sc.png',
    desc: 'A biotechnology incubation centre in Raipur that supports biotech startups, innovation, commercialization, and entrepreneurship.',
    link: 'https://www.scbinc.in',
  },
  {
    name: 'Pt. Ravishankar Shukla University, Raipur',
    shortName: 'PRSU',
    role: 'State University',
    image: '/uploads/2023/ecosystem/Pt._Ravishankar_Shukla_University_logo.png',
    desc: "Chhattisgarh's oldest and largest state university, offering higher education, research, innovation, and entrepreneurship support.",
    link: 'https://www.prsu.ac.in',
  },
  {
    name: 'Campus Angels Network',
    shortName: 'CAN',
    role: 'Angel Investor Network / Startup Funding Network',
    image: '/uploads/2023/ecosystem/thecampusangels_logo.jpg',
    desc: 'An angel investor network that funds, mentors, and supports early-stage startups, particularly those emerging from university incubators.',
    link: 'https://www.thecampusangels.com',
  },
  {
    name: 'Motilal Oswal',
    shortName: 'MOFSL',
    role: 'Financial Services & Investment Partner',
    image: '/uploads/2023/ecosystem/oswal.png',
    desc: 'A leading Indian financial services company providing wealth management, investment banking, brokerage, asset management, and startup investment support.',
    link: 'https://www.motilaloswal.com',
  },
  {
    name: 'HDFC Bank',
    shortName: 'HDFC Bank',
    role: 'Banking & Financial Services Partner',
    image: '/uploads/2023/ecosystem/HDFC_Bank_Logo.svg.png',
    desc: "One of India's largest private-sector banks providing banking, financing, digital payment, and startup support services.",
    link: 'https://www.hdfcbank.com',
  },
  // {
  //   name: 'MNNIT Allahabad',
  //   shortName: 'IIMCIP',
  //   role: 'Mentorship & Incubation Partner',\
  //   image: '/uploads/2023/ecosystem/iim k.jpg',
  //   desc: 'MoU signed on 12 July 2024 to collaborate on entrepreneurship development programs, startup exchange, and investor networks.',
  //   link: 'https://www.iimcip.org/',
  // },
  
  {
    name: 'Innovation & Incubation Hub MNNIT Foundation',
    shortName: 'IIHMF',
    role: 'Technical Incubation Partner',
    image: '/uploads/2023/ecosystem/MNNIT (logo)png.png',
    desc: 'MoU signed on 09 August 2024 to support inter-institutional startup mentorship and collaborate on multidisciplinary engineering projects.',
    link: 'http://www.mnnit.ac.in/',
  },
  {
    name: 'KIIT-Technology Business Incubator',
    shortName: 'KIIT-TBI',
    image: '/uploads/2023/ecosystem/kiit.png',
    role: 'Ecosystem Synergy Partner',
    desc: 'MoU signed on 16 July 2024 to offer cross-incubation programs, resource sharing, and joint acceleration efforts for startups.',
    link: 'https://kiit-tbi.in/',
  }
  // {
  //   name: 'Chhattisgarh Biotechnology Promotion Society',
  //   shortName: 'CBPS',
  //   role: 'Biotech Incubation Enabler',
  //   desc: 'MoU signed on 11 September 2024 to jointly support biotechnology startups and provide access to state-of-the-art lab infrastructure.',
  //   link: 'https://biotech.cgstate.gov.in/',
  // },
  // {
  //   name: 'Chhattisgarh State Planning Commission',
  //   shortName: 'CGSPC',
  //   role: 'Policy & Planning Partner',
  //   desc: 'MoU signed on 29 December 2022 to align incubation initiatives with the state\'s strategic development goals and economic plans.',
  //   link: 'https://spc.cg.gov.in/',
  // },
  // {
  //   name: 'PRSU Incubation Centre (PITEF)',
  //   role: 'Regional Co-Incubation Partner',
  //   image: '/uploads/2024/05/MoU-between-NITRRFIE-and-PITEF-for-Co-Incubation-1-1.jpg',
  //   desc: 'MoU signed in May 2024 to enable co-incubation facilities and share academic resources with Pandit Ravishankar Shukla University.',
  //   link: 'https://www.prsu.ac.in/',
  // },
];

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const getInitialsColor = (name: string) => {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    hash = name.charCodeAt(i) + ((hash << 5) - hash);
  }
  const h = Math.abs(hash % 360);
  return `hsl(${h}, 60%, 40%)`;
};

export default function EcosystemPartners() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/03/consulting-3055704_1280.jpg')})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Ecosystem Partners</h1>
          <p className="page-hero__breadcrumb">
            <a href="/">Home</a> &rsaquo; Ecosystem Partners
          </p>
        </div>
      </div>

      {/* Core Partners Section */}
      <section className="section" style={{ paddingBottom: '40px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Affiliated Network</span>
            <h2 className="section-title--lg">Core Supporting Partners</h2>
            <hr className="section-divider section-divider--center" />
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
              NITRRFIE operates in collaboration with national and state government departments and regulatory initiatives to build a strong innovation foundation.
            </p>
          </div>

          <div className="partners-grid" style={{ marginTop: '40px' }}>
            {corePartners.map((p, i) => (
              <div key={i} className="partner-card">
                <div className="partner-card__logo">
                  <img
                    src={driveImageUrl(p.image || '')}
                    alt={p.name}
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp';
                    }}
                  />
                </div>
                <div className="partner-card__body">
                  <p className="partner-card__role">{p.role}</p>
                  <h3 className="partner-card__name">{p.name}</h3>
                  <p className="partner-card__desc">{p.desc}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card__link"
                  style={{ marginTop: 'auto' }}
                >
                  Visit Website <ExternalIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MoU Partners Section */}
      <section className="section" style={{ background: 'var(--color-bg)', paddingTop: '64px', paddingBottom: '80px' }}>
        <div className="container">
          <div className="section-header section-header--center">
            <span className="section-eyebrow">Strategic MoUs</span>
            <h2 className="section-title--lg">Collaborative MoU Partners</h2>
            <hr className="section-divider section-divider--center" />
            <p className="section-subtitle" style={{ maxWidth: '700px', margin: '0 auto' }}>
              We have executed Memorandums of Understanding (MoUs) with leading academic, state, and management institutions to offer cross-incubation, mentoring, and technical consulting.
            </p>
          </div>

          <div className="partners-grid" style={{ marginTop: '40px' }}>
            {mouPartners.map((p, i) => (
              <div key={i} className="partner-card">
                {p.image ? (
                  <div className="partner-card__logo">
                    <img
                      src={driveImageUrl(p.image || '')}
                      alt={p.name}
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = driveImageUrl('/uploads/2022/07/profile-picture.webp');
                      }}
                    />
                  </div>
                ) : (
                  <div
                    className="partner-card__logo-avatar"
                    style={{ backgroundColor: getInitialsColor(p.name) }}
                  >
                    {p.shortName}
                  </div>
                )}
                <div className="partner-card__body">
                  <p className="partner-card__role">{p.role}</p>
                  <h3 className="partner-card__name">{p.name}</h3>
                  <p className="partner-card__desc">{p.desc}</p>
                </div>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="partner-card__link"
                  style={{ marginTop: 'auto' }}
                >
                  Visit Website <ExternalIcon />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
