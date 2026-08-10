
import '../styles/pages.css';
import '../styles/contact.css';

const IconMapPin = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);
const IconMail = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" /><polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconGlobe = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
  </svg>
);
const IconClock = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
  </svg>
);

const contactDetails = [
  { icon: <IconMapPin />, label: 'Address', content: 'CDC, 2nd Floor, NIT Raipur,\nG.E. Road, Raipur, Chhattisgarh — 492010' },
  { icon: <IconMail />, label: 'Email', content: 'nitrrfie@nitrr.ac.in', href: 'mailto:nitrrfie@nitrr.ac.in' },
  { icon: <IconGlobe />, label: 'Website', content: 'nitrrfie.in', href: '/' },
  { icon: <IconClock />, label: 'Office Hours', content: 'Mon – Fri: 10:00 AM – 6:00 PM\nSat – Sun: Closed' },
];

export default function Contact() {

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you! Your message has been sent. We will respond within 2 working days.');
  };

  return (
    <main>
      <div className="page-hero" style={{ backgroundImage: "url('/uploads/2023/01/light-bulb-g03e2dcaec_1920.jpg')" }}>
        <div className="page-hero__overlay" />
        <div className="page-hero__content">
          <h1 className="page-hero__title" style={{ fontFamily: 'var(--font-heading)' }}>Contact Us</h1>
          <p className="page-hero__breadcrumb"><a href="/">Home</a> &rsaquo; Contact</p>
        </div>
      </div>

      <section className="section" style={{ padding: '80px 0' }}>
        <div className="container">
          <div className="contact-layout">
            
            <div className="contact-grid">
              {/* Left Column: Info */}
              <div className="contact-info">
                <span className="section-eyebrow" style={{ letterSpacing: '2px', fontWeight: 600 }}>CONNECT WITH US</span>
                <h2 className="contact-info__heading">We'd love to hear from you</h2>
                <p className="contact-info__sub">
                  Whether you have questions about incubation, need guidance on your startup journey, or wish to collaborate, please feel free to reach out. We typically respond within 2 working days.
                </p>
                <div className="contact-details">
                  {contactDetails.map((d, i) => (
                    <div key={i} className="contact-detail">
                      <div className="contact-detail__icon">{d.icon}</div>
                      <div className="contact-detail__text">
                        <h4>{d.label}</h4>
                        {d.href ? (
                          <p><a href={d.href}>{d.content}</a></p>
                        ) : (
                          <p>{d.content}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Form */}
              <div className="contact-form-wrapper">
                <h3>Send a Message</h3>
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Full Name</label>
                    <input type="text" id="name" className="form-control" placeholder="John Doe" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address</label>
                    <input type="email" id="email" className="form-control" placeholder="john@example.com" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input type="text" id="subject" className="form-control" placeholder="How can we help?" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" className="form-control" placeholder="Write your message here..." required></textarea>
                  </div>
                  <button type="submit" className="btn btn--primary">Send Message</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map (Full Bleed) */}
      <div className="contact-map-wrapper">
        <div className="contact-map__bar">
          <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px', width: '100%' }}>
            <div className="contact-map__label">
              <IconMapPin />
              <span>CDC, 2nd Floor, NIT Raipur, Chhattisgarh</span>
            </div>
            <a
              href="https://maps.google.com/?q=NIT+Raipur+Chhattisgarh"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--primary"
              style={{ padding: '10px 22px', fontSize: '0.85rem', background: '#fff', color: 'var(--color-secondary)' }}
            >
              Open in Maps
            </a>
          </div>
        </div>
        <iframe
          className="contact-map__iframe"
          title="NIT Raipur Location"
          src="https://maps.google.com/maps?q=NIT+Raipur+GE+Road+Chhattisgarh&output=embed&z=15"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </main>
  );
}
