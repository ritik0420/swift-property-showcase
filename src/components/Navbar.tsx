import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <Home className="w-6 h-6 text-accent" />
            <span className="text-2xl font-display font-bold text-primary">
              LuxeEstate
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <a href="#properties" className="text-foreground hover:text-accent transition-colors">
              Properties
            </a>
            <a href="#about" className="text-foreground hover:text-accent transition-colors">
              About
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-colors">
              Contact
            </a>
          </div>
          
          <Button variant="default" className="bg-primary hover:bg-primary/90">
            List Property
          </Button>
        </div>
      </div>
    </nav>
  );
};
