import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useShop } from '../context/ShopContext';
import { CheckCircle } from 'lucide-react';
import { useOrders, Order } from '../hooks/useOrders';

export const Checkout = () => {
  const { cart, cartTotal, clearCart } = useShop();
  const { addOrder } = useOrders();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    emirate: 'Dubai',
    address: '',
    apartment: '',
    paymentMethod: 'card'
  });

  // Calculate generic UAE shipping (e.g. Free above 100 AED, else 20 AED)
  const shipping = cartTotal >= 100 ? 0 : 20;
  const total = cartTotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newOrder: Order = {
      id: `ORD-${Math.floor(Math.random() * 100000)}`,
      date: new Date().toISOString(),
      items: cart,
      total,
      status: 'Pending',
      customerInfo: {
        name: `${formData.firstName} ${formData.lastName}`,
        email: formData.email,
        phone: formData.phone,
        address: `${formData.address}${formData.apartment ? ', ' + formData.apartment : ''}`,
        city: formData.emirate
      }
    };
    
    addOrder(newOrder);

    setIsSuccess(true);
    clearCart();
    
    // In a real app, this would route to a payment gateway if 'card' was selected
    // or create an order via API. For the MVP, we show a success page.
  };

  if (isSuccess) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center p-4">
        <div className="w-24 h-24 bg-teal-50 rounded-full flex items-center justify-center mb-6">
          <CheckCircle size={48} className="text-teal-500" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">Order Confirmed!</h1>
        <p className="text-slate-500 mb-8 text-center max-w-md leading-relaxed">
          Thank you for your purchase. We've sent a confirmation email to <span className="font-bold text-slate-900">{formData.email}</span> and will update you when your order ships.
        </p>
        <Link to="/" className="px-8 py-3.5 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-lg">
          Return to Home
        </Link>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-900 mb-4">Your cart is empty</h2>
        <Link to="/shop" className="text-teal-600 font-bold hover:underline">Return to Shop</Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-8 tracking-tight">Checkout</h1>

      <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12 text-left">
        <div className="lg:w-2/3 space-y-8">
          
          {/* Contact Information */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">First Name</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Last Name</label>
                <input required type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})}/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Email Address</label>
                <input required type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})}/>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Phone Number (UAE)</label>
                <div className="flex">
                  <span className="inline-flex items-center px-4 rounded-l-xl border border-r-0 border-slate-200 bg-slate-100 text-slate-500 font-bold">+971</span>
                  <input required type="tel" placeholder="50 123 4567" className="flex-1 bg-slate-50 border border-slate-200 rounded-r-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})}/>
                </div>
              </div>
            </div>
          </section>

          {/* Shipping Address */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Shipping Address</h2>
            <div className="grid grid-cols-1 gap-6">
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Emirate</label>
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors font-medium text-slate-700" value={formData.emirate} onChange={e => setFormData({...formData, emirate: e.target.value})}>
                  <option>Dubai</option>
                  <option>Abu Dhabi</option>
                  <option>Sharjah</option>
                  <option>Ajman</option>
                  <option>Ras Al Khaimah</option>
                  <option>Fujairah</option>
                  <option>Umm Al Quwain</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Address / Street</label>
                <input required type="text" placeholder="e.g. Sheikh Zayed Road" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.address} onChange={e => setFormData({...formData, address: e.target.value})}/>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Apartment, suite, etc. (optional)</label>
                <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-colors" value={formData.apartment} onChange={e => setFormData({...formData, apartment: e.target.value})}/>
              </div>
            </div>
          </section>

          {/* Payment Method */}
          <section className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Payment Method</h2>
            <div className="space-y-4">
              <label className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-colors ${formData.paymentMethod === 'card' ? 'border-teal-500 bg-teal-50/50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'}`}>
                <input type="radio" name="payment" value="card" checked={formData.paymentMethod === 'card'} onChange={() => setFormData({...formData, paymentMethod: 'card'})} className="h-5 w-5 text-teal-600 border-slate-300 focus:ring-teal-500" />
                <span className="ml-4 font-bold text-slate-900">Credit / Debit Card</span>
              </label>
              
              <label className={`flex items-center p-5 border-2 rounded-2xl cursor-pointer transition-colors ${formData.paymentMethod === 'cod' ? 'border-teal-500 bg-teal-50/50' : 'border-slate-100 bg-slate-50 hover:border-slate-300'}`}>
                <input type="radio" name="payment" value="cod" checked={formData.paymentMethod === 'cod'} onChange={() => setFormData({...formData, paymentMethod: 'cod'})} className="h-5 w-5 text-teal-600 border-slate-300 focus:ring-teal-500" />
                <div className="ml-4">
                  <span className="block font-bold text-slate-900">Cash on Delivery (COD)</span>
                  <span className="block text-xs text-slate-500 mt-1">Pay cash upon delivery to your address</span>
                </div>
              </label>
            </div>
          </section>

        </div>

        <div className="lg:w-1/3">
          <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 sticky top-24 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-6">Order Summary</h2>
            
            <div className="divide-y divide-slate-100 mb-6 max-h-60 overflow-y-auto pr-2">
              {cart.map(item => (
                 <div key={item.product.id} className="py-4 flex gap-4 text-sm">
                    <div className="w-16 h-16 bg-white border border-slate-100 rounded-xl flex-shrink-0 p-1">
                      <img src={item.product.image} alt="" className="w-full h-full object-contain mix-blend-multiply" />
                    </div>
                    <div className="flex-grow flex flex-col justify-center">
                      <p className="font-bold text-slate-900 line-clamp-1 mb-1">{item.product.name}</p>
                      <p className="text-xs text-slate-500">Qty: {item.quantity}</p>
                    </div>
                    <div className="font-bold text-slate-900 whitespace-nowrap flex items-center">
                      AED {(item.product.price * item.quantity).toFixed(2)}
                    </div>
                 </div>
              ))}
            </div>

            <div className="space-y-4 pt-6 border-t border-slate-200 text-sm mb-8">
              <div className="flex justify-between text-slate-600">
                <span>Subtotal</span>
                <span className="font-bold text-slate-900">AED {cartTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Shipping</span>
                <span className="font-bold text-slate-900">{shipping === 0 ? 'Free' : `AED ${shipping.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between items-end pt-4 border-t border-slate-100 mt-4">
                <span className="font-bold text-slate-900 text-lg">Total</span>
                <span className="font-extrabold text-slate-900 text-2xl">AED {total.toFixed(2)}</span>
              </div>
            </div>

            <button type="submit" className="w-full flex justify-center py-4 px-4 bg-slate-900 text-white font-bold rounded-full hover:bg-teal-600 transition-colors shadow-xl">
               {formData.paymentMethod === 'card' ? 'Pay Now' : 'Complete Order'}
            </button>
            <p className="text-[10px] text-center text-slate-400 mt-6 px-2 leading-relaxed tracking-wide">
              By placing your order, you agree to our Terms and Privacy Policy. All transactions are secure and encrypted.
            </p>
          </div>
        </div>
      </form>
    </div>
  );
};
