import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const projects = [
  {
    id: 1,
    title: "Cooka",
    description: "Yapay zeka destekli yemek tarifi uygulaması",
    longDescription: "Cooka, yapay zeka teknolojisini kullanarak kullanıcıların evlerindeki malzemelerle yapabilecekleri en uygun tarifleri öneren akıllı bir mutfak asistanıdır. Uygulama, kullanıcıların yemek tercihlerini ve diyet kısıtlamalarını öğrenerek kişiselleştirilmiş öneriler sunar.",
    image: "/images/cooka.jpg",
    appStoreLink: "https://apps.apple.com/tr/app/cooka/id6738347469",
    features: [
      "Malzeme tarama ve tanıma",
      "Kişiselleştirilmiş tarifler",
      "Adım adım görsel rehberlik",
      "Besin değeri hesaplama",
    ],
    screenshots: [
      "/images/cooka-screen1.jpg",
      "/images/cooka-screen2.jpg",
      "/images/cooka-screen3.jpg"
    ]
  },
  {
    id: 2,
    title: "EhliyetBox",
    description: "Ehliyet sınavına hazırlık uygulaması",
    longDescription: "EhliyetBox, ehliyet sınavına hazırlanan adaylar için kapsamlı bir eğitim platformudur. Güncel müfredata uygun içerikler, soru bankası ve deneme sınavlarıyla kullanıcıların başarı şansını artırır.",
    image: "/images/ehliyetbox.png",
    appStoreLink: "https://apps.apple.com/us/app/ehliyetbox-ehliyet-s%C4%B1nav-soru/id6740466156",
    features: [
      "Kapsamlı soru bankası",
      "Video dersler",
      "Deneme sınavları",
      "İstatistikler ve analiz",
    ],
    screenshots: [
      "/images/ehliyetbox-screen1.png",
      "/images/ehliyetbox-screen2.png",
      "/images/ehliyetbox-screen3.png"
    ]
  },
  {
    id: 3,
    title: "MasalAI",
    description: "Yapay zeka ile kişiselleştirilmiş çocuk masalları",
    longDescription: "MasalAI, yapay zeka teknolojisini kullanarak her çocuğun ilgi alanlarına ve gelişim düzeyine uygun özgün masallar üreten yenilikçi bir uygulamadır. Ebeveynler ve çocuklar için interaktif bir hikaye deneyimi sunar.",
    image: "/images/masalai.png",
    appStoreLink: "https://apps.apple.com/tr/app/masalai-sonsuz-masal-deneyimi/id6737716152",
    features: [
      "Kişiselleştirilmiş hikayeler",
      "Sesli anlatım",
      "Eğitici içerikler",
      "Ebeveyn kontrolü",
    ],
    screenshots: [
      "/images/masalai-screen1.jpg",
      "/images/masalai-screen2.jpg",
      "/images/masalai-screen3.jpg"
    ]
  }
]

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16 py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative max-w-4xl mx-auto text-center px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
                Projelerim
              </span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              App Store&apos;da yer alan başarılı projelerimle kullanıcılara değer katmaya devam ediyorum.
              Her bir proje, kullanıcı deneyimini en üst düzeyde tutmayı hedefliyor.
            </p>
          </div>
        </section>

        {/* Projects Section */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {projects.map((project) => (
              <Card key={project.id} className="overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6">
                  <div className="space-y-6">
                    <div className="relative h-64 w-full rounded-lg overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="grid grid-cols-3 gap-3">
                      {project.screenshots.map((screenshot, index) => (
                        <div key={index} className="relative h-20 w-full rounded-md overflow-hidden">
                          <Image
                            src={screenshot}
                            alt={`${project.title} Screenshot ${index + 1}`}
                            fill
                            className="object-cover hover:scale-110 transition-transform duration-300"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <CardHeader className="p-0">
                      <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">
                        {project.title}
                      </CardTitle>
                      <CardDescription className="text-lg mt-2">
                        {project.description}
                      </CardDescription>
                    </CardHeader>
                    
                    <CardContent className="p-0 space-y-6">
                      <p className="text-muted-foreground">
                        {project.longDescription}
                      </p>
                      
                      <div>
                        <h4 className="font-semibold mb-3 text-purple-600">Özellikler</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {project.features.map((feature, index) => (
                            <div
                              key={index}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <svg
                                className="mr-2 h-4 w-4 text-purple-500"
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
                      </div>
                    </CardContent>
                    
                    <CardFooter className="p-0">
                      <Button asChild className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                        <a
                          href={project.appStoreLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          App Store&apos;da Görüntüle
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