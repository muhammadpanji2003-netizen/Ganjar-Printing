import Link from 'next/link';
import { Search, ShoppingCart } from 'lucide-react';

export default function Nav(){
  return <header className="nav"><div className="container navin">
    <Link className="gpBrand" href="/"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><span><b>GANJAR</b><small>PRINTING</small></span></Link>
    <nav className="links"><Link href="/">Home</Link><Link href="/katalog">Katalog</Link><Link href="/#cara-pesan">Cara Pesan</Link><Link href="/pesanan">Cek Pesanan</Link><Link href="/galeri">Galeri</Link><Link href="/kontak">Kontak</Link></nav>
    <div className="gpNavActions"><button className="iconBtn" aria-label="Cari"><Search size={20}/></button><Link className="iconBtn cartBtn" href="/checkout" aria-label="Keranjang"><ShoppingCart size={20}/><i>0</i></Link><Link className="gpBtn gpBtnBlue navOrder" href="/katalog">Pesan Sekarang <span>→</span></Link></div>
  </div></header>
}
