import React from 'react';
import { DollarSign, ShoppingBag, Users, Activity } from 'lucide-react';

export const AdminDashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Stat cards */}
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Total Revenue</p>
              <h3 className="text-2xl font-extrabold text-slate-900">AED 12,450.00</h3>
            </div>
            <div className="p-3 bg-teal-50 text-teal-600 rounded-xl">
              <DollarSign size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold mt-4 flex items-center gap-1">↑ 14% <span className="text-slate-400 font-normal">vs last month</span></p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Orders</p>
              <h3 className="text-2xl font-extrabold text-slate-900">142</h3>
            </div>
            <div className="p-3 bg-blue-50 text-blue-600 rounded-xl">
              <ShoppingBag size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold mt-4 flex items-center gap-1">↑ 8% <span className="text-slate-400 font-normal">vs last month</span></p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Customers</p>
              <h3 className="text-2xl font-extrabold text-slate-900">89</h3>
            </div>
            <div className="p-3 bg-purple-50 text-purple-600 rounded-xl">
              <Users size={20} />
            </div>
          </div>
          <p className="text-xs text-green-600 font-bold mt-4 flex items-center gap-1">↑ 22% <span className="text-slate-400 font-normal">vs last month</span></p>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex justify-between items-start">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Active Sessions</p>
              <h3 className="text-2xl font-extrabold text-slate-900">14</h3>
            </div>
            <div className="p-3 bg-orange-50 text-orange-600 rounded-xl">
              <Activity size={20} />
            </div>
          </div>
          <p className="text-xs text-slate-400 mt-4">Just now</p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4">Recent Orders</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead>
                <tr className="border-b border-slate-100 text-slate-500 text-xs uppercase tracking-widest font-bold">
                  <th className="py-3">Order ID</th>
                  <th className="py-3">Customer</th>
                  <th className="py-3">Status</th>
                  <th className="py-3 text-right">Total</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-50">
                  <td className="py-3 font-medium text-slate-900">#ORD-1023</td>
                  <td className="py-3 text-slate-600">Ahmed Al Farsi</td>
                  <td className="py-3"><span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold">Delivered</span></td>
                  <td className="py-3 text-right font-bold">AED 124.00</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-3 font-medium text-slate-900">#ORD-1024</td>
                  <td className="py-3 text-slate-600">John Smith</td>
                  <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-bold">Processing</span></td>
                  <td className="py-3 text-right font-bold">AED 340.00</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-3 font-medium text-slate-900">#ORD-1025</td>
                  <td className="py-3 text-slate-600">Omar Hassan</td>
                  <td className="py-3"><span className="px-2 py-1 bg-yellow-100 text-yellow-800 rounded text-xs font-bold">Processing</span></td>
                  <td className="py-3 text-right font-bold">AED 89.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
          <h2 className="font-bold text-slate-900 mb-4">Low Stock Alert</h2>
          <div className="space-y-4 text-sm">
            <div className="flex items-center justify-between p-3 bg-red-50 rounded-xl border border-red-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-red-500 font-bold">!</div>
                <div>
                  <p className="font-bold text-slate-900">B7000 Screen Adhesives</p>
                  <p className="text-xs text-slate-500 mt-0.5">Adhesives & Tapes</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-red-600">2 left</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-3 bg-yellow-50 rounded-xl border border-yellow-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white rounded flex items-center justify-center text-yellow-500 font-bold">!</div>
                <div>
                  <p className="font-bold text-slate-900">Soldering Station S210</p>
                  <p className="text-xs text-slate-500 mt-0.5">Soldering Equipment</p>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-yellow-600">5 left</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
