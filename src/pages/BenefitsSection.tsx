import { motion } from "framer-motion";
import {
  Home,
  Briefcase,
  IndianRupee,
  Smartphone,
  Target,
  Globe,
  CalendarDays,
  RefreshCw,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const benefits: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Home,
    title: "Study from Home",
    desc: "Pursue your engineering degree from anywhere without relocating.",
  },
  {
    icon: Briefcase,
    title: "Work While Studying",
    desc: "Continue your job or business while completing your degree.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fees",
    desc: "Cost-effective programs compared to regular college education.",
  },
  {
    icon: Smartphone,
    title: "Online Learning Access",
    desc: "Access lectures, notes, and study materials anytime, anywhere.",
  },
  {
    icon: Target,
    title: "Recognized Programs",
    desc: "Degrees from approved universities for career growth.",
  },
  {
    icon: Globe,
    title: "Career Opportunities",
    desc: "Eligible for private jobs, government exams & higher studies.",
  },
  {
    icon: CalendarDays,
    title: "Flexible Schedule",
    desc: "No strict timetable — learn at your own pace.",
  },
  {
    icon: RefreshCw,
    title: "Lateral Entry Option",
    desc: "Diploma holders can directly enter 2nd year engineering.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Why Distance Education
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Benefits of Distance Learning
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Discover why students choose flexible and affordable engineering education.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((b, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-orange-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-xl transition-all"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-2xl bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <b.icon className="w-7 h-7 text-orange-600" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2 text-lg">
                {b.title}
              </h4>

              <p className="text-sm text-gray-600">
                {b.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;