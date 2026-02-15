
import React from 'react';
import { Instagram, Twitter, Linkedin, ArrowUpRight, MapPin, Mail, Phone, ChevronRight } from 'lucide-react';

interface FooterProps {
  onLinkClick: (id: string) => void;
}

const Footer: React.FC<FooterProps> = ({ onLinkClick }) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-inkwell relative overflow-hidden">
      {/* Final CTA / Pre-Footer */}
      <div className="bg-surface py-24 px-6 border-b border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="space-y-4 text-center md:text-left">
            <h3 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">Ready for <span className="text-creme">The Arkive?</span></h3>
            <p className="text-slate-400 font-light max-w-md">Onboard your property to the UAE's most sophisticated technical ecosystem.</p>
          </div>
          <button 
            onClick={() => onLinkClick('#contact')}
            className="group bg-inkwell text-white px-12 py-6 rounded-sm font-bold uppercase tracking-[0.2em] hover:bg-creme transition-all flex items-center gap-4 shadow-2xl shadow-inkwell/20"
          >
            Start Your Commission <ChevronRight size={18} className="group-hover:translate-x-2 transition-transform" />
          </button>
        </div>
      </div>

      <div className="py-32 px-6">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-16 mb-24">
            <div className="lg:col-span-5 space-y-12">
              <div 
                className="flex items-center gap-3 cursor-pointer group"
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              >
                <div className="w-16 h-16 bg-inkwell flex items-center justify-center text-white font-bold text-3xl rounded-sm shadow-2xl shadow-inkwell/20 group-hover:bg-creme transition-colors">A</div>
                <div className="flex flex-col">
                  <span className="text-4xl font-black tracking-tighter uppercase leading-none">Arkive</span>
                  <span className="text-[10px] font-bold tracking-[0.5em] uppercase text-creme">Precision Technical</span>
                </div>
              </div>
              <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
                We bridge the gap between architectural ambition and technical permanence. Engineered in the UAE, inspired by precision.
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, href: '#' },
                  { icon: Twitter, href: '#' },
                  { icon: Linkedin, href: '#' }
                ].map((social, idx) => (
                  <a key={idx} href={social.href} className="w-12 h-12 border border-slate-100 flex items-center justify-center rounded-full hover:bg-creme hover:text-white hover:border-creme transition-all">
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-creme">Divisions</h4>
              <ul className="space-y-4">
                {['Expertise', 'Work', 'Shop', 'Audit', 'About'].map((link) => (
                  <li key={link}>
                    <button 
                      onClick={() => onLinkClick(`#${link.toLowerCase()}`)}
                      className="text-slate-400 hover:text-inkwell flex items-center gap-2 group transition-all text-[11px] font-bold uppercase tracking-widest"
                    >
                      {link} <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all translate-y-1 group-hover:translate-y-0" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:col-span-5 space-y-8">
              <h4 className="text-xs font-black uppercase tracking-[0.4em] text-creme">Hub Locations</h4>
              <div className="grid sm:grid-cols-2 gap-12">
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-creme shrink-0" size={20} />
                    <span className="text-xs text-slate-500 leading-relaxed font-light">
                      <strong className="text-inkwell uppercase tracking-widest block mb-1">Dubai HQ</strong>
                      Suite 1204, Tech Row, <br />Jebel Ali Ind. Area
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Mail className="text-creme shrink-0" size={20} />
                    <span className="text-xs font-bold text-inkwell uppercase tracking-widest">ops@arkive.ae</span>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <MapPin className="text-creme shrink-0" size={20} />
                    <span className="text-xs text-slate-500 leading-relaxed font-light">
                      <strong className="text-inkwell uppercase tracking-widest block mb-1">Abu Dhabi Lab</strong>
                      Warehouse 45, Khalifa <br />Industrial City (KIZAD)
                    </span>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-creme shrink-0" size={20} />
                    <span className="text-xs font-bold text-inkwell uppercase tracking-widest">+971 4 800 ARKIVE</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-16 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-12">
            <div className="flex flex-col md:flex-row items-center gap-10">
              <p className="text-[10px] text-slate-300 font-bold uppercase tracking-[0.4em]">
                © {currentYear} ARKIVE Technical Services LLC.
              </p>
              <div className="flex gap-8">
                {['Terms of Service', 'Privacy Protocol', 'Trade: 102456'].map(l => (
                  <a key={l} href="#" className="text-[9px] text-slate-400 font-bold uppercase tracking-widest hover:text-creme transition-colors">{l}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-3 bg-surface rounded-full">
              <div className="w-2 h-2 bg-creme rounded-full animate-pulse"></div>
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-slate-400">Technical Ops Active 24/7</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Architectural Line Decor */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-creme/20 to-transparent"></div>
    </footer>
  );
};

export default Footer;
