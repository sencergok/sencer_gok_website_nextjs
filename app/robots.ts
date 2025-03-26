import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Googlebot-Image",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Googlebot-News",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Googlebot-Video",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Bingbot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Slurp",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "DuckDuckBot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Baiduspider",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "YandexBot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "YandexImages",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Applebot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "SemrushBot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "AhrefsBot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "facebookexternalhit",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "Twitterbot",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
      {
        userAgent: "ia_archiver",
        allow: "/",
        disallow: ["/api/*", "/admin/*"],
      },
    ],
    sitemap: "https://sencergok.site/sitemap.xml",
    host: "https://sencergok.site",
  }
}

