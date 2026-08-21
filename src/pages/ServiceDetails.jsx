import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";
import { services } from "../data/services";
import "./ServiceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // Find selected service
  const service = services.find(
    (item) => item.slug === slug
  );

  // If service doesn't exist
  if (!service) {
    return (
      <section className="service-details-page">
        <div className="service-not-found">
          <h1>Service Not Found</h1>

          <p>
            The service you are looking for could not be found.
          </p>

          <button
            className="back-services-btn"
            onClick={() => navigate("/#services")}
          >
            <ArrowLeft size={18} />
            Back to Services
          </button>
        </div>
      </section>
    );
  }

  const Icon = service.icon;

  return (
    <section className="service-details-page">

      {/* Hero */}
      <div className="service-details-hero">

        <div className="service-details-overlay"></div>

        <img
          src={service.image}
          alt={service.title}
          className="service-details-image"
        />

        <div className="service-details-hero-content">

          <span className="service-details-label">
            OUR SERVICES
          </span>

          <h1>{service.title}</h1>

          <p>
            Professional engineering solutions
            designed around your requirements.
          </p>

        </div>
      </div>

      {/* Details Content */}
      <div className="service-details-container">

        {/* Back Button */}
        <button
          className="back-services-btn"
          onClick={() => navigate("/#services")}
        >
          <ArrowLeft size={18} />
          Back to Services
        </button>

        <div className="service-details-content">

          {/* Left */}
          <div className="service-details-main">

            <div className="service-details-icon">
              <Icon size={34} strokeWidth={1.7} />
            </div>

            <span className="service-details-small-label">
              SERVICE DETAILS
            </span>

            <h2>{service.title}</h2>

            <p className="service-details-description">
              {service.details}
            </p>

            <p>
              Maverick Engineers provides reliable and
              professional solutions with a focus on quality,
              safety and customer satisfaction. Our team works
              according to the specific requirements of every
              project to deliver practical and dependable
              engineering services.
            </p>

          </div>

          {/* Right */}
          <div className="service-details-sidebar">

            <div className="service-info-card">

              <h3>Why Choose Us?</h3>

              <div className="service-feature">
                <CheckCircle2 size={20} />
                <span>Professional Service</span>
              </div>

              <div className="service-feature">
                <CheckCircle2 size={20} />
                <span>Reliable Solutions</span>
              </div>

              <div className="service-feature">
                <CheckCircle2 size={20} />
                <span>Quality Workmanship</span>
              </div>

              <div className="service-feature">
                <CheckCircle2 size={20} />
                <span>Customer Focused</span>
              </div>

            </div>

            <div className="service-contact-card">

              <span>NEED OUR SERVICE?</span>

              <h3>
                Let's discuss your project.
              </h3>

              <button
                onClick={() => navigate("/#contact")}
              >
                Contact Us
                <ArrowLeft size={18} />
              </button>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default ServiceDetails;