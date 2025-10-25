import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface WorkCardProps {
  title: string;
  subtitle: string;
  description: string;
  gradient?: string;
  link: string;
  image?: string;
}

const WorkCard = ({ title, subtitle, description, gradient, link, image }: WorkCardProps) => {
  return (
    <div className="group cursor-pointer flex flex-col h-full" data-testid={`card-work-${title.toLowerCase()}`}>
      {image ? (
        <div className="rounded-3xl aspect-[4/3] mb-6 overflow-hidden transition-transform group-hover:scale-105">
          <img 
            src={image} 
            alt={`${title} - ${subtitle}`} 
            className="w-full h-full object-cover"
            data-testid={`img-work-${title.toLowerCase()}`}
          />
        </div>
      ) : (
        <div className={`${gradient} rounded-3xl aspect-[4/3] mb-6 transition-transform group-hover:scale-105`} />
      )}
      <h3 className="text-xl font-bold mb-1 text-primary" data-testid={`text-title-${title.toLowerCase()}`}>{title}</h3>
      <h4 className="text-xl font-bold mb-3" data-testid={`text-subtitle-${title.toLowerCase()}`}>{subtitle}</h4>
      <p className="text-muted-foreground mb-6 leading-relaxed flex-grow" data-testid={`text-description-${title.toLowerCase()}`}>{description}</p>
      <Button variant="link" className="p-0 h-auto font-semibold group-hover:gap-2 transition-all mt-auto justify-start" data-testid={`button-link-${title.toLowerCase()}`}>
        {link} <ArrowRight className="ml-1 h-4 w-4" />
      </Button>
    </div>
  );
};

export default WorkCard;
