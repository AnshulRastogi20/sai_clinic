
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const SectionTitle = ({ title, subtitle, centered = true, className }: SectionTitleProps) => {
  return (
    <div className={cn("mb-10", centered && "text-center", className)}>
      <h2 className="text-3xl md:text-4xl font-bold text-clinic-dark mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div className={cn("h-1 w-20 bg-saffron mt-4", centered && "mx-auto")}></div>
    </div>
  );
};

export default SectionTitle;
