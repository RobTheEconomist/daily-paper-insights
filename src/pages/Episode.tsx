import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Clock, ExternalLink, Play, Share2, Bookmark } from "lucide-react";
import { useParams, Link } from "react-router-dom";

const Episode = () => {
  const { id } = useParams();

  // In a real app, this would fetch episode data based on ID
  const episode = {
    title: "The Hidden Cost of Climate Change on Global Supply Chains",
    description: "Exploring groundbreaking research on how rising temperatures affect international trade networks and what it means for future economic policy.",
    date: "December 15, 2024",
    duration: "8 min",
    category: "Trade Economics",
    paperTitle: "Climate Disruption and Global Supply Chain Resilience: A Network Analysis",
    paperAuthors: "Dr. Sarah Chen, Prof. Michael Roberts",
    paperLink: "#",
    audioUrl: "#",
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Episode Header */}
      <article className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Breadcrumb */}
          <nav className="mb-6 text-sm text-muted-foreground">
            <Link to="/episodes" className="hover:text-foreground transition-colors">
              Episodes
            </Link>
            <span className="mx-2">/</span>
            <span className="text-foreground">Episode {id}</span>
          </nav>

          {/* Episode Info */}
          <div className="mb-8">
            <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20 mb-4">
              {episode.category}
            </Badge>
            <h1 className="text-4xl md:text-5xl font-serif font-bold leading-tight mb-6">
              {episode.title}
            </h1>
            
            <div className="flex flex-wrap gap-4 text-sm text-muted-foreground mb-6">
              <div className="flex items-center gap-2">
                <Calendar className="h-4 w-4" />
                <span>{episode.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4" />
                <span>{episode.duration}</span>
              </div>
            </div>

            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              {episode.description}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground">
                <Play className="mr-2 h-5 w-5" />
                Listen Now
              </Button>
              <Button size="lg" variant="outline">
                <Share2 className="mr-2 h-4 w-4" />
                Share
              </Button>
              <Button size="lg" variant="outline">
                <Bookmark className="mr-2 h-4 w-4" />
                Save
              </Button>
            </div>
          </div>

          {/* Research Paper Card */}
          <Card className="p-6 mb-8 bg-muted/50">
            <h2 className="font-serif font-semibold text-xl mb-4">Featured Research Paper</h2>
            <h3 className="font-semibold text-lg mb-2">{episode.paperTitle}</h3>
            <p className="text-sm text-muted-foreground mb-4">by {episode.paperAuthors}</p>
            <a 
              href={episode.paperLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors font-medium"
            >
              Read the Full Paper
              <ExternalLink className="h-4 w-4" />
            </a>
          </Card>

          {/* Episode Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="font-serif font-semibold text-2xl mb-4">Key Findings</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              This groundbreaking study examines how climate disruptions—from extreme weather events to gradual temperature increases—are fundamentally reshaping global supply chain networks. The researchers analyzed data from over 10,000 companies across 150 countries over a 20-year period.
            </p>

            <h3 className="font-serif font-semibold text-xl mb-3">What the Research Found</h3>
            <ul className="list-disc pl-6 space-y-2 text-muted-foreground mb-6">
              <li>Supply chain disruptions due to climate events have increased by 340% since 2000</li>
              <li>Companies with diversified supplier networks showed 60% more resilience to climate shocks</li>
              <li>The true cost of climate disruption is 2-3x higher than previously estimated when accounting for cascade effects</li>
            </ul>

            <h3 className="font-serif font-semibold text-xl mb-3">Why This Matters</h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Understanding these patterns is crucial for businesses, policymakers, and investors. The research suggests that climate adaptation isn't just an environmental issue—it's a fundamental economic imperative that affects everything from consumer prices to international trade relationships.
            </p>

            <h3 className="font-serif font-semibold text-xl mb-3">What You Can Do</h3>
            <p className="text-muted-foreground leading-relaxed">
              Whether you're a business leader, investor, or simply someone interested in economics, this research offers actionable insights about supply chain resilience, risk management, and the true cost of climate change in our interconnected global economy.
            </p>
          </div>
        </div>
      </article>

      <Footer />
    </div>
  );
};

export default Episode;
