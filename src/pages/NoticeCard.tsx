import { FileText, Calendar, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface Notice {
  id: number;
  title: string;
  date: string;
  category: string;
  priority: "new" | "urgent" | "important" | "normal";
  description: string;
  pdfUrl: string;
}

interface NoticeCardProps {
  notice: Notice;
  index: number;
}

const priorityStyles = {
  new: "bg-green-500 text-white animate-float",
  urgent: "bg-destructive text-destructive-foreground animate-pulse-glow",
  important: "bg-primary text-primary-foreground",
  normal: "bg-muted text-muted-foreground",
};

const categoryStyles: Record<string, string> = {
  Circular: "bg-blue-100 text-blue-700 border-blue-200",
  Announcement: "bg-green-100 text-green-700 border-green-200",
  Tender: "bg-purple-100 text-purple-700 border-purple-200",
  Meeting: "bg-amber-100 text-amber-700 border-amber-200",
  Urgent: "bg-red-100 text-red-700 border-red-200",
};

const NoticeCard = ({ notice, index }: NoticeCardProps) => {
  const [isRippling, setIsRippling] = useState(false);
  const [ripplePosition, setRipplePosition] = useState({ x: 0, y: 0 });

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setRipplePosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
    setIsRippling(true);
    
    setTimeout(() => {
      setIsRippling(false);
      window.open(notice.pdfUrl, "_blank");
    }, 300);
  };

  return (
    <Card
      onClick={handleClick}
      className={cn(
        "group relative cursor-pointer overflow-hidden transition-all duration-300",
        "hover:shadow-xl hover:shadow-primary/20 hover:-translate-y-2",
        "hover:border-primary/50 border-2 border-transparent",
        "animate-fade-in-up bg-card"
      )}
      style={{
        animationDelay: `${index * 100}ms`,
        animationFillMode: "both",
      }}
    >
      {/* Ripple effect */}
      {isRippling && (
        <span
          className="absolute rounded-full bg-primary/30 animate-ripple"
          style={{
            left: ripplePosition.x,
            top: ripplePosition.y,
            width: "20px",
            height: "20px",
            marginLeft: "-10px",
            marginTop: "-10px",
          }}
        />
      )}
      
      {/* Glow effect on hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-primary/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <CardContent className="p-5 relative">
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            {/* Category & Priority Badges */}
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge 
                variant="outline" 
                className={cn("text-xs font-medium", categoryStyles[notice.category])}
              >
                {notice.category}
              </Badge>
              {notice.priority !== "normal" && (
                <Badge 
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wide",
                    priorityStyles[notice.priority]
                  )}
                >
                  {notice.priority}
                </Badge>
              )}
            </div>
            
            {/* Title */}
            <h3 className="font-bold text-lg text-foreground mb-2 line-clamp-2 group-hover:text-primary transition-colors duration-300">
              {notice.title}
            </h3>
            
            {/* Description */}
            <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
              {notice.description}
            </p>
            
            {/* Date */}
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <Calendar className="h-3.5 w-3.5" />
              <span>{notice.date}</span>
            </div>
          </div>
          
          {/* PDF Icon */}
          <div className="flex-shrink-0 p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
            <FileText className="h-6 w-6" />
          </div>
        </div>
        
        {/* Click to open indicator */}
        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
          <div className="flex items-center gap-1 text-xs text-primary font-medium">
            <span>Open PDF</span>
            <ExternalLink className="h-3 w-3" />
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NoticeCard;
