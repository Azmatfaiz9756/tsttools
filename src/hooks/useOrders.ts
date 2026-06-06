import { useState, useEffect } from 'react';
import { Product } from '../types';

export interface OrderItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  date: string;
  items: OrderItem[];
  total: number;
  status: 'Pending' | 'Processing' | 'Shipped' | 'Delivered';
  customerInfo: {
    name: string;
    email: string;
    address: string;
    city: string;
    phone: string;
  };
}

export const useOrders = () => {
  const [orders, setOrders] = useState<Order[]>(() => {
    try {
      const stored = localStorage.getItem('app_orders');
      if (stored) return JSON.parse(stored);
    } catch(e) {}
    return [];
  });

  const addOrder = (order: Order) => {
    const newOrders = [order, ...orders];
    setOrders(newOrders);
    localStorage.setItem('app_orders', JSON.stringify(newOrders));
  };

  const updateOrderStatus = (id: string, status: Order['status']) => {
    const newOrders = orders.map(o => o.id === id ? { ...o, status } : o);
    setOrders(newOrders);
    localStorage.setItem('app_orders', JSON.stringify(newOrders));
  };

  return { orders, addOrder, updateOrderStatus };
};
