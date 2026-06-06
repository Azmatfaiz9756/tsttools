import React from 'react';
import { Link } from 'react-router-dom';
import { Package, MapPin, CreditCard, LogOut, LayoutDashboard } from 'lucide-react';
import { useOrders } from '../hooks/useOrders';

export const Account = () => {
  const { orders } = useOrders();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">My Account</h1>
      
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-64 flex-shrink-0">
          <div className="bg-slate-50/50 rounded-3xl p-4 border border-slate-100 flex flex-col gap-2">
            <button className="flex items-center gap-3 w-full p-4 bg-teal-600 shadow-xl rounded-2xl text-white font-bold transition-colors">
              <Package size={20} />
              Recent Orders
            </button>
            <button className="flex items-center gap-3 w-full p-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
              <MapPin size={20} />
              Saved Addresses
            </button>
            <button className="flex items-center gap-3 w-full p-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
              <CreditCard size={20} />
              Payment Methods
            </button>
            
            <div className="border-t border-slate-200 mt-4 pt-4">
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-2 px-4">Admin Mode</h3>
              <Link to="/admin" className="flex items-center gap-3 w-full p-4 rounded-2xl text-slate-600 font-medium hover:bg-slate-100 hover:text-slate-900 transition-colors">
                <LayoutDashboard size={20} />
                Admin Panel
              </Link>
            </div>

            <div className="border-t border-slate-200 mt-2 pt-2">
              <Link to="/" className="flex items-center gap-3 w-full p-4 rounded-2xl text-red-600 font-medium hover:bg-red-50 transition-colors">
                <LogOut size={20} />
                Sign Out
              </Link>
            </div>
          </div>
        </div>

        <div className="flex-grow">
          <div className="bg-white rounded-3xl border border-slate-100 p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Recent Orders</h2>
            
            {orders.length === 0 ? (
              <div className="text-center py-16 bg-slate-50/50 rounded-2xl border border-dashed border-slate-200">
                <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center mx-auto mb-4 text-slate-300 shadow-sm">
                  <Package size={32} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">No orders yet</h3>
                <p className="text-slate-500 mb-6 text-sm">When you place an order, it will appear here.</p>
                <Link to="/shop" className="text-teal-600 font-bold hover:underline">
                  Start Shopping
                </Link>
              </div>
            ) : (
              <div className="space-y-6">
                {orders.map(order => (
                  <div key={order.id} className="border border-slate-200 rounded-2xl p-6 flex flex-col gap-4">
                    <div className="flex justify-between items-start border-b border-slate-100 pb-4 mb-2">
                      <div>
                        <p className="text-slate-500 text-sm mb-1">Order <span className="font-bold text-slate-900">{order.id}</span></p>
                        <p className="text-slate-500 text-xs">{new Date(order.date).toLocaleDateString()}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-extrabold text-slate-900 text-lg">AED {order.total.toFixed(2)}</p>
                        <span className={`inline-flex px-2 py-1 rounded text-xs font-bold leading-none mt-1 ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : 'bg-green-100 text-green-800'}`}>
                          {order.status}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-3">
                       {order.items.map((item, idx) => (
                         <div key={idx} className="flex gap-4 items-center">
                            <div className="w-12 h-12 bg-slate-100 rounded-lg shrink-0 p-1">
                               <img src={item.product.image} className="w-full h-full object-contain mix-blend-multiply" alt=""/>
                            </div>
                            <div className="text-sm">
                              <p className="font-bold text-slate-900">{item.product.name}</p>
                              <p className="text-slate-500">Qty: {item.quantity}</p>
                            </div>
                         </div>
                       ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
