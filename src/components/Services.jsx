import { ArrowUpRight } from "lucide-react";
import { services } from "../data/services";
import "./Services.css";

function Services() {
  return (
    <section id="services" className="services-section">

      <div className="services-container">

        {/* Section Header */}
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

        {/* Services Grid */}
        <div className="services-grid">

          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                className="service-card"
                key={service.id}
              >

                <div className="service-card-top">

                  <div className="service-icon">
                    <Icon size={27} strokeWidth={1.8} />
                  </div>

                  <span className="service-number">
                    {String(service.id).padStart(2, "0")}
                  </span>

                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>

                <div className="service-arrow">
                  <ArrowUpRight size={20} />
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