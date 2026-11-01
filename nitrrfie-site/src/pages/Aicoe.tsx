import { Fragment, useLayoutEffect, useRef } from 'react';
import '../styles/pages.css';
import '../styles/inner-pages.css';
import '../styles/coe.css';

type RevealBannerImageProps = Pick<
  React.ImgHTMLAttributes<HTMLImageElement>,
  'src' | 'alt' | 'width' | 'height' | 'className' | 'loading' | 'decoding' | 'fetchPriority'
>;

type BannerSection = RevealBannerImageProps & { fullBleed?: boolean };

const bannerSections: BannerSection[] = [
  { src: '/uploads/vm.webp', alt: 'Vision and Mission - MeitY IndiaAI Chhattisgarh Centre of Excellence in AI, NIT Raipur', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/fund.webp', alt: 'Funding opportunities for the MeitY IndiaAI Chhattisgarh Centre of Excellence in Artificial Intelligence', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/domains.webp', alt: 'Strategic domains for the AI Centre of Excellence', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/pillars.gif', alt: 'Core pillars of the AI Centre of Excellence', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/team.webp', alt: 'Team of the AI Centre of Excellence', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/key.webp', alt: 'Key initiatives: driving innovation and enabling entrepreneurship', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/infra.webp', alt: 'Planned infrastructure', width: '2744', height: '1080', loading: 'lazy', decoding: 'async' },
  { src: '/uploads/partner.webp', alt: 'Partners of the AI Centre of Excellence', width: '2744', height: '1080', loading: 'lazy', decoding: 'async', fullBleed: true },
];

const galleryImages = [1, 2, 3, 4, 5, 6].map((n) => `/uploads/gallery/${n}.webp`);

