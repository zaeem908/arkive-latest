
'use client';

import React from 'react';
import { 
  Hammer, 
  Car, 
  Flame, 
  Wind, 
  Droplets, 
  Zap, 
  Maximize, 
  Paintbrush, 
  Grid, 
  Sprout, 
  ShieldCheck, 
  BellRing,
  ArrowRight
} from 'lucide-react';
import { SERVICES } from '../constants';
import { Service } from '../types';

const ICON_MAP: Record<string, any> = {
  Hammer, 
  Car, 
  Flame, 
  Wind, 
  Droplets, 
  Zap, 
  Maximize, 
  Paintbrush, 
  Grid, 
  Sprout, 
  ShieldCheck, 
  BellRing
};

interface ServicesProps {
  onSelectService: (service: Service) => void;
}

const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  return (
    <section id="expertise" className="py-24 md:py-40 px-6 bg-surface text-inkwell relative overflow-hidden">
      <div className="absolute top-40 right-0 text-[20vw] font-black text-slate-100 select-none opacity-40 leading-none pointer-events-none">DIVISIONS</div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 md:mb-32 gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl md:text-8xl font-black uppercase tracking-tighter mb-8 leading-none">
              Engineering <br className="hidden md:block" /> <span className="text-creme">Excellence.</span>
            </h2>
            <p className="text-xl md:text-2xl text-slate-500 font-light leading-relaxed max-w-2xl">
              From high-precision welding to complex HVAC systems, our divisions operate with military-grade technical discipline.
            </p>
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="bg-white px-6 py-4 border-l-8 border-creme text-[10px] md:text-xs font-black uppercase tracking-[0.3em] shadow-2xl">
              Official Vendor — UAE Real Estate
            </div>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-[2px] bg-slate-100 border border-slate-100 shadow-2xl">
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon];
            return (
              <button 
                key={service.id} 
                onClick={() => onSelectService(service)}
                className="group p-10 md:p-12 bg-white hover:bg-inkwell transition-all duration-500 relative overflow-hidden text-left outline-none focus:ring-4 focus:ring-creme/20"
              >
                <div className="text-creme mb-8 transform group-hover:-translate-y-2 transition-transform duration-500">
                  {Icon ? <Icon size={44} className="group-hover:text-white transition-colors" strokeWidth={1} /> : <Hammer size={44} />}
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight leading-tight group-hover:text-white transition-colors">{service.title}</h3>
                  <p className="text-slate-500 group-hover:text-slate-400 leading-relaxed font-light text-sm line-clamp-2 transition-colors">
                    {service.description}
                  </p>
                </div>
                <div className="flex items-center gap-3 mt-10 text-[10px] font-black uppercase tracking-[0.3em] text-creme group-hover:text-white transition-all transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                  Detailed Specs <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </div>
                <div className="absolute -bottom-4 -right-4 text-slate-50 text-[100px] font-black select-none group-hover:text-white/5 transition-all rotate-12">
                   {service.id.replace('s', '')}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
