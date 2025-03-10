import type { Metadata } from "next"
import Link from "next/link"
import { getAllPublishedPosts } from "@/lib/blog-service"
import { Button } from "@/components/ui/button"
import { Edit, Trash, Plus, Eye } from "lucide-react"

export const metadata: Metadata = {
  title: "Blog Yönetimi | Sencer Gök Admin",
  description: "Blog yazılarını yönetin",
  robots: {
    index: false,
    follow: false,
  },
}

export default async function AdminBlogPage() {
  const posts = await getAllPublishedPosts()

  return (
    <div className="container mx-auto px-4 py-20 pt-32">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Blog Yazıları</h1>
        <Button asChild>
          <Link href="/admin/blog/new">
            <Plus className="mr-2 h-4 w-4" />
            Yeni Yazı
          </Link>
        </Button>
      </div>

      <div className="bg-card rounded-lg shadow-sm border overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-muted/50">
                <th className="px-4 py-3 text-left">Başlık</th>
                <th className="px-4 py-3 text-left">Kategori</th>
                <th className="px-4 py-3 text-left">Tarih</th>
                <th className="px-4 py-3 text-left">Durum</th>
                <th className="px-4 py-3 text-right">İşlemler</th>
              </tr>
            </thead>
            <tbody>
              {posts.map((post) => (
                <tr key={post.id} className="border-t border-border hover:bg-muted/20">
                  <td className="px-4 py-3">
                    <div className="font-medium">{post.title}</div>
                    <div className="text-sm text-foreground/60">{post.slug}</div>
                  </td>
                  <td className="px-4 py-3">
                    <span className="bg-primary/10 text-primary px-2 py-1 rounded-full text-xs">{post.category}</span>
                  </td>
                  <td className="px-4 py-3 text-sm">{new Date(post.published_at).toLocaleDateString("tr-TR")}</td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs ${post.is_published ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300"}`}
                    >
                      {post.is_published ? "Yayında" : "Taslak"}
                    </span>
                  </td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex justify-end gap-2">
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/blog/${post.slug}`} target="_blank">
                          <Eye className="h-4 w-4" />
                          <span className="sr-only">Görüntüle</span>
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" asChild>
                        <Link href={`/admin/blog/edit/${post.id}`}>
                          <Edit className="h-4 w-4" />
                          <span className="sr-only">Düzenle</span>
                        </Link>
                      </Button>
                      <Button size="sm" variant="ghost" className="text-destructive">
                        <Trash className="h-4 w-4" />
                        <span className="sr-only">Sil</span>
                      </Button>
                    </div>
                  </td>
                </tr>
              ))}

              {posts.length === 0 && (
                <tr>
                  <td colSpan={5} className="px-4 py-8 text-center text-foreground/60">
                    Henüz blog yazısı bulunmamaktadır.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

