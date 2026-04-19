import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
  weight: ['300', '400', '500'],
})

export const metadata: Metadata = {
  title: 'Origen — Café de Especialidad',
  description:
    'Del campo a tu taza. Café de especialidad en Roma Norte, CDMX. Granos mexicanos de origen único: Oaxaca, Chiapas y Veracruz.',
  keywords: ['café', 'especialidad', 'México', 'Roma Norte', 'CDMX', 'Oaxaca', 'Chiapas', 'Veracruz'],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${playfair.variable} ${dmSans.variable}`}>
      <body className="bg-negro text-crema antialiased overflow-x-hidden">{children}</body>
    </html>
  )
}
