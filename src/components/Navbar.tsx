import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 bg-navy/95 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#home" className="text-white font-bold tracking-wide text-lg">
          BALSAN
        </a>

        <div className="hidden md:flex items-center gap-8 text-sm text-white/80">
          <a href="#home" className="hover:text-white transition">Home</a>
          <a href="#about" className="hover:text-white transition">About</a>
          <a href="#services" className="hover:text-white transition">Services</a>
          <a href="#solutions" className="hover:text-white transition">Solutions</a>
          <a href="#contact" className="hover:text-white transition">Contact</a>
        </div>

        <a
          href="#contact"
          className="bg-royal hover:bg-royalDark text-white text-sm font-semibold px-5 py-2 rounded-full shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
        >
          Get Consultation
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
