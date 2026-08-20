import { useEffect, useState } from "react";
import { ArrowRight, Phone } from "lucide-react";
import "./Hero.css";

import hero1 from "../assets/images/hero-1.jpg";
import hero2 from "../assets/images/hero-2.jpg";
import hero3 from "../assets/images/hero-3.jpg";
import hero4 from "../assets/images/hero-4.jpg";

const heroImages = [hero1, hero2, hero3, hero4];

function Hero() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="hero">

      {/* Background Images */}
      <div className="hero-background">
        {heroImages.map((image, index) => (
          <div
            key={image}
            className={`hero-slide ${
              index === currentImage ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image})`,
            }}
          />
        ))}
      </div>

      {/* Dark Overlay */}
      <div className="hero-overlay"></div>

      {/* Hero Content */}
      <div className="hero-container">
        <div className="hero-content">

          <span className="hero-small-title">
            PROFESSIONAL ENGINEERING SOLUTIONS
          </span>

          <h1>
            Powering Solutions
            <br />
            <span>Engineering Excellence</span>
          </h1>

          <p>
            Reliable engineering solutions for residential, commercial
            and industrial needs. From solar and power systems to
            electrical, mechanical and civil services.
          </p>

          <div className="hero-buttons">

            <a href="#contact" className="hero-primary-btn">
              Get a Quote
              <ArrowRight size={18} />
            </a>

            <a href="tel:0553731009" className="hero-secondary-btn">
              <Phone size={18} />
              Call Now
            </a>

          </div>
        </div>
      </div>

      {/* Slider Indicators */}
      <div className="hero-indicators">
        {heroImages.map((_, index) => (
          <button
            key={index}
            type="button"
            aria-label={`Show slide ${index + 1}`}
            className={`hero-dot ${
              index === currentImage ? "active" : ""
            }`}
            onClick={() => setCurrentImage(index)}
          />
        ))}
      </div>

      {/* Bottom Scroll Indicator */}
      <div className="hero-scroll">
        <span>Scroll to explore</span>
        <div className="scroll-line"></div>
      </div>

    </section>
  );
}

export default Hero;