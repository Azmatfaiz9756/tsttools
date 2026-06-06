import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Truck, Clock, Wrench } from 'lucide-react';
import { categories } from '../data';
import { useProducts } from '../hooks/useProducts';
import { ProductCard } from '../components/ProductCard';
import { motion, AnimatePresence } from 'motion/react';
import { catalogImages } from '../imageCatalog';

const heroImages = catalogImages.slice(10, 20); // Pick 10 interesting ones from the catalog

export const Home = () => {
  const { products } = useProducts();
  const bestsellers = products.slice(0, 4);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="p-4 sm:p-8">
        <div className="max-w-7xl mx-auto relative bg-slate-900 rounded-3xl overflow-hidden flex flex-col md:flex-row items-center p-8 sm:p-12 min-h-[400px]">
          <div className="z-10 w-full md:w-1/2 flex flex-col items-start text-left bg-slate-900/40 p-4 rounded-xl backdrop-blur-sm sm:backdrop-blur-none sm:bg-transparent">
            <span className="bg-teal-500 text-white px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider mb-4">New Arrival</span>
            <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-4 tracking-tight">
              Pro Technician <br className="hidden sm:block" />
              Repair Equipment
            </h1>
            <p className="text-slate-400 text-sm max-w-sm mb-8 leading-relaxed">
              The ultimate master sets and tools for mobile and laptop repair specialists. Fast delivery across Dubai, Abu Dhabi, and Sharjah.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/shop" className="bg-white text-slate-900 px-8 py-3 rounded-full font-bold text-sm shadow-xl hover:bg-slate-50 transition-colors">
                Shop Now
              </Link>
            </div>
          </div>
          
          {/* Decorative Visual */}
          <div className="absolute right-0 top-0 h-full w-full md:w-1/2 flex items-center justify-end md:justify-center overflow-hidden opacity-50 md:opacity-80 mix-blend-screen bg-slate-800">
            <AnimatePresence mode='wait'>
              <motion.img
                key={currentImage}
                src={heroImages[currentImage]}
                initial={{ opacity: 0, scale: 1.05 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8 }}
                className="w-full h-full object-cover mix-blend-plus-lighter"
                alt="Product Showcase"
              />
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Features/Trust Badges */}
      <section className="py-8 mx-4 sm:mx-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <ShieldCheck className="w-8 h-8 text-teal-600 mb-2" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Authentic</h3>
              <p className="text-[10px] text-slate-500 mt-1">Guaranteed quality</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Truck className="w-8 h-8 text-teal-600 mb-2" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Fast Shipping</h3>
              <p className="text-[10px] text-slate-500 mt-1">Next day in major cities</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Clock className="w-8 h-8 text-teal-600 mb-2" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Support 24/7</h3>
              <p className="text-[10px] text-slate-500 mt-1">Local WhatsApp assist</p>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <Wrench className="w-8 h-8 text-teal-600 mb-2" />
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-900">Professional</h3>
              <p className="text-[10px] text-slate-500 mt-1">Industry standard</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bestsellers Section */}
      <section className="py-12 max-w-7xl mx-auto px-4 sm:px-8 w-full">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-bold text-slate-900">Bestselling Tools <span className="text-slate-400 font-normal ml-2 hidden sm:inline">Dubai Delivery</span></h2>
          <div className="flex gap-2">
            <Link to="/shop" className="px-4 py-2 text-sm font-bold bg-slate-100 text-slate-600 rounded-lg hover:bg-slate-200 transition-colors">
              View All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestsellers.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Categories Grid */}
      <section className="bg-slate-50 py-16 mt-8 border-t border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <h2 className="text-xl font-bold text-slate-900 mb-8 text-center">Shop by Category</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((cat, idx) => (
              <Link 
                key={idx}
                to={`/shop?category=${encodeURIComponent(cat)}`}
                className="bg-white px-6 py-4 rounded-xl shadow-sm border border-slate-100 hover:shadow-md hover:border-teal-200 transition text-center min-w-[180px]"
              >
                <span className="text-sm font-bold text-slate-900">{cat}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
