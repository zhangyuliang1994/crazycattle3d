import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { siteConfig } from "@/config/site";
import Script from 'next/script';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: `${siteConfig.name} | Unblocked Free Game | ${siteConfig.domain}`,
  description: siteConfig.description,
  openGraph: {
    title: `${siteConfig.name} Unblocked | Play Free Game | ${siteConfig.domain}`,
    description: siteConfig.description,
    type: 'website',
    url: siteConfig.url,
    siteName: siteConfig.name,
    images: [
      {
        url: siteConfig.images.og,
        alt: `${siteConfig.name} Screenshot`,
      }
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Crazy Cattle 3D - Free Online Game',
    description: 'Play free online game without download at Crazy Cattle 3D',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="canonical" href={siteConfig.url} />
        <link rel="apple-touch-icon" sizes="180x180" href={siteConfig.images.icon.apple} />
        <link rel="icon" type="image/png" sizes="32x32" href={siteConfig.images.icon.favicon32} />
        <link rel="icon" type="image/png" sizes="16x16" href={siteConfig.images.icon.favicon16} />
        <link rel="manifest" href={siteConfig.metadata.manifestPath} />
        <link rel="mask-icon" href={siteConfig.images.icon.safari} color="#5bbad5" />
        <link rel="shortcut icon" href={siteConfig.images.icon.favicon} />
        <meta name="theme-color" content={siteConfig.metadata.themeColor} />
        {/* Google Analytics */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=G-46C0JN25YJ`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-46C0JN25YJ');
          `}
        </Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
