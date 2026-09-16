import '../styles/pages.css';
import '../styles/inner-pages.css';
import { driveImageUrl } from '../utils/googleDrive';

interface Member {
  name: string;
  role: string;
  email?: string;
  image: string;
  profileLink?: string;
}

const directors: Member[] = [
  {
    name: 'Dr. N. V. Ramana Rao',
    role: 'Board of Director',
    email: 'director@nitrr.ac.in',
    image: '/uploads/2023/08/Dr.-N.-V.-Ramana-Rao.jpg',
    profileLink: 'https://nitrr.ac.in/director.php',
  },
  {
    name: 'Dr. Samir Bajpai',
    role: 'Board of Director',
    email: 'head.cdc@nitrr.ac.in',
    image: '/uploads/2023/03/Prof.Bajapi.jpg',
    profileLink: 'https://nitrr.ac.in/fac_profile/Samir%20Bajpai%20Updated%20Resume%202023.pdf',
  },
];

const inCharges: Member[] = [
  {
    name: 'Dr. Anuj Kumar Shukla',
    role: 'Professor In-Charge, Incubation Cell',
    email: 'akshukla.me@nitrr.ac.in',
    image: '/uploads/2023/03/Dr.-Anuj-Shukla.jpg',
    profileLink: 'https://nitrr.ac.in/viewdetails.php?q=mech.akshukla',
  },
  {
    name: 'Mr. Pawan Kataria',
    role: 'Assistant Registrar, NIT Raipur',
    email: 'pkataria.ar@nitrr.ac.in',
    image: '/uploads/2023/03/Pawan-kataria.jpg',
    profileLink: 'https://www.linkedin.com/in/thepawankataria/',
  },
];

const teamMembers: Member[] = [
  {
    name: 'Ms. Medha Singh',
    role: 'CEO',
    image: '/uploads/2025/09/Ms.-Medha-Singh-CEO-NITRRFIE-e1758263347679.jpeg',
  },
  {
    name: 'Mr. Sunil Dewangan',
    role: 'Incubation Manager',
    image: '/uploads/2024/09/SUNIL-DEWANGAN.jpg',
  },
  {
    name: 'Ms. Sonali Joshi',
    role: 'Accountant',
    image: '/uploads/SONALI-JOSHI.jpeg',
  },
  {
    name: 'Mr. Naresh Kumar',
    role: 'Hardware Engineer',
    image: '/uploads/naresh_kumar.jpeg',
  },
];

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

function MemberCard({ m }: { m: Member }) {
  return (
    <div className="team-card animate-scale-up">
      <div className="team-card__avatar">
        <img
          src={driveImageUrl(m.image)}
          alt={m.name}
          onError={(e) => { (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp'; }}
          loading="lazy"
        />
      </div>
      <div className="team-card__body">
        <h3 className="team-card__name">{m.name}</h3>
        <p className="team-card__role">{m.role}</p>
        {m.email && (
          <a href={`mailto:${m.email}`} className="team-card__email">{m.email}</a>
        )}
        {m.profileLink && (
          <a
            href={m.profileLink}
            target="_blank"
            rel="noopener noreferrer"
            className="team-card__profile-link"
          >
            View Profile <ExternalIcon />
          </a>
        )}
      </div>
    </div>
  );
}

export default function Administration() {
  return (
    <main>
      {/* Page Hero */}
      <div className="page-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/03/pexels-pixabay-260689.jpg')})` }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title">Administration</h1>
          <p className="page-hero__breadcrumb">
            <a href="/">Home</a> &rsaquo; About &rsaquo; Administration
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'var(--color-bg)', padding: '60px 0' }}>
        <div className="container">
          <div className="section-header section-header--center" style={{ marginBottom: '60px' }}>
            <span className="section-eyebrow">NITRRFIE Leadership</span>
            <h2 className="section-title--lg">Meet the Team</h2>
            <hr className="section-divider section-divider--center" />
          </div>

          {/* Board of Directors */}
          <div className="admin-group">
            <h3 className="admin-group__heading">Board of Directors</h3>
            <hr className="admin-group__divider" />
            <div className="team-grid team-grid--cols-2">
              {directors.map((m, i) => <MemberCard key={i} m={m} />)}
            </div>
          </div>

          {/* Incubation & Administrative Leadership */}
          <div className="admin-group">
            <h3 className="admin-group__heading">Incubation &amp; Administrative Leadership</h3>
            <hr className="admin-group__divider" />
            <div className="team-grid team-grid--cols-2">
              {inCharges.map((m, i) => <MemberCard key={i} m={m} />)}
            </div>
          </div>

          {/* Team NITRRFIE */}
          <div className="admin-group">
            <h3 className="admin-group__heading">Team NITRRFIE</h3>
            <hr className="admin-group__divider" />
            <div className="team-grid team-grid--cols-4">
              {teamMembers.map((m, i) => <MemberCard key={i} m={m} />)}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
