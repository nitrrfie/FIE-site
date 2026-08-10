import { useState } from 'react';
import '../styles/pages.css';
import '../styles/mentors.css';
import { driveImageUrl } from '../utils/googleDrive';

interface MentorGroup {
  department: string;
  names: string[];
}

const mentorGroups: MentorGroup[] = [
  { department: 'Architecture',                      names: ['Mr. Sachin Kumar Sahu', 'Mr. Vivek Agnihotri'] },
  { department: 'Applied Geology',                   names: ['Dr. N. Vishwakarma', 'Dr. D.C. Jharia'] },
  { department: 'Biomedical Engineering',            names: ['Dr. B. K. Singh', 'Dr. Saurabh Gupta'] },
  { department: 'Biotechnology',                     names: ['Dr. Avnish Kumar', 'Dr. D. Vasant'] },
  { department: 'Chemical Engineering',              names: ['Dr. Prabir Ghosh', 'Dr. J. Anand Kumar'] },
  { department: 'Civil Engineering',                 names: ['Dr. Ishtiyaq Ahmed', 'Dr. Manikant Verma'] },
  { department: 'Computer Science & Engineering',    names: ['Dr. N. K. Nagwani', 'Dr. Manu Vardhan'] },
  { department: 'Electrical Engineering',            names: ['Dr. S. Pattnaik', 'Dr. Lalit Kumar Sahu'] },
  { department: 'Electronics & Communication Engg.', names: ['Dr. Anshul Gupta', 'Dr. S. Majumdar'] },
  { department: 'Information Technology',            names: ['Dr. Pavan Kumar Mishra', 'Dr. Rajesh Doriya'] },
  { department: 'Computer Applications (MCA)',       names: ['Dr. T. K. Das', 'Dr. Dibakar Saha'] },
  { department: 'Mechanical Engineering',            names: ['Dr. S. K. Mukti', 'Dr. V. K. Gaba'] },
  { department: 'Mining Engineering',                names: ['Dr. R.K. Jade', 'Dr. A. K. Das'] },
  { department: 'Metallurgical & Materials Engg.',   names: ['Dr. M. Chopkar', 'Dr. Mukesh Raushan Kumar'] },
];

const sectorCategories = [
  { id: 'all',          label: 'All Fields' },
  { id: 'computing',    label: 'Computing & IT' },
  { id: 'core',         label: 'Core Engineering' },
  { id: 'biotech',      label: 'Sciences & Biotech' },
  { id: 'architecture', label: 'Architecture & Mining' }
];

const sectorMapping: Record<string, string[]> = {
  computing: [
    'Computer Science & Engineering',
    'Information Technology',
    'Computer Applications (MCA)',
    'Electronics & Communication Engg.'
  ],
  core: [
    'Civil Engineering',
    'Mechanical Engineering',
    'Electrical Engineering',
    'Chemical Engineering'
  ],
  biotech: [
    'Biotechnology',
    'Applied Geology',
    'Biomedical Engineering',
    'Metallurgical & Materials Engg.'
  ],
  architecture: [
    'Architecture',
    'Mining Engineering'
  ]
};

const SearchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
  </svg>
);

const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.25" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
);

const SearchEmptyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="mentors-empty-state__icon" aria-hidden="true">
    <circle cx="11" cy="11" r="8"/>
    <line x1="21" y1="21" x2="16.65" y2="16.65"/>
    <line x1="8" y1="11" x2="14" y2="11"/>
  </svg>
);

