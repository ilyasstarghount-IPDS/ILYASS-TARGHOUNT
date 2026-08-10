import {
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";

import Home from "./pages/Home";
import CyberSecurity from "./pages/CyberSecurity";
import Theoreme from "./pages/Theoreme";
import Droites from "./pages/Droites";

// =========================
// SCROLL TO TOP
// =========================

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

// =========================
// APP
// =========================

function App() {
  return (
    <>
      <ScrollToTop />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/projects/cybersecurity"
          element={<CyberSecurity />}
        />

        <Route
          path="/projects/theoreme"
          element={<Theoreme />}
        />

        <Route
          path="/projects/droites"
          element={<Droites />}
        />

        <Route
          path="*"
          element={<Home />}
        />

      </Routes>
    </>
  );
}

export default App;