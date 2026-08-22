import {
  MapPin,
  Phone,
  Mail,
  Clock3,
  Send,
} from "lucide-react";

import { FaWhatsapp } from "react-icons/fa";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">

        {/* =========================
            HEADER
        ========================= */}

        <div className="contact-header">
          <span className="contact-label">
            GET IN TOUCH
          </span>

          <h2>
            Let's Work
            <span> Together.</span>
          </h2>

          <p>
            Have an engineering requirement or need professional
            technical assistance? Get in touch with Maverick Engineers.
          </p>
        </div>

        {/* =========================
            CONTENT
        ========================= */}

        <div className="contact-content">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <div className="contact-info">

            {/* PHONE */}
            <div className="contact-info-card">
              <div className="contact-icon phone-icon">
                <Phone size={20} />
              </div>

              <div className="contact-card-text">
                <h3>Phone</h3>

                <a href="tel:0553731009">
                  055-3731009
                </a>
              </div>
            </div>

            {/* WHATSAPP */}
            <div className="contact-info-card">
              <div className="contact-icon whatsapp-icon">
                <FaWhatsapp />
              </div>

              <div className="contact-card-text">
                <h3>WhatsApp</h3>

                <a
                  href="https://wa.me/923030217702"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  0303-0217702
                </a>
              </div>
            </div>

            {/* EMAIL */}
            <div className="contact-info-card">
              <div className="contact-icon email-icon">
                <Mail size={20} />
              </div>

              <div className="contact-card-text">
                <h3>Email</h3>

                <a href="mailto:maverick_engineers@live.com">
                  maverick_engineers@live.com
                </a>
              </div>
            </div>

            {/* DIRECT EMAIL */}
            <div className="contact-info-card">
              <div className="contact-icon direct-email-icon">
                <Mail size={20} />
              </div>

              <div className="contact-card-text">
                <h3>Direct Email</h3>

                <a href="mailto:ehsan@maverickengineers.com.pk">
                  ehsan@maverickengineers.com.pk
                </a>
              </div>
            </div>

            {/* ADDRESS */}
            <div className="contact-info-card contact-address">
              <div className="contact-icon address-icon">
                <MapPin size={20} />
              </div>

              <div className="contact-card-text">
                <h3>Our Address</h3>

                <p>
                  Plot 3, Behind Climax Garden Masjid,
                  Near Aleena Hotel, G.T. Road,
                  Gujranwala
                </p>
              </div>
            </div>

            {/* WORKING HOURS */}
            <div className="contact-info-card">
              <div className="contact-icon hours-icon">
                <Clock3 size={20} />
              </div>

              <div className="contact-card-text">
                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>
            </div>

          </div>

          {/* =========================
              CONTACT FORM
          ========================= */}

          <div className="contact-form-wrapper">

            <form className="contact-form">

              <div className="form-row">

                <div className="form-group">
                  <label>Your Name</label>

                  <input
                    type="text"
                    placeholder="Enter your name"
                  />
                </div>

                <div className="form-group">
                  <label>Phone Number</label>

                  <input
                    type="tel"
                    placeholder="Enter phone number"
                  />
                </div>

              </div>

              <div className="form-group">
                <label>Email Address</label>

                <input
                  type="email"
                  placeholder="Enter your email"
                />
              </div>

              <div className="form-group">
                <label>Subject</label>

                <input
                  type="text"
                  placeholder="How can we help?"
                />
              </div>

              <div className="form-group">
                <label>Message</label>

                <textarea
                  rows="5"
                  placeholder="Tell us about your requirement..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="contact-submit"
              >
                Send Message
                <Send size={17} />
              </button>

            </form>

          </div>

        </div>
      </div>
    </section>
  );
}

export default Contact;