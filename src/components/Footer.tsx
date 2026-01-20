import React from "react";
import Reveal from "./Reveal";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0B1220] text-white/70">
      <div className="mx-auto max-w-6xl px-5 py-14">
        <Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div>
              <h3 className="text-white font-extrabold text-xl tracking-wide">
                BALSAN
              </h3>
              <p className="mt-4 text-sm leading-relaxed">
                Your trusted partner for comprehensive business and finance
                solutions. We support growth with accounting, compliance and
                strategy.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a className="hover:text-white transition" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#about">
                    About
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#services">
                    Services
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#solutions">
                    Solutions
                  </a>
                </li>
                <li>
                  <a className="hover:text-white transition" href="#contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact</h4>
              <p className="text-sm">Hyderabad, Telangana</p>
              <p className="text-sm mt-2">info@balsan.com</p>
              <p className="text-sm mt-2">+91 98XXXX XXXX</p>
            </div>
          </div>
        </Reveal>

        <Reveal delay={150}>
          <div className="mt-12 border-t border-white/10 pt-6 text-xs flex flex-col md:flex-row gap-3 items-center justify-between">
            <p>© {new Date().getFullYear()} BALSAN. All rights reserved.</p>
            <p className="text-white/50">Privacy Policy · Terms of Service</p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};

export default Footer;
