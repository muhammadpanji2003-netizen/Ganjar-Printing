-- GANJAR PRINTING V10.3
-- Jalankan SEKALI di Supabase > SQL Editor.
-- Aman untuk katalog lama: file ini TIDAK menghapus tabel products/orders dan TIDAK mereset katalog.

create table if not exists public.hero_slides (
  id uuid primary key default gen_random_uuid(),
  title text not null default '',
  description text default '',
  image_url text not null,
  active boolean default true,
  sort_order integer default 1,
  created_at timestamptz default now()
);

alter table public.hero_slides enable row level security;

drop policy if exists "hero public read" on public.hero_slides;
create policy "hero public read" on public.hero_slides
for select using (active = true or public.is_admin());

drop policy if exists "hero admin insert" on public.hero_slides;
create policy "hero admin insert" on public.hero_slides
for insert to authenticated with check (public.is_admin());

drop policy if exists "hero admin update" on public.hero_slides;
create policy "hero admin update" on public.hero_slides
for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "hero admin delete" on public.hero_slides;
create policy "hero admin delete" on public.hero_slides
for delete to authenticated using (public.is_admin());

-- Tambahan metode pembayaran tanpa menyentuh data pesanan lama.
alter table public.orders add column if not exists payment_method text default 'BCA';

-- Batasi nilai baru/hasil edit ke metode pembayaran yang diterima.
alter table public.orders drop constraint if exists orders_payment_method_check;
alter table public.orders add constraint orders_payment_method_check
check (payment_method in ('BCA','Mandiri','BRI','GoPay'));
