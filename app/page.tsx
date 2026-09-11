import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import HomeHero from '@/components/HomeHero';
import HomeCategories from '@/components/HomeCategories';
import { ArrowRight, BadgeCheck, Clock3, CreditCard, Headphones, MessageCircle, PackageCheck, Tags, Truck } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

const shipping = [
  {name:'GoSend', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Gojek%20logo%202022.svg'},
  {name:'GrabExpress', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Grab%20Logo.svg'},
  {name:'JNE', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/New%20Logo%20JNE.png'},
  {name:'J&T Express', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/J%26T%20Express%20logo.svg'},
  {name:'SiCepat', logo:'/brands/sicepat.svg'},
  {name:'AnterAja', logo:'/brands/anteraja.svg'}
];
const payments = [
  {name:'BCA', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bank%20Central%20Asia.svg'},
  {name:'Mandiri', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/Bank%20Mandiri%20logo%202016.svg'},
  {name:'BRI', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/BANK%20BRI%20logo.svg'},
  {name:'GoPay', logo:'https://commons.wikimedia.org/wiki/Special:Redirect/file/GoPay%20logo.svg'}
];

export default function Home(){
  return <main className="homeV19">
    <HomeHero/>

    <HomeCategories/>

    <section className="v19Products"><div className="container">
      <div className="v19SectionHead"><div><h2>Produk Unggulan</h2><p>Pilihan produk favorit dengan kualitas terbaik.</p></div><Link href="/katalog">Lihat Semua <ArrowRight/></Link></div>
      <ProductGrid limit={4}/>
    </div></section>

    <section className="v19Cta"><div className="container"><div className="v19CtaCard">
      <div><h2>Cetak Apa Saja,<br/>Lebih Mudah di Ganjar Printing</h2><p>Satu tempat untuk semua kebutuhan cetak Anda.</p><div className="v19CtaTrust"><span><BadgeCheck/>Desain Dibantu</span><span><Clock3/>Proses Cepat</span><span><PackageCheck/>Kualitas Terjamin</span></div><a href={whatsappUrl('Halo Ganjar Printing, saya ingin konsultasi kebutuhan cetak.')} target="_blank" rel="noreferrer"><MessageCircle/>Pesan via WhatsApp</a></div>
      <div className="v19BagArt"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><b>Print<br/>Your<br/>Ideas</b></div>
    </div></div></section>

    <section className="v19Why"><div className="container"><h2>Kenapa Pilih Ganjar Printing?</h2><div className="v19WhyGrid">
      <article><BadgeCheck/><b>Kualitas Terbaik</b><p>Hasil cetak tajam dan warna akurat.</p></article>
      <article><Clock3/><b>Proses Cepat</b><p>Pengerjaan tepat waktu.</p></article>
      <article><Tags/><b>Harga Bersahabat</b><p>Kualitas terbaik dengan harga terjangkau.</p></article>
      <article><Headphones/><b>Pelayanan Responsif</b><p>Siap membantu kapan saja.</p></article>
    </div></div></section>

    <section className="v19Steps"><div className="container"><h2>Langkah Mudah Order</h2><div className="v19StepGrid">
      <article><span>1</span><b>Pilih Produk</b><p>Pilih produk dan ukuran di katalog kami.</p></article>
      <article><span>2</span><b>Konsultasi</b><p>Chat admin untuk kebutuhan dan desain.</p></article>
      <article><span>3</span><b>Konfirmasi</b><p>Lakukan pembayaran dan approval desain.</p></article>
      <article><span>4</span><b>Produksi & Kirim</b><p>Kami cetak dan kirim pesanan Anda.</p></article>
    </div></div></section>

    <section className="v19Logistics"><div className="container v19LogisticsGrid">
      <article><div className="v19LogTitle"><Truck/><div><h3>Pengiriman</h3><p>Pesanan dapat dikirim melalui ekspedisi terpercaya.</p></div></div><div className="v19BrandGrid">{shipping.map(x=><span key={x.name} className="brandLogoCard"><img src={x.logo} alt={`${x.name} logo`} loading="lazy"/><small>{x.name}</small></span>)}</div></article>
      <article><div className="v19LogTitle"><CreditCard/><div><h3>Metode Pembayaran</h3><p>Mudah, aman, dan fleksibel.</p></div></div><div className="v19BrandGrid payments">{payments.map(x=><span key={x.name} className="brandLogoCard"><img src={x.logo} alt={`${x.name} logo`} loading="lazy"/><small>{x.name}</small></span>)}</div></article>
    </div></section>

    <section id="tentang" className="v19About"><div className="container"><div><span>TENTANG GANJAR PRINTING</span><h2>Ide Anda, kami bantu jadi cetakan yang rapi dan bermakna.</h2></div><p>Ganjar Printing melayani kebutuhan printing personal, usaha, sekolah, acara, dan promosi di Rawamangun, Jakarta Timur. Pemesanan dapat dilakukan langsung melalui WhatsApp atau datang ke lokasi kami.</p></div></section>
  </main>
}
