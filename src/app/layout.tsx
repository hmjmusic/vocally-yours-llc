import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Vocally Yours LLC',
  description: 'A creative holding company building at the intersection of technology, wellness, and art.',
  keywords: ['Vocally Yours LLC', 'Keystir', 'Snapdolphin', 'Lullkeep', 'CertBell', 'AisleTea', 'creative technology', 'wellness', 'music'],
  openGraph: {
    title: 'Vocally Yours LLC',
    description: 'Building at the intersection of technology, wellness, and art.',
    url: 'https://vocallyyoursllc.com',
    siteName: 'Vocally Yours LLC',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
