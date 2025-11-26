import { NavLink } from "@/components/NavLink";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <NavLink to="/" className="flex items-center hover:opacity-80 transition-opacity">
            <img src={logo} alt="The Daily Paper" className="h-12 w-auto" />
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink 
              to="/" 
              end
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Home
            </NavLink>
            <NavLink 
              to="/episodes" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Episodes
            </NavLink>
            <NavLink 
              to="/blog" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              activeClassName="text-foreground font-semibold"
            >
              About
            </NavLink>
            <Button size="sm" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <NavLink 
              to="/" 
              end
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-semibold"
            >
              Home
            </NavLink>
            <NavLink 
              to="/episodes" 
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-semibold"
            >
              Episodes
            </NavLink>
            <NavLink 
              to="/blog" 
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-semibold"
            >
              Blog
            </NavLink>
            <NavLink 
              to="/about" 
              onClick={() => setIsOpen(false)}
              className="block text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
              activeClassName="text-foreground font-semibold"
            >
              About
            </NavLink>
            <Button size="sm" className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};
