import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Twitter, Linkedin } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">About the Host</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Meet the person behind The Daily Paper
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Profile Image Placeholder */}
            <div className="md:col-span-1">
              <Card className="overflow-hidden">
                <div className="aspect-square bg-gradient-to-br from-primary to-accent flex items-center justify-center text-primary-foreground">
                  <div className="text-center">
                    <div className="text-6xl font-serif font-bold mb-2">Host</div>
                    <div className="text-sm">Photo</div>
                  </div>
                </div>
              </Card>
              
              {/* Social Links */}
              <div className="mt-6 flex gap-3">
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="Email">
                    <Mail className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="Twitter">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild>
                  <a href="#" aria-label="LinkedIn">
                    <Linkedin className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>

            {/* Bio */}
            <div className="md:col-span-2">
              <div className="prose prose-lg max-w-none">
                <h2 className="font-serif font-semibold text-3xl mb-4">Hi, I'm [Your Name]</h2>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I started The Daily Paper because I was frustrated. As someone who loves economics and finance, I found myself constantly overwhelmed by the sheer volume of research being published. Every day, brilliant researchers publish findings that could change how we understand markets, policy, and human behavior—but most of us never hear about them.
                </p>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have a background in [your background—e.g., "economics research and financial journalism"], and over the years, I've learned how to read dense academic papers quickly and extract the insights that matter. The Daily Paper is my way of sharing that skill with you.
                </p>

                <h3 className="font-serif font-semibold text-2xl mt-8 mb-4">My Approach</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Every weekday, I read through recently published economics and finance research, looking for papers that are:
                </p>

                <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
                  <li><strong>Rigorous:</strong> Peer-reviewed, well-designed studies with meaningful findings</li>
                  <li><strong>Relevant:</strong> Research that has real implications for how we understand the world</li>
                  <li><strong>Accessible:</strong> Complex ideas that can be explained clearly in 10 minutes or less</li>
                </ul>

                <p className="text-muted-foreground leading-relaxed mb-4">
                  Then I break down what the researchers found, why it matters, and how it might change the way you think about economics and finance. No jargon, no gatekeeping—just clear explanations that respect your intelligence while making complex research accessible.
                </p>

                <h3 className="font-serif font-semibold text-2xl mt-8 mb-4">Why Economics & Finance?</h3>
                
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Because these fields touch every aspect of our lives. From the price of groceries to global climate policy, from how we save for retirement to how governments respond to crises—economics and finance research helps us understand the systems that shape our world.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Whether you're a student, professional, investor, or just someone curious about how the world works, I hope The Daily Paper helps you learn something new every day.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Card */}
          <Card className="bg-muted/50">
            <CardContent className="py-8">
              <h3 className="font-serif font-semibold text-2xl mb-4">Get in Touch</h3>
              <p className="text-muted-foreground mb-6">
                Have a question, suggestion, or paper you'd like me to cover? I'd love to hear from you.
              </p>
              <Button className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
