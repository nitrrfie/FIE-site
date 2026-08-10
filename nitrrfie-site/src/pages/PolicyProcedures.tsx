import React, { useState, useEffect } from 'react';
import '../styles/pages.css';
import '../styles/policy.css';
import { driveImageUrl } from '../utils/googleDrive';

interface PolicySection {
  id: string;
  title: string;
  image: string;
  bgVariant: 'peach' | 'blue';
  content: React.ReactNode;
}

const policies: PolicySection[] = [
  {
    id: 'pre-incubation',
    title: 'Pre-Incubation Policy of NIT Raipur',
    image: '/uploads/2023/03/bricks-g4e190fcd6_1280.jpg',
    bgVariant: 'peach',
    content: (
      <>
        <p>
          NIT Raipur has constituted Career Development Centre (CDC) in the Institute. CDC NIT Raipur has a mission to "promote, innovative, knowledge based and technology-driven start-ups by harnessing young minds". CDC, NIT Raipur was formed in May 2018 under the leadership of Director, NIT Raipur. It aims to inculcate the spirit of innovation and entrepreneurship amongst the students, encourage and support innovations through guidance, mentorship and support. All stakeholders of NIT Raipur will be encouraged to take up innovative projects with possibility of commercialization.
        </p>
        <p>
          The Pre-incubation Policy of NIT Raipur has been framed by CDC, which gives essential guidelines for supporting innovative ideas of students/faculty/staff of NIT Raipur from idea to prototyping and launch as a startup. The Makerspace of NIT Raipur is a 24x7 facility established for the same purpose. The detailed Pre-incubation policy, as adopted by this policy, can be found in Annexure-I.
        </p>
      </>
    )
  },
  {
    id: 'resource-mobilization',
    title: 'Resource Mobilization',
    image: '/uploads/2023/03/save-up-g4f7af71fc_1280.jpg',
    bgVariant: 'blue',
    content: (
      <>
        <p>For supporting pre-incubation and incubation infrastructure and facilities, the following resources and financial support is planned:</p>
        <ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
          <li>The institute is committed to provide all support for developing a culture of innovation and entrepreneurship. A separate head will be allocated in the annual budget of the institute for funding and supporting innovation and startups related activities through creation of a ‘Innovation Fund' as recommended by National Innovation and Startup policy 2019, MHRD (MoE). This fund can be resourced from both–the Institute funds and external funding agencies. [NISP 1.c.i, pp 11]</li>
          <li>Options of all sources of external funds from government (state and central) such as DST, DBT, MHRD, AICTE, TDB, TIFAC, BIRAC, DSIR, CSIR, NRDC, NSTEDB, Startup India, Invest India, MeitY, MSDE, MSME, etc. and non-government sources should be encouraged. [NISP 1.c.ii, pp 12]</li>
          <li>Efforts will be made to approach private and corporate sectors to get funds under Corporate Social Responsibility (CSR) as per Section 135 of the Company Act 2013. [NISP 1.c.iii, pp 11]</li>
          <li>Institute may also raise funds through sponsorships and donations. Institute should actively engage alumni networks for promoting Innovation & Entrepreneurship activities. [NISP 1.c.iv, pp 11]</li>
        </ol>
      </>
    )
  },
  {
    id: 'eligibility',
    title: 'Start-up Eligibility',
    image: '/uploads/2023/03/skills-g028342292_1280.jpg',
    bgVariant: 'peach',
    content: (
      <>
        <p>Applicants are eligible for start-up facility at NITRR-FIE provided its stakeholders or partners are from one of the following categories:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px', marginBottom: '12px' }}>
          <li>Student of NIT Raipur</li>
          <li>Alumni of NIT Raipur</li>
          <li>Faculty member of NIT Raipur</li>
          <li>Non-teaching staff of NIT Raipur</li>
          <li>Any outside applicant having relevant ideas as per the mandate of NITRR-FIE</li>
        </ul>
        <p>All proposals from any of the above categories of applicants will be approved based on the screening by NITRR-FIE.</p>
      </>
    )
  },
  {
    id: 'admissibility',
    title: 'Start-up Admissibility Procedure',
    image: '/uploads/2023/03/mark-g0efc5d5ff_1280.jpg',
    bgVariant: 'blue',
    content: (
      <>
        <h4 style={{ margin: '0 0 8px 0', color: 'var(--color-secondary)', fontSize: '0.95rem', fontWeight: 700 }}>a) For Applicants from NIT Raipur</h4>
        <p style={{ marginBottom: '14px' }}>The applications for admission of startups at NITRR-FIE shall be processed once the applicant(s) has taken due recommendation from the Institute Startup Committee (ISC), which will evaluate and carry out the selection procedure before forwarding the same to NITRR-FIE for further screening.</p>
        
        <h4 style={{ margin: '14px 0 8px 0', color: 'var(--color-secondary)', fontSize: '0.95rem', fontWeight: 700 }}>b) For Applicants from outside NIT Raipur</h4>
        <p style={{ marginBottom: '14px' }}>Individuals, Companies or Institutions, which are not related to NIT Raipur, will directly address the application to NITRR-FIE.</p>
        
        <p style={{ fontWeight: 600, color: 'var(--color-secondary)', marginBottom: '8px' }}>The applicants in both categories above will be evaluated by NITRR-FIE for further screening and selection as per the following steps:</p>
        <ol style={{ paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <li>The application should include a detailed Business Plan. The business plan must cover all aspects including: Startup description, value proposition, products and services, market and competition analysis, revenue model, milestones and timelines, development and marketing plan, organizational structure, core team, risk analysis, funding requirements and projected financials.</li>
          <li>If the initial evaluation of the business plan/ executive summary is positive, NITRR-FIE will arrange a meeting with the startup founders, during which the startup will be expected to make a presentation before the experts.</li>
          <li>Human subject related research in startup should get clearance from ethics committee of NIT Raipur.</li>
          <li>Agreement: The admitted startup has to enter into an agreement with NITRR-FIE. Format of Agreement will be provided by NITRR-FIE.</li>
          <li>Apart from the above, NITRR-FIE will be free to add/delete screening criteria as per the recommendation of the Board of Directors.</li>
        </ol>
      </>
    )
  },
  {
    id: 'infrastructure',
    title: 'Infrastructure Support',
    image: '/uploads/2023/03/apple-g0dee40d46_1280.jpg',
    bgVariant: 'peach',
    content: (
      <>
        <p>Upon admission to incubation center, the following infrastructural facilities will be offered to the incubatee companies on an individual basis, apart from a set of shared/ common infrastructure mentioned hereinafter:</p>
        <ul style={{ listStyleType: 'disc', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '6px', marginTop: '10px', marginBottom: '12px' }}>
          <li>Office Space</li>
          <li>Internet Connection</li>
          <li>Access to computing facilities</li>
        </ul>
        <p style={{ marginBottom: '10px' }}>Besides, NIT Raipur will facilitate the startups to access departmental laboratories and other resources in the institute. Access to departmental resources will be possible through ISC, which will coordinate with the concerned departments. Further usage of such resources shall be in conformity with the policies of NIT Raipur.</p>
        <p>Apart from the specific infrastructures as stated above, NITRR-FIE Lab and all other facilities such as Meeting/ Conference Room, Teleconferencing, Recreation and Rejuvenation Facilities, Cafeteria etc. will be shared by all startups.</p>
      </>
    )
  },
  {
    id: 'services',
    title: 'Services Offered',
    image: '/uploads/2023/03/rawpixel-799380-unsplash.jpg',
    bgVariant: 'blue',
    content: (
      <>
        <p>In addition to physical infrastructure, NITRR-FIE intends to provide other support and services including:</p>
        <ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
          <li>Startup registration and filings</li>
          <li>HR Services</li>
          <li>Legal Advice</li>
          <li>Intellectual Property Rights (Copyrights, Trade Marks, Patent) filings</li>
          <li>Training/Conferences/Workshops</li>
          <li>Seed Funding support</li>
          <li>Governmental Agency funding</li>
          <li>Networking and linkages with NIT Raipur Alumni for mentorship, funding expertise and market access</li>
          <li>Venture capitalists / Angels / Investors introductions and networking</li>
          <li>Showcasing incubated companies through networking and events</li>
          <li>Entrepreneurship meets</li>
          <li>Any other activity to support Innovation and Startup culture as deemed fit by ISC and NITRR-FIE</li>
        </ol>
      </>
    )
  },
  {
    id: 'mentoring',
    title: 'Mentoring and Advisory Services',
    image: '/uploads/2023/03/consulting-3055704_1280.jpg',
    bgVariant: 'peach',
    content: (
      <>
        <ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <li>Specialized mentors may be made available, based on demand, to the startups to assist with strategic areas or to provide project-oriented consultation. In such cases the mentor has to be compensated by the company either by equity sharing or by providing fees as per the mutual consent.</li>
          <li>An incubated company may avail the consulting services by empaneled professionals at their end. Hiring of any consultant from outside directly by the startup shall have to be paid directly with information to NITRR-FIE.</li>
        </ol>
      </>
    )
  },
  {
    id: 'assessment',
    title: 'Periodic Assessment',
    image: '/uploads/2023/03/business-g93e882de7_1280.jpg',
    bgVariant: 'blue',
    content: (
      <p>
        NITRR-FIE will evaluate the performance of startups, who will be required to submit information on a quarterly (every three months) basis in a prescribed format. Additionally, startups also need to submit their progress report to ISC, NIT Raipur. It is essential for the startups to satisfy minimum norms of progress to get the continued support.
      </p>
    )
  },
  {
    id: 'tenure',
    title: 'Tenure in Incubation Centre',
    image: '/uploads/2023/03/hourglass-620397_1280.jpg',
    bgVariant: 'peach',
    content: (
      <p>
        Companies will be permitted to stay in the incubation center, to begin with, for a period of 24 months that may be extended to another 12 (6+6) months after review at each stage. A nominal monthly charge, as fixed by the NITRR-FIE, will be levied to a company for this period of 36 months. NITRR-FIE may, at its own discretion, permit companies to extend their stay further for a maximum period of another 12 months.
      </p>
    )
  },
  {
    id: 'rent',
    title: 'Rent',
    image: '/uploads/2023/03/house-5902665_1280.jpg',
    bgVariant: 'blue',
    content: (
      <p>
        Rent for the office space to the startups will be fixed by the Board of Directors of NITRR-FIE and will be revised as per the market rate.
      </p>
    )
  },
  {
    id: 'exit',
    title: 'Exit Criteria',
    image: '/uploads/2023/03/light-box-1773916_1280.jpg',
    bgVariant: 'peach',
    content: (
      <>
        <p>Startups should leave the incubator under the following circumstances:</p>
        <ol style={{ listStyleType: 'lower-alpha', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '10px' }}>
          <li>Completion of stay for 36 months, unless the stay is extended by NITRR-FIE.</li>
          <li>Under performance of the startup: Criteria for the same will be decided and applied by the Board of Directors of NITRR-FIE on a case-to-case basis.</li>
          <li>A startup may exit at any time with a prior notice of 3 months and after clearance of all dues from NITRR-FIE and NIT Raipur.</li>
        </ol>
      </>
    )
  }
];

