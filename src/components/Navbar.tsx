import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Home, Menu } from "lucide-react";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY || window.pageYOffset;
      setIsScrolled(scrollY > 4);

      const sections = ["properties", "about", "contact"];
      let current: string | null = null;

      for (const id of sections) {
        const el = document.getElementById(id);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        const offsetTop = rect.top;

        if (offsetTop <= 120 && rect.bottom >= 120) {
          current = id;
          break;
        }
      }

      setActiveSection(current);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkBaseClasses =
    "relative text-sm font-medium transition-all duration-200 px-3 py-1.5 rounded-full";

  const getLinkClasses = (id: string) => {
    const isActive = activeSection === id;
    return [
      linkBaseClasses,
      isActive
        ? "bg-accent/10 text-accent shadow-sm shadow-accent/20"
        : "text-foreground/70 hover:text-accent hover:bg-accent/5",
    ].join(" ");
  };

  return (
    <nav
      className={[
        "fixed top-0 left-0 right-0 z-50 transition-[box-shadow,background-color] duration-300",
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-sm" : "bg-transparent backdrop-blur-none",
      ].join(" ")}
    >
      <div className="container mx-auto px-4">
        <div
          className={[
            "mt-3 flex items-center justify-between gap-4 rounded-full border border-border/60 bg-background/70 px-4 py-2",
            "backdrop-blur-xl shadow-sm",
          ].join(" ")}
        >
          {/* Brand */}
          <a
            href="#top"
            className="flex items-center gap-2 rounded-full px-2 py-1 transition-transform duration-200 hover:scale-[1.02]"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-accent/10 text-accent shadow-sm shadow-accent/30">
              <Home className="h-5 w-5" />
            </span>
            <span className="hidden sm:block text-xl font-display font-semibold tracking-tight text-primary">
              LuxeEstate
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-3 rounded-full bg-muted/40 px-2 py-1">
            <a href="#properties" className={getLinkClasses("properties")}>
              Properties
            </a>
            <a href="#about" className={getLinkClasses("about")}>
              About
            </a>
            <a href="#contact" className={getLinkClasses("contact")}>
              Contact
            </a>
          </div>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              className="hidden sm:inline-flex rounded-full border-primary/20 bg-primary text-primary-foreground shadow-sm shadow-primary/30 hover:bg-primary/90"
            >
              List Property
            </Button>

            <button
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border/60 bg-background/70 text-foreground/80 shadow-sm hover:bg-muted/60 md:hidden"
              aria-label="Toggle navigation"
              onClick={() => setIsMobileOpen((open) => !open)}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={[
            "md:hidden overflow-hidden transition-[max-height,opacity,transform] duration-300 ease-out",
            isMobileOpen ? "max-h-40 opacity-100 translate-y-0" : "max-h-0 opacity-0 -translate-y-1",
          ].join(" ")}
        >
          <div className="mt-2 flex flex-col gap-1 rounded-2xl border border-border/60 bg-background/95 px-3 py-2 backdrop-blur-xl shadow-sm">
            <a
              href="#properties"
              className={getLinkClasses("properties") + " w-full justify-start"}
              onClick={() => setIsMobileOpen(false)}
            >
              Properties
            </a>
            <a
              href="#about"
              className={getLinkClasses("about") + " w-full justify-start"}
              onClick={() => setIsMobileOpen(false)}
            >
              About
            </a>
            <a
              href="#contact"
              className={getLinkClasses("contact") + " w-full justify-start"}
              onClick={() => setIsMobileOpen(false)}
            >
              Contact
            </a>
            <Button
              variant="default"
              className="mt-1 w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              onClick={() => setIsMobileOpen(false)}
            >
              List Property
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};
