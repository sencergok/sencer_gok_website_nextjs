"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Download } from "lucide-react"
import Link from "next/link"

export default function About() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in")
          }
        })
      },
      { threshold: 0.1 },
    )

    const elements = sectionRef.current?.querySelectorAll(".reveal")
    elements?.forEach((el) => observer.observe(el))

    return () => {
      elements?.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Hakkımda</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="reveal">
            <div className="relative w-full max-w-md mx-auto aspect-square rounded-full overflow-hidden border-4 border-primary/20 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 group-hover:opacity-0 transition-opacity duration-500"></div>
              <Image
                src="/profile-image.webp"
                alt="Sencer Gök - Fullstack ve Mobil Geliştirici"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                priority
                sizes="(max-width: 768px) 100vw, 400px"
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="bg-background/80 backdrop-blur-sm p-4 rounded-lg transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <p className="text-sm font-medium">Merhaba! 👋</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <h3 className="text-2xl font-bold mb-4">Fullstack & Mobil Geliştirici</h3>
            <p className="text-foreground/80 mb-6">
              Merhaba! Ben <strong>Sencer Gök</strong>, Ankara'da modern web ve mobil uygulamalar geliştiren tutkulu bir
              yazılım geliştiricisiyim. Kullanıcı deneyimini ön planda tutan, performanslı ve ölçeklenebilir çözümler
              üretmeye odaklanıyorum.
            </p>
            <p className="text-foreground/80 mb-6">
              <strong>Next.js</strong>, <strong>React</strong>, <strong>Supabase</strong> gibi modern web teknolojileri
              ve <strong>SwiftUI</strong> ile iOS uygulamaları geliştirme konusunda uzmanım. Hem frontend hem de backend
              tarafında çalışarak, projeleri baştan sona hayata geçirebiliyorum.
            </p>
            <p className="text-foreground/80 mb-8">
              Sürekli öğrenmeye ve kendimi geliştirmeye inanıyorum. Yeni teknolojileri keşfetmek ve bunları projelerimde
              uygulamak benim için her zaman heyecan verici.
            </p>

            <Button asChild>
              <Link href="/cv.pdf" download aria-label="CV'mi İndir">
                <Download className="mr-2 h-4 w-4" /> CV'mi İndir
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

