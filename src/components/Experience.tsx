import { motion } from "framer-motion";
import {
  GraduationCap,
  Award,
} from "lucide-react";

import "../styles/experience.css";

const timeline = [
  {
    icon: <GraduationCap size={28} />,
    year: "2026",
    title: "Master en Ingénierie Pédagogique et Didactique des Sciences",
    place: "École Supérieure de l'Éducation et de la Formation d'Agadir",
    description:
      "Spécialisation en ingénierie pédagogique, Digital Learning, Intelligence Artificielle et technologies éducatives.",
  },
  {
    icon: <GraduationCap size={28} />,
    year: "2025",
    title: "Licence en Éducation",
    place: "Spécialité Mathématiques",
    description:
      "Formation en didactique des mathématiques, pédagogie et technologies éducatives.",
  },
  {
    icon: <GraduationCap size={28} />,
    year: "2022",
    title: "Baccalauréat",
    place: "Sciences Physiques",
    description:
      "Obtention du baccalauréat en Sciences Physiques.",
  },
  {
    icon: <Award size={28} />,
    year: "2022",
    title: "Certificat",
    place: "Programme « Leaders of Tomorrow Academy »",
    description:
      "Programme de développement du leadership, de la communication et des compétences personnelles.",
  },
];
function Experience() {
  return (
    <section id="experience" className="experience">

      <div className="experience-container">

        <span className="section-badge">
          Certifications
        </span>

        <h2>
          Formation & <span>Expérience</span>
        </h2>

        <div className="timeline">

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: .7 }}
            >

              <div className="timeline-icon">
                {item.icon}
              </div>

              <div className="timeline-content">

                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.place}</h4>

                <p>{item.description}</p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Experience;