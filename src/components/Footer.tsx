import * as Icons from "lucide-react";
import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* =========================
            TITLE
        ========================= */}

        <h2 className="footer-title">
          Ilyass Targhount
        </h2>

        <p className="footer-description">
          Ingénierie Pédagogique • Digital Learning • EdTech • Intelligence Artificielle
        </p>


        {/* =========================
            LINKS
        ========================= */}

        <div className="footer-links">

          {/* EMAIL */}

          <a
  href="#contact"
  aria-label="Contact"
>
  <Icons.Mail size={20} />
  <span>Email</span>
</a>

          {/* LINKEDIN */}

          <a
            href="https://offf.to/0H3a"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Icons.Linkedin size={20} />

            <span>
              LinkedIn
            </span>
          </a>


          {/* GITHUB */}

          <a
            href="https://github.com/ilyasstarghount-IPDS"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Icons.Github size={20} />

            <span>
              GitHub
            </span>
          </a>


          {/* WHATSAPP */}

          <a
            href="https://wa.me/212674258927"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <Icons.MessageCircle size={20} />

            <span>
              WhatsApp
            </span>
          </a>


          {/* CV */}

          <a
            href="/CV_Ilyass_Targhount.pdf"
            download="CV_Ilyass_Targhount.pdf"
            aria-label="Télécharger le CV"
          >
            <Icons.Download size={20} />

            <span>
              CV
            </span>
          </a>

        </div>


        {/* =========================
            BACK TO TOP
        ========================= */}

        <button
          className="top-button"
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          aria-label="Retour en haut"
        >
          <Icons.ArrowUp size={20} />
        </button>


        {/* =========================
            BOTTOM
        ========================= */}

        <div className="footer-bottom">

          <p>
            © {new Date().getFullYear()} Ilyass Targhount.
            Tous droits réservés.
          </p>

          <p>
            Conçu avec React • TypeScript • Framer Motion
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;