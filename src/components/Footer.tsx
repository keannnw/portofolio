import { owner } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-transparent py-24 flex flex-col items-center justify-center text-center px-margin-mobile border-t border-secondary-fixed/50">
      <div className="font-display-lg text-4xl md:text-5xl text-primary mb-8 uppercase tracking-widest">{owner.nickname}</div>
      <div className="flex space-x-8 mb-12 font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant">
        <a className="hover:text-gold transition-all duration-300" href="#">
          Privacy
        </a>
        <a className="hover:text-gold transition-all duration-300" href="#">
          Terms
        </a>
        <a className="hover:text-gold transition-all duration-300" href="#">
          Press
        </a>
      </div>
      <p className="font-label-md text-label-md uppercase tracking-[0.2em] text-on-surface-variant opacity-60">
        © {currentYear} {owner.fullName.toUpperCase()}. ALL RIGHTS RESERVED.
      </p>
    </footer>
  );
}
