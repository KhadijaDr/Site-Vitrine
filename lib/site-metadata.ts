export const siteMetadata = {
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
  author: 'Tarik BEN LAKHDAR',
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
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large' as const,
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export const contactInfo = {
  email: 'tarik.benlakhdar@pro.com',
  phone: '+33 1 23 45 67 89',
  whatsapp: 'https://wa.me/33123456789',
  linkedin: 'https://linkedin.com/in/tarikbenlakhdar',
  twitter: 'https://twitter.com/tarikbenlakhdar',
  instagram: 'https://instagram.com/tarikbenlakhdar',
}

export const socialLinks = {
  linkedin: 'https://linkedin.com/in/tarikbenlakhdar',
  twitter: 'https://twitter.com/tarikbenlakhdar',
  instagram: 'https://instagram.com/tarikbenlakhdar',
  whatsapp: 'https://wa.me/33123456789',
  youtube: 'https://youtube.com/@tarikbenlakhdar',
}

export const siteConfig = {
  name: 'Tarik BEN LAKHDAR',
  description: 'CEO & Strategic Leader - Expert en transformation digitale et leadership stratégique',
  url: 'https://tarik-benlakhdar.com',
  ogImage: '/images/og-image.jpg',
  links: socialLinks,
} 