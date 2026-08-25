import {
  Phone,
  MessageCircle,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* Background Image */}
      <div className="footer-bg"></div>

      {/* Dark Overlay */}
      <div className="footer-overlay"></div>

      <div className="footer-container">

        {/* =========================================
            COMPANY
        ========================================= */}

        <div className="footer-company">

          <a href="#home" className="footer-brand">

            <img
              src="/logo.png"
              alt="Maverick Engineers"
            />

            <div className="footer-brand-text">
              <span>MAVERICK</span>
              <small>ENGINEERS</small>
            </div>

          </a>

          <p>
            Professional engineering solutions for residential,
            commercial and industrial requirements.
          </p>

          <a
            href="#contact"
            className="footer-contact-button"
          >
            Contact Our Team
            <ArrowUpRight size={17} />
          </a>

          {/* =========================================
              SOCIAL MEDIA
          ========================================= */}

          <div className="footer-social">

            {/* Facebook */}

            <a
              href="https://www.facebook.com/profile.php?id=61580621642977"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon facebook-icon"
              aria-label="Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="currentColor"
              >
                <path d="M14 8h3V4h-3c-3.31 0-5 1.69-5 5v3H6v4h3v8h4v-8h3.5l.5-4H13V9c0-.67.33-1 1-1Z" />
              </svg>
            </a>

            {/* Instagram */}

            <a
              href="https://www.instagram.com/engin.eers1/"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-social-icon instagram-icon"
              aria-label="Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <rect
                  x="3"
                  y="3"
                  width="18"
                  height="18"
                  rx="5"
                />

                <circle
                  cx="12"
                  cy="12"
                  r="4"
                />

                <circle
                  cx="17.5"
                  cy="6.5"
                  r="1"
                  fill="currentColor"
                  stroke="none"
                />
              </svg>
            </a>

          </div>

        </div>


        {/* =========================================
            QUICK LINKS
        ========================================= */}

        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">
            Home
          </a>

          <a href="#about">
            About Us
          </a>

          <a href="#services">
            Services
          </a>

          <a href="#why-us">
            Why Choose Us
          </a>

          <a href="#contact">
            Contact
          </a>

        </div>


        {/* =========================================
            SERVICES
        ========================================= */}

        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#services">
            Electrical Services
          </a>

          <a href="#services">
            Solar System Installation
          </a>

          <a href="#services">
            Genset Services
          </a>

          <a href="#services">
            Security Systems
          </a>

          <a href="#services">
            Mechanical Services
          </a>

        </div>


        {/* =========================================
            CONTACT
        ========================================= */}

        <div className="footer-column footer-contact">

          <h3>Contact Us</h3>

          <a href="tel:0553731009">
            <Phone size={17} />
            055-3731009
          </a>

          <a
            href="https://wa.me/923030217702"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle size={17} />
            0303-0217702
          </a>

          <a href="mailto:maverick_engineers@live.com">
            <Mail size={17} />
            maverick_engineers@live.com
          </a>

          <a href="mailto:ehsan@maverickengineers.com.pk">
            <Mail size={17} />
            ehsan@maverickengineers.com.pk
          </a>

          <p>
            <MapPin size={17} />

            <span>
              Plot 3, Behind Climax Garden Masjid,
              Near Aleena Hotel, G.T. Road, Gujranwala
            </span>
          </p>

        </div>

      </div>


      {/* =========================================
          BOTTOM
      ========================================= */}

      <div className="footer-bottom">

        <div className="footer-bottom-container">

          <p>
            © {new Date().getFullYear()} Maverick Engineers.
            All Rights Reserved.
          </p>

          <p>
            Professional Engineering Solutions
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;