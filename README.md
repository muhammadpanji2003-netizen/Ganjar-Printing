# Ganjar Printing Web v1.2

Website katalog dan pemesanan jasa printing berbasis Next.js, siap deploy ke Vercel.

## Yang baru di v1.2
- UI pelanggan dibuat lebih simple dan elegan.
- Katalog lebih bersih seperti e-commerce.
- Dashboard admin dioptimalkan untuk HP.
- Admin bisa tambah/edit/hapus produk, upload foto, ubah harga, kategori, variasi, produk unggulan, dan tampil/sembunyikan produk.
- Admin bisa mengubah status pesanan.
- Mode demo tetap jalan tanpa Supabase.
- Siap disambungkan ke Supabase agar data tersimpan online.

## Environment Variables
Untuk mode demo cukup:

```env
NEXT_PUBLIC_STORE_NAME=Ganjar Printing
NEXT_PUBLIC_WHATSAPP=6285311454581
NEXT_PUBLIC_MAPS_URL=https://www.google.com/maps/search/?api=1&query=Jl.%20Balai%20Pustaka%20Baru%20No.46A%20Rawamangun%20Jakarta%20Timur
```

Untuk mode online tambahkan:

```env
NEXT_PUBLIC_SUPABASE_URL=...
NEXT_PUBLIC_SUPABASE_ANON_KEY=...
```

Jalankan `supabase.sql` pada SQL Editor Supabase sebelum memakai database online.

## Admin
Buka `/admin`.
- Tanpa Supabase: langsung masuk mode demo.
- Dengan Supabase: login menggunakan akun email/password Supabase Authentication.
