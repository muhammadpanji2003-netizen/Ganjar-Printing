'use client';
import { whatsappUrl } from '@/lib/contact';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProducts, uploadDesign } from '@/lib/store';
import { Product, OrderItem } from '@/lib/types';
import { MessageCircle } from 'lucide-react';
const CART_KEY='printing_cart_v1';
export default function ProductDetail({slug}:{slug:string}){
 const [p,setP]=useState<Product|null>(null); const [qty,setQty]=useState(1); const [note,setNote]=useState(''); const [file,setFile]=useState<File|null>(null); const [busy,setBusy]=useState(false); const router=useRouter();
 useEffect(()=>{getProducts().then(ps=>setP(ps.find(x=>x.slug===slug)||null))},[slug]);
 if(!p)return <div className="container section"><p>Memuat produk...</p></div>;
 async function add(){setBusy(true);let designUrl='';try{if(file)designUrl=await uploadDesign(file);const item:OrderItem={productId:p!.id,productName:p!.name,qty,price:p!.price,notes:note,designUrl};const cart:OrderItem[]=JSON.parse(localStorage.getItem(CART_KEY)||'[]');localStorage.setItem(CART_KEY,JSON.stringify([...cart,item]));router.push('/checkout')}finally{setBusy(false)}}
 return <main className="section"><div className="container detail"><div className="detailImg" style={{backgroundImage:`url(${p.image})`}}/><div><div className="tag">{p.category}</div><h1 style={{fontSize:42,letterSpacing:'-.04em',margin:'8px 0'}}>{p.name}</h1><p className="muted">{p.description}</p><div className="price" style={{margin:'20px 0'}}>Rp{p.price.toLocaleString('id-ID')} <small>{p.unit}</small></div>{p.options?.length?<div className="panel" style={{marginBottom:14}}><b>Pilihan tersedia</b><div className="chips" style={{marginTop:12}}>{p.options.map(o=><span className="chip" key={o}>{o}</span>)}</div></div>:null}<div className="form"><div className="field"><label>Jumlah</label><input type="number" min="1" value={qty} onChange={e=>setQty(Math.max(1,Number(e.target.value)))}/></div><div className="field"><label>Catatan spesifikasi</label><textarea rows={3} placeholder="Contoh: ukuran 2 x 1 m, mata ayam tiap sudut" value={note} onChange={e=>setNote(e.target.value)}/></div><div className="field"><label>Upload desain (opsional)</label><input type="file" accept=".pdf,.jpg,.jpeg,.png" onChange={e=>setFile(e.target.files?.[0]||null)}/></div><div className="summary"><div className="muted">Estimasi subtotal</div><div className="price">Rp{(p.price*qty).toLocaleString('id-ID')}</div></div><button className="btn accent" onClick={add} disabled={busy}>{busy?'Memproses...':'Tambah & Lanjut Checkout'}</button><a className="btn ghost" href={whatsappUrl(`Halo, saya ingin bertanya tentang ${p.name}`)}><MessageCircle size={18}/> Tanya via WhatsApp</a></div></div></div></main>
}