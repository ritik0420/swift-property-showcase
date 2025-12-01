import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bed, Bath, Maximize } from "lucide-react";

interface PropertyCardProps {
  image: string;
  price: string;
  title: string;
  location: string;
  beds: number;
  baths: number;
  sqft: string;
  status?: "For Sale" | "For Rent" | "Sold";
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
}: PropertyCardProps) => {
  return (
    <Card className="group overflow-hidden border-border hover:shadow-[var(--shadow-elegant)] transition-all duration-500 cursor-pointer">
      <div className="relative overflow-hidden h-64">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <Badge className="absolute top-4 right-4 bg-accent text-accent-foreground">
          {status}
        </Badge>
      </div>
      
      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-3xl font-display font-semibold text-primary mb-2">
            {price}
          </h3>
          <h4 className="text-xl font-medium text-foreground mb-1">{title}</h4>
          <p className="text-muted-foreground">{location}</p>
        </div>
        
        <div className="flex items-center gap-6 pt-4 border-t border-border text-muted-foreground">
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
