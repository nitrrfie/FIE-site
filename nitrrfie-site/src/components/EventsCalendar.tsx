import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import '../styles/calendar.css';

/* ── Types ── */
interface EventItem {
  id: string;
  date: string;        // YYYY-MM-DD (normalised from Sheet)
  displayDate: string; // dd/mm/yyyy (raw from Sheet, for display)
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

/* ── Helpers ── */
const SHEET_ID = import.meta.env.VITE_SHEET_ID as string;

const getCellStr = (cell: GvizCell | null | undefined): string => {
  if (!cell || cell.v === null || cell.v === undefined) return '';
  return cell.f ? String(cell.f) : String(cell.v);
};

const parseDDMMYYYY = (raw: string): Date => {
  if (!raw) return new Date(0);
  // Handle Google gviz Date(...) format
  const gvizMatch = raw.match(/Date\((\d+),(\d+),(\d+)\)/);
  if (gvizMatch) {
    return new Date(+gvizMatch[1], +gvizMatch[2], +gvizMatch[3]);
  }
  // Handle dd/mm/yyyy
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

const todayYYYYMMDD = (): string => toYYYYMMDD(new Date());

/* ── Component ── */
export default function EventsCalendar() {
  const todayStr = useMemo(() => todayYYYYMMDD(), []);

  // Calendar navigation state — default to current real month
  const [viewDate, setViewDate] = useState(() => {
    const d = new Date();
    return new Date(d.getFullYear(), d.getMonth(), 1);
  });
  const [selectedDay, setSelectedDay] = useState<string>(todayStr);

  // Events data
  const [events, setEvents] = useState<EventItem[]>([]);
  const [loading, setLoading] = useState(!!SHEET_ID);

  const viewYear = viewDate.getFullYear();
  const viewMonth = viewDate.getMonth();

  /* ── Fetch events from Sheet2 ── */
  useEffect(() => {
    if (!SHEET_ID) return;
    const url = `https://docs.google.com/spreadsheets/d/${SHEET_ID}/gviz/tq?tqx=out:json&sheet=Events`;


    fetch(url)
      .then(r => r.text())
      .then(text => {
        const match = text.match(/google\.visualization\.Query\.setResponse\(([\s\S]*?)\);/);
        if (!match) return;
        const data = JSON.parse(match[1]);
        const rows: GvizRow[] = data?.table?.rows ?? [];

        const parsed: EventItem[] = rows
          .map((row): EventItem | null => {
            const cells = row.c ?? [];
            const rawDateStr = getCellStr(cells[1]);
            const rawDate = parseDDMMYYYY(rawDateStr);
            if (isNaN(rawDate.getTime())) return null;
            const dateStr = toYYYYMMDD(rawDate);
            // Build formatted display date dd/mm/yyyy
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
          .filter((e): e is EventItem => e !== null)
          .sort((a, b) => a.date.localeCompare(b.date));

        setEvents(parsed);
      })
      .catch(err => console.error('Events fetch error:', err))
      .finally(() => setLoading(false));
  }, []);

  /* ── Calendar grid ── */
  const calendarCells = useMemo(() => {
    const firstDay = new Date(viewYear, viewMonth, 1);
    const raw = firstDay.getDay();
    const offset = raw === 0 ? 6 : raw - 1; // Mon-indexed
    const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
    const daysInPrev = new Date(viewYear, viewMonth, 0).getDate();

    const cells: { date: Date; isCurrentMonth: boolean; ds: string }[] = [];

    for (let i = offset - 1; i >= 0; i--) {
      const d = new Date(viewYear, viewMonth - 1, daysInPrev - i);
      cells.push({ date: d, isCurrentMonth: false, ds: toYYYYMMDD(d) });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      const d = new Date(viewYear, viewMonth, i);
      cells.push({ date: d, isCurrentMonth: true, ds: toYYYYMMDD(d) });
    }
    const rem = 42 - cells.length;
    for (let i = 1; i <= rem; i++) {
      const d = new Date(viewYear, viewMonth + 1, i);
      cells.push({ date: d, isCurrentMonth: false, ds: toYYYYMMDD(d) });
    }
    return cells;
  }, [viewYear, viewMonth]);

  /* ── Event lookup by date ── */
  const eventsByDate = useMemo(() => {
    const map: Record<string, EventItem[]> = {};
    events.forEach(ev => {
      if (!map[ev.date]) map[ev.date] = [];
      map[ev.date].push(ev);
    });
    return map;
  }, [events]);

  /* ── Upcoming events (today onwards) ── */
  const upcomingEvents = useMemo(
    () => events.filter(ev => ev.date >= todayStr),
    [events, todayStr]
  );

  /* ── Get exactly 3 highlights, starting with selected day's events ── */
  const highlightEvents = useMemo(() => {
    const list: EventItem[] = [];

    // 1. Add events on the selected day
    const selectedEvs = eventsByDate[selectedDay] || [];
    selectedEvs.forEach(ev => list.push(ev));

    // 2. Fill with upcoming events not on the selected day
    const filteredUpcoming = upcomingEvents.filter(ev => ev.date !== selectedDay);
    for (let i = 0; i < filteredUpcoming.length && list.length < 3; i++) {
      list.push(filteredUpcoming[i]);
    }

    // 3. Fallback to past events if we still don't have 3 slots filled
    if (list.length < 3) {
      const pastFiltered = events.filter(
        ev => ev.date !== selectedDay && ev.date < todayStr
      );
      // Sort past descending so we get the most recent past events first
      const sortedPast = [...pastFiltered].sort((a, b) => b.date.localeCompare(a.date));
      for (let i = 0; i < sortedPast.length && list.length < 3; i++) {
        list.push(sortedPast[i]);
      }
    }

    return list.slice(0, 3);
  }, [events, eventsByDate, selectedDay, upcomingEvents, todayStr]);

  /* ── Handlers ── */
  const MONTHS = ['January','February','March','April','May','June','July','August','September','October','November','December'];
  const YEARS = [2025, 2026, 2027, 2028];

  const handleCellClick = (ds: string) => {
    setSelectedDay(ds);
  };


  /* ── Render helpers ── */
  const renderVenue = (ev: EventItem) => {
    const isOnline = ev.mode?.toLowerCase() === 'online';
    if (!ev.venueOrLink) return null;
    if (isOnline) {
      return (
        <div className="cal-ev-meta-row">
          <svg className="cal-ev-meta-icon cal-ev-meta-icon--green" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
            <path d="M15 10l4.553-2.07A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
          </svg>
          <a href={ev.venueOrLink} target="_blank" rel="noopener noreferrer" className="cal-ev-link" onClick={e => e.stopPropagation()}>
            Join Online
          </a>
        </div>
      );
    }
    return (
      <div className="cal-ev-meta-row">
        <svg className="cal-ev-meta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path d="M12 2a8 8 0 00-8 8c0 5.25 8 12 8 12s8-6.75 8-12a8 8 0 00-8-8z"/>
          <circle cx="12" cy="10" r="3"/>
        </svg>
        <span>{ev.venueOrLink}</span>
      </div>
    );
  };

  return (
    <section className="section calendar-section">
      <div className="container">
        <div className="calendar-grid-layout">

          {/* ── LEFT: Calendar ── */}
          <div className="calendar-col-main">
            {/* Header */}
            <div className="calendar-header-wrap">
              <h2 className="calendar-section-title">Institute Events</h2>
              <div className="calendar-controls">
                <button className="calendar-btn-nav" onClick={() => setViewDate(new Date(viewYear, viewMonth - 1, 1))} aria-label="Previous month">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="15 18 9 12 15 6"/></svg>
                </button>
                <button className="calendar-btn-nav" onClick={() => setViewDate(new Date(viewYear, viewMonth + 1, 1))} aria-label="Next month">
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><polyline points="9 18 15 12 9 6"/></svg>
                </button>
                <button className="calendar-btn-today" onClick={() => { const n = new Date(); setViewDate(new Date(n.getFullYear(), n.getMonth(), 1)); setSelectedDay(todayStr); }}>
                  Today
                </button>
                <div className="calendar-dropdowns">
                  <select value={viewMonth} onChange={e => setViewDate(new Date(viewYear, +e.target.value, 1))} className="calendar-select">
                    {MONTHS.map((m, i) => <option key={i} value={i}>{m}</option>)}
                  </select>
                  <select value={viewYear} onChange={e => setViewDate(new Date(+e.target.value, viewMonth, 1))} className="calendar-select">
                    {YEARS.map(y => <option key={y} value={y}>{y}</option>)}
                  </select>
                </div>
              </div>
            </div>

            {/* Calendar grid card */}
            <div className="calendar-card">
              <div className="calendar-month-banner">{MONTHS[viewMonth]} {viewYear}</div>
              <div className="calendar-days-header">
                {['MON','TUE','WED','THU','FRI','SAT','SUN'].map(d => <div key={d} className="calendar-day-label">{d}</div>)}
              </div>
              <div className="calendar-days-grid">
                {calendarCells.map(cell => {
                  const dayEvs = eventsByDate[cell.ds] ?? [];
                  const isSelected = cell.ds === selectedDay;
                  const isToday = cell.ds === todayStr;
                  return (
                    <button
                      key={cell.ds}
                      onClick={() => handleCellClick(cell.ds)}
                      className={[
                        'calendar-cell',
                        !cell.isCurrentMonth && 'calendar-cell--inactive',
                        isSelected && 'calendar-cell--selected',
                        isToday && 'calendar-cell--today',
                        dayEvs.length > 0 && 'calendar-cell--has-events',
                      ].filter(Boolean).join(' ')}
                    >
                      <span className="calendar-cell-num">{cell.date.getDate()}</span>
                      {dayEvs.length > 0 && <span className="calendar-cell-badge" />}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* ── RIGHT: Highlights ── */}
          <div className="calendar-col-side">
            {/* Side header with View All button */}
            <div className="calendar-side-header">
              <h2 className="calendar-section-title">Highlights</h2>
              <Link to="/events" className="calendar-view-all-btn">
                View All
                <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </Link>
            </div>

            {/* Event cards — exactly 3, filling the height */}
            <div className="calendar-highlights-list">
              {loading ? (
                [1, 2, 3].map(i => (
                  <div key={i} className="cal-ev-card cal-ev-card--skeleton">
                    <div className="cal-ev-skeleton-date" />
                    <div className="cal-ev-skeleton-body">
                      <div className="cal-ev-skeleton-line" style={{ width: '60%' }} />
                      <div className="cal-ev-skeleton-line" style={{ width: '40%' }} />
                      <div className="cal-ev-skeleton-line" style={{ width: '80%' }} />
                    </div>
                  </div>
                ))
              ) : highlightEvents.length > 0 ? (
                highlightEvents.map(ev => {
                  const dateParts = ev.displayDate.split('/');
                  const day = dateParts[0] ?? '—';
                  const mon = ev.rawDate.toLocaleDateString('en-US', { month: 'short' });
                  const yr = dateParts[2] ?? '';
                  return (
                    <div
                      key={ev.id}
                      className={`cal-ev-card ${ev.date === selectedDay ? 'cal-ev-card--selected-day' : ''}`}
                      onClick={() => {
                        if (ev.navLink) {
                          if (ev.navLink.startsWith('http')) window.open(ev.navLink, '_blank', 'noopener,noreferrer');
                        }
                      }}
                      role="button"
                      tabIndex={0}
                      onKeyDown={e => e.key === 'Enter' && ev.navLink && window.open(ev.navLink, '_blank', 'noopener,noreferrer')}
                    >
                      {/* Date block */}
                      <div className="cal-ev-date-block">
                        <span className="cal-ev-day">{day}</span>
                        <span className="cal-ev-mon">{mon}</span>
                        <span className="cal-ev-yr">{yr}</span>
                      </div>

                      {/* Content */}
                      <div className="cal-ev-body">
                        <div className="cal-ev-tags">
                          <span className="cal-ev-tag">Event</span>
                          <span className={`cal-ev-mode-tag cal-ev-mode-tag--${ev.mode?.toLowerCase() === 'online' ? 'online' : 'offline'}`}>
                            {ev.mode || 'TBD'}
                          </span>
                        </div>
                        <h4 className="cal-ev-title">{ev.title}</h4>
                        {ev.time && (
                          <div className="cal-ev-meta-row">
                            <svg className="cal-ev-meta-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                            </svg>
                            <span>{ev.time}</span>
                          </div>
                        )}
                        {renderVenue(ev)}
                        <p className="cal-ev-desc">{ev.description}</p>
                      </div>
                    </div>
                  );
                })
              ) : (
                <div className="cal-ev-empty">
                  <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
                  </svg>
                  <span>No upcoming events scheduled.</span>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
