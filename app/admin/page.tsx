'use client';

import { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import {
  Boxes, CheckCircle2, ChevronRight, CircleDollarSign, Eye, ImagePlus,
  Images, LayoutDashboard, LogOut, Menu, MessageCircle, PackagePlus, Pencil,
  Search, ShoppingBag, Store, Trash2, X
} from 'lucide-react';
import {
  deleteHeroSlide, deleteProduct, getHeroSlides, getOrders, getProducts, isSupabaseConfigured,
  saveHeroSlide, saveProduct, updateOrderStatus, uploadHeroImage, uploadProductImage
} from '@/lib/store';
import { supabase } from '@/lib/supabase';
import { HeroSlide, Order, Product } from '@/lib/types';
import { isCurrentUserAdmin } from '@/lib/admin';

const emptyProduct: Product = {
  id:'', slug:'', name:'', category:'Banner', description:'', price:0,
  unit:'/pcs', image:'', featured:false, active:true, options:[]
};
const emptySlide:HeroSlide={id:'',title:'',description:'',image:'',active:true,sortOrder:1};
const rupiah = (n:number) => `Rp${n.toLocaleString('id-ID')}`;
const slugify = (s:string) => s.toLowerCase().trim().replace(/[^a-z0-9]+/g,'-').replace(/^-|-$/g,'');

export default function AdminPage(){
  const [products,setProducts] = useState<Product[]>([]);
  const [orders,setOrders] = useState<Order[]>([]);
  const [slides,setSlides] = useState<HeroSlide[]>([]);
  const [slideForm,setSlideForm] = useState<HeroSlide>(emptySlide);
  const [editingSlide,setEditingSlide] = useState(false);
  const [slideError,setSlideError] = useState('');
  const [form,setForm] = useState<Product>(emptyProduct);
  const [editing,setEditing] = useState(false);
  const [busy,setBusy] = useState(false);
  const [query,setQuery] = useState('');
  const [menuOpen,setMenuOpen] = useState(false);
  const [sessionReady,setSessionReady] = useState(!isSupabaseConfigured);
  const [loggedIn,setLoggedIn] = useState(!isSupabaseConfigured);
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const [authError,setAuthError] = useState('');
  const [adminChecked,setAdminChecked] = useState(false);

  async function load(){
    const [p,o,h] = await Promise.all([getProducts(),getOrders(),getHeroSlides()]);
    setProducts(p); setOrders(o); setSlides(h);
  }

  useEffect(()=>{(async()=>{
    if(!supabase){ setSessionReady(true); setLoggedIn(false); setAdminChecked(true); return; }
    const {data}=await supabase.auth.getSession();
    if(data.session){
      const ok=await isCurrentUserAdmin();
      setLoggedIn(ok); setAdminChecked(true);
      if(ok) await load(); else await supabase.auth.signOut();
    } else { setLoggedIn(false); setAdminChecked(true); }
    setSessionReady(true);
  })()},[]);

  const filtered = useMemo(()=>products.filter(p=>
    `${p.name} ${p.category}`.toLowerCase().includes(query.toLowerCase())
  ),[products,query]);

  async function login(e:React.FormEvent){
    e.preventDefault(); setAuthError('');
    if(!supabase) return;
    const {error}=await supabase.auth.signInWithPassword({email,password});
    if(error){setAuthError('Email atau password belum benar.');return;}
    const ok=await isCurrentUserAdmin();
    if(!ok){ await supabase.auth.signOut(); setAuthError('Akun berhasil masuk, tetapi belum terdaftar sebagai admin. Jalankan SUPABASE-V16-UPDATE.sql satu kali di Supabase lalu coba lagi.'); return; }
    setLoggedIn(true); setAdminChecked(true); await load();
  }
  async function logout(){ if(supabase) await supabase.auth.signOut(); setLoggedIn(false); }
  async function submit(e:React.FormEvent){
    e.preventDefault(); setBusy(true);
    try{
      const product={...form,id:form.id||crypto.randomUUID(),slug:form.slug||slugify(form.name)};
      await saveProduct(product); setForm(emptyProduct); setEditing(false); await load();
    } finally {setBusy(false)}
  }
  async function photo(file?:File){
    if(!file)return; setBusy(true);
    try{const url=await uploadProductImage(file);setForm(f=>({...f,image:url}));}
    finally{setBusy(false)}
  }
  function editProduct(p:Product){setEditing(true);setForm(p);document.getElementById('editor')?.scrollIntoView({behavior:'smooth'});}
  async function toggleActive(p:Product){await saveProduct({...p,active:p.active===false});await load();}

  async function heroPhoto(file?:File){
    if(!file)return; setBusy(true); setSlideError('');
    try{const url=await uploadHeroImage(file);setSlideForm(f=>({...f,image:url}));}
    catch{setSlideError('Upload slide gagal. Pastikan SUPABASE-V103-UPDATE.sql sudah dijalankan.');}
    finally{setBusy(false)}
  }
  async function submitSlide(e:React.FormEvent){
    e.preventDefault(); setBusy(true); setSlideError('');
    try{
      const slide={...slideForm,id:slideForm.id||crypto.randomUUID(),sortOrder:Number(slideForm.sortOrder||1)};
      await saveHeroSlide(slide); setSlideForm(emptySlide); setEditingSlide(false); await load();
    }catch{setSlideError('Slide belum bisa disimpan. Jalankan SUPABASE-V103-UPDATE.sql satu kali di Supabase.');}
    finally{setBusy(false)}
  }
  function editSlide(s:HeroSlide){setEditingSlide(true);setSlideForm(s);document.getElementById('hero-editor')?.scrollIntoView({behavior:'smooth'});}
  async function toggleSlide(s:HeroSlide){try{await saveHeroSlide({...s,active:s.active===false});await load();}catch{setSlideError('Gagal mengubah status slide. Pastikan update Supabase V10.3 sudah dijalankan.');}}

  if(!sessionReady || !adminChecked) return <main className="adminLoading">Memuat dashboard…</main>;
  if(!supabase) return <main className="adminLoginPage"><div className="adminLoginCard"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><p className="eyebrow2">ADMIN GANJAR PRINTING</p><h1>Admin belum diaktifkan</h1><p>Hubungkan project ke Supabase terlebih dahulu. Setelah itu, hanya akun yang ditetapkan sebagai admin yang dapat masuk ke dashboard.</p><Link href="/" className="adminPrimary">Kembali ke website</Link></div></main>;
  if(!loggedIn) return <main className="adminLoginPage"><div className="adminLoginCard"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><p className="eyebrow2">ADMIN GANJAR PRINTING</p><h1>Masuk ke dashboard</h1><p>Gunakan akun admin Ganjar Printing. Pengunjung biasa tidak dapat mengakses dashboard.</p><form onSubmit={login}><label>Email<input type="email" required value={email} onChange={e=>setEmail(e.target.value)}/></label><label>Password<input type="password" required value={password} onChange={e=>setPassword(e.target.value)}/></label>{authError&&<div className="adminAlert">{authError}</div>}<button className="adminPrimary">Masuk</button></form></div></main>;

  const newOrders=orders.filter(o=>o.status==='Pesanan diterima').length;
  const revenue=orders.reduce((s,o)=>s+o.total,0);

  return <main className="adminApp">
    <aside className={`adminSide ${menuOpen?'open':''}`}>
      <div className="adminSideHead"><Link href="/" className="adminLogo"><img src="/ganjar-logo.png" alt="Ganjar Printing"/><span>Ganjar Printing</span></Link><button className="adminClose" onClick={()=>setMenuOpen(false)}><X/></button></div>
      <nav>
        <a href="#dashboard"><LayoutDashboard/>Dashboard</a>
        <a href="#produk"><Boxes/>Katalog Produk</a>
        <a href="#slider"><Images/>Hero Slider</a>
        <a href="#pesanan"><ShoppingBag/>Pesanan</a>
        <Link href="/" target="_blank"><Eye/>Lihat Website</Link>
      </nav>
      <div className="adminSideFoot"><div><Store/><span><b>Admin Online</b><small>Supabase aktif & terlindungi</small></span></div>{isSupabaseConfigured&&<button onClick={logout}><LogOut/>Keluar</button>}</div>
    </aside>

    <section className="adminContent">
      <header className="adminHeader"><button className="adminMenu" onClick={()=>setMenuOpen(true)}><Menu/></button><div><small>Dashboard Admin</small><h1>Ganjar Printing</h1></div><Link className="adminView" href="/" target="_blank">Lihat Website <ChevronRight/></Link></header>


      <section id="dashboard" className="adminSection">
        <div className="adminTitle"><div><span>RINGKASAN</span><h2>Hari ini di toko</h2></div></div>
        <div className="adminStats">
          <article><div className="statIcon"><Boxes/></div><span>Produk aktif</span><b>{products.filter(p=>p.active!==false).length}</b></article>
          <article><div className="statIcon"><ShoppingBag/></div><span>Total pesanan</span><b>{orders.length}</b></article>
          <article><div className="statIcon"><CheckCircle2/></div><span>Pesanan baru</span><b>{newOrders}</b></article>
          <article><div className="statIcon"><CircleDollarSign/></div><span>Omzet tercatat</span><b className="money">{rupiah(revenue)}</b></article>
        </div>
      </section>

      <section id="produk" className="adminSection">
        <div className="adminTitle"><div><span>KATALOG</span><h2>Kelola produk</h2><p>Tambah, ubah harga, foto, kategori, dan status tampil produk.</p></div><button className="adminPrimary small" onClick={()=>{setEditing(false);setForm(emptyProduct);document.getElementById('editor')?.scrollIntoView({behavior:'smooth'})}}><PackagePlus/>Tambah Produk</button></div>

        <div className="adminProductLayout">
          <div className="adminCatalogPanel">
            <div className="adminCatalogTop"><div className="adminSearch"><Search/><input placeholder="Cari produk atau kategori…" value={query} onChange={e=>setQuery(e.target.value)}/></div><span>{filtered.length} produk</span></div>
            <div className="adminProductList">{filtered.map(p=><article key={p.id} className="adminProductRow">
              <div className="adminProductThumb">{p.image?<img src={p.image} alt=""/>:<ImagePlus/>}</div>
              <div className="adminProductInfo"><div className="adminProductMeta"><span>{p.category}</span>{p.featured&&<em>Unggulan</em>}</div><h3>{p.name}</h3><p>{rupiah(p.price)} <small>{p.unit}</small></p></div>
              <button className={`adminStatus ${p.active===false?'off':''}`} onClick={()=>toggleActive(p)}>{p.active===false?'Disembunyikan':'Tampil'}</button>
              <div className="adminRowActions"><button onClick={()=>editProduct(p)} title="Edit"><Pencil/></button><button onClick={async()=>{if(confirm(`Hapus ${p.name}?`)){await deleteProduct(p.id);await load();}}} title="Hapus"><Trash2/></button></div>
            </article>)}{filtered.length===0&&<div className="adminEmpty">Produk tidak ditemukan.</div>}</div>
          </div>

          <div id="editor" className="adminEditor">
            <div className="adminEditorHead"><div><span>{editing?'EDIT PRODUK':'PRODUK BARU'}</span><h3>{editing?'Ubah informasi produk':'Tambah ke katalog'}</h3></div>{editing&&<button onClick={()=>{setEditing(false);setForm(emptyProduct)}}><X/></button>}</div>
            <form onSubmit={submit}>
              <label className="adminUpload">{form.image?<img src={form.image} alt="Preview produk"/>:<><ImagePlus/><b>Tambah foto produk</b><small>Bisa pilih langsung dari galeri HP</small></>}<input type="file" accept="image/*" onChange={e=>photo(e.target.files?.[0])}/></label>
              <label>Nama produk<input required placeholder="Contoh: Banner Flexi 280" value={form.name} onChange={e=>setForm({...form,name:e.target.value})}/></label>
              <div className="adminTwo"><label>Kategori<input placeholder="Banner" value={form.category} onChange={e=>setForm({...form,category:e.target.value})}/></label><label>Satuan<input placeholder="/m²" value={form.unit} onChange={e=>setForm({...form,unit:e.target.value})}/></label></div>
              <label>Harga mulai<input type="number" min="0" required value={form.price||''} placeholder="18000" onChange={e=>setForm({...form,price:Number(e.target.value)})}/></label>
              <label>Deskripsi<textarea rows={4} placeholder="Jelaskan bahan, kegunaan, atau estimasi pengerjaan…" value={form.description} onChange={e=>setForm({...form,description:e.target.value})}/></label>
              <label>Pilihan / variasi<input placeholder="Flexi 280, Flexi 340, Flexi 440" value={(form.options||[]).join(', ')} onChange={e=>setForm({...form,options:e.target.value.split(',').map(x=>x.trim()).filter(Boolean)})}/><small>Pisahkan setiap pilihan dengan koma.</small></label>
              <div className="adminChecks"><label><input type="checkbox" checked={form.featured||false} onChange={e=>setForm({...form,featured:e.target.checked})}/>Produk unggulan</label><label><input type="checkbox" checked={form.active!==false} onChange={e=>setForm({...form,active:e.target.checked})}/>Tampilkan di katalog</label></div>
              <button className="adminPrimary" disabled={busy}>{busy?'Menyimpan…':editing?'Simpan Perubahan':'Publish Produk'}</button>
              {editing&&<button type="button" className="adminSecondary" onClick={()=>{setEditing(false);setForm(emptyProduct)}}>Batal</button>}
            </form>
          </div>
        </div>
      </section>


      <section id="slider" className="adminSection">
        <div className="adminTitle"><div><span>HERO SLIDER</span><h2>Kelola slide beranda</h2><p>Upload gambar dari HP/laptop. Gambar akan membesar di desktop dan tetap utuh tanpa terpotong di HP.</p></div><button className="adminPrimary small" onClick={()=>{setEditingSlide(false);setSlideForm({...emptySlide,sortOrder:slides.length+1});document.getElementById('hero-editor')?.scrollIntoView({behavior:'smooth'})}}><ImagePlus/>Tambah Slide</button></div>
        {slideError&&<div className="adminAlert">{slideError}</div>}
        <div className="adminProductLayout">
          <div className="adminCatalogPanel">
            <div className="adminCatalogTop"><b>{slides.length} slide</b><span>Urutan kecil tampil lebih dulu</span></div>
            <div className="adminProductList">{[...slides].sort((a,b)=>(a.sortOrder??0)-(b.sortOrder??0)).map(s=><article key={s.id} className="adminProductRow">
              <div className="adminHeroThumb">{s.image?<img src={s.image} alt=""/>:<ImagePlus/>}</div>
              <div className="adminProductInfo"><div className="adminProductMeta"><span>Urutan {s.sortOrder||0}</span></div><h3>{s.title||'Tanpa judul'}</h3><p>{s.description||'Tidak ada deskripsi'}</p></div>
              <button className={`adminStatus ${s.active===false?'off':''}`} onClick={()=>toggleSlide(s)}>{s.active===false?'Nonaktif':'Aktif'}</button>
              <div className="adminRowActions"><button onClick={()=>editSlide(s)} title="Edit"><Pencil/></button><button onClick={async()=>{if(confirm(`Hapus slide ${s.title||''}?`)){try{await deleteHeroSlide(s.id);await load()}catch{setSlideError('Slide gagal dihapus.')}}}} title="Hapus"><Trash2/></button></div>
            </article>)}{slides.length===0&&<div className="adminEmpty">Belum ada slide dari admin. Website sementara memakai slide bawaan V10.2.</div>}</div>
          </div>
          <div id="hero-editor" className="adminEditor">
            <div className="adminEditorHead"><div><span>{editingSlide?'EDIT SLIDE':'SLIDE BARU'}</span><h3>{editingSlide?'Ubah slide beranda':'Tambah slide beranda'}</h3></div>{editingSlide&&<button onClick={()=>{setEditingSlide(false);setSlideForm(emptySlide)}}><X/></button>}</div>
            <form onSubmit={submitSlide}>
              <label className="adminUpload adminHeroUpload">{slideForm.image?<img src={slideForm.image} alt="Preview slide"/>:<><ImagePlus/><b>Upload gambar slide</b><small>Disarankan 1600 × 650 px. JPG/PNG/WebP.</small></>}<input type="file" accept="image/*" onChange={e=>heroPhoto(e.target.files?.[0])}/></label>
              <label>Judul slide<input required placeholder="Contoh: Cetak Berkualitas untuk Bisnis Anda" value={slideForm.title} onChange={e=>setSlideForm({...slideForm,title:e.target.value})}/></label>
              <label>Deskripsi<textarea rows={3} placeholder="Teks singkat yang tampil di slide…" value={slideForm.description||''} onChange={e=>setSlideForm({...slideForm,description:e.target.value})}/></label>
              <label>Urutan<input type="number" min="1" value={slideForm.sortOrder||1} onChange={e=>setSlideForm({...slideForm,sortOrder:Number(e.target.value)})}/></label>
              <div className="adminChecks"><label><input type="checkbox" checked={slideForm.active!==false} onChange={e=>setSlideForm({...slideForm,active:e.target.checked})}/>Tampilkan slide</label></div>
              <p className="adminHint">Tombol <b>Tanya via WhatsApp</b> tetap otomatis tersedia pada setiap slide dan tidak perlu diisi ulang.</p>
              <button className="adminPrimary" disabled={busy||!slideForm.image}>{busy?'Menyimpan…':editingSlide?'Simpan Perubahan':'Publish Slide'}</button>
              {editingSlide&&<button type="button" className="adminSecondary" onClick={()=>{setEditingSlide(false);setSlideForm(emptySlide)}}>Batal</button>}
            </form>
          </div>
        </div>
      </section>

      <section id="pesanan" className="adminSection">
        <div className="adminTitle"><div><span>PESANAN</span><h2>Pesanan masuk</h2><p>Ubah status agar pelanggan bisa memantau progres cetaknya.</p></div></div>
        <div className="adminOrders">{orders.length===0?<div className="adminEmpty">Belum ada pesanan.</div>:orders.map(o=><article key={o.id}><div><span className="orderCode">{o.code}</span><h3>{o.customerName}</h3><a href={`https://wa.me/${o.whatsapp.replace(/\D/g,'')}`} target="_blank"><MessageCircle/> {o.whatsapp}</a></div><div><small>Total</small><b>{rupiah(o.total)}</b>{o.paymentMethod&&<small className="adminPay">{o.paymentMethod}</small>}</div><select value={o.status} onChange={async e=>{await updateOrderStatus(o.id,e.target.value);await load()}}><option>Pesanan diterima</option><option>File diperiksa</option><option>Menunggu pembayaran</option><option>Diproses</option><option>Finishing</option><option>Siap diambil/dikirim</option><option>Selesai</option></select></article>)}</div>
      </section>
    </section>
  </main>;
}
