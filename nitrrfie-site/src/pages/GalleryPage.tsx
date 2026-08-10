import { useState } from 'react';
import '../styles/pages.css';
import '../styles/inner-pages.css';
import { driveImageUrl, embedUrl, isEmbedVideo } from '../utils/googleDrive';

interface GalleryItem {
  type: 'photo' | 'video';
  src: string;
  thumbnail: string;
  title: string;
  desc?: string;
}

const galleryItems: GalleryItem[] = [
  { type: 'photo', src: '/uploads/2024/05/2023-01-17.jpg', thumbnail: '/uploads/2024/05/2023-01-17.jpg', title: 'NIT Raipur Campus', desc: 'National Institute of Technology, Raipur — a public technical and research university located in Raipur, the capital of Chhattisgarh.' },
  { type: 'photo', src: '/uploads/2024/05/IMG20240116142443b.jpg', thumbnail: '/uploads/2024/05/IMG20240116142443b.jpg', title: 'Pre-Incubation Center Team' },
  { type: 'photo', src: '/uploads/2024/05/Incubator-Office-inaugurated-on-National-Startup-Day-Mirror-APRIL-2024-1-scaled.jpg', thumbnail: '/uploads/2024/05/Incubator-Office-inaugurated-on-National-Startup-Day-Mirror-APRIL-2024-1-scaled.jpg', title: 'Inauguration News Coverage' },
  { type: 'photo', src: '/uploads/2024/05/National-Science-Day-14-e1716542931479.jpg', thumbnail: '/uploads/2024/05/National-Science-Day-14-e1716542931479.jpg', title: 'National Science Day Celebration' },
  { type: 'photo', src: '/uploads/2024/05/Incubator-Office-inaugurated-on-National-Startup-Day-2024.jpg', thumbnail: '/uploads/2024/05/Incubator-Office-inaugurated-on-National-Startup-Day-2024.jpg', title: 'Incubator Office Inauguration 2024' },
  { type: 'photo', src: '/uploads/2024/05/MoU-between-NITRRFIE-and-PITEF-for-Co-Incubation-1-1.jpg', thumbnail: '/uploads/2024/05/MoU-between-NITRRFIE-and-PITEF-for-Co-Incubation-1-1.jpg', title: 'MoU Signing between NITRRFIE and PITEF' },
  { type: 'photo', src: '/uploads/2024/07/WhatsApp-Image-2024-07-24-at-12.44.00_a71b4856.jpg', thumbnail: '/uploads/2024/07/WhatsApp-Image-2024-07-24-at-12.44.00_a71b4856.jpg', title: 'Makerspace Interaction Session' },
  { type: 'photo', src: '/uploads/2024/07/WhatsApp-Image-2024-07-24-at-12.43.59_7468e4b0-scaled.jpg', thumbnail: '/uploads/2024/07/WhatsApp-Image-2024-07-24-at-12.43.59_7468e4b0-scaled.jpg', title: 'Pre-Incubation Pitch Session' },
  { type: 'video', src: 'https://www.youtube.com/watch?v=ZEOIlInv18k', thumbnail: '/uploads/2024/07/hq720.jpg', title: 'Technical Startup — Youth Talk with Dr. Anuj Shukla', desc: 'A conversation with Dr. Anuj Shukla (CEO NITRRFIE) regarding tech entrepreneurship.' },
  { type: 'video', src: 'https://drive.google.com/file/d/1mXep4DRTLTt3NSV5HJSryBH7NL2xK7UO/view?usp=share_link', thumbnail: '/uploads/2024/12/DSC01352-2-min.png', title: 'NITRRFIE Incubation Highlights Video', desc: 'A summary of key events, startup showcases, and incubation space highlights from 2024-2025.' },
  { type: 'video', src: 'https://drive.google.com/file/d/1qQoEed_xY5BN5mMK3YqOTupRN73oOJA4/view?usp=share_link', thumbnail: '/uploads/2024/07/Screenshot-2024-07-12-202829.png', title: 'Startup Interaction Day Clip', desc: 'Highlights from the startup interaction day session where founders pitch their concepts to mentors.' },
  { type: 'video', src: 'https://drive.google.com/file/d/1hgfjWnAkbYP4u5NxHZZFb0wrw5quAxB4/view?usp=drive_link', thumbnail: '/uploads/2024/07/Screenshot-2024-07-15-122622.png', title: 'NITRRFIE Incubation Center Inauguration Ceremony', desc: 'A guided video tour of the workspaces, makerspace, and office facilities at the NIT Raipur Incubator.' },
  { type: 'photo', src: '/uploads/2024/07/WhatsApp-Image-2024-07-31-at-11.31.16_75e5e9a4-scaled.jpg', thumbnail: '/uploads/2024/07/WhatsApp-Image-2024-07-31-at-11.31.16_75e5e9a4-scaled.jpg', title: 'Incubation Board Meeting', desc: 'NITRRFIE Governing Board reviewing startup progress and policy implementations.' },
  { type: 'photo', src: '/uploads/2024/08/WhatsApp-Image-2024-08-01-at-12.07.42_48bfb4fe-scaled.jpg', thumbnail: '/uploads/2024/08/WhatsApp-Image-2024-08-01-at-12.07.42_48bfb4fe-scaled.jpg', title: 'Startup Pitch Presentation', desc: 'Pre-incubation startups presenting their concepts to the evaluation committee.' },
  { type: 'photo', src: '/uploads/2024/09/01-min-scaled.jpg', thumbnail: '/uploads/2024/09/01-min-scaled.jpg', title: 'MACIEET Center Laboratory Facility 01', desc: 'State-of-the-art laboratory testing equipment and testing bays available at MACIEET CoE.' },
  { type: 'photo', src: '/uploads/2024/09/02-min-scaled.jpg', thumbnail: '/uploads/2024/09/02-min-scaled.jpg', title: 'MACIEET Center Laboratory Facility 02', desc: 'State-of-the-art laboratory testing equipment and testing bays available at MACIEET CoE.' },
  { type: 'photo', src: '/uploads/2024/09/03-min-scaled.jpeg', thumbnail: '/uploads/2024/09/03-min-scaled.jpeg', title: 'MACIEET Center Laboratory Facility 03', desc: 'State-of-the-art laboratory testing equipment and testing bays available at MACIEET CoE.' },
  { type: 'photo', src: '/uploads/2024/09/04-min-scaled.jpg', thumbnail: '/uploads/2024/09/04-min-scaled.jpg', title: 'MACIEET Center Laboratory Facility 04', desc: 'State-of-the-art laboratory testing equipment and testing bays available at MACIEET CoE.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01278-min.png', thumbnail: '/uploads/2024/12/DSC01278-min.png', title: 'Incubatee Training Workshop Image 01278', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01324-min.png', thumbnail: '/uploads/2024/12/DSC01324-min.png', title: 'Incubatee Training Workshop Image 01324', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01352-2-min.png', thumbnail: '/uploads/2024/12/DSC01352-2-min.png', title: 'Incubatee Training Workshop Image 01352', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01356-min.png', thumbnail: '/uploads/2024/12/DSC01356-min.png', title: 'Incubatee Training Workshop Image 01356', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01375-min.png', thumbnail: '/uploads/2024/12/DSC01375-min.png', title: 'Incubatee Training Workshop Image 01375', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01471-min.png', thumbnail: '/uploads/2024/12/DSC01471-min.png', title: 'Incubatee Training Workshop Image 01471', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01476-min.png', thumbnail: '/uploads/2024/12/DSC01476-min.png', title: 'Incubatee Training Workshop Image 01476', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01481-min.png', thumbnail: '/uploads/2024/12/DSC01481-min.png', title: 'Incubatee Training Workshop Image 01481', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01492-min.png', thumbnail: '/uploads/2024/12/DSC01492-min.png', title: 'Incubatee Training Workshop Image 01492', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06024-min.png', thumbnail: '/uploads/2024/12/DSC06024-min.png', title: 'Incubatee Training Workshop Image 06024', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06040-min.png', thumbnail: '/uploads/2024/12/DSC06040-min.png', title: 'Incubatee Training Workshop Image 06040', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06056-min.png', thumbnail: '/uploads/2024/12/DSC06056-min.png', title: 'Incubatee Training Workshop Image 06056', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06059-min.png', thumbnail: '/uploads/2024/12/DSC06059-min.png', title: 'Incubatee Training Workshop Image 06059', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06069-min.png', thumbnail: '/uploads/2024/12/DSC06069-min.png', title: 'Incubatee Training Workshop Image 06069', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06071-min.png', thumbnail: '/uploads/2024/12/DSC06071-min.png', title: 'Incubatee Training Workshop Image 06071', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06107-min.png', thumbnail: '/uploads/2024/12/DSC06107-min.png', title: 'Incubatee Training Workshop Image 06107', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06133-min.png', thumbnail: '/uploads/2024/12/DSC06133-min.png', title: 'Incubatee Training Workshop Image 06133', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC06135-min.png', thumbnail: '/uploads/2024/12/DSC06135-min.png', title: 'Incubatee Training Workshop Image 06135', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01284-min.png', thumbnail: '/uploads/2024/12/DSC01284-min.png', title: 'Incubatee Training Workshop Image 01284', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2024/12/DSC01322-min.png', thumbnail: '/uploads/2024/12/DSC01322-min.png', title: 'Incubatee Training Workshop Image 01322', desc: 'Glimpses from the entrepreneurship training and hands-on laboratory workshops for incubatees.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0026.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0026.png', title: 'National Startup Day 2025 Session 26', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1wYtFaamaaF11oe8jA8LVvNanIMVB2-H5/view?usp=sharing', thumbnail: 'https://drive.google.com/file/d/1wYtFaamaaF11oe8jA8LVvNanIMVB2-H5/view?usp=sharing', title: 'National Startup Day 2025 Collage', desc: 'Highlights collage from the National Startup Day 2025 held at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/20250120_122221-COLLAGE.png', thumbnail: '/uploads/2025/01/20250120_122221-COLLAGE.png', title: 'National Startup Day 2025 Event Collage', desc: 'Collage of guest presentations and startup showcases during Startup Day 2025.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0009.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0009.png', title: 'National Startup Day 2025 Audience', desc: 'Packed house of students, entrepreneurs, and faculty members attending the talk sessions.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0010.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0010.png', title: 'Startup Day 2025 Registration desk', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0011.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0011.png', title: 'Startup Day Panel Discussion', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1iZx2duMmpwrdUGFPFTZocDCHgf-5c3HU/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1iZx2duMmpwrdUGFPFTZocDCHgf-5c3HU/view?usp=drive_link', title: 'Incubatee Pitch Recognition', desc: 'Certification and recognition session for top incubatees during Startup Day 2025.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1PbI5qLtdUUTGH2RJiU0Jninf3CT8HExb/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1PbI5qLtdUUTGH2RJiU0Jninf3CT8HExb/view?usp=drive_link', title: 'Incubatees and Mentors Group Photo', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/14dzTvWcSueKQqEEcUDpiIIMAjIR-_l_8/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/14dzTvWcSueKQqEEcUDpiIIMAjIR-_l_8/view?usp=drive_link', title: 'Interactive Q&A Session', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0016.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0016.png', title: 'Dignitary Lighting the Lamp Ceremony', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1CQu8VQ1ERIBkOFriWFWhu7ApWwEmUhJR/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1CQu8VQ1ERIBkOFriWFWhu7ApWwEmUhJR/view?usp=drive_link', title: 'CEO Address at Startup Day 2025', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0018.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0018.png', title: 'Expert Mentors Advisory Session', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1vWmz4OawyrnCdPG2whZi135LuaeSq20s/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1vWmz4OawyrnCdPG2whZi135LuaeSq20s/view?usp=drive_link', title: 'Startup Prototype Live Demo', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1psyPGKVLzBraXSshw3DT3LfUYjsD2j7I/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1psyPGKVLzBraXSshw3DT3LfUYjsD2j7I/view?usp=drive_link', title: 'Pitch Deck Review Session', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0021.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0021.png', title: 'Makerspace Lab Prototype Exhibition', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0022.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0022.png', title: 'Dignitaries visiting Startup Stalls', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0024.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0024.png', title: 'Valedictory Session Highlights', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20250120-WA0025.png', thumbnail: '/uploads/2025/01/IMG-20250120-WA0025.png', title: 'Technical Workshop Showcase', desc: 'Highlights and key interactions from the January 2025 National Startup Day at NIT Raipur.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1LzUgp9N2lxG1m56lUsjf2rWHI5l4mbbm/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1LzUgp9N2lxG1m56lUsjf2rWHI5l4mbbm/view?usp=drive_link', title: 'Incubatee Stalls Exhibition', desc: 'Startups exhibiting their innovative prototypes and services to delegates.' },
  { type: 'photo', src: '/uploads/2025/01/IMG_20250117_1955108042-scaled.jpg', thumbnail: '/uploads/2025/01/IMG_20250117_1955108042-scaled.jpg', title: 'Startup Day 2025 Guest Presentation', desc: 'Guest speaker presenting at the National Startup Day 2025 event.' },
  { type: 'photo', src: 'https://drive.google.com/file/d/1iZx2duMmpwrdUGFPFTZocDCHgf-5c3HU/view?usp=drive_link', thumbnail: 'https://drive.google.com/file/d/1iZx2duMmpwrdUGFPFTZocDCHgf-5c3HU/view?usp=drive_link', title: 'Incubatee Pitch Recognition', desc: 'Certification and recognition session for top incubatees during Startup Day 2025.' },
  { type: 'photo', src: '/uploads/2025/01/IMG-20241228-WA0007.jpg', thumbnail: '/uploads/2025/01/IMG-20241228-WA0007.jpg', title: 'NITRRFIE Event Photo 62', desc: 'Event highlights and visual gallery updates from NITRRFIE.' },
];

const PlayIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="white" stroke="none" aria-hidden="true">
    <polygon points="5 3 19 12 5 21 5 3" />
  </svg>
);
const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
    <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);



export default function GalleryPage() {
  const [filter, setFilter] = useState<'all' | 'photo' | 'video'>('all');
  const [activeMedia, setActiveMedia] = useState<GalleryItem | null>(null);

  const filteredItems = filter === 'all' ? galleryItems : galleryItems.filter(item => item.type === filter);
  const tabs: { key: 'all' | 'photo' | 'video'; label: string }[] = [
    { key: 'all', label: 'ALL MEDIA' },
    { key: 'photo', label: 'PHOTOS' },
    { key: 'video', label: 'VIDEOS' },
  ];

  return (
    <main style={{ background: '#fff', minHeight: '100vh', paddingBottom: '80px' }}>
      <section className="gallery-header-section">
        <div className="container">
          <div className="gallery-header">
            <span className="gallery-header__eyebrow">Visual Highlights</span>
            <h1 className="gallery-header__title">Photo &amp; Video Gallery</h1>
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 0 60px' }}>
        <div className="container">
          {/* Filter tabs */}
          <div className="filter-tabs">
            {tabs.map(tab => (
              <button
                key={tab.key}
                className={`filter-tab${filter === tab.key ? ' filter-tab--active' : ''}`}
                onClick={() => setFilter(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="gallery-grid">
            {filteredItems.map((item, idx) => (
              <div key={idx} className="gallery-card" onClick={() => setActiveMedia(item)}>
                <div className="gallery-card__thumb">
                  <img
                    src={driveImageUrl(item.thumbnail)}
                    alt={item.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(e) => { (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp'; }}
                  />
                  {item.type === 'video' && (
                    <div className="gallery-card__play"><PlayIcon /></div>
                  )}
                  <div className="gallery-card__overlay" aria-hidden="true" />
                </div>
                <div className="gallery-card__body">
                  <h3 className="gallery-card__title">{item.title}</h3>
                  {item.desc && <p className="gallery-card__desc">{item.desc}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {activeMedia && (
        <div className="gallery-lightbox" onClick={() => setActiveMedia(null)}>
          <button className="gallery-lightbox__close" onClick={() => setActiveMedia(null)} aria-label="Close">
            <CloseIcon />
          </button>
          <div className="gallery-lightbox__content" onClick={(e) => e.stopPropagation()}>
            {activeMedia.type === 'photo' ? (
              <img
                src={driveImageUrl(activeMedia.src)}
                alt={activeMedia.title}
                className="gallery-lightbox__img"
                referrerPolicy="no-referrer"
                onError={(e) => { (e.target as HTMLImageElement).src = '/uploads/2022/07/profile-picture.webp'; }}
              />
            ) : (
              <div className="gallery-lightbox__video-wrap">
                {isEmbedVideo(activeMedia.src) ? (
                  <iframe
                    src={embedUrl(activeMedia.src)}
                    title={activeMedia.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
                  />
                ) : (
                  <video
                    src={activeMedia.src}
                    controls
                    autoPlay
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}
                  />
                )}
              </div>
            )}
            <h3 className="gallery-lightbox__title">{activeMedia.title}</h3>
          </div>
        </div>
      )}
    </main>
  );
}
