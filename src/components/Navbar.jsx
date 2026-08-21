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

  // Handle navbar section navigation
  const handleNavigation = (href) => {
    closeMenu();

    // If already on home page
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

    // If on service/detail page
    navigate(`/${href}`);
  };

  // Logo click
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

        {/* Logo + Company Name */}
        <a
          href="/"
          className="navbar-brand"
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="Maverick Engineers Logo"
            className="navbar-logo-image"
          />

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

          {/* Call Now */}
          <a
            href="tel:0553731009"
            className="call-button"
          >
            <Phone size={17} />
            <span>Call Now</span>
          </a>

        </nav>

        {/* Mobile Menu Button */}
        <button
          className="menu-button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={isOpen}
        >
          {isOpen ? (
            <X size={28} />
          ) : (
            <Menu size={28} />
          )}
        </button>

      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="mobile-menu">

          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="mobile-link"
              onClick={(e) => {
                e.preventDefault();
                handleNavigation(link.href);
              }}
            >
              {link.name}
            </a>
          ))}

          {/* Mobile Call Button */}
          <a
            href="tel:0553731009"
            className="call-button mobile-call"
            onClick={closeMenu}
          >
            <Phone size={18} />
            <span>Call Now</span>
          </a>

        </nav>
      )}
    </header>
  );
}

export default Navbar;