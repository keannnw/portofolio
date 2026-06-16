import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen bg-background linen-texture overflow-hidden">
      {/* Scattered Barong illustrations in background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden select-none">
        {/* Barong 1 - Hero Top Left */}
        <div className="absolute top-[6%] -left-[12%] w-[350px] md:w-[600px] aspect-square opacity-[0.035] mix-blend-multiply rotate-[-15deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Barong 2 - About Mid Right */}
        <div className="absolute top-[26%] -right-[15%] w-[400px] md:w-[700px] aspect-square opacity-[0.03] mix-blend-multiply rotate-[20deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Barong 3 - Projects Mid Left */}
        <div className="absolute top-[48%] -left-[14%] w-[450px] md:w-[750px] aspect-square opacity-[0.03] mix-blend-multiply rotate-[-10deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Barong 4 - Certifications / Contact Mid Right */}
        <div className="absolute top-[70%] -right-[12%] w-[380px] md:w-[650px] aspect-square opacity-[0.035] mix-blend-multiply rotate-[15deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>
        {/* Barong 5 - Footer Bottom Left */}
        <div className="absolute top-[88%] -left-[8%] w-[350px] md:w-[600px] aspect-square opacity-[0.03] mix-blend-multiply rotate-[-25deg]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <AboutSection />
        <ProjectSection />
        <ContactSection />
        <Footer />
      </div>
    </main>
  );
}
