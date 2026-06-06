import React, { useState } from 'react';
import { catalogImages } from '../imageCatalog';

export const Gallery = () => {
  const [visibleCount, setVisibleCount] = useState(48);

  const visibleImages = catalogImages.slice(0, visibleCount);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4 tracking-tight">Full Products Gallery</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">
          Take a look at our massive collection of available products, tools, and equipment across our catalog. ({catalogImages.length} items)
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {visibleImages.map((src, idx) => (
          <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow group aspect-square flex items-center justify-center p-2">
            <img 
              src={src} 
              alt={`Product ${idx + 1}`} 
              className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
              loading="lazy"
            />
          </div>
        ))}
      </div>

      {visibleCount < catalogImages.length && (
        <div className="mt-12 flex justify-center">
          <button 
            onClick={() => setVisibleCount(c => c + 48)}
            className="px-8 py-3 bg-white border border-slate-200 shadow-sm text-slate-900 rounded-full font-bold hover:bg-slate-50 transition-colors"
          >
            Load More Images
          </button>
        </div>
      )}
    </div>
  );
};
