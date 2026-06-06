export type Category = string;

export interface Product {
  id: string;
  name: string;
  description: string;
  features: string[];
  price: number; // in AED
  category: Category;
  image: string;
  images?: string[];
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockQty?: number;
  brand: string;
}

export interface CartItem {
  product: Product;
  quantity: number;
}
