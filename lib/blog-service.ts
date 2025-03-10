import { supabase } from "@/lib/supabase"

export type BlogPost = {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image_url: string
  category: string
  tags: string[]
  published_at: string
  updated_at: string
  author: string | null
  is_published: boolean
}

export type BlogCategory = {
  id: string
  name: string
  slug: string
  description: string | null
  created_at: string
}

// Tüm yayınlanmış blog yazılarını getir
export async function getAllPublishedPosts() {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error("Blog yazıları alınırken hata oluştu:", error)
    return []
  }

  return data as BlogPost[]
}

// Belirli bir blog yazısını slug'a göre getir
export async function getPostBySlug(slug: string) {
  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("is_published", true)
    .single()

  if (error) {
    console.error(`${slug} slug'ına sahip blog yazısı alınırken hata oluştu:`, error)
    return null
  }

  return data as BlogPost
}

// Belirli bir kategorideki blog yazılarını getir
export async function getPostsByCategory(categorySlug: string) {
  // Önce kategori adını bul
  const { data: category, error: categoryError } = await supabase
    .from("blog_categories")
    .select("name")
    .eq("slug", categorySlug)
    .single()

  if (categoryError || !category) {
    console.error(`${categorySlug} slug'ına sahip kategori bulunamadı:`, categoryError)
    return []
  }

  const { data, error } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category", category.name)
    .eq("is_published", true)
    .order("published_at", { ascending: false })

  if (error) {
    console.error(`${categorySlug} kategorisindeki blog yazıları alınırken hata oluştu:`, error)
    return []
  }

  return data as BlogPost[]
}

// Belirli bir etikete sahip blog yazılarını getir
export async function getPostsByTag(tag: string) {
  const { data, error } = await supabase.rpc("search_posts_by_tag", { search_tag: tag })

  if (error) {
    console.error(`${tag} etiketine sahip blog yazıları alınırken hata oluştu:`, error)
    return []
  }

  return data as BlogPost[]
}

// İçeriğe göre blog yazılarını ara
export async function searchPosts(searchTerm: string) {
  const { data, error } = await supabase.rpc("search_posts_by_content", { search_term: searchTerm })

  if (error) {
    console.error(`Blog yazıları aranırken hata oluştu:`, error)
    return []
  }

  return data as BlogPost[]
}

// Tüm kategorileri getir
export async function getAllCategories() {
  const { data, error } = await supabase.from("blog_categories").select("*").order("name", { ascending: true })

  if (error) {
    console.error("Kategoriler alınırken hata oluştu:", error)
    return []
  }

  return data as BlogCategory[]
}

// Belirli bir kategoriyi slug'a göre getir
export async function getCategoryBySlug(slug: string) {
  const { data, error } = await supabase.from("blog_categories").select("*").eq("slug", slug).single()

  if (error) {
    console.error(`${slug} slug'ına sahip kategori alınırken hata oluştu:`, error)
    return null
  }

  return data as BlogCategory
}

// Tüm benzersiz etiketleri getir
export async function getAllTags() {
  const { data, error } = await supabase.from("blog_posts").select("tags").eq("is_published", true)

  if (error) {
    console.error("Etiketler alınırken hata oluştu:", error)
    return []
  }

  // Tüm etiketleri düzleştir ve benzersiz yap
  const allTags = data.flatMap((post) => post.tags)
  const uniqueTags = [...new Set(allTags)]

  return uniqueTags.sort()
}

// İlgili blog yazılarını getir
export async function getRelatedPosts(currentPostId: string, category: string, tags: string[], limit = 3) {
  // Önce aynı kategorideki yazıları getir
  const { data: categoryPosts, error: categoryError } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("category", category)
    .eq("is_published", true)
    .neq("id", currentPostId)
    .limit(limit)

  if (categoryError) {
    console.error("İlgili yazılar alınırken hata oluştu:", categoryError)
    return []
  }

  // Yeterli yazı varsa döndür
  if (categoryPosts.length >= limit) {
    return categoryPosts as BlogPost[]
  }

  // Yeterli yazı yoksa, etiketlere göre de getir
  const remainingLimit = limit - categoryPosts.length

  if (tags.length > 0 && remainingLimit > 0) {
    const { data: tagPosts, error: tagError } = await supabase
      .rpc("search_posts_by_tag", { search_tag: tags[0] })
      .neq("id", currentPostId)
      .not("id", "in", `(${categoryPosts.map((p) => p.id).join(",")})`)
      .limit(remainingLimit)

    if (tagError) {
      console.error("Etiketlere göre ilgili yazılar alınırken hata oluştu:", tagError)
      return categoryPosts as BlogPost[]
    }

    return [...categoryPosts, ...tagPosts] as BlogPost[]
  }

  return categoryPosts as BlogPost[]
}

