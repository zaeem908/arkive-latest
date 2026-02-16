
'use client';

import React, { useState } from 'react';
import { Plus, Minus, HelpCircle, ArrowRight } from 'lucide-react';

const FAQS = [
  {
    q: "Annual Maintenance Contract Scope",
    a: "Our AMC is a 360-degree technical shield. It includes quarterly structural integrity audits, HVAC thermal efficiency testing, preventative plumbing overhaul, and prioritized 24/7 emergency dispatch with a sub-4-hour SLA across all major UAE districts."
  },
  {
    q: "Custom Architectural Engineering",
    a: "ARKIVE operates a dedicated 'Special Projects' division. We transform architectural sketches into load-bearing reality using precision-engineered steel, FSC-certified timber, and UV-resistant technical fabrics, all compliant with Dubai Municipality standards."
  },
  {
    q: "Technician Certification & Standards",
    a: "Every operative is ARKIVE-Certified. This involves rigorous biannual training in specialized welding (MIG/TIG), advanced HVAC electronics, and high-altitude safety. We hold ISO-9001 and ISO-45001 certifications for quality and safety management."
  },
  {
    q: "Turnaround & Commissioning Timeline",
    a: "Standard technical commissions (Pergolas/Carports) move from structural drafting to final handover within 21-35 days. Maintenance audits are delivered same-day with digital technical reports accessible via our client portal."
  }
];

const FAQ: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-40 px-6 bg-surface border-y border-slate-100 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-white/50 -skew-x-12 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-20 relative z-10">
        <div className="lg:col-span-5 space-y-10">
          <div className="inline-flex items-center gap-3 px-4 py-2 bg-creme/10 text-creme rounded-full text-[10px] font-black uppercase tracking-[0.3em]">
            <HelpCircle size={14} /> Knowledge Base
          </div>
          <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none text-inkwell">
            Technical <br /> <span className="text-creme">Protocols.</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-md">
            Transparency in engineering is our baseline. Explore our operational standards and technical methodologies.
          </p>
          <div className="pt-10 border-t border-slate-200">
            <button className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.4em] text-inkwell hover:text-creme transition-colors">
              Download Full Documentation <ArrowRight size={16} className="group-hover:translate-x-2 transition-transform" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-4">
          {FAQS.map((faq, idx) => (
            <div 
              key={idx} 
              className={`group transition-all duration-500 overflow-hidden rounded-sm ${
                openIdx === idx 
                ? 'bg-white shadow-2xl shadow-inkwell/5 ring-1 ring-slate-100' 
                : 'bg-transparent border-b border-slate-200 hover:border-creme'
              }`}
            >
              <button 
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
                className="w-full flex justify-between items-center p-8 text-left transition-all"
              >
                <div className="flex gap-6 items-center">
                  <span className={`text-[10px] font-black tracking-widest ${openIdx === idx ? 'text-creme' : 'text-slate-300'}`}>
                    0{idx + 1}
                  </span>
                  <span className={`text-lg md:text-xl font-bold uppercase tracking-tight transition-colors ${openIdx === idx ? 'text-inkwell' : 'text-slate-500 group-hover:text-inkwell'}`}>
                    {faq.q}
                  </span>
                </div>
                <div className={`p-2 rounded-full transition-all ${openIdx === idx ? 'bg-creme text-white rotate-180' : 'bg-slate-50 text-slate-300'}`}>
                  {openIdx === idx ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              <div className={`transition-all duration-500 ease-in-out ${openIdx === idx ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
                <div className="p-8 pt-0 pl-24 text-slate-500 font-light leading-relaxed border-l-2 border-creme ml-12 mb-8">
                  {faq.a}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
