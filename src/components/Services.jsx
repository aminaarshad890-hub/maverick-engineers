import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { services } from "../data/services";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  return (
    <section id="services" className="services-section">

      <div className="services-container">

        {/* =========================
            SECTION HEADER
        ========================= */}

        <div className="services-header">

          <div className="services-heading-wrap">

            <span className="section-label">
              WHAT WE OFFER
            </span>

            <h2>
              Our Engineering
              <span> Services</span>
            </h2>

          </div>

          <p>
            Reliable and professional engineering solutions designed
            for residential, commercial and industrial requirements.
          </p>

        </div>


        {/* =========================
            SERVICES GRID
        ========================= */}

        <div className="services-grid">

          {services.map((service) => {

            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.id}
              >

                {/* =========================
                    SERVICE IMAGE
                ========================= */}

                <div className="service-image-wrapper">

                  <img
                    src={service.image}
                    alt={service.title}
                    className="service-image"
                  />

                  <span className="service-number">
                    {String(service.id).padStart(2, "0")}
                  </span>

                </div>


                {/* =========================
                    CARD CONTENT
                ========================= */}

                <div className="service-card-content">

                  {/* ICON */}

                  <div className="service-icon">
                    <Icon
                      size={23}
                      strokeWidth={1.8}
                    />
                  </div>


                  {/* TITLE */}

                  <h3>
                    {service.title}
                  </h3>


                  {/* DESCRIPTION */}

                  <p>
                    {service.description}
                  </p>


                  {/* VIEW DETAILS */}

                  <button
                    type="button"
                    className="service-details-btn"
                    onClick={() =>
                      navigate(`/services/${service.slug}`)
                    }
                  >
                    <span>View Details</span>

                    <ArrowUpRight size={16} />
                  </button>

                </div>

              </article>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default Services;