import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { generateSeoKeywords } from "@/lib/seo-utils"
import { Tag, Search, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"
import { getAllPublishedPosts, getAllCategories, getAllTags } from "@/lib/blog-service"

export const metadata: Metadata = {
  title: "Sencer Gök | Blog - Yazılım, Web ve Mobil Geliştirme Üzerine",
  description:
    "Yazılım, web ve mobil geliştirme, Next.js, React, Supabase ve SwiftUI hakkında makaleler, ipuçları ve öğreticiler.",
  keywords: generateSeoKeywords(),
  alternates: {
    canonical: "https://sencergok.site/blog",
  },
  openGraph: {
    title: "Sencer Gök | Blog - Yazılım, Web ve Mobil Geliştirme Üzerine",
    description:
      "Yazılım, web ve mobil geliştirme, Next.js, React, Supabase ve SwiftUI hakkında makaleler, ipuçları ve öğreticiler.",
    url: "https://sencergok.site/blog",
    type: "website",
    images: [
      {
        url: "/blog/blog-cover.jpg",
        width: 1200,
        height: 630,
        alt: "Sencer Gök Blog",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sencer Gök | Blog - Yazılım, Web ve Mobil Geliştirme Üzerine",
    description:
      "Yazılım, web ve mobil geliştirme, Next.js, React, Supabase ve SwiftUI hakkında makaleler, ipuçları ve öğreticiler.",
    images: ["/blog/blog-cover.jpg"],
    creator: "@sencerdev",
  },
}

export default async function BlogPage() {
  // Veritabanından blog yazılarını, kategorileri ve etiketleri getir
  const blogPosts = await getAllPublishedPosts()
  const categories = await getAllCategories()
  const tags = await getAllTags()

  return (
    <>
      <Script id="blog-structured-data" type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Blog",
          headline: "Sencer Gök Blog - Yazılım, Web ve Mobil Geliştirme",
          description:
            "Yazılım, web ve mobil geliştirme, Next.js, React, Supabase ve SwiftUI hakkında makaleler, ipuçları ve öğreticiler.",
          author: {
            "@type": "Person",
            name: "Sencer Gök",
            url: "https://sencergok.site",
          },
          publisher: {
            "@type": "Person",
            name: "Sencer Gök",
            logo: {
              "@type": "ImageObject",
              url: "https://sencergok.site/logo.png",
            },
          },
          url: "https://sencergok.site/blog",
          mainEntityOfPage: {
            "@type": "WebPage",
            "@id": "https://sencergok.site/blog",
          },
          blogPost: blogPosts.map((post) => ({
            "@type": "BlogPosting",
            headline: post.title,
            description: post.excerpt,
            datePublished: post.published_at,
            author: {
              "@type": "Person",
              name: "Sencer Gök",
            },
            url: `https://sencergok.site/blog/${post.slug}`,
          })),
        })}
      </Script>

      <div className="container mx-auto px-4 py-20 pt-32">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Ana içerik */}
          <div className="w-full md:w-2/3">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog</h1>
            <p className="text-lg mb-8">
              Yazılım, web ve mobil geliştirme üzerine düşüncelerimi, öğrendiklerimi ve ipuçlarını paylaştığım blog
              yazılarım.
            </p>

            <div className="grid grid-cols-1 gap-8">
              {blogPosts.length > 0 ? (
                blogPosts.map((post) => (
                  <article
                    key={post.id}
                    className="bg-card rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row h-full"
                  >
                    <div className="relative h-60 md:h-auto md:w-1/3 overflow-hidden">
                      <Image
                        src={post.image_url || "/placeholder.svg?height=400&width=600"}
                        alt={post.title}
                        fill
                        className="object-cover transition-transform duration-700 hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-6 flex-1 flex flex-col md:w-2/3">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full">{post.category}</span>
                        <time dateTime={post.published_at} className="text-sm text-foreground/60 flex items-center">
                          <Calendar className="h-3 w-3 mr-1" />
                          {new Date(post.published_at).toLocaleDateString("tr-TR", {
                            year: "numeric",
                            month: "long",
                            day: "numeric",
                          })}
                        </time>
                      </div>
                      <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                        <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                      </h2>
                      <p className="text-foreground/80 mb-4 flex-1">{post.excerpt}</p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full"
                          >
                            #{tag}
                          </span>
                        ))}
                        {post.tags.length > 3 && (
                          <span className="text-xs bg-secondary text-secondary-foreground px-2 py-1 rounded-full">
                            +{post.tags.length - 3}
                          </span>
                        )}
                      </div>

                      <Link
                        href={`/blog/${post.slug}`}
                        className="text-primary hover:underline font-medium inline-flex items-center mt-auto self-start"
                      >
                        Devamını Oku
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </Link>
                    </div>
                  </article>
                ))
              ) : (
                <div className="text-center py-12">
                  <p className="text-foreground/70">Henüz blog yazısı bulunmamaktadır.</p>
                </div>
              )}
            </div>
          </div>

          {/* Sidebar */}
          <div className="w-full md:w-1/3">
            {/* Arama */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-6">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Search className="h-4 w-4 mr-2" />
                Blog'da Ara
              </h3>
              <form action="/blog/search" method="get">
                <div className="relative">
                  <input
                    type="text"
                    name="q"
                    placeholder="Arama yap..."
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                  />
                  <Button type="submit" size="sm" className="absolute right-1 top-1">
                    Ara
                  </Button>
                </div>
              </form>
            </div>

            {/* Kategoriler */}
            <div className="bg-card rounded-lg p-6 shadow-sm border mb-6">
              <h3 className="text-lg font-bold mb-4">Kategoriler</h3>
              <ul className="space-y-2">
                {categories.map((category) => (
                  <li key={category.id}>
                    <Link
                      href={`/blog/kategori/${category.slug}`}
                      className="flex items-center justify-between text-foreground/80 hover:text-primary transition-colors"
                    >
                      <span>{category.name}</span>
                      <span className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full">
                        {blogPosts.filter((post) => post.category === category.name).length}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Etiketler */}
            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <h3 className="text-lg font-bold mb-4 flex items-center">
                <Tag className="h-4 w-4 mr-2" />
                Etiketler
              </h3>
              <div className="flex flex-wrap gap-2">
                {tags.map((tag) => (
                  <Link
                    key={tag}
                    href={`/blog/etiket/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                    className="text-sm bg-secondary text-secondary-foreground px-3 py-1 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                  >
                    #{tag}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

