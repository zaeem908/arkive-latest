
import React, { useRef } from 'react';
import { PROJECTS } from '../constants';
import { Project } from '../types';
import { ArrowUpRight, ChevronLeft, ChevronRight, Layers, Cpu, Ruler } from 'lucide-react';

interface ProjectsProps {
  onSelectProject: (project: Project) => void;
}

const Projects: React.FC<ProjectsProps> = ({ onSelectProject }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollTo = direction === 'left' ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  return (
    <section id="work" className="py-24 md:py-40 bg-white text-inkwell relative overflow-hidden">
      {/* Decorative vertical text for luxury feel */}
      <div className="absolute left-10 top-1/2 -translate-y-1/2 text-[12vw] font-black text-slate-50 select-none opacity-40 leading-none pointer-events-none origin-center -rotate-90">
        COMMISSIONS
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 gap-8">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-9xl font-black uppercase tracking-tighter leading-[0.8] animate-in slide-in-from-left duration-700">
              Technical <br /> <span className="text-creme">Showcase.</span>
            </h2>
            <div className="flex items-center gap-4">
              <div className="h-[2px] w-20 bg-creme"></div>
              <span className="text-[10px] font-black uppercase tracking-[0.4em] text-slate-300">Case Studies — 2024 Release</span>
            </div>
          </div>
          
          <div className="flex gap-4 mb-4">
            <button 
              onClick={() => scroll('left')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-creme hover:text-white hover:border-creme transition-all active:scale-90"
              aria-label="Previous Project"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => scroll('right')}
              className="w-14 h-14 rounded-full border border-slate-200 flex items-center justify-center hover:bg-creme hover:text-white hover:border-creme transition-all active:scale-90"
              aria-label="Next Project"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal Draggable-like Carousel */}
      <div 
        ref={scrollRef}
        className="flex overflow-x-auto gap-8 px-[calc((100vw-80rem)/2+1.5rem)] pb-20 no-scrollbar snap-x snap-mandatory scroll-pl-[calc((100vw-80rem)/2+1.5rem)]"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {PROJECTS.map((project, idx) => (
          <div 
            key={project.id} 
            className="flex-none w-[85vw] md:w-[650px] snap-start group"
          >
            <div className="relative aspect-[4/5] md:aspect-[16/10] overflow-hidden rounded-sm bg-slate-100 shadow-2xl transition-all duration-700 group-hover:shadow-creme/10">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-full object-cover grayscale brightness-90 transition-all duration-1000 group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
              />
              
              {/* Overlay for Technical Quick Data (Optimized for short attention span) */}
              <div className="absolute inset-x-0 bottom-0 p-8 md:p-12 translate-y-full group-hover:translate-y-0 transition-transform duration-500 bg-gradient-to-t from-inkwell via-inkwell/80 to-transparent">
                <div className="grid grid-cols-3 gap-6 text-white border-t border-white/10 pt-8">
                  <div className="space-y-2">
                    <Layers size={16} className="text-creme" />
                    <div className="text-[8px] font-bold uppercase tracking-widest opacity-50">Precision</div>
                    <div className="text-[10px] font-black uppercase tracking-tight">Grade A++</div>
                  </div>
                  <div className="space-y-2">
                    <Cpu size={16} className="text-creme" />
                    <div className="text-[8px] font-bold uppercase tracking-widest opacity-50">Tech-Stack</div>
                    <div className="text-[10px] font-black uppercase tracking-tight">IoT Grid</div>
                  </div>
                  <div className="space-y-2">
                    <Ruler size={16} className="text-creme" />
                    <div className="text-[8px] font-bold uppercase tracking-widest opacity-50">Tolerance</div>
                    <div className="text-[10px] font-black uppercase tracking-tight">0.02mm</div>
                  </div>
                </div>
              </div>

              {/* Action Button Floating */}
              <button 
                onClick={() => onSelectProject(project)}
                className="absolute top-8 right-8 w-16 h-16 bg-white text-inkwell rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 hover:bg-creme hover:text-white"
              >
                <ArrowUpRight size={24} />
              </button>
            </div>

            <div className="mt-10 space-y-4 px-2">
              <div className="flex justify-between items-baseline">
                <span className="text-creme text-[10px] font-black uppercase tracking-[0.4em]">{project.category}</span>
                <span className="text-slate-200 text-xs font-black tracking-widest">0{idx + 1} — 0{PROJECTS.length}</span>
              </div>
              <h3 
                className="text-3xl md:text-5xl font-black uppercase tracking-tighter leading-none cursor-pointer hover:text-creme transition-colors"
                onClick={() => onSelectProject(project)}
              >
                {project.title}
              </h3>
              <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed max-w-lg line-clamp-2">
                {project.description}
              </p>
            </div>
          </div>
        ))}

        {/* Final "View All" Slide */}
        <div className="flex-none w-[85vw] md:w-[400px] snap-start bg-surface rounded-sm flex flex-col items-center justify-center p-12 text-center border-2 border-dashed border-slate-200 hover:border-creme hover:bg-creme/5 transition-all group">
          <div className="space-y-6">
            <h4 className="text-4xl font-black uppercase tracking-tighter leading-tight text-inkwell group-hover:text-creme transition-colors">Complete <br /> Archive.</h4>
            <p className="text-xs text-slate-400 font-bold uppercase tracking-widest">Access our full repository of 500+ technical deliveries.</p>
            <button className="bg-inkwell text-white px-8 py-4 rounded-sm font-bold uppercase tracking-widest group-hover:bg-creme transition-all">
              Request Full Portfolio
            </button>
          </div>
        </div>
      </div>

      {/* Progress Bar for the Carousel */}
      <div className="max-w-7xl mx-auto px-6 mt-12 hidden md:block">
        <div className="h-[1px] w-full bg-slate-100 relative">
          <div className="absolute top-0 left-0 h-full bg-creme w-1/3 transition-all duration-300"></div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
