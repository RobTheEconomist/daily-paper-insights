import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const recentEpisodes = [
  {
    id: "1",
    title: "The Hidden Cost of Climate Change on Global Supply Chains",
    description: "Exploring groundbreaking research on how rising temperatures affect international trade networks and what it means for future economic policy.",
    date: "December 15, 2024",
    paperTitle: "Climate Disruption and Global Supply Chain Resilience: A Network Analysis",
    paperLink: "#",
    duration: "8 min",
    category: "Trade Economics",
  },
  {
    id: "2",
    title: "Why Universal Basic Income Might Work Better Than You Think",
    description: "New evidence from a multi-year UBI trial reveals surprising insights about work incentives, mental health, and economic productivity.",
    date: "December 14, 2024",
    paperTitle: "Long-term Effects of Unconditional Cash Transfers: Evidence from a Randomized Trial",
    paperLink: "#",
    duration: "9 min",
    category: "Labor Economics",
  },
  {
    id: "3",
    title: "The Real Reason Central Banks Are Losing Control",
    description: "Understanding how cryptocurrency and digital finance are fundamentally changing monetary policy effectiveness in the 21st century.",
    date: "December 13, 2024",
    paperTitle: "Digital Currency Adoption and Monetary Policy Transmission Mechanisms",
    paperLink: "#",
    duration: "10 min",
    category: "Monetary Policy",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40" />
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-accent/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium">New episodes every weekday</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6 animate-fade-in" style={{ animationDelay: '0.1s' }}>
              Learn Something New Every Day
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 leading-relaxed mb-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
              The Daily Paper breaks down cutting-edge economics and finance research into clear, 10-minute episodes. 
              What it found, why it matters, and how it could change the way you think about money and markets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in" style={{ animationDelay: '0.3s' }}>
              <Button size="lg" variant="secondary" className="text-base">
                Latest Episode
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" className="text-base bg-primary-foreground/10 border-primary-foreground/20 hover:bg-primary-foreground/20">
                Browse All Episodes
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Episodes Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-serif font-bold mb-3">Recent Episodes</h2>
              <p className="text-muted-foreground">Clear enough for anyone, useful enough for experts</p>
            </div>
            <Link to="/episodes">
              <Button variant="ghost" className="hidden sm:flex">
                View All
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentEpisodes.map((episode) => (
              <EpisodeCard key={episode.id} {...episode} />
            ))}
          </div>

          <div className="text-center sm:hidden">
            <Link to="/episodes">
              <Button variant="ghost">
                View All Episodes
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
              Never Miss an Episode
            </h2>
            <p className="text-muted-foreground mb-8">
              Join thousands of listeners who start their day with fresh insights from the latest research.
            </p>
            <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
              Subscribe Now
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
