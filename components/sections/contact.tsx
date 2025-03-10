"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Mail, MapPin, Phone, AlertCircle } from "lucide-react"

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    type: "success" | "error" | null
    message: string | null
  }>({ type: null, message: null })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormStatus({ type: null, message: null })

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formState),
      })

      const data = await response.json()

      if (response.ok) {
        setFormStatus({
          type: "success",
          message: "Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.",
        })
        setFormState({ name: "", email: "", message: "" })
      } else {
        setFormStatus({
          type: "error",
          message: data.message || "Mesaj gönderilirken bir hata oluştu. Lütfen daha sonra tekrar deneyin.",
        })
      }
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        type: "error",
        message: "Bir bağlantı hatası oluştu. Lütfen internet bağlantınızı kontrol edin ve tekrar deneyin.",
      })
    } finally {
      setIsSubmitting(false)

      // Başarılı mesajı 5 saniye sonra kaldır
      if (formStatus.type === "success") {
        setTimeout(() => {
          setFormStatus({ type: null, message: null })
        }, 5000)
      }
    }
  }

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
    <section id="contact" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">İletişime Geç</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="reveal">
            <h3 className="text-2xl font-bold mb-6">Bana Ulaşın</h3>
            <p className="text-foreground/80 mb-8">
              Bir proje fikriniz mi var? Veya sadece merhaba demek mi istiyorsunuz? Aşağıdaki formu doldurarak veya
              iletişim bilgilerimden bana ulaşabilirsiniz.
            </p>

            <div className="space-y-6">
              {[
                {
                  icon: <Mail className="h-5 w-5 mr-4 text-primary" aria-hidden="true" />,
                  title: "Email",
                  content: "sencergok@outlook.com",
                },
                {
                  icon: <Phone className="h-5 w-5 mr-4 text-primary" aria-hidden="true" />,
                  title: "Telefon",
                  content: "+90 545 810 7460",
                },
                {
                  icon: <MapPin className="h-5 w-5 mr-4 text-primary" aria-hidden="true" />,
                  title: "Konum",
                  content: "Ankara, Türkiye",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-start hover:bg-primary/5 p-2 rounded-lg transition-colors duration-300 transform hover:translate-x-1"
                >
                  <div className="animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-medium">{item.title}</h4>
                    <p className="text-foreground/80">{item.content}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 font-medium">
                  İsim
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formState.name}
                  onChange={handleChange}
                  placeholder="Adınız Soyadınız"
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formState.email}
                  onChange={handleChange}
                  placeholder="ornek@email.com"
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <div>
                <label htmlFor="message" className="block mb-2 font-medium">
                  Mesaj
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Mesajınızı buraya yazın..."
                  rows={5}
                  required
                  aria-required="true"
                  disabled={isSubmitting}
                />
              </div>

              <Button type="submit" disabled={isSubmitting} className="w-full relative overflow-hidden group">
                <span className="absolute inset-0 w-0 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-[400ms] ease-out group-hover:w-full"></span>
                <span className="relative flex items-center justify-center">
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Gönderiliyor...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2 h-4 w-4 group-hover:animate-pulse" /> Gönder
                    </span>
                  )}
                </span>
              </Button>

              {formStatus.type === "success" && (
                <div
                  className="bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300 p-3 rounded-md text-sm flex items-start"
                  role="alert"
                >
                  <svg
                    className="h-5 w-5 mr-2 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <span>{formStatus.message}</span>
                </div>
              )}

              {formStatus.type === "error" && (
                <div
                  className="bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300 p-3 rounded-md text-sm flex items-start"
                  role="alert"
                >
                  <AlertCircle className="h-5 w-5 mr-2 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                  <span>{formStatus.message}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

