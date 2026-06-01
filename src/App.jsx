import { useTheme } from "./hooks/useTheme";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";

export default function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className={theme === "light" ? "light" : ""}>
      <div className="min-h-screen bg-[#0a0a0f] text-white selection:bg-[#00f5a0]/20 selection:text-[#00f5a0]">
        <Navbar theme={theme} toggleTheme={toggle} />
        <main>
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
        </main>
      </div>
    </div>
  );
}
