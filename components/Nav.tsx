import Link from 'next/link';
import { ArrowRight, MapPin, MessageCircle } from 'lucide-react';
const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6281240322071';
export default function Nav(){
  return <header className="siteHeader v14Header"><div className="container siteNav v14Nav">
    <Link className="siteBrand v14Brand" href="/"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><span><b>GANJAR</b><small>PRINTING</small></span></Link>
    <nav className="siteLinks v14Links"><Link href="/">Home</Link><Link href="/katalog">Katalog</Link><Link href="/#cara-pesan">Cara Pesan</Link><Link href="/pesanan">Cek Pesanan</Link><Link href="/#tentang">Tentang</Link><Link href="/kontak">Kontak</Link></nav>
    <div className="siteActions v14NavActions"><Link className="navLocation" href="/kontak"><MapPin/>Rawamangun</Link><a className="navIcon wa navWaNumber" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle/><span>62 812-4032-2071</span></a><Link className="navOrderBtn v14Order" href="/katalog">Pesan Sekarang <ArrowRight/></Link></div>
  </div></header>;
}
