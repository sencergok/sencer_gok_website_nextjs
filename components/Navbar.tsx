"use client"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text hover:from-purple-700 hover:to-blue-600 transition-all">
              Sencer Gök
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/projeler"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Projeler
            </Link>
            <Link
              href="/hakkimda"
              className="text-sm font-medium hover:text-purple-600 transition-colors"
            >
              Hakkımda
            </Link>
            <Button asChild className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
              <Link href="/iletisim">İletişime Geç</Link>
            </Button>
          </nav>

          {/* Mobile Navigation Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-600 hover:text-purple-600 transition-colors"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${
            isOpen
              ? "max-h-64 opacity-100 py-4"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <nav className="flex flex-col gap-4">
            <Link
              href="/projeler"
              className="text-lg font-medium hover:text-purple-600 transition-colors px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Projeler
            </Link>
            <Link
              href="/hakkimda"
              className="text-lg font-medium hover:text-purple-600 transition-colors px-2 py-1"
              onClick={() => setIsOpen(false)}
            >
              Hakkımda
            </Link>
            <Button
              asChild
              className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 w-full mt-2"
            >
              <Link href="/iletisim" onClick={() => setIsOpen(false)}>
                İletişime Geç
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  )
} 