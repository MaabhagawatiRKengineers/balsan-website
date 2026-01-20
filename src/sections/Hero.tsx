import React from "react";
import { motion } from "framer-motion";

const Hero: React.FC = () => {
  return (
    <section id="home" className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
        {/* Left */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 bg-royal/10 text-royal font-semibold text-xs tracking-wider px-4 py-2 rounded-full mb-6">
            SMART BUSINESS & FINANCE SOLUTIONS
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Smart Business &{" "}
            <span className="text-royal">Finance Solutions</span>
          </h1>

          <p className="mt-5 text-slate-600 text-lg leading-relaxed max-w-xl">
            We support growing companies with accounting, compliance, taxation,
            payroll and advisory — all under one trusted roof.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#services"
              className="bg-royal hover:bg-royalDark text-white font-semibold px-6 py-3 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 active:scale-95"
            >
              Explore Services →
            </a>

            <a
              href="#contact"
              className="border border-slate-300 hover:border-royal text-slate-800 hover:text-royal font-semibold px-6 py-3 rounded-xl transition-all duration-300"
            >
              Contact Now →
            </a>
          </div>
        </motion.div>

        {/* Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
          className="relative"
        >
          <div className="rounded-[28px] overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1600&auto=format&fit=crop"
              alt="Business finance dashboard"
              className="w-full h-[360px] md:h-[420px] object-cover"
            />
          </div>

          <div className="absolute -bottom-6 left-6 bg-white rounded-2xl shadow-xl border border-slate-100 px-6 py-4 w-[240px]">
            <p className="text-sm font-bold text-slate-900">Trusted by Businesses</p>
            <p className="text-xs text-slate-500 mt-1">
              End-to-end support from experts
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
