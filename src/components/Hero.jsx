import { useEffect, useRef } from "react";

export default function Hero() {
  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[#0a0a0f]">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(#00f5a0 1px, transparent 1px), linear-gradient(90deg, #00f5a0 1px, transparent 1px)",
            backgroundSize: "80px 80px",
          }}
        />
        {/* Radial glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00f5a0]/5 rounded-full blur-3xl" />
        <div className="absolute top-1/3 left-1/3 w-[400px] h-[400px] bg-[#7b61ff]/5 rounded-full blur-3xl" />
      </div>

      {/* Floating orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full mix-blend-screen animate-float"
            style={{
              width: `${Math.random() * 300 + 100}px`,
              height: `${Math.random() * 300 + 100}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? "radial-gradient(circle, #00f5a020, transparent)" : "radial-gradient(circle, #7b61ff15, transparent)",
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${6 + i}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 md:px-6 text-center">
        {/* Status badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full border border-[#00f5a0]/20 bg-[#00f5a0]/5 mb-6 md:mb-8 animate-fade-in">
          <span className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-[#00f5a0] animate-pulse" />
          <span className="text-[#00f5a0] text-[10px] sm:text-xs font-mono tracking-widest uppercase">
            Available for hire
          </span>
        </div>

        {/* Main heading */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white leading-none mb-6 animate-slide-up">
          Priyabrata{"  "}
          <span className="relative inline-block break-words max-w-full">
            Maharana
            <span className="absolute -inset-1 bg-gradient-to-r from-[#00f5a0]/20 to-[#7b61ff]/20 blur-xl -z-10" />
          </span>
        </h1>

        {/* Title */}
        <div className="flex items-center justify-center gap-3 mb-8 animate-slide-up" style={{ animationDelay: "0.1s" }}>
          <div className="h-px w-12 bg-gradient-to-r from-transparent to-[#00f5a0]" />
          <p className="font-mono text-[#00f5a0] tracking-widest uppercase text-sm">
            Full Stack Developer
          </p>
          <div className="h-px w-12 bg-gradient-to-l from-transparent to-[#00f5a0]" />
        </div>

        {/* Description */}
        <p className="text-white/50 text-base md:text-lg lg:text-xl max-w-2xl mx-auto mb-12 leading-relaxed animate-slide-up px-4 md:px-0" style={{ animationDelay: "0.2s" }}>
          I craft high-performance web applications with elegant code and intuitive UIs.
          From backend APIs to pixel-perfect interfaces — I ship products that matter.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-4 animate-slide-up" style={{ animationDelay: "0.3s" }}>
          <button
            onClick={() => handleScroll("#projects")}
            className="group relative px-6 py-3 md:px-8 md:py-4 bg-[#00f5a0] text-[#0a0a0f] font-bold font-mono tracking-wider rounded-xl overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_#00f5a040] hover:scale-105"
          >
            <span className="relative z-10">View Projects →</span>
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
          </button>

          <button
            onClick={() => handleScroll("#contact")}
            className="px-6 py-3 md:px-8 md:py-4 border border-white/10 text-white font-mono tracking-wider rounded-xl hover:border-[#00f5a0]/40 hover:bg-[#00f5a0]/5 transition-all duration-300"
          >
            Contact Me
          </button>
          
          <a
            href="/resume.pdf"
            download="Priyabrata_Maharana_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 md:px-8 md:py-4 border border-[#7b61ff]/30 text-white font-mono tracking-wider rounded-xl hover:border-[#7b61ff]/60 hover:bg-[#7b61ff]/10 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Resume
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce opacity-40">
          <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </section>
  );
}
