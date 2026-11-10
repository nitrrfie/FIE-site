# NITRRFIE Website - Project Context & Architecture Guide

> **File:** `CONTEXT.md`  
> **Status:** Active / Source of Truth for Project Context  
> **Last Updated:** November 2026  
> **Maintainer Instruction:** Whenever architectural changes, new routes, components, styles, or configuration are added, keep this document updated to preserve continuity across development sessions.

---

## 1. Project Overview

- **Organization:** **NITRRFIE** (NIT Raipur Foundation for Innovation and Entrepreneurship)
- **Nature of Entity:** Non-profit Section 8 company and Technology Business Incubator (TBI) based at the **National Institute of Technology Raipur (NIT Raipur)**, Chhattisgarh, India.
- **Key Support:** Supported by the Department of Science & Technology (DST), Government of India, under the **NIDHI-TBI** initiative.
- **Mission:** Foster innovation, entrepreneurship, and start-up incubation among students, faculty, alumni, and external innovators across Chhattisgarh and India.
- **Website Purpose:** Serve as the official public portal for incubatees, mentors, partners, prospective applicants, and event participants.

---

## 2. Repository Layout & Architecture

The workspace consists of a repository root with a nested Vite project (`nitrrfie-site`):

```text
FIE-site/
├── .git/                         # Git tracking
├── .gitattributes
├── .gitignore                    # Root gitignore
├── README.md                     # Root overview
├── package.json                  # Root package metadata
├── CONTEXT.md                    # Project context & architecture guide (this file)
└── nitrrfie-site/                # Frontend Web Application (Vite + React)
    ├── index.html                # HTML entry point (Meta tags, fonts, title)
    ├── vite.config.ts            # Vite build & plugin configuration
    ├── tsconfig.json             # Root TypeScript config
    ├── tsconfig.app.json         # Client-side TypeScript compilation settings
    ├── tsconfig.node.json        # Node tooling TypeScript settings
    ├── eslint.config.js          # ESLint 9+ flat configuration
    ├── package.json              # App dependencies, scripts, devDependencies
    ├── package-lock.json         # Lockfile
    ├── public/                   # Static public assets
    │   ├── favicon.svg           # Site favicon
    │   ├── icons.svg             # SVG sprite / symbol definitions
    │   ├── choose-us-image-03.png
    │   └── uploads/              # Chronological & categorized media assets
    │       ├── 2022/ ... 2026/   # Archival event posters, flyers, PDFs
    │       ├── gallery/          # WebP photo gallery images
    │       ├── depicter/         # Slider previews
    │       └── wpforms/          # Form cache assets
    └── src/                      # Application source code
        ├── main.tsx              # React entry point (StrictMode render)
        ├── App.tsx               # Root component, router configuration, lazy loading
        ├── assets/               # Bundled images & SVGs (hero.png, vite.svg)
        ├── components/           # Reusable UI components
        │   ├── Navbar.tsx        # Responsive sticky navbar + top bar + mobile drawer
        │   ├── Footer.tsx        # Global footer with quick links & info
        │   ├── HeroSlider.tsx    # Home banner interactive slider
        │   └── EventsCalendar.tsx# Events schedule & filterable calendar widget
        ├── data/                 # Static data configurations
        │   └── navigation.ts     # Navigation links, dropdown menus, external links
        ├── pages/                # Route page components
        │   ├── Home.tsx          # Homepage with hero, ticker, stats, pillars, CoE
        │   ├── About.tsx         # Vision, Mission, Purpose, Objectives
        │   ├── Administration.tsx# Board of Directors & executive management
        │   ├── PolicyProcedures.tsx# Incubation process, terms, guidelines
        │   ├── EntryExitPolicy.tsx# Startup admission, milestone reviews, exit criteria
        │   ├── FacultyMentors.tsx# NIT Raipur faculty mentors directory
        │   ├── StartupPortfolio.tsx# Incubated startups directory & showcase
        │   ├── EcosystemPartners.tsx# Industry, government & academic partners
        │   ├── Aicoe.tsx         # AI Centre of Excellence details & projects
        │   ├── Macieet.tsx       # MACIEET Centre of Excellence
        │   ├── GalleryPage.tsx   # Categorized photo gallery
        │   ├── AnnouncementsPage.tsx# Official notices, circulars, EOI downloads
        │   ├── EventsPage.tsx    # Past & upcoming workshops/events
        │   └── Contact.tsx       # Contact details, location map & query form
        ├── styles/               # Modular CSS per page & component
        │   ├── index.css         # Global resets, CSS variables, typography
        │   ├── navbar.css        # Navbar and mobile menu styles
        │   ├── footer.css        # Footer styles
        │   ├── home.css          # Homepage layout & cards
        │   ├── about.css         # About page layouts
        │   ├── pages.css         # Shared hero banners & inner page containers
        │   ├── inner-pages.css   # Common styling for informational pages
        │   ├── portfolio.css     # Startup portfolio grid & card styling
        │   ├── mentors.css       # Mentors grid & profile cards
        │   ├── coe.css           # Centre of Excellence pages (MACIEET & AI-CoE)
        │   ├── calendar.css      # Events calendar widget styles
        │   ├── announcements.css # Notice boards, tickers & modals
        │   └── ... (additional feature styles)
        └── utils/
            └── googleDrive.ts    # Helpers for parsing & streaming Google Drive/YouTube URLs
```

