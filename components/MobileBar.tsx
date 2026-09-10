import Link from 'next/link';
import { House, Grid2X2, PackageSearch, MessageCircle } from 'lucide-react';
const wa=process.env.NEXT_PUBLIC_WHATSAPP||'6281240322071';
export default function MobileBar(){return <div className="mobilebar"><Link href="/"><House size={18}/><div>Home</div></Link><Link href="/katalog"><Grid2X2 size={18}/><div>Katalog</div></Link><Link href="/pesanan"><PackageSearch size={18}/><div>Pesanan</div></Link><a href={`https://wa.me/${wa}`}><MessageCircle size={18}/><div>WhatsApp</div></a></div>}
