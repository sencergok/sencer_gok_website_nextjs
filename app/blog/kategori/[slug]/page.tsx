import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getCategoryBySlug, getPostsByCategory } from "@/lib/blog-service"
import { generateBlogKeywords } from "@/lib/seo-utils"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    return {
      title: "Kategori Bulunamadı | Sencer Gök Blog",
      description: "Aradığınız kategori bulunamadı.",
    }
  }

  return {
    title: `${category.name} | Sencer Gök Blog`,
    description: category.description || `${category.name} kategorisindeki yazılar - Sencer Gök Blog`,
    keywords: generateBlogKeywords(category.name, category.name),
    alternates: {
      canonical: `https://sencergok.site/blog/kategori/${category.slug}`,
    },
    openGraph: {
      title: `${category.name} | Sencer Gök Blog`,
      description: category.description || `${category.name} kategorisindeki yazılar - Sencer Gök Blog`,
      url: `https://sencergok.site/blog/kategori/${category.slug}`,
      type: "website",
    },
  }
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
  const category = await getCategoryBySlug(params.slug)

  if (!category) {
    notFound()
  }

  const posts = await getPostsByCategory(params.slug)

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tüm Yazılara Dön
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">{category.name}</h1>

      {category.description && <p className="text-lg mb-8">{category.description}</p>}

      {posts.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-card rounded-lg overflow-hidden shadow-md border hover:shadow-xl transition-all duration-300 flex flex-col h-full"
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={post.image_url || "/placeholder.svg?height=400&width=600"}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <time dateTime={post.published_at} className="text-sm text-foreground/60 mb-2 block">
                  {new Date(post.published_at).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
                <h2 className="text-xl font-bold mb-3 hover:text-primary transition-colors">
                  <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                </h2>
                <p className="text-foreground/80 mb-4 flex-1">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="text-primary hover:underline font-medium inline-flex items-center mt-auto"
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
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-foreground/70">Bu kategoride henüz yazı bulunmamaktadır.</p>
        </div>
      )}
    </div>
  )
}

