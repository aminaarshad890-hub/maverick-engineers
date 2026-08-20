import {
  BadgeCheck,
  Clock3,
  Headphones,
  Wrench,
} from "lucide-react";
import "./WhyChoose.css";

function WhyChoose() {
  const reasons = [
    {
      icon: BadgeCheck,
      number: "01",
      title: "Quality Work",
      text: "We deliver engineering solutions with a strong focus on quality, precision and professional standards.",
    },
    {
      icon: Wrench,
      number: "02",
      title: "Technical Expertise",
      text: "Our services cover electrical, mechanical, civil, solar and power engineering requirements.",
    },
    {
      icon: Clock3,
      number: "03",
      title: "Reliable Service",
      text: "We believe in dependable solutions and professional support from installation to maintenance.",
    },
    {
      icon: Headphones,
      number: "04",
      title: "Customer Support",
      text: "Our team works closely with customers to understand their requirements and provide practical solutions.",
    },
  ];

  return (
    <section id="why-us" className="why-section">

      <div className="why-container">

        {/* Header */}

        <div className="why-header">

          <span className="why-label">
            WHY MAVERICK ENGINEERS
          </span>

          <h2>
            Built On Quality.
            <span> Driven By Excellence.</span>
          </h2>

          <p>
            We combine technical expertise, reliable service and
            professional workmanship to deliver engineering solutions
            our customers can depend on.
          </p>

        </div>

        {/* Reasons */}

        <div className="why-grid">

          {reasons.map((reason) => {
            const Icon = reason.icon;

            return (
              <div className="why-card" key={reason.number}>

                <div className="why-card-top">

                  <div className="why-icon">
                    <Icon size={25} strokeWidth={1.8} />
                  </div>

                  <span className="why-number">
                    {reason.number}
                  </span>

                </div>

                <h3>{reason.title}</h3>

                <p>{reason.text}</p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default WhyChoose;