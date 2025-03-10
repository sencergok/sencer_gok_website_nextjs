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
  title: "Sencer Gök | Fullstack & Mobil Geliştirici | Next.js, React, Supabase, SwiftUI Uzmanı",
  description:
    "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren fullstack yazılım geliştiricisi. Next.js, React, Supabase ve SwiftUI ile kullanıcı dostu, performanslı ve ölçeklenebilir çözümler.",
  keywords: generateSeoKeywords(),
  authors: [{ name: "Sencer Gök", url: "https://sencergok.site" }],
  creator: "Sencer Gök",
  publisher: "Sencer Gök",
  robots: {
    index: true,
    follow: true,
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
    title: "Sencer Gök | Fullstack & Mobil Geliştirici",
    description:
      "Next.js, React, Supabase ve SwiftUI ile modern, performanslı ve kullanıcı dostu uygulamalar geliştiriyorum.",
    siteName: "Sencer Gök Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sencer Gök - Fullstack & Mobil Geliştirici",
      },
    ],
    locale: "tr_TR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sencer Gök | Fullstack & Mobil Geliştirici",
    description:
      "Next.js, React, Supabase ve SwiftUI ile modern, performanslı ve kullanıcı dostu uygulamalar geliştiriyorum.",
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
    google: "google-site-verification-code", // Google Search Console doğrulama kodu
    yandex: "yandex-verification-code", // Yandex Webmaster doğrulama kodu
    bing: "bing-verification-code", // Bing Webmaster doğrulama kodu
  },
  applicationName: "Sencer Gök Portfolio",
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true,
  },
    generator: 'v0.dev'
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

        {/* Google Analytics */}
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-XXXXXXX');
          `}
        </Script>

        {/* Google Search Console Doğrulama */}
        <Script id="google-search-console" type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "url": "https://sencergok.site/",
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