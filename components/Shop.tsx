
import React from 'react';
import { ShoppingCart, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';

interface ShopProps {
  addToCart: (product: Product) => void;
}

const Shop: React.FC<ShopProps> = ({ addToCart }) => {
  return (
    <section id="shop" className="py-32 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-24 gap-8">
          <div className="max-w-xl">
            <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter mb-6 text-inkwell">
              Pro <span className="text-creme">Shop</span>
            </h2>
            <p className="text-xl text-slate-400 font-light leading-relaxed">
              Curated equipment and specialized services for architectural maintenance and premium landscaping.
            </p>
          </div>
          <button className="hidden md:flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-creme border-b border-creme pb-1 hover:gap-4 transition-all">
            View All Inventory <ArrowRight size={14} />
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {PRODUCTS.map((product) => (
            <div key={product.id} className="group flex flex-col">
              <div className="relative overflow-hidden mb-8 bg-surface aspect-[4/5] rounded-sm">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-inkwell/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center p-8">
                   <button 
                    onClick={() => addToCart(product)}
                    className="w-full bg-white text-inkwell py-4 rounded-sm font-bold uppercase tracking-widest hover:bg-creme hover:text-white transition-all shadow-2xl flex items-center justify-center gap-3"
                   >
                    <ShoppingCart size={16} />
                    Add to Project
                   </button>
                </div>
                <div className="absolute top-6 left-6 bg-white text-inkwell text-[8px] font-black px-2 py-1 uppercase tracking-widest border border-slate-100">
                  {product.category}
                </div>
              </div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg text-inkwell uppercase tracking-tight">{product.name}</h3>
                <span className="text-creme font-bold text-lg">${product.price}</span>
              </div>
              <p className="text-sm text-slate-400 font-light leading-relaxed">{product.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-24 md:hidden text-center">
          <button className="bg-inkwell text-white w-full py-5 rounded-sm font-bold uppercase tracking-widest">
            View All Inventory
          </button>
        </div>
      </div>
    </section>
  );
};

export default Shop;
