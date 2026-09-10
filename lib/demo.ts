import { Product } from './types';

export const demoProducts: Product[] = [
  {
    id: '1', slug: 'banner-premium', name: 'Banner Premium', category: 'Banner',
    description: 'Banner full color untuk promosi, acara, toko, dan kebutuhan outdoor.',
    price: 18000, unit: '/m²', featured: true, active: true,
    image: '/samples/banner.svg',
    options: ['Flexi 280 gsm', 'Flexi 340 gsm', 'Flexi 440 gsm', 'Mata ayam']
  },
  {
    id: '2', slug: 'stiker-vinyl-custom', name: 'Stiker Vinyl Custom', category: 'Stiker',
    description: 'Stiker tahan air untuk kemasan, label produk, branding, dan dekorasi.',
    price: 25000, unit: '/lembar', featured: true, active: true,
    image: '/samples/sticker.svg',
    options: ['Glossy', 'Matte', 'Kiss cut', 'Die cut']
  },
  {
    id: '3', slug: 'kartu-nama-premium', name: 'Kartu Nama Premium', category: 'Kartu Nama',
    description: 'Kartu nama profesional dengan hasil tajam dan pilihan laminasi premium.',
    price: 45000, unit: '/100 pcs', featured: true, active: true,
    image: '/samples/business-card.svg',
    options: ['Art carton', 'Laminasi glossy', 'Laminasi matte']
  },
  {
    id: '4', slug: 'brosur-flyer', name: 'Brosur & Flyer', category: 'Brosur',
    description: 'Media promosi full color untuk usaha, event, menu, dan informasi produk.',
    price: 650, unit: '/lembar', featured: true, active: true,
    image: '/samples/flyer.svg',
    options: ['A5', 'A4', '1 sisi', '2 sisi']
  },
  {
    id: '5', slug: 'poster-foto', name: 'Poster Full Color', category: 'Poster',
    description: 'Poster tajam dan cerah untuk promosi, dekorasi, dan kebutuhan event.',
    price: 12000, unit: '/lembar', featured: true, active: true,
    image: '/samples/poster.svg',
    options: ['A3', 'A2', 'Photo paper', 'Art paper']
  },
  {
    id: '6', slug: 'sertifikat-premium', name: 'Sertifikat Premium', category: 'Dokumen',
    description: 'Cetak sertifikat rapi untuk pelatihan, seminar, penghargaan, dan event.',
    price: 5000, unit: '/lembar', featured: false, active: true,
    image: '/samples/certificate.svg',
    options: ['A4', 'Concorde', 'Jasmine']
  }
];

export const categories = ['Semua', ...Array.from(new Set(demoProducts.map(p => p.category)))];
