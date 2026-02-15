
import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Expertise', href: '#expertise' },
    { name: 'Work', href: '#work' },
    { name: 'Shop', href: '#shop' },
    { name: 'FAQ', href: '#faq' },
    { name: 'About', href: '#about' },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // Account for fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setIsOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${isScrolled ? 'glass py-3 shadow-2xl shadow-inkwell/5 border-b border-slate-100' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Logo */}
        <a 
          href="#" 
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center gap-3 group"
        >
          <div className="w-12 h-12 bg-inkwell flex items-center justify-center text-white font-bold text-2xl rounded-sm group-hover:bg-creme group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-xl shadow-inkwell/20">
            A
          </div>
          <div className="flex flex-col">
            <span className={`text-2xl font-black tracking-tighter uppercase transition-colors leading-none ${isScrolled ? 'text-inkwell' : 'text-inkwell'}`}>
              Arkive
            </span>
            <span className="text-[8px] font-bold tracking-[0.4em] uppercase text-creme opacity-80">Technical Services</span>
          </div>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          <div className="flex gap-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 hover:text-creme transition-all relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-creme transition-all duration-300 group-hover:w-full"></span>
              </a>
            ))}
          </div>
          <div className="flex items-center gap-8 border-l border-slate-200 pl-10 ml-4">
            <button 
              onClick={onCartClick} 
              className="relative p-2 text-slate-500 hover:text-creme hover:bg-slate-50 rounded-full transition-all group"
              aria-label="Open Cart"
            >
              <ShoppingBag size={22} className="group-hover:-translate-y-1 transition-transform" />
              {cartCount > 0 && (
                <span className="absolute top-0 right-0 bg-creme text-white text-[9px] w-5 h-5 rounded-full flex items-center justify-center font-black animate-in zoom-in duration-300 border-2 border-white">
                  {cartCount}
                </span>
              )}
            </button>
            <button 
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-inkwell text-white px-8 py-3.5 rounded-sm text-[10px] font-black uppercase tracking-[0.2em] hover:bg-creme transition-all shadow-xl shadow-inkwell/10 active:scale-95"
            >
              Request Quote
            </button>
          </div>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={onCartClick} className="relative p-2 text-inkwell">
            <ShoppingBag size={28} />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 bg-creme text-white text-[10px] w-5 h-5 rounded-full flex items-center justify-center font-black border-2 border-white">
                {cartCount}
              </span>
            )}
          </button>
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className={`p-2 transition-all rounded-full ${isOpen ? 'bg-slate-50 text-creme rotate-90' : 'text-inkwell'}`}
          >
            {isOpen ? <X size={32} /> : <Menu size={32} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div className={`md:hidden fixed inset-0 top-[72px] bg-white transition-all duration-500 transform ${isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0'} z-[90]`}>
        <div className="flex flex-col h-full p-12 gap-10">
          {navLinks.map((link, i) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={(e) => handleLinkClick(e, link.href)} 
              className={`text-4xl font-black uppercase tracking-tighter text-inkwell hover:text-creme transition-all animate-in slide-in-from-right duration-500`}
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {link.name}
            </a>
          ))}
          <div className="mt-auto space-y-6">
            <button 
              onClick={() => {
                const el = document.querySelector('#contact');
                if (el) el.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
              }}
              className="w-full bg-creme text-white py-6 rounded-sm text-sm font-black uppercase tracking-[0.2em] shadow-2xl shadow-creme/20"
            >
              Get Technical Quote
            </button>
            <p className="text-[10px] text-center text-slate-400 font-bold uppercase tracking-widest">Available 24/7 across the UAE</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
