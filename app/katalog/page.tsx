import type { Metadata } from 'next';
import ProductGrid from '@/components/ProductGrid';

export const metadata: Metadata = {
  title: 'Katalog Percetakan Rawamangun',
  description: 'Lihat katalog Ganjar Printing untuk kartu nama, brosur, flyer, banner, stiker, poster, dan kebutuhan cetak lainnya di Jakarta Timur.',
  alternates: { canonical: '/katalog' },
};

export default function Katalog(){return <main className="section"><div className="container"><div className="sectionHead"><div><div className="tag">SEMUA PRODUK</div><h1 className="pageTitle">Katalog Percetakan Rawamangun</h1><p className="muted">Pilih produk yang ingin dicetak lalu atur pesanannya. Melayani Rawamangun dan area Jakarta Timur.</p></div></div><ProductGrid/></div></main>}
