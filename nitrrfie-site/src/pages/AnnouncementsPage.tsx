import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import '../styles/pages.css';
import '../styles/announcements.css';

interface NoticeItem {
  id: string;
  date: string;
  title: string;
  category: 'Notice' | 'News';
  link?: string;
  content: string;
  imageLink?: string;
  buttonText?: string;
  applyLink?: string;
}

interface GvizCell {
  v: string | number | boolean | null;
  f?: string | null;
}

interface GvizRow {
  c: (GvizCell | null)[];
}

const categoryConfig = {
  Notice: { bg: '#fff1f2', color: '#e11d48', border: '#e11d48' },
  News: { bg: '#eff6ff', color: '#3b82f6', border: '#3b82f6' },
};

const ExternalIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

const getDirectImageLink = (url?: string) => {
  if (!url || url === 'null' || url === 'undefined' || url.trim() === '') return '';

  const fileIdMatch = url.match(/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)/) ||
                      url.match(/id=([a-zA-Z0-9_-]+)/) ||
                      url.match(/docs\.google\.com\/uc\?.*id=([a-zA-Z0-9_-]+)/);

  if (fileIdMatch && fileIdMatch[1]) {
    return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
  }

  return url;
};

const parseDateString = (dateStr: string): Date => {
  if (!dateStr) return new Date(0);

  // Handle Google Sheets gviz Date format: "Date(year, month, day)"
  if (dateStr.startsWith('Date(')) {
    const matches = dateStr.match(/Date\((\d+),(\d+),(\d+)\)/);
    if (matches) {
      const year = parseInt(matches[1], 10);
      const month = parseInt(matches[2], 10);
      const day = parseInt(matches[3], 10);
      return new Date(year, month, day);
    }
  }

  // Handle "dd/mm/yyyy" format
  const parts = dateStr.split('/');
  if (parts.length === 3) {
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1;
    const year = parseInt(parts[2], 10);
    return new Date(year, month, day);
  }

  const parsed = Date.parse(dateStr);
  return isNaN(parsed) ? new Date(0) : new Date(parsed);
};

const RECRUITMENT_NOTICE: NoticeItem = {
  id: 'recruitment-accountant-admin-2026',
  date: '28/07/2026',
  title: 'Recruitment Notice – Accountant cum Administrator',
  category: 'Notice',
  link: 'https://drive.google.com/file/d/1H8gAXvGf6nHMUvFWgnZbWYOqlLiWaUIl/view?usp=sharing',
  content: 'NITRRFIE invites online applications from eligible Indian nationals for the contractual position of Accountant cum Administrator. Candidates are advised to read the official recruitment notice carefully for details regarding eligibility, application process, important dates, and selection procedure before applying.',
  buttonText: 'View Official Notification (PDF)',
  applyLink: 'https://docs.google.com/forms/d/e/1FAIpQLSdLlQFvLldqrRen7kdhZ9C-F5il5BTwHzmU4FSGR8n1EUlN9g/viewform?usp=sharing&ouid=111435562742645601337',
};

