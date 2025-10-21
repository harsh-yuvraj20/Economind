import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Clock, ArrowRight } from "lucide-react";
import { LucideIcon } from "lucide-react";

interface FinanceByteCardProps {
  title: string;
  description: string;
  category: string;
  readTime: string;
  icon: LucideIcon;
  iconColor: string;
}

export const FinanceByteCard = ({
  title,
  description,
  category,
  readTime,
  icon: Icon,
  iconColor,
}: FinanceByteCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-border hover:border-primary/30 bg-card">
      <CardHeader className="space-y-4">
        <div className="flex items-start justify-between">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${iconColor} shadow-card`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <Badge variant="secondary" className="text-xs">
            {category}
          </Badge>
        </div>
        
        <CardTitle className="text-xl group-hover:text-primary transition-colors">
          {title}
        </CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <CardDescription className="text-base leading-relaxed">
          {description}
        </CardDescription>
        
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Clock className="w-4 h-4" />
            <span>{readTime}</span>
          </div>
          
          <ArrowRight className="w-5 h-5 text-primary opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-1 transition-all" />
        </div>
      </CardContent>
    </Card>
  );
};
