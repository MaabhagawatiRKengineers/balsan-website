import React from "react";
import SEO from "./components/SEO";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Services from "./sections/Services";
import Solutions from "./sections/Solutions";
import Contact from "./sections/Contact";

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-white text-slate-900">
      <SEO />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Services />
        <Solutions />
        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default App;
