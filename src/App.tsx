import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark");
  }, []);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("");
  };

  return (
    <div className={`min-h-screen ${isDark ? "dark" : ""}`}>
      <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Header
          isDark={isDark}
          toggleTheme={toggleTheme}
          isMenuOpen={isMenuOpen}
          setIsMenuOpen={setIsMenuOpen}
        />
        <Hero />
        <Projects />
        <Skills />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
