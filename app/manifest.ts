import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Sencer Gök",
    short_name: "Sencer Gök",
    description: "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren deneyimli fullstack yazılım geliştiricisi. Next.js, React, Supabase ve SwiftUI ile profesyonel çözümler.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3b82f6",
    lang: "tr-TR",
    dir: "ltr",
    orientation: "portrait-primary",
    categories: ["technology", "web development", "mobile development", "portfolio"],
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "any"
      },
      {
        src: "/icon-maskable-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/icon-maskable-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable"
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcuts: [
      {
        name: "Blog",
        url: "/blog",
        description: "Sencer Gök'ün yazılım ve teknoloji blog yazıları"
      },
      {
        name: "İletişim",
        url: "/#contact",
        description: "Sencer Gök ile iletişime geçin"
      }
    ],
    id: "sencergok-portfolio",
    scope: "/",
    prefer_related_applications: false,
  }
}


