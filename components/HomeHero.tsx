'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

const slides = [
  {
    eyebrow: 'CETAK LEBIH DARI SEKADAR KERTAS',
    title: <>Cetak Berkualitas<br/>untuk Setiap<br/><span>Langkah Anda</span></>,
    desc: 'Dari desain hingga hasil cetak, semua dalam satu tempat dengan kualitas terbaik dan harga bersahabat.',
    theme: 'light',
    mainImage: '/categories/business-card.webp',
    sideImage: '/categories/brochure.webp',
    miniImage: '/categories/sticker.webp',
    label: 'Kartu Nama • Brosur • Stiker'
  },
  {
    eyebrow: 'PROMOSI LEBIH MENONJOL',
    title: <>Bikin Promosi<br/>Lebih Terlihat<br/><span>dan Berkesan</span></>,
    desc: 'Banner, poster, dan media promosi dicetak rapi untuk membantu bisnis Anda tampil lebih profesional.',
    theme: 'blue',
    mainImage: '/categories/banner.webp',
    sideImage: '/categories/poster.webp',
    miniImage: '/categories/flyer.webp',
    label: 'Banner • Poster • Flyer'
  },
  {
    eyebrow: 'GANJAR PRINTING RAWAMANGUN',
    title: <>Ide Anda<br/>Kami Bantu Jadi<br/><span>Cetakan Nyata</span></>,
    desc: 'Konsultasikan kebutuhan cetak personal, usaha, sekolah, dan acara dengan pemesanan mudah melalui WhatsApp.',
    theme: 'soft',
    mainImage: '/categories/brochure.webp',
    sideImage: '/categories/menu.webp',
    miniImage: '/categories/other.webp',
    label: 'Brosur • Menu • Lainnya'
  }
];

export default function HomeHero(){
  const [index,setIndex]=useState(0);
  useEffect(()=>{
    const t=setInterval(()=>setIndex(i=>(i+1)%slides.length),6500);
    return ()=>clearInterval(t);
  },[]);
  const go=(n:number)=>setIndex((n+slides.length)%slides.length);
  const s=slides[index];

  return <section className="v19HeroWrap v10HeroWrap">
    <div className="v10HeroShell">
      <div className={`v19HeroCard v10HeroCard theme-${s.theme}`}>
        <button className="v19Arrow left" onClick={()=>go(index-1)} aria-label="Slide sebelumnya"><ChevronLeft/></button>
        <div className="v19HeroCopy v10HeroCopy">
          <div className="v101HeroBrand">
            <Image src="/ganjar-logo.png" alt="Ganjar Printing" width={170} height={58} priority />
          </div>
          <div className="v19Eyebrow">{s.eyebrow}</div>
          <h1>{s.title}</h1>
          <p>{s.desc}</p>
          <div className="v19HeroActions">
            <a className="v19Primary" href={whatsappUrl('Halo Ganjar Printing, saya ingin konsultasi kebutuhan cetak.')} target="_blank" rel="noreferrer"><MessageCircle/>Pesan Sekarang</a>
            <Link className="v19Secondary" href="/katalog">Lihat Produk</Link>
          </div>
          <div className="v101HeroContacts" aria-label="Kontak Ganjar Printing">
            <a href="tel:+6281240322071"><Phone/><span><small>No. WhatsApp</small><b>0812-4032-2071</b></span></a>
            <a href="mailto:ganjarprinting26@gmail.com"><Mail/><span><small>Email</small><b>ganjarprinting26@gmail.com</b></span></a>
          </div>
          <div className="v19HeroTrust"><span>◷ Proses Cepat</span><span>♢ Kualitas Terjamin</span><span>⌁ Harga Bersahabat</span><span>♡ Pelayanan Responsif</span></div>
        </div>

        <div className="v10HeroVisual" aria-hidden="true">
          <div className="v10VisualGlow"></div>
          <figure className="v10MainVisual"><img key={`main-${index}`} src={s.mainImage} alt=""/></figure>
          <figure className="v10SideVisual"><img key={`side-${index}`} src={s.sideImage} alt=""/></figure>
          <figure className="v10MiniVisual"><img key={`mini-${index}`} src={s.miniImage} alt=""/></figure>
          <div className="v10VisualLabel">{s.label}</div>
        </div>

        <button className="v19Arrow right" onClick={()=>go(index+1)} aria-label="Slide berikutnya"><ChevronRight/></button>
        <div className="v19Dots">{slides.map((_,i)=><button key={i} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Buka slide ${i+1}`}></button>)}</div>
      </div>
    </div>
  </section>
}
