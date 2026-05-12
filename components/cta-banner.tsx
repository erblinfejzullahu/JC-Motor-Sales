import { Button } from "@/components/ui/button"
import { Phone, MapPin } from "lucide-react"

export function CTABanner() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-primary-foreground leading-tight text-balance">
            Ready to Find Your Next Car?
          </h2>
          <p className="mt-4 text-primary-foreground/80 text-lg">
            Visit us at 3745 S Western Ave in Los Angeles. 
            We&apos;re open daily until 7 PM.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button 
              asChild 
              size="lg" 
              className="bg-secondary hover:bg-secondary/90 text-secondary-foreground"
            >
              <a href="tel:+12133832996">
                <Phone className="mr-2 h-5 w-5" />
                Call (213) 383-2996
              </a>
            </Button>
            <Button 
              asChild 
              size="lg" 
              className="bg-white hover:bg-white/90 text-secondary"
            >
              <a
                href="https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194757,-118.3116742,17z/data=!3m1!4b1!4m6!3m5!1s0x80c2b9e530537705:0x6349a4080f320de1!8m2!3d34.0194713!4d-118.3090993!16s%2Fg%2F11ptnzvfp9?entry=ttu&g_ep=EgoyMDI2MDUxMC4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
              >
                <MapPin className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