---

## 3. Technology Stack

- **Framework / Runtime:** React 19 (`react` ^19.2.6, `react-dom` ^19.2.6)
- **Language:** TypeScript 6 (`typescript` ~6.0.2)
- **Bundler & Build Tool:** Vite 8 (`vite` ^8.0.12, `@vitejs/plugin-react` ^6.0.1)
- **Routing:** React Router v7 (`react-router-dom` ^7.11.0) using `BrowserRouter` with route-level code splitting via `React.lazy` and `Suspense`
- **Linting:** ESLint 10 (`eslint` ^10.3.0, `typescript-eslint` ^8.59.2)
- **Styling Architecture:** Pure modular CSS files imported per component/page, utilizing CSS custom properties for theming, responsive media queries, and flex/grid systems.

---

## 4. Key Pages & Routes Map

| Route Path | Component | Purpose |
|---|---|---|
| `/` | `Home.tsx` | Main landing page: Hero slider, urgent notice popup/ticker, statistics, pillars, CoE highlights, testimonials, partner logos. |
| `/about` | `About.tsx` | Background of NITRRFIE, Vision, Mission, Purpose, Core Objectives. |
| `/about/administration`, `/key-designatory` | `Administration.tsx` | Leadership structure, Board of Directors, Management and operations team. |
| `/about/policy-procedures`, `/highlights` | `PolicyProcedures.tsx` | Incubation framework, rules, IP policy, support mechanisms. |
| `/mentorship/faculty`, `/incubation-cell` | `FacultyMentors.tsx` | Faculty mentors across academic departments with designations and expertise. |
| `/policy/entry-exit`, `/entry-and-exit-policy-for-startups` | `EntryExitPolicy.tsx` | Eligibility, selection criteria, monitoring, graduation and exit policies. |
| `/coe/macieet`, `/macieet` | `Macieet.tsx` | Centre of Excellence: Modern Advanced Centre for Innovation, Entrepreneurship and Emerging Technologies. |
| `/coe/aicoe`, `/aicoe` | `Aicoe.tsx` | Artificial Intelligence Centre of Excellence: research domains, lab equipment, focus areas. |
| `/startup-portfolio`, `/our-incubatees` | `StartupPortfolio.tsx` | Filterable catalog of incubatees (Pre-incubation, Incubation, Alumni) with logos, bios, founders, websites. |
| `/ecosystem-partners` | `EcosystemPartners.tsx` | Government bodies (DST, NIDHI, Startup India), corporate partners, and state incubators (36Inc). |
| `/gallery` | `GalleryPage.tsx` | Filterable visual showcase of facilities, events, demo days, and workshops. |
| `/announcements` | `AnnouncementsPage.tsx` | Notice board for EOIs, recruitment, funding calls, holiday calendars, and FDP notices. |
| `/events` | `EventsPage.tsx` | Comprehensive listing of upcoming and past entrepreneurial events and workshops. |
| `/contact` | `Contact.tsx` | Address, contact details, Google Maps embed, inquiry form. |
| `*` | Fallback | Catch-all redirecting to `Home.tsx`. |

---

## 5. Architectural & Design Patterns

### 5.1 Route-level Lazy Loading & UX
All pages in `App.tsx` are dynamically imported using `React.lazy()` with an active `Suspense` spinner. An automated `ScrollToTop` hook handles hash anchors and resets window scroll position on route transitions.

