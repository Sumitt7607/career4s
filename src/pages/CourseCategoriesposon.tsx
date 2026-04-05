import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Code, Stethoscope, PenTool, BarChart3, Scale, BookOpen, Cog } from "lucide-react";

const categories = [
  { icon: Briefcase, name: "Management", count: "25+ Courses", color: "from-blue-500 to-blue-700" },
  { icon: Code, name: "Computer Science", count: "20+ Courses", color: "from-emerald-500 to-emerald-700" },
  { icon: BarChart3, name: "Commerce", count: "15+ Courses", color: "from-amber-500 to-amber-700" },
  { icon: PenTool, name: "Arts & Design", count: "12+ Courses", color: "from-pink-500 to-pink-700" },
  { icon: Scale, name: "Law", count: "8+ Courses", color: "from-indigo-500 to-indigo-700" },
  { icon: Stethoscope, name: "Healthcare", count: "10+ Courses", color: "from-red-500 to-red-700" },
  { icon: BookOpen, name: "Education", count: "18+ Courses", color: "from-purple-500 to-purple-700" },
  { icon: Cog, name: "Engineering", count: "14+ Courses", color: "from-teal-500 to-teal-700" },
];

const CourseCategories = () => {
  const { ref, isVisible } = useScrollAnimation();
  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-primary uppercase tracking-wider">Course Categories</span>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mt-3">Explore Fields of Study</h2>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((c, i) => (
            <div key={i} className={`group cursor-pointer p-6 rounded-2xl bg-card border border-border hover:scale-105 transition-all duration-300 animate-on-scroll-scale ${isVisible ? "visible" : ""}`} style={{ transitionDelay: `${i * 80}ms` }}>
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${c.color} flex items-center justify-center mb-4`}>
                <c.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-heading font-bold text-foreground mb-1">{c.name}</h3>
              <p className="text-sm text-muted-foreground">{c.count}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CourseCategories;
