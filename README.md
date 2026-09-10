# Ganjar Printing Web V1.6

Website pemesanan jasa printing berbasis Next.js + Supabase, siap GitHub dan Vercel.

## Perubahan V1.6
- Home didesain ulang dengan gaya putih, hitam, dan aksen gold yang lebih elegan.
- Hero dibuat mengikuti arah visual referensi pengguna, tetapi tetap berupa komponen web responsif.
- Tombol `Pesan` di katalog diperkecil dan dipastikan tidak terpotong.
- Semua link WhatsApp menormalisasi nomor secara otomatis, walaupun environment variable ditulis memakai spasi/tanda hubung.
- Link WhatsApp menggunakan endpoint `api.whatsapp.com/send` dengan nomor 6281240322071 dan pesan otomatis.
- Login admin diperbaiki: akun terautentikasi pertama dapat otomatis menjadi admin bila `admin_users` masih kosong.
- File `SUPABASE-V16-UPDATE.sql` disertakan untuk memperbarui Supabase lama.

## Setelah upload V1.6
1. Replace seluruh file project lama dengan isi V1.6.
2. Commit dan Push melalui GitHub Desktop.
3. Jalankan `SUPABASE-V16-UPDATE.sql` satu kali di Supabase SQL Editor.
4. Tunggu Vercel selesai build / redeploy.
5. Login kembali melalui `/admin`.

## WhatsApp
Environment variable yang direkomendasikan:
`NEXT_PUBLIC_WHATSAPP=6281240322071`

Jika ditulis sebagai `62 812-4032-2071`, V1.6 akan tetap membersihkannya menjadi angka valid secara otomatis.

## V1.8 — Google & Local SEO
- SEO lokal untuk kata kunci percetakan Jakarta Timur / Rawamangun.
- Sitemap otomatis: `/sitemap.xml`.
- Robots otomatis: `/robots.txt`.
- LocalBusiness JSON-LD.
- Canonical, Open Graph, dan metadata halaman.
- Dukungan Google Search Console melalui `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`.
- Lihat `SEO-GOOGLE-V17.txt` untuk langkah setelah deploy.


## SEO V1.8
Fokus utama SEO: **Ganjar Printing | Percetakan Rawamangun** dengan keyword lokal Rawamangun, Jakarta Timur, Pulogadung, serta keyword produk cetak. Desain dan fitur utama V1.7 dipertahankan.
