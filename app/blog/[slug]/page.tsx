import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, User } from "lucide-react"
import { generateBlogKeywords, generateBlogDescription, generateBlogStructuredData } from "@/lib/seo-utils"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { getPostBySlug, getRelatedPosts } from "@/lib/blog-service"

// Dinamik metadata oluşturma
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    return {
      title: "Yazı Bulunamadı | Sencer Gök Blog",
      description: "Aradığınız blog yazısı bulunamadı.",
    }
  }

  const keywords = generateBlogKeywords(post.title, post.category)

  return {
    title: `${post.title} | Sencer Gök Blog`,
    description: generateBlogDescription(post.title, post.excerpt),
    keywords: keywords,
    alternates: {
      canonical: `https://sencergok.site/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.published_at,
      authors: ["Sencer Gök"],
      tags: post.tags,
      images: [
        {
          url: post.image_url || "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: post.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: [post.image_url || "/og-image.jpg"],
      creator: "@sencerdev",
    },
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = await getPostBySlug(params.slug)

  if (!post) {
    notFound()
  }

  // İlgili yazılar
  const relatedPosts = await getRelatedPosts(post.id, post.category, post.tags, 2)

  return (
    <>
      <Script id="blog-post-structured-data" type="application/ld+json">
        {JSON.stringify(
          generateBlogStructuredData({
            title: post.title,
            slug: post.slug,
            date: post.published_at,
            excerpt: post.excerpt,
            content: post.content,
            image: post.image_url,
            category: post.category,
          }),
        )}
      </Script>

      <div className="container mx-auto px-4 py-20 pt-32">
        <Link href="/blog" className="inline-flex items-center text-primary hover:underline mb-8">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Tüm Yazılara Dön
        </Link>

        <article className="max-w-4xl mx-auto">
          <header className="mb-8">
            <div className="flex flex-wrap gap-2 mb-4">
              <Link
                href={`/blog/kategori/${post.category.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-primary/80 text-white text-xs px-2 py-1 rounded-full hover:bg-primary transition-colors"
              >
                {post.category}
              </Link>
              {post.tags.slice(0, 3).map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/etiket/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                  className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full hover:bg-secondary/80 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>

            <h1 className="text-3xl md:text-4xl font-bold mb-4">{post.title}</h1>

            <div className="flex items-center text-foreground/60 mb-6">
              <div className="flex items-center mr-6">
                <User className="h-4 w-4 mr-2" />
                <span>Sencer Gök</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-4 w-4 mr-2" />
                <time dateTime={post.published_at}>
                  {new Date(post.published_at).toLocaleDateString("tr-TR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </div>
            </div>

            <div className="relative aspect-video w-full overflow-hidden rounded-lg mb-8">
              <Image
                src={post.image_url || "/placeholder.svg?height=600&width=1200"}
                alt={post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 1200px"
              />
            </div>
          </header>

          <div
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-foreground prose-a:text-primary"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className="mt-8 pt-4 border-t flex flex-wrap gap-2 items-center">
            <span className="font-medium mr-2">Etiketler:</span>
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/etiket/${tag.toLowerCase().replace(/\s+/g, "-")}`}
                className="bg-secondary text-secondary-foreground text-xs px-2 py-1 rounded-full hover:bg-secondary/80 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>

          <div className="mt-6 pt-4 border-t">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">Paylaş</h3>
              <div className="flex gap-2">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(`https://sencergok.site/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter'da Paylaş"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                    </svg>
                    Twitter
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(`https://sencergok.site/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn'de Paylaş"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                    LinkedIn
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`https://sencergok.site/blog/${post.slug}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Facebook'ta Paylaş"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2"
                    >
                      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                    </svg>
                    Facebook
                  </a>
                </Button>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-6">İlgili Yazılar</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {relatedPosts.length > 0 ? (
                relatedPosts.map((relatedPost) => (
                  <div key={relatedPost.id} className="flex items-start space-x-4 group">
                    <div className="relative h-20 w-20 flex-shrink-0 overflow-hidden rounded">
                      <Image
                        src={relatedPost.image_url || "/placeholder.svg?height=200&width=200"}
                        alt={relatedPost.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                        sizes="80px"
                      />
                    </div>
                    <div>
                      <h4 className="font-medium group-hover:text-primary transition-colors">
                        <Link href={`/blog/${relatedPost.slug}`}>{relatedPost.title}</Link>
                      </h4>
                      <time dateTime={relatedPost.published_at} className="text-sm text-foreground/60">
                        {new Date(relatedPost.published_at).toLocaleDateString("tr-TR", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                    </div>
                  </div>
                ))
              ) : (
                <p className="col-span-2 text-foreground/70">Bu yazıyla ilgili başka yazı bulunamadı.</p>
              )}
            </div>
          </div>

          <div className="mt-12 pt-8 border-t">
            <h3 className="text-xl font-bold mb-4">Yorumlar</h3>
            <p className="text-foreground/70 mb-4">Bu yazı hakkında düşüncelerinizi paylaşın.</p>

            <div className="bg-card rounded-lg p-6 shadow-sm border">
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-sm font-medium">
                      İsim
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      placeholder="Adınız Soyadınız"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-sm font-medium">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-md border border-input bg-background"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="comment" className="block mb-2 text-sm font-medium">
                    Yorum
                  </label>
                  <textarea
                    id="comment"
                    rows={4}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background"
                    placeholder="Yorumunuzu buraya yazın..."
                  ></textarea>
                </div>
                <Button type="submit">Yorum Gönder</Button>
              </form>
            </div>
          </div>
        </article>
      </div>
    </>
  )
}

