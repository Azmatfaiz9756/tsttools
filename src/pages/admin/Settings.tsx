import React from 'react';

export const AdminSettings = () => {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden max-w-2xl">
      <div className="p-6 border-b border-slate-100">
        <h2 className="font-bold text-slate-900 text-lg">Store Settings</h2>
      </div>
      
      <div className="p-6 space-y-8">
        <section>
          <h3 className="font-bold text-slate-900 mb-4 text-sm">General Information</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Store Name</label>
              <input type="text" defaultValue="FIXIT UAE" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
            </div>
            <div>
              <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Support Email</label>
              <input type="email" defaultValue="support@fixituae.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-colors" />
            </div>
          </div>
        </section>

        <section className="border-t border-slate-100 pt-8">
          <h3 className="font-bold text-slate-900 mb-4 text-sm">Appearance</h3>
          <div className="space-y-4 text-sm">
            <label className="flex items-center justify-between p-4 border border-slate-200 rounded-xl bg-slate-50">
              <span className="font-medium text-slate-900">Enable Promotional Banner</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 text-teal-600 focus:ring-teal-500 border-slate-300 rounded" />
            </label>
          </div>
        </section>

        <div className="pt-4">
          <button className="px-6 py-3 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-lg">
            Save Settings
          </button>
        </div>
      </div>
    </div>
  );
};
