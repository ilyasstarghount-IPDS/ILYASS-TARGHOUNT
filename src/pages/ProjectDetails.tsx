import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  FileText,
  BookOpen,
} from "lucide-react";

import { Link, useParams } from "react-router-dom";

import cybersecurityImg from "../assets/projects/cybersecurity.jpg";
import theoremeImg from "../assets/projects/theoreme.jpg";
import droitesImg from "../assets/projects/droites.jpg";
import yoolImg from "../assets/projects/yool.jpg";

import "../styles/project-details.css";

type Project = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  objectives: string[];
  demo?: string;
  github?: string;
  scenario?: string;
  storyboard?: string;
  episodes: {
    number: string;
    title: string;
    description: string;
  }[];
};

const projects: Record<string, Project> = {
  cybersecurity: {
    title: "Module Cybersécurité",
    image: cybersecurityImg,

    description:
      "Module e-learning interactif conçu pour présenter les fondamentaux de la cybersécurité à travers des contenus multimédias, des activités interactives et des évaluations.",

    technologies: [
      "Articulate Storyline 360",
      "SCORM",
      "Canva",
      "H5P",
      "Animaker",
      "PowerPoint",
    ],

    objectives: [
      "Comprendre les fondamentaux de la cybersécurité.",
      "Identifier les principales menaces et vulnérabilités.",
      "Adopter les bonnes pratiques de sécurité.",
      "Évaluer les connaissances à travers des activités interactives.",
    ],

    scenario: "/documents/scenario-cybersecurite.docx",

    storyboard: "/documents/storyboard-cybersecurite.docx",

    demo: "/scorm/cybersecurite/index.html",

    github: "#",

    episodes: [
      {
        number: "01",
        title: "Introduction à la cybersécurité",
        description:
          "Présentation du contexte, des enjeux et des objectifs du module.",
      },
      {
        number: "02",
        title: "Menaces et vulnérabilités",
        description:
          "Découverte des principales menaces, vulnérabilités et types d'attaques.",
      },
      {
        number: "03",
        title: "La triade CIA",
        description:
          "Découverte des principes de confidentialité, intégrité et disponibilité.",
      },
      {
        number: "04",
        title: "Évaluation",
        description:
          "Activités et quiz permettant de vérifier les acquis.",
      },
    ],
  },

  theoreme: {
    title: "Théorème des milieux",
    image: theoremeImg,

    description:
      "Module interactif de mathématiques consacré au théorème des milieux dans un triangle, intégrant des activités de découverte et une représentation dynamique avec GeoGebra.",

    technologies: [
      "Articulate Storyline 360",
      "GeoGebra",
      "Canva",
      "SCORM",
    ],

    objectives: [
      "Comprendre le théorème des milieux.",
      "Identifier les propriétés du segment joignant les milieux de deux côtés.",
      "Explorer la relation entre les longueurs et les parallèles.",
      "Appliquer le théorème dans des situations mathématiques.",
    ],

    scenario: "/documents/scenario-theoreme.docx",

    storyboard: "/documents/storyboard-theoreme.docx",

    demo: "/scorm/theoreme/index.html",

    github: "#",

    episodes: [
      {
        number: "01",
        title: "Situation-problème",
        description:
          "Introduction du problème permettant de faire émerger la notion.",
      },
      {
        number: "02",
        title: "Découverte",
        description:
          "Exploration dynamique de la configuration géométrique.",
      },
      {
        number: "03",
        title: "Conceptualisation",
        description:
          "Formalisation du théorème et de ses propriétés.",
      },
      {
        number: "04",
        title: "Application",
        description:
          "Résolution d'exercices permettant de mobiliser le théorème.",
      },
    ],
  },

  droites: {
    title: "Droites remarquables dans un triangle",
    image: droitesImg,

    description:
      "Module interactif consacré aux principales droites remarquables et à leurs points d'intersection dans un triangle.",

    technologies: [
      "Articulate Storyline 360",
      "GeoGebra",
      "Canva",
      "SCORM",
    ],

    objectives: [
      "Identifier les principales droites remarquables.",
      "Comprendre leurs propriétés.",
      "Visualiser leurs points d'intersection.",
      "Utiliser une représentation dynamique pour explorer les configurations.",
    ],

    scenario: "/documents/scenario-droites.docx",

    storyboard: "/documents/storyboard-droites.docx",

    demo: "/scorm/droites/index.html",

    github: "#",

    episodes: [
      {
        number: "01",
        title: "Introduction",
        description:
          "Présentation de la situation et des notions nécessaires.",
      },
      {
        number: "02",
        title: "Exploration",
        description:
          "Manipulation dynamique des droites remarquables.",
      },
      {
        number: "03",
        title: "Conceptualisation",
        description:
          "Synthèse des propriétés et des points remarquables.",
      },
      {
        number: "04",
        title: "Évaluation",
        description:
          "Activités permettant de vérifier les connaissances.",
      },
    ],
  },

  portfolio: {
    title: "Portfolio professionnel",
    image: yoolImg,

    description:
      "Portfolio professionnel développé avec React, TypeScript et Framer Motion afin de présenter mon parcours, mes compétences et mes réalisations.",

    technologies: [
      "React",
      "TypeScript",
      "Framer Motion",
      "CSS",
      "GitHub",
    ],

    objectives: [
      "Présenter mon parcours professionnel.",
      "Valoriser mes compétences en ingénierie pédagogique.",
      "Présenter mes projets e-learning.",
      "Centraliser mes réalisations et ressources professionnelles.",
    ],

    github: "https://github.com/ilyasstarghount-IPDS",

    episodes: [],
  },
};

