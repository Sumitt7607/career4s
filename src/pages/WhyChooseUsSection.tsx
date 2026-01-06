import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  Award,
  BookOpen,
  Globe,
  Briefcase,
  Users,
  Heart,
  Sparkles,
} from "lucide-react";

/* ================= FEATURES ================= */
const features = [
  {
    icon: Users,
    title: "Expert Counselors",
    description:
      "Get guidance from experienced education counselors who understand courses, colleges, and career paths.",
    color: "bg-gradient-saffron",
  },
  {
    icon: BookOpen,
    title: "Course & College Mapping",
    description:
      "We help you shortlist the right course and college based on profile, budget, and career goals.",
    color: "bg-gradient-navy",
  },
  {
    icon: Briefcase,
    title: "Industry-Aligned Guidance",
    description:
      "Career recommendations aligned with current industry demand and future growth opportunities.",
    color: "bg-gradient-saffron",
  },
  {
    icon: Award,
    title: "Scholarship Support",
    description:
      "Complete assistance in identifying and applying for scholarships and financial aid options.",
    color: "bg-gradient-navy",
  },
  {
    icon: Globe,
    title: "India & Abroad Admissions",
    description:
      "Admission guidance for top colleges and universities in India, Europe, UK, Canada, and more.",
    color: "bg-gradient-saffron",
  },
  {
    icon: Heart,
    title: "End-to-End Support",
    description:
      "From counseling to admission confirmation, we stay with you at every step of the journey.",
    color: "bg-gradient-navy",
  },
];

/* ================= FEATURE CARD ================= */
const FeatureCard = ({
  feature,
  index,
}: {
  feature: (typeof features)[0];
  index: number;
}) => {
  const { ref, isVisible } = useScrollAnimation(0.15);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={isVisible ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08, ease: "easeOut" }}
      whileHover={{ y: -12 }}
      className="group relative bg-white p-8 rounded-3xl
                 border border-orange-100 shadow-soft
                 hover:shadow-xl transition-all duration-300"
    >
      {/* ICON (ALWAYS VISIBLE) */}
      <div
        className={`relative w-16 h-16 ${feature.color} rounded-2xl
                    flex items-center justify-center mb-6 shadow-lg`}
      >
        {/* white backing for contrast */}
        <div className="absolute inset-2 bg-white rounded-xl" />

        {/* icon */}
        <feature.icon className="relative z-10 w-8 h-8 text-gray-900" />
      </div>

      {/* CONTENT */}
      <h3 className="text-xl font-semibold text-gray-900 mb-3">
        {feature.title}
      </h3>

      <p className="text-gray-600 leading-relaxed text-sm">
        {feature.description}
      </p>

      {/* BOTTOM ACCENT */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1
                   bg-gradient-saffron scale-x-0
                   group-hover:scale-x-100 transition-transform origin-left"
      />
    </motion.div>
  );
};

/* ================= MAIN SECTION ================= */
export const WhyChooseUsSection = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section className="relative py-20 lg:py-32 bg-background overflow-hidden">
      {/* Ambient Background */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-orange-400/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/4 right-0 w-72 h-72 bg-orange-300/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">
              Why Choose Our Consultancy
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-orange-500">
            What Makes Us{" "}
            <span className="text-gradient-saffron">
              Different & Trusted
            </span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We don’t just help you get admission — we help you make the{" "}
            <span className="font-semibold text-gray-900">
              right career decision
            </span>
            .
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              key={feature.title}
              feature={feature}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
