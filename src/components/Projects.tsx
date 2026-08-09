import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import "../styles/projects.css";

import cyberImg from "../assets/projects/cybersecurity.jpg";
import theoremeImg from "../assets/projects/theoreme.jpg";
import droitesImg from "../assets/projects/droites.jpg";
import yoolImg from "../assets/projects/yool.jpg";

const projects = [
  {
    title: "Module Cybersécurité",
    description:
      "Module e-learning interactif créé avec Canva intégrant vidéos et quiz.",
    image: cyberImg,
    technologies: ["Canva", "H5P", "Animaker", "PPT"],
    path: "/projects/cybersecurity",
  },

  {
    title: "Théorème des milieux",
    description:
      "Module interactif de mathématiques avec Storyline.",
    image: theoremeImg,
    technologies: ["Storyline", "GeoGebra", "Manim", "Vyond"],
    path: "/projects/theoreme",
  },

  {
    title: "Droites remarquables",
    description:
      "Module interactif de mathématiques avec Storyline.",
    image: droitesImg,
    technologies: ["Storyline", "GeoGebra", "Manim"],
    path: "/projects/droites",
  },

  {
    title: "Portfolio React",
    description:
      "Portfolio interactif réalisé avec React, TypeScript et Framer Motion.",
    image: yoolImg,
    technologies: ["React", "TypeScript", "CSS", "VS Code"],
    path: "/",
  },
];

function Projects() {
  const handlePortfolioClick = () => {
    // Retour vers la page d'accueil
    window.history.pushState({}, "", "/");

    // Retour tout en haut de la page
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="projects" className="projects">
      <div className="projects-container">

        {/* Badge */}
        <span className="section-badge">
          Mes projets
        </span>

        {/* Titre */}
        <h2>
          Réalisations <span>professionnelles</span>
        </h2>

        {/* Projects Grid */}
        <div className="projects-grid">

          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >

              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
              />

              {/* Content */}
              <div className="project-content">

                {/* Titre */}
                <h3>{project.title}</h3>

                {/* Description */}
                <p>{project.description}</p>

                {/* Technologies */}
                <div className="project-tags">
                  {project.technologies.map((tag) => (
                    <span key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Button */}
                <div className="project-buttons">

                  {project.path === "/" ? (
                    <Link
                      to="/"
                      className="project-btn primary"
                      onClick={handlePortfolioClick}
                    >
                      Consulter le projet
                    </Link>
                  ) : (
                    <Link
                      to={project.path}
                      className="project-btn primary"
                    >
                      Consulter le projet
                    </Link>
                  )}

                </div>

              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;