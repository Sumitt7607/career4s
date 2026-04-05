import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wifi, Globe, Clock, DollarSign, Repeat, Award } from "lucide-react";

const benefits = [
  { icon: Wifi, title: "Learn Anywhere", desc: "Study from home, office, or while traveling" },
  { icon: Globe, title: "Global Exposure", desc: "Connect with students & faculty worldwide" },
  { icon: Clock, title: "Self-Paced Learning", desc: "Study at your own convenience and speed" },
  { icon: DollarSign, title: "Cost Effective", desc: "Save on commute, accommodation & more" },
  { icon: Repeat, title: "Recorded Lectures", desc: "Re-watch classes anytime you want" },
  { icon: Award, title: "Same Degree Value", desc: "UGC recognized, equal to regular degrees" },
];

const OnlineLearningBenefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-accent uppercase tracking-wider">Benefits</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">Why Online Education?</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((b, i) => (
            <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:card-shadow transition-all animate-on-scroll ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                <b.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground mb-1">{b.title}</h3>
                <p className="text-sm text-muted-foreground">{b.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OnlineLearningBenefits;