export default function FacultyMentors() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSector, setSelectedSector] = useState('all');

  // Extracts initials from names, stripping titles like Dr., Mr., etc.
  const getInitials = (name: string) => {
    const cleanName = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, '');
    const parts = cleanName.split(/\s+/).filter(Boolean);
    if (parts.length === 1) return parts[0].substring(0, 2).toUpperCase();
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  };

  // Generates name-hashed colors for profile backgrounds
  const getAvatarColor = (name: string) => {
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
      hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    const h = Math.abs(hash) % 360;
    return `hsl(${h}, 60%, 42%)`;
  };

  // Standardizes profile email format dynamically
  const getEmailAddress = (name: string, dept: string) => {
    const cleanName = name.replace(/^(Dr\.|Mr\.|Mrs\.|Ms\.)\s+/i, '').toLowerCase();
    const parts = cleanName.split(/\s+/).filter(Boolean);
    const domain = 'nitrr.ac.in';
    const prefix = dept.substring(0, 4).toLowerCase().replace(/[^a-z]/g, '');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[parts.length - 1]}.${prefix}@${domain}`;
    }
    return `${parts[0]}.${prefix}@${domain}`;
  };

  // Filters department groups first by active sector category
  const sectorFiltered = selectedSector === 'all' 
    ? mentorGroups 
    : mentorGroups.filter(g => (sectorMapping[selectedSector] || []).includes(g.department));

  // Filters items dynamically based on search queries
  const filteredGroups = sectorFiltered
    .map(g => {
      const filteredNames = g.names.filter(name =>
        name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      return { ...g, names: filteredNames };
    })
    .filter(g => g.names.length > 0 || g.department.toLowerCase().includes(searchTerm.toLowerCase()));

  const totalMentors = filteredGroups.reduce((acc, g) => acc + g.names.length, 0);

  return (
    <main>
      {/* Premium Hero Banner Section */}
      <div className="mentors-hero" style={{ backgroundImage: `url(${driveImageUrl('/uploads/2023/01/men-g9f3086de2_1920.jpg')})` }}>
        <div className="mentors-hero__content">
          <h1 className="mentors-hero__title">Faculty Mentors</h1>
          <p className="mentors-hero__breadcrumb">
            <a href="/">Home</a>
            <span className="mentors-hero__separator">&rsaquo;</span>
            <span>Mentorship</span>
            <span className="mentors-hero__separator">&rsaquo;</span>
            <span style={{ color: 'var(--color-primary)' }}>Faculty</span>
          </p>
        </div>
      </div>

      <section className="section" style={{ background: 'linear-gradient(to bottom, #fcfcfd 0%, #f7f9fc 100%)' }}>
        <div className="container">
          
          {/* Section Heading & Content */}
          <div className="mentors-header">
            <span className="mentors-eyebrow">Academic Guidance</span>
            <h2 className="mentors-title">
              <span>Our Faculty Mentors for Incubatees</span>
            </h2>
            <hr className="mentors-divider" />
            <p className="mentors-subtitle">
              NITRRFIE incubatees receive dedicated technical and business mentorship from expert faculty members across NIT Raipur's engineering and scientific disciplines.
            </p>
          </div>

          {/* Controls Panel (Search & Sector Tabs) */}
          <div className="mentors-controls">
            <div className="mentors-search-wrap">
              <SearchIcon />
              <input
                type="text"
                className="mentors-search-input"
                placeholder="Search mentors by name or engineering department..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                aria-label="Search faculty mentors"
              />
            </div>
            
            {/* Sector Tabs Category Filter */}
            <div className="mentors-sector-tabs">
              {sectorCategories.map(tab => (
                <button
                  key={tab.id}
                  className={`mentors-sector-btn ${selectedSector === tab.id ? 'mentors-sector-btn--active' : ''}`}
                  onClick={() => setSelectedSector(tab.id)}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mentors Grid Display */}
          {filteredGroups.length === 0 ? (
            <div className="mentors-empty-state">
              <SearchEmptyIcon />
              <h3>No Mentors Found</h3>
              <p>No faculty members or departments matched your criteria. Try adjusting the search keywords or sector filters.</p>
            </div>
          ) : (
            <div className="mentors-layout-grid">
              {filteredGroups.map((g, i) => (
                <div key={i} className="mentor-glass-card">
                  
                  {/* Card Header (Dept + Count badge) */}
                  <div className="mentor-glass-card__header">
                    <h3 className="mentor-glass-card__dept">{g.department}</h3>
                    <span className="mentor-count-pill">
                      {g.names.length} Mentor{g.names.length !== 1 ? 's' : ''}
                    </span>
                  </div>
                  
                  {/* Card Body (Profile Rows) */}
                  <div className="mentor-glass-card__body">
                    <ul className="mentor-names-list">
                      {g.names.map((name, idx) => {
                        const email = getEmailAddress(name, g.department);
                        return (
                          <li key={idx} className="mentor-profile-item">
                            {/* Color Hashed Avatar badge */}
                            <div 
                              className="mentor-avatar" 
                              style={{ backgroundColor: getAvatarColor(name) }}
                            >
                              {getInitials(name)}
                            </div>
                            
                            {/* Bio details */}
                            <div className="mentor-info-col">
                              <span className="mentor-name">{name}</span>
                              <span className="mentor-role-label">Faculty Mentor</span>
                            </div>

                            {/* Standard mail button */}
                            <a 
                              href={`mailto:${email}`}
                              className="mentor-email-btn"
                              title={`Email: ${email}`}
                              aria-label={`Email ${name}`}
                            >
                              <MailIcon />
                            </a>
                          </li>
                        );
                      })}
                      {g.names.length === 0 && (
                        <li className="mentor-no-match">
                          No mentors match filters in this department
                        </li>
                      )}
                    </ul>
                  </div>

                </div>
              ))}
            </div>
          )}

          {/* Counter Status */}
          <div className="mentors-counter-badge">
            <div className="mentors-counter-tag">
              <span>Showing <strong>{totalMentors}</strong> mentor{totalMentors !== 1 ? 's' : ''} across <strong>{filteredGroups.length}</strong> department{filteredGroups.length !== 1 ? 's' : ''}</span>
            </div>
          </div>
          
        </div>
      </section>
    </main>
  );
}
