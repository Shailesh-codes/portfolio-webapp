"use client";

import React, { useState, useEffect } from "react";
import {
  ArrowUpRight,
  X,
  CheckCircle2,
  Code2,
  ExternalLink,
  Server,
  Layers,
  Database,
  Globe,
  LineChart,
  Cpu,
  Coffee,
  Activity,
  Ship,
  Scan,
  Gamepad2,
  Home,
  Gem
} from "lucide-react";
import { FaGithub, FaReact, FaNodeJs } from "react-icons/fa";
import { SiNextdotjs, SiExpress, SiMongodb, SiTailwindcss, SiMysql, SiSupabase, SiPhp, SiTypescript, SiExpo, SiSqlite, SiSocketdotio } from "react-icons/si";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";

// Technical Stack icons helper
const techIcons: { [key: string]: any } = {
  "Next.js": { icon: SiNextdotjs, color: "text-zinc-900 dark:text-zinc-100" },
  "React": { icon: FaReact, color: "text-cyan-400" },
  "Node.js": { icon: FaNodeJs, color: "text-green-500" },
  "Express": { icon: SiExpress, color: "text-zinc-700 dark:text-zinc-350" },
  "MongoDB": { icon: SiMongodb, color: "text-emerald-500" },
  "Tailwind CSS": { icon: SiTailwindcss, color: "text-sky-400" },
  "Supabase": { icon: SiSupabase, color: "text-emerald-500" },
  "MySQL": { icon: SiMysql, color: "text-sky-600" },
  "PHP": { icon: SiPhp, color: "text-indigo-500" },
  "Mongoose": { icon: Database, color: "text-red-500" },
  "Sequelize": { icon: Database, color: "text-blue-400" },
  "Stripe API": { icon: Cpu, color: "text-indigo-400" },
  "Framer Motion": { icon: Layers, color: "text-pink-500" },
  "Recharts": { icon: LineChart, color: "text-indigo-500" },
  "Chart.js": { icon: LineChart, color: "text-rose-500" },
  "JavaScript": { icon: Code2, color: "text-yellow-500" },
  "TypeScript": { icon: SiTypescript, color: "text-blue-500" },
  "React Native": { icon: FaReact, color: "text-cyan-500" },
  "Expo": { icon: SiExpo, color: "text-zinc-900 dark:text-zinc-100" },
  "SQLite": { icon: SiSqlite, color: "text-sky-500" },
  "Socket.io": { icon: SiSocketdotio, color: "text-zinc-800 dark:text-zinc-200" }
};

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  longDescription: string;
  tech: string[];
  features: string[];
  demoUrl: string;
  githubUrl: string;
  color: string;
  bgLight: string;
  bgDark: string;
  borderLight: string;
  glowColor: string;
  icon: any;
}

