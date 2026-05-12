import Link from "next/link"
import { MapPin, Phone, Clock } from "lucide-react"

const quickLinks = [
  { href: "#about", label: "About Us" },
  { href: "#inventory", label: "Inventory" },
  { href: "#services", label: "Services" },
  { href: "#testimonials", label: "Reviews" },
  { href: "#contact", label: "Contact" },
]

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="font-serif text-2xl text-secondary-foreground">
                J C Motor Sales
              </span>
            </Link>
            <p className="mt-4 text-secondary-foreground/70 leading-relaxed">
              Your trusted partner for quality used cars in Los Angeles. 
              Visit us at 3745 S Western Ave.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-medium text-secondary-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-secondary-foreground/70 hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-medium text-secondary-foreground mb-4">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <div className="text-secondary-foreground/70">
                  <p>3745 S Western Ave</p>
                  <p>Los Angeles, CA 90018</p>
                </div>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="tel:+12133832996"
                  className="text-secondary-foreground/70 hover:text-primary transition-colors"
                >
                  (213) 383-2996
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary flex-shrink-0" />
                <span className="text-secondary-foreground/70">Open Daily until 7 PM</span>
              </li>
            </ul>
          </div>

          {/* Message */}
          <div>
            <h3 className="font-medium text-secondary-foreground mb-4">Bad Credit?</h3>
            <p className="text-secondary-foreground/70 leading-relaxed">
              Don&apos;t worry! We specialize in helping customers with all credit situations. 
              Visit us today and let&apos;s find a solution together.
            </p>
            <a
              href="tel:+12133832996"
              className="inline-block mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
            >
              Call Us Today →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-secondary-foreground/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/50 text-sm">
              © {new Date().getFullYear()} J C Motor Sales. All rights reserved.
            </p>
            <p className="text-secondary-foreground/50 text-sm">
              3745 S Western Ave, Los Angeles, CA 90018
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
