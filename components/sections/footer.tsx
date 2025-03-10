import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 bg-secondary/50 border-t">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-bold mb-4">Sencer Gök</h3>
            <p className="text-foreground/80 text-sm mb-4">
              Ankara'da modern web ve mobil uygulamalar geliştiren fullstack yazılım geliştiricisi.
            </p>
            <p className="text-foreground/80 text-sm">
              <a href="mailto:sencergok@outlook.com" className="hover:text-primary transition-colors">
                sencergok@outlook.com
              </a>
            </p>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Hızlı Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#about" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/#skills" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  Yetenekler
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-foreground/80 text-sm hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Bağlantılar</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/sencergok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/in/sencergok"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com/sencerdev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://apps.apple.com/tr/developer/sencer-gok/id1777568061"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-foreground/80 text-sm hover:text-primary transition-colors"
                >
                  App Store
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-foreground/80 text-sm">&copy; {currentYear} Sencer Gök. Tüm hakları saklıdır.</p>
          </div>
          <div>
            <p className="text-foreground/80 text-sm">
              <a href="https://sencergok.site" className="hover:text-primary transition-colors">
                sencergok.site
              </a>{" "}
              | Next.js, React, Supabase ve ❤️ ile yapıldı
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

