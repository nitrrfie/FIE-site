import { useState, useEffect, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import '../styles/pages.css';
import '../styles/events-page.css';

interface EventItem {
  id: string;
  date: string;        // YYYY-MM-DD
  displayDate: string; // dd/mm/yyyy
  title: string;
  time: string;
  mode: string;        // "Online" | "Offline"
  venueOrLink: string; // address if offline, meet link if online
  description: string;
  navLink: string;
  rawDate: Date;
}

interface GvizCell {
  v: string | number | boolean | null;
  f?: string | null;
}

interface GvizRow {
  c: (GvizCell | null)[];
}

const SHEET_ID = import.meta.env.VITE_SHEET_ID || '1GVbcWInF5O85i-nPmvc2F2iJaYLSnveysaW8FxnS568';

const getCellStr = (cell: GvizCell | null | undefined): string => {
  if (!cell || cell.v === null || cell.v === undefined) return '';
  return cell.f ? String(cell.f) : String(cell.v);
};

const parseDDMMYYYY = (raw: string): Date => {
  if (!raw) return new Date(0);
  const gvizMatch = raw.match(/Date\((\d+),(\d+),(\d+)\)/);
  if (gvizMatch) {
    return new Date(+gvizMatch[1], +gvizMatch[2], +gvizMatch[3]);
  }
  const parts = raw.split('/');
  if (parts.length === 3) {
    return new Date(+parts[2], +parts[1] - 1, +parts[0]);
  }
  return new Date(raw);
};

const toYYYYMMDD = (d: Date): string => {
  if (isNaN(d.getTime())) return '';
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
};

export default function EventsPage() {
  const navigate = useNavigate();
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const todayStr = useMemo(() => toYYYYMMDD(new Date()), []);

  useEffect(() => {
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Events`;

    fetch(url)
      .then(r => r.text())
      .then(text => {
        const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
        if (!match) throw new Error('Invalid response format from Google Sheets');
        const data = JSON.parse(match[1]);
        const rows: GvizRow[] = data?.table?.rows ?? [];

        const parsed: EventItem[] = rows
          .map((row): EventItem | null => {
            const cells = row.c ?? [];
            const rawDateStr = getCellStr(cells[1]);
            const rawDate = parseDDMMYYYY(rawDateStr);
            if (isNaN(rawDate.getTime())) return null;
            const dateStr = toYYYYMMDD(rawDate);
            const dd = String(rawDate.getDate()).padStart(2, '0');
            const mm = String(rawDate.getMonth() + 1).padStart(2, '0');
            const yyyy = String(rawDate.getFullYear());
            return {
              id: getCellStr(cells[0]) || dateStr,
              date: dateStr,
              displayDate: `${dd}/${mm}/${yyyy}`,
              title: getCellStr(cells[2]),
              time: getCellStr(cells[3]),
              mode: getCellStr(cells[4]),
              venueOrLink: getCellStr(cells[5]),
              description: getCellStr(cells[6]),
              navLink: getCellStr(cells[7]),
              rawDate,
            };
          })
          .filter((e): e is EventItem => e !== null);

        setEvents(parsed);
      })
      .catch(err => {
        console.error('Events page fetch error:', err);
        setError('Failed to load events. Please try again later.');
      })
      .finally(() => setLoading(false));
  }, []);

  // Split events into upcoming and past
  const { upcoming, past } = useMemo(() => {
    const up: EventItem[] = [];
    const pt: EventItem[] = [];
    events.forEach(ev => {
      if (ev.date >= todayStr) {
        up.push(ev);
      } else {
        pt.push(ev);
      }
    });
    // Sort upcoming ascending (soonest first)
    up.sort((a, b) => a.date.localeCompare(b.date));
    // Sort past descending (most recent first)
    pt.sort((a, b) => b.date.localeCompare(a.date));
    return { upcoming: up, past: pt };
  }, [events, todayStr]);

  const handleCardClick = (ev: EventItem) => {
    if (ev.navLink) {
      if (ev.navLink.startsWith('http')) {
        window.open(ev.navLink, '_blank', 'noopener,noreferrer');
      } else {
        navigate(ev.navLink);
      }
    }
  };

  const renderCard = (ev: EventItem, isPast: boolean) => {
    const dateParts = ev.displayDate.split('/');
    const day = dateParts[0] ?? '—';
    const mon = ev.rawDate.toLocaleDateString('en-US', { month: 'short' });
    const yr = dateParts[2] ?? '';

    return (
      <div
        key={ev.id}
        className={`events-page-card ${isPast ? 'events-page-card--past' : ''}`}
        onClick={() => handleCardClick(ev)}
        role="button"
        tabIndex={0}
        onKeyDown={e => e.key === 'Enter' && handleCardClick(ev)}
      >
        <div className="events-page-card__date">
          <span className="events-page-card__day">{day}</span>
          <span className="events-page-card__month">{mon}</span>
          <span className="events-page-card__year">{yr}</span>
        </div>
        <div className="events-page-card__body">
          <div className="events-page-card__tags">
            <span className="events-page-card__tag">Event</span>
            <span className={`events-page-card__mode-tag events-page-card__mode-tag--${ev.mode?.toLowerCase() === 'online' ? 'online' : ev.mode?.toLowerCase() === 'offline' ? 'offline' : 'hybrid'}`}>
              {ev.mode || 'Offline'}
            </span>
            {isPast && <span className="events-page-card__status-tag">Completed</span>}
          </div>
          <h3 className="events-page-card__title">{ev.title}</h3>
          
          <div className="events-page-card__meta">
            {ev.time && (
              <div className="events-page-card__meta-item">
                <svg className="events-page-card__meta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                </svg>
                <span>{ev.time}</span>
              </div>
            )}
            {ev.venueOrLink && (() => {
              const modeLower = ev.mode?.toLowerCase() || '';
              const isOnline = modeLower === 'online';
              const isHybrid = modeLower === 'hybrid' || modeLower === 'both' || modeLower.includes('hybrid');

              if (isHybrid) {
                const parts = ev.venueOrLink.split(/[|;\n]+/);
                const venueStr = parts[0]?.trim();
                const linkStr = parts[1]?.trim();
                return (
                  <>
                    {venueStr && (
                      <div className="events-page-card__meta-item">
                        <svg className="events-page-card__meta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
                          <circle cx="12" cy="10" r="3"/>
                        </svg>
                        <span>{venueStr}</span>
                      </div>
                    )}
                    {linkStr && (
                      <div className="events-page-card__meta-item">
                        <svg className="events-page-card__meta-icon events-page-card__meta-icon--green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                          <path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                        </svg>
                        <a href={linkStr} target="_blank" rel="noopener noreferrer" className="events-page-card__link" onClick={e => e.stopPropagation()}>
                          Join Online
                        </a>
                      </div>
                    )}
                  </>
                );
              }

              if (isOnline) {
                return (
                  <div className="events-page-card__meta-item">
                    <svg className="events-page-card__meta-icon events-page-card__meta-icon--green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
                    </svg>
                    <a href={ev.venueOrLink} target="_blank" rel="noopener noreferrer" className="events-page-card__link" onClick={e => e.stopPropagation()}>
                      Google Meet Link
                    </a>
                  </div>
                );
              }

              return (
                <div className="events-page-card__meta-item">
                  <svg className="events-page-card__meta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                  <span>{ev.venueOrLink}</span>
                </div>
              );
            })()}
          </div>
          <p className="events-page-card__desc">{ev.description}</p>
        </div>
      </div>
    );
  };

  return (
    <main className="events-page-wrap">
      <div className="page-hero" style={{ backgroundImage: "url('/uploads/2024/05/2023-01-17.jpg')" }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <div className="page-hero__breadcrumb">
            <Link to="/">Home</Link> / <span>Events</span>
          </div>
          <h1 className="page-hero__title">Institute Events & Seminars</h1>
        </div>
      </div>

      <section className="section events-page-body">
        <div className="container">
          {loading ? (
            <div className="events-page-loading">
              <div className="events-page-spinner" />
              <span>Loading events calendar...</span>
            </div>
          ) : error ? (
            <div className="events-page-error">{error}</div>
          ) : (
            <div className="events-sections-grid">
              
              {/* Upcoming Events Section */}
              <div className="events-section">
                <h2 className="events-section-title">Upcoming Events</h2>
                {upcoming.length > 0 ? (
                  <div className="events-page-grid">
                    {upcoming.map(ev => renderCard(ev, false))}
                  </div>
                ) : (
                  <div className="events-page-empty-box">
                    No upcoming events scheduled at the moment. Please check back later.
                  </div>
                )}
              </div>

              {/* Past Events Section */}
              <div className="events-section">
                <h2 className="events-section-title">Past Events</h2>
                {past.length > 0 ? (
                  <div className="events-page-grid">
                    {past.map(ev => renderCard(ev, true))}
                  </div>
                ) : (
                  <div className="events-page-empty-box">
                    No past events recorded.
                  </div>
                )}
              </div>

            </div>
          )}
        </div>
      </section>
    </main>
  );
}
