import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Mail,
  MessageCircle,
  Linkedin,
  Github,
} from "lucide-react";

import heroImage from "../assets/hero.png";
import "../styles/hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-grid"></div>

      <div className="hero-circle hero-circle-1"></div>
      <div className="hero-circle hero-circle-2"></div>
      <div className="hero-circle hero-circle-3"></div>

      <div className="hero-blur hero-blur-1"></div>
      <div className="hero-blur hero-blur-2"></div>

      <div className="hero-container">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="hero-badge">
            Bonjour, je suis
          </span>

          <h1 className="hero-title">
            Ilyass
            <br />
            <span>Targhount</span>
          </h1>

          <TypeAnimation
            sequence={[
              "Ingénierie Pédagogique",
              2000,
              "Digital Learning Designer",
              2000,
              "Concepteur e-learning",
              2000,
              "Instructional Designer",
              2000,
              "IA appliquée à l'éducation",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            repeat={Infinity}
            className="hero-job"
          />

          <p className="hero-description">
            Passionné par l'innovation pédagogique,
            je conçois des expériences d'apprentissage
            interactives grâce au Digital Learning,
            aux technologies éducatives et à
            l'intelligence artificielle.
          </p>

          <div className="hero-stats">

            <div className="stat-card">
              <h3>10+</h3>
              <p>Projets réalisés</p>
            </div>

            <div className="stat-card">
              <h3>15+</h3>
              <p>Outils maîtrisés</p>
            </div>

            <div className="stat-card">
              <h3>5+</h3>
              <p>Expériences</p>
            </div>

          </div>

          <div className="hero-buttons">

            <a
              href="#projects"
              className="btn-primary"
            >
              Voir mes projets
              <ArrowRight size={18} />
            </a>

            <a
              href="/CV_Ilyass_Targhount.pdf"
              download="CV_Ilyass_Targhount.pdf"
              className="cv-btn"
            >
              <Download size={18} />
              Télécharger mon CV
            </a>

          </div>

          <div className="hero-socials">

            <a
              href="https://www.linkedin.com/in/ilyass-targhount-9219303b1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin size={20} />
            </a>

            <a
              href="https://github.com/ilyasstarghount-IPDS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github size={20} />
            </a>
<a
  href="#contact"
  aria-label="Contact"
>
  <Mail size={20} />
</a>
            {/* WHATSAPP */}
            
                      <a
                        href="https://wa.me/212674258927"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="WhatsApp"
                      >
                        <MessageCircle size={20} />
            
    
                      </a>

          </div>

        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 70 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="hero-image-wrapper">

            <div className="hero-image-glow"></div>

            <div className="hero-image-card">
              <img
                src={heroImage}
                alt="Ilyass Targhount"
              />
            </div>

          </div>

        </motion.div>

      </div>

    </section>
  );
}

export default Hero;