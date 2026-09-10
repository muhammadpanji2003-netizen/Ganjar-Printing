import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import {
  ArrowRight, BadgeCheck, Clock3, MapPin, MessageCircle,
  ShoppingCart, Tag, Truck, UploadCloud
} from 'lucide-react';

const wa = process.env.NEXT_PUBLIC_WHATSAPP || '6285311454581';
const maps = process.env.NEXT_PUBLIC_MAPS_URL || 'https://www.google.com/maps/search/?api=1&query=Jl.%20Balai%20Pustaka%20Baru%20No.46A%20Rawamangun%20Jakarta%20Timur';

const categories = [
  ['Banner & Spanduk','Banner'], ['Stiker','Stiker'], ['Kartu Nama','Kartu Nama'],
  ['Brosur & Flyer','Brosur'], ['Poster','Poster'], ['Buku','Buku'],
  ['Undangan','Undangan'], ['Sertifikat','Dokumen'], ['Merchandise','Merchandise']
];

export default function Home(){
  return <main>
    <section className="gpHero">
      <div className="container gpHeroGrid">
        <div className="gpHeroCopy">
          <div className="gpKicker">CETAK APA SAJA, KAMI SIAP!</div>
          <h1>Cetak Lebih Mudah,<br/><span>Cepat, dan Berkualitas</span></h1>
          <p>Solusi kebutuhan cetak untuk bisnis, sekolah, acara, dan keperluan pribadi. Pilih produk, upload desain, dan pesan langsung dari HP.</p>
          <div className="gpHeroActions">
            <Link className="gpBtn gpBtnBlue" href="/katalog"><ShoppingCart size={19}/> Mulai Pesan <ArrowRight size={18}/></Link>
            <Link className="gpBtn gpBtnLight" href="/katalog">Lihat Katalog</Link>
          </div>
          <div className="gpTrustMini">
            <span><Tag size={19}/> Harga Terjangkau</span>
            <span><BadgeCheck size={19}/> Cetak Berkualitas</span>
            <span><Clock3 size={19}/> Layanan Cepat</span>
          </div>
        </div>

        <div className="gpHeroVisual" aria-label="Ganjar Printing">
          <div className="gpPrintStage">
            <div className="gpRollup">
              <img src="/ganjar-logo.png" alt="Ganjar Printing"/>
              <b>SOLUSI CETAK<br/>BERKUALITAS<br/>UNTUK ANDA</b>
            </div>
            <div className="gpMenuBoard">
              <span>BANNER</span><span>STIKER</span><span>POSTER</span><span>KARTU NAMA</span><span>BROSUR</span><span>BUKU</span><span>UNDANGAN</span><span>DAN LAINNYA</span>
            </div>
            <div className="gpSamples">
              <div className="samplePaper cardSample">GANJAR<br/><small>PRINTING</small></div>
              <div className="samplePaper flyerSample">IDEA<br/>DESIGN<br/>PRINT</div>
              <div className="samplePaper posterSample">PRINT<br/>YOUR<br/>IDEAS</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section className="gpCatalogStrip">
      <div className="container">
        <div className="gpSectionTitle"><h2>Kategori Produk</h2><Link href="/katalog">Lihat Semua <ArrowRight size={18}/></Link></div>
        <div className="gpCategoryRow">
          {categories.map(([name,cat],i)=><Link href={`/katalog?category=${encodeURIComponent(cat)}`} className="gpCategory" key={name}>
            <div className={`gpCatArt art${i%6}`}><span>{name.split(' ')[0]}</span></div>
            <b>{name}</b>
          </Link>)}
          <Link href="/katalog" className="gpCategory gpMore"><div className="gpDots">•••</div><b>Lainnya</b></Link>
        </div>
      </div>
    </section>

    <section className="gpBenefits">
      <div className="container gpBenefitGrid">
        <div><ShoppingCart/><span><b>Mudah Dipesan</b><small>Pesan kapan saja dari HP atau laptop</small></span></div>
        <div><Tag/><span><b>Harga Transparan</b><small>Estimasi harga terlihat sebelum pesan</small></span></div>
        <div><UploadCloud/><span><b>Upload Desain</b><small>Langsung dari perangkat Anda</small></span></div>
        <div><Truck/><span><b>Kirim / Ambil di Toko</b><small>Pilih sesuai kebutuhan Anda</small></span></div>
      </div>
    </section>

    <section id="cara-pesan" className="section" style={{background:'#fff'}}><div className="container"><div className="gpSectionTitle"><div><div className="tag">CARA PESAN</div><h2>Empat langkah sederhana</h2></div></div><div className="steps"><div className="step"><div className="num">1</div><h3>Pilih Produk</h3><p className="muted">Cari kebutuhan cetak dari katalog.</p></div><div className="step"><div className="num">2</div><h3>Atur Spesifikasi</h3><p className="muted">Pilih ukuran, bahan, jumlah, dan finishing.</p></div><div className="step"><div className="num">3</div><h3>Upload Desain</h3><p className="muted">Kirim file desain langsung dari HP.</p></div><div className="step"><div className="num">4</div><h3>Konfirmasi</h3><p className="muted">Buat pesanan dan lanjutkan lewat WhatsApp.</p></div></div></div></section>

    <section className="section gpProducts"><div className="container">
      <div className="gpSectionTitle"><div><div className="tag">PRODUK PILIHAN</div><h2>Yang sering dipesan</h2></div><Link href="/katalog">Lihat semua <ArrowRight size={18}/></Link></div>
      <ProductGrid limit={6}/>
    </div></section>

    <section className="section gpLocationSection"><div className="container gpLocationGrid">
      <div className="gpStoreVisual">
        <div className="gpStoreSign"><img src="/ganjar-logo.png" alt="Ganjar Printing"/></div>
        <div className="gpWindow"><span>DESAIN<br/>CETAK<br/>HASIL<br/>MAKSIMAL</span></div>
      </div>
      <div className="gpLocationInfo">
        <div className="gpLocationTitle"><MapPin/> <h2>Lokasi Kami</h2></div>
        <p className="gpAddress"><MapPin size={20}/> <b>Jl. Balai Pustaka baru No.46A<br/>Rawamangun Jakarta Timur</b></p>
        <a className="gpBtn gpBtnBlue" href={maps} target="_blank" rel="noreferrer"><MapPin size={18}/> Buka di Google Maps</a>
      </div>
      <div className="gpMapCard">
        <div className="mapGrid"></div><div className="mapPin"><MapPin fill="currentColor"/><b>Ganjar Printing</b><small>Jl. Balai Pustaka baru No.46A</small></div>
        <a href={maps} target="_blank" rel="noreferrer">Lihat Peta Lebih Besar ↗</a>
      </div>
      <div className="gpContactQuick">
        <h2>Hubungi Kami</h2>
        <a href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"><MessageCircle/><span><b>WhatsApp</b><small>Chat langsung dengan kami</small></span></a>
        <div><Clock3/><span><b>Jam Operasional</b><small>Senin - Sabtu 08.00 - 20.00<br/>Minggu 09.00 - 16.00</small></span></div>
        <a className="gpWaCircle" href={`https://wa.me/${wa}`} target="_blank" rel="noreferrer"><MessageCircle size={26}/><span>Chat<br/>Sekarang</span></a>
      </div>
    </div></section>

    <footer className="gpFooter"><div className="container"><div className="gpFooterBrand"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><div><b>Ganjar Printing</b><small>Printing dibuat lebih mudah.</small></div></div><span>© 2026 Ganjar Printing</span></div></footer>
  </main>
}
