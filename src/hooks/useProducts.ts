import { useState, useEffect } from 'react';
import { products as initialProducts } from '../data';
import { Product } from '../types';

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>(() => {
    let result = [...initialProducts];
    
    try {
      const storedAdds = localStorage.getItem('admin_product_adds');
      if (storedAdds) {
        const adds: Product[] = JSON.parse(storedAdds);
        result = [...adds, ...result];
      }
    } catch (e) {
      console.warn("Failed to parse added products");
    }

    try {
      const storedEdits = localStorage.getItem('admin_product_edits');
      if (storedEdits) {
        const edits: Record<string, Partial<Product>> = JSON.parse(storedEdits);
        result = result.map(p => {
          if (edits[p.id]) {
            return { ...p, ...edits[p.id] };
          }
          return p;
        });
      }
    } catch (e) {
      console.warn("Failed to parse local storage overrides");
    }
    
    return result;
  });

  const addProduct = (product: Product) => {
    setProducts(prev => {
      const result = [product, ...prev];
      try {
        const storedAdds = localStorage.getItem('admin_product_adds');
        const adds: Product[] = storedAdds ? JSON.parse(storedAdds) : [];
        adds.push(product);
        localStorage.setItem('admin_product_adds', JSON.stringify(adds));
      } catch(e) {}
      return result;
    });
  };

  const updateProduct = (id: string, updates: Partial<Product>) => {
    setProducts(prev => prev.map(p => {
      if (p.id === id) {
        const updated = { ...p, ...updates };
        // Save to local storage
        try {
          const storedEdits = localStorage.getItem('admin_product_edits');
          const edits: Record<string, Partial<Product>> = storedEdits ? JSON.parse(storedEdits) : {};
          edits[id] = { ...(edits[id] || {}), ...updates };
          localStorage.setItem('admin_product_edits', JSON.stringify(edits));
        } catch(e) {}
        return updated;
      }
      return p;
    }));
  };

  const deleteProduct = (id: string) => {
    setProducts(prev => {
        const result = prev.filter(p => p.id !== id);
        try {
            const storedDeletes = localStorage.getItem('admin_product_deletes');
            const deletes: string[] = storedDeletes ? JSON.parse(storedDeletes) : [];
            deletes.push(id);
            localStorage.setItem('admin_product_deletes', JSON.stringify(deletes));
        } catch(e) {}
        return result;
    });
  }

  // Also apply deletes securely
  useEffect(() => {
     try {
         const storedDeletes = localStorage.getItem('admin_product_deletes');
         if (storedDeletes) {
            const deletes: string[] = JSON.parse(storedDeletes);
            setProducts(prev => prev.filter(p => !deletes.includes(p.id)));
         }
     } catch (e) {}
  }, []);

  return { products, updateProduct, deleteProduct, addProduct };
};
