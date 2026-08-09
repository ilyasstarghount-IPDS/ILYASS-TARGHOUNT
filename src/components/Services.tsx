import { motion } from "framer-motion";
import {
  GraduationCap,
  Laptop,
  BrainCircuit,
  Palette,
} from "lucide-react";

import "../styles/services.css";

const services = [
  {
    icon: <GraduationCap size={40} />,
    title: "Conception pédagogique",
    description:
      "Création de scénarios pédagogiques, storyboards et parcours de formation centrés sur l'apprenant.",
  },
  {
    icon: <Laptop size={40} />,
    title: "Développement e-learning",
    description:
      "Conception de modules interactifs avec Storyline, H5P, Genially et Moodle.",
  },
  {
    icon: <BrainCircuit size={40} />,
    title: "IA appliquée à la formation",
    description:
      "Utilisation de l'intelligence artificielle pour améliorer la conception et la personnalisation des formations.",
  },
  {
    icon: <Palette size={40} />,
    title: "Création multimédia",
    description:
      "Production de vidéos, illustrations et contenus interactifs pour le Digital Learning.",
  },
];

function Services() {
  return (
    <section id="services" className="services">
      <div className="services-container">
        <span className="section-badge">Mes services</span>

        <h2>
          Ce que je peux <span>apporter</span>
        </h2>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
            >
              <div className="service-icon">{service.icon}</div>

              <h3>{service.title}</h3>

              <p>{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;