const highlights = [
  // { icon: "⚡", label: "5+ Years Experience" },
  // { icon: "🚀", label: "50+ Projects Shipped" },
  { icon: "🌍", label: "Remote-First" },
  { icon: "📚", label: "Continuous Learner" },
];

const interests = [
  "Open Source", "Developer Experience",
  "Performance Optimization", "Technical Writing",
];

export default function About() {
  return (
    <section id="about" className="relative py-20 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#7b61ff]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        {/* Section header */}
        <div className="mb-16">
          <p className="font-mono text-[#00f5a0] text-xs tracking-widest uppercase mb-3">
            01. Who I Am
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white">
            About Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Text */}
          <div className="space-y-6">
            <p className="text-white/70 text-lg leading-relaxed">
              Hey, I'm <span className="text-white font-semibold">Priyabrata Maharana</span> — a
              Full Stack Developer based in Bhubneswar. I specialize in building
              scalable web applications that balance beautiful design with solid engineering.
            </p>
            <p className="text-white/60 leading-relaxed">
              My journey started with curiosity about how websites worked. That curiosity turned
              into a passion for building things — from small side-projects to production systems
              handling millions of requests. I love the full spectrum: designing APIs, optimizing
              databases, and crafting UIs that feel inevitable.
            </p>
            <p className="text-white/60 leading-relaxed">
              When I'm not coding, I'm contributing to open source, writing about what I learn,
              or exploring new tools that will change how we build software.
            </p>

            {/* Interests */}
            <div className="pt-4">
              <p className="text-white/40 text-xs font-mono tracking-widest uppercase mb-4">
                Things I care about
              </p>
              <div className="flex flex-wrap gap-2">
                {interests.map((item) => (
                  <span
                    key={item}
                    className="px-3 py-1.5 text-xs font-mono text-white/60 border border-white/10 rounded-lg hover:border-[#00f5a0]/30 hover:text-[#00f5a0] transition-all duration-200 cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Stats & highlights */}
          <div className="space-y-6">
            {/* Highlight cards */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon, label }) => (
                <div
                  key={label}
                  className="group p-5 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#00f5a0]/20 hover:bg-[#00f5a0]/5 transition-all duration-300"
                >
                  <div className="text-2xl mb-2">{icon}</div>
                  <div className="text-white/70 text-sm font-medium">{label}</div>
                </div>
              ))}
            </div>

            {/* Code-style profile card */}
            <div className="p-4 md:p-6 rounded-xl border border-white/5 bg-white/[0.02] font-mono text-xs md:text-sm overflow-x-auto">
              <div className="flex items-center gap-2 mb-4">
                <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
                <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
                <div className="w-3 h-3 rounded-full bg-[#28c840]" />
                <span className="ml-2 text-white/20 text-xs">profile.json</span>
              </div>
              <div className="space-y-1 text-sm">
                <div className="text-white/30">{"{"}</div>
                <div className="pl-4"><span className="text-[#7b61ff]">"name"</span><span className="text-white/30">: </span><span className="text-[#00f5a0]">"Priyabrata Maharana"</span><span className="text-white/30">,</span></div>
                <div className="pl-4"><span className="text-[#7b61ff]">"role"</span><span className="text-white/30">: </span><span className="text-[#00f5a0]">"Full Stack Developer"</span><span className="text-white/30">,</span></div>
                <div className="pl-4"><span className="text-[#7b61ff]">"location"</span><span className="text-white/30">: </span><span className="text-[#00f5a0]">"Bhubneswar,Odisha"</span><span className="text-white/30">,</span></div>
                <div className="pl-4"><span className="text-[#7b61ff]">"status"</span><span className="text-white/30">: </span><span className="text-[#ffd93d]">"available"</span><span className="text-white/30">,</span></div>
                <div className="pl-4"><span className="text-[#7b61ff]">"coffee"</span><span className="text-white/30">: </span><span className="text-[#ff6b6b]">true</span></div>
                <div className="text-white/30">{"}"}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
