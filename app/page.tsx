import Link from 'next/link';
import ProductGrid from '@/components/ProductGrid';
import { ArrowRight, BadgeCheck, Clock3, MessageCircle, ShoppingBag, Truck } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

export default function Home(){
  return <main className="homeV16">
    <section className="v16Hero">
      <div className="container v16HeroInner">
        <div className="v16Copy">
          <div className="v16Eyebrow"><span></span>SOLUSI CETAK ANDA</div>
          <h1>Ide Anda,<br/><span>Kami Cetak.</span></h1>
          <p>Ganjar Printing membantu kebutuhan cetak personal dan bisnis dengan proses yang sederhana, cepat, dan transparan.</p>
          <div className="v16Actions">
            <Link href="/katalog" className="v16Primary"><ShoppingBag/>Lihat Katalog <ArrowRight/></Link>
            <a href={whatsappUrl('Halo Ganjar Printing, saya ingin bertanya tentang layanan printing.')} className="v16Secondary" target="_blank" rel="noreferrer"><MessageCircle/>Tanya via WhatsApp</a>
          </div>
          <div className="v16Trust">
            <div><BadgeCheck/><span><b>Hasil Berkualitas</b><small>Rapi dan presisi</small></span></div>
            <div><Clock3/><span><b>Proses Cepat</b><small>Efisien dan jelas</small></span></div>
            <div><Truck/><span><b>Ambil / Kirim</b><small>Mudah dan fleksibel</small></span></div>
          </div>
          <div className="v16Dots"><i></i><i></i><i></i></div>
        </div>

        <div className="v16Visual" aria-label="Contoh hasil cetak Ganjar Printing">
          <div className="v16Watermark">G</div>
          <div className="v16Tagline">Cetak<br/>Lebih Mudah</div>
          <div className="v16BusinessCard v16CardBack"><img src="/ganjar-logo.png" alt=""/></div>
          <div className="v16BusinessCard v16CardFront"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><small>Mudah. Cepat. Rapi.</small></div>
          <div className="v16Flyer"><strong>Good<br/>Print<br/>Great<br/>Ideas.</strong><span></span><small>GANJAR PRINTING</small></div>
          <div className="v16Leaf"></div>
          <div className="v16Scroll"><span>↓</span><small>SCROLL UNTUK MULAI</small></div>
        </div>
      </div>
    </section>

    <section className="v16CatalogIntro">
      <div className="container">
        <div className="eSectionHead"><div><span>PRODUK KAMI</span><h2>Katalog Produk</h2><p>Pilih kebutuhan cetak Anda, lalu tekan <b>Pesan</b> untuk melihat detail.</p></div><Link href="/katalog">Lihat semua <ArrowRight/></Link></div>
        <ProductGrid limit={6}/>
      </div>
    </section>

    <section id="tentang" className="v16About"><div className="container v16AboutInner">
      <div><span>TENTANG GANJAR PRINTING</span><h2>Cetak yang sederhana, jelas, dan mudah dipesan.</h2></div>
      <p>Kami melayani kebutuhan printing untuk usaha, sekolah, acara, promosi, dan kebutuhan personal. Konsultasi dapat dilakukan langsung melalui WhatsApp atau datang ke toko di Rawamangun.</p>
    </div></section>
  </main>
}
