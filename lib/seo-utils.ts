// SEO yardımcı fonksiyonları
export const generateCanonicalUrl = (path = "") => {
  const baseUrl = "https://sencergok.site"
  return `${baseUrl}${path}`
}

export const generateStructuredData = (type = "Person") => {
  if (type === "Person") {
    return {
      "@context": "https://schema.org",
      "@type": "Person",
      name: "Sencer Gök",
      givenName: "Sencer",
      familyName: "Gök",
      url: "https://sencergok.site",
      image: "https://sencergok.site/profile-image.jpg",
      jobTitle: "Fullstack & Mobil Geliştirici",
      sameAs: [
        "https://github.com/sencergok", 
        "https://linkedin.com/in/sencergok", 
        "https://twitter.com/sencerdev"
      ],
      knowsAbout: [
        "Next.js", 
        "React", 
        "Supabase", 
        "SwiftUI", 
        "JavaScript", 
        "TypeScript", 
        "Node.js", 
        "Web Geliştirme", 
        "Mobil Uygulama Geliştirme"
      ],
      address: {
        "@type": "PostalAddress",
        addressLocality: "Ankara",
        addressRegion: "Ankara",
        addressCountry: "TR",
      },
      alumniOf: {
        "@type": "EducationalOrganization",
        name: "Başkent Üniversitesi",
        department: "Yönetim Bilişim Sistemleri",
      },
      birthDate: "2002",
      birthPlace: {
        "@type": "Place",
        address: {
          "@type": "PostalAddress",
          addressLocality: "Ankara",
          addressCountry: "TR",
        },
      },
      worksFor: {
        "@type": "Organization",
        name: "Freelance Yazılım Geliştirici",
        description: "Ankara merkezli profesyonel yazılım geliştirme hizmetleri",
        url: "https://sencergok.site"
      },
      description:
        "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren deneyimli fullstack yazılım geliştiricisi. Next.js, React, Supabase ve SwiftUI uzmanı olarak profesyonel çözümler sunuyorum.",
      makesOffer: {
        "@type": "Offer",
        itemOffered: [
          {
            "@type": "Service",
            name: "Web Uygulama Geliştirme",
            description: "Modern ve performanslı web uygulamaları geliştirme hizmeti"
          },
          {
            "@type": "Service",
            name: "Mobil Uygulama Geliştirme",
            description: "iOS için natif mobil uygulamalar geliştirme hizmeti"
          },
          {
            "@type": "Service",
            name: "Fullstack Yazılım Geliştirme",
            description: "Uçtan uca yazılım çözümleri geliştirme hizmeti"
          }
        ]
      }
    }
  } else if (type === "BlogPosting") {
    // Bu fonksiyon blog yazıları için çağrıldığında kullanılacak
    return {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      // Diğer alanlar dinamik olarak doldurulacak
    }
  } else if (type === "WebSite") {
    return {
      "@context": "https://schema.org",
      "@type": "WebSite",
      url: "https://sencergok.site",
      name: "Sencer Gök | Ankara'nın Öncü Fullstack & Mobil Geliştiricisi",
      description: "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren deneyimli fullstack yazılım geliştiricisi.",
      author: {
        "@type": "Person",
        name: "Sencer Gök",
        url: "https://sencergok.site"
      },
      publisher: {
        "@type": "Person",
        name: "Sencer Gök",
        url: "https://sencergok.site"
      },
      potentialAction: {
        "@type": "SearchAction",
        target: "https://sencergok.site/blog?q={search_term_string}",
        "query-input": "required name=search_term_string",
      },
      inLanguage: "tr-TR",
      copyrightYear: new Date().getFullYear(),
      mainEntity: {
        "@type": "WebPage",
        "@id": "https://sencergok.site/#webpage",
        url: "https://sencergok.site",
        name: "Sencer Gök | Ankara'nın Öncü Fullstack & Mobil Geliştiricisi",
        description: "Sencer Gök, Ankara'da modern web ve mobil uygulamalar geliştiren deneyimli fullstack yazılım geliştiricisi."
      }
    }
  }
}

