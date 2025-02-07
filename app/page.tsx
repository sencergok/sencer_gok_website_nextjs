import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/Navbar"
import Link from "next/link"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-16">
        <section className="max-w-4xl mx-auto text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl font-bold tracking-tighter">
              Mobil Uygulama Geliştirici
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              App Store&apos;da yer alan Cooka, EhliyetBox ve MasalAI projeleriyle
              kullanıcılara değer katmaya devam ediyorum.
            </p>
          </div>

          <div className="flex justify-center gap-4">
            <Button asChild size="lg">
              <Link href="/projeler">Projelerimi İncele</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
            <Card>
              <CardHeader>
                <CardTitle>Cooka</CardTitle>
                <CardDescription>
                  Yapay zeka destekli yemek tarifi uygulaması
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Kullanıcıların evdeki malzemelerle yapabilecekleri tarifleri
                  öneren akıllı bir uygulama.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>EhliyetBox</CardTitle>
                <CardDescription>
                  Ehliyet sınavına hazırlık uygulaması
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Binlerce soru ve detaylı konu anlatımlarıyla ehliyet sınavına
                  hazırlık sürecini kolaylaştırır.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>MasalAI</CardTitle>
                <CardDescription>
                  Yapay zeka ile kişiselleştirilmiş çocuk masalları
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Her çocuğun hayal gücüne ve ilgi alanlarına göre özel masallar
                  üreten yenilikçi bir uygulama.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  )
}
