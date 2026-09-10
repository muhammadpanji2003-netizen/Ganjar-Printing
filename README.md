# Ganjar Printing Web V1.3

Website katalog dan pemesanan Ganjar Printing berbasis Next.js, Supabase, dan Vercel.

## Yang baru di V1.3
- Home lebih simple dan elegan.
- Contoh produk lokal sudah disiapkan sehingga tampilan katalog tidak bergantung pada gambar eksternal.
- Admin wajib login Supabase.
- Login saja belum cukup: akun juga harus terdaftar di tabel `admin_users`.
- Policy database dan upload katalog hanya mengizinkan admin.
- Admin dapat tambah/edit/hapus produk, upload foto dari HP, dan mengubah status pesanan.

## Setup Supabase
1. Buat project Supabase.
2. Buka SQL Editor lalu jalankan seluruh isi `supabase.sql`.
3. Buka Authentication > Users dan buat akun admin dengan email dan password Anda.
4. Copy UUID user admin tersebut.
5. Di SQL Editor jalankan:

```sql
insert into public.admin_users(user_id)
values ('UUID-USER-ADMIN-ANDA');
```

6. Buka Project Settings > API dan copy Project URL serta anon/public key.
7. Tambahkan ke Vercel Environment Variables:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
8. Redeploy Vercel.
9. Buka `/admin` lalu login menggunakan akun admin tadi.

## Environment Variables lain
- `NEXT_PUBLIC_STORE_NAME=Ganjar Printing`
- `NEXT_PUBLIC_WHATSAPP=6285311454581`
- `NEXT_PUBLIC_MAPS_URL=...`

## Catatan
Jangan menyimpan password admin di GitHub atau environment variable yang diawali `NEXT_PUBLIC_`.