export const generateSeoKeywords = () => {
  return [
    // Kişisel bilgiler - varyasyonlar ve öne çıkan anahtar kelimeler en başa
    "Sencer Gök",
    "sencer gök",
    "Ankara Sencer Gök",
    "Ankara fullstack geliştirici Sencer Gök",
    "Sencer Gök yazılım",
    "sencer gök yazılımcı",
    "sencer gök developer",
    "sencer gök Ankara",
    "sencer gök web developer",
    "sencer gök mobil geliştirici",
    "sencer gök fullstack",
    "sencer",
    "sencergok",
    "sencergokk",
    "sencer gok",
    "sencer g",
    "sencer gk",
    "sencer göök",
    "sencer goek",
    "sencer geliştirici",
    "sencer developer",
    "sencer yazılım",
    "sencer yazılımcı",
    "sencer mobil",
    "sencer ios",
    "sencer swift",
    "sencer react",
    "sencer nextjs",

    // Eğitim ve konum - işverenler için önemli anahtar kelimeler
    "Başkent Üniversitesi yazılım geliştirici",
    "Başkent Üniversitesi YBS",
    "Yönetim Bilişim Sistemleri öğrencisi",
    "Ankara yazılım geliştirici",
    "Ankara fullstack developer",
    "Ankara mobil uygulama geliştirici",
    "Ankara web developer",
    "Ankara en iyi yazılımcı",
    "Ankara profesyonel web geliştirici",
    "Ankara SEO dostu web geliştirici",
    "Ankara iOS geliştirici",
    "Ankara freelance yazılımcı",
    "Ankara frontend geliştirici",
    "Ankara backend geliştirici",

    // Uzmanlık alanları - teknik kelimeler
    "fullstack geliştirici",
    "mobil geliştirici",
    "Next.js uzmanı",
    "React geliştirici",
    "Supabase",
    "SwiftUI",
    "web geliştirme",
    "mobil uygulama geliştirme",
    "frontend geliştirici",
    "backend geliştirici",
    "yazılım mühendisi",
    "yazılım geliştirici",
    "Ankara yazılım geliştirici",
    "Ankara mobil geliştirici",
    "Ankara fullstack geliştirici",
    "Ankara iOS geliştirici",
    "Türkiye yazılım geliştirici",
    "SEO optimizasyonu",
    "responsive web tasarımı",
    "Türkçe SEO uzmanı",

    // Hizmetler ve yetenekler - müşterilere yönelik kelimeler
    "freelance yazılım geliştirici",
    "react native uzmanı",
    "typescript geliştirici",
    "javascript uzmanı",
    "mobil uygulama geliştiricisi",
    "ios uygulama geliştirme",
    "web sitesi geliştirme",
    "fullstack developer",
    "yazılım danışmanı",
    "yazılım çözümleri",
    "özel yazılım geliştirme",
    "web uygulaması geliştirme",
    "responsive web tasarımı",
    "kullanıcı arayüzü tasarımı",
    "kullanıcı deneyimi",
    "UX/UI geliştirici",
    "modern web teknolojileri",
    "performanslı web uygulamaları",
    "ölçeklenebilir yazılım çözümleri",
    "türkçe yazılım geliştirici",
    "Ankara web site yaptırma",
    "Ankara mobil uygulama yaptırma",

    // Müşteri hizmetleri ve iş fırsatları
    "2002 doğumlu yazılım geliştirici",
    "genç yazılım geliştirici",
    "öğrenci yazılım geliştirici",
    "Ankara'da yazılım geliştirme hizmetleri",
    "Türkiye'de mobil uygulama geliştirme",
    "iOS uygulaması yaptırma",
    "web sitesi yaptırma Ankara",
    "yazılım projesi geliştirme",
    "yazılım danışmanlığı hizmetleri",
    "kişisel web sitesi geliştirme",
    "kurumsal web sitesi geliştirme",
    "e-ticaret sitesi geliştirme",
    "SEO dostu web sitesi",
    "hızlı web uygulamaları",
    "güvenli web uygulamaları",
    "modern teknoloji stack",
    "yazılım portfolyosu",
    "yazılım blog",
    "teknoloji blog",
    "yazılım eğitimi",
    "yazılım ipuçları",
    "uygun fiyatlı web sitesi",
    "profesyonel web çözümleri",
    "güvenilir yazılımcı Ankara",
    "en iyi mobil uygulama geliştiricisi Ankara",
    "Ankara web site fiyatları",
    "Ankara yazılım danışmanı",
  ]
}