/** Endless horizontal marquee; the list is doubled so the -50% keyframe loops seamlessly. */
function AicoeGallerySlider() {
  return (
    <section className="aicoe-gallery" aria-label="Gallery of the AI Centre of Excellence">
      <div className="aicoe-gallery__viewport">
        <div className="aicoe-gallery__track">
          {[...galleryImages, ...galleryImages].map((src, i) => (
            <div className="aicoe-gallery__item" key={i} aria-hidden={i >= galleryImages.length}>
              <img
                src={src}
                alt={i < galleryImages.length ? `AI Centre of Excellence gallery photo ${i + 1}` : ''}
                width="1570"
                height="1080"
                loading="lazy"
                decoding="async"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AicoeBannerImages() {
  return (
    <>
      {bannerSections.map(({ fullBleed, ...imageProps }, index) => (
        <Fragment key={imageProps.src}>
          <section className={fullBleed ? 'aicoe-static-banner aicoe-static-banner--full' : 'aicoe-static-banner'} aria-label={imageProps.alt}>
            {fullBleed
              ? <img {...imageProps} data-reveal />
              : <div className="container"><img {...imageProps} data-reveal data-parallax="10" /></div>}
          </section>
          {index === 0 && <AicoeGallerySlider />}
        </Fragment>
      ))}
    </>
  );
}

/**
 * Light scroll motion: elements with [data-reveal] fade/rise in once, and
 * elements with [data-parallax="<px>"] drift slower than the page by up to
 * that many pixels. Progress (--p, -1..1) is written per element in one rAF.
 */
function useScrollMotion(ref: React.RefObject<HTMLElement | null>) {
  useLayoutEffect(() => {
    const root = ref.current;
    if (!root || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    root.classList.add('aicoe-motion');
    const visible = new Set<HTMLElement>();
    let frame = 0;

    const update = () => {
      frame = 0;
      const vh = window.innerHeight;
      visible.forEach((el) => {
        if (el.dataset.parallax === undefined) return;
        const r = el.getBoundingClientRect();
        const p = (r.top + r.height / 2 - vh / 2) / (vh / 2 + r.height / 2);
        el.style.setProperty('--p', Math.max(-1, Math.min(1, p)).toFixed(4));
      });
    };
    const schedule = () => { if (!frame) frame = requestAnimationFrame(update); };

    const io = new IntersectionObserver((entries) => {
      entries.forEach(({ target, isIntersecting }) => {
        const el = target as HTMLElement;
        if (isIntersecting) {
          visible.add(el);
          if (el.dataset.reveal !== undefined) el.classList.add('is-inview');
        } else {
          visible.delete(el);
        }
      });
      schedule();
    }, { rootMargin: '10% 0px 10% 0px' });

    root.querySelectorAll<HTMLElement>('[data-reveal], [data-parallax]').forEach((el) => {
      const speed = Number(el.dataset.parallax);
      if (speed) el.style.setProperty('--speed', `${speed}px`);
      io.observe(el);
    });

    window.addEventListener('scroll', schedule, { passive: true });
    window.addEventListener('resize', schedule);
    return () => {
      io.disconnect();
      window.removeEventListener('scroll', schedule);
      window.removeEventListener('resize', schedule);
      if (frame) cancelAnimationFrame(frame);
      root.classList.remove('aicoe-motion');
    };
  }, [ref]);
}

export default function Aicoe() {
  const mainRef = useRef<HTMLElement>(null);
  useScrollMotion(mainRef);

  return (
    <main ref={mainRef}>
      {/* 1. Hero Banner */}
      <section className="aicoe-hero" aria-label="AI-CoE Hero Banner">
        <img
          src="/uploads/aicoe.webp"
          alt="MeitY IndiaAI Chhattisgarh Centre of Excellence in Artificial Intelligence, NIT Raipur - Advancing Multidisciplinary AI for Research, Innovation and Entrepreneurship in Mining, Minerals, Steel, Industries and Healthcare"
          className="aicoe-hero__img"
          width="2744"
          height="1080"
          loading="eager"
          decoding="async"
          fetchPriority="high"
        />
        <h1 className="visually-hidden">
          MeitY IndiaAI Chhattisgarh Centre of Excellence in Artificial Intelligence, NIT Raipur
        </h1>
      </section>

      {/* 2. About AI-CoE (Overview) */}
      <section className="aicoe-about-section">
        <div className="container">
          <div className="aicoe-about-grid">
            {/* Left Column: Structured Heading, Sub-heading, Justified Body */}
            <div className="aicoe-about__content" data-reveal>
              <span className="aicoe-about__eyebrow">Overview</span>
              <h2 className="aicoe-about__title">About the Centre of Excellence</h2>
              <h3 className="aicoe-about__subtitle">
                A National Hub for Applied AI Research, Innovation &amp; Entrepreneurship
              </h3>
              <div className="aicoe-about__divider" />

              <div className="aicoe-about__body">
                <p>
                  The MeitY IndiaAI Chhattisgarh Centre of Excellence in Artificial Intelligence, at NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE) is envisioned as a premier innovation hub dedicated to advancing AI-driven research, startup incubation, workforce development, and industry adoption. Supported by the IndiaAI Mission, Ministry of Electronics and Information Technology, NIT Raipur, Government of Chhattisgarh and aligned with the vision of Viksit Bharat, the Centre aims to accelerate digital transformation across key sectors of Chhattisgarh and India.
                </p>
                <p>
                  The Centre of Excellence serves as a bridge between academic research, industry challenges, government initiatives, and entrepreneurial innovation. By leveraging NIT Raipur’s academic expertise and strategic partnerships, the Centre develops scalable AI solutions that address real-world problems in mining, metallurgy, healthcare, and advanced manufacturing.
                </p>
              </div>
            </div>

            {/* Right Column: Entry and indoor facility photos */}
            <div className="aicoe-about__image-space">
              <img src="/uploads/entry.webp" alt="Entrance of the AI Centre of Excellence" width="1570" height="1080" loading="lazy" decoding="async" data-reveal data-parallax="8" />
              <img src="/uploads/inside.webp" alt="Interior of the AI Centre of Excellence" width="1570" height="1080" loading="lazy" decoding="async" data-reveal data-parallax="22" />
            </div>
          </div>
        </div>
      </section>

      <AicoeBannerImages />

    </main>
  );
}
