import type { Metadata } from 'next';
import './globals.css';
import { Plus_Jakarta_Sans } from 'next/font/google';

const jakarta = Plus_Jakarta_Sans({ subsets: ['latin'], variable: '--font-jakarta' });

export const metadata: Metadata = {
  title: {
    default: 'MediPro Supply ? Material M?dico y Quir?rgico B2B',
    template: '%s ? MediPro Supply'
  },
  description:
    'Proveedor B2B de material m?dico y quir?rgico con entrega ?gil, calidad certificada y asesor?a especializada para hospitales, cl?nicas y distribuidores.',
  keywords: ['material m?dico', 'insumos quir?rgicos', 'distribuidor m?dico', 'B2B', 'hospitales', 'cl?nicas'],
  metadataBase: new URL('https://agentic-1418495b.vercel.app'),
  openGraph: {
    title: 'MediPro Supply ? Material M?dico y Quir?rgico B2B',
    description:
      'Proveedor B2B de material m?dico y quir?rgico con entrega ?gil, calidad certificada y asesor?a especializada para hospitales, cl?nicas y distribuidores.',
    url: 'https://agentic-1418495b.vercel.app',
    siteName: 'MediPro Supply',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'MediPro Supply'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  icons: { icon: '/logo.svg' }
};

function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'MediPro Supply',
    url: 'https://agentic-1418495b.vercel.app',
    logo: 'https://agentic-1418495b.vercel.app/logo.svg',
    sameAs: [
      'https://www.linkedin.com',
      'https://www.facebook.com'
    ],
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+34 000 000 000',
        contactType: 'sales',
        availableLanguage: ['Spanish', 'English']
      }
    ]
  } as const;
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={jakarta.variable}>
      <body className="min-h-screen bg-white text-slate-900 antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.08),transparent_65%),radial-gradient(ellipse_at_bottom,rgba(6,182,212,0.08),transparent_65%)]" />
        <StructuredData />
        {children}
      </body>
    </html>
  );
}
