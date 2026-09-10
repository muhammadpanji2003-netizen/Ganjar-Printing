-- Jalankan file ini SEKALI di Supabase > SQL Editor untuk Ganjar Printing V1.6.
-- Tujuan: memperbaiki kasus akun Authentication bisa login tetapi belum tercatat sebagai admin.

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
