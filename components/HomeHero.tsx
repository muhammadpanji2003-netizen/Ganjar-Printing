'use client';

import { useEffect, useMemo, useState } from 'react';
import { ChevronLeft, ChevronRight, MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';
import { getHeroSlides } from '@/lib/store';
import type { HeroSlide } from '@/lib/types';

const fallbackSlides: HeroSlide[] = [
  {
    id:'fallback-1', title:'Ganjar Printing', description:'',
    image:'/categories/business-card.webp', active:true, sortOrder:1
  },
  {
    id:'fallback-2', title:'Ganjar Printing', description:'',
    image:'/categories/banner.webp', active:true, sortOrder:2
  },
  {
    id:'fallback-3', title:'Ganjar Printing', description:'',
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

  return <section className="v19HeroWrap v10HeroWrap v103HeroWrap v1033FullHeroWrap">
    <div className="v10HeroShell v1033FullHeroShell">
      <div className="v19HeroCard v10HeroCard v103HeroCard v1033FullHeroCard">
        <img
          key={`${s.id}-${index}`}
          className="v1033FullHeroImage"
          src={s.image}
          alt={s.title || 'Slide Ganjar Printing'}
        />

        <a
          className="v1033HeroWhatsApp"
          href={whatsappUrl('Halo Ganjar Printing, saya ingin bertanya dan konsultasi kebutuhan cetak.')}
          target="_blank"
          rel="noreferrer"
        >
          <MessageCircle/>
          <span>Tanya via WhatsApp</span>
        </a>

        {slides.length>1&&<button className="v19Arrow left v1033FullArrow" onClick={()=>go(index-1)} aria-label="Slide sebelumnya"><ChevronLeft/></button>}
        {slides.length>1&&<button className="v19Arrow right v1033FullArrow" onClick={()=>go(index+1)} aria-label="Slide berikutnya"><ChevronRight/></button>}
        {slides.length>1&&<div className="v19Dots v1033FullDots">{slides.map((slide,i)=><button key={slide.id} className={i===index?'active':''} onClick={()=>setIndex(i)} aria-label={`Buka slide ${i+1}`}></button>)}</div>}
      </div>
    </div>
  </section>
}
