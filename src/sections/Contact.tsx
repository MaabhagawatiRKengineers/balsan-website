import React from "react";
import Section from "../components/Section";
import Reveal from "../components/Reveal";
import { Mail, Phone, MapPin, Globe } from "lucide-react";

const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-slate-50">
      <Reveal>
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900">
            Contact Balsan
          </h2>
          <p className="mt-4 text-slate-600 max-w-2xl mx-auto text-[15px] leading-relaxed">
            Get in touch with our experts today.
          </p>
        </div>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* form */}
        <Reveal delay={80}>
          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-lg transition">
            <h3 className="font-extrabold text-xl text-slate-900">
              Send us a message
            </h3>

            <form className="mt-6 space-y-4">
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="Full Name"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="Email"
              />
              <input
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D4ED8]"
                placeholder="Phone Number"
              />
              <textarea
                className="w-full rounded-xl border border-slate-200 px-4 py-3 outline-none focus:ring-2 focus:ring-[#1D4ED8] min-h-[120px]"
                placeholder="Message"
              />

              <button
                type="button"
                className="w-full rounded-xl bg-[#1D4ED8] py-3 font-semibold text-white hover:bg-blue-600 transition shadow"
              >
                Send Message
              </button>
            </form>
          </div>
        </Reveal>

        {/* info + map */}
        <Reveal delay={160}>
          <div className="rounded-3xl border border-slate-200 overflow-hidden bg-white shadow-sm hover:shadow-lg transition">
            <div className="p-8">
              <h3 className="font-extrabold text-xl text-slate-900">
                Contact Details
              </h3>

              <div className="mt-5 space-y-4 text-slate-700">
                <p className="flex items-center gap-3">
                  <Phone className="text-[#1D4ED8]" size={18} /> +91 98XXXX XXXX
                </p>
                <p className="flex items-center gap-3">
                  <Mail className="text-[#1D4ED8]" size={18} /> info@balsan.com
                </p>
                <p className="flex items-center gap-3">
                  <Globe className="text-[#1D4ED8]" size={18} /> www.balsan.com
                </p>
                <p className="flex items-center gap-3">
                  <MapPin className="text-[#1D4ED8]" size={18} /> Hyderabad,
                  Telangana
                </p>
              </div>
            </div>

            <div className="h-[290px] w-full">
              <iframe
                title="map"
                className="h-full w-full"
                loading="lazy"
                src="https://www.google.com/maps?q=Hyderabad&output=embed"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
};

export default Contact;
