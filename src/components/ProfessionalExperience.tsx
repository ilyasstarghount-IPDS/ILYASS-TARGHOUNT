import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const experiences = [
  {
    year: "2026",
    title: "Stage en Ingénierie Pédagogique",
    company: "YOOL Education",
    description:
      "Conception de modules e-learning interactifs avec Articulate Storyline 360, Genially, H5P et SCORM.",
  },
  {
    year: "2026",
    title: "Stage en Digital Learning",
    company: "Web For Jobs",
    description:
      "Participation à la création de contenus numériques et de solutions de formation en ligne.",
  },
  {
    year: "2023 - 2025",
    title: "Stages d'enseignement",
    company: "Lycées publics marocains",
    description:
      "Préparation, animation et évaluation de séances d'enseignement des mathématiques.",
  },
  {
    year: "2024",
    title: "Team Leader",
    company: "Colonie de vacances",
    description:
      "Encadrement d'enfants, organisation d'activités éducatives et développement des compétences de leadership et de communication.",
  },
  {
  year: "2023",
  title: "Stage en bibliothèque",
  company: "Bibliothèque El Wafa",
  description:
    "Participation à la gestion des collections, au classement des ouvrages, à l'accueil du public et à l'organisation des ressources documentaires.",
},
];

function ProfessionalExperience() {
  return (
    <section id="professional-experience" className="experience">
      <div className="experience-container">

        <span className="section-badge">
          Expérience
        </span>

        <h2>
          Expériences <span>professionnelles</span>
        </h2>

        <div className="timeline">
          {experiences.map((item, index) => (
            <motion.div
              key={index}
              className="timeline-item"
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="timeline-icon">
                <Briefcase size={28} />
              </div>

              <div className="timeline-content">
                <span>{item.year}</span>

                <h3>{item.title}</h3>

                <h4>{item.company}</h4>

                <p>{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default ProfessionalExperience;