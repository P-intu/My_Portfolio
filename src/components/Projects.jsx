import { projects } from "../data";

function ProjectCard({ project, index }) {
  return (
    <div
      className="group relative p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:border-white/10 hover:bg-white/[0.04] transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl"
      style={{
        animationDelay: `${index * 0.1}s`,
      }}
    >
      {/* Accent top border */}
      <div
        className="absolute top-0 left-6 right-6 h-px transition-all duration-300 opacity-0 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, transparent, ${project.accent}, transparent)` }}
      />

      {/* Card number */}
      <div className="flex items-start justify-between mb-4">
        <span className="font-mono text-xs text-white/20">
          {String(index + 1).padStart(2, "0")}
        </span>
        <div className="flex gap-3">
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-200"
            aria-label="Live site"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-lg border border-white/10 flex items-center justify-center text-white/30 hover:text-white hover:border-white/30 transition-all duration-200"
            aria-label="GitHub"
          >
            <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </a>
        </div>
      </div>

      {/* Title */}
      <h3
        className="text-lg font-bold text-white mb-2 group-hover:transition-colors duration-200 break-words"
        style={{ "--accent": project.accent }}
      >
        <span className="group-hover:text-opacity-90" style={{ color: "inherit" }}>
          {project.title}
        </span>
      </h3>

      {/* Description */}
      <p className="text-white/50 text-sm leading-relaxed mb-5">{project.description}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-2">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2.5 py-1 text-xs font-mono rounded-md border"
            style={{
              borderColor: `${project.accent}30`,
              color: project.accent,
              background: `${project.accent}08`,
            }}
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00f5a0]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-10 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-0">
          <div>
            <p className="font-mono text-[#00f5a0] text-[10px] sm:text-xs tracking-widest uppercase mb-2 md:mb-3">
              02. What I've Built
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white">
              Projects
            </h2>
          </div>
          <a
            href="https://github.com/P-intu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-fit items-center gap-2 text-white/40 hover:text-[#00f5a0] font-mono text-xs md:text-sm transition-colors duration-200"
          >
            View all on GitHub
            <svg className="w-3.5 h-3.5 md:w-4 md:h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
