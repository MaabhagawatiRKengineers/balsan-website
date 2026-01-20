import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";

const Solutions: React.FC = () => {
  const columns = [
    {
      title: "Financial Services",
      items: [
        "Bookkeeping & Accounting",
        "Advisory & Consulting",
        "Financial Reports",
        "Pricing & Plans",
      ],
    },
    { title: "Taxation", items: ["Income Tax", "GST"] },
    {
      title: "Audits & Compliance",
      items: ["New Business Registration", "ROC & Yearly Filings"],
    },
    { title: "HR Services", items: ["Payroll Processing", "Job Assistance"] },
    { title: "Others", items: ["Trademark Filing", "Insurance Services"] },
  ];

  return (
    <Section id="solutions" className="bg-white">
      <Reveal>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Business Solutions
          </h2>
          <p className="mt-4 text-slate-600 max-w-3xl mx-auto text-[15px] leading-relaxed">
            Everything you need to manage business finance, taxation and
            compliance in one place.
          </p>
        </div>
      </Reveal>

      <Reveal delay={150}>
        <div className="mt-14 rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-5 bg-white">
            {columns.map((col, idx) => (
              <div
                key={idx}
                className="p-7 border-b md:border-b-0 md:border-r border-slate-200 last:border-r-0"
              >
                <h4 className="font-extrabold text-slate-900">{col.title}</h4>

                <ul className="mt-4 space-y-2 text-sm text-slate-600">
                  {col.items.map((it, j) => (
                    <li
                      key={j}
                      className="hover:text-[#1D4ED8] transition cursor-default"
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Reveal>
    </Section>
  );
};

export default Solutions;
