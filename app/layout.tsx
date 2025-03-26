import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/layout/header"
import { ThemeProvider } from "@/components/theme-provider"
import Script from "next/script"
import { generateSeoKeywords, generateStructuredData } from "@/lib/seo-utils"
const inter = Inter({ subsets: ["latin"] })

// SEO için meta verileri genişletelim
export const metadata: Metadata = {
  title: "Sencer Gök",
  description:
    "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren deneyimli fullstack yazılım geliştiricisi. Next.js, React, Supabase ve SwiftUI ile kullanıcı dostu, yüksek performanslı ve ölçeklenebilir yazılım çözümleri sunuyorum. Profesyonel projeler için hemen iletişime geçin.",
  keywords: generateSeoKeywords(),
  authors: [{ name: "Sencer Gök", url: "https://sencergok.site" }],
  creator: "Sencer Gök",
  publisher: "Sencer Gök",
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://sencergok.site",
    languages: {
      "tr-TR": "https://sencergok.site",
    },
  },
  openGraph: {
    type: "website",
    url: "https://sencergok.site",
    title: "Sencer Gök | Ankara'nın Öncü Fullstack & Mobil Geliştiricisi",
    description:
      "Next.js, React, Supabase ve SwiftUI ile modern, performanslı ve kullanıcı dostu web ve mobil uygulamalar geliştiriyorum. Ankara'da profesyonel yazılım hizmetleri.",
    siteName: "Sencer Gök Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sencer Gök - Ankara'nın Öncü Fullstack & Mobil Geliştiricisi",
      },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sencer Gök | Ankara'nın Öncü Fullstack & Mobil Geliştiricisi",
    description:
      "Next.js, React, Supabase ve SwiftUI ile modern, performanslı ve kullanıcı dostu web ve mobil uygulamalar geliştiriyorum. Ankara'da profesyonel yazılım hizmetleri.",
    images: ["/og-image.jpg"],
    creator: "@sencerdev",
    site: "@sencerdev",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 5,
  },
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#111827" },
  ],
  category: "Portfolio",
  verification: {
    google: "GOOGLE-SITE-VERIFICATION-CODE-EKLE", // Google Search Console doğrulama kodunu buraya eklemelisiniz
    yandex: "yandex-verification-code",
  },
  applicationName: "Sencer Gök Portfolio",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
  metadataBase: new URL("https://sencergok.site")
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Güvenlik için Content Security Policy */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https://www.google-analytics.com;"
        />
        {/* XSS Koruması */}
        <meta httpEquiv="X-XSS-Protection" content="1; mode=block" />
        {/* Clickjacking Koruması */}
        <meta httpEquiv="X-Frame-Options" content="SAMEORIGIN" />
        {/* MIME Sniffing Koruması */}
        <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
        {/* Referrer Policy */}
        <meta name="referrer" content="strict-origin-when-cross-origin" />
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        {/* Alternatif Diller */}
        <link rel="alternate" hrefLang="tr" href="https://sencergok.site" />
        <link rel="alternate" hrefLang="x-default" href="https://sencergok.site" />
        {/* Mobil Uyumluluk */}
        <meta name="HandheldFriendly" content="true" />
        {/* Sosyal Medya */}
        <meta property="og:site_name" content="Sencer Gök Portfolio" />
        {/* Rich Results için ek yapısal veriler */}
        <meta name="author" content="Sencer Gök" />
        <meta name="geo.placename" content="Ankara" />
        <meta name="geo.region" content="TR" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <Header />
          <main>{children}</main>
        </ThemeProvider>

        {/* Structured Data - Schema.org */}
        <Script id="schema-person" type="application/ld+json">
          {JSON.stringify(generateStructuredData("Person"))}
        </Script>

        <Script id="schema-website" type="application/ld+json">
          {JSON.stringify(generateStructuredData("WebSite"))}
        </Script>

        {/* Google Analytics - Güncellenmiş GA4 kodu */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-XXXXXXXXXX'); // Google Analytics GA4 ölçüm kimliğinizi buraya ekleyin
          `}
        </Script>

        {/* Google Search Console Doğrulama ve Search Box Schema */}
        <Script id="google-search-console" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://sencergok.site/",
              "name": "Sencer Gök",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://sencergok.site/search?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </Script>
      </body>
    </html>
  )
}



import './globals.css'