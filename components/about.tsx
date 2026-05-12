import { CheckCircle2, Quote } from "lucide-react"

const highlights = [
  "Financing options for all credit situations",
  "Warranty available on engine & transmission",
  "Located on Western Ave in Los Angeles",
  "Open daily until 7 PM",
]

export function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div>
            <span className="text-primary font-medium text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="mt-3 font-serif text-3xl sm:text-4xl lg:text-5xl text-foreground leading-tight text-balance">
              A Dealership Built on Trust & Service
            </h2>
            <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
              At J C Motor Sales, we believe everyone deserves a reliable vehicle. 
              Located at 3745 S Western Ave in Los Angeles, we offer quality used cars 
              with financing options to fit your situation.
            </p>
            <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
              As one customer review stated: &quot;Excellent service very friendly if you need 
              a car and other places said No they will go out of their way to help you.&quot;
            </p>

            {/* Highlights */}
            <ul className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Featured Review */}
          <div className="bg-secondary rounded-2xl p-8 sm:p-10">
            <Quote className="h-10 w-10 text-primary/40 mb-4" />
            <blockquote className="font-serif text-xl sm:text-2xl text-secondary-foreground leading-relaxed">
              &quot;Excellent service very friendly if you need a car and other places said No 
              they will go out of their way to help you. Great reliable cars.&quot;
            </blockquote>
            <div className="mt-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                <span className="font-medium text-primary">OV</span>
              </div>
              <div>
                <p className="font-medium text-secondary-foreground">Octavio Van Brynke</p>
                <p className="text-sm text-secondary-foreground/60">Google Review</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
