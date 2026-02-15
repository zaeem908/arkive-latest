
import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const QuoteForm: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In production, send this to backend
    setTimeout(() => setSubmitted(false), 5000);
  };

  if (submitted) {
    return (
      <section id="contact" className="py-24 px-6 bg-creme text-white text-center">
        <div className="max-w-2xl mx-auto flex flex-col items-center gap-6">
          <CheckCircle size={64} className="animate-bounce" />
          <h2 className="text-4xl font-black uppercase tracking-tighter">Quote Request Received</h2>
          <p className="text-xl font-light opacity-90">
            Our technical team will review your requirements and reach out within 24 hours.
          </p>
          <button 
            onClick={() => setSubmitted(false)}
            className="text-white border-b border-white pb-2 text-sm uppercase font-bold tracking-widest hover:opacity-70 transition-opacity"
          >
            Submit Another Request
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-24 md:py-32 px-6 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-7xl font-black uppercase tracking-tighter leading-none">
            Get a Free <br /> <span className="text-creme">Quotation</span>
          </h2>
          <p className="text-xl text-slate-500 font-light leading-relaxed max-w-lg">
            Detailed project estimation for your technical needs. Please provide as much detail as possible for an accurate assessment.
          </p>
          <div className="space-y-4 pt-12">
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-creme group-hover:border-creme transition-all">
                <span className="text-sm font-bold text-inkwell group-hover:text-white">01</span>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest">Initial Audit</h4>
                <p className="text-xs text-slate-400">Site visit and measurement.</p>
              </div>
            </div>
            <div className="flex items-center gap-6 group">
              <div className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center group-hover:bg-creme group-hover:border-creme transition-all">
                <span className="text-sm font-bold text-inkwell group-hover:text-white">02</span>
              </div>
              <div>
                <h4 className="font-bold uppercase text-xs tracking-widest">Tech Design</h4>
                <p className="text-xs text-slate-400">Drafting and structural plans.</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-surface p-8 md:p-12 shadow-2xl rounded-sm border-b-8 border-creme">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Full Name</label>
                <input required type="text" className="w-full bg-white border border-slate-100 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Email Address</label>
                <input required type="email" className="w-full bg-white border border-slate-100 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm" placeholder="john@example.com" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Service Category</label>
              <select className="w-full bg-white border border-slate-100 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm appearance-none">
                <option>Custom Pergola Design</option>
                <option>Structural Welding</option>
                <option>Emergency Technical Repair</option>
                <option>Annual Maintenance Contract</option>
                <option>Other / Consultation</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Project Description</label>
              <textarea required rows={4} className="w-full bg-white border border-slate-100 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm" placeholder="Tell us about your project requirements..."></textarea>
            </div>

            <button type="submit" className="w-full bg-inkwell text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] hover:bg-creme transition-all flex items-center justify-center gap-3">
              Request Quote
              <Send size={18} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QuoteForm;
