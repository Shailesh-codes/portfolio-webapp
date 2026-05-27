"use client";

import { Briefcase, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss } from "react-icons/si";

const techStack = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100" },
  { name: "React", icon: FaReact, color: "text-cyan-500" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500" },
  { name: "Express", icon: SiExpress, color: "text-zinc-600 dark:text-zinc-300" },
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" }
];

export default function Works() {
  return (
    <section id="experience" className="py-20 md:py-28 w-full relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--lavender)] font-bold mb-2 block">
              Professional Timeline
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Work Experience
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
            A details layout of my professional timeline, contributions, and key competencies.
          </p>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">

          {/* Main Geekrider Project Card */}
          <div className="lg:col-span-2 group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[var(--lavender)]/30 transition-all duration-500 overflow-hidden">
            {/* Soft Purple Halo Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[var(--lavender)]/5 rounded-full blur-[80px] pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="flex flex-col md:flex-row gap-8 items-start md:items-stretch justify-between">
              {/* Left Side: Info & Tech Stack */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 flex-wrap mb-6">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-50 dark:bg-orange-950/20 text-orange-600 dark:text-orange-400 text-xs font-semibold select-none animate-pulse">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500" /> Active Contribution
                    </span>
                    <a
                      href="https://github.com/Shailesh-codes"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-zinc-50 text-xs font-bold hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <FaGithub className="w-4 h-4 text-zinc-800 dark:text-zinc-200" /> GitHub Repo
                    </a>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50 group-hover:text-[var(--lavender)] transition-colors duration-300 flex items-center gap-2">
                    GeekRider
                    <ArrowUpRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </h3>

                  <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-sm md:text-base leading-relaxed">
                    Led the development of a highly optimized logistics tracking platform, creating dynamic dashboard layouts, real-time data flows, and signature attribution footer branding. Achieved complete theme flexibility and zero-friction cross-origin communications.
                  </p>
                </div>

                {/* Core Technologies Used */}
                <div className="flex flex-wrap gap-2.5 mt-8">
                  {techStack.map((tech) => {
                    const Icon = tech.icon;
                    return (
                      <span
                        key={tech.name}
                        className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-bold hover:border-[var(--lavender)]/40 hover:-translate-y-0.5 transition-all duration-300 group/tech cursor-default select-none shadow-sm"
                      >
                        <Icon className={`w-3.5 h-3.5 ${tech.color} transition-transform duration-500 group-hover/tech:scale-115 group-hover/tech:rotate-12`} />
                        {tech.name}
                      </span>
                    );
                  })}
                </div>
              </div>

              {/* Right Side: Decorative Code Mockup Visual */}
              <div className="hidden md:flex flex-col gap-3.5 p-4 md:p-5 rounded-2xl bg-zinc-950 dark:bg-black/60 border border-zinc-800 w-full max-w-[280px] shadow-2xl relative select-none overflow-hidden group-hover:border-[var(--lavender)]/20 transition-colors duration-500 font-mono text-[11px] leading-relaxed self-center">
                <div className="absolute top-0 right-0 w-24 h-24 bg-[var(--lavender)]/10 rounded-full blur-xl pointer-events-none" />
                <div className="flex items-center justify-between pb-2.5 border-b border-zinc-800">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                    <span className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                  </div>
                  <span className="text-zinc-500 font-sans text-[10px] tracking-tight">server.js</span>
                </div>
                <div className="space-y-1.5 text-zinc-400">
                  <p className="text-zinc-500 text-[10px]">{"// Developer API Endpoint"}</p>
                  <p>app.get(<span className="text-green-300">"/api/v1/developer"</span>, (req, res) =&gt; {"{"}</p>
                  <p className="pl-4">res.json({"{"}</p>
                  <p className="pl-8">role: <span className="text-green-300">"Full Stack Developer"</span>,</p>
                  <p className="pl-8">experience: <span className="text-green-300">"1.8 Years"</span></p>
                  <p className="pl-4">{"});"}</p>
                  <p>{"});"}</p>
                </div>
              </div>
            </div>

            {/* Geekrider Branding / Attributions */}
            <div className="mt-8 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-4 flex-wrap">
              <span className="text-xs font-semibold text-zinc-400 dark:text-zinc-500 flex items-center gap-1.5">
                Designed & Developed By GeekRider
              </span>
              <div className="flex items-center gap-1 select-none">
                <span className="text-[var(--lavender)] font-mono text-base font-bold animate-pulse">
                  {"{"}
                </span>
                <div className="relative w-5 h-5">
                  <Image
                    src="/geekhead.png"
                    alt="GeekRider Logo"
                    fill
                    className="object-contain"
                  />
                </div>
                <span className="text-[var(--lavender)] font-mono text-base font-bold animate-pulse">
                  {"}"}
                </span>
              </div>
            </div>
          </div>

          {/* Hire Me / Stats Card */}
          <div className="group relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/30 p-6 md:p-8 flex flex-col justify-between hover:shadow-xl hover:border-[var(--lavender)]/35 transition-all duration-500">
            <div>
              <div className="flex items-center justify-between gap-4 mb-6">
                <div className="w-12 h-12 rounded-2xl bg-purple-50 dark:bg-purple-950/30 text-[var(--lavender)] flex items-center justify-center">
                  <Briefcase className="w-6 h-6" />
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/20 text-emerald-600 dark:text-emerald-400 text-xs font-bold select-none border border-emerald-200/50 dark:border-emerald-900/50">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                  Available for Hire
                </span>
              </div>

              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">
                1.8 Years Experience
              </h3>

              <div className="mt-2 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
                <span>Based in India</span>
                <span className="mx-2">•</span>
                <span>IST (UTC+5:30)</span>
              </div>

              <ul className="mt-6 space-y-3.5 text-xs font-semibold text-zinc-700 dark:text-zinc-300">
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--lavender)]" /> MERN & Next.js Stack Expert
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--lavender)]" /> High-Performance Dashboards
                </li>
                <li className="flex items-center gap-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--lavender)]" /> Clean, Modular Codebase
                </li>
              </ul>
            </div>

            <div className="mt-8">
              <a
                href="mailto:shaileshb517@gmail.com"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 bg-[var(--lavender)] text-white font-bold rounded-xl transition-all shadow-md shadow-[var(--lavender)]/20 hover:shadow-lg hover:shadow-[var(--lavender)]/30 hover:-translate-y-0.5 select-none text-sm group"
              >
                <Mail className="w-4 h-4 transition-transform duration-300 group-hover:scale-110" />
                Hire Me
              </a>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
