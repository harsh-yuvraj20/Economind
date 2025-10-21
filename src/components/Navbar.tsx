import { Button } from "@/components/ui/button";
import { BookOpen, Menu } from "lucide-react";
import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="p-2 rounded-lg bg-gradient-primary">
              <BookOpen className="w-5 h-5 text-white" />
            </div>
            <span className="text-xl font-bold text-foreground">
              Econo<span className="text-primary">Mind</span>
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Finance Bytes
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-4">
            <Button variant="ghost" size="sm">
              Sign In
            </Button>
            <Button size="sm" className="shadow-card">
              Get Started
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Menu className="w-6 h-6 text-foreground" />
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border">
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Finance Bytes
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Categories
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              About
            </a>
            <a href="#" className="block text-sm font-medium text-foreground hover:text-primary transition-colors">
              Blog
            </a>
            <div className="flex flex-col gap-2 pt-4">
              <Button variant="ghost" size="sm" className="w-full">
                Sign In
              </Button>
              <Button size="sm" className="w-full">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
