"use client";

import { useEffect, useRef } from "react";
import { owner } from "@/data/portfolio";
import { motion } from "framer-motion";
import gsap from "gsap";

/* ── small decorative particles ── */
const PARTICLES = [
  { top: "18%", left: "8%",  size: 6,  delay: 0,   dur: 4.5 },
  { top: "72%", left: "5%",  size: 4,  delay: 1.2, dur: 5.2 },
  { top: "30%", right: "7%", size: 5,  delay: 0.6, dur: 3.8 },
  { top: "80%", right: "9%", size: 7,  delay: 2,   dur: 6   },
  { top: "50%", left: "12%", size: 3,  delay: 3,   dur: 4   },
  { top: "60%", right: "6%", size: 4,  delay: 1.8, dur: 5.5 },
  { top: "15%", right: "15%",size: 5,  delay: 0.4, dur: 4.2 },
  { top: "88%", left: "14%", size: 3,  delay: 2.5, dur: 3.5 },
];

export default function HeroSection() {
  const heroRef   = useRef<HTMLDivElement>(null);
  const nameRef   = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!nameRef.current || !subtitleRef.current) return;

    const nameText = owner.fullName;
    const words = nameText.split(" ");

    nameRef.current.innerHTML = "";
    words.forEach((word) => {
      const wordSpan = document.createElement("span");
      wordSpan.className = "inline-block mr-4 md:mr-8 overflow-hidden";

      const innerSpan = document.createElement("span");
      innerSpan.className = "inline-block opacity-0 translate-y-10";
      innerSpan.innerText = word;

      wordSpan.appendChild(innerSpan);
      nameRef.current?.appendChild(wordSpan);
    });

    const ctx = gsap.context(() => {
      gsap.to(nameRef.current!.querySelectorAll("span > span"), {
        y: 0, opacity: 1, duration: 1.2, stagger: 0.2, ease: "power4.out", delay: 0.2,
      });
      gsap.to(subtitleRef.current, {
        y: 0, opacity: 1, duration: 1.2, ease: "power3.out", delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="hero"
      ref={heroRef}
      className="h-screen w-full flex flex-col items-center justify-center text-center px-margin-mobile relative overflow-hidden"
    >
      {/* ── Corner ornaments ── */}
      {["top-6 left-6", "top-6 right-6", "bottom-6 left-6", "bottom-6 right-6"].map((pos, i) => (
        <motion.div
          key={i}
          className={`absolute ${pos} w-12 h-12 border-gold pointer-events-none`}
          style={{
            borderTopWidth:    i < 2 ? 1 : 0,
            borderBottomWidth: i >= 2 ? 1 : 0,
            borderLeftWidth:   i % 2 === 0 ? 1 : 0,
            borderRightWidth:  i % 2 === 1 ? 1 : 0,
            borderColor: "#C9A96E",
          }}
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.8 + i * 0.15, duration: 0.8, ease: "easeOut" }}
        />
      ))}

      {/* ── Floating ambient gold particles ── */}
      {PARTICLES.map((p, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full bg-gold pointer-events-none"
          style={{
            top: p.top, left: (p as any).left, right: (p as any).right,
            width: p.size, height: p.size, opacity: 0,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0, 0.45, 0],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: p.dur,
            delay: p.delay + 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* ── Name ── */}
      <div className="mb-6 z-10 mt-16 md:mt-0">
        <h1
          ref={nameRef}
          className="font-display-lg text-6xl md:text-[100px] lg:text-[120px] md:leading-[130px] text-primary tracking-wide px-4"
        >
          {owner.fullName}
        </h1>
      </div>

      {/* ── Shimmer divider ── */}
      <motion.div
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: "120px", opacity: 1 }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="h-[1px] shimmer-gold mb-8 z-10"
      />

      {/* ── Role subtitle ── */}
      <p
        ref={subtitleRef}
        className="font-headline-lg-italic text-2xl md:text-headline-lg-italic italic text-outline opacity-0 translate-y-5 z-10 max-w-2xl px-4"
      >
        {owner.role}
      </p>

      {/* ── Scroll CTA ── */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
        className="mt-16 group flex flex-col items-center gap-3 z-10"
      >
        <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors duration-500">
          Discover the Craft
        </span>
        {/* animated bouncing chevron */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-[3px]"
        >
          <div className="h-hairline w-8 bg-gold/60 group-hover:w-16 transition-all duration-500" />
          <div className="h-hairline w-5 bg-gold/40 group-hover:w-10 transition-all duration-500 delay-75" />
          <div className="h-hairline w-2 bg-gold/20 group-hover:w-5 transition-all duration-500 delay-150" />
        </motion.div>
      </motion.a>
    </header>
  );
}

