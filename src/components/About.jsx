import {
  Award,
  CheckCircle2,
  ShieldCheck,
  Users,
} from "lucide-react";
import "./About.css";

function About() {
  const features = [
    {
      icon: Award,
      title: "Professional Expertise",
      text: "Skilled engineering solutions delivered with professional standards and attention to detail.",
    },
    {
      icon: ShieldCheck,
      title: "Quality & Safety",
      text: "We focus on reliable solutions, quality workmanship and safe installation practices.",
    },
    {
      icon: Users,
      title: "Customer Focused",
      text: "Our solutions are designed around the specific requirements of every customer.",
    },
    {
      icon: CheckCircle2,
      title: "Reliable Solutions",
      text: "From electrical and solar systems to mechanical and civil services, we deliver dependable support.",
    },
  ];

  return (
    <section id="about" className="about-section">

      <div className="about-container">

        {/* Left Content */}
        <div className="about-content">

          <span className="section-label about-label">
            ABOUT MAVERICK ENGINEERS
          </span>

          <h2>
            Engineering Solutions
            <span> You Can Trust.</span>
          </h2>

          <p className="about-intro">
            Maverick Engineers provides professional engineering solutions
            for residential, commercial and industrial requirements.
          </p>

          <p className="about-description">
            Our services cover electrical, solar, mechanical, civil,
            telecommunication, security and power solutions. We focus on
            quality workmanship, reliable systems and practical solutions
            that meet our customers' needs.
          </p>

          <a href="#contact" className="about-button">
            Talk To Our Team
          </a>

        </div>

        {/* Right Features */}
        <div className="about-features">

          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <div className="about-feature" key={feature.title}>

                <div className="about-feature-icon">
                  <Icon size={24} strokeWidth={1.8} />
                </div>

                <div>
                  <h3>{feature.title}</h3>

                  <p>{feature.text}</p>
                </div>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default About;