export default function AnnouncementsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [notices, setNotices] = useState<NoticeItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const tabParam = searchParams.get('tab');
  const activeTab = (tabParam === 'Notice') ? 'Notice' : 'News';

  const openParam = searchParams.get('open');
  const selectedNotice = openParam ? notices.find(n => n.id === openParam) || null : null;

  const handleTabChange = (tab: 'News' | 'Notice') => {
    setSearchParams(prev => {
      prev.set('tab', tab);
      prev.delete('open');
      return prev;
    }, { replace: true });
  };

  const handleOpenNotice = (notice: NoticeItem) => {
    setSearchParams(prev => {
      prev.set('open', notice.id);
      return prev;
    }, { replace: true });
  };

  const handleCloseNotice = () => {
    setSearchParams(prev => {
      prev.delete('open');
      return prev;
    }, { replace: true });
  };

  useEffect(() => {
    const fetchSheetData = async () => {
      try {
        const sheetId = '1qUoxX0rGKa_rgIndjIOI1D7cJKK_g34ksVW4UQQsyxY';
        const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json`;

        const response = await fetch(url);
        const text = await response.text();

        const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
        if (!match) {
          throw new Error('Invalid response format from Google Sheets');
        }

        const data = JSON.parse(match[1]);
        const rows = (data.table.rows || []) as GvizRow[];

        const getCellValue = (cell: GvizCell | null | undefined): string => {
          if (!cell) return '';
          return cell.v !== null && cell.v !== undefined ? String(cell.v) : '';
        };

        const getCellFormattedValue = (cell: GvizCell | null | undefined): string => {
          if (!cell) return '';
          return cell.f !== null && cell.f !== undefined ? String(cell.f) : getCellValue(cell);
        };

        const parsed: NoticeItem[] = rows.map((row: GvizRow) => {
          const cells = row.c || [];
          const catRaw = cells[3] ? getCellValue(cells[3]).trim().toLowerCase() : '';
          const category = catRaw.includes('news') ? 'News' : 'Notice';
          const imgLinkRaw = cells[6] ? getCellValue(cells[6]) : '';

          return {
            id: cells[0] ? getCellValue(cells[0]) : '',
            date: cells[1] ? getCellFormattedValue(cells[1]) : '',
            title: cells[2] ? getCellValue(cells[2]) : '',
            category,
            link: cells[4] ? getCellValue(cells[4]) : '',
            content: cells[5] ? getCellValue(cells[5]) : '',
            imageLink: getDirectImageLink(imgLinkRaw),
          };
        });

        // Sort by date descending (latest first), then by ID descending as fallback
        const sorted = parsed.sort((a, b) => {
          const dateA = parseDateString(a.date);
          const dateB = parseDateString(b.date);
          if (dateA.getTime() !== dateB.getTime()) {
            return dateB.getTime() - dateA.getTime();
          }
          const idA = parseInt(a.id, 10) || 0;
          const idB = parseInt(b.id, 10) || 0;
          return idB - idA;
        });

        // Prepend our static recruitment notice
        setNotices([RECRUITMENT_NOTICE, ...sorted]);
      } catch (err: unknown) {
        console.error('Error fetching announcements:', err);
        setError('Failed to load announcements. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchSheetData();
  }, []);

  const filtered = notices.filter(n => n.category === activeTab);

  return (
    <main>
      <div
        className="announcements-hero"
        style={{ backgroundImage: "url('/uploads/2024/05/2023-01-17.jpg')" }}
      >
        <div className="announcements-hero__content">
          <span className="announcements-hero__eyebrow">News & Updates</span>
          <h1 className="announcements-hero__title">NITRRFIE Announcements</h1>
        </div>
      </div>

      <section className="section" style={{ background: '#fafbfc', paddingTop: '40px' }}>
        <div className="container">

          <div className="announcements-filters-wrapper">
            <div className="announcements-filters">
              <button
                className={`announcements-filter-btn ${activeTab === 'News' ? 'announcements-filter-btn--active' : ''}`}
                onClick={() => handleTabChange('News')}
              >
                NEWS
              </button>
              <button
                className={`announcements-filter-btn ${activeTab === 'Notice' ? 'announcements-filter-btn--active' : ''}`}
                onClick={() => handleTabChange('Notice')}
              >
                NOTICE
              </button>
            </div>
          </div>

          {loading ? (
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px', flexDirection: 'column', gap: '1rem' }}>
              <div className="announcements-spinner" />
              <span style={{ color: '#64748b', fontSize: '0.95rem', fontWeight: 500 }}>Loading announcements...</span>
            </div>
          ) : error ? (
            <div style={{ textAlign: 'center', padding: '40px', color: '#ef4444', fontSize: '1rem', fontWeight: 500 }}>
              {error}
            </div>
          ) : (
            <div className="news-grid">
              {filtered.length > 0 ? (
                filtered.map((n, i) => {
                  const cfg = categoryConfig[n.category];
                  const excerpt = n.content.length > 120 ? n.content.substring(0, 120) + '...' : n.content;

                  return (
                    <div
                      key={i}
                      className="news-card"
                      onClick={() => handleOpenNotice(n)}
                    >
                      <div className="news-card__image-wrapper">
                        {n.imageLink ? (
                          <img src={n.imageLink} alt={n.title} className="news-card__image" />
                        ) : (
                          <div className="news-card__image-placeholder" style={{ background: `linear-gradient(135deg, ${cfg.border}20 0%, ${cfg.border}05 100%)` }}>
                            <span className="news-card__placeholder-logo">NITRRFIE</span>
                            <span className="news-card__placeholder-text">{n.category.toUpperCase()}</span>
                          </div>
                        )}
                        <span
                          className="news-card__badge"
                          style={{ background: cfg.bg, color: cfg.color, border: `1px solid ${cfg.border}30` }}
                        >
                          {n.category}
                        </span>
                      </div>

                      <div className="news-card__body">
                        <div className="news-card__date">{n.date}</div>
                        <h3 className="news-card__title">{n.title}</h3>
                        <p className="news-card__excerpt">{excerpt}</p>
                        <div className="news-card__footer">
                          <span className="news-card__readmore" style={{ color: cfg.border }}>
                            Read Post
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="news-card__arrow">
                              <line x1="5" y1="12" x2="19" y2="12"></line>
                              <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="news-empty">
                  No updates found in this category.
                </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Modal Popup Overlay */}
      {selectedNotice && (
        <div className="announcements-modal-overlay" onClick={handleCloseNotice}>
          <div className="announcements-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="announcements-modal-close" onClick={handleCloseNotice}>&times;</button>

            <div className="announcements-modal-header">
              <span className="announcements-modal-date">{selectedNotice.date}</span>
              <span
                className="announcements-modal-badge"
                style={{
                  background: categoryConfig[selectedNotice.category].bg,
                  color: categoryConfig[selectedNotice.category].color
                }}
              >
                {selectedNotice.category}
              </span>
            </div>

            <h2 className="announcements-modal-title">{selectedNotice.title}</h2>

            {selectedNotice.imageLink && (
              <div className="announcements-modal-image-wrapper">
                <img
                  src={selectedNotice.imageLink}
                  alt={selectedNotice.title}
                  className="announcements-modal-image"
                />
              </div>
            )}

            <div className="announcements-modal-body">
              <p>{selectedNotice.content}</p>
            </div>

            {(selectedNotice.link || selectedNotice.applyLink) && (
              <div className="announcements-modal-actions" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                {selectedNotice.link && (
                  selectedNotice.link.startsWith('http') ? (
                    <a
                      href={selectedNotice.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--outline announcements-modal-btn"
                      style={{ color: 'var(--color-primary)', border: '2px solid var(--color-primary)' }}
                    >
                      {selectedNotice.buttonText || 'Visit Link'}
                      <ExternalIcon />
                    </a>
                  ) : (
                    <Link
                      to={selectedNotice.link}
                      className="btn btn--outline announcements-modal-btn"
                      onClick={handleCloseNotice}
                      style={{ color: 'var(--color-primary)', border: '2px solid var(--color-primary)' }}
                    >
                      Learn More
                    </Link>
                  )
                )}
                {selectedNotice.applyLink && (
                  <a
                    href={selectedNotice.applyLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn--primary announcements-modal-btn"
                  >
                    Apply Now
                    <ExternalIcon />
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </main>
  );
}