### 5.2 Google Drive & Media Streaming Utility (`googleDrive.ts`)
Due to image redirection and preview limitations in standard Google Drive links, `src/utils/googleDrive.ts` provides:
- `extractDriveId(url)`: Extracts file IDs from various Google Drive sharing link formats.
- `driveImageUrl(url)`: Converts Google Drive file URLs into direct-streaming thumbnail URLs (`https://lh3.googleusercontent.com/d/FILE_ID=w1000`) without redirect delays.
- `embedUrl(url)`: Generates iframe-compatible preview embeds for Drive documents/videos or YouTube watch links.

### 5.3 Static Asset Organization (`public/uploads`)
- Retains legacy WordPress/CMS media folder hierarchy organized by year (`2022`, `2023`, `2024`, `2025`, `2026`).
- Uploads include official EOI PDFs, sanction letters, startup brand logos, and campus photos.

### 5.4 Navigation Hierarchy (`src/data/navigation.ts`)
- **Top Bar (`topNavItems`):** Direct links to parent and sister institutes (NIT Raipur main site, Career Development Centre, Alumni Association).
- **Primary Bar (`navItems`):** Main dropdowns (About, Mentorship, Centre of Excellence, More) and direct routes (Home, Startup-Portfolio, Ecosystem Partners, Gallery).
- External applications (Internships, Mentorship forms, NIT Raipur Store) are managed through external target URLs in `navigation.ts`.

---

## 6. Styling & Branding Guidelines

- **Primary Colors:**
  - Deep Navy / Institutional Blue: `#1e3a8a` / `#0f2756`
  - Accent / Gold / Amber: `#f59e0b` / `#d97706`
  - Neutral Backgrounds: `#f8fafc`, `#f1f5f9`, `#ffffff`
  - Text: Dark slate `#0f172a`, Muted `#475569`, Light border `#e2e8f0`
- **Typography:**
  - Font Family: `Inter`, `system-ui`, `-apple-system`, `sans-serif`
  - Clean readability with strong contrast ratios complying with institutional web accessibility standards.
- **Responsiveness:**
  - Mobile-first approach with breakpoints:
    - Mobile: `< 768px` (Collapsible burger menu, full-width cards, stacked grids)
    - Tablet: `768px - 1024px`
    - Desktop: `> 1024px` (Mega-menu dropdowns, multi-column grids)

---

## 7. Development & Build Commands

Work inside the `nitrrfie-site` subfolder:

```bash
# Navigate to the site folder
cd nitrrfie-site

# Install dependencies (when node & npm are available)
npm install

# Start local Vite development server with HMR
npm run dev

# Typecheck and build for production (outputs to dist/)
npm run build

# Run ESLint validation
npm run lint

# Preview production build locally
npm run preview
```

---

## 8. Current State & Recent Work

- **Recent Updates:**
  - **MACIEET Page Redesign:**
    - Upgraded `/coe/macieet` (`Macieet.tsx`) following the modern AI-CoE design system.
    - Added 2744x1080 banner space (`macieet-hero`) with automated fallback placeholder until banner upload.
    - Updated "Established Jointly By" with official logos and brand-themed accent top-borders for Motilal Oswal Foundation, Chhattisgarh Government, and NIT Raipur.
    - Added new "Proposed Design" auto-scrolling continuous marquee slider using WebP assets extracted from `macieetlow.zip`.
    - Added category/domain tag pills on all 8 proposed lab cards.
    - Added quick-action call-to-action buttons in the Contact section ("Apply for Incubation" and "Partner with MACIEET").
    - Redesigned Governing Board (10 members), Proposed Facilities & Labs (8 labs), static 4-item Photo Gallery, and Contact Us section.
  - Added IITG FDP notice and homepage urgent popup modal (`0276ade`).
  - Implemented responsive AI-CoE page with gallery auto-slider and mobile header layout enhancements (`0275c15`).
  - Added Navbar, Footer, and complete navigation data config (`ed87925`).
  - Integrated Home page, introduction assets, and modular component styles (`0344ecc`, `10cdf17`).
- **Clean Working Tree:** Repository is currently synced with `origin/main` on clean git state.

---

## 9. How to Keep This Context File Updated

When performing modifications in future sessions:
1. **Adding a Page/Route:**
   - Update Section 2 (directory tree) and Section 4 (routes table) with the new path and component.
2. **Adding Components or Global Utilities:**
   - Document new components under `src/components/` and utility helpers in Section 5.
3. **Updating Navigation:**
   - Reflect updates to `src/data/navigation.ts` in Section 5.4.
4. **Environment/Build Changes:**
   - Update Section 3 (Tech Stack) and Section 7 (Commands) if packages, scripts, or build configs change.

