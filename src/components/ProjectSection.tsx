"use client";

import { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { projects, certifications } from "@/data/portfolio";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import useEmblaCarousel from "embla-carousel-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

export default function ProjectSection() {
  const projectSectionRef = useRef<HTMLDivElement>(null);
  const projectGalleryRef = useRef<HTMLDivElement>(null);

  const certSectionRef = useRef<HTMLDivElement>(null);
  const certGalleryRef = useRef<HTMLDivElement>(null);

  const [emblaRefProjects] = useEmblaCarousel({ loop: false, align: "center" });
  const [emblaRefCerts] = useEmblaCarousel({ loop: false, align: "center" });

  useEffect(() => {
    // GSAP Horizontal Scroll for Projects (Desktop)
    let projectCtx = gsap.context(() => {
      const gallery = projectGalleryRef.current;
      if (gallery) {
        const totalScroll = gallery.scrollWidth - window.innerWidth + 100;

        gsap.to(gallery, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: projectSectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, projectSectionRef);

    // GSAP Horizontal Scroll for Certifications (Desktop)
    let certCtx = gsap.context(() => {
      const gallery = certGalleryRef.current;
      if (gallery) {
        const totalScroll = gallery.scrollWidth - window.innerWidth + 100;

        gsap.to(gallery, {
          x: () => -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: certSectionRef.current,
            start: "top top",
            end: () => `+=${totalScroll}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });
      }
    }, certSectionRef);

    return () => {
      projectCtx.revert();
      certCtx.revert();
    };
  }, []);

  return (
    <div id="projects">
      {/* Project Section Divider */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        transition={fadeUpTransition}
        className="flex items-center justify-center gap-8 px-margin-mobile my-16"
      >
        <div className="h-hairline flex-grow bg-gold/50 max-w-[200px]"></div>
        <span className="text-secondary font-serif italic text-2xl">§</span>
        <div className="h-hairline flex-grow bg-gold/50 max-w-[200px]"></div>
      </motion.div>

      {/* --- DESKTOP PROJECTS (GSAP ScrollTrigger) --- */}
      <section ref={projectSectionRef} className="hidden md:flex h-screen flex-col justify-center overflow-hidden bg-background">
        <div className="px-margin-desktop w-full max-w-[1440px] mx-auto flex justify-between items-end mb-12">
          <h2 className="font-display-lg text-display-lg text-primary">Selected Archives</h2>
          <p className="font-label-md text-label-md uppercase tracking-[0.3em] text-outline max-w-xs text-right">
            A curation of works exploring the boundaries of traditional aesthetics and modern utility.
          </p>
        </div>

        <div className="flex pl-margin-desktop" ref={projectGalleryRef}>
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-[600px] mr-12 group cursor-pointer">
              <div className="relative overflow-hidden border border-transparent group-hover:border-gold transition-all duration-700 p-2">
                <div className="aspect-[4/3] bg-surface-container relative overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                    src={project.image}
                    alt={project.title}
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="mt-8 flex justify-between items-start">
                <div>
                  <h3 className="font-serif text-3xl text-primary mb-2 uppercase">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.stack.map(s => <span key={s} className="text-xs bg-cream-dark text-primary px-2 py-1 uppercase tracking-wider">{s}</span>)}
                  </div>
                  <p className="font-sans text-body-md text-on-surface-variant mb-4 pr-4">{project.description}</p>
                </div>
                <div className="flex flex-col items-end whitespace-nowrap">
                  <span className="font-label-md text-label-md text-secondary border border-secondary px-4 py-1 mb-2">{project.category}</span>
                  <span className="text-xs italic text-on-surface-variant">{project.status}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MOBILE PROJECTS (Embla Carousel) --- */}
      <section className="md:hidden py-section-gap overflow-hidden bg-background">
        <div className="px-margin-mobile mb-12">
          <h2 className="font-display-lg text-4xl text-primary mb-4">Selected Archives</h2>
        </div>
        <div className="overflow-hidden" ref={emblaRefProjects}>
          <div className="flex touch-pan-y pl-margin-mobile">
            {projects.map((project) => (
              <div key={project.id} className="flex-shrink-0 w-[85vw] mr-6">
                <div className="relative overflow-hidden border border-gold/30 p-2">
                  <div className="aspect-square bg-surface-container relative overflow-hidden">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      className="w-full h-full object-cover"
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <h3 className="font-serif text-2xl text-primary mb-2 uppercase">{project.title}</h3>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.stack.map(s => <span key={s} className="text-[10px] bg-cream-dark text-primary px-2 py-1 uppercase tracking-wider">{s}</span>)}
                  </div>
                  <p className="font-sans text-sm text-on-surface-variant mb-4">{project.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="font-label-md text-[10px] text-secondary border border-secondary px-2 py-1">{project.category}</span>
                    <span className="text-xs italic text-on-surface-variant">{project.status}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- DESKTOP CERTIFICATIONS (GSAP ScrollTrigger) --- */}
      <section ref={certSectionRef} className="hidden md:flex h-[80vh] flex-col justify-center overflow-hidden bg-surface-container-low border-t border-gold/20">
        <div className="px-margin-desktop w-full max-w-[1440px] mx-auto mb-12">
          <h4 className="font-label-md text-label-md uppercase tracking-[0.4em] text-primary">Serification</h4>
        </div>
        <div className="flex pl-margin-desktop items-center h-80" ref={certGalleryRef}>
          {certifications.map((cert, idx) => (
            <div key={idx} className="flex-shrink-0 w-[350px] mr-12 group">
              <div className="h-64 border border-gold/30 flex flex-col items-center justify-center p-8 text-center bg-white/50 backdrop-blur-sm group-hover:border-gold transition-colors duration-500">
                <div className="text-secondary text-4xl mb-4 group-hover:scale-110 transition-transform duration-500">
                  <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                    {cert.icon}
                  </span>
                </div>
                <p className="font-label-md text-label-md uppercase tracking-widest text-primary font-bold">{cert.name}</p>
                <p className="font-sans text-body-md text-on-surface-variant mt-2 italic">{cert.issuer}</p>
                <p className="font-sans text-sm text-gold mt-4">{cert.year}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- MOBILE CERTIFICATIONS (Embla Carousel) --- */}
      <section className="md:hidden py-24 overflow-hidden bg-surface-container-low border-t border-gold/20">
        <div className="px-margin-mobile mb-12">
          <h4 className="font-label-md text-label-md uppercase tracking-[0.4em] text-primary">Serification</h4>
        </div>
        <div className="overflow-hidden" ref={emblaRefCerts}>
          <div className="flex touch-pan-y pl-margin-mobile">
            {certifications.map((cert, idx) => (
              <div key={idx} className="flex-shrink-0 w-[75vw] mr-4">
                <div className="h-64 border border-gold/30 flex flex-col items-center justify-center p-6 text-center bg-white/50 backdrop-blur-sm">
                  <div className="text-secondary text-3xl mb-4">
                    <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                      {cert.icon}
                    </span>
                  </div>
                  <p className="font-label-md text-xs uppercase tracking-widest text-primary font-bold mb-2">{cert.name}</p>
                  <p className="font-sans text-sm text-on-surface-variant italic">{cert.issuer}</p>
                  <p className="font-sans text-xs text-gold mt-4">{cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
