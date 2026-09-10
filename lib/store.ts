'use client';
import { demoProducts } from './demo';
import { Product, Order } from './types';
import { supabase, isSupabaseConfigured } from './supabase';

const PRODUCT_KEY = 'printing_products_v1';
const ORDER_KEY = 'printing_orders_v1';

export async function getProducts(): Promise<Product[]> {
  if (supabase) {
    const { data, error } = await supabase.from('products').select('*').order('created_at', { ascending: false });
    if (!error && data?.length) return data.map(mapProduct);
  }
  if (typeof window !== 'undefined') {
    const saved = localStorage.getItem(PRODUCT_KEY);
    if (saved) return JSON.parse(saved);
  }
  return demoProducts;
}

export async function saveProduct(product: Product): Promise<void> {
  if (supabase) {
    const payload = {
      id: product.id,
      slug: product.slug,
      name: product.name,
      category: product.category,
      description: product.description,
      price: product.price,
      unit: product.unit,
      image_url: product.image || null,
      featured: product.featured ?? false,
      active: product.active ?? true,
      options: product.options ?? []
    };
    const { error } = await supabase.from('products').upsert(payload);
    if (!error) return;
  }
  const list = await getProducts();
  const next = list.some(p => p.id === product.id) ? list.map(p => p.id === product.id ? product : p) : [product, ...list];
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(next));
}

export async function deleteProduct(id: string): Promise<void> {
  if (supabase) {
    const { error } = await supabase.from('products').delete().eq('id', id);
    if (!error) return;
  }
  const list = await getProducts();
  localStorage.setItem(PRODUCT_KEY, JSON.stringify(list.filter(p => p.id !== id)));
}

export async function uploadProductImage(file: File): Promise<string> {
  if (!supabase) return URL.createObjectURL(file);
  const ext = file.name.split('.').pop() || 'jpg';
  const path = `products/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from('catalog').upload(path, file, { upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from('catalog').getPublicUrl(path);
  return data.publicUrl;
}


export async function uploadDesign(file: File): Promise<string> {
  if (!supabase) return `local://${file.name}`;
  const ext = file.name.split('.').pop() || 'bin';
  const path = `orders/${crypto.randomUUID()}.${ext}`;
  const { error } = await supabase.storage.from('designs').upload(path, file, { upsert: false });
  if (error) throw error;
  const { data } = supabase.storage.from('designs').getPublicUrl(path);
  return data.publicUrl;
}

export async function createOrder(order: Order): Promise<void> {
  if (supabase) {
    const { error } = await supabase.from('orders').insert({
      id: order.id, code: order.code, customer_name: order.customerName,
      whatsapp: order.whatsapp, fulfillment: order.fulfillment,
      address: order.address || null, notes: order.notes || null,
      total: order.total, status: order.status, items: order.items
    });
    if (!error) return;
  }
  const current: Order[] = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
  localStorage.setItem(ORDER_KEY, JSON.stringify([order, ...current]));
}

export async function findOrder(code: string): Promise<Order | null> {
  if (supabase) {
    const { data, error } = await supabase.rpc('track_order', { order_code: code });
    const row = Array.isArray(data) ? data[0] : data;
    if (!error && row) return mapOrder(row);
  }
  if (typeof window === 'undefined') return null;
  const current: Order[] = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
  return current.find(o => o.code.toLowerCase() === code.toLowerCase()) || null;
}

export async function getOrders(): Promise<Order[]> {
  if (supabase) {
    const { data, error } = await supabase.from('orders').select('*').order('created_at', { ascending: false });
    if (!error && data) return data.map(mapOrder);
  }
  if (typeof window === 'undefined') return [];
  return JSON.parse(localStorage.getItem(ORDER_KEY) || '[]');
}

export async function updateOrderStatus(id: string, status: string): Promise<void> {
  if (supabase) {
    const { error } = await supabase.from('orders').update({ status }).eq('id', id);
    if (!error) return;
  }
  const orders = await getOrders();
  localStorage.setItem(ORDER_KEY, JSON.stringify(orders.map(o => o.id === id ? { ...o, status } : o)));
}

function mapProduct(d: any): Product {
  return { id: d.id, slug: d.slug, name: d.name, category: d.category, description: d.description || '', price: Number(d.price), unit: d.unit || '', image: d.image_url || '', featured: d.featured, active: d.active, options: d.options || [] };
}
function mapOrder(d: any): Order {
  return { id: d.id, code: d.code, customerName: d.customer_name, whatsapp: d.whatsapp, fulfillment: d.fulfillment, address: d.address || '', notes: d.notes || '', total: Number(d.total), status: d.status, createdAt: d.created_at, items: d.items || [] };
}

export { isSupabaseConfigured };
