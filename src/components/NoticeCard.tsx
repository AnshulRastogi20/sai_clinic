
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

interface NoticeCardProps {
  title: string;
  date?: string;
  content: string;
  className?: string;
  important?: boolean;
}

const NoticeCard = ({ title, date, content, className, important = false }: NoticeCardProps) => {
  return (
    <Card className={cn(
      "transition-all", 
      important ? "border-l-4 border-l-red-500" : "",
      className
    )}>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-center">
          <CardTitle className="text-lg font-bold">{title}</CardTitle>
          {date && <span className="text-sm text-muted-foreground">{date}</span>}
        </div>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;
