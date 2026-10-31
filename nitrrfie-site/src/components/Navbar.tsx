import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { navItems, topNavItems } from '../data/navigation';
import '../styles/navbar.css';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [showApplyMenu, setShowApplyMenu] = useState(false);
  const [mobileApplyOpen, setMobileApplyOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const applyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change without cascading effect renders
  const [prevLocationKey, setPrevLocationKey] = useState(location.key);
  if (prevLocationKey !== location.key) {
    setPrevLocationKey(location.key);
    setMobileOpen(false);
    setOpenDropdown(null);
    setShowApplyMenu(false);
    setMobileApplyOpen(false);
  }

  // Close dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (applyRef.current && !applyRef.current.contains(e.target as Node)) {
        setShowApplyMenu(false);
      }
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <header className={`navbar${isScrolled ? ' navbar--scrolled' : ''}`} ref={navRef}>
      {/* 1. TOP ORANGE BAR */}
      <div className="navbar__top">
        <div className="navbar__top-inner container">
          {/* Top Links */}
          <div className="navbar__top-links">
            {topNavItems.map((item, idx) => (
              <React.Fragment key={idx}>
                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="navbar__top-link">
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} className="navbar__top-link">
                    {item.label}
                  </Link>
                )}
                {idx < topNavItems.length - 1 && <span className="navbar__top-separator">|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* Social Icons */}
          <div className="navbar__top-socials">
            <a href="https://www.instagram.com/nitrrfie/" target="_blank" rel="noopener noreferrer" className="navbar__social-icon" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.051.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
            <a href="https://www.facebook.com/people/Nit-Raipur-Fie/100090162570362/#" target="_blank" rel="noopener noreferrer" className="navbar__social-icon" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.95z" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/nit-raipur-fie-9a3243269/" target="_blank" rel="noopener noreferrer" className="navbar__social-icon" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            <a href="https://x.com/NITRR" target="_blank" rel="noopener noreferrer" className="navbar__social-icon" aria-label="Twitter (X)">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@NITRRFIE" target="_blank" rel="noopener noreferrer" className="navbar__social-icon" aria-label="YouTube">
              <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                <path d="M23.498 6.163a3.003 3.003 0 00-2.11-2.107C19.53 3.5 12 3.5 12 3.5s-7.53 0-9.388.556a3.003 3.003 0 00-2.11 2.107C0 8.017 0 12 0 12s0 3.983.502 5.837a3.003 3.003 0 002.11 2.107c1.858.556 9.388.556 9.388.556s7.53 0 9.388-.556a3.003 3.003 0 002.11-2.107C24 15.983 24 12 24 12s0-3.983-.502-5.837zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* 2. MIDDLE LOGO & PARTNERS STRIP */}
      <div className="navbar__middle">
        <div className="navbar__middle-inner container">
          {/* Circular Brand Logo */}
          <Link to="/" className="navbar__brand" aria-label="NITRRFIE Home">
            <img src="/uploads/logo-NITRRFIE.png" alt="NITRRFIE Logo" className="navbar__brand-img" />
            <div className="navbar__brand-text">
              <span className="navbar__brand-title">NIT Raipur Foundation for</span>
              <span className="navbar__brand-sub">Innovation &amp; Entrepreneurship</span>
            </div>
          </Link>

          {/* Partner Logos Strip */}
          <div className="navbar__partners">
            <a href="https://www.nitrr.ac.in/" target="_blank" rel="noopener noreferrer" className="navbar__partner-link">
              <img src="/uploads/NITRR-1.png" alt="NIT Raipur" className="navbar__partner-logo navbar__partner-logo--nitrr" />
            </a>
            <a href="https://nidhi.dst.gov.in/" target="_blank" rel="noopener noreferrer" className="navbar__partner-link">
              <img src="/uploads/DST-NIDHI_Original-Logo-H.png" alt="DST NIDHI" className="navbar__partner-logo" />
            </a>
            <a href="https://www.startupindia.gov.in/" target="_blank" rel="noopener noreferrer" className="navbar__partner-link">
              <img src="/uploads/Startup-India.png" alt="Startup India" className="navbar__partner-logo" />
            </a>
            <a href="https://invest.cg.gov.in/startup" target="_blank" rel="noopener noreferrer" className="navbar__partner-link">
              <img src="/uploads/Startup-Chhattisgarh.png" alt="Startup Chhattisgarh" className="navbar__partner-logo" />
            </a>
            <a href="https://indiaai.gov.in/" target="_blank" rel="noopener noreferrer" className="navbar__partner-link">
              <img src="/uploads/2023/ecosystem/INDIA AI.png" alt="IndiaAI" className="navbar__partner-logo" />
            </a>
          </div>

          {/* Action Buttons */}
          <div className="navbar__actions-group">
            <a
              href="https://store.nitrrfie.in"
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta-btn navbar__cta-btn--connect"
            >
              NIT Raipur Store
            </a>
            <div className="navbar__apply-wrapper" ref={applyRef}>
              <button
                type="button"
                className={`navbar__cta-btn navbar__apply-trigger ${showApplyMenu ? 'navbar__apply-trigger--open' : ''}`}
                onClick={() => setShowApplyMenu(!showApplyMenu)}
                aria-haspopup="true"
                aria-expanded={showApplyMenu}
              >
                <span>Apply for Incubation</span>
                <svg
                  className={`navbar__apply-caret ${showApplyMenu ? 'navbar__apply-caret--open' : ''}`}
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              {showApplyMenu && (
                <div className="navbar__apply-dropdown">
                  <div className="navbar__apply-dropdown-header">Choose Incubation Program</div>
                  <div className="navbar__apply-dropdown-list">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSd5cwgZmelQC6zRhQXL26F7G2sQ7NO01nknx8RvtdZoJn47fg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="navbar__apply-dropdown-item navbar__apply-dropdown-item--aicoe"
                      onClick={() => setShowApplyMenu(false)}
                    >
                      <div className="navbar__apply-dropdown-item-content">
                        <span className="navbar__apply-dropdown-item-title">AI-CoE</span>
                        <span className="navbar__apply-dropdown-item-desc">Artificial Intelligence Centre of Excellence</span>
                      </div>
                      <svg className="navbar__apply-dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfSK5YM3qAJscTdMboNMh9FpP5F5bl3ikTcDjc4BAh9kb13Wg/viewform?usp=sharing&ouid=111435562742645601337"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="navbar__apply-dropdown-item navbar__apply-dropdown-item--nidhi"
                      onClick={() => setShowApplyMenu(false)}
                    >
                      <div className="navbar__apply-dropdown-item-content">
                        <span className="navbar__apply-dropdown-item-title">NIDHI TBI</span>
                        <span className="navbar__apply-dropdown-item-desc">Technology Business Incubator</span>
                      </div>
                      <svg className="navbar__apply-dropdown-arrow" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Hamburger (visible on middle row on screens <= 1024px) */}
          <button
            className={`navbar__hamburger${mobileOpen ? ' navbar__hamburger--open' : ''}`}
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>

      {/* 3. BOTTOM MAIN NAVIGATION MENU */}
      <div className="navbar__bottom">
        <nav className="navbar__nav container" aria-label="Main navigation">
          {navItems.map((item, idx) => (
            <div
              key={idx}
              className="navbar__item"
              onMouseEnter={() => item.children && setOpenDropdown(item.label)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              {item.children ? (
                <>
                  <button
                    className={`navbar__link navbar__link--dropdown${isActive(item.path) ? ' navbar__link--active' : ''}`}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === item.label}
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label}
                    <span className="navbar__chevron">▾</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="navbar__dropdown" role="menu">
                      {item.children.map((child, cidx) => (
                        child.external ? (
                          <a
                            key={cidx}
                            href={child.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__dropdown-item"
                            role="menuitem"
                          >
                            {child.label} <span style={{ fontSize: '0.7rem', color: 'var(--color-text)' }}>↗</span>
                          </a>
                        ) : (
                          <Link
                            key={cidx}
                            to={child.path}
                            className="navbar__dropdown-item"
                            role="menuitem"
                          >
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`navbar__link${isActive(item.path) ? ' navbar__link--active' : ''}`}
                  >
                    {item.label}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`navbar__link${isActive(item.path) ? ' navbar__link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
        </nav>
      </div>

      {/* MOBILE EXPANDED MENU DRAWER */}
      {mobileOpen && (
        <div className="navbar__mobile">
          {navItems.map((item, idx) => (
            <div key={idx} className="navbar__mobile-item">
              {item.children ? (
                <>
                  <button
                    className="navbar__mobile-link navbar__mobile-link--parent"
                    onClick={() =>
                      setOpenDropdown(openDropdown === item.label ? null : item.label)
                    }
                  >
                    {item.label} <span>{openDropdown === item.label ? '▴' : '▾'}</span>
                  </button>
                  {openDropdown === item.label && (
                    <div className="navbar__mobile-sub">
                      {item.children.map((child, cidx) => (
                        child.external ? (
                          <a
                            key={cidx}
                            href={child.path}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="navbar__mobile-sublink"
                          >
                            {child.label} ↗
                          </a>
                        ) : (
                          <Link key={cidx} to={child.path} className="navbar__mobile-sublink">
                            {child.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </>
              ) : (
                item.external ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`navbar__mobile-link${isActive(item.path) ? ' navbar__mobile-link--active' : ''}`}
                  >
                    {item.label} ↗
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`navbar__mobile-link${isActive(item.path) ? ' navbar__mobile-link--active' : ''}`}
                  >
                    {item.label}
                  </Link>
                )
              )}
            </div>
          ))}
          {/* Top Nav utilities inside mobile drawer */}
          <div style={{ marginTop: '20px', borderTop: '2px solid var(--color-border)', paddingTop: '15px' }}>
            <span style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--color-text)', display: 'block', marginBottom: '10px' }}>Utilities:</span>
            {topNavItems.map((item, idx) => (
              <div key={idx} className="navbar__mobile-item">
                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" className="navbar__mobile-sublink">
                    {item.label} ↗
                  </a>
                ) : (
                  <Link to={item.path} className="navbar__mobile-sublink">
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
          <a
            href="https://store.nitrrfie.in"
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__mobile-cta btn btn--outline-dark"
            style={{ marginTop: '20px' }}
          >
            NIT Raipur Store
          </a>
          <div className="navbar__mobile-apply-wrapper" style={{ marginTop: '10px' }}>
            <button
              type="button"
              className={`navbar__mobile-cta btn btn--primary navbar__mobile-apply-btn ${mobileApplyOpen ? 'navbar__mobile-apply-btn--open' : ''}`}
              onClick={() => setMobileApplyOpen(!mobileApplyOpen)}
            >
              <span>Apply for Incubation</span>
              <svg
                className={`navbar__apply-caret ${mobileApplyOpen ? 'navbar__apply-caret--open' : ''}`}
                viewBox="0 0 20 20"
                fill="currentColor"
                style={{ width: '16px', height: '16px' }}
              >
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
            {mobileApplyOpen && (
              <div className="navbar__mobile-apply-sub">
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSd5cwgZmelQC6zRhQXL26F7G2sQ7NO01nknx8RvtdZoJn47fg/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__mobile-apply-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="navbar__mobile-apply-title">AI-CoE</span>
                  <span className="navbar__mobile-apply-subtext">Artificial Intelligence Centre of Excellence</span>
                </a>
                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfSK5YM3qAJscTdMboNMh9FpP5F5bl3ikTcDjc4BAh9kb13Wg/viewform?usp=sharing&ouid=111435562742645601337"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="navbar__mobile-apply-item"
                  onClick={() => setMobileOpen(false)}
                >
                  <span className="navbar__mobile-apply-title">NIDHI TBI</span>
                  <span className="navbar__mobile-apply-subtext">Technology Business Incubator</span>
                </a>
              </div>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
