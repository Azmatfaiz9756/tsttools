import React, { useState } from 'react';
import { ShoppingCart, Search, User, Menu } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';

export const Navbar = () => {
  const { cartCount } = useShop();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/shop?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-white border-b border-slate-100 shadow-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <button className="p-2 -ml-2 mr-2 text-slate-500 hover:text-slate-900 md:hidden">
              <Menu size={24} />
            </button>
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">T</div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 hidden sm:block">TST-<span className="text-teal-600">Tools</span></span>
            </Link>
          </div>

          <form onSubmit={handleSearch} className="hidden md:flex flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search precision tools..."
                className="w-full bg-slate-100 border-none rounded-full py-2 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 text-slate-900"
              />
              <button type="submit" className="absolute left-3 top-2 text-slate-400 hover:text-teal-500">
                <Search size={18} />
              </button>
            </div>
          </form>

          <div className="flex items-center gap-6">
            <div className="hidden sm:flex flex-col items-end">
              <span className="text-[10px] uppercase font-bold text-slate-400 tracking-widest">UAE Support</span>
              <span className="text-sm font-medium text-slate-900">+971 4 000 0000</span>
            </div>
            
            <Link to="/gallery" className="text-sm font-bold text-slate-800 hover:text-teal-600 transition-colors mx-4 hidden md:block">
              Catalog Gallery
            </Link>

            <Link to="/account" className="relative p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors mx-2">
              <User size={20} />
            </Link>

            <Link to="/cart" className="relative p-2 bg-slate-100 rounded-full text-slate-600 hover:bg-slate-200 transition-colors">
              <ShoppingCart size={20} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
