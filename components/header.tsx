"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#inventory", label: "Inventory" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-secondary/95 backdrop-blur-sm border-b border-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <span className="font-serif text-xl sm:text-2xl text-secondary-foreground tracking-tight">
              J C Motor Sales
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+12133832996"
              className="flex items-center gap-2 text-sm text-secondary-foreground/80 hover:text-primary transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span>(213) 383-2996</span>
            </a>
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="#contact">Visit Us</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-secondary-foreground"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-secondary-foreground/10">
            <nav className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-secondary-foreground/80 hover:text-primary transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-4 border-t border-secondary-foreground/10 flex flex-col gap-3">
                <a
                  href="tel:+12133832996"
                  className="flex items-center gap-2 text-secondary-foreground/80"
                >
                  <Phone className="h-4 w-4" />
                  <span>(213) 383-2996</span>
                </a>
                <a
                  href="https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194757,-118.3116742,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2b9e530537705:0x6349a4080f320de1!8m2!3d34.0194713!4d-118.3090993!16s%2Fg%2F11ptnzvfp9?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-secondary-foreground/80"
                >
                  <MapPin className="h-4 w-4" />
                  <span>Get Directions</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
