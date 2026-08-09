import { motion } from "framer-motion";

import {
  ArrowLeft,
  ExternalLink,
  FileText,
  Play,
  Image as ImageIcon,
  BookOpen,
} from "lucide-react";

import { useNavigate } from "react-router-dom";

import theoremeImg from "../assets/projects/theoreme.jpg";
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
    type: "PDF",
    icon: <FileText size={20} />,
    url: "/documents/theoreme/evaluation-diagnostique.pdf",
  },

  {
    number: 2,
    title: "Situation-problème",
    type: "SCORM",
    icon: <BookOpen size={20} />,
    url: "https://tranquil-bavarois-61ca5f.netlify.app/",
  },

  {
    number: 3,
    title: "Je découvre",
    type: "Vimeo",
    icon: <Play size={20} />,
    url: "https://player.vimeo.com/video/1201023832",
  },

  {
    number: 4,
    title: "Points essentiels à retenir",
    type: "SCORM",
    icon: <BookOpen size={20} />,
    url: "https://glittering-macaron-f0f0d9.netlify.app/",
  },

  {
    number: 5,
    title: "Synthèse",
    type: "Image",
    icon: <ImageIcon size={20} />,
    url: "/documents/theoreme/synthese.png",
  },

  {
    number: 6,
    title: "Évaluation",
    type: "SCORM",
    icon: <BookOpen size={20} />,
    url: "https://comfy-pithivier-3eb2db.netlify.app/",
  },

];


// =========================
// COMPONENT
// =========================

function Theoreme() {

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
                src={theoremeImg}
                alt="Théorème des milieux"
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

                Théorème des{" "}

                <span>
                  milieux
                </span>

              </h1>


              <p>

                Module interactif de mathématiques conçu
                pour accompagner les élèves dans la découverte,
                la compréhension et l'application du théorème
                des milieux.

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
                  Vyond
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

            À propos du{" "}

            <span>
              projet
            </span>

          </h2>


          <div className="project-description-card">

            <h3>
              Un module e-learning interactif
            </h3>


            <p>

              Ce projet propose un parcours pédagogique
              structuré autour du théorème des milieux.
              Il combine différentes ressources numériques
              afin de favoriser la découverte progressive
              de la notion, sa compréhension et son évaluation.

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

            Caractéristiques du{" "}

            <span>
              projet
            </span>

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
                Storyline · GeoGebra · Manim · Vyond
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
                  href="/documents/theoreme/scenario-theoreme.pdf"
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
        href="/documents/theoreme/storyboard-theoreme.pdf"
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

            Déroulement du{" "}

            <span>
              module
            </span>

          </h2>


          <p className="project-description-card">

            Explorez les différentes étapes du parcours
            pédagogique et consultez directement les
            ressources associées.

          </p>


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

            {episodes.map(
              (episode, index) => (

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

              )
            )}

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

            Outils{" "}

            <span>
              utilisés
            </span>

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
              Vyond
            </div>


            <div className="tool-card">
              Vimeo
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


export default Theoreme;