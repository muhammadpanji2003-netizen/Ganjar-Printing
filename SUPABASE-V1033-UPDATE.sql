-- GANJAR PRINTING V10.3.3
-- Jalankan SEKALI di Supabase > SQL Editor setelah V10.3 sudah aktif.
-- Aman: tidak menghapus products, orders, hero_slides, atau data katalog lama.

create table if not exists public.home_categories (
  id uuid primary key default gen_random_uuid(),
  name text not null default '',
  image_url text not null,
  href text not null default '/katalog',
  active boolean default true,
  sort_order integer default 1,
  created_at timestamptz default now()
);

alter table public.home_categories enable row level security;

drop policy if exists "home categories public read" on public.home_categories;
create policy "home categories public read" on public.home_categories
for select using (active = true or public.is_admin());

drop policy if exists "home categories admin insert" on public.home_categories;
create policy "home categories admin insert" on public.home_categories
for insert to authenticated with check (public.is_admin());

drop policy if exists "home categories admin update" on public.home_categories;
create policy "home categories admin update" on public.home_categories
for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "home categories admin delete" on public.home_categories;
create policy "home categories admin delete" on public.home_categories
for delete to authenticated using (public.is_admin());
