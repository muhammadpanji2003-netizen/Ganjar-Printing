'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getHomeCategories } from '@/lib/store';
import { HomeCategory } from '@/lib/types';

const fallbackCategories: HomeCategory[] = [
  {id:'default-banner',name:'Banner',image:'/categories/banner.webp',href:'/katalog',active:true,sortOrder:1},
  {id:'default-spanduk',name:'Spanduk',image:'/categories/banner.webp',href:'/katalog',active:true,sortOrder:2},
  {id:'default-stiker',name:'Stiker',image:'/categories/sticker.webp',href:'/katalog',active:true,sortOrder:3},
  {id:'default-kartu-nama',name:'Kartu Nama',image:'/categories/business-card.webp',href:'/katalog',active:true,sortOrder:4},
  {id:'default-brosur',name:'Brosur',image:'/categories/brochure.webp',href:'/katalog',active:true,sortOrder:5},
  {id:'default-poster',name:'Poster',image:'/categories/poster.webp',href:'/katalog',active:true,sortOrder:6},
  {id:'default-undangan',name:'Undangan',image:'/categories/flyer.webp',href:'/katalog',active:true,sortOrder:7},
  {id:'default-merchandise',name:'Merchandise',image:'/categories/other.webp',href:'/katalog',active:true,sortOrder:8},
  {id:'default-lainnya',name:'Lainnya',image:'/categories/menu.webp',href:'/katalog',active:true,sortOrder:9}
];

export default function HomeCategories(){
  const [categories,setCategories]=useState<HomeCategory[]>(fallbackCategories);
  useEffect(()=>{(async()=>{
    const list=await getHomeCategories();
    if(list.length) setCategories(list.filter(x=>x.active!==false).sort((a,b)=>(a.sortOrder??0)-(b.sortOrder??0)));
  })()},[]);

  return <section className="v19Categories"><div className="container"><div className="v19CategoryStrip">
    {categories.map((c,i)=><Link href={c.href||'/katalog'} key={c.id} className="v102CategoryCard"><span className={`catTone tone${i%4}`}><img src={c.image} alt={c.name}/></span><small>{c.name}</small></Link>)}
  </div></div></section>;
}
