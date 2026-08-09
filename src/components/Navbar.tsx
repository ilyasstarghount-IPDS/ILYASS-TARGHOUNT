import { useEffect, useState } from "react";
import { Menu, X, Download } from "lucide-react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", onScroll);

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <header className={scrolled ? "navbar navbar-scroll" : "navbar"}>

      <a
        href="#home"
        className="logo"
        onClick={closeMenu}
      >
        Ilyass<span>.</span>
      </a>

      <nav className={open ? "nav active" : "nav"}>

        <a href="#home" onClick={closeMenu}>
          Accueil
        </a>

        <a href="#about" onClick={closeMenu}>
          À propos
        </a>

        <a href="#services" onClick={closeMenu}>
          Services
        </a>

        <a href="#skills" onClick={closeMenu}>
          Compétences
        </a>

        <a href="#projects" onClick={closeMenu}>
          Projets
        </a>

        <a href="#experience" onClick={closeMenu}>
          Parcours
        </a>

        <a href="#contact" onClick={closeMenu}>
          Contact
        </a>

      </nav>

   <a
  href="/CV_Ilyass_Targhount.pdf"
  download="CV_Ilyass_Targhount.pdf"
  className="cv-btn"
>
  <Download size={18} />
  Télécharger mon CV
</a>
      <button
        className="menu-btn"
        onClick={() => setOpen(!open)}
        aria-label="Menu"
      >
        {open ? <X size={28} /> : <Menu size={28} />}
      </button>

    </header>
  );
}

export default Navbar;