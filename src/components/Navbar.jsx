import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import "./Navbar.css";
import logo from "../assets/logo/maverick-logo.png";

const navLinks = [
  {
    name: "Home",
    href: "#home",
  },
  {
    name: "Services",
    href: "#services",
  },
  {
    name: "Projects",
    href: "#projects",
  },
  {
    name: "Why Choose Us",
    href: "#why-us",
  },
  {
    name: "About Us",
    href: "#about",
  },
  {
    name: "Contact Us",
    href: "#contact",
  },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleNavigation = (href) => {
    closeMenu();

    if (location.pathname === "/") {
      const element = document.querySelector(href);

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
      return;
    }

    navigate(`/${href}`);
  };

  const handleLogoClick = (e) => {
    e.preventDefault();
    closeMenu();

    if (location.pathname === "/") {
      const homeElement = document.querySelector("#home");

      if (homeElement) {
        homeElement.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    } else {
      navigate("/");
    }
  };

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Logo */}
        <a
          href="/"
          className="navbar-brand"
          onClick={handleLogoClick}
        >
          <div className="navbar-logo-box">
            <img
              src={logo}
              alt="Maverick Engineers Logo"
              className="navbar-logo-image"
            />
          </div>

          <div className="navbar-brand-text">
            <span className="brand-main">
              MAVERICK
            </span>

            <span className="brand-sub">
              ENGINEERS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-links">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="navbar-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Call Button */}
          <a
            href="tel:0553731009"
            className="call-button"
          >
            <span className="call-icon">
              <Phone size={16} />
            </span>

            <span>Call Now</span>
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className={`menu-button ${isOpen ? "menu-active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={25} />
          ) : (
            <Menu size={25} />
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`mobile-menu ${
          isOpen ? "mobile-menu-open" : ""
        }`}
      >
        <nav className="mobile-menu-inner">

          {navLinks.map((link, index) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              style={{
                "--delay": `${index * 0.04}s`,
              }}
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              <span>{link.name}</span>
              <span className="mobile-link-arrow">→</span>
            </a>
          ))}

          <a
            href="tel:0553731009"
            className="call-button mobile-call"
            onClick={closeMenu}
          >
            <span className="call-icon">
              <Phone size={17} />
            </span>

            <span>Call Now</span>
          </a>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;