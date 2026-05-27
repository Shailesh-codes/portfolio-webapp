"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Sun, Moon, Menu, X } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Close mobile menu on scroll
      if (isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Always show header at the very top of the page
      if (currentScrollY < 20) {
        setIsVisible(true);
        setLastScrollY(currentScrollY);
        return;
      }

      // Show header when scrolling down, hide when scrolling up
      if (currentScrollY > lastScrollY) {
        // Scrolling DOWN
        setIsVisible(true);
      } else {
        // Scrolling UP
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY, isMobileMenuOpen]);

  return (
    <div className="w-full h-24">
      <div
        className={`fixed top-0 left-0 right-0 z-50 transition-transform duration-300 bg-[var(--background)]/85 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 ${
          isVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <header className="flex items-center justify-between px-6 md:px-8 py-5.5 z-10 w-full max-w-7xl mx-auto">
          <div className="flex items-center gap-2 select-none">
            <div className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Portfolio<span className="text-[var(--lavender)]">.</span>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-10 text-[15px] font-medium text-zinc-600 dark:text-zinc-400">
            <a href="#about" className="hover:text-[var(--lavender)] dark:hover:text-zinc-100 transition-colors">About</a>
            <a href="#experience" className="hover:text-[var(--lavender)] dark:hover:text-zinc-100 transition-colors">Experience</a>
            <a href="#services" className="hover:text-[var(--lavender)] dark:hover:text-zinc-100 transition-colors">Services</a>
            <a href="#contact" className="hover:text-[var(--lavender)] dark:hover:text-zinc-100 transition-colors">Contact</a>
          </nav>

          <div className="flex items-center gap-4 sm:gap-6">
            {/* Theme Toggles */}
            <div className="flex items-center bg-zinc-100/80 dark:bg-zinc-800/80 rounded-full p-1 border border-zinc-200/50 dark:border-zinc-700/50 backdrop-blur-sm">
              <button
                onClick={() => setTheme("light")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  mounted && theme === "light"
                    ? "bg-white text-[var(--lavender)] shadow-sm"
                    : "text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-300"
                }`}
                aria-label="Light Theme"
              >
                <Sun size={16} strokeWidth={2.5} />
              </button>
              <button
                onClick={() => setTheme("dark")}
                className={`p-2 rounded-full transition-all duration-300 ${
                  mounted && theme === "dark"
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

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2.5 rounded-xl border border-zinc-200/50 dark:border-zinc-800/80 text-zinc-600 dark:text-zinc-400 bg-zinc-50/50 dark:bg-zinc-900/50 hover:bg-zinc-100 dark:hover:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </header>

        {/* Mobile Menu Drawer Overlay */}
        <div
          className={`fixed inset-x-0 top-20 z-40 bg-[var(--background)]/95 backdrop-blur-lg border-b border-zinc-200/50 dark:border-zinc-800/50 md:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-4 pointer-events-none"
          }`}
          style={{ height: "calc(100vh - 80px)" }}
        >
          <nav className="flex flex-col items-center justify-center gap-8 py-16 text-lg font-semibold text-zinc-700 dark:text-zinc-300 h-full">
            <a
              href="#about"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[var(--lavender)] dark:hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#experience"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[var(--lavender)] dark:hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#services"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[var(--lavender)] dark:hover:text-white transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="hover:text-[var(--lavender)] dark:hover:text-white transition-colors"
            >
              Contact
            </a>

            {/* Mobile drawer social channels */}
            <div className="flex items-center gap-6 mt-8 border-t border-zinc-200/50 dark:border-zinc-800/50 pt-10 w-1/2 justify-center text-zinc-500 dark:text-zinc-400">
              <a
                href="https://github.com/Shailesh-codes"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-black dark:hover:text-white transition-colors"
              >
                <FaGithub size={20} />
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#0A66C2] transition-colors"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.instagram.com/_shailesh__24?utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#E1306C] transition-colors"
              >
                <FaInstagram size={20} />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
