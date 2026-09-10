-- GANJAR PRINTING V1.3
-- Jalankan seluruh file ini di Supabase > SQL Editor.
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

-- Hanya user yang UUID-nya ada di tabel ini yang dianggap sebagai admin.
create table if not exists public.admin_users (
  user_id uuid primary key references auth.users(id) on delete cascade,
  created_at timestamptz default now()
);

alter table public.products enable row level security;
alter table public.orders enable row level security;
alter table public.admin_users enable row level security;

-- Fungsi keamanan yang dipakai seluruh policy admin.
create or replace function public.is_admin()
returns boolean
language sql
security definer
stable
set search_path = public
as $$
  select exists(select 1 from public.admin_users a where a.user_id = auth.uid());
$$;
grant execute on function public.is_admin() to anon, authenticated;

-- Admin hanya boleh melihat record admin miliknya sendiri.
drop policy if exists "admin self read" on public.admin_users;
create policy "admin self read" on public.admin_users
for select to authenticated using (user_id = auth.uid());

-- Katalog publik hanya melihat produk aktif. Admin boleh melihat semuanya.
drop policy if exists "products public read" on public.products;
create policy "products public read" on public.products
for select using (active = true or public.is_admin());

drop policy if exists "products admin insert" on public.products;
create policy "products admin insert" on public.products
for insert to authenticated with check (public.is_admin());

drop policy if exists "products admin update" on public.products;
create policy "products admin update" on public.products
for update to authenticated using (public.is_admin()) with check (public.is_admin());

drop policy if exists "products admin delete" on public.products;
create policy "products admin delete" on public.products
for delete to authenticated using (public.is_admin());

-- Customer boleh membuat pesanan, tapi daftar pesanan hanya admin yang dapat melihat/mengubah.
drop policy if exists "orders public insert" on public.orders;
create policy "orders public insert" on public.orders
for insert to anon, authenticated with check (true);

drop policy if exists "orders admin read" on public.orders;
create policy "orders admin read" on public.orders
for select to authenticated using (public.is_admin());

drop policy if exists "orders admin update" on public.orders;
create policy "orders admin update" on public.orders
for update to authenticated using (public.is_admin()) with check (public.is_admin());

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

insert into storage.buckets (id,name,public) values ('catalog','catalog',true) on conflict (id) do nothing;
insert into storage.buckets (id,name,public) values ('designs','designs',true) on conflict (id) do nothing;

drop policy if exists "catalog public read" on storage.objects;
create policy "catalog public read" on storage.objects for select using (bucket_id='catalog');
drop policy if exists "catalog admin upload" on storage.objects;
create policy "catalog admin upload" on storage.objects for insert to authenticated with check (bucket_id='catalog' and public.is_admin());
drop policy if exists "catalog admin update" on storage.objects;
create policy "catalog admin update" on storage.objects for update to authenticated using (bucket_id='catalog' and public.is_admin());
drop policy if exists "catalog admin delete" on storage.objects;
create policy "catalog admin delete" on storage.objects for delete to authenticated using (bucket_id='catalog' and public.is_admin());

drop policy if exists "design public upload" on storage.objects;
create policy "design public upload" on storage.objects for insert to anon, authenticated with check (bucket_id='designs');
drop policy if exists "design public read" on storage.objects;
create policy "design public read" on storage.objects for select using (bucket_id='designs');

-- SETELAH membuat user admin di Supabase Authentication > Users,
-- copy UUID user tersebut lalu jalankan satu kali perintah ini dengan UUID asli:
-- insert into public.admin_users(user_id) values ('PASTE-UUID-ADMIN-DI-SINI');

-- V1.6: mempermudah aktivasi admin pertama.
-- Hanya bekerja jika tabel admin_users masih kosong dan user sudah login.
create or replace function public.claim_first_admin()
returns boolean
language plpgsql
security definer
set search_path = public
as $$
begin
  if auth.uid() is null then
    return false;
  end if;

  if exists(select 1 from public.admin_users) then
    return exists(select 1 from public.admin_users where user_id = auth.uid());
  end if;

  insert into public.admin_users(user_id) values (auth.uid()) on conflict do nothing;
  return true;
end;
$$;
grant execute on function public.claim_first_admin() to authenticated;
