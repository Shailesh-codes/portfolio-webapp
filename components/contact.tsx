"use client";

import React, { useState } from "react";
import { Mail, MapPin, Send, MessageSquare } from "lucide-react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formState, setFormState] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name || !formState.email || !formState.message) return;

    setIsSubmitting(true);
    // Simulate API request delay
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: "", email: "", message: "" });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 w-full relative">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 md:mb-16">
          <div>
            <span className="text-xs uppercase tracking-widest text-[var(--lavender)] font-bold mb-2 block">
              Let's Connect
            </span>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
              Get In Touch
            </h2>
          </div>
          <p className="text-zinc-500 dark:text-zinc-400 max-w-md text-sm md:text-base leading-relaxed">
            Have a project in mind, want to collaborate, or just want to say hi? Drop me a message.
          </p>
        </div>

        {/* Contact Layout Container */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-stretch">
          
          {/* Left Column: Direct Info Cards (2/5 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            
            {/* Info Card */}
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 md:p-8 flex-1 flex flex-col justify-between">
              <div>
                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-6 flex items-center gap-2">
                  <MessageSquare className="w-5 h-5 text-[var(--lavender)]" /> Contact Information
                </h3>
                
                <div className="space-y-6">
                  {/* Location Info */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Location</h4>
                      <p className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1">Virar, Maharashtra, India</p>
                    </div>
                  </div>

                  {/* Email Info */}
                  <div className="flex items-start gap-4">
                    <div className="p-3.5 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider">Email</h4>
                      <a href="mailto:shailesh.bhosale.geekrider@gmail.com" className="text-sm font-semibold text-zinc-800 dark:text-zinc-200 mt-1 hover:text-[var(--lavender)] transition-colors block">
                        shaileshb517@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Channels */}
              <div className="mt-12 pt-6 border-t border-zinc-100 dark:border-zinc-800">
                <h4 className="text-xs font-bold text-zinc-400 dark:text-zinc-500 uppercase tracking-wider mb-4">Follow Me</h4>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/Shailesh-codes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-zinc-900 dark:hover:border-zinc-100 hover:text-[#181717] dark:hover:text-white transition-all duration-300"
                  >
                    <FaGithub className="w-5 h-5 transition-transform duration-500 group-hover/social:scale-110" />
                  </a>
                  <a
                    href="https://www.linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-[#0A66C2] dark:hover:border-[#0A66C2] hover:text-[#0A66C2] dark:hover:text-[#0A66C2] transition-all duration-300"
                  >
                    <FaLinkedin className="w-5 h-5 transition-transform duration-500 group-hover/social:scale-110" />
                  </a>
                  <a
                    href="https://www.instagram.com/_shailesh__24?utm_source=qr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/social p-3 rounded-2xl bg-zinc-50 dark:bg-zinc-950 border border-zinc-100 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:border-[#E1306C] dark:hover:border-[#E1306C] hover:text-[#E1306C] dark:hover:text-[#E1306C] transition-all duration-300"
                  >
                    <FaInstagram className="w-5 h-5 transition-transform duration-500 group-hover/social:scale-110" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form (3/5 cols) */}
          <div className="lg:col-span-3">
            <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/50 p-6 md:p-8 relative">
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Form Heading */}
                <div>
                  <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100">Send a Message</h3>
                  <p className="text-xs text-zinc-400 dark:text-zinc-500 mt-1">I will get back to you within 24 hours.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {/* Name Input */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      required
                      value={formState.name}
                      onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                      placeholder="Can I have your name?"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[var(--lavender)] focus:ring-1 focus:ring-[var(--lavender)]/20 transition-all"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={formState.email}
                      onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                      placeholder="Where I can reach you?"
                      className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[var(--lavender)] focus:ring-1 focus:ring-[var(--lavender)]/20 transition-all"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs font-bold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={formState.message}
                    onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    className="w-full px-4 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 text-sm font-medium placeholder-zinc-400 dark:placeholder-zinc-600 focus:outline-none focus:border-[var(--lavender)] focus:ring-1 focus:ring-[var(--lavender)]/20 transition-all resize-none"
                  />
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-[var(--lavender)] text-white font-bold rounded-xl transition-all shadow-md shadow-[var(--lavender)]/20 hover:shadow-lg hover:shadow-[var(--lavender)]/30 hover:-translate-y-0.5 disabled:opacity-50 disabled:pointer-events-none text-sm group"
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      Send Message
                    </>
                  )}
                </button>

                {/* Success Banner */}
                {submitted && (
                  <div className="p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-900/50 text-emerald-800 dark:text-emerald-400 text-xs font-bold animate-fade-in">
                    Message sent successfully! Thank you for reaching out.
                  </div>
                )}
              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
