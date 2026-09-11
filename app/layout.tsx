import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MobileBar from '@/components/MobileBar';
import { storeWhatsApp } from '@/lib/contact';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ganjar-printing.vercel.app';
const googleVerification = process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Ganjar Printing | Percetakan Rawamangun',
    template: '%s | Ganjar Printing',
  },
  description:
    'Ganjar Printing melayani kebutuhan percetakan di Rawamangun, Jakarta Timur seperti kartu nama, brosur, flyer, banner, stiker, poster, dan kebutuhan printing lainnya.',
  keywords: [
    'percetakan Rawamangun',
    'printing Rawamangun',
    'digital printing Rawamangun',
    'percetakan Jakarta Timur',
    'printing Jakarta Timur',
    'digital printing Jakarta Timur',
    'percetakan Pulogadung',
    'printing Pulogadung',
    'percetakan terdekat Rawamangun',
    'percetakan terdekat Jakarta Timur',
    'cetak banner Rawamangun',
    'cetak spanduk Rawamangun',
    'cetak stiker Rawamangun',
    'cetak brosur Rawamangun',
    'cetak flyer Rawamangun',
    'cetak poster Rawamangun',
    'cetak kartu nama Rawamangun',
    'cetak menu Rawamangun',
    'cetak banner Jakarta Timur',
    'cetak spanduk Jakarta Timur',
    'cetak stiker Jakarta Timur',
    'cetak brosur Jakarta Timur',
    'cetak flyer Jakarta Timur',
    'cetak poster Jakarta Timur',
    'cetak kartu nama Jakarta Timur',
    'cetak cepat Rawamangun',
    'percetakan murah Rawamangun',
    'Ganjar Printing',
  ],
  alternates: { canonical: '/' },
  icons: { icon: '/icon.png', shortcut: '/icon.png', apple: '/icon.png' },
  openGraph: {
    type: 'website',
    locale: 'id_ID',
    url: siteUrl,
    siteName: 'Ganjar Printing',
    title: 'Ganjar Printing | Percetakan Rawamangun',
    description:
      'Percetakan di Rawamangun, Jakarta Timur untuk kebutuhan personal, bisnis, promosi, sekolah, dan acara.',
    images: [{ url: '/ganjar-logo.png', alt: 'Ganjar Printing' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ganjar Printing | Percetakan Rawamangun',
    description: 'Percetakan Rawamangun, Jakarta Timur. Cetak cepat dan rapi untuk kebutuhan bisnis, promosi, sekolah, acara, dan personal.',
    images: ['/ganjar-logo.png'],
  },
  verification: googleVerification ? { google: googleVerification } : undefined,
};

const localBusinessJsonLd = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  name: 'Ganjar Printing',
  url: siteUrl,
  logo: `${siteUrl}/ganjar-logo.png`,
  image: `${siteUrl}/ganjar-logo.png`,
  telephone: `+${storeWhatsApp}`,
  priceRange: 'Rp',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Jl. Balai Pustaka Baru No.46A',
    addressLocality: 'Rawamangun',
    addressRegion: 'Jakarta Timur',
    addressCountry: 'ID',
  },
  areaServed: [
    { '@type': 'City', name: 'Jakarta Timur' },
    { '@type': 'Place', name: 'Rawamangun' },
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: `+${storeWhatsApp}`,
    contactType: 'customer service',
    availableLanguage: ['Indonesian'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="id">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <Nav />
        {children}
        <MobileBar />
      </body>
    </html>
  );
}
