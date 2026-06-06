import React, { useState } from 'react';
import { useOrders } from '../../hooks/useOrders';

export const AdminCustomers = () => {
  const { orders } = useOrders();
  const [searchTerm, setSearchTerm] = useState('');

  // Group orders by email to get unique customers
  const customersMap: Record<string, {name: string, email: string, totalOrders: number, totalSpent: number}> = orders.reduce((acc, order) => {
    const email = order.customerInfo.email;
    if (!acc[email]) {
      acc[email] = {
        name: order.customerInfo.name,
        email: email,
        totalOrders: 0,
        totalSpent: 0
      };
    }
    acc[email].totalOrders += 1;
    acc[email].totalSpent += order.total;
    return acc;
  }, {} as Record<string, {name: string, email: string, totalOrders: number, totalSpent: number}>);

  const customers = Object.values(customersMap);

  const filteredCustomers = customers.filter(c => 
    c.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
    c.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
        <h2 className="font-bold text-slate-900 text-lg">Customers</h2>
      </div>
      
      <div className="p-4 bg-slate-50 border-b border-slate-100 flex gap-4 shrink-0">
        <input 
          type="text" 
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          placeholder="Search customers by name or email..." 
          className="w-full max-w-sm bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="overflow-x-auto flex-1">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0">
            <tr className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
              <th className="py-4 px-6">Name</th>
              <th className="py-4 px-6">Email</th>
              <th className="py-4 px-6">Total Orders</th>
              <th className="py-4 px-6 text-right">Total Spent</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {filteredCustomers.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-8 text-center text-slate-500">No customers found.</td>
              </tr>
            ) : filteredCustomers.map(c => (
              <tr key={c.email} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6 font-bold text-slate-900">{c.name}</td>
                <td className="py-4 px-6 text-slate-500">{c.email}</td>
                <td className="py-4 px-6">{c.totalOrders}</td>
                <td className="py-4 px-6 font-bold text-right text-slate-900">AED {c.totalSpent.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
