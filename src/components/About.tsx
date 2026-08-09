import { motion } from "framer-motion";
import {
  GraduationCap,
  Briefcase,
  Brain,
  Lightbulb,
} from "lucide-react";

import "../styles/about.css";

function About() {
  return (
    <section id="about" className="about">

      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <span className="section-badge">
            À propos de moi
          </span>

          <h2>
            Transformer l'apprentissage grâce au
            <span> Digital Learning</span>
          </h2>

<p>
            Je suis étudiant en Master en Ingénierie pédagogique et
            Didactique des Sciences. Passionné par les technologies
            éducatives, je conçois des formations interactives,
            innovantes et centrées sur l'apprenant.
          </p>

          <p>
            Mon objectif est d'accompagner les établissements
            et les entreprises dans la création de dispositifs
            de formation modernes en utilisant l'intelligence
            artificielle, Storyline, Genially et H5P.
          </p>


        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .8 }}
        >

          <div className="about-card">

            <GraduationCap size={34} />

            <h3>Formation</h3>

            <p>
              Master en Ingénierie pédagogique
              et Didactique des Sciences
            </p>

          </div>

          <div className="about-card">

            <Briefcase size={34} />

            <h3>Expérience</h3>

            <p>
             Stage chez YOOL Education
             Stage chez Web For Jobs
             Stages d'enseignement dans des lycées publics marocains
            </p>

          </div>

          <div className="about-card">

            <Brain size={34} />

            <h3>Expertise</h3>

            <p>
              Storyline, H5P,
              Genially,
              IA, Moodle,
              SCORM.
            </p>

          </div>

          <div className="about-card">

            <Lightbulb size={34} />

            <h3>Vision</h3>

            <p>
              Concevoir des expériences
              d'apprentissage modernes,
              engageantes et accessibles.
            </p>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default About;