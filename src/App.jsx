import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";

import { useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Projects from "./components/Projects";
import WhyChoose from "./components/WhyChoose";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import ServiceDetails from "./pages/ServiceDetails";
import ProjectDetails from "./pages/ProjectDetails";

// =========================================
// SCROLL HANDLER
// =========================================
function ScrollHandler() {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // =========================================
    // SPECIFIC SECTION SCROLL
    // ONLY WHEN STATE EXISTS
    // =========================================
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;

      const timer = setTimeout(() => {
        const element = document.querySelector(sectionId);

        if (element) {
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }

        // IMPORTANT:
        // Clear the navigation state so that
        // refreshing Home does NOT open Services.
        navigate("/", {
          replace: true,
          state: {},
        });
      }, 150);

      return () => clearTimeout(timer);
    }

    // =========================================
    // NORMAL PAGE CHANGE
    // =========================================
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [location.pathname, location.state, navigate]);

  return null;
}

// =========================================
// HOME
// =========================================
function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <About />

      <Services />

      <Projects />

      <WhyChoose />

      <Contact />

      <Footer />
    </>
  );
}

// =========================================
// APP
// =========================================
function App() {
  return (
    <BrowserRouter>

      <ScrollHandler />

      <Routes>

        {/* =========================
            HOME PAGE
        ========================= */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* =========================
            SERVICE DETAILS
        ========================= */}
        <Route
          path="/services/:slug"
          element={
            <>
              <Navbar />

              <ServiceDetails />

              <Footer />
            </>
          }
        />

        {/* =========================
            PROJECT DETAILS
        ========================= */}
        <Route
          path="/projects/:slug"
          element={
            <>
              <Navbar />

              <ProjectDetails />

              <Footer />
            </>
          }
        />

      </Routes>

    </BrowserRouter>
  );
}

export default App;