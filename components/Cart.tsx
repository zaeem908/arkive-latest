
import React, { useState } from 'react';
import { X, Trash2, Plus, Minus, CreditCard, CheckCircle, ArrowRight, ShieldCheck, Loader2, Lock } from 'lucide-react';
import { CartItem } from '../types';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  updateQuantity: (id: string, delta: number) => void;
  removeItem: (id: string) => void;
}

type CheckoutStep = 'cart' | 'details' | 'payment' | 'processing' | 'success';

const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, updateQuantity, removeItem }) => {
  const [step, setStep] = useState<CheckoutStep>('cart');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    cardNumber: '',
    expiry: '',
    cvv: ''
  });

  const subtotal = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const vat = subtotal * 0.05; // UAE VAT
  const total = subtotal + vat;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNextStep = (next: CheckoutStep) => {
    if (next === 'processing') {
      setStep('processing');
      setTimeout(() => setStep('success'), 2500);
    } else {
      setStep(next);
    }
  };

  const handleClose = () => {
    setStep('cart');
    onClose();
  };

  const renderStep = () => {
    switch (step) {
      case 'cart':
        return (
          <>
            <div className="flex-1 overflow-y-auto p-8 space-y-8">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <p className="text-inkwell/40 uppercase tracking-widest font-bold">Your project list is empty</p>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-6 group animate-in slide-in-from-right duration-300">
                    <div className="w-24 h-24 bg-slate-50 overflow-hidden rounded-sm border border-slate-100">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex justify-between items-start">
                        <h3 className="font-bold text-inkwell uppercase tracking-tight text-sm">{item.name}</h3>
                        <button onClick={() => removeItem(item.id)} className="text-slate-300 hover:text-red-500 transition-colors">
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <p className="text-[10px] text-slate-400 uppercase tracking-widest">{item.category}</p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-4 border border-slate-100 px-2 py-1 rounded-sm">
                          <button onClick={() => updateQuantity(item.id, -1)} className="hover:text-creme text-slate-400"><Minus size={12} /></button>
                          <span className="text-xs font-bold min-w-[1rem] text-center">{item.quantity}</span>
                          <button onClick={() => updateQuantity(item.id, 1)} className="hover:text-creme text-slate-400"><Plus size={12} /></button>
                        </div>
                        <span className="font-bold text-creme text-sm">${(item.price * item.quantity).toLocaleString()}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
            {items.length > 0 && (
              <div className="p-8 border-t border-slate-100 bg-slate-50 space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-slate-400 text-[10px] uppercase tracking-widest">
                    <span>Subtotal</span>
                    <span>${subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-slate-400 text-[10px] uppercase tracking-widest">
                    <span>VAT (5%)</span>
                    <span>${vat.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between text-inkwell font-black text-xl uppercase tracking-tighter pt-2">
                    <span>Total</span>
                    <span>${total.toLocaleString()}</span>
                  </div>
                </div>
                <button 
                  onClick={() => handleNextStep('details')}
                  className="w-full bg-creme text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-inkwell transition-all shadow-xl shadow-creme/20"
                >
                  Proceed to Details <ArrowRight size={18} />
                </button>
              </div>
            )}
          </>
        );

      case 'details':
        return (
          <div className="flex-1 overflow-y-auto p-8 space-y-6 animate-in fade-in slide-in-from-right duration-300">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-creme border-b border-slate-100 pb-4">Customer Information</h3>
            <div className="space-y-4">
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Full Name</label>
                <input name="name" value={formData.name} onChange={handleInputChange} type="text" className="w-full bg-white border border-slate-200 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm rounded-sm" placeholder="e.g. Salim Ahmed" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Email Address</label>
                <input name="email" value={formData.email} onChange={handleInputChange} type="email" className="w-full bg-white border border-slate-200 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm rounded-sm" placeholder="salim@example.ae" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Contact Number</label>
                <input name="phone" value={formData.phone} onChange={handleInputChange} type="tel" className="w-full bg-white border border-slate-200 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm rounded-sm" placeholder="+971 50 000 0000" />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold uppercase text-slate-400">Installation Address</label>
                <input name="address" value={formData.address} onChange={handleInputChange} type="text" className="w-full bg-white border border-slate-200 p-4 focus:ring-2 focus:ring-creme outline-none transition-all text-sm rounded-sm" placeholder="Villa No. 12, Jumeirah, Dubai" />
              </div>
            </div>
            <div className="pt-8 space-y-4">
              <button 
                onClick={() => handleNextStep('payment')}
                className="w-full bg-creme text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-inkwell transition-all"
              >
                Secure Payment <CreditCard size={18} />
              </button>
              <button onClick={() => setStep('cart')} className="w-full text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-inkwell transition-colors">Back to project list</button>
            </div>
          </div>
        );

      case 'payment':
        return (
          <div className="flex-1 overflow-y-auto p-8 space-y-6 animate-in fade-in slide-in-from-right duration-300">
            <div className="flex items-center gap-2 text-creme mb-4">
              <Lock size={14} />
              <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Secure Encryption Active</span>
            </div>
            <div className="bg-inkwell p-6 rounded-lg text-white space-y-8 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16"></div>
               <div className="flex justify-between items-start">
                 <div className="w-12 h-8 bg-slate-400/30 rounded-md"></div>
                 <span className="text-xs font-bold tracking-widest opacity-50 uppercase">Network</span>
               </div>
               <div className="space-y-4">
                 <input 
                  name="cardNumber" 
                  value={formData.cardNumber} 
                  onChange={handleInputChange} 
                  className="bg-transparent text-xl tracking-[0.3em] w-full outline-none border-b border-white/20 pb-2 placeholder:text-white/20" 
                  placeholder="0000 0000 0000 0000" 
                  maxLength={19}
                 />
                 <div className="flex gap-4">
                    <input 
                      name="expiry" 
                      value={formData.expiry} 
                      onChange={handleInputChange} 
                      className="bg-transparent text-sm w-16 outline-none border-b border-white/20 pb-1 placeholder:text-white/20" 
                      placeholder="MM/YY" 
                    />
                    <input 
                      name="cvv" 
                      value={formData.cvv} 
                      onChange={handleInputChange} 
                      className="bg-transparent text-sm w-12 outline-none border-b border-white/20 pb-1 placeholder:text-white/20" 
                      placeholder="CVV" 
                    />
                 </div>
               </div>
            </div>
            
            <div className="flex flex-col gap-4 pt-8">
              <div className="flex items-center gap-3 p-4 bg-slate-50 border border-slate-100 rounded-sm">
                <ShieldCheck className="text-creme" size={24} />
                <div className="text-[10px] font-medium text-slate-500 uppercase tracking-widest">
                  Verified by <span className="font-bold text-inkwell">ARKIVE Technical Systems</span>
                </div>
              </div>
              <button 
                onClick={() => handleNextStep('processing')}
                className="w-full bg-creme text-white py-5 rounded-sm font-bold uppercase tracking-[0.3em] flex items-center justify-center gap-3 hover:bg-inkwell transition-all shadow-xl shadow-creme/20"
              >
                Pay ${total.toLocaleString()} Now
              </button>
              <button onClick={() => setStep('details')} className="w-full text-[10px] font-bold uppercase tracking-widest text-slate-400 hover:text-inkwell transition-colors">Back to information</button>
            </div>
          </div>
        );

      case 'processing':
        return (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center gap-6 animate-in fade-in duration-500">
            <Loader2 size={48} className="text-creme animate-spin" />
            <div className="space-y-2">
              <h3 className="text-xl font-black uppercase tracking-tighter text-inkwell">Processing Transaction</h3>
              <p className="text-xs text-slate-400 uppercase tracking-widest font-bold">Verifying structural audit requirements...</p>
            </div>
          </div>
        );

      case 'success':
        return (
          <div className="flex-1 flex flex-col items-center justify-center p-12 text-center gap-8 animate-in zoom-in duration-500">
            <div className="w-24 h-24 bg-creme rounded-full flex items-center justify-center shadow-2xl shadow-creme/30">
              <CheckCircle size={48} className="text-white" />
            </div>
            <div className="space-y-4">
              <h3 className="text-3xl font-black uppercase tracking-tighter text-inkwell">Order Confirmed</h3>
              <p className="text-slate-500 font-light leading-relaxed">
                Thank you for choosing <span className="text-creme font-bold">ARKIVE</span>. Your technical documentation and receipt have been dispatched to <span className="font-medium text-inkwell underline">{formData.email}</span>.
              </p>
              <p className="text-[10px] text-slate-400 uppercase tracking-widest leading-loose">
                Transaction ID: ARK-{Math.random().toString(36).substr(2, 9).toUpperCase()}<br />
                Date: {new Date().toLocaleDateString('en-GB')}
              </p>
            </div>
            <button onClick={handleClose} className="bg-inkwell text-white px-12 py-5 rounded-sm font-bold uppercase tracking-widest hover:bg-creme transition-all">
              Return to ARKIVE
            </button>
          </div>
        );
    }
  };

  return (
    <div className={`fixed inset-0 z-[100] transition-opacity duration-300 ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
      <div className="absolute inset-0 bg-inkwell/80 backdrop-blur-sm" onClick={handleClose}></div>
      <div className={`absolute right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl transition-transform duration-500 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} flex flex-col`}>
        <div className="p-8 border-b border-slate-100 flex justify-between items-center bg-white text-inkwell">
          <div className="space-y-1">
            <h2 className="text-2xl font-black uppercase tracking-tighter">Project Cart</h2>
            <div className="flex gap-2">
               {['cart', 'details', 'payment'].map((s, i) => (
                 <div key={s} className={`h-1 w-8 rounded-full transition-all duration-500 ${step === s ? 'bg-creme w-12' : (['processing', 'success'].includes(step) ? 'bg-creme' : 'bg-slate-100')}`}></div>
               ))}
            </div>
          </div>
          <button onClick={handleClose} className="p-2 hover:bg-slate-50 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        {renderStep()}

        {step !== 'success' && step !== 'processing' && (
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-center gap-4">
            <div className="flex items-center gap-1">
              <ShieldCheck size={12} className="text-slate-400" />
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">SSL Encrypted</span>
            </div>
            <div className="flex items-center gap-1">
              <Lock size={12} className="text-slate-400" />
              <span className="text-[8px] font-bold text-slate-400 uppercase tracking-widest">Secure Checkout</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
