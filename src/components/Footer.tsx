import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Newspaper, Twitter, Linkedin, Youtube, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Newspaper className="h-6 w-6" />
              <span className="text-xl font-serif font-bold">The Daily Paper</span>
            </div>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Making it easy to learn something new every day about economics and finance.
            </p>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Stay Updated</h3>
            <p className="text-sm text-primary-foreground/80 mb-4">
              Get the latest episodes delivered to your inbox.
            </p>
            <div className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Your email" 
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/60"
              />
              <Button variant="secondary" size="sm">
                Subscribe
              </Button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="font-serif font-semibold text-lg mb-4">Connect</h3>
            <div className="flex gap-4">
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="p-2 bg-primary-foreground/10 rounded-full hover:bg-accent transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-foreground/20 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} The Daily Paper. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};
