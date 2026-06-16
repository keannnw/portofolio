"use client";

import { useEffect, useRef } from "react";
import { owner } from "@/data/portfolio";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const nameRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!nameRef.current || !subtitleRef.current) return;

    const nameText = owner.fullName;
    const words = nameText.split(" ");
    
    // Clear and rebuild for GSAP animation
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
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2,
        ease: "power4.out",
        delay: 0.2,
      });

      gsap.to(subtitleRef.current, {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        delay: 1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <header
      id="hero"
      ref={heroRef}
      className="h-screen w-full flex flex-col items-center justify-center linen-texture text-center px-margin-mobile relative"
    >
      <div className="mb-6 z-10 mt-16 md:mt-0">
        <h1
          ref={nameRef}
          className="font-display-lg text-6xl md:text-[100px] lg:text-[120px] md:leading-[130px] text-primary tracking-wide px-4"
        >
          {owner.fullName}
        </h1>
      </div>
      
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: "100px" }}
        transition={{ duration: 1.5, delay: 1, ease: "easeInOut" }}
        className="h-[1px] bg-gold mb-8 z-10"
      />

      <p
        ref={subtitleRef}
        className="font-headline-lg-italic text-2xl md:text-headline-lg-italic italic text-outline opacity-0 translate-y-5 z-10 max-w-2xl px-4"
      >
        {owner.role}
      </p>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="mt-16 group flex flex-col items-center gap-2 z-10"
      >
        <span className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant group-hover:text-primary transition-colors">
          Discover the Craft
        </span>
        <div className="h-hairline w-12 bg-secondary-fixed group-hover:w-24 group-hover:bg-gold transition-all duration-500"></div>
      </motion.a>
    </header>
  );
}
