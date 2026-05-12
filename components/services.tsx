import { CreditCard, Car, Shield, MapPin, Clock, Phone } from "lucide-react"

const services = [
  {
    icon: CreditCard,
    title: "Financing Options",
    description: "We offer financing for various credit situations. Good credit gets low or zero down payment options.",
  },
  {
    icon: Car,
    title: "Quality Vehicles",
    description: "We carry a selection of reliable used cars including sedans, SUVs, and hatchbacks.",
  },
  {
    icon: Shield,
    title: "Warranty Available",
    description: "Ask about our warranty coverage on engine and transmission for eligible vehicles.",
  },
  {
    icon: MapPin,
    title: "Convenient Location",
    description: "Located at 3745 S Western Ave in Los Angeles, easy to find and accessible.",
  },
  {
    icon: Clock,
    title: "Open Daily",
    description: "We're open every day until 7 PM to serve you at your convenience.",
  },
  {
    icon: Phone,
    title: "Easy Contact",
    description: "Call us at (213) 383-2996 to ask questions or schedule a visit to see our inventory.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-20 md:py-28 bg-secondary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-secondary-foreground leading-tight text-balance">
            Why Choose J C Motor Sales
          </h2>
          <p className="mt-4 text-secondary-foreground/70 text-lg">
            We go above and beyond to make your car buying experience simple and stress-free.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div 
              key={service.title} 
              className="group p-6 rounded-xl bg-secondary-foreground/5 hover:bg-primary/10 transition-colors duration-300"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-4 font-serif text-xl text-secondary-foreground">
                {service.title}
              </h3>
              <p className="mt-2 text-secondary-foreground/70 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
