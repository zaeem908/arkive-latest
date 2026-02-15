
import React from 'react';
import { Shield, Target, Compass, Zap } from 'lucide-react';

const Manifesto: React.FC = () => {
  return (
    <section id="about" className="py-32 md:py-56 px-6 bg-inkwell text-white relative overflow-hidden">
      {/* Visual Texture Background */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none grayscale invert bg-[url('https://www.transparenttextures.com/patterns/cubic-maze.png')]"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-12 gap-20 items-center">
          <div className="lg:col-span-6 space-y-16">
            <div className="space-y-6">
              <span className="text-creme text-xs font-black uppercase tracking-[0.5em] block">Our Manifesto</span>
              <h2 className="text-6xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] animate-in fade-in duration-1000">
                The Arkive <br /> <span className="text-white/20">Standard.</span>
              </h2>
            </div>
            
            <p className="text-2xl md:text-3xl text-slate-300 font-extralight leading-tight max-w-xl">
              Preserving architectural legacies through <span className="text-white font-bold">rigorous technical discipline</span> and Arabian hospitality.
            </p>

            <div className="grid grid-cols-2 gap-12">
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-creme"></div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em]">Swiss Precision</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Engineering logic applied to every joint, weld, and circuit.</p>
              </div>
              <div className="space-y-4">
                <div className="w-12 h-[1px] bg-creme"></div>
                <h4 className="text-xs font-black uppercase tracking-[0.3em]">Local Mastery</h4>
                <p className="text-xs text-slate-400 leading-relaxed">Material science optimized for the extreme Middle Eastern climate.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative group">
              <div className="absolute -inset-10 border border-white/5 rounded-sm -z-10 group-hover:scale-110 transition-transform duration-1000"></div>
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200" 
                alt="ARKIVE Facility" 
                className="w-full aspect-square object-cover grayscale brightness-50 contrast-125 rounded-sm shadow-2xl transition-all duration-1000 group-hover:grayscale-0 group-hover:brightness-90"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-24 h-24 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white cursor-pointer hover:bg-creme transition-colors group-hover:scale-110">
                  <span className="text-[10px] font-black uppercase tracking-widest">Our Story</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-32 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 pt-20 border-t border-white/5">
          {[
            { icon: Shield, val: "100%", label: "Safety Record" },
            { icon: Zap, val: "24/7", label: "Technical Response" },
            { icon: Target, val: "0.01mm", label: "Precision Tolerance" },
            { icon: Compass, val: "7", label: "UAE Emirates Coverage" }
          ].map((stat, i) => (
            <div key={i} className="space-y-4 group">
              <stat.icon size={24} className="text-creme group-hover:scale-125 transition-transform" strokeWidth={1} />
              <div className="space-y-1">
                <div className="text-4xl font-black text-white">{stat.val}</div>
                <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Manifesto;
