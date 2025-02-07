import { Navbar } from "@/components/Navbar"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

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
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <Avatar className="h-32 w-32 mb-6">
              <AvatarImage src="/profile.jpg" alt="Sencer Gök" />
              <AvatarFallback>SG</AvatarFallback>
            </Avatar>
            <h1 className="text-4xl font-bold mb-4">Merhaba, Ben Sencer!</h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Mobil uygulama geliştirici olarak, kullanıcı deneyimini ön planda
              tutan ve yenilikçi çözümler üreten bir yazılım mühendisiyim.
            </p>
          </div>

          <div className="grid gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Deneyim</CardTitle>
                <CardDescription>
                  Profesyonel deneyimlerim ve başarılarım
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground">
                  App Store'da yer alan başarılı uygulamalarla kullanıcılara değer
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
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{skillGroup.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <li
                          key={skillIndex}
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
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Eğitim</CardTitle>
                <CardDescription>
                  Akademik geçmişim ve sürekli öğrenme
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Yazılım mühendisliği alanında lisans eğitimimi tamamladıktan sonra,
                  sürekli olarak kendimi geliştirmeye ve yeni teknolojileri öğrenmeye
                  devam ediyorum. Özellikle mobil teknolojiler ve yapay zeka
                  alanlarında sürekli kendimi güncel tutuyorum.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
} 