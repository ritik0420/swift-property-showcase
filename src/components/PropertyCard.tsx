import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize, MapPin } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: "For Sale" | "For Rent" | "Sold";
  tags?: string[];
}

export const PropertyCard = ({
  image,
  price,
  title,
  location,
  beds,
  baths,
  sqft,
  status = "For Sale",
  tags = [],
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border bg-card/95 backdrop-blur-sm shadow-sm hover:shadow-[var(--shadow-premium)] hover:-translate-y-2 transition-all duration-500 cursor-pointer animate-fade-in">
      <div className="relative overflow-hidden">
        <div className="w-full aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        </div>
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground shadow-md">
          {status}
        </Badge>
      </div>
      
      <div className="p-7 space-y-4">
        <div>
          <h3 className="text-3xl font-display font-semibold text-primary mb-2">
            {price}
          </h3>
          <h4 className="text-xl font-medium text-foreground mb-2">{title}</h4>
          <div className="flex items-center gap-2 text-muted-foreground">
            <MapPin className="w-4 h-4" />
            <p>{location}</p>
          </div>
        </div>

        {tags.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-accent/30 text-[0.7rem] uppercase tracking-wide text-accent bg-accent/5"
              >
                {tag}
              </Badge>
            ))}
          </div>
        )}
        
        <div className="flex items-center gap-6 pt-4 border-t border-border text-muted-foreground text-sm">
          <div className="flex items-center gap-2">
            <Bed className="w-5 h-5" />
            <span className="font-medium">{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-5 h-5" />
            <span className="font-medium">{baths} Baths</span>
          </div>
          <div className="flex items-center gap-2">
            <Maximize className="w-5 h-5" />
            <span className="font-medium">{sqft}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};
