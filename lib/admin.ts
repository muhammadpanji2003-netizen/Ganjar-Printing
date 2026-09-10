import { supabase } from './supabase';

export async function isCurrentUserAdmin(): Promise<boolean> {
  if (!supabase) return false;

  const first = await supabase.rpc('is_admin');
  if (!first.error && first.data === true) return true;

  // V1.6: bila tabel admin masih kosong, akun terautentikasi pertama
  // dapat mengklaim peran admin satu kali. Ini menghindari kasus akun
  // berhasil dibuat di Authentication tetapi belum masuk admin_users.
  const claim = await supabase.rpc('claim_first_admin');
  if (!claim.error && claim.data === true) return true;

  const second = await supabase.rpc('is_admin');
  return !second.error && second.data === true;
}
