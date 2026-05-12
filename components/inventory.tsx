import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Phone } from "lucide-react"

const vehicles = [
  {
    id: 1,
    name: "Reliable Sedans",
    description: "Comfortable and fuel-efficient sedans perfect for daily commuting. We carry popular models from Honda, Toyota, Nissan, and more.",
    image: "/images/sedan.jpg",
  },
  {
    id: 2,
    name: "Family SUVs",
    description: "Spacious SUVs and crossovers for the whole family. Great for LA traffic and weekend adventures.",
    image: "/images/suv.jpg",
  },
  {
    id: 3,
    name: "Compact Hatchbacks",
    description: "Economical and easy to park. Perfect for city driving and budget-conscious buyers.",
    image: "/images/hatchback.jpg",
  },
]

export function Inventory() {
  return (
    <section id="inventory" className="py-20 md:py-28 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Our Inventory
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            Quality Vehicles for Every Need
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            We carefully select each vehicle in our inventory to ensure reliability and value. 
            Visit our lot to see our current selection.
          </p>
        </div>

        {/* Vehicle Cards */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          {vehicles.map((vehicle) => (
            <Card 
              key={vehicle.id} 
              className="overflow-hidden border-0 shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-56">
                <Image
                  src={vehicle.image}
                  alt={vehicle.name}
                  fill
                  className="object-cover"
                />
              </div>
              <CardContent className="p-6 bg-card">
                <h3 className="font-serif text-xl text-card-foreground">{vehicle.name}</h3>
                <p className="mt-2 text-muted-foreground text-sm leading-relaxed">
                  {vehicle.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Our inventory changes regularly. Call us or visit to see what&apos;s available today.
          </p>
          <Button 
            asChild 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground"
          >
            <a href="tel:+12133832996">
              <Phone className="mr-2 h-5 w-5" />
              Call (213) 383-2996
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
