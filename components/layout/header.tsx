"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Ana Sayfa", href: "#home", path: "/" },
  { name: "Hakkımda", href: "#about", path: "/#about" },
  { name: "Yetenekler", href: "#skills", path: "/#skills" },
  { name: "Projeler", href: "#projects", path: "/#projects" },
  { name: "Blog", href: "/blog", path: "/blog" },
  { name: "İletişim", href: "#contact", path: "/#contact" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname()
  const router = useRouter()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleNavigation = (href: string, path: string) => {
    setMobileMenuOpen(false)

    // Eğer blog sayfasındaysak ve anchor link'e tıklandıysa, ana sayfaya yönlendir
    if (pathname.startsWith("/blog") && href.startsWith("#")) {
      router.push(path)
      return
    }

    // Ana sayfadaysak ve anchor link'e tıklandıysa, smooth scroll yap
    if (pathname === "/" && href.startsWith("#")) {
      const element = document.querySelector(href)
      if (element) {
        element.scrollIntoView({ behavior: "smooth" })
      }
      return
    }

    // Diğer durumlarda normal link davranışı
    if (!href.startsWith("#")) {
      router.push(href)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold gradient-text transition-all duration-300">
          Sencer Gök
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavigation(item.href, item.path)}
              className="text-foreground/80 hover:text-primary transition-colors cursor-pointer"
            >
              {item.name}
            </button>
          ))}
          <ModeToggle />
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <ModeToggle />
          <Button variant="ghost" size="icon" onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="ml-2">
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background/95 backdrop-blur-md">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => handleNavigation(item.href, item.path)}
                className="text-foreground/80 hover:text-primary transition-colors py-2 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}