export default function PolicyProcedures() {
  const [activeSection, setActiveSection] = useState(policies[0].id);

  // Scroll Spy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-20% 0px -60% 0px', // Trigger when section occupies the upper-middle region
      threshold: 0
    };

    const handleIntersect = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersect, observerOptions);
    policies.forEach(p => {
      const el = document.getElementById(p.id);
      if (el) observer.observe(el);
    });

    return () => {
      policies.forEach(p => {
        const el = document.getElementById(p.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  return (
    <main>
      {/* Premium Hero Section */}
      <div className="policy-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/globe-gff8e62fca_1280.jpg')})` }}>
        <div className="policy-hero__content">
          <h1 className="policy-hero__title">Policy & Procedures</h1>
          <p className="policy-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="policy-hero__separator">&rsaquo;</span>
            <span>Governance</span>
            <span className="policy-hero__separator">&rsaquo;</span>
            <span style={{ color: 'var(--color-primary)' }}>Policies</span>
          </p>
        </div>
      </div>

      <section className="section" style={{ background: '#fafbfc' }}>
        <div className="container">
          
          <div className="policy-layout-container">
            {/* Sticky Sidebar Navigation (Scroll Spy Enabled) */}
            <aside className="policy-sidebar-nav">
              <h3>Policy Sections</h3>
              <ul className="policy-nav-list">
                {policies.map((p) => (
                  <li 
                    key={p.id} 
                    className={`policy-nav-item ${activeSection === p.id ? 'active' : ''}`}
                  >
                    <a 
                      href={`#${p.id}`} 
                      className={`policy-nav-link ${activeSection === p.id ? 'active' : ''}`}
                      onClick={(e) => {
                        e.preventDefault();
                        const el = document.getElementById(p.id);
                        if (el) {
                          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                          setActiveSection(p.id);
                        }
                      }}
                    >
                      {p.title}
                    </a>
                  </li>
                ))}
              </ul>
            </aside>

            {/* Content Display Area */}
            <div className="policy-sections-wrapper">
              
              {/* Introduction Banner Card */}
              <div className="policy-intro-card">
                <p>
                  NIT Raipur Foundation for Innovation and Entrepreneurship (NITRR-FIE) is a nonprofit, Section 8, company of NIT Raipur to promote innovation and entrepreneurship among all stakeholders. The NITRR-FIE acts as a Special Purpose Vehicle (SPV) to implement the incubation objectives most effectively [NISP 2.c, pp 12]. It provides a platform for start-ups by budding entrepreneurs and intrapreneurs to convert their innovative ideas into commercially viable products and services. It also provides services related to patenting and commercialization.
                </p>
              </div>

              {/* Mapped Policy Cards (Alternating Grids) */}
              {policies.map((p, index) => {
                const isEven = index % 2 === 1;
                return (
                  <section 
                    key={p.id} 
                    id={p.id} 
                    className="policy-section-card"
                  >
                    <div className={`policy-row ${isEven ? 'policy-row--even policy-row--blue' : 'policy-row--odd policy-row--peach'}`}>
                      {/* Content Section */}
                      <div className="policy-content-panel">
                        <h2 className="policy-card__title">{p.title}</h2>
                        <hr className="policy-card__divider" />
                        <div className="policy-card__text">
                          {p.content}
                        </div>
                      </div>

                      {/* Image Banner Section */}
                      <div className="policy-image-panel">
                        <img 
                          src={driveImageUrl(p.image)} 
                          alt={p.title} 
                          loading="lazy" 
                        />
                      </div>
                    </div>
                  </section>
                );
              })}

            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
