import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, Search } from "lucide-react"
import { searchPosts } from "@/lib/blog-service"

export const metadata: Metadata = {
  title: "Blog Arama | Sencer Gök Blog",
  description: "Blog yazılarında arama yapın - Sencer Gök Blog",
  robots: {
    index: false,
    follow: true,
  },
}

export default async function SearchPage({
  searchParams,
}: {
  searchParams: { q: string }
}) {
  const searchQuery = searchParams.q || ""
  const posts = searchQuery ? await searchPosts(searchQuery) : []

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Tüm Yazılara Dön
      </Link>

      <h1 className="text-3xl md:text-4xl font-bold mb-4">Blog Arama</h1>

      <div className="bg-card rounded-lg p-6 shadow-sm border mb-8">
        <form action="/blog/search" method="get" className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-foreground/60" />
            <input
              type="text"
              name="q"
              placeholder="Blog yazılarında ara..."
              defaultValue={searchQuery}
              className="w-full pl-10 pr-4 py-2 rounded-md border border-input bg-background"
            />
          </div>
          <button
            type="submit"
            className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Ara
          </button>
        </form>
      </div>

      {searchQuery ? (
        <>
          <h2 className="text-xl font-bold mb-6">
            "{searchQuery}" için arama sonuçları ({posts.length})
          </h2>

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
          ) : (
            <div className="text-center py-12 bg-card rounded-lg shadow-sm border">
              <p className="text-foreground/70 mb-4">"{searchQuery}" için sonuç bulunamadı.</p>
              <p className="text-foreground/60">
                Farklı anahtar kelimeler deneyebilir veya kategorilere göz atabilirsiniz.
              </p>
            </div>
          )}
        </>
      ) : (
        <div className="text-center py-12 bg-card rounded-lg shadow-sm border">
          <p className="text-foreground/70">Arama yapmak için yukarıdaki kutuya bir anahtar kelime girin.</p>
        </div>
      )}
    </div>
  )
}

