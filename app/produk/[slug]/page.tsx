import type { Metadata } from 'next';
import ProductDetail from '@/components/ProductDetail';

function labelFromSlug(slug: string) {
  return slug.split('-').filter(Boolean).map(x => x.charAt(0).toUpperCase() + x.slice(1)).join(' ');
}

export async function generateMetadata({ params }: { params: Promise<{slug:string}> }): Promise<Metadata> {
  const { slug } = await params;
  const label = labelFromSlug(slug);
  return {
    title: `${label} - Percetakan Rawamangun`,
    description: `Pesan ${label} di Ganjar Printing, Rawamangun, Jakarta Timur. Konsultasi mudah melalui WhatsApp.`,
    alternates: { canonical: `/produk/${slug}` },
  };
}

export default async function Page({params}:{params:Promise<{slug:string}>}){const {slug}=await params;return <ProductDetail slug={slug}/>}
