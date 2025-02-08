import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL('https://sencergok.com'),
  title: {
    default: "Sencer Gök | iOS Geliştirici & Mobil Uygulama Uzmanı",
    template: "%s | Sencer Gök"
  },
  description: "Sencer Gök - iOS ve Mobil Uygulama Geliştirici. App Store&apos;da yer alan başarılı projeleriyle kullanıcılara değer katan yazılım mühendisi.",
  keywords: [
    "Sencer Gök",
    "iOS Geliştirici",
    "sencer gök",
    "Mobil Uygulama Geliştirici",
    "Swift Uzmanı",
    "iOS Developer",
    "App Store Geliştirici",
    "Yazılım Mühendisi",
    "Mobil Uygulama Uzmanı",
    "iOS App Developer",
    "Türk iOS Geliştirici"
  ],
  authors: [{ name: "Sencer Gök" }],
  creator: "Sencer Gök",
  publisher: "Sencer Gök",
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
  openGraph: {
    type: 'website',
    locale: 'tr_TR',
    url: 'https://sencergok.com',
    title: 'Sencer Gök | iOS Geliştirici & Mobil Uygulama Uzmanı',
    description: 'iOS ve Mobil Uygulama Geliştirici Sencer Gök. Yapay zeka destekli mobil uygulamalar ve yenilikçi çözümler.',
    siteName: 'Sencer Gök',
    images: [
      {
        url: '/images/profile.webp',
        width: 800,
        height: 800,
        alt: 'Sencer Gök',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sencer Gök | iOS Geliştirici',
    description: 'iOS ve Mobil Uygulama Geliştirici Sencer Gök. App Store projeleri ve yazılım çözümleri.',
    creator: '@sencerdev',
    images: ['/images/profile.webp'],
  },
  alternates: {
    canonical: 'https://sencergok.com',
  },
  verification: {
    google: 'google-site-verification-code', // Google Search Console doğrulama kodu eklenecek
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow bg-background">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
