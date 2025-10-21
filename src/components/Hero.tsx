import { Button } from "@/components/ui/button";
import { ArrowRight, TrendingUp } from "lucide-react";
import heroImage from "@/assets/hero-finance.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      
      {/* Hero image with overlay */}
      <div className="absolute inset-0 opacity-10">
        <img 
          src={heroImage} 
          alt="Financial growth and education" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card/80 backdrop-blur-sm border border-border rounded-full shadow-card">
            <TrendingUp className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">Learn Finance in Bite-Sized Pieces</span>
          </div>

          {/* Main heading */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            <span className="text-foreground">Master Finance</span>
            <br />
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              One Byte at a Time
            </span>
          </h1>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Unlock financial literacy with digestible lessons designed for everyone. 
            From budgeting basics to investment strategies, we make finance simple.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button size="lg" className="gap-2 shadow-elegant hover:shadow-xl transition-all">
              Start Learning
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="gap-2">
              Explore Topics
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-primary">50+</div>
              <div className="text-sm text-muted-foreground">Finance Bytes</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-secondary">10k+</div>
              <div className="text-sm text-muted-foreground">Learners</div>
            </div>
            <div className="space-y-1">
              <div className="text-3xl md:text-4xl font-bold text-accent">100%</div>
              <div className="text-sm text-muted-foreground">Free Access</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
