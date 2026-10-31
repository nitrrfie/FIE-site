import { Link } from 'react-router-dom';
import '../styles/footer.css';
import { driveImageUrl } from '../utils/googleDrive';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Logo & Description */}
            <div className="footer__col footer__col--wide">
              <Link to="/" className="footer__logo">
                <img src={driveImageUrl('/uploads/logo-NITRRFIE.png')} alt="NITRRFIE" height="60" />
              </Link>
              <p className="footer__desc">
                NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE) is a
                Section-8 not-for-profit company dedicated to fostering entrepreneurship and
                innovation at NIT Raipur.
              </p>
              <div className="footer__partners">
                <img src={driveImageUrl('/uploads/DST-NIDHI_Original-Logo-H.png')} alt="DST NIDHI" height="36" />
                <img src={driveImageUrl('/uploads/Startup-India.png')} alt="Startup India" height="36" />
                <img src={driveImageUrl('/uploads/Startup-Chhattisgarh.png')} alt="Startup Chhattisgarh" height="36" />
                <img src={driveImageUrl('/uploads/NITRR-1.png')} alt="NIT Raipur" height="36" />
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__col">
              <h3 className="footer__heading">Quick Links</h3>
              <ul className="footer__links">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/programmes">Programmes</Link></li>
                <li><Link to="https://docs.google.com/forms/d/e/1FAIpQLSfSK5YM3qAJscTdMboNMh9FpP5F5bl3ikTcDjc4BAh9kb13Wg/viewform?usp=sharing&ouid=111435562742645601337">Apply Now</Link></li>
                <li><a href="https://store.nitrrfie.in" target="_blank" rel="noopener noreferrer">NIT Raipur Store</a></li>
                <li><Link to="/highlights">Highlights</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>

            {/* Programmes */}
            <div className="footer__col">
              <h3 className="footer__heading">Programmes</h3>
              <ul className="footer__links">
                <li><Link to="/programmes#eir">NIDHI-EIR</Link></li>
                <li><Link to="/programmes#pre-incubation">Pre-Incubation</Link></li>
                <li><Link to="/programmes#incubation">Incubation</Link></li>
                <li><Link to="/programmes#acceleration">Acceleration</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div className="footer__col">
              <h3 className="footer__heading">Contact Us</h3>
              <div className="footer__contact">
                <p>
                  <strong>NITRRFIE</strong><br />
                  NIT Raipur Campus,<br />
                  G.E. Road, Raipur,<br />
                  Chhattisgarh - 492010
                </p>
                <p>
                  <a href="mailto:nitrrfie@nitrr.ac.in">nitrrfie@nitrr.ac.in</a>
                </p>
                <p>
                  <a href="https://www.nitrrfie.in" target="_blank" rel="noopener noreferrer">
                    www.nitrrfie.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer__bottom">
        <div className="container">
          <p>
            Copyright &copy; {new Date().getFullYear()} &ndash;{' '}
            <span>NIT Raipur Foundation for Innovation &amp; Entrepreneurship (NITRRFIE)</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
