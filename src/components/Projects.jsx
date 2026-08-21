import { useEffect, useRef, useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { projects } from "../data/projects";
import "./Projects.css";

function Projects() {
  const navigate = useNavigate();

  const [activeProject, setActiveProject] = useState(null);

  const rotationRef = useRef(null);
  const angleRef = useRef(0);

  // =========================
  // AUTO ROTATION
  // =========================

  useEffect(() => {
    const rotate = () => {
      angleRef.current += 0.15;

      if (rotationRef.current) {
        rotationRef.current.style.transform =
          `rotate(${angleRef.current}deg)`;
      }

      requestAnimationFrame(rotate);
    };

    const animation = requestAnimationFrame(rotate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, []);

  // =========================
  // PROJECT CLICK
  // =========================

  const handleProjectClick = (project) => {
    navigate(`/projects/${project.slug}`);
  };

  return (
    <section
      id="projects"
      className="projects-section"
    >
      <div className="projects-container">

        {/* =========================
            LEFT SIDE
        ========================= */}

        <div className="projects-intro">

          <span className="projects-label">
            OUR WORK
          </span>

          <h2>
            Featured
            <span> Projects</span>
          </h2>

          <p>
            Explore our engineering projects and discover
            how Maverick Engineers delivers reliable,
            professional and innovative solutions.
          </p>

          <button
            type="button"
            className="projects-view-btn"
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Start a Project
            <ArrowUpRight size={18} />
          </button>

        </div>

        {/* =========================
            RIGHT SIDE
        ========================= */}

        <div className="projects-orbit-area">

          <div
            className="projects-orbit"
            ref={rotationRef}
          >

            {projects.map((project, index) => {

              const angle =
                (360 / projects.length) * index;

              const isActive =
                activeProject === project.id;

              return (
                <div
                  key={project.id}
                  className={`project-orbit-item ${
                    isActive ? "active" : ""
                  }`}
                  style={{
                    "--angle": `${angle}deg`,
                  }}
                  onMouseEnter={() =>
                    setActiveProject(project.id)
                  }
                  onMouseLeave={() =>
                    setActiveProject(null)
                  }
                  onClick={() =>
                    handleProjectClick(project)
                  }
                >

                  <div className="project-orbit-card">

                    <img
                      src={project.image}
                      alt={project.title}
                    />

                    <div className="project-orbit-overlay">
                      <span>
                        {project.category}
                      </span>

                      <h3>
                        {project.title}
                      </h3>
                    </div>

                  </div>

                </div>
              );
            })}

          </div>

          {/* Center Circle */}

          <div className="projects-orbit-center">

            <span>
              MAVERICK
            </span>

            <strong>
              ENGINEERS
            </strong>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;