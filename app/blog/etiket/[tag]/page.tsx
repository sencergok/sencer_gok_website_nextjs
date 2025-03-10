import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { ArrowLeft } from "lucide-react"
import { getPostsByTag } from "@/lib/blog-service"
import { generateBlogKeywords } from "@/lib/seo-utils"

export async function generateMetadata({ params }: { params: { tag: string } }): Promise<Metadata> {
  const tag = params.tag.replace(/-/g, " ")

  return {
    title: `${tag} | Sencer Gök Blog`,
    description: `${tag} etiketine sahip yazılar - Sencer Gök Blog`,
    keywords: generateBlogKeywords(tag, ""),
    alternates: {
      canonical: `https://sencergok.site/blog/etiket/${params.tag}`,
    },
    openGraph: {
      title: `${tag} | Sencer Gök Blog`,
      description: `${tag} etiketine sahip yazılar - Sencer Gök Blog`,
      url: `https://sencergok.site/blog/etiket/${params.tag}`,
      type: "website",
    },
  }
}

export default async function TagPage({ params }: { params: { tag: string } }) {
  const tag = params.tag.replace(/-/g, " ")
  const posts = await getPostsByTag(tag)

  if (posts.length === 0) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tüm Yazılara Dön
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">#{tag}</h1>
      <p className="text-lg mb-8">"{tag}" etiketine sahip yazılar</p>

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
              <div className="flex items-center gap-2 mb-2">
                <Link
                  href={`/blog/kategori/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full hover:bg-primary transition-colors"
                >
                  {post.category}
                </Link>
                <time dateTime={post.published_at} className="text-sm text-foreground/60">
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
    </div>
  )
}

