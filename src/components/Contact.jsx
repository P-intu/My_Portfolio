import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/P-intu",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          ...form,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
        console.error("Web3Forms Error:", result);
      }
    } catch (error) {
      setStatus("error");
      console.error("Submission Error:", error);
    }

    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="relative py-20 lg:py-32 bg-[#0a0a0f] overflow-hidden">
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#00f5a0]/5 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-4 md:px-6">
        <div className="mb-16">
          <p className="font-mono text-[#00f5a0] text-xs tracking-widest uppercase mb-3">
            04. Say Hello
          </p>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-black text-white">
            Get In Touch
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left — Info */}
          <div className="space-y-8">
            <p className="text-white/60 text-lg leading-relaxed">
              I'm currently open to new opportunities. Whether you have a project in mind,
              a question, or just want to say hi — my inbox is always open.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:alex@example.com"
                className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#00f5a0]/20 hover:bg-[#00f5a0]/5 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-[#00f5a0]/10 flex items-center justify-center text-[#00f5a0]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-widest">Email</p>
                  <p className="text-white group-hover:text-[#00f5a0] transition-colors duration-200 break-all">priyabratamaharana99@gmail.com</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
                <div className="w-10 h-10 rounded-lg bg-[#7b61ff]/10 flex items-center justify-center text-[#7b61ff]">
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-white/30 font-mono uppercase tracking-widest">Location</p>
                  <p className="text-white">Bhubneswar,Odisha</p>
                </div>
              </div>
            </div>

            {/* Socials */}
            <div>
              <p className="text-white/30 text-xs font-mono tracking-widest uppercase mb-4">priyabrata me online</p>
              <div className="flex gap-3">
                {socials.map(({ label, href, icon }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="w-11 h-11 rounded-xl border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-[#00f5a0]/30 hover:bg-[#00f5a0]/5 transition-all duration-200"
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {[
              { name: "name", label: "Name", type: "text", placeholder: "Your name" },
              { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
            ].map(({ name, label, type, placeholder }) => (
              <div key={name}>
                <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">
                  {label}
                </label>
                <input
                  type={type}
                  name={name}
                  value={form[name]}
                  onChange={handleChange}
                  placeholder={placeholder}
                  required
                  className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-[#00f5a0]/40 focus:bg-[#00f5a0]/5 transition-all duration-200"
                />
              </div>
            ))}

            <div>
              <label className="block text-xs font-mono text-white/40 tracking-widest uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What's on your mind?"
                required
                rows={5}
                className="w-full px-4 py-3 bg-white/[0.03] border border-white/10 rounded-xl text-white placeholder-white/20 font-mono text-sm focus:outline-none focus:border-[#00f5a0]/40 focus:bg-[#00f5a0]/5 transition-all duration-200 resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={status === "sending" || status === "success"}
              className={`w-full py-4 rounded-xl font-bold font-mono tracking-wider transition-all duration-300 ${
                status === "success"
                  ? "bg-[#00f5a0]/20 text-[#00f5a0] border border-[#00f5a0]/20"
                  : "bg-[#00f5a0] text-[#0a0a0f] hover:shadow-[0_0_30px_#00f5a040] hover:scale-[1.02] active:scale-100 disabled:opacity-50"
              }`}
            >
              {status === "idle" && "Send Message →"}
              {status === "sending" && "Sending..."}
              {status === "success" && "✓ Message Sent!"}
              {status === "error" && "Try Again"}
            </button>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-4 md:px-6 mt-16 lg:mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-display text-lg font-bold">
          <span className="text-white">Priyabrata</span>
          <span className="text-[#00f5a0]">.</span>
        </p>
        <p className="text-white/20 text-sm font-mono">
          © {new Date().getFullYear()} — Built with React & Tailwind
        </p>
      </div>
    </section>
  );
}