function ProjectDetails() {
  const { id } = useParams();

  const project = id ? projects[id] : undefined;

  if (!project) {
    return (
      <main className="project-not-found">
        <h1>Projet introuvable</h1>

        <Link to="/#projects">
          Retour aux projets
        </Link>
      </main>
    );
  }

  return (
    <main className="project-details">

      {/* HERO */}

      <section className="project-hero">

        <div className="project-details-container">

          <Link to="/#projects" className="back-button">
            <ArrowLeft size={18} />
            Retour aux projets
          </Link>

          <motion.div
            className="project-hero-content"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >

            <div className="project-hero-image">
              <img
                src={project.image}
                alt={project.title}
              />
            </div>

            <div className="project-hero-text">

              <span className="section-badge">
                Projet
              </span>

              <h1>{project.title}</h1>

              <p>
                {project.description}
              </p>

              <div className="project-technologies">

                {project.technologies.map((technology) => (
                  <span key={technology}>
                    {technology}
                  </span>
                ))}

              </div>

              <div className="project-actions">

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-primary-button"
                  >
                    <ExternalLink size={18} />
                    Consulter le module
                  </a>
                )}

                {project.github && project.github !== "#" && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-secondary-button"
                  >
                    <Github size={18} />
                    GitHub
                  </a>
                )}

              </div>

            </div>

          </motion.div>

        </div>

      </section>


      {/* OBJECTIFS */}

      <section className="project-section">

        <div className="project-details-container">

          <span className="section-badge">
            Objectifs
          </span>

          <h2>
            Objectifs <span>pédagogiques</span>
          </h2>

          <div className="objectives-grid">

            {project.objectives.map((objective, index) => (

              <motion.div
                key={index}
                className="objective-card"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: index * 0.08,
                }}
              >

                <span>
                  0{index + 1}
                </span>

                <p>
                  {objective}
                </p>

              </motion.div>

            ))}

          </div>

        </div>

      </section>


      {/* DOCUMENTS */}

      {(project.scenario || project.storyboard) && (

        <section className="project-section documents-section">

          <div className="project-details-container">

            <span className="section-badge">
              Conception pédagogique
            </span>

            <h2>
              Documents du <span>projet</span>
            </h2>

            <div className="documents-grid">

              {project.scenario && (
                <a
                  href={project.scenario}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-card"
                >

                  <FileText size={30} />

                  <div>
                    <h3>
                      Scénario pédagogique
                    </h3>

                    <p>
                      Consulter le scénario pédagogique
                    </p>
                  </div>

                </a>
              )}

              {project.storyboard && (
                <a
                  href={project.storyboard}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="document-card"
                >

                  <BookOpen size={30} />

                  <div>
                    <h3>
                      Storyboard
                    </h3>

                    <p>
                      Consulter le storyboard du projet
                    </p>
                  </div>

                </a>
              )}

            </div>

          </div>

        </section>

      )}


      {/* EPISODES */}

      {project.episodes.length > 0 && (

        <section className="project-section">

          <div className="project-details-container">

            <span className="section-badge">
              Déroulement
            </span>

            <h2>
              Structure du <span>module</span>
            </h2>

            <div className="episodes-table">

              <div className="episodes-header">
                <span>N°</span>
                <span>Titre</span>
                <span>Description</span>
                <span>Voir</span>
              </div>

              {project.episodes.map((episode) => (

                <div
                  className="episode-row"
                  key={episode.number}
                >

                  <strong>
                    {episode.number}
                  </strong>

                  <h3>
                    {episode.title}
                  </h3>

                  <p>
                    {episode.description}
                  </p>

                  <button
                    type="button"
                    onClick={() =>
                      alert(
                        `Épisode ${episode.number} : ${episode.title}`
                      )
                    }
                  >
                    Voir
                  </button>

                </div>

              ))}

            </div>

          </div>

        </section>

      )}

    </main>
  );
}

export default ProjectDetails;