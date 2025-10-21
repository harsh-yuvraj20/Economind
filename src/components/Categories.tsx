import { Card, CardContent } from "@/components/ui/card";
import { 
  Wallet, 
  TrendingUp, 
  PiggyBank, 
  CreditCard, 
  GraduationCap, 
  Building2,
  LucideIcon 
} from "lucide-react";

interface CategoryCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  color: string;
  count: number;
}

const CategoryCard = ({ title, description, icon: Icon, color, count }: CategoryCardProps) => {
  return (
    <Card className="group hover:shadow-elegant transition-all duration-300 cursor-pointer border-border hover:border-primary/30 overflow-hidden">
      <CardContent className="p-6">
        <div className="flex items-start gap-4">
          <div className={`p-3 rounded-xl bg-gradient-to-br ${color} shadow-card flex-shrink-0`}>
            <Icon className="w-6 h-6 text-white" />
          </div>
          <div className="space-y-2 flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                {title}
              </h3>
              <span className="text-sm text-muted-foreground">{count} bytes</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              {description}
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const categories = [
  {
    title: "Budgeting & Savings",
    description: "Learn to manage your money effectively and build wealth",
    icon: Wallet,
    color: "from-primary to-primary-glow",
    count: 12,
  },
  {
    title: "Investing",
    description: "Grow your wealth through smart investment strategies",
    icon: TrendingUp,
    color: "from-secondary to-accent",
    count: 15,
  },
  {
    title: "Retirement Planning",
    description: "Secure your financial future with proper planning",
    icon: PiggyBank,
    color: "from-accent to-primary",
    count: 8,
  },
  {
    title: "Credit & Debt",
    description: "Master credit management and debt reduction",
    icon: CreditCard,
    color: "from-primary to-secondary",
    count: 10,
  },
  {
    title: "Financial Education",
    description: "Build a strong foundation in financial literacy",
    icon: GraduationCap,
    color: "from-secondary to-primary",
    count: 18,
  },
  {
    title: "Real Estate",
    description: "Navigate the world of property and mortgages",
    icon: Building2,
    color: "from-accent to-secondary",
    count: 7,
  },
];

export const Categories = () => {
  return (
    <section className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Explore by Category
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Find the perfect finance bytes for your learning journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard key={index} {...category} />
          ))}
        </div>
      </div>
    </section>
  );
};
