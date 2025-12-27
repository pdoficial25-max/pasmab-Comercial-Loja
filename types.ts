
export interface Product {
  id: string;
  name: string;
  brand: string;
  description: string;
  price: number;
  originalPrice?: number;
  imageUrl: string;
  category: string;
  isNew?: boolean;
  isSale?: boolean;
  isBestSeller?: boolean;
  tags: string[];
}

export type ToastType = 'success' | 'error' | null;

export interface ToastState {
  message: string;
  type: ToastType;
}

export type PageRoute = 'home' | 'carrinho' | 'checkout' | 'login' | 'quick-view';
