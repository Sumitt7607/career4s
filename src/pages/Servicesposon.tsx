import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  BookOpen,
  FileSearch,
  GraduationCap,
  Briefcase,
  FileText,
  Users,
  Phone,
  BarChart3,
} from "lucide-react";

const services = [
  { icon: BookOpen, title: "Course Selection", desc: "Find the perfect PG course aligned with your goals" },
  { icon: FileSearch, title: "University Research", desc: "Compare universities based on ranking, fees & placement" },
  { icon: GraduationCap, title: "Admission Support", desc: "Complete end-to-end admission process handling" },
  { icon: FileText, title: "Documentation Help", desc: "Assistance with all required documents & forms" },
  { icon: Briefcase, title: "Career Counseling", desc: "Expert advice on career paths & opportunities" },
  { icon: Users, title: "Student Mentoring", desc: "Ongoing support from experienced mentors" },
  { icon: Phone, title: "24/7 Support", desc: "Round-the-clock assistance for all queries" },
  { icon: BarChart3, title: "Placement Guidance", desc: "Job placement support after course completion" },
];

const Servicesposon = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-24 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-3">
            Comprehensive Support at Every Step
          </h2>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={i}
              className={`group text-center p-6 rounded-2xl 
              bg-white border border-gray-200 shadow-sm 
              hover:shadow-xl hover:-translate-y-2 
              transition-all duration-500 cursor-pointer 
              animate-on-scroll-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >

              {/* Icon */}
              <div className="w-16 h-16 mx-auto rounded-2xl 
              bg-orange-100 group-hover:bg-gradient-to-r 
              group-hover:from-orange-500 group-hover:to-amber-500 
              flex items-center justify-center mb-4 transition-all duration-300">

                <s.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors" />
              </div>

              {/* Title */}
              <h3 className="font-heading font-bold text-gray-900 mb-2 group-hover:text-orange-600 transition-colors">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 group-hover:text-gray-700 transition-colors">
                {s.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Servicesposon;