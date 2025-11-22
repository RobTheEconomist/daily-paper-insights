import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { EpisodeCard } from "@/components/EpisodeCard";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";
import { useState } from "react";

const categories = ["All", "Trade Economics", "Labor Economics", "Monetary Policy", "Finance", "Development"];

const allEpisodes = [
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
  {
    id: "4",
    title: "Breaking Down the Wealth Inequality Paradox",
    description: "Fresh data challenges conventional wisdom about wealth distribution and reveals surprising patterns in how fortunes are actually built and maintained.",
    date: "December 12, 2024",
    paperTitle: "Intergenerational Wealth Mobility: New Evidence from Administrative Data",
    paperLink: "#",
    duration: "9 min",
    category: "Finance",
  },
  {
    id: "5",
    title: "The Education Investment That Actually Pays Off",
    description: "Rigorous analysis of education spending reveals which programs deliver real returns and which are surprisingly ineffective.",
    date: "December 11, 2024",
    paperTitle: "Cost-Benefit Analysis of Early Childhood Education Programs: A Meta-Study",
    paperLink: "#",
    duration: "8 min",
    category: "Development",
  },
  {
    id: "6",
    title: "How Remote Work Is Reshaping City Economics",
    description: "New research uncovers the cascading effects of remote work on urban development, housing markets, and local business ecosystems.",
    date: "December 10, 2024",
    paperTitle: "Spatial Reallocation and Economic Geography in the Post-Pandemic Era",
    paperLink: "#",
    duration: "10 min",
    category: "Labor Economics",
  },
];

const Episodes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredEpisodes = allEpisodes.filter((episode) => {
    const matchesCategory = selectedCategory === "All" || episode.category === selectedCategory;
    const matchesSearch = episode.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         episode.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">All Episodes</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Browse our complete collection of research breakdowns. Each episode distills yesterday's cutting-edge research into clear, actionable insights.
          </p>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            {/* Search */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search episodes..."
                className="pl-10"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Category filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Badge
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={`cursor-pointer transition-colors ${
                    selectedCategory === category
                      ? "bg-accent hover:bg-accent/90"
                      : "hover:bg-muted"
                  }`}
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Episodes Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {filteredEpisodes.length > 0 ? (
            <>
              <p className="text-sm text-muted-foreground mb-6">
                Showing {filteredEpisodes.length} {filteredEpisodes.length === 1 ? 'episode' : 'episodes'}
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredEpisodes.map((episode) => (
                  <EpisodeCard key={episode.id} {...episode} />
                ))}
              </div>
            </>
          ) : (
            <div className="text-center py-12">
              <p className="text-muted-foreground mb-4">No episodes found matching your criteria.</p>
              <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}>
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Episodes;
