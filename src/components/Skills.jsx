import { useState } from "react";
import { skills } from "../data";

const categories = [
  { key: "frontend", label: "Frontend", color: "#00f5a0" },
  { key: "backend", label: "Backend", color: "#7b61ff" },
  // { key: "devops", label: "DevOps", color: "#00c9ff" },
];

const techBadges = [
  "JavaScript", "Python", "Django",
  "React", "Tailwind CSS",
  , "Django Rest framework", "JWT", "REST",
  "mysql", "SQLite",
  "Vercel", "Render",
  "Git", "GitHub Actions", "html"
];

function SkillBar({ skill, color, delay }) {
  return (
    <div className="group">
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm text-white/70 font-mono">{skill.name}</span>
        <span className="text-xs font-mono" style={{ color }}>{skill.level}%</span>
      </div>
      <div className="h-1.5 rounded-full bg-white/5 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: `${skill.level}%`,
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            animationDelay: `${delay}ms`,
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [active, setActive] = useState("frontend");
  const current = categories.find((c) => c.key === active);

  return (
    <section id="skills" className="relative py-20 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#7b61ff]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <p className="font-mono text-[#00f5a0] text-xs tracking-widest uppercase mb-3">
            03. Toolbox
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Skills
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Left — Progress bars */}
          <div>
            {/* Category tabs */}
            <div className="flex flex-wrap gap-2 mb-8 p-1 rounded-xl bg-white/[0.03] border border-white/5 w-fit">
              {categories.map(({ key, label, color }) => (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={`px-5 py-2 rounded-lg text-sm font-mono transition-all duration-200 ${active === key
                      ? "text-[#0a0a0f] font-bold shadow-lg"
                      : "text-white/40 hover:text-white"
                    }`}
                  style={
                    active === key
                      ? { background: color }
                      : {}
                  }
                >
                  {label}
                </button>
              ))}
            </div>

            {/* Skill bars */}
            <div className="space-y-5">
              {skills[active].map((skill, i) => (
                <SkillBar
                  key={skill.name}
                  skill={skill}
                  color={current.color}
                  delay={i * 100}
                />
              ))}
            </div>
          </div>

          {/* Right — Tech badge cloud */}
          <div>
            <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-6">
              Technologies I work with
            </p>
            <div className="flex flex-wrap gap-2">
              {techBadges.map((tech, i) => (
                <span
                  key={tech}
                  className="px-3 py-2 text-xs font-mono text-white/50 border border-white/5 rounded-lg hover:text-white hover:border-[#00f5a0]/30 hover:bg-[#00f5a0]/5 transition-all duration-200 cursor-default"
                  style={{ animationDelay: `${i * 30}ms` }}
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Currently learning */}
            <div className="mt-8 p-5 rounded-xl border border-[#ffd93d]/10 bg-[#ffd93d]/5">
              <div className="flex items-center gap-2 mb-3">
                <span className="text-base">📖</span>
                <span className="text-xs font-mono text-[#ffd93d] tracking-widest uppercase">
                  Currently Exploring
                </span>
              </div>
              <div className="flex flex-wrap gap-2">
                {["LLM Integrations"].map((t) => (
                  <span key={t} className="px-3 py-1 text-xs font-mono text-[#ffd93d]/70 border border-[#ffd93d]/20 rounded-lg">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
