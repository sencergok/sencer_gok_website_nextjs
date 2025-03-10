"use client"

import { useEffect, useRef } from "react"
import { Code, Database, Layout, Smartphone, Server, Layers } from "lucide-react"

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", "JavaScript", "TypeScript"],
  },
  {
    category: "Backend",
    icon: <Server className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["Node.js", "Express", "REST API", "GraphQL"],
  },
  {
    category: "Database",
    icon: <Database className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["Supabase", "PostgreSQL", "MongoDB", "Firebase"],
  },
  {
    category: "Mobile",
    icon: <Smartphone className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["SwiftUI", "iOS Development", "React Native"],
  },
  {
    category: "Languages",
    icon: <Code className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["JavaScript", "TypeScript", "Swift", "HTML", "CSS"],
  },
  {
    category: "Tools",
    icon: <Layers className="h-8 w-8 mb-4 text-primary" aria-hidden="true" />,
    items: ["Git", "GitHub", "VS Code", "Xcode", "Figma", "Vercel"],
  },
]

export default function Skills() {
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
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-16 reveal">Yeteneklerim</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="bg-card rounded-lg p-6 shadow-sm border reveal hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-4">
                <div className="inline-block animate-float" style={{ animationDelay: `${index * 0.2}s` }}>
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold">{skill.category}</h3>
              </div>
              <div className="flex flex-wrap gap-2 justify-center">
                {skill.items.map((item, itemIndex) => (
                  <span
                    key={item}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm transform transition-all duration-300 hover:scale-110 hover:bg-primary hover:text-primary-foreground"
                    style={{ transitionDelay: `${itemIndex * 0.05}s` }}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

