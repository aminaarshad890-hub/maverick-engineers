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

      <div className="footer-container">

        {/* Company */}
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

        </div>

        {/* Quick Links */}
        <div className="footer-column">

          <h3>Quick Links</h3>

          <a href="#home">Home</a>
          <a href="#about">About Us</a>
          <a href="#services">Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#contact">Contact</a>

        </div>

        {/* Services */}
        <div className="footer-column">

          <h3>Our Services</h3>

          <a href="#services">Electrical Services</a>
          <a href="#services">Solar System Installation</a>
          <a href="#services">Genset Services</a>
          <a href="#services">Security Systems</a>
          <a href="#services">Mechanical Services</a>

        </div>

        {/* Contact */}
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
            Plot 3, Behind Climax Garden Masjid,
            Near Aleena Hotel, G.T. Road, Gujranwala
          </p>

        </div>

      </div>

      {/* Bottom */}
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