import Link from "next/link"

const Footer = () => {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Hakkımda Bölümü */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">Sencer Gök</h3>
            <p className="text-sm text-muted-foreground">
              Mobil uygulama geliştirici ve yazılım mühendisi olarak yenilikçi çözümler üretiyorum.
            </p>
          </div>

          {/* Hızlı Linkler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Hızlı Linkler</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/projeler" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Projeler
                </Link>
              </li>
              <li>
                <Link href="/hakkimda" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Hakkımda
                </Link>
              </li>
              <li>
                <Link href="/iletisim" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  İletişim
                </Link>
              </li>
            </ul>
          </div>

          {/* Projeler */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Projeler</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://apps.apple.com/tr/app/cooka/id6738347469" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Cooka
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/us/app/ehliyetbox-ehliyet-s%C4%B1nav-soru/id6740466156" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  EhliyetBox
                </a>
              </li>
              <li>
                <a href="https://apps.apple.com/tr/app/masalai-sonsuz-masal-deneyimi/id6737716152" target="_blank" rel="noopener noreferrer" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  MasalAI
                </a>
              </li>
            </ul>
          </div>

          {/* İletişim */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">İletişim</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">
                sencergok@outlook.com
              </li>
              <li className="text-sm text-muted-foreground">
                +90 (545) 810 74 60
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Sencer Gök. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 