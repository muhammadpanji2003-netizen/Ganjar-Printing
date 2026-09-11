'use client';

import Link from 'next/link';
import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, Mail, MessageCircle, Phone } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';
import { getHeroSlides } from '@/lib/store';
import type { HeroSlide } from '@/lib/types';

const fallbackSlides: HeroSlide[] = [
  {
    id:'fallback-1', title:'Cetak Berkualitas untuk Setiap Langkah Anda',
    description:'Dari desain hingga hasil cetak, semua dalam satu tempat dengan kualitas terbaik dan harga bersahabat.',
    image:'/categories/business-card.webp', active:true, sortOrder:1
  },
  {
    id:'fallback-2', title:'Bikin Promosi Lebih Terlihat dan Berkesan',
    description:'Banner, poster, dan media promosi dicetak rapi untuk membantu bisnis Anda tampil lebih profesional.',
    image:'/categories/banner.webp', active:true, sortOrder:2
  },
  {
    id:'fallback-3', title:'Ide Anda, Kami Bantu Jadi Cetakan Nyata',
    description:'Konsultasikan kebutuhan cetak personal, usaha, sekolah, dan acara dengan pemesanan mudah melalui WhatsApp.',
    image:'/categories/brochure.webp', active:true, sortOrder:3
  }
];

export default function HomeHero(){
  const [index,setIndex]=useState(0);
  const [remoteSlides,setRemoteSlides]=useState<HeroSlide[]>([]);
  const slides=useMemo(()=>{
    const active=remoteSlides.filter(s=>s.active!==false).sort((a,b)=>(a.sortOrder??0)-(b.sortOrder??0));
    return active.length ? active : fallbackSlides;
  },[remoteSlides]);

  useEffect(()=>{ getHeroSlides().then(setRemoteSlides).catch(()=>{}); },[]);
  useEffect(()=>{ setIndex(0); },[slides.length]);
  useEffect(()=>{
    if(slides.length<=1) return;
    const t=setInterval(()=>setIndex(i=>(i+1)%slides.length),6500);
    return ()=>clearInterval(t);
  },[slides.length]);

  const go=(n:number)=>setIndex((n+slides.length)%slides.length);
  const s=slides[index] || fallbackSlides[0];

  return <section className="v19HeroWrap v10HeroWrap v103HeroWrap">
    <div className="v10HeroShell">
      <div className="v19HeroCard v10HeroCard v103HeroCard">
        {slides.length>1&&<button className="v19Arrow left" onClick={()=>go(index-1)} aria-label="Slide sebelumnya"><ChevronLeft/></button>}
        <div className="v19HeroCopy v10HeroCopy v103HeroCopy">
          <div className="v101HeroBrand"><img src="/ganjar-logo.png" alt="Ganjar Printing"/></div>
          <div className="v19Eyebrow">GANJAR PRINTING RAWAMANGUN</div>
          <h1>{s.title}</h1>
          {s.description&&<p>{s.description}</p>}
          <div className="v19HeroActions">
            <a className="v19Primary" href={whatsappUrl('Halo Ganjar Printing, saya ingin bertanya dan konsultasi kebutuhan cetak.')} target="_blank" rel="noreferrer"><MessageCircle/>Tanya via WhatsApp</a>
            <Link className="v19Secondary" href="/katalog">Lihat Produk</Link>
          </div>
          <div className="v101HeroContacts" aria-label="Kontak Ganjar Printing">
            <a href="tel:+6281240322071"><Phone/><span><small>No. WhatsApp</small><b>0812-4032-2071</b></span></a>
            <a href="mailto:ganjarprinting26@gmail.com"><Mail/><span><small>Email</small><b>ganjarprinting26@gmail.com</b></span></a>
          </div>
          <div className="v19HeroTrust"><span>◷ Proses Cepat</span><span>♢ Kualitas Terjamin</span><span>⌁ Harga Bersahabat</span><span>♡ Pelayanan Responsif</span></div>
        </div>

        <div className="v103HeroVisual">
          <img key={`${s.id}-${index}`} src={s.image} alt={s.title || 'Slide Ganjar Printing'}/>
        </div>

        {slides.length>1&&<button className="v19Arrow right" onClick={()=>go(index+1)} aria-label="Slide berikutnya"><ChevronRight/></button>}
        {slides.length>1&&<div className="v19Dots">{slides.map((slide,i)=><button key={slide.id} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Buka slide ${i+1}`}></button>)}</div>}
      </div>
    </div>
  </section>
}