const projectsData: Project[] = [
  {
    id: "maharashtra-maritime-board",
    title: "Maharashtra Maritime Board",
    category: "Full-Stack Gov Portal",
    description: "A highly accessible enterprise portal enabling citizens to access maritime public services, register grievances, and view real-time operations dashboards.",
    longDescription: "Maharashtra Maritime Board (MMB) is a robust government web portal designed to digitize public services and internal workflows. The platform features an automated conversational chatbot, a voice-activated search engine, full keyboard navigation compliance, real-time interactive dashboards for port activities, and a secure citizen grievance system with automatic status updates and tracking.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS", "TypeScript"],
    features: [
      "Voice-activated multilingual search assisting citizens in querying portal resources",
      "Automated conversational chatbot providing instant help on port guidelines and rules",
      "Interactive public dashboards compiling metrics for vessel surveys and cargo analytics",
      "Secure online grievance logging system with automated status tracking and notifications",
      "Compliance-aligned keyboard navigation controls and screen-reader accessibility layers"
    ],
    demoUrl: "https://mahammb.maharashtra.gov.in/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-blue-600 to-cyan-500",
    bgLight: "bg-blue-50/50",
    bgDark: "dark:bg-blue-950/10",
    borderLight: "group-hover:border-blue-500/30",
    glowColor: "rgba(37, 99, 235, 0.15)",
    icon: Ship
  },
  {
    id: "aadi-vastu",
    title: "Aadi Vastu CRM & Portal",
    category: "Full-Stack Enterprise CRM",
    description: "A specialized project management portal and CRM tailored for Vastu consultancy, managing client lifecycles, structured services, and employee reports.",
    longDescription: "Aadi Vastu is an enterprise CRM and project management platform designed specifically for Vastu Shastra consulting firms. The portal supports dual roles: administrators can manage client profiles, build structured consulting packages (based on custom building types, construction stages, and Vastu scopes of work), assign tasks, and monitor daily progress; employees use a simplified portal to track assigned tasks and submit formatted daily work logs via an integrated text editor.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    features: [
      "Custom service builder supporting dynamic building types, construction stages, and Vastu scopes",
      "Interactive multi-role dashboards tailored for administrators and field employees",
      "Dynamic project progress tracker mapping tasks to specific client Vastu blueprints",
      "Daily work report logging with formatted inputs and status tracking for project oversight",
      "Secure JWT-based user authentication, role-based path protection, and transactional database mapping"
    ],
    demoUrl: "https://adii-vastu.netlify.app/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-orange-500 to-amber-600",
    bgLight: "bg-orange-50/50",
    bgDark: "dark:bg-orange-950/10",
    borderLight: "group-hover:border-orange-500/30",
    glowColor: "rgba(249, 115, 22, 0.15)",
    icon: Home
  },
  {
    id: "nz-cafe",
    title: "NZ Cafe & Ordering System",
    category: "Full-Stack Ordering Platform",
    description: "A premium cafe website and order management platform featuring interactive client interfaces, live cart workflows, and a comprehensive admin control panel.",
    longDescription: "NZ Cafe is a modern full-stack web application designed for seamless digital ordering. It features an interactive client menu with advanced dynamic search, category filtering, a persistent shopping cart, and a robust admin dashboard for real-time inventory control, category organization, inquiry management, and order status tracking.",
    tech: ["React", "Node.js", "Express", "MySQL", "Tailwind CSS"],
    features: [
      "Interactive customer menu ordering with dynamic search and instant filtering",
      "Dynamic administrative portal for real-time inventory, category, and order status updates",
      "Secure JWT user and administrator authentication paired with bcrypt password hashing",
      "Sleek and responsive animations using GSAP and Framer Motion for a fluid experience"
    ],
    demoUrl: "https://zippycentralcafe.com/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-amber-600 to-yellow-850",
    bgLight: "bg-amber-50/50",
    bgDark: "dark:bg-amber-950/10",
    borderLight: "group-hover:border-amber-500/30",
    glowColor: "rgba(217, 119, 6, 0.15)",
    icon: Coffee
  },
  {
    id: "fitness-manager",
    title: "Fitness Club Manager",
    category: "Full-Stack Club Platform",
    description: "A premium club management platform featuring an immersive user experience, real-time database content synchronization, and a robust admin dashboard.",
    longDescription: "Fitness Club Manager is a modern full-stack web application built to streamline gym operations and digital content delivery. It features a cinematic client portal with dynamic media loading (images/videos) powered by GSAP animations, interactive program features, an integrated blog system, and a comprehensive admin hub for real-time database management of web assets, blog posts, and platform status.",
    tech: ["Next.js", "React", "MySQL", "Tailwind CSS", "Node.js"],
    features: [
      "Dynamic database-driven hero section supporting real-time image and video switching",
      "Robust administrative dashboard for CRUD operations on blog posts and system settings",
      "Sequelize ORM integration ensuring efficient MySQL query management and secure schema modeling",
      "Immersive UI animations and interactive timelines using GSAP for a high-performance feel",
      "Secure user session handling and admin authentication using JWT and bcrypt encryption"
    ],
    demoUrl: "https://fitnessmanger.netlify.app/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-teal-500 to-emerald-600",
    bgLight: "bg-teal-50/50",
    bgDark: "dark:bg-teal-950/10",
    borderLight: "group-hover:border-teal-500/30",
    glowColor: "rgba(20, 184, 166, 0.15)",
    icon: Activity
  },
  {
    id: "vc-scanner",
    title: "VC Scanner & Admin Portal",
    category: "Full-Stack Mobile OCR System",
    description: "A comprehensive voucher and receipt scanner mobile app utilizing on-device OCR and AI parsing, synchronized with a web admin portal.",
    longDescription: "VC Scanner is an enterprise-grade mobile and web platform for voucher digitizing, tracking, and validation. The cross-platform mobile app (React Native & Expo) uses on-device Google ML Kit OCR and OpenAI's API to scan physical vouchers, parse key details, and store them securely. Users can manage vouchers in their offline SQLite wallet and upgrade subscriptions, while administrators oversee user plans and transactions via a responsive web dashboard.",
    tech: ["React Native", "Expo", "Node.js", "MySQL", "Tailwind CSS", "SQLite"],
    features: [
      "On-device OCR scanner with real-time text recognition using Google ML Kit",
      "AI-driven receipt parsing to extract merchant, date, and discount details automatically",
      "Offline-first digital wallet storing vouchers locally using SQLite and AsyncStorage",
      "Interactive administrative dashboard managing user subscription tiers, logs, and stats",
      "Secure Google OAuth integration and token-based API authentication"
    ],
    demoUrl: "#",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-indigo-600 to-blue-500",
    bgLight: "bg-indigo-50/50",
    bgDark: "dark:bg-indigo-950/10",
    borderLight: "group-hover:border-indigo-500/30",
    glowColor: "rgba(79, 70, 229, 0.15)",
    icon: Scan
  },
  {
    id: "finwin-tambola",
    title: "FinWin Tambola & Learning Portal",
    category: "Full-Stack Gamified Platform",
    description: "A real-time multiplayer Tambola (Bingo) platform integrating educational quiz questions, live operator number-calling, and automated PDF/Excel reports.",
    longDescription: "FinWin is a premium full-stack multiplayer Tambola game and learning portal designed to engage users through interactive, quiz-integrated gameplay. The platform supports live game hosting with synchronized WebSocket number calling, real-time digital ticket markings, and automated text-to-speech voiceovers. It includes a comprehensive admin console to manage events, dispatch access keys via email, curate questions, and export participant performance reports in Excel and PDF formats.",
    tech: ["React", "Node.js", "Express", "MySQL", "Socket.io", "Tailwind CSS"],
    features: [
      "Real-time multiplayer gameplay with WebSocket synchronization using Socket.io",
      "Interactive digital ticket system with dynamic number marking and validation",
      "Automated text-to-speech audio voiceover for called numbers and client-side muting controls",
      "Robust Admin and Operator panels for managing event details, question categories, and games",
      "Automated PDF and Excel report compilation for event summaries, player databases, and leaderboards",
      "Secure student/player registration, email-based access keys, and JWT authentication"
    ],
    demoUrl: "https://finwin.beamoutsourcing.com/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-blue-600 to-indigo-500",
    bgLight: "bg-blue-50/50",
    bgDark: "dark:bg-blue-950/10",
    borderLight: "group-hover:border-blue-500/30",
    glowColor: "rgba(37, 99, 235, 0.15)",
    icon: Gamepad2
  },
  {
    id: "together-ngo",
    title: "Together NGO & Corporate Platform",
    category: "Full-Stack Environmental Portal",
    description: "A premium environmental and community empowerment platform connecting NGOs and Corporates for sustainable initiatives and CSR partnerships.",
    longDescription: "Together is a modern, high-performance web platform designed to bridge the gap between global corporate responsibility and grassroots conservation. The application facilitates strategic ecological actions—including reforestation drives, wildlife habitat protection, and clean ocean campaigns—by providing interactive multi-role registration pipelines, scroll-animated impact showcases, and automated metrics verification.",
    tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
    features: [
      "Interactive multi-stage scroll showcase featuring smooth vertical wipe transitions and parallax effects",
      "Sticky registration cards deck with smooth 3D perspective animations for NGO and Corporate CSR enrollments",
      "Dynamic image-swapping carousel showing conservation campaigns and global initiatives",
      "High-performance client interactions optimized with Lenis smooth scroll and custom GSAP animations",
      "Integrated Google reCAPTCHA v3 protection on submission forms for secure partner onboarding"
    ],
    demoUrl: "https://geek-ngo.netlify.app/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-emerald-600 to-green-500",
    bgLight: "bg-emerald-50/50",
    bgDark: "dark:bg-emerald-950/10",
    borderLight: "group-hover:border-emerald-500/30",
    glowColor: "rgba(16, 185, 129, 0.15)",
    icon: Globe
  },
  {
    id: "jewelboc-platform",
    title: "JewelBoc Jewellery Platform",
    category: "Full-Stack E-Commerce & Schemes Portal",
    description: "A premium full-stack jewellery platform featuring a dynamic catalog showcase, interactive savings scheme calculators, and an administrative ledger system.",
    longDescription: "JewelBoc is an enterprise-grade jewellery e-commerce and schemes management platform. It features interactive financial simulation tools for Systematic Investment Plans (SIP), Equated Monthly Installments (EMI), and monthly Kitty savings schemes. Administrators benefit from a feature-rich backend management console supporting customer ledger records, payment transaction verification, dynamic product catalog management, and a flexible CMS to update hero banners, images, and content.",
    tech: ["React", "Node.js", "Express", "MySQL", "Sequelize", "Tailwind CSS"],
    features: [
      "Interactive customer calculators simulating gold savings for SIP, EMI plans, and Kitty savings schemes",
      "Robust Kitty Scheme module tracking monthly contributions, calculating penalties, and managing maturity bonuses",
      "Comprehensive Admin Portal providing customer account tracking, payment ledger sheets, and user management",
      "Dynamic Content Management System (CMS) enabling live website content updates for banners, hero media, and texts",
      "Secure API integration with JWT auth, password hashing via bcrypt, and Google reCAPTCHA validation",
      "Dynamic product catalog builder supporting product category organization, stock tracking, and image uploads"
    ],
    demoUrl: "https://jewelboc.com/",
    githubUrl: "https://github.com/Shailesh-codes",
    color: "from-rose-500 to-amber-500",
    bgLight: "bg-rose-50/30",
    bgDark: "dark:bg-rose-950/10",
    borderLight: "group-hover:border-rose-500/30",
    glowColor: "rgba(244, 63, 94, 0.15)",
    icon: Gem
  }
];

