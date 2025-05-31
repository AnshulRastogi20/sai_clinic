
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description?: string;
  className?: string;
}

const ServiceCard = ({ title, description, className }: ServiceCardProps) => {
  return (
    <Card className={cn("transition-all hover:shadow-md hover:border-saffron overflow-hidden", className)}>
      <div className="h-2 bg-saffron"></div>
      <CardContent className="p-6">
        <h3 className="text-lg md:text-xl font-semibold text-clinic-dark mb-2">{title}</h3>
        {description && <p className="text-muted-foreground">{description}</p>}
      </CardContent>
    </Card>
  );
};

export default ServiceCard;
