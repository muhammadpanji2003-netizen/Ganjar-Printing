import './globals.css';
import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import MobileBar from '@/components/MobileBar';

export const metadata: Metadata = { title: 'Ganjar Printing', description: 'Ganjar Printing - pemesanan jasa printing online yang mudah, cepat, dan berkualitas.' };
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="id"><body><Nav/>{children}<MobileBar/></body></html>}
