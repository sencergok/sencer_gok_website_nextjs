import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Image from "next/image"

const skills = [
  {
    category: "Mobil Geliştirme",
    items: ["iOS Geliştirme", "Swift", "SwiftUI", "UIKit", "Xcode"]
  },
  {
    category: "Teknolojiler",
    items: ["Yapay Zeka", "Machine Learning", "REST API", "Git", "CI/CD"]
  },
  {
    category: "Tasarım",
    items: ["UX Tasarım", "UI Tasarım", "Figma", "Sketch", "Prototyping"]
  }
]

export default function About() {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <section className="relative rounded-3xl overflow-hidden mb-16 py-20 bg-gradient-to-r from-purple-900 to-blue-900">
          <div className="absolute inset-0 bg-grid-white/10" />
          <div className="relative flex flex-col items-center text-center px-4">
            <div className="relative w-40 h-40 mb-8 rounded-full overflow-hidden ring-4 ring-purple-500/20 shadow-xl">
              <Image
                src="/images/profile.webp"
                alt="Sencer Gök"
                fill
                className="object-cover"
                priority
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="bg-gradient-to-r from-purple-300 to-blue-300 text-transparent bg-clip-text">
                Merhaba, Ben Sencer!
              </span>
            </h1>
            <p className="text-xl text-gray-100 max-w-2xl">
              Mobil uygulama geliştirici olarak, kullanıcı deneyimini ön planda
              tutan ve yenilikçi çözümler üreten bir yazılım mühendisiyim.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto">
          <div className="grid gap-8">
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">Deneyim</CardTitle>
                <CardDescription className="text-lg">
                  Profesyonel deneyimlerim ve başarılarım
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  App Store&apos;da yer alan başarılı uygulamalarla kullanıcılara değer
                  katmaya devam ediyorum. Cooka, EhliyetBox ve MasalAI projeleriyle
                  binlerce kullanıcıya ulaştım.
                </p>
                <p className="text-muted-foreground">
                  Yapay zeka teknolojilerini mobil uygulamalara entegre ederek
                  kullanıcı deneyimini geliştirmeye odaklanıyorum. Her projede
                  en son teknolojileri kullanarak yenilikçi çözümler üretiyorum.
                </p>
              </CardContent>
            </Card>

            <div className="grid md:grid-cols-3 gap-6">
              {skills.map((skillGroup, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
                  <CardHeader>
                    <CardTitle className="group-hover:text-purple-600 transition-colors">{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
                          className="flex items-center text-sm text-muted-foreground group-hover:text-purple-600/80 transition-colors"
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
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-purple-500/20">
              <CardHeader>
                <CardTitle className="text-2xl group-hover:text-purple-600 transition-colors">Eğitim</CardTitle>
                <CardDescription className="text-lg">
                  Akademik geçmişim ve sürekli öğrenme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yönetim Bilişim Sistemleri alanında lisans eğitimimi tamamladıktan sonra,
                  sürekli olarak kendimi geliştirmeye ve yeni teknolojileri öğrenmeye
                  devam ediyorum. Özellikle mobil teknolojiler ve frontend teknolojilerini yakından takip ediyorum.
                  Yazılım dünyasında süregelen yenilikleri sıkı takip ediyor ve bu yeniliklere adapte olmaya çalışıyorum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 