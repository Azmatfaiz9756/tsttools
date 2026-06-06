import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Star, Truck, ShieldCheck, Check } from 'lucide-react';
import { useProducts } from '../hooks/useProducts';
import { useShop } from '../context/ShopContext';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const { products } = useProducts();
  const product = products.find(p => p.id === id);
  const { addToCart } = useShop();
  
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);
  const [selectedImage, setSelectedImage] = useState(product?.image);

  useEffect(() => {
    if (product) {
      setSelectedImage(product.image);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold bg-white text-gray-900 mb-4">Product Not Found</h2>
        <Link to="/shop" className="text-blue-600 hover:underline">Return to Shop</Link>
      </div>
    );
  }

  const handleAdd = () => {
    addToCart(product, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="bg-white">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <nav className="text-sm text-slate-500">
          <Link to="/" className="hover:text-slate-900">Home</Link>
          <span className="mx-2">/</span>
          <Link to="/shop" className="hover:text-slate-900">Shop</Link>
          <span className="mx-2">/</span>
          <Link to={`/shop?category=${encodeURIComponent(product.category)}`} className="hover:text-slate-900">{product.category}</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900 font-medium">{product.name}</span>
        </nav>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Image */}
          <div className="lg:w-1/2 flex-shrink-0 flex flex-col gap-4">
            <div className="aspect-square bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 flex items-center justify-center p-8">
              <img 
                src={selectedImage || product.image} 
                alt={product.name}
                className="w-full h-full object-contain mix-blend-multiply transition-opacity duration-300"
              />
            </div>
            
            {product.images && product.images.length > 1 && (
              <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
                {product.images.map((img, index) => (
                  <button 
                    key={index}
                    onClick={() => setSelectedImage(img)}
                    className={`w-20 h-20 flex-shrink-0 bg-slate-50 rounded-xl border-2 overflow-hidden flex items-center justify-center p-2 transition-all ${selectedImage === img ? 'border-teal-500 shadow-md' : 'border-slate-100 hover:border-slate-300'}`}
                  >
                    <img 
                      src={img} 
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-contain mix-blend-multiply"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Details */}
          <div className="lg:w-1/2 flex flex-col justify-center">
            <div className="mb-2 text-[10px] text-teal-600 font-bold uppercase tracking-widest">
              {product.brand}
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6">
              <div className="flex items-center gap-1 text-yellow-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>{i < Math.floor(product.rating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-sm text-teal-600 hover:underline cursor-pointer font-medium">
                {product.reviewsCount} reviews
              </span>
            </div>

            <div className="text-3xl font-bold text-slate-900 mb-6">
              AED {product.price.toFixed(2)}
            </div>

            <p className="text-slate-600 mb-8 leading-relaxed">
              {product.description}
            </p>

            {/* Features */}
            <div className="mb-8 p-6 bg-slate-50 rounded-2xl border border-slate-100">
              <h3 className="font-bold text-slate-900 mb-3 text-sm">Key Features:</h3>
              <ul className="space-y-2">
                {product.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-slate-600 text-sm">
                    <span className="text-teal-500 mt-0.5">•</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${product.inStock ? 'bg-teal-50 text-teal-700' : 'bg-red-50 text-red-700'}`}>
                {product.inStock ? '● In Stock' : '● Out of Stock'}
              </span>
            </div>

            {/* Cart Actions */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <div className="flex items-center border border-slate-200 rounded-full w-32 h-14 bg-slate-50">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 text-slate-600 hover:text-black w-1/3 disabled:opacity-50"
                  disabled={!product.inStock}
                >-</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-1/3 text-center bg-transparent border-none focus:outline-none focus:ring-0 text-slate-900 font-bold"
                  disabled={!product.inStock}
                />
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 text-slate-600 hover:text-black w-1/3 disabled:opacity-50"
                  disabled={!product.inStock}
                >+</button>
              </div>
              <button 
                onClick={handleAdd}
                disabled={!product.inStock}
                className={`flex-1 h-14 rounded-full font-bold text-white transition-all flex justify-center items-center gap-2 shadow-xl ${added ? 'bg-green-600 hover:bg-green-700' : 'bg-slate-900 hover:bg-teal-600 disabled:bg-slate-300 disabled:shadow-none'}`}
              >
                {added ? <><Check size={20} /> Added to Cart</> : 'Add to Cart / Buy Now'}
              </button>
            </div>

            {/* Trust Info */}
            <div className="flex flex-col gap-3 py-6 border-t border-slate-100">
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <Truck size={20} className="text-teal-600" />
                <span>Fast Delivery across the UAE (Dubai, Abu Dhabi, Sharjah)</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-slate-600">
                <ShieldCheck size={20} className="text-teal-600" />
                <span>Authentic product with local warranty options</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
