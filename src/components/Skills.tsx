import { motion } from "framer-motion";
import "../styles/skills.css";

const skills = [
  { name: "Ingénierie pédagogique", level: 95 },
  { name: "Conception pédagogique", level: 94 },
  { name: "Storyboarding", level: 92 },
  { name: "Scénarisation pédagogique", level: 92 },

  { name: "Articulate Storyline 360", level: 95 },
  { name: "Articulate Rise 360", level: 95 },
  { name: "Genially", level: 92 },
  { name: "H5P", level: 90 },
  { name: "Moodle LMS", level: 85 },
  { name: "SCORM 1.2 / 2004", level: 90 },
  { name: "Opale 2.5", level: 80 },

  { name: "Canva", level: 95 },
  { name: "Vyond", level: 80 },
  { name: "Animaker", level: 80 },
  { name: "Camtasia", level: 88 },
  { name: "CapCut", level: 90 },
  { name: "Adobe Photoshop", level: 82 },
  { name: "Les environnements 3D", level: 75 },

  { name: "GeoGebra", level: 92 },
  { name: "Manim", level: 75 },
  { name: "R", level: 60 },
  { name: "Spyder 6", level: 75 },


  { name: "HTML5", level: 75 },
  { name: "CSS3", level: 75 },
  { name: "React", level: 75 },
  { name: "TypeScript", level: 70 },
  { name: "Python", level: 70 },

  { name: "Git", level: 85 },
  { name: "GitHub", level: 85 },
  { name: "VS Code", level: 90 },


  { name: "Microsoft Office", level: 92 },
  { name: "Google Workspace", level: 90 },

  { name: "ChatGPT", level: 98 },
  { name: "Gemini", level: 90 },
  { name: "Claude", level: 88 },
  { name: "Prompt Engineering", level: 92 },
];

function Skills() {
  return (
    <section id="skills" className="skills">

      <div className="skills-container">

        <span className="section-badge">
          Compétences
        </span>

        <h2>
          Mes <span>compétences</span>
        </h2>

        <div className="skills-grid">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              className="skill-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >

              <div className="skill-header">
                <span>{skill.name}</span>
                <span>{skill.level}%</span>
              </div>

              <div className="progress">

                <motion.div
                  className="progress-bar"
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Skills;

