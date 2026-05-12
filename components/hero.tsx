import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Shield, Clock, MapPin, Phone } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-car.jpg"
          alt="J C Motor Sales car lot in Los Angeles"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-secondary/95 via-secondary/80 to-secondary/40" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="max-w-2xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 text-primary mb-6">
            <MapPin className="h-4 w-4" />
            <span className="text-sm font-medium">Los Angeles, CA</span>
          </div>

          {/* Headline */}
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-secondary-foreground leading-tight text-balance">
            Your Trusted Partner for Quality Used Cars
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-secondary-foreground/80 max-w-xl leading-relaxed">
            Located on Western Ave, J C Motor Sales offers reliable used vehicles 
            with financing options for all credit situations. Visit us today!
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground text-base"
            >
              <a href="tel:+12133832996">
                <Phone className="mr-2 h-5 w-5" />
                Call (213) 383-2996
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-white/90 text-secondary text-base"
            >
              <a
                href="https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194713,-118.4615346,12z/data=!4m11!1m3!2m2!1scar+dealerships!6e6!3m6!1s0x80c2b9e530537705:0x6349a4080f320de1!8m2!3d34.0194713!4d-118.3090993!15sCg9jYXIgZGVhbGVyc2hpcHNaESIPY2FyIGRlYWxlcnNoaXBzkgEUbW90b3JfdmVoaWNsZV9kZWFsZXKaASRDaGREU1VoTk1HOW5TMFZKUTBGblNVUjFNblpwVVRGQlJSQULgAQD6AQQIHRAj!16s%2Fg%2F11ptnzvfp9?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Trust Indicators - Only verifiable info from reviews */}
          <div className="mt-12 flex flex-wrap gap-6 sm:gap-10">
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <Clock className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary-foreground">Open Daily</p>
                <p className="text-xs text-secondary-foreground/60">Until 7 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <Shield className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary-foreground">Warranty Available</p>
                <p className="text-xs text-secondary-foreground/60">On Engine & Trans</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/20">
                <MapPin className="h-5 w-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-medium text-secondary-foreground">3745 S Western Ave</p>
                <p className="text-xs text-secondary-foreground/60">Los Angeles, CA</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
