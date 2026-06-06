import React from 'react';

export const Shipping = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Shipping & Delivery</h1>

      <div className="space-y-8 text-slate-600">
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Delivery Areas & Times</h2>
          <p className="mb-4">We deliver to all major emirates in the UAE. Delivery times and costs depend on your location.</p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b-2 border-slate-100 uppercase tracking-widest text-[10px] font-bold text-slate-500">
                  <th className="py-4 pr-4">Emirate</th>
                  <th className="py-4 pr-4">Delivery Time</th>
                  <th className="py-4">Cost (AED)</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr className="border-b border-slate-50">
                  <td className="py-4 pr-4 font-medium text-slate-900">Dubai</td>
                  <td className="py-4 pr-4">Same Day / Next Day</td>
                  <td className="py-4">20.00 (Free over 100)</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-4 pr-4 font-medium text-slate-900">Sharjah</td>
                  <td className="py-4 pr-4">Next Day</td>
                  <td className="py-4">20.00 (Free over 100)</td>
                </tr>
                <tr className="border-b border-slate-50">
                  <td className="py-4 pr-4 font-medium text-slate-900">Abu Dhabi</td>
                  <td className="py-4 pr-4">1-2 Working Days</td>
                  <td className="py-4">25.00</td>
                </tr>
                <tr>
                  <td className="py-4 pr-4 font-medium text-slate-900">Other Emirates</td>
                  <td className="py-4 pr-4">2-3 Working Days</td>
                  <td className="py-4">30.00</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Order Tracking</h2>
          <p>
            Once your order has been dispatched, you will receive an email and an SMS/WhatsApp message containing your tracking number and a link to track the delivery status of your package.
          </p>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Same Day Delivery</h2>
          <p>
            Same-day delivery is available for eligible items shipped within Dubai, provided the order is placed before 2:00 PM GST. Additional charges may apply for this expedited service.
          </p>
        </section>
      </div>
    </div>
  );
};