// Blog yazıları için anahtar kelimeler
export const generateBlogKeywords = (topic: string, category: string) => {
  const baseKeywords = [
    "yazılım blog",
    "teknoloji blog",
    "web geliştirme",
    "mobil geliştirme",
    "yazılım ipuçları",
    "kod örnekleri",
    "yazılım eğitimi",
    "Sencer Gök blog",
    "yazılım geliştirici blog",
    "Türkçe yazılım blog",
    "Türkçe teknoloji blog",
    "yazılım öğrenme",
    "programlama öğrenme",
    "yazılım kariyer",
    "yazılım geliştirme süreçleri",
  ]

  // Kategori bazlı anahtar kelimeler
  const categoryKeywords: Record<string, string[]> = {
    Kişisel: [
      "yazılım geliştirici kimdir",
      "yazılım geliştirici olmak",
      "yazılım geliştirici kariyer",
      "yazılım geliştirici eğitim",
      "yazılım geliştirici yol haritası",
      "yazılım geliştirici günlük",
      "yazılım geliştirici deneyimleri",
      "Sencer Gök kimdir",
      "Sencer Gök yazılım",
      "Sencer Gök developer",
      "Başkent Üniversitesi yazılım",
      "YBS öğrencisi yazılım",
      "Ankara yazılım geliştirici",
      "genç yazılım geliştirici",
    ],
    "Web Geliştirme": [
      "Next.js",
      "React",
      "JavaScript",
      "TypeScript",
      "web geliştirme",
      "frontend geliştirme",
      "responsive tasarım",
      "web uygulama geliştirme",
      "modern web teknolojileri",
      "web framework",
      "SSR",
      "CSR",
      "SSG",
      "JAMstack",
      "web performans",
      "web güvenlik",
      "web accessibility",
      "SEO optimizasyonu",
      "Next.js tutorial",
      "React hooks",
      "Next.js App Router",
      "Next.js Pages Router",
      "Next.js API Routes",
      "React Server Components",
    ],
    "Mobil Geliştirme": [
      "SwiftUI",
      "iOS geliştirme",
      "mobil uygulama geliştirme",
      "Swift programlama",
      "iOS tasarım",
      "iOS performans",
      "App Store yayınlama",
      "mobil UX/UI",
      "mobil app testing",
      "iOS framework",
      "iOS mimari",
      "MVVM",
      "MVC",
      "Swift Package Manager",
      "Xcode ipuçları",
      "iOS animasyonlar",
      "iOS bildirimler",
      "iOS veri depolama",
      "CoreData",
      "SwiftUI layout",
      "SwiftUI state management",
      "iOS app lifecycle",
    ],
    Backend: [
      "Supabase",
      "PostgreSQL",
      "veritabanı",
      "backend geliştirme",
      "API geliştirme",
      "sunucu taraflı programlama",
      "backend mimari",
      "veritabanı tasarımı",
      "veritabanı optimizasyonu",
      "backend güvenlik",
      "authentication",
      "authorization",
      "RESTful API",
      "GraphQL",
      "serverless",
      "microservices",
      "Node.js",
      "Express.js",
      "Firebase alternatifi",
      "BaaS",
      "backend as a service",
      "gerçek zamanlı veritabanı",
      "Supabase authentication",
      "Supabase storage",
      "Supabase functions",
    ],
  }

  // Konu bazlı anahtar kelimeler
  const topicKeywords = topic
    .toLowerCase()
    .split(" ")
    .filter((word) => word.length > 3)
    .flatMap((word) => [
      `${word}`,
      `${word} yazılım`,
      `${word} geliştirme`,
      `${word} tutorial`,
      `${word} örnek`,
      `${word} ipuçları`,
      `${word} rehber`,
    ])

  // Kategori anahtar kelimelerini ekle
  const specificCategoryKeywords = categoryKeywords[category] || []

  // Tüm anahtar kelimeleri birleştir ve benzersiz yap
  return [...new Set([...baseKeywords, ...specificCategoryKeywords, ...topicKeywords])]
}

// Blog yazısı için meta açıklaması oluştur
export const generateBlogDescription = (title: string, excerpt: string) => {
  return `${title} - ${excerpt} Sencer Gök'ün yazılım, web ve mobil geliştirme üzerine blog yazısı.`
}

// Blog yazısı için structured data oluştur
export const generateBlogStructuredData = (post: {
  title: string
  slug: string
  date: string
  excerpt: string
  content: string
  image: string
  category: string
}) => {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    datePublished: post.date,
    dateModified: post.date,
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
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://sencergok.site/blog/${post.slug}`,
    },
    keywords: generateBlogKeywords(post.title, post.category).join(", "),
  }
}

// Blog kategorileri
export const blogCategories = [
  "Kişisel",
  "Web Geliştirme",
  "Mobil Geliştirme",
  "Backend",
  "Frontend",
  "Yazılım Geliştirme",
  "Kariyer",
  "Eğitim",
  "Teknoloji",
]

// Blog etiketleri
export const blogTags = [
  "Next.js",
  "React",
  "SwiftUI",
  "iOS",
  "Supabase",
  "JavaScript",
  "TypeScript",
  "PostgreSQL",
  "API",
  "Frontend",
  "Backend",
  "Fullstack",
  "Mobil",
  "Web",
  "Veritabanı",
  "UI/UX",
  "Performans",
  "SEO",
  "Güvenlik",
  "Başlangıç",
  "İleri Seviye",
  "Mimari",
  "Tasarım",
  "Deployment",
  "Vercel",
  "App Store",
  "Xcode",
  "VSCode",
  "Git",
  "GitHub",
]

