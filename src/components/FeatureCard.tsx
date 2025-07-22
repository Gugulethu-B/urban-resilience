import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LucideIcon } from "lucide-react";
import { Link } from "react-router-dom";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
  gradient: string;
  stats?: string;
}

const FeatureCard = ({ title, description, icon: Icon, link, gradient, stats }: FeatureCardProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 overflow-hidden">
      <div className={`h-2 ${gradient}`} />
      <CardHeader className="pb-2">
        <div className="flex items-center space-x-3">
          <div className={`p-3 rounded-xl ${gradient} bg-opacity-10`}>
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div>
            <CardTitle className="text-lg">{title}</CardTitle>
            {stats && <p className="text-sm text-muted-foreground font-medium">{stats}</p>}
          </div>
        </div>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-sm leading-relaxed mb-4">
          {description}
        </CardDescription>
        <Button asChild variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
          <Link to={link}>
            Explore Feature
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;