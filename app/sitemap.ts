import type { MetadataRoute } from "next"
import { getAllPublishedPosts, getAllCategories, getAllTags } from "@/lib/blog-service"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sencergok.site"
  const currentDate = new Date()

  // Blog yazılarını, kategorileri ve etiketleri getir
  const blogPosts = await getAllPublishedPosts()
  const categories = await getAllCategories()
  const tags = await getAllTags()

  // Ana sayfalar - Ana sayfalar için daha yüksek öncelik ve güncel lastModified değeri
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "daily" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/sitemap.xml`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.5,
    },
  ]

  // Blog yazılarını ekle - blog yazıları için dinamik öncelikler
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.published_at),
    changeFrequency: "weekly" as const,
    // Daha yeni yazılar için daha yüksek öncelik
    priority: calculateBlogPostPriority(post.published_at),
  }))

  // Kategorileri ekle
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blog/kategori/${category.slug}`,
    lastModified: new Date(category.created_at),
    changeFrequency: "weekly" as const,
    priority: 0.7, // Kategoriler için önceliği artırdık
  }))

  // Etiketleri ekle
  const tagUrls = tags.map((tag) => ({
    url: `${baseUrl}/blog/etiket/${tag.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: currentDate,
    changeFrequency: "weekly" as const,
    priority: 0.6, // Etiketler için önceliği artırdık
  }))

  return [...routes, ...blogUrls, ...categoryUrls, ...tagUrls]
}

// Blog yazıları için dinamik öncelik hesaplama - yeni yazılara daha yüksek öncelik vermek için
function calculateBlogPostPriority(publishDate: string): number {
  const now = new Date()
  const published = new Date(publishDate)
  const diffInDays = Math.floor((now.getTime() - published.getTime()) / (1000 * 60 * 60 * 24))
  
  if (diffInDays < 7) {
    return 0.9 // Son 1 hafta içinde yayınlanan içerikler
  } else if (diffInDays < 30) {
    return 0.8 // Son 1 ay içinde yayınlanan içerikler
  } else if (diffInDays < 90) {
    return 0.7 // Son 3 ay içinde yayınlanan içerikler
  } else if (diffInDays < 365) {
    return 0.6 // Son 1 yıl içinde yayınlanan içerikler
  } else {
    return 0.5 // 1 yıldan eski içerikler
  }
}

