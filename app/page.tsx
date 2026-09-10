import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import {
  ArrowRight, BadgeCheck, Clock3, MapPin, MessageCircle, ShoppingBag,
  Sparkles, Truck, UploadCloud, ShieldCheck, Printer, Users
} from 'lucide-react';

const wa = process.env.NEXT_PUBLIC_WHATSAPP || '6281240322071';
const maps = process.env.NEXT_PUBLIC_MAPS_URL || 'https://www.google.com/maps/search/?api=1&query=Jl.%20Balai%20Pustaka%20Baru%20No.46A%20Rawamangun%20Jakarta%20Timur';

const cats = [
  ['Kartu Nama','/categories/business-card.webp'],
  ['Brosur','/categories/brochure.webp'],
  ['Flyer','/categories/flyer.webp'],
  ['Poster','/categories/poster.webp'],
  ['Banner','/categories/banner.webp'],
  ['Stiker','/categories/sticker.webp'],
  ['Menu','/categories/menu.webp']
];

export default function Home(){
  return <main className="homeV14">
    <section className="luxHero">
      <div className="container luxHeroInner">
        <div className="luxCopy">
          <span className="luxPill"><Sparkles/>Solusi Cetak Modern</span>
          <h1>Ide Anda.<br/>Kami Cetak<br/><span>Menjadi Nyata.</span></h1>
          <p>Ganjar Printing membantu kebutuhan cetak personal maupun bisnis dengan hasil berkualitas, proses cepat, dan pemesanan yang mudah.</p>
          <div className="luxActions">
            <Link href="/katalog" className="luxPrimary"><ShoppingBag/>Lihat Katalog <ArrowRight/></Link>
            <a className="luxSecondary" href={`https://wa.me/${wa}?text=${encodeURIComponent('Halo Ganjar Printing, saya ingin bertanya tentang layanan printing.')}`} target="_blank" rel="noreferrer"><MessageCircle/>Tanya via WhatsApp</a>
          </div>
          <div className="luxTrust">
            <span><BadgeCheck/><b>Hasil Berkualitas</b><small>Detail rapi & presisi</small></span>
            <span><Clock3/><b>Proses Cepat</b><small>Efisien dan jelas</small></span>
            <span><Truck/><b>Ambil / Kirim</b><small>Fleksibel untuk Anda</small></span>
          </div>
        </div>

        <div className="luxVisual" aria-label="Contoh hasil cetak Ganjar Printing">
          <div className="cmykEdge"><i/><i/><i/><i/></div>
          <div className="luxPlant"/>
          <div className="luxBoard mainBoard">
            <img src="/ganjar-logo.png" alt="Ganjar Printing"/>
            <strong>Cetak Lebih dari<br/>Sekadar Kertas.</strong>
            <small>DESAIN · CETAK · SOLUSI</small>
          </div>
          <div className="luxBoard posterBoard">
            <em>GOOD IDEAS</em>
            <strong>GREAT<br/>PRINTS</strong>
            <img src="/samples/poster.svg" alt="Contoh poster"/>
          </div>
          <div className="luxCard cardOne"><img src="/samples/business-card.svg" alt="Contoh kartu nama"/></div>
          <div className="luxCard cardTwo"><img src="/samples/sticker.svg" alt="Contoh stiker"/></div>
          <div className="luxCard cardThree"><img src="/samples/flyer.svg" alt="Contoh flyer"/></div>
          <div className="luxCup"><img src="/ganjar-logo.png" alt="Logo Ganjar Printing"/><span>PRINT<br/>DAILY</span></div>
        </div>
      </div>
    </section>

    <section className="quickCatalog">
      <div className="container quickCatalogGrid">
        {cats.map(([name,img])=><Link href={`/katalog?category=${encodeURIComponent(name)}`} key={name} className="quickCat">
          <div><img src={img} alt={name}/></div><b>{name}</b>
        </Link>)}
        <Link href="/katalog" className="quickCat moreCat"><div><img src="/categories/other.webp" alt="Produk printing lainnya"/></div><b>Lainnya</b></Link>
      </div>
    </section>

    <section id="tentang" className="luxStats">
      <div className="container luxStatsInner">
        <p>Solusi cetak yang praktis untuk kebutuhan harian, acara, sekolah, dan bisnis.</p>
        <article><Users/><div><b>500+</b><small>Pelanggan dilayani</small></div></article>
        <article><Printer/><div><b>10.000+</b><small>Produk tercetak</small></div></article>
        <article><ShieldCheck/><div><b>Kualitas</b><small>Dicek sebelum selesai</small></div></article>
      </div>
    </section>

    <section className="eFeatured v14Featured"><div className="container">
      <div className="eSectionHead"><div><span>KATALOG</span><h2>Pilihan cetak untuk berbagai kebutuhan</h2><p>Harga dan produk dapat dikelola langsung dari dashboard admin.</p></div><Link href="/katalog">Lihat semua <ArrowRight/></Link></div>
      <ProductGrid limit={6}/>
    </div></section>

    <section id="cara-pesan" className="eSteps v14Steps"><div className="container">
      <div className="eSectionHead"><div><span>CARA PESAN</span><h2>Sederhana dari awal sampai selesai.</h2></div></div>
      <div className="eStepGrid"><article><b>01</b><ShoppingBag/><h3>Pilih produk</h3><p>Tentukan jenis layanan cetak yang Anda butuhkan.</p></article><article><b>02</b><UploadCloud/><h3>Upload desain</h3><p>Kirim file langsung dari HP atau laptop.</p></article><article><b>03</b><MessageCircle/><h3>Konfirmasi</h3><p>Detail pesanan dikonfirmasi dengan cepat melalui WhatsApp.</p></article><article><b>04</b><Truck/><h3>Ambil / kirim</h3><p>Pesanan siap diambil di toko atau dikirim.</p></article></div>
    </div></section>

    <section className="eLocation v14Location"><div className="container eLocationCard"><div><span>GANJAR PRINTING · RAWAMANGUN</span><h2>Mudah ditemukan, mudah dihubungi.</h2><p><MapPin/>Jl. Balai Pustaka baru No.46A, Rawamangun, Jakarta Timur</p><div><a className="ePrimary" href={maps} target="_blank" rel="noreferrer"><MapPin/>Buka Google Maps</a><a className="eSecondary dark" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"><MessageCircle/>WhatsApp</a></div></div><div className="eMapVisual"><span className="pin"><MapPin/></span><div className="mapLines"></div><b>Rawamangun</b><small>Jakarta Timur</small></div></div></section>
  </main>
}
