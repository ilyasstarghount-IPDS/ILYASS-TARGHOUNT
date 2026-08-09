import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import WhyMe from "../components/WhyMe";
import Contact from "../components/Contact";
import ProfessionalExperience from "../components/ProfessionalExperience";

function Home() {
  return (
    <>
  <Navbar />
  <Hero />
  <About />
  <Services />
  <Skills />
  <Projects />
  <Experience />
  <ProfessionalExperience />
  <WhyMe />
  <Contact />
  <Footer />
</>
  );
}

export default Home;