export default function Services() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel(
    { loop: true, dragFree: true, align: "start" },
    [
      AutoScroll({
        playOnInit: true,
        stopOnInteraction: false,
        stopOnMouseEnter: true,
        speed: 1.2
      })
    ]
  );

  // Pause AutoScroll when selectedProject modal is active
  useEffect(() => {
    if (!emblaApi) return;
    const autoScroll = emblaApi.plugins().autoScroll;
    if (!autoScroll) return;

    if (selectedProject) {
      autoScroll.stop();
    } else {
      autoScroll.play();
    }
  }, [emblaApi, selectedProject]);

  // Close modal on escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="services" className="py-20 md:py-28 w-full relative overflow-hidden">
      {/* Tech grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none" />

      {/* Ambient background spotlights */}
      <div className="absolute top-[20%] left-[20%] w-[35%] h-[35%] -z-10 bg-purple-500/5 dark:bg-purple-500/2 rounded-full blur-[130px] pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[35%] h-[35%] -z-10 bg-fuchsia-500/5 dark:bg-fuchsia-500/2 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2 select-none">
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--lavender)] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[var(--lavender)] font-bold">
                Offerings & Projects
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
              Services & Creations
            </h2>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3.5">
            <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-sm md:text-base leading-relaxed md:text-right">
              A curated catalog of services backed by active applications I have designed and deployed.
            </p>
          </div>
        </div>

        {/* Infinite Scrolling Project Carousel via Embla */}
        <div className="relative w-full py-4 select-none animate-fade-in">
          {/* Horizontal gradient masks to fade items at edges */}
          <div className="absolute inset-y-0 left-0 w-12 md:w-24 bg-gradient-to-r from-[var(--background)] to-transparent z-10 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-12 md:w-24 bg-gradient-to-l from-[var(--background)] to-transparent z-10 pointer-events-none" />

          {/* Embla Viewport */}
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            {/* Embla Container */}
            <div className="flex gap-6 pl-4 md:pl-0">
              {projectsData.map((project) => {
                const ProjectIcon = project.icon;
                return (
                  <div
                    key={project.id}
                    onClick={() => setSelectedProject(project)}
                    style={{
                      "--glow": project.glowColor
                    } as React.CSSProperties}
                    className="group flex-none w-[290px] sm:w-[350px] md:w-[380px] rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/40 p-6 md:p-8 flex flex-col justify-between hover:shadow-[0_20px_45px_var(--glow)] hover:border-zinc-300 dark:hover:border-zinc-700/80 hover:scale-[1.015] transition-all duration-500 cursor-pointer overflow-hidden relative"
                  >
                    {/* Decorative Tech Grid inside Card */}
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808007_1px,transparent_1px),linear-gradient(to_bottom,#80808007_1px,transparent_1px)] bg-[size:14px_14px] opacity-40 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10" />

                    {/* Custom colored glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: `radial-gradient(circle at 100% 0%, ${project.glowColor} 0%, transparent 60%)`
                      }}
                    />

                    <div>
                      <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center gap-2">
                          <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${project.color}`} />
                          <span className="text-[11px] font-bold text-zinc-400 dark:text-zinc-500 tracking-wider uppercase">
                            {project.category}
                          </span>
                        </div>
                        <div className="w-10 h-10 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 flex items-center justify-center text-zinc-600 dark:text-zinc-400 group-hover:text-white group-hover:border-transparent transition-all duration-500 relative overflow-hidden">
                          {/* Background gradient showing on hover */}
                          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-0`} />
                          <ProjectIcon size={18} strokeWidth={2} className="group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10" />
                        </div>
                      </div>

                      <h3 className={`text-xl md:text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 transition-all duration-300 group-hover:bg-gradient-to-r ${project.color} group-hover:bg-clip-text group-hover:text-transparent`}>
                        {project.title}
                      </h3>

                      <p className="text-zinc-600 dark:text-zinc-400 text-[13px] md:text-sm leading-relaxed mt-4">
                        {project.description}
                      </p>
                    </div>

                    <div className="mt-8">
                      {/* Tech stack highlights */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.tech.slice(0, 3).map((t) => {
                          const meta = techIcons[t];
                          const Icon = meta ? meta.icon : Code2;
                          return (
                            <span
                              key={t}
                              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-300 text-[11px] font-bold hover:border-zinc-300 dark:hover:border-zinc-700/80 transition-all duration-300"
                            >
                              <Icon className={`w-3.5 h-3.5 ${meta ? meta.color : "text-zinc-500"}`} />
                              {t}
                            </span>
                          );
                        })}
                        {project.tech.length > 3 && (
                          <span className="inline-flex items-center px-2 py-1 rounded-lg bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/60 dark:border-zinc-800/80 text-zinc-400 text-[11px] font-semibold">
                            +{project.tech.length - 3} more
                          </span>
                        )}
                      </div>

                      <div className="flex items-center justify-between border-t border-zinc-100 dark:border-zinc-800 pt-4 w-full">
                        <div className="flex items-center text-xs font-bold text-zinc-700 dark:text-zinc-350 group-hover:text-[var(--lavender)] transition-colors duration-300 gap-2">
                          <span className="relative flex h-2 w-2">
                            <span className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-gradient-to-r ${project.color} opacity-75`} />
                            <span className={`relative inline-flex rounded-full h-2 w-2 bg-gradient-to-r ${project.color}`} />
                          </span>
                          Explore Details
                          <ArrowUpRight size={14} strokeWidth={2.5} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                        </div>
                        {project.demoUrl !== "#" && (
                          <a
                            href={project.demoUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[11px] font-bold text-zinc-500 hover:text-[var(--lavender)] dark:text-zinc-400 dark:hover:text-[var(--lavender)] transition-colors duration-300"
                          >
                            Live Site
                            <ExternalLink size={12} strokeWidth={2.5} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>


      {/* Project Details Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative max-w-2xl w-full rounded-3xl border border-zinc-200 dark:border-zinc-800/80 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-lg pl-6 pr-14 py-8 md:p-8 shadow-2xl overflow-y-auto max-h-[90vh] animate-slide-up hover:border-[var(--lavender)]/20 transition-colors duration-500"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-8 right-4 p-2 rounded-xl border border-zinc-200/50 dark:border-zinc-800/80 text-zinc-500 hover:text-zinc-700 dark:text-zinc-400 dark:hover:text-zinc-200 bg-white/95 dark:bg-zinc-900/95 shadow-sm transition-all z-20 cursor-pointer hover:scale-105"
              aria-label="Close Details"
            >
              <X size={16} strokeWidth={2.5} />
            </button>
            {/* Modal Ambient Corner Flare */}
            <div
              className="absolute top-0 right-0 w-48 h-48 -z-10 rounded-full blur-[60px] pointer-events-none opacity-40"
              style={{
                background: `radial-gradient(circle, ${selectedProject.glowColor} 0%, transparent 70%)`
              }}
            />

            {/* Abstract Tech Header Showcase */}
            <div className="relative w-full h-40 sm:h-48 rounded-2xl overflow-hidden mb-6 border border-zinc-200 dark:border-zinc-800/80 bg-zinc-950 flex flex-col justify-between p-5 font-mono select-none">
              {/* Mock browser dot controls */}
              <div className="flex items-center justify-between pb-3 border-b border-zinc-900 w-full z-10">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
                </div>
                <span className="text-[10px] text-zinc-600 font-sans tracking-wide">
                  {selectedProject.id}.config
                </span>
                <div className="w-8" />
              </div>

              {/* Console details */}
              <div className="flex-1 flex flex-col justify-center py-2 text-zinc-400 z-10">
                <div className="text-[11px] text-zinc-600">{"$ init --project=" + selectedProject.id}</div>
                <div className="text-base sm:text-lg font-bold text-zinc-100 mt-1 flex items-center gap-2">
                  <span className={`bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent`}>
                    {selectedProject.title}
                  </span>
                  <span className="w-1.5 h-4.5 bg-[var(--lavender)] animate-pulse inline-block" />
                </div>
                <div className="text-[10px] text-zinc-500 mt-2 tracking-wide uppercase font-semibold">
                  {"STATUS: PRODUCTION_READY // HOSTED: ACTIVE"}
                </div>
              </div>

              {/* Bottom row decor */}
              <div className="flex items-center justify-between text-[9px] text-zinc-600 font-sans border-t border-zinc-900/50 pt-2.5 z-10">
                <span>STACK: {selectedProject.tech.slice(0, 4).join(" • ")}</span>
                <span className="text-[var(--lavender)] font-bold">STABLE DEPLOYMENT</span>
              </div>

              {/* Ambient grid background and color glow inside container */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808006_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:10px_10px] pointer-events-none" />
              <div className={`absolute -right-16 -bottom-16 w-36 h-36 rounded-full blur-2xl opacity-20 bg-gradient-to-br ${selectedProject.color} pointer-events-none`} />
            </div>

            {/* Content Details */}
            <div className="space-y-6">
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                  Project Overview
                </h4>
                <p className="text-sm md:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {selectedProject.longDescription}
                </p>
              </div>

              {/* Technologies Section */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                  Technologies Utilized
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tech.map((t) => {
                    const meta = techIcons[t];
                    const Icon = meta ? meta.icon : Code2;
                    return (
                      <div
                        key={t}
                        className="flex items-center gap-2 px-3 py-2 rounded-xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-700 dark:text-zinc-300 text-xs font-bold shadow-sm hover:scale-102 hover:border-[var(--lavender)]/40 hover:text-[var(--lavender)] transition-all duration-300 cursor-default select-none"
                      >
                        <Icon className={`w-3.5 h-3.5 ${meta ? meta.color : "text-zinc-500"}`} />
                        <span>{t}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Key Highlights Section */}
              <div>
                <h4 className="text-xs font-extrabold uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-3">
                  Key Deliverables & Features
                </h4>
                <ul className="space-y-3">
                  {selectedProject.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-xs md:text-sm text-zinc-750 dark:text-zinc-300">
                      <span className="p-0.5 bg-purple-50 dark:bg-purple-950/40 text-[var(--lavender)] rounded-md mt-0.5 shrink-0">
                        <CheckCircle2 size={14} className="stroke-[2.5]" />
                      </span>
                      <span className="font-semibold leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer Links */}
              <div className="flex flex-col sm:flex-row items-center gap-4 pt-6 border-t border-zinc-100 dark:border-zinc-800/80 mt-8 w-full">
                {selectedProject.demoUrl !== "#" ? (
                  <a
                    href={selectedProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[var(--lavender)] hover:opacity-95 text-white font-bold rounded-xl shadow-md shadow-[var(--lavender)]/20 transition-all hover:-translate-y-0.5 text-xs md:text-sm"
                  >
                    <ExternalLink size={14} strokeWidth={2.5} />
                    Launch Live Service
                  </a>
                ) : null}
                <a
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 font-bold rounded-xl transition-all hover:-translate-y-0.5 text-xs md:text-sm"
                >
                  <FaGithub size={14} />
                  Explore Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
