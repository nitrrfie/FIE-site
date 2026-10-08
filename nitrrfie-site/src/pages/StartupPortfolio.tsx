import { useState } from 'react';
import '../styles/pages.css';
import '../styles/portfolio.css';
import { driveImageUrl } from '../utils/googleDrive';

interface Startup {
  id: string;
  name: string;
  founder: string;
  sector: string;
  state: string;
  cohort: '2025/2026' | '2022-2024';
  logo?: string;
  desc: string;
  website?: string;
  images?: string[];
}

const startupsData: Startup[] = [
  {
    id: 'Environova',
    name: 'ENVIRONOVA Engineering & Consultancy Services Private Limited',
    founder: 'Dr. Kshitij Upadhyay',
    sector: 'Environmental Solutions',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/environva.jpeg',
    desc: 'ENVIRONOVA Engineering & Consultancy Services Private Limited is a multidisciplinary environmental engineering, sustainability, and environmental technology startup providing technical, scientific, research, and project management solutions across water and wastewater management, solid waste management, river rejuvenation, environmental monitoring, and pollution control. The company supports urban local bodies, government agencies, industries, and infrastructure developers in achieving environmental compliance, sustainability, and efficient resource management through scientific, data-driven, and implementation-oriented solutions, offering end-to-end planning, design, construction supervision, and operation and maintenance support for Water Treatment Plants (WTPs), Sewage Treatment Plants (STPs), Effluent Treatment Plants (ETPs), Common Effluent Treatment Plants (CETPs), sewerage systems, and environmental infrastructure projects under programs such as SBM 2.0, AMRUT, Jal Jeevan Mission, Namami Gange, NRCP, and River Rejuvenation initiatives. With a dedicated team of Ph.D. scholars, researchers, and domain experts, ENVIRONOVA undertakes advanced R&D in anaerobic wastewater treatment, microplastics pollution, waste management, environmental monitoring, GIS and remote sensing, nature-based treatment systems, and sustainable environmental technologies, while developing low-cost environmental monitoring solutions, customized treatment systems, and innovative products to improve affordability and operational efficiency. In addition to engineering consultancy, the company provides technical training, EdTech, digital learning, and capacity-building programs for government agencies, professionals, industries, and students, integrating engineering expertise, scientific research, technological innovation, and practical field implementation to deliver sustainable environmental solutions and contribute to environmental protection and sustainable development across India.',
  },
  {
    id: 'w2w',
    name: 'W2W Startup (W2W)',
    founder: 'Sumita Panjwani',
    sector: 'Agriculture & Cleantech',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'W2w is a social startup founded by a woman entrepreneur has developed a biodegradable sanitary napkin leveraging post-harvest paddy straw stubles. This innovative startup also curbs the problem of air pollution caused by the rampant burning of farm waste- paddy straw, stubbles, stalks etc. and use them to create wealth for the society and provides sustainable sanitary pads for underprivileged women in rural and semi-urban areas. These sanitary pads are 100% natural, biodegradable and currently under validation phase. The entrepreneur aims to promote rural entrepreneurship by empowering rural females through selling the sanitary pads to earn their social status. This social startup has visions of a healthy and prosperous India by increasing the mass base of sanitary pad users through awareness about menstrual health and hygiene in the rural areas of the country.',
    website: 'https://www.w2wstartup.in/',
    images: [
      '/uploads/2024/07/2023-07-12-3.png',
      '/uploads/2024/07/WhatsApp-Image-2024-07-22-at-18.55.05_93625d64.jpg',
      '/uploads/2024/07/EmbeddedImage.jpg-paddy-straw-cellulose-fibre.jpg'
    ]
  },
  {
    id: 'Atmik-Bharat-Industries',
    name: 'Atmik Bharat Industries Private Limited',
    founder: 'Sazal Malhotra',
    sector: 'IT & SaaS',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/8-Sazal-Malhotra-Vertex-Suite_Logo.png',
    desc: 'Vertex Suite by Atmik Bharat is a Meta-approved SaaS platform for conversational automation & digital service delivery. Using AI/ML, DeepTech & IoT, it automates operations, boosts engagement & delivers accessible services for businesses & govts., increase collaboration, and drive efficiency for organizations of all sizes. They specialize in high-end cloud databases, project tracking, and secure document storage tools.',
    website: 'https://atmikbharat.com/'
  },
  {
    id: 'lsa',
    name: 'LSA',
    founder: 'Dr. Ravi Tembhre',
    sector: 'IT & Services',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/14-Dr.-Ravi-Tembhre-logo-lsa.jpg',
    desc: 'LSA (Logical Solutions & Analysis) specializes in high-end technical analytics, algorithm development, and custom software engineering to solve complex computational challenges for industrial processes.',
    website: 'http://www.lunarspaceagency.com'
  },
  {
    id: 'esgssi',
    name: 'ESGSSI',
    founder: 'Kuldeepak',
    sector: 'Sustainability',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/16-Kuldeepak-LOGO-ESGSSI.png',
    desc: 'ESGSSI (ESG Sustainability Services India) focuses on helping businesses implement and track environmental, social, and governance standards, ensuring compliance and carbon footprint reduction.',
    website: 'http://www.licensify.in/'
  },
  {
    id: 'wba99',
    name: 'WBA99 Analysis Experts Pvt.Ltd',
    founder: 'Dr. Prashant Chaturvedi',
    sector: 'Healthcare',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/17-Dr.-Prashant-Chaturvedi-WBA99physio.jpg',
    desc: 'Wba99 Analysis Expert India Pvt Ltd Works on Human Body Analysis Using Ai And Sensor Based Analysis A Data Driven Solution.',
  },
  {
    id: 'PHARMODA LIFE SCIENCES',
    name: 'PHARMODA LIFE SCIENCES PVT. LTD',
    founder: 'Piyush Pathak',
    sector: 'Healthcare & Biotech',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/19-Piyush-Pathak-Pharmoda.jpg',
    desc: 'Pharmoda is a biotech venture dedicated to streamlining pharmaceutical distribution and offering innovative digital tools for healthcare inventory management and drug safety tracking.',
  },
  {
    id: 'vilki',
    name: 'Vilki Medicart Private Limited',
    founder: 'Alisher Rayeen',
    sector: 'E-commerce & Logistics',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/20-Alisher-Rayeen-VILKI_Final-Logo-01.png',
    desc: `Vilki Medicart is a pioneering pharmaceutical aggregator, addressing inefficiencies in India's B2B pharmaceutical market. By modernizing operations with innovative technology, we streamline and enhance the supply chain for retail and wholesale medicine sellers.`,
  },
  {
    id: 'idym',
    name: 'IDYM',
    founder: 'Ratnesh Mishra',
    sector: 'Social Impact',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/21-Ratnesh-Mishra-IDYM-Logo.jpg',
    desc: 'IDYM (Igniting Dreams for Young Minds) Foundation is a socio-educational startup focusing on developing leadership and entrepreneurial mindsets in youth through interactive training and digital workshops.',
  },
  {
    id: 'innovedas',
    name: 'Innovedas Edtech',
    founder: 'Komal Vyas Sharma',
    sector: 'Edtech',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/24-Komal-Vyas-Sharma-innovedas-edtech-pvt-ltd.jpeg',
    desc: 'Innovedas Edtech is a next-generation learning platform creating interactive STEM learning kits and digital classrooms for regional K-12 students to make learning fun and practical.',
  },
  {
    id: 'Sicu-aura',
    name: 'Sicu-aura',
    founder: 'Rishav Ghosh',
    sector: 'Media & Design',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/25-Rishav-Ghosh-Artboard-a.jpg',
    desc: `India's Community based Safety platform starting from school - Sicuaura`,
    },
  {
    id: 'fishwhite',
    name: 'Fishwhite',
    founder: 'Akash Singh',
    sector: 'Agriculture & Aquaculture',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/26-Akash-Singh-Fishwhite-Logo.jpg',
    desc: 'Fishwhite is an aquaculture technology startup developing IoT-based water quality monitors and automated feeding solutions for fish farmers to maximize yield and control diseases.',
  },
  {
    id: 'roadlyne',
    name: 'Roadlyne',
    founder: 'Vishesh Kingrani',
    sector: 'Logistics',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/27-Vishesh-Kingrani-Roadlyne-logo-2x.jpg',
    desc: 'Roadlyne is a mobility-tech platform providing smart fleet routing, real-time tracking, and automated logistics management for cargo transport and commercial operations.',
  },
  {
    id: 'AUROARTS',
    name: 'AUROARTS PRIVATE LIMITED',
    founder: 'Anuradha Sahu',
    sector: 'E-commerce & Retail',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/28-Anuradha-Sahu-hana-logo-edit.jpg',
    desc: 'Eco-handcrafted floral art that transforms wild weeds, grasses, and flowers into patented botanical collages—honoring nature, culture, and sustainability.\n A circular-economy craft creating green livelihoods for women and farmers while promoting biodiversity, carbon neutrality, and mindful living.\n A bridge reconnecting modern lives and children with nature through beauty, education, and timeless storytelling.',
  },{
    id: 'Bluejersey18',
    name: 'BLUEJERSEY18 TECHNOLOGIES PRIVATE LIMITED',
    founder: 'Rahul Jhunjhunwala',
    sector: 'IT & Services',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/31-Rahul-Jhunjhunwala-Logo-in-PNG.png',
    desc: 'Zero-commission SaaS operating system for sports venues replacing 15-20% aggregator fees. Built venue-centric vs player-centric—venues own customer data, control pricing, automate operations. 9 integrated modules create infrastructure lock-in.',
  },
  {
    id: 'growthmandi',
    name: 'GrowthMandi',
    founder: 'Soumya Bose',
    sector: 'Agriculture & Agritech',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/34-Soumya-Bose-GrowthMandi-Logo-HD.png',
    desc: 'GrowthMandi is a B2B agritech marketplace connecting smallholder farmers directly with large-scale buyers, ensuring fair pricing and reducing supply chain wastage.',
  },
  {
    id: 'supreme_stud',
    name: 'Supreme Stud',
    founder: 'Anshu Kathera',
    sector: 'Manufacturing',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/35-Anshu-Kathera-SUPREME-STUD-LOGO.png',
    desc: 'Supreme Stud is a precision manufacturing company producing high-quality metal fasteners, custom fixtures, and construction components.',
  },
  {
    id: 'arc_ventures',
    name: 'Arc Ventures',
    founder: 'Rujhan Jaiswal',
    sector: 'Consulting',
    state: 'Chhattisgarh',
    cohort: '2025/2026',
    logo: '/uploads/2025/12/Rujhan-Jaiswal-arc-ventures-logo.jpg',
    desc: 'Arc Ventures acts as a strategic advisory firm assisting early-stage tech startups with fundraising, market access, regulatory compliance, and go-to-market scaling.',
  },
  {
    id: 'calidad',
    name: 'Calidad Healthcare',
    founder: 'Ashish Sharma',
    sector: 'Healthcare',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Calidad Healthcare is a health-tech startup focusing on innovative diagnostic systems and digital health record solutions for community clinics and remote health centers.',
  },
  {
    id: 'Charcoal based Sustainable Evaporative Ambient Temprerature cooling',
    name: 'Charcoal based Sustainable Evaporative Ambient Temprerature cooling',
    founder: 'Abhilash Shrivastava',
    sector: 'IT & Services',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Charcoal based Sustainable Evaporative Ambient Temperature cooling.',
  },
  {
    id: 'Electric Vehicle & Constituents Technology',
    name: 'Electric Vehicle & Constituents Technology',
    founder: 'Saket Kumar',
    sector: 'IT & Services',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Electric Vehicle & Constituents Technology.',
  },
  {
    id: 'Multi-modal Data Analytics for Improved Detection and Prediction of COPD and Asthma Exacerbations using Advanced Machine Learning',
    name: 'Multi-modal Data Analytics for Improved Detection and Prediction of COPD and Asthma Exacerbations using Advanced Machine Learning',
    founder: 'Sumit Kumar Roy',
    sector: 'IT & Services',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Multi-modal Data Analytics for Improved Detection and Prediction of COPD and Asthma Exacerbations using Advanced Machine Learning.',
  },
  {
    id: 'prashmi',
    name: 'Prashmi International',
    founder: 'Prashmi International',
    sector: 'Trade & Consulting',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Facilitating global trade, technology transfer, and business scaling consultancy for regional micro, small, and medium enterprises (MSMEs).',
  },
  {
    id: 'ledflix',
    name: 'LEDFLIX',
    founder: 'LEDFLIX',
    sector: 'Media & Design',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Digital signage, out-of-home advertising, and interactive media software for smart display boards.',
  },
  {
    id: 'surgery',
    name: 'Rural Surgery Innovations',
    founder: 'Inderjeet Singh Bhalla / Dr. Gnanaraj Jesudian',
    sector: 'Healthcare',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Developing low-cost, sterile surgical instruments and specialized equipment designed for use in remote rural hospitals.',
  },
  {
    id: 'covesto',
    name: 'Covesto Tech Solutions Private Limited',
    founder: 'Anmol Shaha/ Sumeera Godara',
    sector: 'FinTech',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'A social trading platform that serves as a marketplace connecting retail investors with SEBI registered experts, and facilitating the sharing and execution of trade ideas.'
  },
  {
    id: 'healthtech',
    name: 'Sumit Healthtech Pvt. Ltd.',
    founder: 'Ravindra Singh Kshatri',
    sector: 'Healthcare',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'As per the WHO, our country has over 20% of its population suffering from NCDs (non communicable diseases) like diabetes and hypertension, which are the major causes of organ failure. Every year, more than one million organ transplants are required in India, but only a few thousand of the total need, or 11k, are met. However, there is no end-to-end solution that addresses the unmet needs of organ transplantation. That is where Jivandeep comes into play. We designed India’s first end-to-end solution for organ transplant needs.',
  },
  {
    id: 'evatoz',
    name: 'EVATOZ Solutions',
    founder: 'EVATOZ Solutions',
    sector: 'Cleantech',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'EV charging infrastructure components, intelligent energy storage systems, and smart grid automation tools.',
  },
  {
    id: 'lifecare',
    name: 'A2G Lifecare',
    founder: 'Niket kumar/ Sanket Shikhar',
    sector: 'Healthcare',
    state: 'Chhattisgarh',
    cohort: '2022-2024',
    desc: 'Specializing in preventive healthcare solutions, herbal health formulations, and lifestyle wellness platforms.',
  }
];

