import {
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Clock3,
  Send,
} from "lucide-react";

import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">

      <div className="contact-container">

        {/* Header */}
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

        <div className="contact-content">

          {/* Contact Information */}
          <div className="contact-info">

            {/* Phone */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <Phone size={23} />
              </div>

              <div>
                <h3>Phone</h3>

                <a href="tel:0553731009">
                  055-3731009
                </a>
              </div>

            </div>

            {/* WhatsApp */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <MessageCircle size={23} />
              </div>

              <div>
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

            {/* Email 1 */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <Mail size={23} />
              </div>

              <div>
                <h3>Email</h3>

                <a href="mailto:maverick_engineers@live.com">
                  maverick_engineers@live.com
                </a>
              </div>

            </div>

            {/* Email 2 */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <Mail size={23} />
              </div>

              <div>
                <h3>Direct Email</h3>

                <a href="mailto:ehsan@maverickengineers.com.pk">
                  ehsan@maverickengineers.com.pk
                </a>
              </div>

            </div>

            {/* Address */}
            <div className="contact-info-card contact-address">

              <div className="contact-icon">
                <MapPin size={23} />
              </div>

              <div>
                <h3>Our Address</h3>

                <p>
                  Plot 3, Behind Climax Garden Masjid,
                  Near Aleena Hotel, G.T. Road,
                  Gujranwala
                </p>
              </div>

            </div>

            {/* Working Hours */}
            <div className="contact-info-card">

              <div className="contact-icon">
                <Clock3 size={23} />
              </div>

              <div>
                <h3>Working Hours</h3>

                <p>
                  Monday - Saturday
                  <br />
                  9:00 AM - 6:00 PM
                </p>
              </div>

            </div>

          </div>

          {/* Contact Form */}
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