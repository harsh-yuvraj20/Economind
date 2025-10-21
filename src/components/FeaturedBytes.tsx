import { FinanceByteCard } from "./FinanceByteCard";
import { Wallet, TrendingUp, PiggyBank, CreditCard, Target, LineChart } from "lucide-react";

const financeBytes = [
  {
    title: "Understanding Compound Interest",
    description: "Discover how your money can grow exponentially over time through the power of compound interest.",
    category: "Investing",
    readTime: "5 min read",
    icon: TrendingUp,
    iconColor: "from-primary to-primary-glow",
  },
  {
    title: "Budget Like a Pro",
    description: "Master the 50/30/20 rule and take control of your finances with smart budgeting strategies.",
    category: "Budgeting",
    readTime: "4 min read",
    icon: Wallet,
    iconColor: "from-secondary to-accent",
  },
  {
    title: "Emergency Fund Essentials",
    description: "Learn why every financial journey starts with an emergency fund and how to build yours.",
    category: "Savings",
    readTime: "6 min read",
    icon: PiggyBank,
    iconColor: "from-accent to-primary",
  },
  {
    title: "Credit Score Decoded",
    description: "Understand what affects your credit score and how to improve it for better financial opportunities.",
    category: "Credit",
    readTime: "5 min read",
    icon: CreditCard,
    iconColor: "from-primary to-secondary",
  },
  {
    title: "Smart Investment Goals",
    description: "Set achievable investment goals and create a roadmap to financial independence.",
    category: "Planning",
    readTime: "7 min read",
    icon: Target,
    iconColor: "from-secondary to-primary",
  },
  {
    title: "Stock Market Basics",
    description: "Demystify the stock market with this beginner-friendly introduction to investing in stocks.",
    category: "Investing",
    readTime: "8 min read",
    icon: LineChart,
    iconColor: "from-accent to-secondary",
  },
];

export const FeaturedBytes = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="container mx-auto">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground">
            Featured Finance Bytes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bite-sized financial wisdom to transform your money mindset
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {financeBytes.map((byte, index) => (
            <FinanceByteCard key={index} {...byte} />
          ))}
        </div>
      </div>
    </section>
  );
};
