# Ganjar Printing Web V1.1

Website pemesanan jasa printing berbasis Next.js yang siap di-push ke GitHub dan deploy ke Vercel.

## Fitur V1

- Home modern dan responsif
- Katalog produk + kategori
- Detail produk + jumlah + catatan spesifikasi
- Upload desain dari HP
- Checkout tanpa wajib akun pembeli
- Kode pesanan otomatis
- Cek status pesanan
- Tombol WhatsApp langsung
- Tombol Google Maps
- Admin dashboard mobile-friendly
- Tambah/edit/hapus katalog dari HP
- Upload foto katalog langsung dari kamera/galeri HP
- Ubah status pesanan
- Supabase database + storage + admin auth
- Mode demo dengan localStorage bila Supabase belum disambungkan

## 1. Jalankan lokal

```bash
npm install
npm run dev
```

Buka `http://localhost:3000`.

## 2. Sambungkan Supabase

1. Buat project baru di Supabase.
2. Buka SQL Editor.
3. Jalankan seluruh isi `supabase.sql`.
4. Buka Authentication > Users dan buat satu akun admin email/password.
5. Copy `.env.example` menjadi `.env.local`.
6. Isi:

```env
NEXT_PUBLIC_SUPABASE_URL=https://PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=ANON_KEY
NEXT_PUBLIC_STORE_NAME=Nama Printing
NEXT_PUBLIC_WHATSAPP=628xxxxxxxxxx
NEXT_PUBLIC_MAPS_URL=https://maps.app.goo.gl/xxxx
```

Admin tersedia di `/admin`.

## 3. Deploy ke GitHub + Vercel

1. Buat repository GitHub baru.
2. Upload seluruh isi folder project ini.
3. Di Vercel pilih **Add New Project** > import repository GitHub tadi.
4. Tambahkan Environment Variables yang sama seperti `.env.local`.
5. Klik Deploy.

Setelah deploy, perubahan katalog/pesanan tidak memerlukan deploy ulang karena datanya tersimpan di Supabase.

## Catatan produksi

Bucket `designs` pada V1 dibuat public agar implementasi sederhana. Sebelum dipakai untuk bisnis dengan dokumen pelanggan sensitif, ubah bucket menjadi private dan gunakan signed URL untuk akses admin.
