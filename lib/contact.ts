export function normalizeWhatsApp(raw?: string) {
  let digits = (raw || '6281240322071').replace(/\D/g, '');
  if (digits.startsWith('0')) digits = `62${digits.slice(1)}`;
  else if (digits.startsWith('8')) digits = `62${digits}`;
  return digits;
}

export const storeWhatsApp = normalizeWhatsApp(process.env.NEXT_PUBLIC_WHATSAPP);
export const storeWhatsAppDisplay = '62 812-4032-2071';

export function whatsappUrl(message?: string) {
  const base = `https://api.whatsapp.com/send?phone=${storeWhatsApp}`;
  return message ? `${base}&text=${encodeURIComponent(message)}` : base;
}