const sectors = ['All', 'Agriculture', 'Healthcare', 'IT & SaaS', 'Edtech', 'Sustainability', 'Cleantech', 'Others'];

export default function StartupPortfolio() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('All');
  const [selectedCohort, setSelectedCohort] = useState<'All' | '2025/2026' | '2022-2024'>('All');
  const [selectedStartup, setSelectedStartup] = useState<Startup | null>(null);

  // Helper to extract first letters for initials logo
  const getInitials = (name: string) => {
    return name
      .split(' ')
      .filter((w) => w.length > 0)
      .slice(0, 2)
      .map((w) => w[0].toUpperCase())
      .join('');
  };

  // Filtering logic
  const filteredStartups = startupsData.filter((s) => {
    const matchesSearch =
      s.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.founder.toLowerCase().includes(searchTerm.toLowerCase()) ||
      s.desc.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCohort = selectedCohort === 'All' || s.cohort === selectedCohort;

    let matchesSector = true;
    if (selectedSector !== 'All') {
      const sLower = s.sector.toLowerCase();
      if (selectedSector === 'Others') {
        matchesSector =
          !sLower.includes('agriculture') &&
          !sLower.includes('agritech') &&
          !sLower.includes('healthcare') &&
          !sLower.includes('medtech') &&
          !sLower.includes('biotech') &&
          !sLower.includes('it & saas') &&
          !sLower.includes('it & services') &&
          !sLower.includes('edtech') &&
          !sLower.includes('sustainability') &&
          !sLower.includes('cleantech');
      } else if (selectedSector === 'IT & SaaS') {
        matchesSector = sLower.includes('saas') || sLower.includes('services') || sLower.includes('it');
      } else if (selectedSector === 'Agriculture') {
        matchesSector = sLower.includes('agriculture') || sLower.includes('agritech') || sLower.includes('organic');
      } else {
        matchesSector = sLower.includes(selectedSector.toLowerCase());
      }
    }

    return matchesSearch && matchesCohort && matchesSector;
  });

  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/03/rent.jpg')})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Startup Portfolio</h1>
          <p className="page-hero__breadcrumb">
            <a href="/">Home</a> &rsaquo; Our Incubatees
          </p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {/* Stats Section — hidden for now, re-enable when ready */}
          {/* <div className="portfolio-stats animate-fade-in">
            <div className="portfolio-stats__grid">
              <div className="portfolio-stats__item">
                <span className="portfolio-stats__num">30+</span>
                <span className="portfolio-stats__label">Startups Incubated</span>
              </div>
              <div className="portfolio-stats__item">
                <span className="portfolio-stats__num">3</span>
                <span className="portfolio-stats__label">Incubated Cohorts</span>
              </div>
              <div className="portfolio-stats__item">
                <span className="portfolio-stats__num">50+</span>
                <span className="portfolio-stats__label">Rural Jobs Created</span>
              </div>
              <div className="portfolio-stats__item">
                <span className="portfolio-stats__num">₹2.5Cr+</span>
                <span className="portfolio-stats__label">Total Funding Raised</span>
              </div>
            </div>
          </div> */}

          <div className="section-header section-header--center">
            <span className="section-eyebrow">Directory</span>
            <h2 className="section-title">Meet Our Incubatees</h2>
            <hr className="section-divider section-divider--center" />
            <p className="section-subtitle">
              Empowering innovative minds to drive sustainable transformation across Cleantech, Healthcare, Edtech, and Agri-Business.
            </p>
          </div>

          {/* Controls Panel */}
          <div className="portfolio-controls">
            {/* Search Input */}
            <div className="search-input-wrap">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                className="search-input"
                placeholder="Search startups, founders, or services..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Cohort Tabs */}
            <div className="cohort-filter">
              <button
                className={`cohort-btn ${selectedCohort === 'All' ? 'cohort-btn--active' : ''}`}
                onClick={() => setSelectedCohort('All')}
              >
                All Cohorts
              </button>
              <button
                className={`cohort-btn ${selectedCohort === '2025/2026' ? 'cohort-btn--active' : ''}`}
                onClick={() => setSelectedCohort('2025/2026')}
              >
                Cohort 2025 / 2026
              </button>
              <button
                className={`cohort-btn ${selectedCohort === '2022-2024' ? 'cohort-btn--active' : ''}`}
                onClick={() => setSelectedCohort('2022-2024')}
              >
                Cohort 2022 - 2024
              </button>
            </div>

            {/* Sector Tabs */}
            <div className="filter-tabs">
              {sectors.map((sector) => (
                <button
                  key={sector}
                  className={`filter-tab ${selectedSector === sector ? 'filter-tab--active' : ''}`}
                  onClick={() => setSelectedSector(sector)}
                >
                  {sector}
                </button>
              ))}
            </div>
          </div>

          {/* Grid Layout */}
          {filteredStartups.length > 0 ? (
            <div className="portfolio-grid">
              {filteredStartups.map((startup) => (
                <div
                  key={startup.id}
                  className="portfolio-card animate-scale-up"
                  onClick={() => setSelectedStartup(startup)}
                >
                  <div className="portfolio-card__logo-wrap">
                    {startup.logo ? (
                      <img
                        src={driveImageUrl(startup.logo)}
                        alt={`${startup.name} logo`}
                        className="portfolio-card__logo"
                        loading="lazy"
                      />
                    ) : (
                      <div className="portfolio-card__initials-logo">
                        {getInitials(startup.name)}
                      </div>
                    )}
                    <span
                      className={`portfolio-card__badge ${startup.cohort === '2025/2026'
                          ? 'portfolio-card__badge--new'
                          : 'portfolio-card__badge--classic'
                        }`}
                    >
                      {startup.cohort}
                    </span>
                  </div>

                  <div className="portfolio-card__content">
                    <h3 className="portfolio-card__title">{startup.name}</h3>
                    <p className="portfolio-card__founder">
                      <strong>Founder:</strong> {startup.founder}
                    </p>
                    <p className="portfolio-card__desc">{startup.desc}</p>
                    <div className="portfolio-card__meta">
                      <span className="portfolio-card__sector">{startup.sector}</span>
                      <span className="portfolio-card__state">{startup.state}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="portfolio-empty">
              <h3>No Startups Found</h3>
              <p>Try adjustments to your search query or filters.</p>
            </div>
          )}
        </div>
      </section>

      {/* Slide-over Drawer */}
      <div
        className={`drawer-backdrop ${selectedStartup ? 'drawer-backdrop--open' : ''}`}
        onClick={() => setSelectedStartup(null)}
      />
      <div className={`drawer ${selectedStartup ? 'drawer--open' : ''}`}>
        <div className="drawer__header">
          <h3 className="drawer__header-title">Startup Details</h3>
          <button className="drawer__close" onClick={() => setSelectedStartup(null)}>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </button>
        </div>

        {selectedStartup && (
          <div className="drawer__body">
            <div className="startup-detail__logo-wrap">
              {selectedStartup.logo ? (
                <img
                  src={driveImageUrl(selectedStartup.logo)}
                  alt={`${selectedStartup.name} logo`}
                  className="startup-detail__logo"
                />
              ) : (
                <div className="portfolio-card__initials-logo">
                  {getInitials(selectedStartup.name)}
                </div>
              )}
            </div>

            <table className="startup-detail__info-table">
              <tbody>
                <tr>
                  <td className="label-cell">Company</td>
                  <td className="value-cell">{selectedStartup.name}</td>
                </tr>
                <tr>
                  <td className="label-cell">Founder</td>
                  <td className="value-cell">{selectedStartup.founder}</td>
                </tr>
                <tr>
                  <td className="label-cell">Focus Sector</td>
                  <td className="value-cell">{selectedStartup.sector}</td>
                </tr>
                <tr>
                  <td className="label-cell">State</td>
                  <td className="value-cell">{selectedStartup.state}</td>
                </tr>
                <tr>
                  <td className="label-cell">Cohort</td>
                  <td className="value-cell">Cohort {selectedStartup.cohort}</td>
                </tr>
              </tbody>
            </table>

            <h4 className="startup-detail__section-title">About the Startup</h4>
            <p className="startup-detail__desc">{selectedStartup.desc}</p>

            {selectedStartup.website && (
              <div style={{ marginBottom: '30px' }}>
                <a
                  href={selectedStartup.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="startup-detail__btn"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Visit Website
                </a>
              </div>
            )}

            {/* Carousel display for W2W Startup photos */}
            {selectedStartup.images && selectedStartup.images.length > 0 && (
              <div>
                <h4 className="startup-detail__section-title">Product &amp; Lab Photos</h4>
                <div className="startup-detail__carousel">
                  {selectedStartup.images.map((img, index) => (
                    <div key={index} style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <img
                        src={driveImageUrl(img)}
                        alt={`W2W product photo ${index + 1}`}
                        className="startup-detail__carousel-img"
                        loading="lazy"
                      />
                      <span className="startup-detail__carousel-caption">
                        {index === 0 && 'Menstrual Hygiene Awareness Campaign'}
                        {index === 1 && 'Woman Entrepreneur validation of biodegradable straw fibers'}
                        {index === 2 && 'Paddy straw cellulose extraction in incubator lab'}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  );
}
