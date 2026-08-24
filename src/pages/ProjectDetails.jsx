import {
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";

import {
  useEffect,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import { projects } from "../data/projects";

import "./ProjectDetails.css";

function ProjectDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  // =========================================
  // START PROJECT DETAILS FROM TOP
  // =========================================
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [slug]);

  // =========================================
  // FIND PROJECT
  // =========================================
  const project = projects.find(
    (item) => item.slug === slug
  );

  // =========================================
  // BACK TO PROJECTS
  // =========================================
  const handleBackToProjects = () => {
    navigate("/", {
      state: {
        scrollTo: "projects",
      },
    });
  };

  // =========================================
  // CONTACT
  // =========================================
  const handleContact = () => {
    navigate("/", {
      state: {
        scrollTo: "contact",
      },
    });
  };

  // =========================================
  // PROJECT NOT FOUND
  // =========================================
  if (!project) {
    return (
      <section className="project-details-page">

        <div className="project-not-found">

          <h1>
            Project Not Found
          </h1>

          <p>
            We could not find this project.
          </p>

          <button
            type="button"
            className="back-projects-btn"
            onClick={handleBackToProjects}
          >
            <ArrowLeft size={18} />
            Back to Projects
          </button>

        </div>

      </section>
    );
  }

  return (
    <main className="project-details-page">

      {/* =========================================
          HERO
      ========================================= */}

      <section className="project-details-hero">

        <img
          src={project.image}
          alt={project.title}
          className="project-details-image"
        />

        <div className="project-details-overlay"></div>

        <div className="project-details-hero-content">

          <span className="project-details-label">
            OUR PROJECT
          </span>

          <h1>
            {project.title}
          </h1>

          <p>
            {project.category}
          </p>

        </div>

      </section>

      {/* =========================================
          CONTENT
      ========================================= */}

      <section className="project-details-container">

        {/* Back Button */}

        <button
          type="button"
          className="back-projects-btn"
          onClick={handleBackToProjects}
        >
          <ArrowLeft size={18} />
          Back to Projects
        </button>

        <div className="project-details-content">

          {/* =====================================
              MAIN CONTENT
          ===================================== */}

          <div className="project-details-main">

            <span className="project-details-small-label">
              PROJECT DETAILS
            </span>

            <h2>
              {project.title}
            </h2>

            <p className="project-details-description">
              {project.details}
            </p>

            <p>
              Maverick Engineers delivers professional
              engineering solutions with a strong focus on
              quality, reliability, safety and customer
              satisfaction.
            </p>

          </div>

          {/* =====================================
              SIDEBAR
          ===================================== */}

          <aside className="project-details-sidebar">

            <div className="project-info-card">

              <h3>
                Project Highlights
              </h3>

              <div className="project-feature">
                <CheckCircle2 size={20} />
                <span>
                  Professional Execution
                </span>
              </div>

              <div className="project-feature">
                <CheckCircle2 size={20} />
                <span>
                  Quality Solutions
                </span>
              </div>

              <div className="project-feature">
                <CheckCircle2 size={20} />
                <span>
                  Reliable Performance
                </span>
              </div>

              <div className="project-feature">
                <CheckCircle2 size={20} />
                <span>
                  Customer Focused
                </span>
              </div>

            </div>

            <div className="project-contact-card">

              <span>
                HAVE A PROJECT?
              </span>

              <h3>
                Let's discuss your requirements.
              </h3>

              <button
                type="button"
                onClick={handleContact}
              >
                Contact Us
                <ArrowLeft size={18} />
              </button>

            </div>

          </aside>

        </div>
      </section>

    </main>
  );
}

export default ProjectDetails;