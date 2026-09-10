'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';

const slides = [
  {
    eyebrow: 'CETAK LEBIH DARI SEKADAR KERTAS',
    title: <>Ide Besar<br/>Dimulai dari<br/><span>Cetakan yang Tepat</span></>,
    desc: 'Percetakan berkualitas dengan hasil tajam, warna akurat, dan pengerjaan cepat.',
    theme: 'light'
  },
  {
    eyebrow: 'SEMUA KEBUTUHAN CETAK',
    title: <>Berbagai Produk Cetak<br/><span>dalam Satu Tempat</span></>,
    desc: 'Banner, spanduk, stiker, kartu nama, brosur, poster, undangan, dan kebutuhan lainnya.',
    theme: 'blue'
  },
  {
    eyebrow: 'GANJAR PRINTING RAWAMANGUN',
    title: <>Ide Anda Lebih Bermakna<br/><span>di Setiap Cetakan</span></>,
    desc: 'Konsultasikan kebutuhan Anda dan pesan dengan mudah langsung melalui WhatsApp.',
    theme: 'soft'
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
  return <section className="v19HeroWrap">
    <div className="container">
      <div className={`v19HeroCard theme-${s.theme}`}>
        <button className="v19Arrow left" onClick={()=>go(index-1)} aria-label="Slide sebelumnya"><ChevronLeft/></button>
        <div className="v19HeroCopy">
          <div className="v19Eyebrow">{s.eyebrow}</div>
          <h1>{s.title}</h1>
          <p>{s.desc}</p>
          <div className="v19HeroActions">
            <a className="v19Primary" href={whatsappUrl('Halo Ganjar Printing, saya ingin konsultasi kebutuhan cetak.')} target="_blank" rel="noreferrer"><MessageCircle/>Pesan Sekarang</a>
            <Link className="v19Secondary" href="/katalog">Lihat Produk</Link>
          </div>
          <div className="v19HeroTrust"><span>◷ Proses Cepat</span><span>♢ Kualitas Terjamin</span><span>⌁ Harga Bersahabat</span></div>
        </div>
        <div className="v19HeroArt" aria-hidden="true">
          <div className="v19ArtGlow"></div>
          <div className="v19Tote"><img src="/ganjar-logo.png" alt=""/><b>Good<br/>Ideas.<br/>Great<br/>Prints.</b></div>
          <div className="v19BlueCard">IDE ANDA.<br/>KAMI CETAK.</div>
          <div className="v19Stack"><i></i><i></i><i></i><i></i></div>
          <div className="v19MiniCards"><i></i><i></i><i></i></div>
        </div>
        <button className="v19Arrow right" onClick={()=>go(index+1)} aria-label="Slide berikutnya"><ChevronRight/></button>
        <div className="v19Dots">{slides.map((_,i)=><button key={i} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Buka slide ${i+1}`}></button>)}</div>
      </div>
    </div>
  </section>
}
