import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Check, X } from "lucide-react";

const features = [
  { feature: "UGC-DEB Approved", online: true, regular: true },
  { feature: "Study From Anywhere", online: true, regular: false },
  { feature: "Work While Studying", online: true, regular: false },
  { feature: "Lower Fees", online: true, regular: false },
  { feature: "Campus Experience", online: false, regular: true },
  { feature: "Flexible Schedule", online: true, regular: false },
  { feature: "Same Degree Value", online: true, regular: true },
  { feature: "Placement Support", online: true, regular: true },
];

const ComparisonTable = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Comparison</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">Online vs Regular Education</h2>
        </div>
        <div className={`max-w-3xl mx-auto rounded-2xl overflow-hidden border border-border animate-on-scroll-scale ${isVisible ? "visible" : ""}`}>
          <div className="grid grid-cols-3 bg-hero-gradient p-4 text-primary-foreground font-heading font-bold text-center">
            <div className="text-left pl-4">Feature</div>
            <div>Online</div>
            <div>Regular</div>
          </div>
          {features.map((f, i) => (
            <div key={i} className={`grid grid-cols-3 p-4 text-center ${i % 2 === 0 ? "bg-background" : "bg-card"}`}>
              <div className="text-left pl-4 text-foreground font-medium">{f.feature}</div>
              <div>{f.online ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />}</div>
              <div>{f.regular ? <Check className="w-5 h-5 text-accent mx-auto" /> : <X className="w-5 h-5 text-destructive mx-auto" />}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComparisonTable;
