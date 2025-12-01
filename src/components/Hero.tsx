import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[100vh] flex items-center justify-center overflow-hidden pt-24 md:pt-32 pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
        {/* Extra dark overlay to ensure strong text contrast over bright images */}
        <div className="absolute inset-0 bg-slate-950/55" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-bold mb-4 sm:mb-6 animate-fade-in">
          Find Your Dream Home
        </h1>
        <p className="text-base sm:text-lg md:text-2xl mb-8 sm:mb-10 md:mb-12 text-white/90 max-w-2xl mx-auto animate-fade-in delay-150">
          Discover luxury properties in the most prestigious locations
        </p>
        
        <div className="max-w-3xl mx-auto animate-slide-up delay-300">
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 rounded-2xl sm:rounded-full bg-white/95 px-3 py-2 shadow-[0_22px_60px_-26px_rgba(15,23,42,0.95)] backdrop-blur-md ring-1 ring-white/40 hover:ring-accent/60 transition-all">
            <div className="relative flex-1">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-6 text-muted-foreground/70">
                <Search className="h-5 w-5" />
              </div>
              <Input
                placeholder="Search by city, neighborhood, or property name..."
                className="h-12 w-full rounded-full border-0 bg-transparent pl-14 pr-4 text-sm md:text-base text-foreground placeholder:text-muted-foreground/70 focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:outline-none"
              />
            </div>
            <Button
              size="lg"
              className="w-full sm:w-auto h-11 rounded-full bg-accent px-6 text-sm md:text-base font-semibold text-accent-foreground shadow-md hover:bg-accent/90 hover:shadow-lg transition-all"
            >
              Search
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
