import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from "@/components/ui/card"
import Link from "next/link"
import Image from "next/image"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sencer Gök | iOS Geliştirici & Mobil Uygulama Uzmanı",
  description: "iOS ve Mobil Uygulama Geliştirici Sencer Gök. App Store'da yer alan Cooka, EhliyetBox ve MasalAI projeleriyle kullanıcılara değer katıyor.",
  keywords: [
    "Sencer Gök",
    "iOS Geliştirici",
    "Mobil Uygulama Geliştirici",
    "Cooka App",
    "EhliyetBox",
    "MasalAI",
    "iOS Developer İstanbul",
    "Türk App Store Geliştirici"
  ],
  openGraph: {
    title: "Sencer Gök | iOS ve Mobil Uygulama Geliştirici",
    description: "App Store'da yer alan başarılı projeleriyle öne çıkan iOS ve mobil uygulama geliştirici Sencer Gök'ün portfolyo sitesi.",
  }
}

const projects = [
  {
    id: 1,
    title: "Cooka",
    description: "Yapay zeka destekli yemek tarifi uygulaması",
    content: "Kullanıcıların evdeki malzemelerle yapabilecekleri tarifleri öneren akıllı bir uygulama.",
    image: "/images/cooka.jpg",
    appStoreLink: "https://apps.apple.com/tr/app/cooka/id6738347469"
  },
  {
    id: 2,
    title: "EhliyetBox",
    description: "Ehliyet sınavına hazırlık uygulaması",
    content: "Binlerce soru ve detaylı konu anlatımlarıyla ehliyet sınavına hazırlık sürecini kolaylaştırır.",
    image: "/images/ehliyetbox.png",
    appStoreLink: "https://apps.apple.com/us/app/ehliyetbox-ehliyet-sınav-soru/id6740466156"
  },
  {
    id: 3,
    title: "MasalAI",
    description: "Yapay zeka ile kişiselleştirilmiş çocuk masalları",
    content: "Her çocuğun hayal gücüne ve ilgi alanlarına göre özel masallar üreten yenilikçi bir uygulama.",
    image: "/images/masalai.png",
    appStoreLink: "https://apps.apple.com/tr/app/masalai-sonsuz-masal-deneyimi/id6737716152"
  }
]

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4">
        {/* Hero Section */}
        <section className="min-h-[75vh] flex items-center justify-center py-8 md:py-8">
          <div className="w-full max-w-7xl mx-auto">
            <div className="flex flex-col md:grid md:grid-cols-12 gap-6 md:gap-8 items-center">
              {/* Sol Taraf - Profil Resmi */}
              <div className="w-full md:col-span-5 flex justify-center md:justify-start mb-6 md:mb-0">
                <div className="relative w-64 h-64 md:w-[400px] md:h-[400px]">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl" />
                  <div className="relative h-full rounded-full overflow-hidden ring-4 ring-purple-500/20 shadow-2xl">
                    <Image
                      src="/images/profile.webp"
                      alt="Sencer Gök"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>

              {/* Sağ Taraf - Metin Alanı */}
              <div className="w-full md:col-span-7 space-y-6 text-center md:text-left mt-4">
                <h1 className="text-2xl md:text-6xl lg:text-16xl font-bold tracking-tight">
                  <span className="bg-gradient-to-r from-purple-400 via-purple-300 to-blue-400 text-transparent bg-clip-text">
                    Mobil Uygulama Geliştirici
                  </span>
                </h1>
                <p className="text-xl md:text-xl text-muted-foreground leading-relaxed">
                  Merhaba! Ben Sencer. Kullanıcı deneyimini ön planda tutan, yenilikçi mobil uygulamalar geliştiriyorum. 
                  Yapay zeka teknolojilerini kullanarak App Store&apos;da yer alan projelerimle kullanıcılara değer katmaya devam ediyorum.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <Button asChild size="lg" className="text-lg bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                    <Link href="/projeler">Projelerimi İncele</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg border-purple-500/20 hover:bg-purple-500/10">
                    <Link href="/iletisim">İletişime Geç</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="max-w-5xl mx-auto text-center space-y-12 pb-12">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                Öne Çıkan Projelerim
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              App Store&apos;da yer alan başarılı projelerimle binlerce kullanıcıya ulaşıyorum.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Card key={project.id} className="flex flex-col group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
                <div className="relative h-52 w-full">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover rounded-t-lg"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-purple-600 transition-colors">{project.title}</CardTitle>
                  <CardDescription>{project.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    {project.content}
                  </p>
                </CardContent>
                <CardFooter className="mt-auto">
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
              </Card>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}
