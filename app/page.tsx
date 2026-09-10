import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import { ArrowRight, BadgeCheck, Clock3, MapPin, MessageCircle, ShoppingBag, Sparkles, Truck, UploadCloud } from 'lucide-react';

const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6285311454581';
const maps=process.env.NEXT_PUBLIC_MAPS_URL||'https://www.google.com/maps/search/?api=1&query=Jl.%20Balai%20Pustaka%20Baru%20No.46A%20Rawamangun%20Jakarta%20Timur';
const cats=['Banner & Spanduk','Stiker','Kartu Nama','Brosur & Flyer','Poster','Buku','Undangan','Sertifikat'];

export default function Home(){return <main>
  <section className="eHero"><div className="container eHeroGrid"><div className="eHeroCopy"><span className="ePill"><Sparkles/>Printing mudah dari HP</span><h1>Ide Anda.<br/><span>Kami cetak dengan rapi.</span></h1><p>Ganjar Printing membantu kebutuhan cetak personal dan bisnis dengan proses yang sederhana, cepat, dan transparan.</p><div className="eHeroButtons"><Link href="/katalog" className="ePrimary"><ShoppingBag/>Lihat Katalog <ArrowRight/></Link><a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer" className="eSecondary"><MessageCircle/>Tanya via WhatsApp</a></div><div className="eMiniTrust"><span><BadgeCheck/>Hasil berkualitas</span><span><Clock3/>Proses cepat</span><span><Truck/>Ambil / kirim</span></div></div><div className="eHeroArt"><div className="ePoster"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><span>PRINT<br/>YOUR<br/>IDEAS</span></div><div className="eCards"><div>KARTU<br/><b>NAMA</b></div><div>FLYER<br/><b>PROMO</b></div><div>STIKER<br/><b>CUSTOM</b></div></div><div className="eColorBar"><i></i><i></i><i></i><i></i></div></div></div></section>

  <section className="eCategories"><div className="container"><div className="eSectionHead"><div><span>KATEGORI</span><h2>Cetak yang Anda butuhkan</h2></div><Link href="/katalog">Semua produk <ArrowRight/></Link></div><div className="eCatGrid">{cats.map((c,i)=><Link href={`/katalog?category=${encodeURIComponent(c.split(' & ')[0])}`} key={c}><div className={`eCatIcon c${i}`}><span>{c.substring(0,2).toUpperCase()}</span></div><b>{c}</b><small>Lihat pilihan</small></Link>)}</div></div></section>

  <section id="cara-pesan" className="eSteps"><div className="container"><div className="eSectionHead"><div><span>CARA PESAN</span><h2>Sederhana dari awal sampai cetak</h2></div></div><div className="eStepGrid"><article><b>01</b><ShoppingBag/><h3>Pilih produk</h3><p>Temukan layanan cetak dari katalog.</p></article><article><b>02</b><UploadCloud/><h3>Atur & upload</h3><p>Pilih spesifikasi lalu kirim desain Anda.</p></article><article><b>03</b><MessageCircle/><h3>Konfirmasi</h3><p>Pesanan diteruskan dan mudah dikonfirmasi via WhatsApp.</p></article><article><b>04</b><Truck/><h3>Terima pesanan</h3><p>Ambil di toko atau pilih pengiriman.</p></article></div></div></section>

  <section className="eFeatured"><div className="container"><div className="eSectionHead"><div><span>KATALOG</span><h2>Produk yang sering dipesan</h2></div><Link href="/katalog">Lihat semua <ArrowRight/></Link></div><ProductGrid limit={6}/></div></section>

  <section className="eLocation"><div className="container eLocationCard"><div><span>GANJAR PRINTING</span><h2>Datang langsung atau pesan dari rumah.</h2><p><MapPin/>Jl. Balai Pustaka baru No.46A, Rawamangun, Jakarta Timur</p><div><a className="ePrimary" href={maps} target="_blank" rel="noreferrer"><MapPin/>Buka Maps</a><a className="eSecondary dark" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a></div></div><div className="eMapVisual"><span className="pin"><MapPin/></span><div className="mapLines"></div><b>Rawamangun</b><small>Jakarta Timur</small></div></div></section>
</main>}
