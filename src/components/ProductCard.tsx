import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Product } from '../types';
import { useShop } from '../context/ShopContext';

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useShop();

  return (
    <div className="bg-white rounded-2xl border border-slate-100 p-4 hover:shadow-lg transition-shadow duration-300 flex flex-col h-full group">
      <Link to={`/product/${product.id}`} className="relative block h-40 bg-slate-50 rounded-xl overflow-hidden mb-4">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-contain p-4 group-hover:scale-105 transition-transform duration-500 mix-blend-multiply"
        />
        {!product.inStock && (
          <div className="absolute top-2 left-2 bg-red-500 text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">
            Out of Stock
          </div>
        )}
      </Link>
      
      <div className="flex flex-col flex-grow">
        <p className="text-[10px] text-teal-600 font-bold uppercase tracking-widest mb-1">
          {product.brand}
        </p>
        <Link to={`/product/${product.id}`} className="hover:text-teal-600">
          <h4 className="text-sm font-bold text-slate-900 leading-tight mb-2 line-clamp-2">
            {product.name}
          </h4>
        </Link>
        
        <div className="flex items-center gap-1 mb-4 text-xs text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
          ))}
          <span className="text-slate-400 font-normal ml-1">({product.reviewsCount})</span>
        </div>
        
        <div className="mt-auto flex items-center justify-between pt-2 border-t border-slate-50">
          <div className="font-bold text-slate-900">
            AED {product.price.toFixed(2)}
          </div>
          <button 
            onClick={() => addToCart(product)}
            disabled={!product.inStock}
            className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center hover:bg-teal-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label="Add to cart"
          >
            +
          </button>
        </div>
      </div>
    </div>
  );
};
