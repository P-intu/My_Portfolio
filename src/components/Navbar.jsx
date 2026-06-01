import { useState, useEffect } from "react";
import { navLinks } from "../data";
import { useScrollSpy } from "../hooks/useScrollSpy";

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const activeId = useScrollSpy(["home", "about", "projects", "skills", "contact"]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e, href) => {
    e.preventDefault();
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0f]/90 backdrop-blur-xl border-b border-white/5 shadow-2xl"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          onClick={(e) => handleNav(e, "#home")}
          className="font-display text-xl font-bold tracking-tight"
        >
          <span className="text-white">Priyabarata</span>
          <span className="text-[#00f5a0]">.</span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map(({ label, href }) => {
            const id = href.replace("#", "");
            const isActive = activeId === id;
            return (
              <a
                key={href}
                href={href}
                onClick={(e) => handleNav(e, href)}
                className={`text-sm font-mono tracking-widest uppercase transition-all duration-200 relative group ${
                  isActive ? "text-[#00f5a0]" : "text-white/50 hover:text-white"
                }`}
              >
                {label}
                <span
                  className={`absolute -bottom-1 left-0 h-px bg-[#00f5a0] transition-all duration-300 ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                />
              </a>
            );
          })}

          {/* Resume button */}
          <a
            href="/resume.pdf"
            download="Priyabrata_Maharana_Resume.pdf"
            className="px-4 py-2 rounded-lg border border-[#00f5a0]/30 text-[#00f5a0] hover:bg-[#00f5a0]/10 text-xs font-mono tracking-widest uppercase transition-all duration-200"
          >
            Resume
          </a>

          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-[#00f5a0]/40 transition-all duration-200"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707M17.657 17.657l-.707-.707M6.343 6.343l-.707-.707M12 7a5 5 0 100 10 5 5 0 000-10z" />
              </svg>
            ) : (
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden w-9 h-9 flex flex-col justify-center items-center gap-1.5"
          aria-label="Menu"
        >
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-1.5" : ""}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`w-6 h-px bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-1.5" : ""}`} />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 md:px-6 pb-6 flex flex-col gap-4 bg-[#0a0a0f]/95 border-b border-white/5">
          {navLinks.map(({ label, href }) => (
            <a
              key={href}
              href={href}
              onClick={(e) => handleNav(e, href)}
              className="text-sm font-mono tracking-widest uppercase text-white/60 hover:text-[#00f5a0] transition-colors duration-200 py-1"
            >
              {label}
            </a>
          ))}
          <button
            onClick={toggleTheme}
            className="text-sm font-mono tracking-widest uppercase text-white/60 hover:text-[#00f5a0] transition-colors duration-200 text-left py-1"
          >
            {theme === "dark" ? "☀ Light Mode" : "☾ Dark Mode"}
          </button>
          <a
            href="/resume.pdf"
            download="Priyabrata_Maharana_Resume.pdf"
            className="text-sm font-mono tracking-widest uppercase text-[#00f5a0] hover:text-white transition-colors duration-200 text-left py-1 mt-2 inline-block"
          >
            ↓ Download Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
