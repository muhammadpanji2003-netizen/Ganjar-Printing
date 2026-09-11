# Ganjar Printing V10

Update visual dari V1.9.1. Struktur aplikasi, Supabase, admin, SEO, Google verification, katalog, order, dan WhatsApp dipertahankan.

## Perubahan V10
- Hero Home dibuat lebih lebar hingga mendekati sisi layar dengan sudut tetap membulat.
- Setiap slide hero memakai kombinasi gambar produk yang berbeda.
- Slider tetap otomatis, bisa pakai panah, dan indikator titik tetap tersedia.
- Tampilan mobile Produk Unggulan diperbesar agar foto, nama, dan harga lebih jelas terbaca.
- Tidak mengubah struktur data, login admin, Supabase, SEO, atau alur order yang sudah ada.

# Ganjar Printing V1.9

Visual refresh based on the approved responsive mockup. Existing data, Supabase/admin, catalog flow, SEO, WhatsApp logic, and verification file are retained.

## V1.9 changes
- Rounded hero slider with 3 slides, arrows, dots, and auto-slide.
- Mobile layout refined for cleaner spacing and typography.
- Home products become one compact card per row on phones.
- Added category strip, benefits, order steps, shipping, and payment display sections.
- Shipping display: GoSend, GrabExpress, JNE, J&T Express, SiCepat, AnterAja.
- Payment display: BCA, BRI, BNI, Mandiri, DANA, OVO, GoPay, ShopeePay, Alfamart, Indomaret, and more.

Note: shipping/payment section is a visual service-information section only; it does not add automated courier or payment-gateway integration.


## V1.9.1 — Visual Match
Visual-only refinement to match the approved desktop/mobile mockup more closely: navy/blue palette, rounded hero card, compact mobile hero, one-product-per-row mobile cards, refined spacing/shadows, logistics/payment cards, and mobile bottom navigation. Core Supabase/admin/SEO/WhatsApp logic is unchanged.

## V10.1
- Menambahkan logo Ganjar Printing di setiap slide hero.
- Menambahkan nomor WhatsApp 0812-4032-2071 di setiap slide.
- Menambahkan email ganjarprinting26@gmail.com di setiap slide.
- Menjaga struktur admin, Supabase, katalog, SEO, dan alur pemesanan tetap sama seperti V10.


## V10.2
- Logo pada hero memakai versi transparan khusus slide; logo header asli tetap tidak diubah.
- Kategori Banner/Spanduk/Stiker/Kartu Nama/Brosur/Poster/Undangan/Merchandise/Lainnya kini memakai gambar relevan.
- Product cards pada mobile diperbesar supaya gambar, nama, dan harga lebih jelas.


## V10.3
- Hero slider dapat dikelola dari Admin: upload, edit, hapus, aktif/nonaktif, dan atur urutan.
- Gambar hero responsif: membesar di desktop dan tetap utuh (tidak terpotong) di HP.
- Tombol Tanya via WhatsApp tetap tersedia di setiap slide.
- Metode pembayaran dibatasi menjadi BCA, Mandiri, BRI, dan GoPay.
- Logo Ganjar Printing diperbarui dan dipakai sebagai favicon/branding situs.
- Data katalog Supabase yang sudah ada tidak di-reset. Jalankan SUPABASE-V103-UPDATE.sql satu kali.


## V10.3.3 — Hero Wide
- Hero card dibuat lebih memanjang ke samping dan lebih pendek pada desktop.
- Logo Ganjar Printing di dalam hero slide dihapus; logo header tetap ada.
- Tombol Tanya via WhatsApp tetap dipertahankan.
- Gambar hero tetap menggunakan contain agar utuh dan tidak terpotong di HP.


## V10.3.3
- Bagian Pengiriman sekarang menampilkan logo brand untuk GoSend/Gojek, GrabExpress/Grab, JNE, J&T Express, SiCepat, dan AnterAja.
- Bagian Metode Pembayaran menampilkan logo BCA, Bank Mandiri, BRI, dan GoPay.
- Tidak ada perubahan schema Supabase; tidak perlu menjalankan SQL baru untuk update 10.3.2.


## V10.3.3
- Kategori beranda sebelum Produk Unggulan kini dapat dikelola dari `/admin`.
- Admin dapat tambah/edit/hapus, upload gambar, atur urutan, link, serta aktif/nonaktifkan kategori.
- Jalankan `SUPABASE-V1033-UPDATE.sql` satu kali agar fitur kategori dinamis aktif.
- Jika tabel kategori belum diisi, website tetap menampilkan kategori bawaan agar beranda tidak kosong.


## V10.3.3 Revision — Full Image Hero
- Hero slider sekarang 100% berupa gambar/desain yang di-upload dari Admin.
- Tidak ada judul, deskripsi, logo, kontak, atau teks website yang menutupi desain.
- Tombol **Tanya via WhatsApp** tetap otomatis tampil sebagai overlay di pojok kiri bawah.
- Tombol panah dan dot slider tetap tersedia.
- Ukuran desain yang direkomendasikan: **1600 × 650 px**.
- Tidak membutuhkan SQL Supabase baru jika SUPABASE-V103-UPDATE.sql sudah pernah dijalankan.


### Revisi admin
- Menambahkan tombol Logout yang selalu terlihat di header dashboard admin.
- Tombol Keluar di sidebar tetap tersedia.
