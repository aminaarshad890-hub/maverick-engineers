import { ArrowLeft, ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { services } from "../data/services";
import "./Services.css";

function Services() {
  const navigate = useNavigate();

  const [currentIndex, setCurrentIndex] = useState(0);

  // Card width + gap
  const cardMove = 288;

  const handleNext = () => {
    if (currentIndex < services.length - 1) {
      setCurrentIndex((prev) => prev + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prev) => prev - 1);
    }
  };

  const handleViewDetails = (slug) => {
    navigate(`/services/${slug}`);
  };

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
            SERVICES SLIDER
        ========================= */}

        <div className="services-slider-wrapper">

          {/* LEFT ARROW */}

          <button
            type="button"
            className="services-arrow services-arrow-left"
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            aria-label="Previous service"
          >
            <ArrowLeft size={20} />
          </button>


          {/* =========================
              VIEWPORT
          ========================= */}

          <div className="services-slider">

            <div
              className="services-track"
              style={{
                transform: `translateX(-${currentIndex * cardMove}px)`,
                transition: "transform 0.45s ease",
              }}
            >

              {services.map((service) => {

                const Icon = service.icon;

                return (
                  <article
                    className="service-card"
                    key={service.id}
                  >

                    {/* =========================
                        IMAGE
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
                        CONTENT
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
                          handleViewDetails(service.slug)
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


          {/* RIGHT ARROW */}

          <button
            type="button"
            className="services-arrow services-arrow-right"
            onClick={handleNext}
            disabled={currentIndex === services.length - 1}
            aria-label="Next service"
          >
            <ArrowRight size={20} />
          </button>

        </div>

      </div>

    </section>
  );
}

export default Services;