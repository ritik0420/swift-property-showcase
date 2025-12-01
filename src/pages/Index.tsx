import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { PropertyCard } from "@/components/PropertyCard";
import { ContactSection } from "@/components/ContactSection";
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
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {featuredProperties.map((property, index) => (
              <PropertyCard key={index} {...property} />
            ))}
          </div>
        </div>
      </section>
      
      <ContactSection />
      
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm">
            © 2025 LuxeEstate. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
