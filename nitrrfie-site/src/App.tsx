import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect, Suspense, lazy } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Lazy loaded pages
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Contact = lazy(() => import('./pages/Contact'));
const Administration = lazy(() => import('./pages/Administration'));
const FacultyMentors = lazy(() => import('./pages/FacultyMentors'));
const PolicyProcedures = lazy(() => import('./pages/PolicyProcedures'));
const Macieet = lazy(() => import('./pages/Macieet'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));
const AnnouncementsPage = lazy(() => import('./pages/AnnouncementsPage'));
const EntryExitPolicy = lazy(() => import('./pages/EntryExitPolicy'));
const EcosystemPartners = lazy(() => import('./pages/EcosystemPartners'));
const StartupPortfolio = lazy(() => import('./pages/StartupPortfolio'));
const Aicoe = lazy(() => import('./pages/Aicoe'));

function ScrollToTop() {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
        return;
      }
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname, hash]);
  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      <Suspense fallback={
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', flexDirection: 'column', gap: '1rem', backgroundColor: '#f8fafc' }}>
          <div style={{ width: '50px', height: '50px', border: '4px solid #e2e8f0', borderTop: '4px solid #1e3a8a', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
          <span style={{ fontFamily: 'Inter, sans-serif', color: '#1e3a8a', fontWeight: 600, fontSize: '1.1rem' }}>Loading content...</span>
        </div>
      }>
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Subpages & Slugs */}
          <Route path="/about" element={<About />} />
          <Route path="/about/administration" element={<Administration />} />
          <Route path="/key-designatory" element={<Administration />} />
          
          <Route path="/about/policy-procedures" element={<PolicyProcedures />} />
          <Route path="/highlights" element={<PolicyProcedures />} />
          
          {/* Mentorship Subpages & Slugs */}
          <Route path="/mentorship/faculty" element={<FacultyMentors />} />
          <Route path="/incubation-cell" element={<FacultyMentors />} />
          
          {/* Entry/Exit Policy */}
          <Route path="/policy/entry-exit" element={<EntryExitPolicy />} />
          <Route path="/entry-and-exit-policy-for-startups" element={<EntryExitPolicy />} />
          
          {/* Centre of Excellence */}
          <Route path="/coe/macieet" element={<Macieet />} />
          <Route path="/macieet" element={<Macieet />} />
          <Route path="/coe/aicoe" element={<Aicoe />} />
          <Route path="/aicoe" element={<Aicoe />} />
          
          {/* Media & News */}
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/announcements" element={<AnnouncementsPage />} />
          <Route path="/ecosystem-partners" element={<EcosystemPartners />} />
          <Route path="/startup-portfolio" element={<StartupPortfolio />} />
          <Route path="/our-incubatees" element={<StartupPortfolio />} />
          <Route path="/contact" element={<Contact />} />
          
          {/* Catch-all */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
