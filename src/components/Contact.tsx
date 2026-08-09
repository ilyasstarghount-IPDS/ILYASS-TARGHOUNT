import { motion } from "framer-motion";
import {
  Mail,
  Linkedin,
  Github,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

import "../styles/contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-container">

        {/* =========================
            HEADER
        ========================= */}

        <motion.div
          className="contact-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="section-badge">
            Contact
          </span>

          <h2>
            Travaillons <span>ensemble</span>
          </h2>

         
        </motion.div>


        {/* =========================
            CONTACT GRID
        ========================= */}

        <div className="contact-grid">

          {/* =========================
              CONTACT INFORMATION
          ========================= */}

          <motion.div
            className="contact-info"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <h3>
              Restons en contact
            </h3>

            <p>
              Je suis actuellement à la recherche d'un stage
              ou d'une opportunité dans le domaine du Digital
              Learning, de l'ingénierie pédagogique et de l'EdTech.
            </p>


            {/* EMAIL */}

          <a
              href="mailto:ilyasstarghount@gmail.com"
              className="contact-item"
            >
              <Mail size={22} />

              <span>
                ilyasstarghount@gmail.com
              </span>
            </a>




            {/* LINKEDIN */}

            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Linkedin size={22} />

              <span>
                LinkedIn
              </span>
            </a>


            {/* GITHUB */}

            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <Github size={22} />

              <span>
                GitHub
              </span>
            </a>


            {/* WHATSAPP */}

            <a
              href="https://wa.me/212674258927"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-item"
            >
              <MessageCircle size={22} />

              <span>
                WhatsApp
              </span>
            </a>


            {/* LOCATION */}

            <div className="contact-item">
              <MapPin size={22} />

              <span>
                Agadir, Maroc
              </span>
            </div>

          </motion.div>


          {/* =========================
              FORM
          ========================= */}

          <motion.form
            className="contact-form"
            action="https://formspree.io/f/xnpajkwk"
            method="POST"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <input
              type="text"
              name="name"
              placeholder="Nom complet"
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Adresse email"
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              required
            />

            <textarea
              name="message"
              rows={6}
              placeholder="Votre message..."
              required
            />

            <button
              type="submit"
              className="contact-submit"
            >
              <Send size={18} />

              <span>
                Envoyer
              </span>
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
}

export default Contact;