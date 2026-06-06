import React from 'react';
import { Link } from 'react-router-dom';

export const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="text-xl font-extrabold tracking-tight text-white">TST-<span className="text-teal-400">Tools</span></span>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              The premier destination for professional mobile and electronics repair tools in the United Arab Emirates.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Shop</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/shop" className="hover:text-teal-400 transition-colors">All Products</Link></li>
              <li><Link to="/gallery" className="hover:text-teal-400 transition-colors">Image Gallery</Link></li>
              <li><Link to="/shop?category=Screwdriver%20Sets" className="hover:text-teal-400 transition-colors">Screwdriver Sets</Link></li>
              <li><Link to="/shop?category=Soldering%20Equipment" className="hover:text-teal-400 transition-colors">Soldering Equipment</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Customer Service</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link to="/contact" className="hover:text-teal-400 transition-colors">Contact Us</Link></li>
              <li><Link to="/shipping" className="hover:text-teal-400 transition-colors">Shipping & Delivery</Link></li>
              <li><Link to="/returns" className="hover:text-teal-400 transition-colors">Returns Policy</Link></li>
              <li><Link to="/faq" className="hover:text-teal-400 transition-colors">FAQ</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4 uppercase tracking-widest text-xs">Contact Info</h3>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>Dubai, United Arab Emirates</li>
              <li>Email: info@fixituae.com</li>
              <li>Phone: +971 4 000 0000</li>
              <li>WhatsApp: +971 50 123 4567</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} TST-Tools. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-slate-400 font-medium">
            <span className="flex items-center gap-2"><span className="text-teal-400">✓</span> Genuine UAE Warranty</span>
            <span className="flex items-center gap-2 hidden sm:flex"><span className="text-teal-400">✓</span> Free Next Day Delivery</span>
            <span className="flex items-center gap-2 hidden md:flex"><span className="text-teal-400">✓</span> Cash on Delivery Available</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
