import { motion } from "framer-motion";

import {
  ArrowLeft,
  ExternalLink,
  FileText,
  BookOpen,
  ClipboardCheck,
  Circle,
  Triangle,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import droitesImg from "../assets/projects/droites.jpg";
import "../styles/project-page.css";


// =========================
// TYPE EPISODE
// =========================

type Episode = {
  number: number;
  title: string;
  type: string;
  icon: React.ReactNode;
  url: string;
};


// =========================
// PARCOURS PEDAGOGIQUE
// =========================

const episodes: Episode[] = [
  {
    number: 1,
    title: "Évaluation diagnostique",
    type: "Cours interactif",
    icon: <ClipboardCheck size={20} />,
    url: "https://candid-haupia-fa0648.netlify.app/",
  },

  {
    number: 2,
    title: "Cercle circonscrit",
    type: "Cours interactif",
    icon: <Circle size={20} />,
    url: "https://unrivaled-centaur-51c287.netlify.app/",
  },

  {
    number: 3,
    title: "Cercle inscrit",
    type: "Cours interactif",
    icon: <Circle size={20} />,
    url: "https://leafy-babka-041493.netlify.app/",
  },

  {
    number: 4,
    title: "Orthocentre d’un triangle",
    type: "Cours interactif",
    icon: <Triangle size={20} />,
    url: "https://majestic-gumdrop-dbdfa2.netlify.app/",
  },

  {
    number: 5,
    title: "Médiane d’un triangle — Centre de gravité",
    type: "Cours interactif",
    icon: <Triangle size={20} />,
    url: "https://magnificent-sfogliatella-b1c969.netlify.app/",
  },

  {
    number: 6,
    title: "Évaluation finale",
    type: "Cours interactif",
    icon: <ClipboardCheck size={20} />,
    url: "https://iridescent-paletas-e5cb65.netlify.app/",
  },
];


// =========================
// COMPONENT
// =========================

function Droites() {

  const navigate = useNavigate();


  // =========================
  // RETOUR AUX PROJETS
  // =========================

  const handleBackToProjects = () => {

    navigate("/");

    setTimeout(() => {

      const projectsSection =
        document.getElementById("projects");

      if (projectsSection) {

        projectsSection.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 150);

  };


  return (

    <section className="project-page">

      <div className="project-page-container">


        {/* =========================
            HERO
        ========================= */}

        <div className="project-page-hero">


          {/* RETOUR */}

          <button
            type="button"
            onClick={handleBackToProjects}
            className="back-projects"
          >

            <ArrowLeft size={18} />

            Retour aux projets

          </button>


          {/* HERO GRID */}

          <motion.div
            className="project-page-grid"

            initial={{
              opacity: 0,
              y: 30,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            transition={{
              duration: 0.7,
            }}
          >


            {/* =========================
                IMAGE
            ========================= */}

            <div className="project-page-image">

              <img
                src={droitesImg}
                alt="Droites remarquables dans un triangle"
              />

            </div>


            {/* =========================
                INTRO
            ========================= */}

            <div className="project-page-intro">

              <span className="section-badge">
                Projet pédagogique
              </span>


              <h1>

                Droites remarquables
                <span> dans un triangle</span>

              </h1>


              <p>

                Module interactif de mathématiques conçu
                pour accompagner les élèves dans la découverte,
                la construction et la compréhension des principales
                droites et cercles remarquables dans un triangle.

              </p>


              {/* TAGS */}

              <div className="project-page-tags">

                <span>
                  Articulate Storyline
                </span>

                <span>
                  GeoGebra
                </span>

                <span>
                  Manim
                </span>

                <span>
                  Digital Learning
                </span>

              </div>

            </div>

          </motion.div>

        </div>


        {/* =========================
            DESCRIPTION
        ========================= */}

        <section className="project-page-section">

          <span className="section-badge">
            Présentation
          </span>


          <h2>
            À propos du <span>projet</span>
          </h2>


          <div className="project-description-card">

            <h3>
              Un module de mathématiques interactif
            </h3>


            <p>

              Ce projet propose un parcours pédagogique
              interactif consacré aux constructions remarquables
              dans un triangle. Les apprenants peuvent explorer
              différentes notions à travers des activités numériques
              et des ressources interactives.

            </p>

          </div>

        </section>


        {/* =========================
            INFORMATIONS
        ========================= */}

        <section className="project-page-section">

          <span className="section-badge">
            Informations
          </span>


          <h2>
            Caractéristiques du <span>projet</span>
          </h2>


          <div className="project-info-grid">


            <div>

              <strong>
                Niveau
              </strong>

              <p>
                2AC
              </p>

            </div>


            <div>

              <strong>
                Domaine
              </strong>

              <p>
                Mathématiques
              </p>

            </div>


            <div>

              <strong>
                Type
              </strong>

              <p>
                Module e-learning
              </p>

            </div>


            <div>

              <strong>
                Conception
              </strong>

              <p>
                Ingénierie pédagogique
              </p>

            </div>


            <div>

              <strong>
                Interactivité
              </strong>

              <p>
                Ressources interactives
              </p>

            </div>


            <div>

              <strong>
                Technologies
              </strong>

              <p>
                Storyline · GeoGebra · Manim
              </p>

            </div>


          </div>

        </section>

{/* =========================
    DOCUMENTS PEDAGOGIQUES
========================= */}

<section className="project-page-section">

  <span className="section-badge">
    Conception
  </span>

  <h2>
    Documents <span>pédagogiques</span>
  </h2>

  <div className="documents-grid">

    <div className="document-card">

      <div className="document-icon">
        <FileText size={25} />
      </div>

      <div>
        <h3>
          Scénario pédagogique
        </h3>

        <p>
          Document de conception pédagogique du module.
        </p>
      </div>

      <a
                  href="/documents/droites/scenario-droites.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="module-button"
                >

                  Voir 

                  <ExternalLink size={16} />

                </a>

    </div>


    <div className="document-card">

      <div className="document-icon">
        <FileText size={25} />
      </div>

      <div>
        <h3>
          Storyboard
        </h3>

        <p>
          Storyboard détaillé du module e-learning.
        </p>
      </div>

      <a
        href="/documents/droites/storyboard-droites.pdf"
         target="_blank"
                  rel="noopener noreferrer"
                  className="module-button"
                >

                  Voir 

                  <ExternalLink size={16} />

                </a>

    </div>

  </div>

</section>
        {/* =========================
            PARCOURS PEDAGOGIQUE
        ========================= */}

        <section className="project-page-section">

          <span className="section-badge">
            Parcours pédagogique
          </span>


          <h2>
            Déroulement du <span>module</span>
          </h2>


          <div className="project-description-card">

            <p>

              Explorez les différentes étapes du parcours
              pédagogique et consultez directement les cours
              interactifs associés.

            </p>

          </div>


          <div className="episodes-table">


            {/* HEADER */}

            <div className="episodes-header">

              <span>
                N°
              </span>

              <span>
                Épisode
              </span>

              <span>
                Type
              </span>

              <span>
                Action
              </span>

            </div>


            {/* EPISODES */}

            {episodes.map((episode, index) => (

              <motion.div
                key={episode.number}

                className="episode-row"

                initial={{
                  opacity: 0,
                  x: -30,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                viewport={{
                  once: true,
                }}

                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >


                {/* NUMBER */}

                <strong>
                  {episode.number}
                </strong>


                {/* TITLE */}

                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >

                  {episode.icon}

                  <h3>
                    {episode.title}
                  </h3>

                </div>


                {/* TYPE */}

                <p>
                  {episode.type}
                </p>


                {/* BUTTON */}

                <a
                  href={episode.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="module-button"
                >

                  Voir l’activité  

                  <ExternalLink size={16} />

                </a>

              </motion.div>

            ))}

          </div>

        </section>


        {/* =========================
            OUTILS
        ========================= */}

        <section className="project-page-section">

          <span className="section-badge">
            Technologies
          </span>


          <h2>
            Outils <span>utilisés</span>
          </h2>


          <div className="tools-grid">

            <div className="tool-card">
              Articulate Storyline
            </div>

            <div className="tool-card">
              GeoGebra
            </div>

            <div className="tool-card">
              Manim
            </div>

            <div className="tool-card">
              Digital Learning
            </div>

            <div className="tool-card">
              SCORM
            </div>

          </div>

        </section>


        {/* =========================
            RETOUR AUX PROJETS
        ========================= */}

        <div className="project-page-bottom">

          <button
            type="button"
            onClick={handleBackToProjects}
            className="module-button"
          >

            <ArrowLeft size={18} />

            Retour aux projets

          </button>

        </div>


      </div>

    </section>

  );
}


export default Droites;