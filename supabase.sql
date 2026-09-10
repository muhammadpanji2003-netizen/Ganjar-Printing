-- Jalankan file ini di Supabase > SQL Editor.
create extension if not exists pgcrypto;

create table if not exists public.products (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  category text not null,
  description text default '',
  price numeric not null default 0,
  unit text default '/pcs',
  image_url text,
  featured boolean default false,
  active boolean default true,
  options jsonb default '[]'::jsonb,
  created_at timestamptz default now()
);

create table if not exists public.orders (
  id uuid primary key default gen_random_uuid(),
  code text unique not null,
  customer_name text not null,
  whatsapp text not null,
  fulfillment text not null default 'pickup',
  address text,
  notes text,
  total numeric not null default 0,
  status text not null default 'Pesanan diterima',
  items jsonb not null default '[]'::jsonb,
  created_at timestamptz default now()
);

alter table public.products enable row level security;
alter table public.orders enable row level security;

-- Produk dapat dilihat semua pengunjung, tetapi hanya akun admin yang login dapat mengubahnya.
drop policy if exists "products public read" on public.products;
create policy "products public read" on public.products for select using (active = true or auth.role() = 'authenticated');
drop policy if exists "products admin insert" on public.products;
create policy "products admin insert" on public.products for insert to authenticated with check (true);
drop policy if exists "products admin update" on public.products;
create policy "products admin update" on public.products for update to authenticated using (true) with check (true);
drop policy if exists "products admin delete" on public.products;
create policy "products admin delete" on public.products for delete to authenticated using (true);

-- Customer boleh membuat pesanan. Daftar semua pesanan hanya bisa dibaca admin.
drop policy if exists "orders public insert" on public.orders;
create policy "orders public insert" on public.orders for insert to anon, authenticated with check (true);
drop policy if exists "orders admin read" on public.orders;
create policy "orders admin read" on public.orders for select to authenticated using (true);
drop policy if exists "orders admin update" on public.orders;
create policy "orders admin update" on public.orders for update to authenticated using (true) with check (true);

-- Tracking hanya mengembalikan pesanan yang kode-nya persis cocok.
create or replace function public.track_order(order_code text)
returns table (
 id uuid, code text, customer_name text, whatsapp text, fulfillment text,
 address text, notes text, total numeric, status text, items jsonb, created_at timestamptz
)
language sql security definer set search_path = public
as $$
  select o.id,o.code,o.customer_name,o.whatsapp,o.fulfillment,o.address,o.notes,o.total,o.status,o.items,o.created_at
  from public.orders o where lower(o.code)=lower(order_code) limit 1;
$$;
grant execute on function public.track_order(text) to anon, authenticated;

-- Storage buckets.
insert into storage.buckets (id,name,public) values ('catalog','catalog',true) on conflict (id) do nothing;
insert into storage.buckets (id,name,public) values ('designs','designs',true) on conflict (id) do nothing;

-- Foto katalog: publik dibaca, hanya admin upload/edit/hapus.
drop policy if exists "catalog public read" on storage.objects;
create policy "catalog public read" on storage.objects for select using (bucket_id='catalog');
drop policy if exists "catalog admin upload" on storage.objects;
create policy "catalog admin upload" on storage.objects for insert to authenticated with check (bucket_id='catalog');
drop policy if exists "catalog admin update" on storage.objects;
create policy "catalog admin update" on storage.objects for update to authenticated using (bucket_id='catalog');
drop policy if exists "catalog admin delete" on storage.objects;
create policy "catalog admin delete" on storage.objects for delete to authenticated using (bucket_id='catalog');

-- File desain customer dapat di-upload oleh pengunjung. Pada V1 bucket dibuat public agar admin bisa membuka link dari dashboard.
-- Untuk produksi skala besar, sebaiknya ubah menjadi private bucket + signed URL.
drop policy if exists "design public upload" on storage.objects;
create policy "design public upload" on storage.objects for insert to anon, authenticated with check (bucket_id='designs');
drop policy if exists "design public read" on storage.objects;
create policy "design public read" on storage.objects for select using (bucket_id='designs');
