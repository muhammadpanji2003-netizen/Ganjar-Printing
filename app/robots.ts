import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://ganjar-printing.vercel.app';
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/admin', '/checkout', '/pesanan'],
    },
    sitemap: `${siteUrl}/sitemap.xml`,
    host: siteUrl,
  };
}
