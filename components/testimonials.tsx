import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Octavio Van Brynke",
    text: "Excellent service very friendly if you need a car and other places said No they will go out of their way to help you. Great reliable cars. They gave me 30 day warranty on engine and trans.",
    source: "Google Review",
  },
  {
    id: 2,
    name: "Express Tech Air Conditioning",
    text: "Great service thank you!!",
    source: "Google Review",
  },
]

export function Testimonials() {
  return (
    <section id="testimonials" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-primary font-medium text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Don&apos;t just take our word for it. Hear from the people who&apos;ve driven home happy.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card 
              key={testimonial.id} 
              className="border-0 shadow-md bg-card"
            >
              <CardContent className="p-6 sm:p-8">
                <Quote className="h-8 w-8 text-primary/30" />
                <p className="mt-4 text-card-foreground leading-relaxed">
                  &quot;{testimonial.text}&quot;
                </p>
                <div className="mt-6">
                  <p className="font-medium text-primary">
                    — {testimonial.name}
                  </p>
                  <p className="text-sm text-muted-foreground mt-1">
                    {testimonial.source}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Google Review CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            Have you visited us? We&apos;d love to hear your feedback!
          </p>
          <a
            href="https://www.google.com/maps/place/J+C+MOTOR+SALES/@34.0194713,-118.3090993,17z"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-4 text-primary hover:text-primary/80 font-medium transition-colors"
          >
            Leave us a review on Google →
          </a>
        </div>
      </div>
    </section>
  )
}
