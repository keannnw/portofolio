"use client";

import { motion } from "framer-motion";
import { contacts } from "@/data/portfolio";
import { Globe, Camera, Mail, Code } from "lucide-react";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export default function ContactSection() {
  return (
    <section id="contact" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[800px] mx-auto text-center">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        transition={fadeUpTransition}
      >
        <h2 className="font-display-lg text-4xl md:text-display-lg text-primary mb-8">{contacts.heading}</h2>
        <p className="font-sans text-body-lg text-on-surface-variant mb-16 italic">
          {contacts.subtext}
        </p>

        <form className="space-y-12 text-left" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="relative">
              <label className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">
                Name
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary py-4 focus:outline-none focus:ring-0 focus:border-gold transition-colors"
                placeholder="John Doe"
                type="text"
                required
              />
            </div>
            <div className="relative">
              <label className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">
                Email Address
              </label>
              <input
                className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary py-4 focus:outline-none focus:ring-0 focus:border-gold transition-colors"
                placeholder="email@example.com"
                type="email"
                required
              />
            </div>
          </div>
          <div className="relative">
            <label className="font-label-md text-label-md uppercase tracking-widest text-primary block mb-2">
              Message
            </label>
            <textarea
              className="w-full bg-transparent border-t-0 border-x-0 border-b border-primary py-4 focus:outline-none focus:ring-0 focus:border-gold transition-colors resize-none"
              placeholder="Your message here..."
              rows={4}
              required
            ></textarea>
          </div>
          <div className="flex justify-center mt-12">
            <button
              className="px-12 py-4 bg-brown text-cream font-label-md text-label-md uppercase tracking-widest hover:bg-cream hover:text-brown border border-transparent hover:border-brown transition-all duration-500"
              type="submit"
            >
              {contacts.buttonText}
            </button>
          </div>
        </form>

        <div className="mt-24 flex justify-center flex-wrap gap-8 md:gap-12">
          {contacts.socials.github && (
            <a className="group flex flex-col items-center" href={'https://github.com/keannnw'} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Code className="text-on-surface-variant group-hover:text-gold transition-all duration-300 w-8 h-8" />
              <span className="font-label-md text-[10px] uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                GitHub
              </span>
            </a>
          )}
          {contacts.socials.linkedin && (
            <a className="group flex flex-col items-center" href={'https://www.linkedin.com/in/ketut-angga-wicaksana-8a0946280/'} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Globe className="text-on-surface-variant group-hover:text-gold transition-all duration-300 w-8 h-8" />
              <span className="font-label-md text-[10px] uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                LinkedIn
              </span>
            </a>
          )}
          {contacts.socials.instagram && (
            <a className="group flex flex-col items-center" href={'https://www.instagram.com/nggaa.w?igsh=aHE3ZXY3c3RreHVo'} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Camera className="text-on-surface-variant group-hover:text-gold transition-all duration-300 w-8 h-8" />
              <span className="font-label-md text-[10px] uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Instagram
              </span>
            </a>
          )}
          {contacts.socials.email && (
            <a className="group flex flex-col items-center" href={`mailto:${contacts.socials.email}`} aria-label="Email">
              <Mail className="text-on-surface-variant group-hover:text-gold transition-all duration-300 w-8 h-8" />
              <span className="font-label-md text-[10px] uppercase mt-2 tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Email
              </span>
            </a>
          )}
        </div>
      </motion.div>
    </section>
  );
}
