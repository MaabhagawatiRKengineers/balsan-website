import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { Briefcase, Gift, ShieldCheck } from "lucide-react";

const About: React.FC = () => {
  return (
    <Section id="about" className="bg-gradient-to-b from-white to-slate-50">
      <Reveal>
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            About <span className="text-royal">BALSAN</span>
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Balsan provides complete business and finance solutions including
            accounting, taxation, GST, compliance, payroll and advisory with
            expertise and trust. We act as your strategic partner in growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Briefcase className="w-10 h-10 text-royal mb-5" />
            <h3 className="font-bold text-lg mb-2">Professional Experts</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Experienced team of finance & compliance professionals.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <Gift className="w-10 h-10 text-royal mb-5" />
            <h3 className="font-bold text-lg mb-2">End-to-End Support</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              We manage everything from accounting to advisory under one roof.
            </p>
          </div>

          <div className="bg-white border border-slate-200 rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <ShieldCheck className="w-10 h-10 text-royal mb-5" />
            <h3 className="font-bold text-lg mb-2">100% Confidentiality</h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Your financial and business data is handled securely.
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default About;
