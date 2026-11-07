import React from 'react';
import { motion } from 'framer-motion';

const contactLinks = [
  { label: 'EMAIL', value: 'bezalelmedia1@gmail.com', href: 'mailto:bezalelmedia1@gmail.com' },
  { label: 'GITHUB', value: 'github.com/azeemimtiaz2557-art', href: 'https://github.com/azeemimtiaz2557-art' },
  { label: 'PORTFOLIO', value: 'bezalel-media.vercel.app', href: 'https://bezalel-media.vercel.app/' },
  { label: 'LOCATION', value: 'Faisalabad, Pakistan', href: null as string | null },
];

export const ContactSection: React.FC = () => {
  return (
    <footer
      id="contact"
      className="relative w-full bg-[#0A1628] text-white font-sans selection:bg-[#D4AF37] selection:text-black pt-24 pb-16 px-6 sm:px-12 lg:px-20 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="text-[11px] tracking-[0.3em] uppercase text-[#D4AF37] mb-6"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          05 / CONTACT
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-7xl font-semibold uppercase tracking-tight leading-[0.95]"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          LET'S CREATE<br />
          <span className="text-[#D4AF37]">SOMETHING.</span>
        </motion.h2>

        <p className="mt-8 max-w-xl text-sm text-[#94A3B8] leading-relaxed" style={{ fontFamily: "'Poppins', sans-serif" }}>
          Have a video, a brand or a digital project in mind? Send an email and let's talk.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-px bg-[#D4AF37]/20 border border-[#D4AF37]/20">
          {contactLinks.map((item) => {
            const inner = (
              <>
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#94A3B8]">{item.label}</span>
                <span className="mt-2 text-base sm:text-lg text-white break-all">{item.value}</span>
              </>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                className="flex flex-col bg-[#0A1628] p-6 hover:bg-[#0F2140] transition-colors duration-300"
              >
                {inner}
              </a>
            ) : (
              <div key={item.label} className="flex flex-col bg-[#0A1628] p-6">
                {inner}
              </div>
            );
          })}
        </div>

        <div className="mt-20 pt-6 border-t border-[#D4AF37]/20 flex flex-col sm:flex-row justify-between gap-2 text-[10px] tracking-[0.25em] uppercase text-[#94A3B8]">
          <span>© {new Date().getFullYear()} BEZALEL MEDIA</span>
          <span>Crafted with Purpose.</span>
        </div>
      </div>
    </footer>
  );
};

export default ContactSection;
