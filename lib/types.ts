export type Product = {
  id: string;
  slug: string;
  name: string;
  category: string;
  description: string;
  price: number;
  unit: string;
  image?: string;
  featured?: boolean;
  active?: boolean;
  options?: string[];
};


export type HomeCategory = {
  id: string;
  name: string;
  image: string;
  href?: string;
  active?: boolean;
  sortOrder?: number;
};

export type HeroSlide = {
  id: string;
  title: string;
  description?: string;
  image: string;
  active?: boolean;
  sortOrder?: number;
};

export type PaymentMethod = 'BCA' | 'Mandiri' | 'BRI' | 'GoPay';

export type OrderItem = {
  productId: string;
  productName: string;
  qty: number;
  price: number;
  notes?: string;
  designUrl?: string;
};

export type Order = {
  id: string;
  code: string;
  customerName: string;
  whatsapp: string;
  fulfillment: 'pickup' | 'delivery';
  address?: string;
  notes?: string;
  total: number;
  status: string;
  createdAt: string;
  items: OrderItem[];
  paymentMethod?: PaymentMethod;
};
