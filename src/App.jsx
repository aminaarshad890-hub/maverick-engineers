import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

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
// SCROLL TO TOP ON PAGE CHANGE
// =========================================

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

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

      <ScrollToTop />

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