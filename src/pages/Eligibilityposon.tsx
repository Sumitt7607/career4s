import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle2, GraduationCap } from "lucide-react";

const criteria = [
  { course: "MBA / PGDM", requirement: "Bachelor's Degree in any discipline with minimum 50% marks" },
  { course: "MCA", requirement: "BCA / B.Sc (IT/CS) or graduation with Mathematics" },
  { course: "M.Tech", requirement: "B.Tech / B.E. in relevant discipline with 55% marks" },
  { course: "M.Com", requirement: "B.Com or equivalent degree with 50% marks" },
  { course: "MA", requirement: "Bachelor's Degree in relevant discipline" },
  { course: "MSc (Data Science)", requirement: "B.Sc / BCA / B.Tech with Mathematics & Statistics" },
];

const Eligibilityposon = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Eligibility</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">Check Your Eligibility</h2>
        </div>
        <div className="max-w-4xl mx-auto grid gap-4">
          {criteria.map((c, i) => (
            <div key={i} className={`flex items-start gap-4 p-6 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all animate-on-scroll ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-bold text-foreground text-lg">{c.course}</h3>
                <p className="text-muted-foreground flex items-center gap-2 mt-1"><CheckCircle2 className="w-4 h-4 text-accent" />{c.requirement}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Eligibilityposon;
