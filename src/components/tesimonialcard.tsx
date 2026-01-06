import { Star } from "lucide-react";
import { cn } from "@/lib/utils";

export interface Testimonial {
  id: number;
  name: string;
  photo: string;
  category: "Engineering" | "Medical" | "Management" | "Post Graduation";
  college: string;
  course: string;
  year: number;
  rating: number;
  quote: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
  position: "current" | "prev" | "next" | "hidden";
}

const categoryColors: Record<Testimonial["category"], string> = {
  Engineering: "bg-blue-500",
  Medical: "bg-green-500",
  Management: "bg-purple-500",
  "Post Graduation": "bg-rose-500",
};

export const TestimonialCard = ({
  testimonial,
  isActive,
  position,
}: TestimonialCardProps) => {
  const getPositionStyles = () => {
    switch (position) {
      case "current":
        return "z-30 translate-x-0 scale-100 opacity-100 rotate-0";
      case "prev":
        return "z-20 -translate-x-[60%] scale-90 opacity-60 -rotate-6";
      case "next":
        return "z-20 translate-x-[60%] scale-90 opacity-60 rotate-6";
      default:
        return "z-10 translate-x-0 scale-75 opacity-0";
    }
  };

  return (
    <div
      className={cn(
        "absolute w-full max-w-md transition-all duration-700 ease-out preserve-3d",
        getPositionStyles(),
        isActive && "animate-glow-pulse"
      )}
    >
      <div className="relative bg-card rounded-2xl p-6 shadow-2xl border-2 border-primary/20 backdrop-blur-sm">
        {/* Decorative saffron corner */}
        <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
          <div className="absolute top-0 right-0 w-28 h-28 bg-gradient-to-bl from-primary/30 to-transparent transform rotate-45 translate-x-8 -translate-y-8" />
        </div>

        {/* Category badge */}
        <div className="absolute -top-3 left-6">
          <span
            className={cn(
              "px-4 py-1.5 rounded-full text-xs font-bold text-white shadow-lg",
              categoryColors[testimonial.category]
            )}
          >
            {testimonial.category}
          </span>
        </div>

        {/* Photo and info */}
        <div className="flex items-start gap-4 mt-4">
          <div className="relative">
            <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/40 shadow-lg">
              <img
                src={testimonial.photo}
                alt={testimonial.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center shadow-lg">
              <span className="text-xs font-bold text-primary-foreground">
                ✓
              </span>
            </div>
          </div>

          <div className="flex-1">
            <h3 className="font-bold text-lg text-card-foreground">
              {testimonial.name}
            </h3>
            <p className="text-sm text-primary font-medium">
              {testimonial.course}
            </p>
            <p className="text-xs text-muted-foreground">
              {testimonial.college} • {testimonial.year}
            </p>

            {/* Star rating */}
            <div className="flex gap-0.5 mt-2">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={cn(
                    "w-4 h-4 transition-all",
                    i < testimonial.rating
                      ? "fill-primary text-primary"
                      : "fill-muted text-muted",
                    isActive && i < testimonial.rating && "animate-star-pop"
                  )}
                  style={{
                    animationDelay: isActive ? `${i * 100}ms` : "0ms",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Quote */}
        <div className="mt-5 relative">
          <div className="absolute -top-2 -left-2 text-4xl text-primary/20 font-serif">
            "
          </div>
          <p className="text-muted-foreground text-sm leading-relaxed pl-4 italic">
            {testimonial.quote}
          </p>
          <div className="absolute -bottom-4 right-0 text-4xl text-primary/20 font-serif">
            "
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-6 h-1 bg-gradient-to-r from-transparent via-primary to-transparent rounded-full opacity-50" />
      </div>
    </div>
  );
};
