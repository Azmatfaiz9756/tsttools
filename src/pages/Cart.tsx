import React from 'react';
import { Link } from 'react-router-dom';
import { Trash2, ShoppingBag } from 'lucide-react';
import { useShop } from '../context/ShopContext';

export const Cart = () => {
  const { cart, updateQuantity, removeFromCart, cartTotal } = useShop();

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-24 text-center">
        <div className="flex justify-center mb-6">
          <div className="p-6 bg-slate-50 rounded-full border border-slate-100">
            <ShoppingBag size={48} className="text-slate-400" />
          </div>
        </div>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Your cart is empty</h2>
        <p className="text-slate-500 mb-8 max-w-md mx-auto">Looks like you haven't added any repair tools to your cart yet.</p>
        <Link to="/shop" className="inline-flex items-center justify-center px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-lg">
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 items-center flex gap-3 tracking-tight">
        Shopping Cart <span className="text-sm font-bold text-teal-600 bg-teal-50 px-3 py-1 rounded-full">{cart.length} items</span>
      </h1>

      <div className="flex flex-col lg:flex-row gap-12">
        <div className="lg:w-2/3">
          <div className="bg-white rounded-3xl border border-slate-100 overflow-hidden">
            <ul className="divide-y divide-slate-100">
              {cart.map((item) => (
                <li key={item.product.id} className="p-6 flex flex-col sm:flex-row gap-6">
                  <div className="w-24 h-24 sm:w-32 sm:h-32 flex-shrink-0 bg-slate-50 rounded-2xl overflow-hidden border border-slate-100 p-2">
                    <img 
                      src={item.product.image} 
                      alt={item.product.name}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </div>
                  
                  <div className="flex-grow flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] text-teal-600 font-bold mb-1 uppercase tracking-widest">{item.product.brand}</div>
                        <Link to={`/product/${item.product.id}`} className="hover:text-teal-600 transition-colors">
                          <h3 className="text-lg font-bold text-slate-900 mb-1">{item.product.name}</h3>
                        </Link>
                        <p className="text-sm text-slate-500">{item.product.category}</p>
                      </div>
                      <div className="text-lg font-bold text-slate-900 ml-4 whitespace-nowrap">
                        AED {(item.product.price * item.quantity).toFixed(2)}
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center mt-6">
                      <div className="flex items-center border border-slate-200 rounded-full w-32 h-10 bg-slate-50">
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
                          className="px-3 text-slate-600 hover:text-slate-900 w-1/3 h-full font-medium"
                        >-</button>
                        <span className="w-1/3 text-center text-sm font-bold border-x border-slate-200 py-1">
                          {item.quantity}
                        </span>
                        <button 
                          onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
                          className="px-3 text-slate-600 hover:text-slate-900 w-1/3 h-full font-medium"
                        >+</button>
                      </div>
                      <button 
                        onClick={() => removeFromCart(item.product.id)}
                        className="text-slate-400 hover:text-red-500 transition-colors p-2 rounded-full hover:bg-red-50"
                        aria-label="Remove item"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="lg:w-1/3">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-24">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
            
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">AED {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping Estimate</span>
                <span className="font-bold text-slate-900">Calculated at checkout</span>
              </div>
            </div>
            
            <div className="border-t border-slate-200 pt-6 mb-8">
              <div className="flex justify-between items-end">
                <span className="font-bold text-slate-900 text-lg tracking-tight">Total</span>
                <div className="text-right">
                  <span className="font-extrabold text-slate-900 text-2xl">AED {cartTotal.toFixed(2)}</span>
                  <p className="text-[10px] text-slate-500 mt-1 uppercase tracking-wider">Including VAT</p>
                </div>
              </div>
            </div>
            
            <Link 
              to="/checkout" 
              className="w-full flex justify-center py-4 px-4 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-lg"
            >
              Proceed to Checkout
            </Link>
            
            <div className="mt-8 flex justify-center gap-4 text-slate-400">
               <div className="w-10 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-[9px] font-bold tracking-wider">VISA</div>
               <div className="w-10 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-[9px] font-bold tracking-wider">MC</div>
               <div className="w-10 h-6 bg-white border border-slate-200 rounded flex items-center justify-center text-[9px] font-bold tracking-wider">COD</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
