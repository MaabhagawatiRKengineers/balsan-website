import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import {
  FileText,
  BadgeCheck,
  Calculator,
  TrendingUp,
  PiggyBank,
  BriefcaseBusiness,
} from "lucide-react";

const Services: React.FC = () => {
  const cards = [
    {
      icon: FileText,
      title: "Accounting",
      desc: "Bookkeeping & accounting services tailored to your business needs.",
    },
    {
      icon: Calculator,
      title: "Income Tax",
      desc: "Complete tax planning, filing and compliance for individuals & companies.",
    },
    {
      icon: BadgeCheck,
      title: "GST",
      desc: "GST registration, filings, compliance and advisory support.",
    },
    {
      icon: TrendingUp,
      title: "Financial Services",
      desc: "Budgeting, reporting and financial strategy for growth.",
    },
    {
      icon: PiggyBank,
      title: "Wealth Management",
      desc: "Personalised solutions to manage, grow and protect your wealth.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business Loans",
      desc: "Assistance in funding and loan support to scale your business.",
    },
  ];

  return (
    <Section id="services" className="bg-slate-50">
      <Reveal>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Our Services
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-[15px] leading-relaxed">
            Comprehensive financial solutions tailored for your success.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {cards.map((c, i) => (
          <Reveal key={i} delay={i * 80}>
            <div className="group rounded-2xl border border-slate-200 bg-white p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center group-hover:bg-[#1D4ED8] transition">
                <c.icon className="h-6 w-6 text-[#1D4ED8] group-hover:text-white transition" />
              </div>

              <h3 className="mt-5 font-extrabold text-lg text-slate-900">
                {c.title}
              </h3>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {c.desc}
              </p>

              <div className="mt-5 h-[1px] w-full bg-slate-100" />

              <p className="mt-4 text-sm font-semibold text-[#1D4ED8] opacity-0 group-hover:opacity-100 transition">
                Learn more →
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
};

export default Services;
