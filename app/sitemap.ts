import type { MetadataRoute } from "next"
import { getAllPublishedPosts, getAllCategories, getAllTags } from "@/lib/blog-service"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = "https://sencergok.site"
  const currentDate = new Date()

  // Blog yazılarını, kategorileri ve etiketleri getir
  const blogPosts = await getAllPublishedPosts()
  const categories = await getAllCategories()
  const tags = await getAllTags()

  // Ana sayfalar
  const routes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: currentDate,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#about`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#skills`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/#projects`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/#contact`,
      lastModified: currentDate,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ]

  // Blog yazılarını ekle
  const blogUrls = blogPosts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.updated_at || post.published_at),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  // Kategorileri ekle
  const categoryUrls = categories.map((category) => ({
    url: `${baseUrl}/blog/kategori/${category.slug}`,
    lastModified: new Date(category.created_at),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }))

  // Etiketleri ekle
  const tagUrls = tags.map((tag) => ({
    url: `${baseUrl}/blog/etiket/${tag.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: currentDate,
    changeFrequency: "monthly" as const,
    priority: 0.5,
  }))

  return [...routes, ...blogUrls, ...categoryUrls, ...tagUrls]
}

