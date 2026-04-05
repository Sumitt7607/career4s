import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Clock, Users, HeartHandshake, Lightbulb, Trophy } from "lucide-react";

const reasons = [
  { icon: Shield, title: "100% Genuine Admissions", desc: "UGC-DEB approved universities only. No fake promises." },
  { icon: Clock, title: "Fast-Track Process", desc: "Get admitted in just 7-10 working days." },
  { icon: Users, title: "Dedicated Counselor", desc: "One-on-one personalized guidance throughout." },
  { icon: HeartHandshake, title: "Zero Hidden Charges", desc: "Transparent fee structure with no surprises." },
  { icon: Lightbulb, title: "Career-Focused Approach", desc: "We match courses to your career goals." },
  { icon: Trophy, title: "Award-Winning Service", desc: "Recognized as best education consultancy 2024." },
];

const WhyChooseUsposon = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Why Choose Us</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">What Makes Us Different</h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((r, i) => (
            <div key={i} className={`group p-8 rounded-2xl bg-background border border-border hover:border-primary/30 transition-all duration-300 hover:card-shadow-hover animate-on-scroll ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${i * 100}ms` }}>
              <div className="w-14 h-14 rounded-xl bg-primary/10 group-hover:bg-hero-gradient flex items-center justify-center mb-5 transition-all duration-300">
                <r.icon className="w-7 h-7 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>
              <h3 className="text-xl font-heading font-bold text-foreground mb-3">{r.title}</h3>
              <p className="text-muted-foreground">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsposon;
