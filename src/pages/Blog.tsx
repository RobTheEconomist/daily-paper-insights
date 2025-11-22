import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const blogPosts = [
  {
    id: "1",
    title: "How to Read an Economics Paper (Even If You're Not an Economist)",
    excerpt: "A practical guide to understanding academic research without getting lost in jargon and statistical methods.",
    date: "December 10, 2024",
    category: "Tips & Tricks",
    readTime: "5 min read",
  },
  {
    id: "2",
    title: "The Most Influential Economics Papers of 2024",
    excerpt: "Our year-end roundup of the research that shaped economic thinking and policy this year.",
    date: "December 8, 2024",
    category: "Year in Review",
    readTime: "12 min read",
  },
  {
    id: "3",
    title: "Behind the Scenes: How We Choose Which Papers to Cover",
    excerpt: "A transparent look at our editorial process and what makes a research paper episode-worthy.",
    date: "December 5, 2024",
    category: "Behind the Scenes",
    readTime: "6 min read",
  },
  {
    id: "4",
    title: "The Economics of Everyday Life: 5 Papers That Changed How I Shop",
    excerpt: "Personal reflections on research that transformed my understanding of consumer behavior and decision-making.",
    date: "December 1, 2024",
    category: "Personal Essays",
    readTime: "8 min read",
  },
  {
    id: "5",
    title: "Understanding Different Types of Economic Research",
    excerpt: "From randomized controlled trials to natural experiments—a beginner's guide to research methodologies.",
    date: "November 28, 2024",
    category: "Educational",
    readTime: "10 min read",
  },
  {
    id: "6",
    title: "Q&A: Your Most Common Questions About Economic Research",
    excerpt: "Answering listener questions about how research is conducted, published, and peer-reviewed.",
    date: "November 25, 2024",
    category: "Q&A",
    readTime: "7 min read",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      
      {/* Header */}
      <section className="bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-serif font-bold mb-4">Blog</h1>
          <p className="text-lg text-primary-foreground/90 max-w-2xl">
            Deeper dives, behind-the-scenes insights, and thoughtful reflections on economics, research, and learning.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-12 flex-1">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
                <CardHeader>
                  <div className="flex items-center justify-between mb-3">
                    <Badge variant="secondary" className="bg-muted">
                      {post.category}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{post.readTime}</span>
                  </div>
                  <Link to={`/blog/${post.id}`}>
                    <h2 className="font-serif text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                  </Link>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{post.date}</span>
                    </div>
                    <Link 
                      to={`/blog/${post.id}`}
                      className="text-sm font-medium text-primary hover:text-accent transition-colors inline-flex items-center gap-1 group/link"
                    >
                      Read More
                      <ArrowRight className="h-4 w-4 group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
