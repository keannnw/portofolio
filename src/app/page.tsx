import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectSection from "@/components/ProjectSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="w-full relative min-h-screen bg-background linen-texture overflow-x-hidden">
      {/* ── Scattered animated Barong Bali watermarks ── */}
      <div className="fixed inset-0 z-0 pointer-events-none select-none">

        {/* 1 — Hero top-left, slow counterclockwise drift */}
        <div
          className="barong-a absolute opacity-[0.08] mix-blend-multiply"
          style={{ top: "4%", left: "-10%", width: "clamp(280px, 30vw, 560px)", animationDelay: "0s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 2 — Hero top-right, gentle bob */}
        <div
          className="barong-b absolute opacity-[0.07] mix-blend-multiply"
          style={{ top: "2%", right: "-14%", width: "clamp(240px, 26vw, 500px)", animationDelay: "3s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 3 — About section mid-right */}
        <div
          className="barong-c absolute opacity-[0.09] mix-blend-multiply"
          style={{ top: "22%", right: "-16%", width: "clamp(320px, 35vw, 680px)", animationDelay: "1.5s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 4 — About section mid-left */}
        <div
          className="barong-d absolute opacity-[0.07] mix-blend-multiply"
          style={{ top: "32%", left: "-12%", width: "clamp(260px, 28vw, 520px)", animationDelay: "5s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 5 — Projects center-left, large */}
        <div
          className="barong-e absolute opacity-[0.08] mix-blend-multiply"
          style={{ top: "46%", left: "-16%", width: "clamp(360px, 40vw, 760px)", animationDelay: "2s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 6 — Projects center-right */}
        <div
          className="barong-f absolute opacity-[0.07] mix-blend-multiply"
          style={{ top: "54%", right: "-10%", width: "clamp(300px, 32vw, 600px)", animationDelay: "4s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 7 — Certifications/Contact right, slow clock-drift */}
        <div
          className="barong-g absolute opacity-[0.09] mix-blend-multiply"
          style={{ top: "67%", right: "-14%", width: "clamp(340px, 36vw, 660px)", animationDelay: "0.8s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 8 — Contact section left */}
        <div
          className="barong-a absolute opacity-[0.07] mix-blend-multiply"
          style={{ top: "75%", left: "-8%", width: "clamp(260px, 28vw, 500px)", animationDelay: "6s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 9 — Footer right, opacity-pulse effect */}
        <div
          className="barong-pulse barong-d absolute mix-blend-multiply"
          style={{ top: "86%", right: "-12%", width: "clamp(280px, 30vw, 560px)", animationDelay: "2.5s" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/barong.jpg" alt="" className="w-full h-full object-contain" />
        </div>

        {/* 10 — Footer bottom-left, small accent */}
        <div
          className="barong-b absolute opacity-[0.08] mix-blend-multiply"
          style={{ top: "92%", left: "-6%", width: "clamp(200px, 22vw, 420px)", animationDelay: "7s" }}
        >
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

