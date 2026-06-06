import React, { useState } from 'react';
import { useProducts } from '../../hooks/useProducts';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Product, Category } from '../../types';

export const AdminProducts = () => {
  const { products, updateProduct, deleteProduct, addProduct } = useProducts();
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchParams] = useState('');
  
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [currentId, setCurrentId] = useState<string | null>(null);
  
  const [editForm, setEditForm] = useState<{
    name: string; price: number; category: Category | string; inStock: boolean;
    image: string; images: string; features: string; rating: number; reviewsCount: number; brand: string;
    stockQty: number;
  }>({
    name: '', price: 0, category: 'Accessories', inStock: true, image: '', images: '', features: '', rating: 0, reviewsCount: 0, brand: 'Generic', stockQty: 10
  });
  
  const itemsPerPage = 50;
  
  const filteredProducts = products.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  
  const paginatedProducts = filteredProducts.slice((page - 1) * itemsPerPage, page * itemsPerPage);

  const startEdit = (product: Product) => {
    setCurrentId(product.id);
    setIsFormOpen(true);
    setEditForm({ 
      name: product.name, 
      price: product.price, 
      inStock: product.inStock, 
      category: product.category,
      image: product.image || '',
      images: (product.images || [product.image || '']).join('\n'),
      features: (product.features || []).join('\n'),
      rating: product.rating || 0,
      reviewsCount: product.reviewsCount || 0,
      brand: product.brand || 'Generic',
      stockQty: product.stockQty !== undefined ? product.stockQty : (product.inStock ? 10 : 0)
    });
  };

  const startAdd = () => {
    setCurrentId(null);
    setIsFormOpen(true);
    setEditForm({
      name: '', price: 99, category: 'Precision Tools', inStock: true,
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400',
      images: 'https://images.unsplash.com/photo-1544816155-12df9643f363?auto=format&fit=crop&q=80&w=400',
      features: 'High quality\nDurable material', rating: 5, reviewsCount: 0, brand: 'iFixit',
      stockQty: 10
    });
  };

  const handleSave = () => {
    const pData = {
      name: editForm.name,
      price: editForm.price,
      inStock: editForm.inStock,
      category: editForm.category as Category,
      image: editForm.images.split('\n').map(s => s.trim()).filter(Boolean)[0] || editForm.image,
      images: editForm.images.split('\n').map(s => s.trim()).filter(Boolean),
      features: editForm.features.split('\n').map(s => s.trim()).filter(Boolean),
      rating: editForm.rating,
      reviewsCount: editForm.reviewsCount,
      brand: editForm.brand,
      stockQty: editForm.stockQty,
      description: editForm.name
    };

    if (currentId) {
      updateProduct(currentId, pData);
    } else {
      addProduct({ id: `sku-${Date.now()}`, ...pData });
    }
    setIsFormOpen(false);
  };

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm flex flex-col h-full overflow-hidden relative">
      <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
        <h2 className="font-bold text-slate-900 text-lg">Product Catalog</h2>
        <button onClick={startAdd} className="px-4 py-2 bg-teal-600 text-white font-bold rounded-lg hover:bg-teal-700 transition">
          + Add Product
        </button>
      </div>
      
      <div className="p-4 bg-slate-50 border-b border-slate-100 shrink-0">
        <input 
          type="text" 
          placeholder="Search products..." 
          value={searchTerm}
          onChange={(e) => { setSearchParams(e.target.value); setPage(1); }}
          className="w-full max-w-md bg-white border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
        />
      </div>

      <div className="overflow-x-auto flex-1 h-[600px] overflow-y-auto">
        <table className="w-full text-left text-sm whitespace-nowrap">
          <thead className="bg-slate-50 border-b border-slate-200 sticky top-0 z-10">
            <tr className="text-slate-500 text-[10px] uppercase tracking-widest font-bold">
              <th className="py-4 px-6">Product</th>
              <th className="py-4 px-6">Category</th>
              <th className="py-4 px-6">Price</th>
              <th className="py-4 px-6">Stock</th>
              <th className="py-4 px-6 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {paginatedProducts.map(product => (
              <tr key={product.id} className="hover:bg-slate-50 transition-colors">
                <td className="py-4 px-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-slate-100 rounded border border-slate-200 overflow-hidden shrink-0 flex items-center justify-center">
                      <img src={product.image} className="w-full h-full object-contain mix-blend-multiply" alt={product.name} loading="lazy" />
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 leading-tight max-w-[200px] truncate">{product.name}</p>
                      <p className="text-xs text-slate-500">{product.brand}</p>
                    </div>
                  </div>
                </td>
                <td className="py-4 px-6 text-slate-600">{product.category}</td>
                <td className="py-4 px-6 font-bold text-slate-900">AED {product.price.toFixed(2)}</td>
                <td className="py-4 px-6">
                  <div className="flex flex-col gap-1">
                    {product.inStock ? 
                      <span className="px-2 py-1 bg-green-100 text-green-800 rounded text-xs font-bold inline-block w-max">In Stock</span> :
                      <span className="px-2 py-1 bg-red-100 text-red-800 rounded text-xs font-bold inline-block w-max">Out of Stock</span>
                    }
                    {product.stockQty !== undefined && <span className="text-xs text-slate-500 font-bold ml-1">Qty: {product.stockQty}</span>}
                  </div>
                </td>
                <td className="py-4 px-6 text-right">
                  <button onClick={() => startEdit(product)} className="text-teal-600 font-bold text-xs uppercase tracking-wider hover:underline mr-3">Edit</button>
                  <button onClick={() => deleteProduct(product.id)} className="text-red-600 font-bold text-xs uppercase tracking-wider hover:underline">Delete</button>
                </td>
              </tr>
            ))}
            {paginatedProducts.length === 0 && (
              <tr>
                <td colSpan={5} className="py-8 text-center text-slate-500">No products found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      
      <div className="p-4 border-t border-slate-100 flex items-center justify-between shrink-0 bg-white">
        <span className="text-sm text-slate-500">
          Showing {filteredProducts.length > 0 ? (page - 1) * itemsPerPage + 1 : 0} to {Math.min(page * itemsPerPage, filteredProducts.length)} of {filteredProducts.length}
        </span>
        <div className="flex gap-2">
          <button 
            disabled={page === 1}
            onClick={() => setPage(p => p - 1)}
            className="p-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            disabled={page >= totalPages}
            onClick={() => setPage(p => p + 1)}
            className="p-1 rounded bg-slate-100 text-slate-600 hover:bg-slate-200 disabled:opacity-50"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {isFormOpen && (
        <div className="absolute inset-0 bg-slate-900/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-2xl overflow-hidden flex flex-col max-h-[90vh]">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center shrink-0">
              <h3 className="text-lg font-bold text-slate-900">{currentId ? 'Edit Product' : 'Add Product'}</h3>
              <button onClick={() => setIsFormOpen(false)} className="text-slate-400 hover:text-slate-600"><X size={20}/></button>
            </div>
            <div className="p-6 space-y-4 overflow-y-auto flex-1">
              <div className="flex gap-4">
                <div className="flex-[2]">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
                  <input 
                    type="text" 
                    value={editForm.name} 
                    onChange={e => setEditForm({...editForm, name: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Brand</label>
                  <input 
                    type="text" 
                    value={editForm.brand} 
                    onChange={e => setEditForm({...editForm, brand: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Price (AED)</label>
                  <input 
                    type="number" 
                    value={editForm.price} 
                    onChange={e => setEditForm({...editForm, price: parseFloat(e.target.value) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Category</label>
                  <input 
                    type="text" 
                    value={editForm.category} 
                    onChange={e => setEditForm({...editForm, category: e.target.value})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Image URLs (one per line)</label>
                <textarea 
                  rows={3}
                  value={editForm.images} 
                  onChange={e => setEditForm({...editForm, images: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 font-mono text-xs resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1">Key Features (one per line)</label>
                <textarea 
                  rows={4}
                  value={editForm.features} 
                  onChange={e => setEditForm({...editForm, features: e.target.value})}
                  className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 resize-none"
                />
              </div>

              <div className="flex gap-4 items-end">
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Rating (0-5)</label>
                  <input 
                    type="number" 
                    min="0" max="5" step="0.1"
                    value={editForm.rating} 
                    onChange={e => setEditForm({...editForm, rating: parseFloat(e.target.value) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-1">
                  <label className="block text-sm font-bold text-slate-700 mb-1">Reviews Count</label>
                  <input 
                    type="number" 
                    value={editForm.reviewsCount} 
                    onChange={e => setEditForm({...editForm, reviewsCount: parseInt(e.target.value, 10) || 0})}
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                  />
                </div>
                <div className="flex-[1.5] pb-2 flex flex-col gap-3">
                  <label className="flex items-center gap-2 cursor-pointer text-sm font-bold text-slate-700">
                    <input 
                      type="checkbox" 
                      checked={editForm.inStock} 
                      onChange={e => setEditForm({...editForm, inStock: e.target.checked})}
                      className="w-4 h-4 text-teal-600 rounded border-slate-300 focus:ring-teal-500 focus:ring-offset-0"
                    />
                    Product is In Stock
                  </label>
                  
                  <div>
                    <label className="block text-sm font-bold text-slate-700 mb-1">Stock Quantity</label>
                    <input 
                      type="number" 
                      value={editForm.stockQty} 
                      onChange={e => setEditForm({...editForm, stockQty: parseInt(e.target.value, 10) || 0})}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />
                  </div>
                </div>
              </div>
              
            </div>
            <div className="p-6 border-t border-slate-100 flex justify-end gap-3 bg-slate-50 shrink-0">
              <button 
                onClick={() => setIsFormOpen(false)} 
                className="px-4 py-2 text-sm font-bold text-slate-600 hover:text-slate-900 transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={handleSave} 
                className="px-6 py-2 text-sm font-bold bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors shadow-sm"
              >
                Save Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
