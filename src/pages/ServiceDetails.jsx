import {
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import {
  useEffect,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { services } from "../data/services";

import "./ServiceDetails.css";

function ServiceDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  /* =========================================
     START SERVICE DETAILS FROM TOP
  ========================================= */

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  /* =========================================
     FIND SERVICE
  ========================================= */

  const service = services.find(
    (item) => item.slug === slug
  );

  /* =========================================
     BACK TO SERVICES
  ========================================= */

  const handleBackToServices = () => {
    navigate("/", {
      state: {
        scrollTo: "services",
      },
    });
  };

  /* =========================================
     SERVICE NOT FOUND
  ========================================= */

  if (!service) {
    return (
      <section className="service-details-page">

        <div className="service-not-found">

          <h1>
            Service Not Found
          </h1>

          <p>
            The service you are looking for
            could not be found.
          </p>

          <button
            className="back-services-btn"
            onClick={handleBackToServices}
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

      {/* =========================================
          HERO
      ========================================= */}

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

          <h1>
            {service.title}
          </h1>

          <p>
            Professional engineering solutions
            designed around your requirements.
          </p>

        </div>

      </div>

      {/* =========================================
          DETAILS CONTENT
      ========================================= */}

      <div className="service-details-container">

        {/* Back Button */}

        <button
          className="back-services-btn"
          onClick={handleBackToServices}
        >
          <ArrowLeft size={18} />

          Back to Services
        </button>

        <div className="service-details-content">

          {/* =====================================
              LEFT CONTENT
          ===================================== */}

          <div className="service-details-main">

            <div className="service-details-icon">

              <Icon
                size={34}
                strokeWidth={1.7}
              />

            </div>

            <span className="service-details-small-label">
              SERVICE DETAILS
            </span>

            <h2>
              {service.title}
            </h2>

            <p className="service-details-description">
              {service.details}
            </p>

            <p>
              Maverick Engineers provides reliable
              and professional solutions with a
              focus on quality, safety and customer
              satisfaction. Our team works according
              to the specific requirements of every
              project to deliver practical and
              dependable engineering services.
            </p>

          </div>

          {/* =====================================
              RIGHT SIDEBAR
          ===================================== */}

          <div className="service-details-sidebar">

            {/* Why Choose Us */}

            <div className="service-info-card">

              <h3>
                Why Choose Us?
              </h3>

              <div className="service-feature">

                <CheckCircle2 size={20} />

                <span>
                  Professional Service
                </span>

              </div>

              <div className="service-feature">

                <CheckCircle2 size={20} />

                <span>
                  Reliable Solutions
                </span>

              </div>

              <div className="service-feature">

                <CheckCircle2 size={20} />

                <span>
                  Quality Workmanship
                </span>

              </div>

              <div className="service-feature">

                <CheckCircle2 size={20} />

                <span>
                  Customer Focused
                </span>

              </div>

            </div>

            {/* Contact Card */}

            <div className="service-contact-card">

              <span>
                NEED OUR SERVICE?
              </span>

              <h3>
                Let's discuss your project.
              </h3>

              <button
                onClick={() =>
                  navigate("/", {
                    state: {
                      scrollTo: "contact",
                    },
                  })
                }
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