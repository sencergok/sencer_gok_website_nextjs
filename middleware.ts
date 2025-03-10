import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// Bu middleware, güvenlik başlıklarını ekler ve SEO için yönlendirmeleri yönetir
export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Güvenlik başlıkları
  response.headers.set("X-Content-Type-Options", "nosniff")
  response.headers.set("X-Frame-Options", "SAMEORIGIN")
  response.headers.set("X-XSS-Protection", "1; mode=block")
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin")
  response.headers.set("Permissions-Policy", "camera=(), microphone=(), geolocation=()")

  // Eski URL'leri yeni URL'lere yönlendir (SEO için)
  if (request.nextUrl.pathname.startsWith("/portfolio")) {
    return NextResponse.redirect(new URL("/#projects", request.url))
  }

  if (request.nextUrl.pathname.startsWith("/about")) {
    return NextResponse.redirect(new URL("/#about", request.url))
  }

  if (request.nextUrl.pathname.startsWith("/contact")) {
    return NextResponse.redirect(new URL("/#contact", request.url))
  }

  return response
}

// Middleware'in çalışacağı yollar
export const config = {
  matcher: [
    /*
     * Tüm istekleri eşleştir
     * - Statik dosyalar hariç (public klasöründeki dosyalar)
     * - API istekleri hariç
     * - _next altındaki dosyalar hariç
     */
    "/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml|.*\\.png$|.*\\.jpg$|.*\\.svg$).*)",
  ],
}

