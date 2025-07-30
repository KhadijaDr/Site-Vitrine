import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Tarik BEN LAKHDAR - CEO & Strategic Leader | Transformation Digitale',
  description: 'Expert en transformation digitale et leadership stratégique. Accompagnement des entreprises vers l\'excellence opérationnelle et la croissance durable.',
  keywords: [
    'transformation digitale',
    'leadership',
    'fintech',
    'innovation',
    'coaching',
    'stratégie',
    'croissance',
    'management',
    'expertise',
    'consultant'
  ],
  authors: [{ name: 'Tarik BEN LAKHDAR' }],
  creator: 'Tarik BEN LAKHDAR',
  publisher: 'Tarik BEN LAKHDAR',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://tarik-benlakhdar.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Tarik BEN LAKHDAR - CEO & Strategic Leader',
    description: 'Expert en transformation digitale et leadership stratégique. Transformons votre vision en réalité.',
    url: 'https://tarik-benlakhdar.com',
    siteName: 'Tarik BEN LAKHDAR',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Tarik BEN LAKHDAR - CEO & Strategic Leader',
      },
    ],
    locale: 'fr_FR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Tarik BEN LAKHDAR - CEO & Strategic Leader',
    description: 'Expert en transformation digitale et leadership stratégique.',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e293b" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
