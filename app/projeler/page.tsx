import { Navbar } from "@/components/Navbar"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Cooka",
    description: "Yapay zeka destekli yemek tarifi uygulaması",
    longDescription: "Cooka, yapay zeka teknolojisini kullanarak kullanıcıların evlerindeki malzemelerle yapabilecekleri en uygun tarifleri öneren akıllı bir mutfak asistanıdır. Uygulama, kullanıcıların yemek tercihlerini ve diyet kısıtlamalarını öğrenerek kişiselleştirilmiş öneriler sunar.",
    image: "/cooka.png",
    appStoreLink: "#",
    features: [
      "Malzeme tarama ve tanıma",
      "Kişiselleştirilmiş tarifler",
      "Adım adım görsel rehberlik",
      "Besin değeri hesaplama",
    ]
  },
  {
    id: 2,
    title: "EhliyetBox",
    description: "Ehliyet sınavına hazırlık uygulaması",
    longDescription: "EhliyetBox, ehliyet sınavına hazırlanan adaylar için kapsamlı bir eğitim platformudur. Güncel müfredata uygun içerikler, soru bankası ve deneme sınavlarıyla kullanıcıların başarı şansını artırır.",
    image: "/ehliyetbox.png",
    appStoreLink: "#",
    features: [
      "Kapsamlı soru bankası",
      "Video dersler",
      "Deneme sınavları",
      "İstatistikler ve analiz",
    ]
  },
  {
    id: 3,
    title: "MasalAI",
    description: "Yapay zeka ile kişiselleştirilmiş çocuk masalları",
    longDescription: "MasalAI, yapay zeka teknolojisini kullanarak her çocuğun ilgi alanlarına ve gelişim düzeyine uygun özgün masallar üreten yenilikçi bir uygulamadır. Ebeveynler ve çocuklar için interaktif bir hikaye deneyimi sunar.",
    image: "/masalai.png",
    appStoreLink: "#",
    features: [
      "Kişiselleştirilmiş hikayeler",
      "Sesli anlatım",
      "Eğitici içerikler",
      "Ebeveyn kontrolü",
    ]
  },
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold text-center mb-12">Projelerim</h1>
          <div className="space-y-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden">
                <div className="md:grid md:grid-cols-3 md:gap-6">
                  <div className="relative h-64 md:h-full md:col-span-1">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <CardHeader>
                      <CardTitle>{project.title}</CardTitle>
                      <CardDescription>{project.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {project.longDescription}
                      </p>
                      <div className="grid grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center text-sm text-muted-foreground"
                          >
                            <svg
                              className="mr-2 h-4 w-4"
                              fill="none"
                              stroke="currentColor"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button asChild>
                        <a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          App Store'da Görüntüle
                        </a>
                      </Button>
                    </CardFooter>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
} 