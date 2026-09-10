import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import HomeHero from '@/components/HomeHero';
import { ArrowRight, BadgeCheck, Clock3, CreditCard, Headphones, MessageCircle, PackageCheck, Tags, Truck } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

const categories = ['Banner','Spanduk','Stiker','Kartu Nama','Brosur','Poster','Undangan','Merchandise','Lainnya'];
const shipping = ['GoSend','GrabExpress','JNE','J&T Express','SiCepat','AnterAja'];
const payments = ['BCA','BRI','BNI','Mandiri','DANA','OVO','GoPay','ShopeePay','Alfamart','Indomaret'];

export default function Home(){
  return <main className="homeV19">
    <HomeHero/>

    <section className="v19Categories"><div className="container"><div className="v19CategoryStrip">
      {categories.map((c,i)=><Link href="/katalog" key={c}><span className={`catTone tone${i%4}`}>{i===8?'≡':'◇'}</span><small>{c}</small></Link>)}
    </div></div></section>

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
      <article><div className="v19LogTitle"><Truck/><div><h3>Pengiriman</h3><p>Pesanan dapat dikirim melalui ekspedisi terpercaya.</p></div></div><div className="v19BrandGrid">{shipping.map(x=><span key={x}>{x}</span>)}</div></article>
      <article><div className="v19LogTitle"><CreditCard/><div><h3>Metode Pembayaran</h3><p>Mudah, aman, dan fleksibel.</p></div></div><div className="v19BrandGrid payments">{payments.map(x=><span key={x}>{x}</span>)}<span>dan lainnya…</span></div></article>
    </div></section>

    <section id="tentang" className="v19About"><div className="container"><div><span>TENTANG GANJAR PRINTING</span><h2>Ide Anda, kami bantu jadi cetakan yang rapi dan bermakna.</h2></div><p>Ganjar Printing melayani kebutuhan printing personal, usaha, sekolah, acara, dan promosi di Rawamangun, Jakarta Timur. Pemesanan dapat dilakukan langsung melalui WhatsApp atau datang ke lokasi kami.</p></div></section>
  </main>
}
