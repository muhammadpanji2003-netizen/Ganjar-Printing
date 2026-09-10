import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

export default function Nav(){
  return <header className="siteHeader v16Header"><div className="container siteNav v16Nav">
    <Link className="siteBrand v16Brand" href="/"><img src="/ganjar-logo.png" alt="Ganjar Printing"/></Link>
    <nav className="siteLinks v16Links">
      <Link href="/">Beranda</Link><Link href="/katalog">Produk</Link><Link href="/#tentang">Tentang Kami</Link><Link href="/galeri">Galeri</Link><Link href="/kontak">Kontak</Link>
    </nav>
    <a className="v16WhatsAppTop" href={whatsappUrl('Halo Ganjar Printing, saya ingin bertanya tentang layanan printing.')} target="_blank" rel="noreferrer"><MessageCircle/>Pesan Sekarang</a>
  </div></header>;
}
