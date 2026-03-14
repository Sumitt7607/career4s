import { useState, useEffect, useRef } from "react";
import { X, Check, Sparkles, GraduationCap } from "lucide-react";

interface MythItem {
  id: number;
  myth: string;
  reality: string;
  emoji: string;
}

const myths: MythItem[] = [
  {
    id: 1,
    emoji: "📊",
    myth: "Only toppers get into top colleges.",
    reality: "Admissions aren't just about marks. Colleges evaluate your personality, essays, extracurriculars, and potential. Many average scorers have made it to IITs, NITs, and top global universities.",
  },
  {
    id: 2,
    emoji: "📝",
    myth: "The more applications you send, the better your chances.",
    reality: "Applying to 20+ colleges is costly and exhausting. A focused list of 8–12 well-researched colleges with strong, tailored applications is far more effective.",
  },
  {
    id: 3,
    emoji: "🏆",
    myth: "Without national-level achievements, top colleges are out of reach.",
    reality: "Every student's journey is different. Consistent effort, community involvement, or a unique passion all matter. Authenticity counts more than titles.",
  },
  {
    id: 4,
    emoji: "✍️",
    myth: "The SOP / Essay doesn't really matter — marks do.",
    reality: "Your essay is your most powerful tool. It's where you share your story, struggles, and dreams. Admissions officers take it very seriously.",
  },
  {
    id: 5,
    emoji: "💰",
    myth: "Studying abroad is only for the wealthy.",
    reality: "Many universities offer generous scholarships — from 50% to full rides. Financial aid, assistantships, and education loans make studying abroad very accessible.",
  },
  {
    id: 6,
    emoji: "🎯",
    myth: "You don't need a counselor — everything is available online.",
    reality: "Information is available, but strategy isn't. Which college fits you, how to apply, deadlines, essays — expert guidance significantly boosts your chances.",
  },
];

const MythCard = ({ item, index }: { item: MythItem; index: number }) => {
  const [flipped, setFlipped] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), index * 150);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.15 }
    );
    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, [index]);

  return (
    <div
      ref={cardRef}
      className={`transition-all duration-700 ease-out ${
        isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-12 scale-95"
      }`}
    >
      <div
        onClick={() => setFlipped(!flipped)}
        className="group relative cursor-pointer h-[280px]"
        style={{ perspective: "1200px" }}
      >
        <div
          className="relative w-full h-full transition-transform duration-700 ease-in-out"
          style={{
            transformStyle: "preserve-3d",
            transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
          }}
        >
          {/* Front - Myth */}
          <div
            className="absolute inset-0 p-7 rounded-2xl border border-myth/20 bg-gradient-to-br from-card to-secondary/50 flex flex-col justify-between shadow-md group-hover:shadow-xl group-hover:shadow-primary/10 transition-shadow duration-300"
            style={{ backfaceVisibility: "hidden" }}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-myth/10 border border-myth/20">
                    <X className="w-5 h-5 text-myth" strokeWidth={2.5} />
                  </span>
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-myth">
                    Myth
                  </span>
                </div>
                <span className="text-2xl">{item.emoji}</span>
              </div>
              <p className="text-[17px] font-semibold text-foreground leading-relaxed">
                "{item.myth}"
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground group-hover:text-primary transition-colors duration-300">
              <Sparkles className="w-4 h-4" />
              <span>Click to reveal the truth</span>
            </div>

            {/* Saffron accent */}
            <div className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>

          {/* Back - Reality */}
          <div
            className="absolute inset-0 p-7 rounded-2xl border border-reality/20 bg-gradient-to-br from-card to-reality/5 flex flex-col justify-between shadow-md"
            style={{
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
            }}
          >
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-reality/10 border border-reality/20">
                  <Check className="w-5 h-5 text-reality" strokeWidth={2.5} />
                </span>
                <span className="text-xs font-bold uppercase tracking-[0.2em] text-reality">
                  Reality
                </span>
              </div>
              <p className="text-[15px] text-foreground/90 leading-relaxed">
                {item.reality}
              </p>
            </div>
            <div className="flex items-center gap-2 mt-4 text-sm text-muted-foreground">
              <span>← Tap to go back</span>
            </div>

            {/* Green accent */}
            <div className="absolute bottom-0 left-4 right-4 h-[3px] rounded-full bg-gradient-to-r from-transparent via-reality to-transparent opacity-60" />
          </div>
        </div>
      </div>
    </div>
  );
};

const MythVsReality = () => {
  const [headerVisible, setHeaderVisible] = useState(false);
  const headerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setHeaderVisible(true);
      },
      { threshold: 0.3 }
    );
    if (headerRef.current) observer.observe(headerRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-24 px-4 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/[0.04] rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-saffron-glow/[0.04] rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 transition-all duration-800 ease-out ${
            headerVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-semibold tracking-wide mb-6 border border-primary/20">
            <GraduationCap className="w-4 h-4" />
            College Admissions
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold text-foreground mb-5 tracking-tight">
            Myth{" "}
            <span className="relative inline-block">
              <span className="text-primary">vs</span>
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 40 6" fill="none">
                <path d="M2 4C10 1 30 1 38 4" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" opacity="0.5"/>
              </svg>
            </span>{" "}
            Reality
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            There are too many misconceptions about college admissions. 
            Click on each card to uncover the real truth.
          </p>

          {/* Animated underline */}
          <div className="mt-8 flex justify-center">
            <div
              className={`h-1 rounded-full bg-gradient-to-r from-primary via-saffron-glow to-saffron-light transition-all duration-1000 ease-out ${
                headerVisible ? "w-24 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </div>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {myths.map((item, idx) => (
            <MythCard key={item.id} item={item} index={idx} />
          ))}
        </div>

        {/* Bottom CTA hint */}
     
      </div>
    </section>
  );
};

export default MythVsReality;
