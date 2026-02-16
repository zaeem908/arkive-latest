
'use client';

import React, { useState, useCallback, useEffect } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Projects from '../components/Projects';
import Shop from '../components/Shop';
import FAQ from '../components/FAQ';
import Footer from '../components/Footer';
import AIAssistant from '../components/AIAssistant';
import Cart from '../components/Cart';
import QuoteForm from '../components/QuoteForm';
import Manifesto from '../components/Manifesto';
import { Product, CartItem, Project, Service } from '../types';
import { X, ArrowLeft, CheckCircle, Download, FileText } from 'lucide-react';

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const [activeService, setActiveService] = useState<Service | null>(null);

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const addToCart = useCallback((product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    setIsCartOpen(true);
  }, []);

  const updateQuantity = (id: string, delta: number) => {
    setCart(prev => prev.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }
      return item;
    }));
  };

  const removeItem = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
        setActiveService(null);
      }
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navbar 
        cartCount={cart.reduce((s, i) => s + i.quantity, 0)} 
        onCartClick={() => setIsCartOpen(true)} 
      />
      
      <main className="relative">
        <Hero />
        <Services onSelectService={setActiveService} />
        <Projects onSelectProject={setActiveProject} />

        {/* Dynamic CTA Banner */}
        <div className="py-24 md:py-32 px-6 bg-creme text-white overflow-hidden relative border-y border-white/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="space-y-6 text-center md:text-left">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
                Structural <br className="hidden md:block" /> <span className="text-inkwell">Integrity</span> Audit.
              </h2>
              <p className="text-lg md:text-xl font-light opacity-90 max-w-xl">
                Is your property ready for the summer? Book a comprehensive technical audit covering HVAC, plumbing, and structural safety.
              </p>
            </div>
            <button 
              onClick={() => scrollToSection('#contact')}
              className="group bg-white text-creme px-12 py-6 rounded-sm font-bold uppercase tracking-widest hover:bg-inkwell hover:text-white transition-all shadow-2xl flex items-center gap-4"
            >
              Book Technical Audit
              <FileText size={20} className="group-hover:rotate-12 transition-transform" />
            </button>
          </div>
          <div className="absolute top-0 right-0 h-full w-full md:w-1/3 bg-white/5 -skew-x-12 hidden md:block"></div>
        </div>

        <Shop addToCart={addToCart} />

        <div id="testimonials" className="py-32 px-6 bg-surface text-inkwell">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div className="space-y-12">
              <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
                Trusted by <br /> <span className="text-creme">Elite</span> Estates.
              </h2>
              <div className="space-y-8">
                <blockquote className="p-10 border-l-8 border-creme bg-white shadow-xl rounded-sm">
                  <p className="text-2xl font-light italic mb-8 leading-relaxed text-slate-600">
                    "ARKIVE handles the technical complexities that others shy away from. Their precision in carports and steel work is unmatched in Dubai."
                  </p>
                  <footer className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-slate-200 rounded-full overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" alt="Marcus Vane" className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className="font-black uppercase tracking-widest text-sm">Marcus Vane</div>
                      <div className="text-xs text-creme font-bold uppercase tracking-widest">Al Barari Estates Manager</div>
                    </div>
                  </footer>
                </blockquote>
              </div>
            </div>
            <div className="hidden lg:block relative">
              <div className="absolute -inset-10 border-2 border-slate-100 rounded-sm -z-10 rotate-3"></div>
              <img 
                src="https://images.unsplash.com/photo-1600607687940-497f6a620781?q=80&w=1200" 
                alt="Architecture" 
                className="w-full aspect-[4/5] object-cover grayscale brightness-90 shadow-2xl rounded-sm"
              />
            </div>
          </div>
        </div>

        <FAQ />
        <QuoteForm />
        <Manifesto />
        
        {/* Floating elements at the end of main to ensure they are on top */}
        <AIAssistant />
      </main>

      <Footer onLinkClick={scrollToSection} />
      
      <Cart 
        isOpen={isCartOpen} 
        onClose={() => setIsCartOpen(false)} 
        items={cart} 
        updateQuantity={updateQuantity} 
        removeItem={removeItem} 
      />

      {/* Modals */}
      {activeProject && (
        <div className="fixed inset-0 z-[110] bg-white overflow-y-auto animate-in fade-in slide-in-from-bottom duration-500">
          <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-xl border-b border-slate-100 p-6 flex justify-between items-center">
            <button onClick={() => setActiveProject(null)} className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-inkwell hover:text-creme transition-colors">
              <ArrowLeft size={16} /> Back to Showcase
            </button>
            <div className="text-xs font-black uppercase tracking-[0.3em] text-creme">Commission Details</div>
            <button onClick={() => setActiveProject(null)} className="p-2 hover:bg-slate-50 rounded-full"><X size={24} /></button>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-12 gap-16">
              <div className="lg:col-span-7 space-y-12">
                <div className="aspect-video bg-slate-100 overflow-hidden rounded-sm">
                   <img src={activeProject.imageUrl} alt={activeProject.title} className="w-full h-full object-cover" />
                </div>
                <div className="grid sm:grid-cols-2 gap-8">
                   <img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=800" className="aspect-square object-cover rounded-sm grayscale" />
                   <img src="https://images.unsplash.com/photo-1503387762-592dea58ef23?q=80&w=800" className="aspect-square object-cover rounded-sm grayscale" />
                </div>
              </div>
              <div className="lg:col-span-5 space-y-12">
                <div className="space-y-6">
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-creme">{activeProject.category}</span>
                  <h2 className="text-5xl font-black uppercase tracking-tighter leading-none">{activeProject.title}</h2>
                  <p className="text-xl text-slate-500 font-light leading-relaxed">{activeProject.description}</p>
                </div>
                <div className="space-y-8 pt-10 border-t border-slate-100">
                  <h4 className="text-xs font-bold uppercase tracking-widest">Project Parameters</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs text-slate-400 uppercase tracking-widest">Location</span>
                      <span className="text-xs font-bold uppercase tracking-widest">Jumeirah, Dubai</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs text-slate-400 uppercase tracking-widest">Duration</span>
                      <span className="text-xs font-bold uppercase tracking-widest">4 Weeks</span>
                    </li>
                    <li className="flex justify-between border-b border-slate-50 pb-2">
                      <span className="text-xs text-slate-400 uppercase tracking-widest">Compliance</span>
                      <span className="text-xs font-bold uppercase tracking-widest text-creme">Verified</span>
                    </li>
                  </ul>
                  <button onClick={() => { setActiveProject(null); scrollToSection('#contact'); }} className="w-full bg-inkwell text-white py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-creme transition-all">Request Similar Solution</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {activeService && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center p-6">
          <div className="absolute inset-0 bg-inkwell/90 backdrop-blur-md" onClick={() => setActiveService(null)}></div>
          <div className="relative bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-sm animate-in zoom-in duration-300">
            <div className="p-12 space-y-12">
               <div className="flex justify-between items-start">
                 <div className="space-y-4">
                   <span className="text-xs font-bold uppercase tracking-[0.3em] text-creme">{activeService.category}</span>
                   <h2 className="text-5xl font-black uppercase tracking-tighter">{activeService.title}</h2>
                 </div>
                 <button onClick={() => setActiveService(null)} className="p-4 hover:bg-slate-50 rounded-full transition-colors"><X size={32} /></button>
               </div>
               
               <div className="grid md:grid-cols-2 gap-12">
                 <div className="space-y-6">
                   <p className="text-lg text-slate-500 font-light leading-relaxed">{activeService.description}</p>
                   <ul className="space-y-3">
                     {['Full Site Inspection', 'Technical Drafting', 'Material Procurement', 'Post-Install Warranty'].map(item => (
                       <li key={item} className="flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-inkwell">
                         <CheckCircle size={18} className="text-creme" /> {item}
                       </li>
                     ))}
                   </ul>
                 </div>
                 <div className="bg-surface p-8 space-y-6">
                   <h4 className="text-xs font-bold uppercase tracking-widest text-creme">Technical Specs</h4>
                   <p className="text-xs text-slate-400 uppercase leading-loose">
                     Our standard for {activeService.title} adheres to Dubai Municipality and Civil Defence regulations. We utilize high-grade 316 Stainless Steel, treated FSC-certified Timber, and specialized thermal glass.
                   </p>
                   <button className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest border-b border-inkwell pb-1">
                     Download Specs PDF <Download size={12} />
                   </button>
                 </div>
               </div>

               <div className="flex gap-4 pt-8">
                 <button 
                  onClick={() => { setActiveService(null); scrollToSection('#contact'); }}
                  className="flex-1 bg-creme text-white py-6 rounded-sm font-bold uppercase tracking-widest hover:bg-inkwell transition-all"
                 >
                   Request Quotation
                 </button>
                 <button 
                  onClick={() => setActiveService(null)}
                  className="px-12 border border-slate-200 py-6 rounded-sm font-bold uppercase tracking-widest hover:border-creme transition-all"
                 >
                   Close
                 </button>
               </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
