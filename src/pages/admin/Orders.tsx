import React, { useState } from 'react';
import { useOrders, Order } from '../../hooks/useOrders';

export const AdminOrders = () => {
  const { orders, updateOrderStatus } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All Statuses');

  const filteredOrders = orders.filter(o => {
    const matchesSearch = o.id.toLowerCase().includes(searchTerm.toLowerCase()) || 
                          o.customerInfo.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'All Statuses' || o.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100">
        <h2 className="font-bold text-slate-900 text-lg">Orders Management</h2>
      </div>
      
      <div className="p-4 bg-slate-50 border-b border-slate-100 flex gap-4">
        <input 
          type="text" 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Order ID or Customer Name..." 
          className="w-full max-w-sm bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
        <select 
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-medium"
        >
          <option>All Statuses</option>
          <option>Pending</option>
          <option>Processing</option>
          <option>Shipped</option>
          <option>Delivered</option>
        </select>
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0">
            <tr className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
              <th className="py-4 px-6">Order ID</th>
              <th className="py-4 px-6">Date</th>
              <th className="py-4 px-6">Customer</th>
              <th className="py-4 px-6">Status</th>
              <th className="py-4 px-6 text-right">Total</th>
              <th className="py-4 px-6 text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredOrders.length === 0 ? (
              <tr>
                <td colSpan={6} className="py-8 text-center text-slate-500">No orders found.</td>
              </tr>
            ) : filteredOrders.map(order => (
              <tr key={order.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">{order.id}</td>
                <td className="py-4 px-6 text-slate-500 text-xs">{new Date(order.date).toLocaleDateString()}</td>
                <td className="py-4 px-6 text-slate-600 font-medium">{order.customerInfo.name}</td>
                <td className="py-4 px-6">
                  <select 
                    value={order.status}
                    onChange={(e) => updateOrderStatus(order.id, e.target.value as Order['status'])}
                    className={`px-2 py-1 rounded text-xs font-bold leading-none inline-flex items-center outline-none cursor-pointer
                      ${order.status === 'Pending' ? 'bg-yellow-100 text-yellow-800' : ''}
                      ${order.status === 'Processing' ? 'bg-blue-100 text-blue-800' : ''}
                      ${order.status === 'Shipped' ? 'bg-indigo-100 text-indigo-800' : ''}
                      ${order.status === 'Delivered' ? 'bg-green-100 text-green-800' : ''}
                    `}
                  >
                    <option value="Pending">Pending</option>
                    <option value="Processing">Processing</option>
                    <option value="Shipped">Shipped</option>
                    <option value="Delivered">Delivered</option>
                  </select>
                </td>
                <td className="py-4 px-6 font-bold text-right text-slate-900">AED {order.total.toFixed(2)}</td>
                <td className="py-4 px-6 text-right">
                  <span className="text-slate-400 text-xs">{order.items.length} items</span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
