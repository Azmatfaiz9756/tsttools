import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Contact Us</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Have a question about a product, order, or just need some advice on repair tools? We're here to help!
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Contact info */}
        <div>
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Get in Touch</h2>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm shrink-0">
                  <Phone size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Phone & WhatsApp</h3>
                  <p className="text-slate-500 text-sm mt-1">+971 4 000 0000</p>
                  <p className="text-slate-500 text-sm">+971 50 123 4567</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm shrink-0">
                  <Mail size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Email</h3>
                  <p className="text-slate-500 text-sm mt-1">info@fixituae.com</p>
                  <p className="text-slate-500 text-sm">support@fixituae.com</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-teal-600 shadow-sm shrink-0">
                  <MapPin size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Office</h3>
                  <p className="text-slate-500 text-sm mt-1">Main Branch Office<br />Deira, Dubai<br />United Arab Emirates</p>
                </div>
              </div>
            </div>

            <div className="mt-8 pt-8 border-t border-slate-200">
              <h3 className="font-bold text-slate-900 mb-2">Business Hours</h3>
              <ul className="text-sm text-slate-500 space-y-2">
                <li className="flex justify-between"><span>Monday - Saturday:</span> <span className="font-medium text-slate-900">9:00 AM - 8:00 PM</span></li>
                <li className="flex justify-between"><span>Sunday:</span> <span className="font-medium text-slate-900">Closed</span></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact form */}
        <div>
          <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            
            {isSubmitted ? (
              <div className="bg-teal-50 text-teal-800 p-6 rounded-2xl flex flex-col items-center justify-center text-center h-64 border border-teal-100">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm text-teal-600">
                  <Send size={32} />
                </div>
                <h3 className="font-bold text-lg mb-2">Message Sent!</h3>
                <p className="text-sm text-teal-600/80">We'll get back to you within 24 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                    <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                  <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" />
                </div>
                
                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Subject</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors font-medium text-slate-700">
                    <option>General Inquiry</option>
                    <option>Order Status</option>
                    <option>Product Question</option>
                    <option>Returns/Refunds</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Message</label>
                  <textarea required rows={4} className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors resiz-none"></textarea>
                </div>

                <button type="submit" className="w-full flex justify-center py-4 px-4 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-xl">
                  Send Message
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
