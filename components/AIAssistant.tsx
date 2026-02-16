
'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle, Headphones, Sparkles } from 'lucide-react';

const AIAssistant: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  const whatsappNumber = "+97140000000"; 
  const message = "Hello ARKIVE! I need technical assistance with a project.";
  const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  useEffect(() => {
    // Initial entrance animation
    const timer = setTimeout(() => {
      setIsVisible(true);
      // Auto-expand for a few seconds on mobile/tablet to draw attention
      if (window.innerWidth < 1024) {
        setIsExpanded(true);
        setTimeout(() => setIsExpanded(false), 4000);
      }
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div 
      className={`fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] transition-all duration-1000 ease-out transform ${
        isVisible ? 'translate-y-0 opacity-100 scale-100' : 'translate-y-24 opacity-0 scale-50'
      }`}
    >
      <div className="relative flex flex-col items-end">
        {/* Proximity Label for Desktop (persistent small hint) */}
        <div className="hidden lg:flex items-center gap-2 mb-3 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm animate-bounce duration-[2000ms]">
          <Sparkles size={10} className="text-creme" />
          <span className="text-[8px] font-black uppercase tracking-[0.2em] text-inkwell">Expert Support Online</span>
        </div>

        <div className="relative group">
          {/* Status Pulse Indicator */}
          <div className="absolute -top-1 -right-1 z-20">
            <span className="relative flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-whatsapp opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-whatsapp border-2 border-white shadow-sm"></span>
            </span>
          </div>

          {/* Side Label for Desktop (Slide out on hover) */}
          <div className="absolute right-full mr-5 top-1/2 -translate-y-1/2 hidden lg:flex items-center gap-4 bg-white px-6 py-4 rounded-full shadow-2xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-8 group-hover:translate-x-0 whitespace-nowrap pointer-events-none ring-1 ring-slate-50">
            <Headphones size={18} className="text-creme" />
            <div className="flex flex-col">
              <span className="text-[11px] font-black uppercase tracking-widest text-inkwell leading-none mb-1">Live Technical Desk</span>
              <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">Connect with a structural engineer</span>
            </div>
          </div>

          {/* Main Interactive Container */}
          <a 
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            onMouseEnter={() => setIsExpanded(true)}
            onMouseLeave={() => window.innerWidth >= 1024 ? setIsExpanded(false) : null}
            className={`
              flex items-center bg-inkwell text-white rounded-full 
              shadow-[0_25px_60px_-15px_rgba(30,41,59,0.4)] 
              hover:shadow-[0_25px_60px_-15px_rgba(37,211,102,0.5)] 
              hover:bg-whatsapp transition-all duration-500 ease-in-out
              ${isExpanded ? 'pr-2 pl-6 py-2' : 'p-1'}
            `}
          >
            {/* Adaptive Text Label for All Screen Sizes */}
            <div className={`
              overflow-hidden transition-all duration-500 ease-in-out flex flex-col justify-center
              ${isExpanded ? 'max-w-[200px] opacity-100 mr-4' : 'max-w-0 opacity-0'}
            `}>
              <span className="text-[11px] font-black uppercase tracking-[0.2em] whitespace-nowrap text-white">
                Chat with Expert
              </span>
              <span className="text-[7px] font-bold uppercase tracking-[0.2em] text-white/60 whitespace-nowrap">
                UAE Technical Ops
              </span>
            </div>
            
            {/* The Icon Circle */}
            <div className="w-14 h-14 md:w-16 md:h-16 flex items-center justify-center bg-white text-inkwell rounded-full transition-all duration-500 group-hover:scale-95 group-active:scale-90">
               <MessageCircle size={28} className="fill-current group-hover:text-whatsapp transition-colors" />
            </div>
          </a>

          {/* Background Ambient Glow */}
          <div className={`
            absolute inset-0 rounded-full bg-whatsapp/20 -z-10 blur-2xl transition-all duration-1000
            ${isExpanded ? 'scale-150 opacity-100' : 'scale-100 opacity-0'}
          `}></div>
        </div>
      </div>

      {/* Mobile/Tablet Swipe Hint */}
      <div className="lg:hidden absolute bottom-full right-0 mb-4 pointer-events-none">
        <div className={`
          flex items-center gap-2 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-full border border-slate-100 shadow-sm
          transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}
        `}>
          <div className="w-1.5 h-1.5 rounded-full bg-whatsapp animate-pulse"></div>
          <span className="text-[8px] font-black uppercase tracking-[0.3em] text-creme whitespace-nowrap">Engineering Sync Active</span>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
