import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";

import Home from "./pages/Home";
import CyberSecurity from "./pages/CyberSecurity";
import Theoreme from "./pages/Theoreme";
import Droites from "./pages/Droites";

/* =========================
   SCROLL TO TOP
========================= */

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}

/* =========================
   APP
========================= */

function App() {
  return (
    <BrowserRouter basename="/ILYASS-TARGHOUNT">
      {/* Retour en haut à chaque changement de page */}
      <ScrollToTop />

      <Routes>
        {/* PAGE D'ACCUEIL */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* PROJET CYBERSÉCURITÉ */}
        <Route
          path="/projects/cybersecurity"
          element={<CyberSecurity />}
        />

        {/* PROJET THÉORÈME DES MILIEUX */}
        <Route
          path="/projects/theoreme"
          element={<Theoreme />}
        />

        {/* PROJET DROITES REMARQUABLES */}
        <Route
          path="/projects/droites"
          element={<Droites />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;