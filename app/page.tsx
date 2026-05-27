"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { Sun, Moon, Code2, Award, Download, CheckCircle2, ZoomIn, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram, FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress, SiNextdotjs, SiMysql, SiSupabase, SiFirebase, SiPhp, SiTailwindcss } from "react-icons/si";
import { useEffect, useState } from "react";
import Works from "../components/works";
import Services from "../components/services";
import Contact from "../components/contact";

const skills = [
  { name: "MongoDB", icon: SiMongodb, color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-950/20" },
  { name: "Express", icon: SiExpress, color: "text-zinc-700 dark:text-zinc-300", bg: "bg-zinc-100 dark:bg-zinc-800/40" },
  { name: "React", icon: FaReact, color: "text-cyan-400", bg: "bg-cyan-50 dark:bg-cyan-950/20" },
  { name: "Node.js", icon: FaNodeJs, color: "text-green-500", bg: "bg-green-50 dark:bg-green-950/20" },
  { name: "Next.js", icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100", bg: "bg-zinc-900/5 dark:bg-zinc-850/50" },
  { name: "MySQL", icon: SiMysql, color: "text-sky-600", bg: "bg-sky-50 dark:bg-sky-950/20" },
  { name: "Supabase", icon: SiSupabase, color: "text-emerald-500", bg: "bg-emerald-50/50 dark:bg-emerald-950/10" },
  { name: "Firebase", icon: SiFirebase, color: "text-amber-500", bg: "bg-amber-50 dark:bg-amber-950/20" },
  { name: "GitHub", icon: FaGithub, color: "text-zinc-900 dark:text-zinc-100", bg: "bg-zinc-100 dark:bg-zinc-800/60" },
  { name: "PHP", icon: SiPhp, color: "text-indigo-500", bg: "bg-indigo-50 dark:bg-indigo-950/20" },
  { name: "Tailwind", icon: SiTailwindcss, color: "text-sky-400", bg: "bg-sky-50 dark:bg-sky-950/20" }
];

export default function Home() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-[var(--background)] text-[var(--foreground)] transition-colors duration-300 overflow-x-hidden relative">
      {/* Background decorations - subtle pattern similar to screenshot */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-60 dark:opacity-20">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="absolute top-[15%] right-[25%] w-1 h-6 rotate-45 bg-zinc-300 dark:bg-zinc-700" />
        <div className="absolute top-[40%] right-[10%] w-3 h-3 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="absolute bottom-[30%] right-[30%] w-6 h-1 -rotate-12 bg-zinc-300 dark:bg-zinc-700" />
        <div className="absolute bottom-[20%] left-[20%] w-1 h-6 -rotate-45 bg-[var(--lavender)] opacity-50" />
        <div className="absolute top-[35%] left-[45%] w-1.5 h-1.5 rounded-full bg-zinc-300 dark:bg-zinc-700" />
        <div className="absolute bottom-[10%] right-[15%] w-2 h-2 rounded-full bg-[var(--lavender)] opacity-30" />
        <div className="absolute top-[60%] left-[5%] w-4 h-1 rotate-12 bg-zinc-300 dark:bg-zinc-700" />
      </div>

      {/* Header */}
      <header className="flex items-center justify-between px-6 md:px-8 py-6 md:py-8 z-10 w-full max-w-7xl mx-auto">
        <div className="flex items-center gap-2">
          <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            Portfolio<span className="text-[var(--lavender)]">.</span>
          </div>
        </div>

        <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-600 dark:text-zinc-400">
          <a href="#about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">About</a>
          <a href="#experience" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Experience</a>
          <a href="#services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Services</a>
          <a href="#contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors">Contact</a>
        </nav>

        <div className="flex items-center gap-6">
          {/* Theme Toggles */}
          <div className="flex items-center bg-zinc-100/80 dark:bg-zinc-800/80 rounded-full p-1 border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm">
            <button
              onClick={() => setTheme("light")}
              className={`p-2 rounded-full transition-all duration-300 ${mounted && theme === "light"
                ? "bg-white text-[var(--lavender)] shadow-sm"
                : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                }`}
              aria-label="Light Theme"
            >
              <Sun size={16} strokeWidth={2.5} />
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`p-2 rounded-full transition-all duration-300 ${mounted && theme === "dark"
                ? "bg-zinc-700 text-white shadow-sm"
                : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                }`}
              aria-label="Dark Theme"
            >
              <Moon size={16} strokeWidth={2.5} />
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-zinc-500 dark:text-zinc-400">
            <a
              href="https://github.com/Shailesh-codes"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black dark:hover:text-white transition-colors"
            >
              <FaGithub size={18} />
            </a>
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#0A66C2] transition-colors"
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href="https://www.instagram.com/_shailesh__24?utm_source=qr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#E1306C] transition-colors"
            >
              <FaInstagram size={18} />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 z-10 w-full">
        {/* Hero Section */}
        <section id="hero" className="min-h-[calc(100vh-80px)] flex items-center justify-center w-full max-w-7xl mx-auto px-6 md:px-8 pt-10 pb-0 md:pt-20 md:pb-0 lg:py-0 overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-between gap-12 lg:gap-20 w-full min-h-[calc(100vh-80px)]">
            {/* Left Column - Text */}
            <div className="flex-1 flex flex-col gap-6 md:gap-8 max-w-2xl mt-8 lg:mt-0 lg:pb-15">
              {/* Intro Chip */}
              <div className="relative group inline-flex items-center gap-3 px-4.5 py-2.5 rounded-full bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 w-fit shadow-sm hover:border-[var(--lavender)]/40 hover:shadow-lg hover:shadow-[var(--lavender)]/5 hover:scale-[1.02] transition-all duration-300 select-none">
                {/* Purple Halo Behind */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 blur-sm transition-opacity duration-300 -z-10" />

                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-500 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-purple-500"></span>
                </span>
                <span className="text-[13px] md:text-sm font-medium tracking-wide text-zinc-800 dark:text-zinc-250 flex items-center gap-1.5">
                  Hi, I'm <span className="bg-gradient-to-r from-purple-600 via-fuchsia-500 to-pink-500 bg-clip-text text-transparent dark:from-purple-400 dark:via-fuchsia-400 dark:to-pink-400 font-bold tracking-tight">Shailesh Bhosale</span>
                  <span className="animate-wave">👋</span>
                </span>
              </div>

              <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-[5.5rem] font-bold tracking-tight leading-[1.1] text-zinc-900 dark:text-zinc-50">
                Building scalable web{" "}
                <span className="inline-flex items-center gap-2 md:gap-3 text-[var(--lavender)] flex-wrap sm:flex-nowrap">
                  <span className="bg-[var(--lavender)] text-white rounded-full p-1.5 md:p-2 flex items-center justify-center w-10 h-10 md:w-16 md:h-16">
                    <Code2 className="w-5 h-5 md:w-10 md:h-10 stroke-[2.5]" />
                  </span>
                  applications.
                </span>
              </h1>

              <div className="text-base md:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                <p className="mb-2">a <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">Full Stack Developer</strong> with <strong className="text-zinc-900 dark:text-zinc-100 font-semibold">1.8 years of experience</strong>.</p>
                <p>I specialize in building robust backend services, interactive user interfaces, and scalable web applications.</p>
              </div>

              {/* Premium CTA Buttons */}
              {/* <div className="flex flex-col sm:flex-row items-center gap-4 mt-4 w-full sm:w-auto">
                <a
                  href="#about"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-[var(--lavender)] hover:opacity-90 text-white font-medium rounded-xl transition-all shadow-lg shadow-[var(--lavender)]/20 hover:shadow-[var(--lavender)]/40 hover:-translate-y-0.5 whitespace-nowrap text-[15px]"
                >
                  Explore My Stack
                </a>
                <a
                  href="mailto:contact@example.com"
                  className="w-full sm:w-auto text-center px-8 py-4 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-zinc-100 hover:bg-zinc-50 dark:hover:bg-zinc-900/50 font-medium rounded-xl transition-all hover:-translate-y-0.5 whitespace-nowrap text-[15px]"
                >
                  Get in Touch
                </a>
              </div> */}
            </div>

            {/* Right Column - Image */}
            <div className="flex-1 flex justify-center lg:justify-end items-end mt-12 lg:mt-0 z-10 lg:self-end">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px] aspect-[4/5] lg:aspect-auto lg:h-[75vh] lg:w-full">
                {/* Background Blob 1 - Rotating Clockwise */}
                <div className="absolute top-1/2 left-1/2 w-[135%] h-[135%] -z-10 text-[var(--blob-color)] opacity-70 pointer-events-none flex items-center justify-center animate-spin-slow">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                    <path d="M44.7,-76.4C58.9,-69.2,71.8,-59.1,79.6,-45.8C87.4,-32.6,90.1,-16.3,89.1,-0.6C88.1,15.1,83.4,30.3,74.2,42.5C65,54.7,51.3,64,37.3,71.1C23.3,78.2,9,83.1,-5.5,84.6C-20.1,86.1,-35.1,84.1,-48.9,76.6C-62.7,69.1,-75.4,56.2,-81.7,40.9C-88,25.6,-87.9,8.1,-84.9,-8.4C-81.9,-24.9,-76,-40.4,-65.4,-51.7C-54.8,-63,-39.4,-70.1,-25,-75.2C-10.5,-80.3,3,-83.5,16.5,-81.4C30.1,-79.3,43.6,-71.8,44.7,-76.4Z" transform="translate(100 100)" />
                  </svg>
                </div>

                {/* Background Blob 2 - Rotating Counter-Clockwise (Overlayed) */}
                <div className="absolute top-1/2 left-1/2 w-[170%] h-[130%] -z-10 text-[var(--blob-color)] opacity-40 pointer-events-none flex items-center justify-center animate-spin-slow-reverse">
                  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full fill-current">
                    <path d="M51.2,-71.8C65.3,-62.5,75,-46.8,81.1,-29.7C87.2,-12.6,89.7,6,85.6,23.3C81.5,40.6,70.8,56.6,56.1,67.6C41.4,78.6,22.7,84.7,4.1,83.9C-14.5,83.1,-32.7,75.4,-48.1,64.2C-63.5,53,-76.1,38.2,-81.4,21C-86.7,3.8,-84.7,-15.8,-76.7,-32.2C-68.7,-48.6,-54.7,-61.8,-39.3,-70.6C-23.9,-79.4,-7.1,-83.8,10.2,-80C27.5,-76.2,42.5,-81,51.2,-71.8Z" transform="translate(100 100)" />
                  </svg>
                </div>

                {/* Image cutout container */}
                <div className="relative w-full h-full overflow-hidden rounded-t-[2.5rem] rounded-b-none bg-transparent">
                  <Image
                    src="/img2.png"
                    alt="Portrait"
                    fill
                    className="object-contain object-bottom z-10 transition-transform duration-700 ease-out hover:scale-[1.03]"
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* About & UpGrad Certification Section */}
        <section id="about" className="min-h-screen flex items-center justify-center w-full border-t border-zinc-100/50 dark:border-zinc-900/50 py-16 md:py-28 relative">
          <div className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-16 lg:gap-24">
            {/* Right Side - Certificate Card */}
            <div className="flex-1 flex flex-col gap-6 w-full max-w-md">
              {/* UpGrad Certificate Viewer Card */}
              <div className="group relative rounded-3xl overflow-hidden border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-md transition-all hover:shadow-xl">
                <div className="relative aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-950 overflow-hidden">
                  <Image
                    src="/certificate.jpeg"
                    alt="UpGrad Full Stack Developer Course Certificate"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 cursor-pointer z-20" onClick={() => setIsLightboxOpen(true)}>
                    <div className="p-3 bg-white/95 rounded-full text-zinc-900 shadow-md transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <ZoomIn size={20} />
                    </div>
                    <span className="text-white font-medium text-sm drop-shadow-sm">View Certificate</span>
                  </div>
                </div>
                <div className="p-5 flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800/80">
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm flex items-center gap-1.5">
                      <Award size={16} className="text-[var(--lavender)]" /> UpGrad Certified Full-Stack
                    </h4>
                    <p className="text-xs text-zinc-500 mt-1">Full Stack Developer Course</p>
                  </div>
                  <button
                    onClick={() => setIsLightboxOpen(true)}
                    className="px-4 py-2 border border-zinc-200 dark:border-zinc-800 rounded-lg hover:bg-zinc-50 dark:hover:bg-zinc-800/50 text-xs font-semibold text-zinc-700 dark:text-zinc-300 transition-colors"
                  >
                    View
                  </button>
                </div>
              </div>
            </div>
            {/* Left Side - Tech Stack & Credentials */}
            <div className="flex-1 flex flex-col gap-6 w-full min-w-0">
              <div>
                <span className="text-xs uppercase tracking-widest text-[var(--lavender)] font-bold mb-2 block">
                  Skillset & Certification
                </span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Full Stack Expertise
                </h2>
              </div>

              <p className="text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed max-w-xl">
                Certified as a <span className="font-semibold text-zinc-900 dark:text-zinc-100">Full-Stack Developer</span> by <span className="font-semibold text-zinc-100 bg-zinc-800 dark:bg-zinc-900 text-white rounded px-2 py-0.5 text-sm inline-block">UpGrad Campus</span>. I build high-performance web products, structuring applications from robust databases up to seamless responsive client interfaces.
              </p>

              {/* Infinite Scrolling Tech Marquee */}
              <div className="relative w-full overflow-hidden py-4 mt-6 select-none">
                {/* Horizontal gradient masks to fade items at edges */}
                <div className="absolute inset-y-0 left-0 w-12 md:w-16 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-12 md:w-16 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

                <div className="flex animate-marquee gap-5 whitespace-nowrap">
                  {/* First iteration */}
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={`skill-first-${index}`}
                        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-850 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-[var(--lavender)]/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      >
                        <div className={`w-8 h-8 rounded-lg ${skill.bg} flex items-center justify-center transition-colors duration-300`}>
                          <Icon className={`w-4 h-4 ${skill.color} transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12`} />
                        </div>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-[13px]">{skill.name}</span>
                      </div>
                    );
                  })}
                  {/* Second iteration (for infinite loop structure) */}
                  {skills.map((skill, index) => {
                    const Icon = skill.icon;
                    return (
                      <div
                        key={`skill-second-${index}`}
                        className="flex items-center gap-3 px-5 py-3.5 rounded-2xl border border-zinc-100 dark:border-zinc-850 bg-white/50 dark:bg-zinc-900/30 backdrop-blur-sm hover:border-[var(--lavender)]/35 hover:-translate-y-0.5 hover:shadow-md transition-all duration-300 group cursor-pointer"
                      >
                        <div className={`w-8 h-8 rounded-lg ${skill.bg} flex items-center justify-center transition-colors duration-300`}>
                          <Icon className={`w-4 h-4 ${skill.color} transition-transform duration-500 group-hover:scale-115 group-hover:rotate-12`} />
                        </div>
                        <span className="font-semibold text-zinc-800 dark:text-zinc-200 text-[13px]">{skill.name}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CV Download Bar */}
              <div className="p-5 rounded-2xl bg-zinc-50 dark:bg-zinc-900/30 border border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between gap-4 mt-2 max-w-xl">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-purple-50 dark:bg-purple-950/30 text-[var(--lavender)] rounded-xl">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-zinc-900 dark:text-zinc-100 text-sm leading-none">Curriculum Vitae</h4>
                    <p className="text-[11px] text-zinc-500 dark:text-zinc-400 mt-1.5">Available for hiring opportunities</p>
                  </div>
                </div>
                <a
                  href="/resume.pdf"
                  download
                  className="flex items-center gap-1.5 px-4 py-3 bg-[var(--lavender)] text-white font-semibold rounded-xl hover:opacity-95 transition-all text-xs shadow-md shadow-[var(--lavender)]/25"
                >
                  <Download size={14} /> Download CV
                </a>
              </div>
            </div>



          </div>
        </section>

        {/* Works Section */}
        <Works />

        {/* Services Section */}
        <Services />

        {/* Contact Section */}
        <Contact />
      </main>

      {/* Lightbox / Modal Modal View */}
      {isLightboxOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in" onClick={() => setIsLightboxOpen(false)}>
          <button
            onClick={() => setIsLightboxOpen(false)}
            className="absolute top-6 right-6 text-white hover:text-zinc-300 p-2 bg-white/10 rounded-full transition-all z-50 cursor-pointer"
            aria-label="Close Preview"
          >
            <X size={24} />
          </button>
          <div className="relative max-w-4xl w-full max-h-[85vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <Image
              src="/certificate.jpeg"
              alt="UpGrad Certified Full Stack Developer Certificate"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      )}
    </div>
  );
}
