import { Product } from './types';

export const demoProducts: Product[] = [
  {
    id: '1', slug: 'banner-flexi', name: 'Banner / Spanduk', category: 'Banner',
    description: 'Cetak banner untuk promosi, acara, toko, dan kebutuhan outdoor.',
    price: 18000, unit: '/m²', featured: true, active: true,
    image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1200&q=80',
    options: ['Flexi 280 gsm', 'Flexi 340 gsm', 'Mata ayam']
  },
  {
    id: '2', slug: 'stiker-vinyl', name: 'Stiker Vinyl', category: 'Stiker',
    description: 'Stiker tahan air untuk label produk, kemasan, dan branding.',
    price: 25000, unit: '/lembar', featured: true, active: true,
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=1200&q=80',
    options: ['Glossy', 'Matte', 'Kiss cut']
  },
  {
    id: '3', slug: 'kartu-nama', name: 'Kartu Nama', category: 'Kartu Nama',
    description: 'Kartu nama profesional dengan pilihan laminasi dan kertas.',
    price: 45000, unit: '/100 pcs', featured: true, active: true,
    image: 'https://images.unsplash.com/photo-1589041127168-9b1915730dc3?auto=format&fit=crop&w=1200&q=80',
    options: ['Art carton', 'Laminasi glossy', 'Laminasi matte']
  },
  {
    id: '4', slug: 'brosur-a5', name: 'Brosur A5', category: 'Brosur',
    description: 'Brosur full color untuk promosi usaha, acara, dan informasi produk.',
    price: 650, unit: '/lembar', featured: false, active: true,
    image: 'https://images.unsplash.com/photo-1586281380349-632531db7ed4?auto=format&fit=crop&w=1200&q=80',
    options: ['1 sisi', '2 sisi', 'Art paper']
  },
  {
    id: '5', slug: 'poster-a3', name: 'Poster A3', category: 'Poster',
    description: 'Poster tajam dan cerah untuk promosi indoor.',
    price: 12000, unit: '/lembar', featured: false, active: true,
    image: 'https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=1200&q=80',
    options: ['A3', 'A2', 'Photo paper']
  },
  {
    id: '6', slug: 'sertifikat', name: 'Sertifikat', category: 'Dokumen',
    description: 'Cetak sertifikat untuk pelatihan, seminar, penghargaan, dan event.',
    price: 5000, unit: '/lembar', featured: false, active: true,
    image: 'https://images.unsplash.com/photo-1576072463901-ad10975e2e34?auto=format&fit=crop&w=1200&q=80',
    options: ['A4', 'Concorde', 'Jasmine']
  }
];

export const categories = ['Semua', ...Array.from(new Set(demoProducts.map(p => p.category)))];
