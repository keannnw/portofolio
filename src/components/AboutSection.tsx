"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { owner, skills } from "@/data/portfolio";

const fadeUpVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0 },
};

const fadeUpTransition = {
  duration: 0.7,
  ease: [0.25, 0.46, 0.45, 0.94] as const,
};

const SkillBarGroup = ({ title, skillList }: { title: string, skillList: { name: string, level: number }[] }) => (
  <div className="mb-8">
    <h4 className="font-label-md text-label-md uppercase tracking-widest text-primary mb-4">{title}</h4>
    <ul className="space-y-6 font-serif text-on-surface">
      {skillList.map((skill, idx) => (
        <li key={idx} className="flex flex-col gap-2">
          <div className="flex justify-between items-center text-lg">
            <span>{skill.name}</span>
            <span className="text-primary/70">{skill.level}%</span>
          </div>
          <div className="h-2 w-full bg-cream-dark rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gold rounded-full"
              initial={{ width: 0 }}
              whileInView={{ width: `${skill.level}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, delay: 0.1 * idx, ease: "easeOut" }}
            />
          </div>
        </li>
      ))}
    </ul>
  </div>
);

const getFloatingIcons = (isMobile: boolean) => [
  {
    src: "/icons/laravel.png",
    custom: { x: isMobile ? -90 : -190, y: isMobile ? -100 : -200, rotate: -25 },
    bobDuration: 3,
    bobDelay: 0,
  },
  {
    src: "/icons/mysql.png",
    custom: { x: isMobile ? 90 : 190, y: isMobile ? -80 : -160, rotate: 20 },
    bobDuration: 3.5,
    bobDelay: 0.5,
  },
  {
    src: "/icons/typescript.png",
    custom: { x: isMobile ? -100 : -210, y: isMobile ? 80 : 160, rotate: -15 },
    bobDuration: 4,
    bobDelay: 0.2,
  },
  {
    src: "/icons/flutter.png",
    custom: { x: isMobile ? 100 : 210, y: isMobile ? 100 : 200, rotate: 30 },
    bobDuration: 3.2,
    bobDelay: 0.7,
  },
];

const iconVariants = {
  hidden: {
    x: 0,
    y: 0,
    scale: 0,
    opacity: 0,
    rotate: 0,
  },
  visible: (custom: { x: number; y: number; rotate: number }) => ({
    x: custom.x,
    y: custom.y,
    scale: 1,
    opacity: 1,
    rotate: custom.rotate,
    transition: {
      type: "spring" as const,
      stiffness: 90,
      damping: 12,
      mass: 0.8,
    },
  }),
};

export default function AboutSection() {
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="about" className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-gutter items-start">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={fadeUpVariant}
        transition={fadeUpTransition}
      >
        <h2 className="font-display-lg text-4xl md:text-display-lg text-primary mb-12">The Philosophy</h2>
        <div className="space-y-8">
          {owner.bio.map((paragraph, idx) => (
            <p key={idx} className="font-body-lg text-body-lg leading-relaxed text-on-surface-variant font-serif">
              {paragraph}
            </p>
          ))}
          
          <blockquote className="font-quote text-quote italic text-secondary border-l-2 border-secondary-fixed pl-8 my-12">
            "{owner.quote}"
          </blockquote>
          
          <div className="mt-12 pr-0 md:pr-12">
            <SkillBarGroup title="Frontend" skillList={skills.frontend} />
            <SkillBarGroup title="Backend" skillList={skills.backend} />
            <SkillBarGroup title="Database" skillList={skills.database} />
          </div>
        </div>
      </motion.div>

      <div className="md:sticky md:top-32 h-fit">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUpVariant}
          transition={{ ...fadeUpTransition, delay: 0.2 }}
          className="relative p-8 md:p-16 mt-12 md:mt-0 cursor-pointer"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="ornament-border absolute inset-0 pointer-events-none drop-shadow-xl"></div>
          
          {/* Profile Image container - Crops the image but NOT the icons */}
          <div className="aspect-[4/5] bg-surface-container-low relative overflow-hidden transition-all duration-700">
            {/* Default Image */}
            <img
              alt="Portrait of the Artist"
              className={`absolute inset-0 w-full h-full object-cover filter transition-all duration-700 ${
                isHovered ? "opacity-0 scale-105" : "opacity-100 sepia-[0.2] brightness-[1.05]"
              }`}
              src="/images/portrait-1.jpg"
            />
            {/* Hover Image */}
            <img
              alt="Portrait of the Artist Hover"
              className={`absolute inset-0 w-full h-full object-cover filter transition-all duration-700 ${
                isHovered ? "opacity-100 sepia-0 brightness-100 scale-105" : "opacity-0"
              }`}
              src="/images/portrait-2.jpg"
            />
          </div>

          {/* Floating Icons overlay - Outside the overflow-hidden box, positioned absolutely over it */}
          <div className="absolute inset-0 pointer-events-none z-20">
            <AnimatePresence>
              {isHovered && getFloatingIcons(isMobile).map((icon, idx) => (
                <motion.div
                  key={idx}
                  custom={icon.custom}
                  variants={iconVariants}
                  initial="hidden"
                  animate="visible"
                  exit="hidden"
                  style={{
                    left: "calc(50% - 2rem)",
                    top: "calc(50% - 2rem)",
                  }}
                  className="absolute pointer-events-auto"
                >
                  {/* Bobbing and swaying container */}
                  <motion.div
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 3, -3, 0],
                    }}
                    transition={{
                      duration: icon.bobDuration,
                      repeat: Infinity,
                      repeatType: "mirror",
                      ease: "easeInOut",
                      delay: icon.bobDelay,
                    }}
                    className="w-16 h-16 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center p-3 shadow-xl border border-gold/30 transition-all duration-300 hover:scale-110 hover:border-gold"
                  >
                    <img src={icon.src} alt="Tech Icon" className="w-full h-full object-contain drop-shadow-md" />
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
