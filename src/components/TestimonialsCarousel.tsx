import { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, GraduationCap } from "lucide-react";
import { TestimonialCard, Testimonial } from "./tesimonialcard";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Footer } from "./Footer";

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Arjun Sharma",
    photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    category: "Engineering",
    college: "IIT Delhi",
    course: "B.Tech Computer Science",
    year: 2024,
    rating: 5,
    quote: "Their guidance was instrumental in my JEE preparation. The counselors understood my strengths and helped me choose the right branch. Forever grateful!",
  },
  {
    id: 2,
    name: "Priya Patel",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop&crop=face",
    category: "Medical",
    college: "AIIMS Delhi",
    course: "MBBS",
    year: 2024,
    rating: 5,
    quote: "Cracking NEET was tough, but the personalized mentoring and mock tests provided here made all the difference. I'm now living my dream of becoming a doctor!",
  },
  {
    id: 3,
    name: "Rahul Verma",
    photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    category: "Management",
    college: "IIM Ahmedabad",
    course: "MBA",
    year: 2023,
    rating: 5,
    quote: "From CAT preparation to interview coaching, they guided me at every step. Their alumni network connections were invaluable. Best investment I ever made!",
  },
  {
    id: 4,
    name: "Sneha Reddy",
    photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop&crop=face",
    category: "Post Graduation",
    college: "JNU Delhi",
    course: "M.A. International Relations",
    year: 2024,
    rating: 5,
    quote: "The counselors helped me navigate the complex admission process for humanities programs. Their support during document preparation was exceptional!",
  },
  {
    id: 5,
    name: "Vikram Singh",
    photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop&crop=face",
    category: "Engineering",
    college: "NIT Trichy",
    course: "B.Tech Electronics",
    year: 2023,
    rating: 4,
    quote: "The JEE Main counseling service was excellent. They analyzed my rank carefully and suggested the best NIT options. Got my first preference!",
  },
  {
    id: 6,
    name: "Ananya Krishnan",
    photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&h=200&fit=crop&crop=face",
    category: "Medical",
    college: "CMC Vellore",
    course: "MBBS",
    year: 2024,
    rating: 5,
    quote: "Their NEET counseling was phenomenal! They knew exactly which colleges would call for counseling based on my score. Saved me so much stress!",
  },
  {
    id: 7,
    name: "Karthik Nair",
    photo: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&h=200&fit=crop&crop=face",
    category: "Management",
    college: "XLRI Jamshedpur",
    course: "PGDM HR",
    year: 2023,
    rating: 5,
    quote: "The XAT preparation strategy they provided was spot-on. The mock GD sessions and interview prep gave me the confidence I needed. Highly recommended!",
  },
  {
    id: 8,
    name: "Meera Iyer",
    photo: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=face",
    category: "Post Graduation",
    college: "Delhi University",
    course: "M.Sc. Physics",
    year: 2024,
    rating: 4,
    quote: "Navigating DU admissions was overwhelming until I found them. Their step-by-step guidance through the CUET process was invaluable!",
  },
];

export const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  }, []);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(nextSlide, 4000);
    return () => clearInterval(interval);
  }, [isPaused, nextSlide]);

  const getPosition = (index: number): "current" | "prev" | "next" | "hidden" => {
    if (index === currentIndex) return "current";
    if (index === (currentIndex - 1 + testimonials.length) % testimonials.length)
      return "prev";
    if (index === (currentIndex + 1) % testimonials.length) return "next";
    return "hidden";
  };

  return (
    <>
   
    <section className="relative py-20 overflow-hidden bg-gradient-to-b from-background via-secondary/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-primary/5 to-transparent rounded-full" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <GraduationCap className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">
              Student Success Stories
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            <span className="bg-gradient-to-r from-primary via-saffron-glow to-primary bg-clip-text text-transparent">
              10,000+
            </span>{" "}
            Dreams Fulfilled
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from students who trusted us with their admission journey and
            are now studying at India's top institutions
          </p>
        </div>

        {/* Carousel */}
        <div
          className="relative h-[400px] perspective-1000 flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === currentIndex}
              position={getPosition(index)}
            />
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <Button
            variant="outline"
            size="icon"
            onClick={prevSlide}
            className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </Button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-2.5 h-2.5 rounded-full transition-all duration-300",
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-primary/30 hover:bg-primary/50"
                )}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            onClick={nextSlide}
            className="rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </Button>
        </div>

        {/* Category stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 max-w-4xl mx-auto">
          {[
            { label: "Engineering", count: "4,500+", color: "bg-blue-500" },
            { label: "Medical", count: "2,800+", color: "bg-green-500" },
            { label: "Management", count: "1,900+", color: "bg-purple-500" },
            { label: "Post Graduation", count: "800+", color: "bg-rose-500" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="text-center p-4 rounded-xl bg-card/50 backdrop-blur-sm border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <div
                className={cn(
                  "w-3 h-3 rounded-full mx-auto mb-2",
                  stat.color
                )}
              />
              <div className="text-2xl font-bold text-foreground">
                {stat.count}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
     </>
  );
};
