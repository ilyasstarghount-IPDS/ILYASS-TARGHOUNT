import { motion } from "framer-motion";
import {
  Brain,
  GraduationCap,
  MonitorSmartphone,
  BarChart3,
} from "lucide-react";

import "../styles/whyme.css";

const cards = [
  {
    icon: <GraduationCap size={40} />,
    title: "Conception pédagogique",
    text: "Création de parcours d'apprentissage centrés sur l'apprenant et alignés sur les objectifs pédagogiques.",
  },
  {
    icon: <Brain size={40} />,
    title: "IA & Digital Learning",
    text: "Intégration de l'intelligence artificielle pour concevoir des formations modernes et personnalisées.",
  },
  {
    icon: <MonitorSmartphone size={40} />,
    title: "Expériences interactives",
    text: "Développement de modules Storyline, Genially, H5P et contenus SCORM responsives.",
  },
  {
    icon: <BarChart3 size={40} />,
    title: "Évaluation",
    text: "Création d'activités interactives, quiz et tableaux de suivi pour mesurer les acquis.",
  },
];

function WhyMe() {
  return (
    <section id="whyme" className="whyme">

      <div className="whyme-container">

        <span className="section-badge">
          Pourquoi me choisir ?
        </span>

        <h2>
          Ce que je peux apporter à votre <span>organisation</span>
        </h2>

        <div className="whyme-grid">

          {cards.map((card, index) => (

            <motion.div
              key={index}
              className="why-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >

              <div className="why-icon">
                {card.icon}
              </div>

              <h3>{card.title}</h3>

              <p>{card.text}</p>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default WhyMe;