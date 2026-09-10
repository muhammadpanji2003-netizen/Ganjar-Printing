import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import { ArrowRight, BadgeCheck, Clock3, MapPin, MessageCircle, ShoppingBag, Sparkles, Truck, UploadCloud } from 'lucide-react';

const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6285311454581';
const maps=process.env.NEXT_PUBLIC_MAPS_URL||'https://www.google.com/maps/search/?api=1&query=Jl.%20Balai%20Pustaka%20Baru%20No.46A%20Rawamangun%20Jakarta%20Timur';
const cats=[
  ['Banner & Spanduk','BN','Mulai Rp18rb/m²'],['Stiker','ST','Custom & tahan air'],['Kartu Nama','KN','Profesional & premium'],['Brosur & Flyer','BR','Promosi full color'],
  ['Poster','PS','Tajam & cerah'],['Buku','BK','Jilid rapi'],['Undangan','UD','Custom desain'],['Sertifikat','SR','Berbagai jenis kertas']
];

export default function Home(){return <main>
  <section className="minimalHero"><div className="container minimalHeroGrid">
    <div className="minimalHeroCopy"><span className="ePill"><Sparkles/>Printing lebih mudah</span><h1>Cetak kebutuhan Anda,<br/><span>tanpa ribet.</span></h1><p>Pesan printing dari HP, pilih produk, upload desain, lalu konfirmasi lewat WhatsApp. Cepat, jelas, dan praktis.</p><div className="eHeroButtons"><Link href="/katalog" className="ePrimary"><ShoppingBag/>Lihat Katalog <ArrowRight/></Link><a href={`https://wa.me/${wa}?text=${encodeURIComponent('Halo Ganjar Printing, saya ingin bertanya tentang layanan printing.')}`} target="_blank" rel="noreferrer" className="eSecondary"><MessageCircle/>Chat WhatsApp</a></div><div className="eMiniTrust"><span><BadgeCheck/>Hasil rapi</span><span><Clock3/>Proses cepat</span><span><Truck/>Ambil / kirim</span></div></div>
    <div className="minimalHeroVisual"><div className="showcaseMain"><img src="/samples/banner.svg" alt="Contoh banner Ganjar Printing"/></div><div className="showcaseStack"><img src="/samples/business-card.svg" alt="Contoh kartu nama"/><img src="/samples/sticker.svg" alt="Contoh stiker"/></div></div>
  </div></section>

  <section className="eCategories"><div className="container"><div className="eSectionHead"><div><span>KATEGORI</span><h2>Pilih kebutuhan cetak</h2><p>Produk populer yang paling sering dipesan pelanggan.</p></div><Link href="/katalog">Semua produk <ArrowRight/></Link></div><div className="simpleCatGrid">{cats.map(([c,abbr,desc])=><Link href={`/katalog?category=${encodeURIComponent(c.split(' & ')[0])}`} key={c}><div className="simpleCatIcon">{abbr}</div><div><b>{c}</b><small>{desc}</small></div><ArrowRight/></Link>)}</div></div></section>

  <section className="eFeatured"><div className="container"><div className="eSectionHead"><div><span>REKOMENDASI</span><h2>Produk favorit pelanggan</h2><p>Contoh produk bisa diganti sendiri dari dashboard admin.</p></div><Link href="/katalog">Lihat katalog <ArrowRight/></Link></div><ProductGrid limit={6}/></div></section>

  <section id="cara-pesan" className="eSteps"><div className="container"><div className="eSectionHead"><div><span>CARA PESAN</span><h2>Empat langkah, selesai.</h2></div></div><div className="eStepGrid"><article><b>01</b><ShoppingBag/><h3>Pilih produk</h3><p>Pilih layanan cetak yang Anda perlukan.</p></article><article><b>02</b><UploadCloud/><h3>Upload desain</h3><p>Kirim file langsung dari HP atau laptop.</p></article><article><b>03</b><MessageCircle/><h3>Konfirmasi</h3><p>Detail pesanan dikonfirmasi lewat WhatsApp.</p></article><article><b>04</b><Truck/><h3>Ambil / kirim</h3><p>Pesanan siap diambil atau dikirim.</p></article></div></div></section>

  <section className="eLocation"><div className="container eLocationCard"><div><span>GANJAR PRINTING · RAWAMANGUN</span><h2>Dekat, praktis, dan mudah dihubungi.</h2><p><MapPin/>Jl. Balai Pustaka baru No.46A, Rawamangun, Jakarta Timur</p><div><a className="ePrimary" href={maps} target="_blank" rel="noreferrer"><MapPin/>Buka Google Maps</a><a className="eSecondary dark" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a></div></div><div className="eMapVisual"><span className="pin"><MapPin/></span><div className="mapLines"></div><b>Rawamangun</b><small>Jakarta Timur</small></div></div></section>
</main>}
