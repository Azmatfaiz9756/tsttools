import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "Do you supply genuine repair tools?",
    answer: "Yes, all our tools and equipment from brands like QianLi, Sunshine, Relife, and Jakemy are 100% authentic and sourced directly from authorized distributors. We guarantee the quality of every tool we sell."
  },
  {
    question: "How long does delivery take in the UAE?",
    answer: "For Dubai and Sharjah, delivery is usually Same Day (if ordered before 2 PM) or Next Day. Abu Dhabi takes 1-2 working days, and other Emirates take 2-3 working days."
  },
  {
    question: "Do you offer Cash on Delivery (COD)?",
    answer: "Yes, we offer Cash on Delivery across the UAE. You can select this option at checkout."
  },
  {
    question: "Can I return a tool if it is defective?",
    answer: "Absolutely. If you receive a defective or damaged product, please contact us within 48 hours of delivery via WhatsApp or email, and we will arrange an immediate replacement or full refund."
  },
  {
    question: "Do you provide warranties on soldering stations and multimeters?",
    answer: "Yes, most electronic equipment (like soldering stations, hot air guns, and multimeters) comes with a standard 6-month or 1-year local warranty depending on the manufacturer."
  },
  {
    question: "Do you sell mobile spare parts (screens, batteries)?",
    answer: "Currently, our primary focus is on professional repair tools, equipment, adhesives, and cleaning supplies. We do not stock mobile spare parts at this time."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Frequently Asked Questions</h1>
        <p className="text-slate-500">Find answers to common questions about our products, shipping, and policies.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, idx) => (
          <div key={idx} className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <button 
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full px-6 py-5 flex items-center justify-between font-bold text-slate-900 text-left focus:outline-none"
            >
              <span>{faq.question}</span>
              <span className="text-teal-600 shrink-0 ml-4">
                {openIndex === idx ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-6 pb-5 text-slate-600 bg-slate-50/50 pt-2 border-t border-slate-50">
                <p className="leading-relaxed text-sm">{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-12 text-center p-8 bg-teal-50 rounded-3xl border border-teal-100">
        <h2 className="text-lg font-bold text-teal-900 mb-2">Still have questions?</h2>
        <p className="text-teal-700 text-sm mb-6">Contact our support team on WhatsApp or via email.</p>
        <a href="/contact" className="inline-block px-6 py-2.5 bg-teal-600 text-white font-bold rounded-full hover:bg-teal-700 transition-colors">
          Contact Support
        </a>
      </div>
    </div>
  );
};
