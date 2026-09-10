import Link from 'next/link';
import { Grid2X2, House, MessageCircle, PackageSearch } from 'lucide-react';
import { whatsappUrl } from '@/lib/contact';
export default function MobileBar(){return <div className="mobilebar"><Link href="/"><House size={18}/><div>Home</div></Link><Link href="/katalog"><Grid2X2 size={18}/><div>Katalog</div></Link><Link href="/pesanan"><PackageSearch size={18}/><div>Pesanan</div></Link><a href={whatsappUrl('Halo Ganjar Printing, saya ingin bertanya.')} target="_blank" rel="noreferrer"><MessageCircle size={18}/><div>WhatsApp</div></a></div>}
