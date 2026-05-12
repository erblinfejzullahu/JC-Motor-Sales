import { MapPin, Phone, Clock, Navigation } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  {
    icon: MapPin,
    label: "Address",
    value: "3745 S Western Ave",
    subvalue: "Los Angeles, CA 90018",
    href: "https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194713,-118.3090993,17z",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "(213) 383-2996",
    subvalue: "Call us anytime during business hours",
    href: "tel:+12133832996",
  },
  {
    icon: Clock,
    label: "Hours",
    value: "Open Daily",
    subvalue: "Until 7 PM",
    href: null,
  },
]

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Info */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              Contact Us
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              Visit Our Dealership
            </h2>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              Come see our selection of quality used vehicles. We&apos;re located on 
              S Western Ave in Los Angeles, easy to find and easy to reach.
            </p>

            {/* Contact Cards */}
            <div className="mt-8 space-y-4">
              {contactInfo.map((item) => {
                const Content = (
                  <div className="flex items-start gap-4 p-4 rounded-xl bg-card hover:shadow-md transition-shadow">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{item.label}</p>
                      <p className="font-medium text-foreground">{item.value}</p>
                      <p className="text-sm text-muted-foreground">{item.subvalue}</p>
                    </div>
                  </div>
                )

                return item.href ? (
                  <a
                    key={item.label}
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="block"
                  >
                    {Content}
                  </a>
                ) : (
                  <div key={item.label}>{Content}</div>
                )
              })}
            </div>

            {/* Get Directions Button */}
            <Button 
              asChild 
              size="lg" 
              className="mt-8 bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <a
                href="https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194713,-118.3090993,17z"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Navigation className="mr-2 h-5 w-5" />
                Get Directions
              </a>
            </Button>
          </div>

          {/* Map Embed */}
          <div className="rounded-xl overflow-hidden shadow-lg h-[400px] lg:h-full min-h-[400px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.5!2d-118.3090993!3d34.0194713!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2b9e530537705%3A0x6349a4080f320de1!2sJ%20C%20MOTOR%20SALES!5e0!3m2!1sen!2sus!4v1699999999999!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="J C Motor Sales Location"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
