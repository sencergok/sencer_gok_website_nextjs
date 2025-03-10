"use client"

import { useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Twitter } from "lucide-react"
import Link from "next/link"

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    canvas.width = window.innerWidth
    canvas.height = window.innerHeight

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
      color: string
    }[] = []

    const createParticles = () => {
      const particleCount = Math.min(Math.floor(window.innerWidth / 10), 100)
      for (let i = 0; i < particleCount; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          size: Math.random() * 3 + 1,
          speedX: (Math.random() - 0.5) * 0.5,
          speedY: (Math.random() - 0.5) * 0.5,
          color: `rgba(${Math.floor(Math.random() * 100 + 155)}, ${Math.floor(
            Math.random() * 100 + 155,
          )}, ${Math.floor(Math.random() * 255)}, ${Math.random() * 0.5 + 0.1})`,
        })
      }
    }

    const connectParticles = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const distance = Math.sqrt(dx * dx + dy * dy)

          if (distance < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(100, 150, 255, ${0.2 - (distance / 120) * 0.2})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i]
        ctx.fillStyle = p.color
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fill()

        p.x += p.speedX
        p.y += p.speedY

        if (p.x > canvas.width) p.x = 0
        else if (p.x < 0) p.x = canvas.width
        if (p.y > canvas.height) p.y = 0
        else if (p.y < 0) p.y = canvas.height
      }

      connectParticles()
      requestAnimationFrame(animate)
    }

    const handleResize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      particles.length = 0
      createParticles()
    }

    createParticles()
    animate()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full -z-10" aria-hidden="true"></canvas>
      <div className="container mx-auto px-4 py-20 pt-32 md:pt-0">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-in">
            Merhaba, ben <span className="gradient-text relative inline-block">Sencer Gök</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8">
            {/* Fullstack */}
            <span className="animate-bounce-letter" style={{ animationDelay: "0.1s" }}>
              F
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.15s" }}>
              u
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.2s" }}>
              l
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.25s" }}>
              l
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.3s" }}>
              s
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.35s" }}>
              t
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.4s" }}>
              a
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.45s" }}>
              c
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.5s" }}>
              k
            </span>
            {/* & */}
            <span className="animate-bounce-letter" style={{ animationDelay: "0.6s" }}>
              &
            </span>

            {/* Mobil */}
            <span className="animate-bounce-letter" style={{ animationDelay: "0.7s" }}>
              M
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.75s" }}>
              o
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.8s" }}>
              b
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.85s" }}>
              i
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "0.9s" }}>
              l
            </span>

            {/* Space */}
            <span className="animate-bounce-letter inline-block w-2" style={{ animationDelay: "0.95s" }}>
              &nbsp;
            </span>

            {/* Geliştirici */}
            <span className="animate-bounce-letter" style={{ animationDelay: "1s" }}>
              G
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.05s" }}>
              e
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.1s" }}>
              l
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.15s" }}>
              i
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.2s" }}>
              ş
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.25s" }}>
              t
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.3s" }}>
              i
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.35s" }}>
              r
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.4s" }}>
              i
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.45s" }}>
              c
            </span>
            <span className="animate-bounce-letter" style={{ animationDelay: "1.5s" }}>
              i
            </span>
          </p>
          <p className="text-lg mb-10 animate-in stagger-2">
            <strong>Next.js</strong>, <strong>React</strong>, <strong>Supabase</strong> ve <strong>SwiftUI</strong> ile
            modern, performanslı ve kullanıcı dostu uygulamalar geliştiriyorum.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-in stagger-3">
            <Button asChild size="lg">
              <Link href="#projects" aria-label="Projelerimi Gör">
                Projelerimi Gör
              </Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="#contact" aria-label="İletişime Geç">
                İletişime Geç
              </Link>
            </Button>
          </div>

          <div className="flex items-center justify-center gap-4 mt-10 animate-in stagger-4">
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://github.com/sencergok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profilim"
              >
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://linkedin.com/in/sencergok"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profilim"
              >
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link
                href="https://twitter.com/sencerdev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter Profilim"
              >
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </Button>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <Button variant="ghost" size="icon" asChild>
            <Link href="#about" aria-label="Aşağı Kaydır">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Aşağı Kaydır</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

