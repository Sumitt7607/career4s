import { motion } from "framer-motion";
import { Lock, Phone, Zap, IndianRupee, GraduationCap, Trophy } from "lucide-react";
import { type LucideIcon } from "lucide-react";

const reasons: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Lock,
    title: "Verified Engineering Admissions",
    desc: "Direct admission in UGC & AICTE approved engineering colleges. No fraud, 100% genuine process.",
  },
  {
    icon: Phone,
    title: "Personal Admission Counselor",
    desc: "Get a dedicated expert to guide you for B.Tech, M.Tech & Distance Engineering programs.",
  },
  {
    icon: Zap,
    title: "Fast Admission Process",
    desc: "Complete your engineering admission within 7-15 days without hassle.",
  },
  {
    icon: IndianRupee,
    title: "Affordable Fee Structure",
    desc: "Best colleges at lowest fees with zero hidden charges.",
  },
  {
    icon: GraduationCap,
    title: "Distance & Regular Options",
    desc: "Choose from Distance, Online & Regular Engineering programs based on your needs.",
  },
  {
    icon: Trophy,
    title: "Trusted Consultancy",
    desc: "Helping students secure engineering admissions across India with proven success.",
  },
];

const WhyCareer4Section = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Why Choose Our Engineering Admission Consultancy?
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            We simplify your journey to top engineering colleges with expert guidance and fast admissions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-orange-600" />
              </div>

              <h4 className="font-bold text-gray-900 mb-2 text-lg">
                {item.title}
              </h4>

              <p className="text-sm text-gray-600">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyCareer4Section;