import { Button } from "@/components/ui/button";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { ContactSection } from "@/components/ContactSection";
import {
  Star,
  HandHeart,
  Globe2,
  Sparkles,
  Instagram,
  Linkedin,
  Facebook,
} from "lucide-react";
import property1 from "@/assets/property-1.jpg";
import property2 from "@/assets/property-2.jpg";
import property3 from "@/assets/property-3.jpg";

const featuredProperties = [
  {
    image: property1,
    price: "$2,850,000",
    title: "Modern Penthouse",
    location: "Downtown Manhattan, NY",
    beds: 3,
    baths: 3,
    sqft: "2,400 sqft",
    status: "For Sale" as const,
    tags: ["Luxury", "City View"],
  },
  {
    image: property2,
    price: "$4,200,000",
    title: "Beachfront Villa",
    location: "Malibu, CA",
    beds: 5,
    baths: 4,
    sqft: "4,800 sqft",
    status: "For Sale" as const,
    tags: ["Luxury", "Hot Listing"],
  },
  {
    image: property3,
    price: "$1,950,000",
    title: "Mountain Retreat",
    location: "Aspen, CO",
    beds: 4,
    baths: 3,
    sqft: "3,200 sqft",
    status: "For Sale" as const,
    tags: ["New", "Cozy"],
  },
  // Extra showcase properties for a fuller grid
  {
    image: property1,
    price: "$3,450,000",
    title: "Skyline Residence",
    location: "Brooklyn Heights, NY",
    beds: 4,
    baths: 4,
    sqft: "3,100 sqft",
    status: "For Sale" as const,
    tags: ["Luxury", "Penthouse"],
  },
  {
    image: property2,
    price: "$1,350,000",
    title: "Coastal Hideaway",
    location: "Laguna Beach, CA",
    beds: 3,
    baths: 2,
    sqft: "1,900 sqft",
    status: "For Sale" as const,
    tags: ["Hot Listing"],
  },
  {
    image: property3,
    price: "$2,200,000",
    title: "Alpine Chalet",
    location: "Lake Tahoe, NV",
    beds: 5,
    baths: 4,
    sqft: "3,600 sqft",
    status: "For Sale" as const,
    tags: ["Retreat", "Luxury"],
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      
      <section id="properties" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
              Featured Properties
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore our handpicked selection of exceptional properties
            </p>
            <Button
              variant="outline"
              size="lg"
              className="mt-6 px-8 border-primary/20 text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:shadow-[0_18px_45px_-18px_rgba(15,23,42,0.45)]"
            >
              View All Properties
            </Button>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>

      <section
        id="about"
        className="relative py-24 overflow-hidden bg-background"
      >
        <div
          className="pointer-events-none absolute inset-0 opacity-70"
          style={{ backgroundImage: `url(${property1})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/95 to-background/80" />

        <div className="relative container mx-auto px-4 max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-[1.3fr,1fr] items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-4 py-1 mb-4">
                <Sparkles className="w-4 h-4 text-accent" />
                <span className="text-xs font-medium uppercase tracking-[0.18em] text-accent">
                  THE LUXEESTATE STANDARD
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-display font-bold text-primary mb-4">
                Not just real estate.
                <span className="block text-foreground">
                  A fully curated lifestyle.
                </span>
              </h2>
              <p className="text-base md:text-lg text-muted-foreground max-w-xl mb-8">
                LuxeEstate is a boutique collective of market specialists,
                architects, and designers dedicated to pairing extraordinary
                homes with people who expect more—from the view, from the
                details, and from the experience.
              </p>

              <div className="grid gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md p-5 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.35)]">
                  <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-2 mb-3">
                    <Star className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary mb-1.5">
                    Curated Portfolio
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Less scrolling, more discovering. Every listing is
                    handpicked for architecture, light, and long‑term value.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md p-5 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.35)]">
                  <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-2 mb-3">
                    <HandHeart className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary mb-1.5">
                    Human Service
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    A dedicated specialist by your side—from private tours to
                    negotiation and final handover.
                  </p>
                </div>

                <div className="rounded-2xl border border-border/60 bg-background/70 backdrop-blur-md p-5 shadow-[0_18px_45px_-18px_rgba(15,23,42,0.35)]">
                  <div className="inline-flex items-center justify-center rounded-full bg-accent/10 p-2 mb-3">
                    <Globe2 className="w-5 h-5 text-accent" />
                  </div>
                  <h3 className="text-sm font-semibold text-primary mb-1.5">
                    Global Reach
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Tap into an international network of buyers, developers, and
                    partners in key luxury markets.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-accent/10 via-primary/5 to-transparent blur-3xl" />
              <div className="relative rounded-[28px] border border-border/70 bg-background/80 backdrop-blur-xl p-6 shadow-[0_32px_80px_-32px_rgba(15,23,42,0.7)]">
                <div className="mb-6">
                  <p className="text-xs font-medium tracking-[0.18em] text-accent uppercase mb-2">
                    BY THE NUMBERS
                  </p>
                  <p className="text-sm text-muted-foreground">
                    A snapshot of the clients and homes we&apos;ve been trusted
                    with over the last 12 months.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mb-6">
                  <div>
                    <p className="text-2xl font-display font-semibold text-primary">
                      240+
                    </p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                      Luxury closings
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-semibold text-primary">
                      18
                    </p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                      Cities worldwide
                    </p>
                  </div>
                  <div>
                    <p className="text-2xl font-display font-semibold text-primary">
                      4.9
                    </p>
                    <p className="text-[11px] text-muted-foreground uppercase tracking-wide">
                      Client rating
                    </p>
                  </div>
                </div>

                <div className="rounded-2xl border border-dashed border-border/80 bg-muted/40 px-4 py-3">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    “LuxeEstate understood our brief better than we did. Every
                    viewing felt intentional, and the home we chose feels like
                    it was designed for us.”
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-foreground">
                    — Private buyer, Pacific Coast collection
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <ContactSection />

      <footer className="border-t border-border/40 bg-gradient-to-r from-primary via-primary/95 to-primary/90 text-primary-foreground py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center justify-between gap-4 text-center text-sm sm:flex-row">
            <p className="text-xs sm:text-sm text-primary-foreground/80">
              © 2025 LuxeEstate. Crafted with care for modern living.
            </p>
            <div className="flex items-center gap-4 text-primary-foreground/80">
              <span className="hidden text-[11px] uppercase tracking-[0.18em] sm:inline">
                Follow
              </span>
              <div className="flex gap-2.5">
                <a
                  href="#"
                  aria-label="LuxeEstate on Instagram"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary/40 hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                >
                  <Instagram className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LuxeEstate on LinkedIn"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary/40 hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href="#"
                  aria-label="LuxeEstate on Facebook"
                  className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-primary-foreground/20 bg-primary/40 hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                >
                  <Facebook className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
