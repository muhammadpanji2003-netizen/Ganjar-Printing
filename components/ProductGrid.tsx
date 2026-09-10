'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { MessageCircle } from 'lucide-react';
import { getProducts } from '@/lib/store';
import { Product } from '@/lib/types';

const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6285311454581';
export default function ProductGrid({limit}:{limit?:number}){
  const [products,setProducts]=useState<Product[]>([]); const [cat,setCat]=useState('Semua');
  useEffect(()=>{getProducts().then(p=>setProducts(p.filter(x=>x.active!==false)))},[]);
  const cats=['Semua',...Array.from(new Set(products.map(p=>p.category)))];
  const shown=useMemo(()=>{const p=cat==='Semua'?products:products.filter(x=>x.category===cat);return limit?p.slice(0,limit):p},[products,cat,limit]);
  return <><div className="chips" style={{marginBottom:18}}>{cats.map(c=><button key={c} className={`chip ${cat===c?'active':''}`} onClick={()=>setCat(c)}>{c}</button>)}</div><div className="grid">{shown.map(p=><article className="card" key={p.id}><div className="cardImg" style={{backgroundImage:`url(${p.image})`}}/><div className="cardBody"><div className="tag">{p.category}</div><h3>{p.name}</h3><div className="price">Rp{p.price.toLocaleString('id-ID')} <small>{p.unit}</small></div><div className="cardActions"><Link className="btn primary" href={`/produk/${p.slug}`} style={{flex:1}}>Lihat & Pesan</Link><a className="btn ghost" aria-label="WhatsApp" href={`https://wa.me/${wa}?text=${encodeURIComponent(`Halo, saya ingin bertanya tentang ${p.name}`)}`}><MessageCircle size={18}/></a></div></div></article>)}</div></>
}
