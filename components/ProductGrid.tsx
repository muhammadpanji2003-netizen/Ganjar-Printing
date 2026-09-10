'use client';
import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { ImageIcon, MessageCircle, ShoppingBag } from 'lucide-react';
import { getProducts } from '@/lib/store';
import { Product } from '@/lib/types';
const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6281240322071';
export default function ProductGrid({limit}:{limit?:number}){
  const [products,setProducts]=useState<Product[]>([]); const [cat,setCat]=useState('Semua');
  useEffect(()=>{getProducts().then(p=>setProducts(p.filter(x=>x.active!==false)))},[]);
  const cats=['Semua',...Array.from(new Set(products.map(p=>p.category)))];
  const shown=useMemo(()=>{const p=cat==='Semua'?products:products.filter(x=>x.category===cat);return limit?p.slice(0,limit):p},[products,cat,limit]);
  return <><div className="catalogFilters">{cats.map(c=><button key={c} className={cat===c?'active':''} onClick={()=>setCat(c)}>{c}</button>)}</div><div className="productGrid">{shown.map(p=><article className="productCard" key={p.id}><Link href={`/produk/${p.slug}`} className="productPhoto">{p.image?<img src={p.image} alt={p.name}/>:<div className="productPlaceholder"><ImageIcon/><span>Ganjar Printing</span></div>}{p.featured&&<span className="featuredBadge">Pilihan</span>}</Link><div className="productBody"><span className="productCategory">{p.category}</span><Link href={`/produk/${p.slug}`}><h3>{p.name}</h3></Link><p>{p.description||'Layanan printing berkualitas dengan proses pemesanan yang mudah.'}</p><div className="productBottom"><div><small>Mulai dari</small><b>Rp{p.price.toLocaleString('id-ID')} <em>{p.unit}</em></b></div><div className="productQuick"><a className="quickWa" href={`https://wa.me/${wa}?text=${encodeURIComponent(`Halo Ganjar Printing, saya ingin bertanya tentang ${p.name}.`)}`} target="_blank" rel="noreferrer" aria-label={`Tanya ${p.name} via WhatsApp`}><MessageCircle/></a><Link className="orderTextBtn" href={`/produk/${p.slug}`}><ShoppingBag/>Pesan</Link></div></div></div></article>)}</div></>;
}
