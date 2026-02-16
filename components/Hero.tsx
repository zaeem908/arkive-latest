
'use client';

import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] md:min-h-screen flex items-center pt-24 pb-12 px-6 bg-white overflow-hidden">
      <div className="absolute top-0 right-0 w-full md:w-1/4 h-full bg-surface -z-10 opacity-30 md:opacity-100"></div>
      
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center z-10 w-full">
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-4">
            <div className="inline-block bg-creme/5 px-3 py-1 rounded-sm text-[10px] uppercase tracking-[0.3em] font-bold text-creme">
              Technical Excellence
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl font-black text-inkwell leading-[0.9] tracking-tighter uppercase">
              Pure <br />
              <span className="text-creme">Precision</span>.
            </h1>
          </div>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-md mx-auto md:mx-0 leading-relaxed font-light">
            Defining the standard of modern technical craftsmanship and contracting across the Emirates.
          </p>
          
          <div className="flex flex-col sm:flex-row flex-wrap justify-center md:justify-start gap-4 pt-4">
            <button 
              onClick={() => document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-inkwell text-white px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-creme transition-all flex items-center justify-center gap-3"
            >
              Explore Services
            </button>
            <button 
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="border border-slate-200 text-inkwell px-10 py-5 rounded-sm font-bold uppercase tracking-widest hover:border-creme hover:text-creme transition-all"
            >
              Consultation
            </button>
          </div>
        </div>
        
        <div className="relative group mt-12 md:mt-0">
          <div className="absolute -inset-8 border-l border-t border-slate-100 -z-10"></div>
          <img 
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600" 
            alt="Architectural Precision" 
            className="w-full aspect-[16/10] object-cover grayscale brightness-105 hover:grayscale-0 transition-all duration-1000 shadow-sm rounded-sm"
          />
          <div className="absolute -bottom-6 right-6 md:-right-12 bg-white p-6 shadow-xl border-b-2 border-creme hidden sm:block">
            <span className="text-3xl font-black text-inkwell block">25+</span>
            <span className="text-[10px] text-slate-400 uppercase tracking-widest">Years Expertise</span>
          </div>
        </div>
      </div>

      <a 
        href="#expertise" 
        onClick={(e) => {
          e.preventDefault();
          document.querySelector('#expertise')?.scrollIntoView({ behavior: 'smooth' });
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-slate-300 flex flex-col items-center gap-2 animate-bounce hidden sm:flex"
      >
        <ArrowDown size={18} />
      </a>
    </section>
  );
};

export default Hero;
