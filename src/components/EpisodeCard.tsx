import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, ExternalLink, Play } from "lucide-react";
import { Link } from "react-router-dom";

interface EpisodeCardProps {
  id: string;
  title: string;
  description: string;
  date: string;
  paperTitle: string;
  paperLink: string;
  duration: string;
  category: string;
}

export const EpisodeCard = ({
  id,
  title,
  description,
  date,
  paperTitle,
  paperLink,
  duration,
  category,
}: EpisodeCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
      <CardHeader>
        <div className="flex items-start justify-between gap-4 mb-2">
          <Badge variant="secondary" className="bg-accent/10 text-accent hover:bg-accent/20">
            {category}
          </Badge>
          <span className="text-sm text-muted-foreground">{duration}</span>
        </div>
        <Link to={`/episode/${id}`}>
          <h3 className="font-serif text-xl font-semibold leading-tight group-hover:text-accent transition-colors">
            {title}
          </h3>
        </Link>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {description}
        </p>
        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
          <Calendar className="h-3 w-3" />
          <span>{date}</span>
        </div>
        <div className="bg-muted/50 p-3 rounded-md">
          <p className="text-xs font-medium text-foreground/70 mb-1">Research Paper:</p>
          <a 
            href={paperLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm text-primary hover:text-accent transition-colors flex items-center gap-1 group/link"
          >
            <span className="line-clamp-1">{paperTitle}</span>
            <ExternalLink className="h-3 w-3 flex-shrink-0 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </CardContent>
      <CardFooter>
        <Link to={`/episode/${id}`} className="w-full">
          <Button variant="outline" className="w-full group/btn">
            <Play className="h-4 w-4 mr-2 group-hover/btn:scale-110 transition-transform" />
            Listen Now
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};
