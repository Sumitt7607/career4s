import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const HeroSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  const scrollToSection = (id: string) => {
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-100" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl animate-pulse-soft" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-orange-300/20 rounded-full blur-3xl animate-pulse-soft" />

      {/* FLOATING DOTS */}
      <div className="absolute top-32 left-[15%] w-4 h-4 bg-orange-400 rounded-full animate-float opacity-60" />
      <div className="absolute top-48 right-[20%] w-3 h-3 bg-orange-300 rounded-full animate-float opacity-40" />
      <div className="absolute bottom-40 left-[25%] w-5 h-5 bg-orange-400/50 rounded-full animate-float" />

      <div ref={ref} className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">

          {/* BADGE */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 border border-orange-200 mb-8 transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Sparkles className="w-4 h-4 text-orange-500" />
            <span className="text-sm font-medium text-orange-600">
              #1 College Admission Platform in India
            </span>
          </div>

          {/* HEADING */}
          <h1
            className={`text-4xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Your Journey to the{" "}
            <span className="text-gradient">Perfect College</span>{" "}
            Starts Here
          </h1>

          {/* SUBTITLE */}
          <p
            className={`text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-10 transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            Get personalized guidance, explore top colleges, and navigate your
            admission journey with expert support. We've helped thousands of
            students achieve their dreams.
          </p>

          {/* CTA */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-700 delay-300 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              onClick={() => scrollToSection("#contact")}
              className="bg-gradient-saffron shadow-saffron text-lg px-8 py-6 hover:scale-105 transition"
            >
              Start Your Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("#colleges")}
              className="text-lg px-8 py-6 border-2"
            >
              <Play className="mr-2 w-5 h-5 text-orange-500" />
              Explore Colleges
            </Button>
          </div>

          {/* TRUST */}
          <div
            className={`mt-16 flex flex-wrap justify-center gap-8 text-gray-600 transition-all duration-700 delay-500 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 rounded-full bg-gradient-saffron border-2 border-white" />
                ))}
              </div>
              <span className="font-medium">10,000+ Students</span>
            </div>

            <div className="flex items-center gap-2">
              {"★★★★★".split("").map((_, i) => (
                <span key={i} className="text-orange-500">★</span>
              ))}
              <span className="font-medium">4.9/5 Rating</span>
            </div>
          </div>
        </div>
      </div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-gray-300 flex justify-center p-2">
          <div className="w-1.5 h-3 bg-orange-500 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};
