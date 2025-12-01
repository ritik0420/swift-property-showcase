import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import heroImage from "@/assets/hero-estate.jpg";

export const Hero = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-[var(--gradient-hero)]" />
      </div>
      
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-display font-bold mb-6 animate-[fade-in_0.8s_ease-out]">
          Find Your Dream Home
        </h1>
        <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-2xl mx-auto animate-[fade-in_0.8s_ease-out_0.2s] opacity-0 [animation-fill-mode:forwards]">
          Discover luxury properties in the most prestigious locations
        </p>
        
        <div className="max-w-3xl mx-auto bg-white rounded-lg p-2 shadow-2xl flex gap-2 animate-[slide-up_0.8s_ease-out_0.4s] opacity-0 [animation-fill-mode:forwards]">
          <Input
            placeholder="Enter location, property type, or keyword..."
            className="flex-1 border-0 focus-visible:ring-0 text-foreground text-lg"
          />
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">
            <Search className="w-5 h-5 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </section>
  );
};
