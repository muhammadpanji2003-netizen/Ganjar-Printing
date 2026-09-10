import Link from 'next/link';
import { MapPin, MessageCircle, ShoppingBag } from 'lucide-react';
const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6285311454581';
export default function Nav(){
  return <header className="siteHeader"><div className="container siteNav">
    <Link className="siteBrand" href="/"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><span><b>GANJAR</b><small>PRINTING</small></span></Link>
    <nav className="siteLinks"><Link href="/">Home</Link><Link href="/katalog">Katalog</Link><Link href="/#cara-pesan">Cara Pesan</Link><Link href="/pesanan">Cek Pesanan</Link><Link href="/kontak">Kontak</Link></nav>
    <div className="siteActions"><a className="navIcon" href="/kontak" aria-label="Lokasi"><MapPin/></a><a className="navIcon wa" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/></a><Link className="navOrderBtn" href="/katalog"><ShoppingBag/>Pesan</Link></div>
  </div></header>;
}
