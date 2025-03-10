"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"
import Link from "next/link"

// Apple App Store'dan alınan projeler
const projects = [
  {
    title: "Cooka",
    description:
      "Cooka, yapay zeka teknolojisini kullanarak kullanıcıların evlerindeki malzemelerle yapabilecekleri en uygun tarifleri öneren akıllı bir mutfak asistanıdır. Uygulama, kullanıcıların yemek tercihlerini ve diyet kısıtlamalarını öğrenerek kişiselleştirilmiş tarif önerileri sunar.",
    image: "/projects/cooka.jpg",
    tags: ["SwiftUI", "iOS"],
    liveUrl: "https://apps.apple.com/tr/app/cooka/id6738347469",
    githubUrl: "https://github.com/sencergok",
  },
  {
    title: "MasalAI",
    description:
      "MasalAI, yapay zeka teknolojisini kullanarak her çocuğun ilgi alanlarına ve gelişim düzeyine uygun özgün masallar üreten yenilikçi bir uygulamadır. Ebeveynler ve çocuklar için interaktif bir hikaye deneyimi sunar.",
    image: "/projects/masalai.png",
    tags: ["SwiftUI", "iOS"],
    liveUrl: "https://apps.apple.com/tr/app/masalai-sonsuz-masal-deneyimi/id6737716152",
    githubUrl: "https://github.com/sencergok",
  },
  {
    title: "EhliyetBox",
    description:
      "EhliyetBox, ehliyet sınavına hazırlanan adaylar için kapsamlı bir eğitim platformudur. Güncel müfredata uygun içerikler, soru bankası ve deneme sınavlarıyla kullanıcıların başarı şansını artırır.",
    image: "/projects/ehliyetbox.png",
    tags: ["SwiftUI", "iOS"],
    liveUrl: "https://apps.apple.com/us/app/ehliyetbox-ehliyet-s%C4%B1nav-soru/id6740466156",
    githubUrl: "https://github.com/sencergok",
  },
  {
    title: "Notishine",
    description:
      "Notishine, günlük yaşamın koşuşturması içinde motivasyonunuzu artırmak için tasarlanmış bir uygulamadır. Kişiselleştirilmiş olumlu mesajlarla gününüzü aydınlatır ve hedeflerinize ulaşmanız için sizi teşvik eder.",
    image: "/projects/notishine.png",
    tags: ["SwiftUI", "iOS"],
    liveUrl: "https://apps.apple.com/us/app/notishine/id6742649551",
    githubUrl: "https://github.com/sencergok",
  },
]

export default function Projects() {
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
    <section id="projects" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Projelerim</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="bg-card rounded-lg overflow-hidden shadow-md border reveal group hover:shadow-xl transition-all duration-500"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg?height=600&width=800"}
                  alt={`${project.title} Projesi - Sencer Gök`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4">
                  <div className="text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.tags.map((tag) => (
                        <span key={tag} className="bg-primary/80 text-white px-2 py-1 rounded-full text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-foreground/80 mb-4">{project.description}</p>

                <div className="flex gap-4">
                  <Button
                    asChild
                    size="sm"
                    variant="outline"
                    className="group-hover:border-primary group-hover:text-primary transition-colors duration-300"
                  >
                  </Button>
                  <Button asChild size="sm" className="group-hover:bg-primary transition-colors duration-300">
                    <Link
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${project.title} App Store`}
                    >
                      <ExternalLink className="mr-2 h-4 w-4 group-hover:animate-pulse-slow" /> App Store
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link
              href="https://apps.apple.com/tr/developer/sencer-gok/id1777568061"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tüm Uygulamalarımı Görüntüle"
            >
              Tüm Uygulamalarımı Görüntüle
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

