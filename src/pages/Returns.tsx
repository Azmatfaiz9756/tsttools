import React from 'react';

export const Returns = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Returns & Refunds</h1>

      <div className="space-y-8 text-slate-600">
        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Our Policy</h2>
          <p className="mb-4">
            We want you to be completely satisfied with your purchase. If you are not entirely happy with the repair tools or equipment you received, we offer a straightforward return policy.
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>You have <strong>14 days</strong> from the date of delivery to initiate a return.</li>
            <li>Items must be unused, in their original condition, and in the manufacturer's original packaging.</li>
            <li>Adhesives, fluxes, and opened cleaning agents cannot be returned due to hygiene and quality control reasons unless proven defective upon arrival.</li>
          </ul>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Return Process</h2>
          <ol className="list-decimal pl-5 space-y-4">
            <li><strong>Contact Us:</strong> Email <em>support@fixituae.com</em> or WhatsApp us with your order number and reason for return.</li>
            <li><strong>Approval:</strong> We will review your request and send you a Return Authorization number.</li>
            <li><strong>Pack:</strong> Securely pack the items in their original packaging.</li>
            <li><strong>Ship / Pickup:</strong> For Dubai/Sharjah, we can arrange a courier pickup (return fee may apply). For other areas, you may need to ship the item via local courier.</li>
          </ol>
        </section>

        <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h2 className="text-xl font-bold text-slate-900 mb-4">Refunds</h2>
          <p>
            Once your return is received and inspected, we will notify you of the approval or rejection of your refund. If approved, your refund will be processed and applied to your original method of payment within 5-7 business days. For Cash on Delivery (COD) orders, we will issue a store credit or transfer to your UAE bank account.
          </p>
        </section>
      </div>
    </div>
  );
};
