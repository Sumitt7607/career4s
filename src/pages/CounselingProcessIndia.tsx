import { motion } from "framer-motion";
import { PhoneCall, Video, FileSearch, UserCheck } from "lucide-react";

const steps = [
  {
    icon: PhoneCall,
    title: "Book a Call",
    desc: "Schedule a free 30-minute counseling call with our experts.",
  },
  {
    icon: FileSearch,
    title: "Profile Analysis",
    desc: "We evaluate your academics, preferences, and career goals.",
  },
  {
    icon: Video,
    title: "One-on-One Session",
    desc: "Detailed discussion on best-fit programs and colleges.",
  },
  {
    icon: UserCheck,
    title: "Action Plan",
    desc: "Get a personalized roadmap for your PG admission journey.",
  },
];

const CounselingProcessIndia = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Counseling Process
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5">
            How Our <span className="text-orange-600">Counseling Works</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Follow our simple 4-step process to get personalized guidance and secure admission in top PG programs.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="relative group bg-white border border-orange-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Step Number */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow">
                Step {i + 1}
              </div>

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center mx-auto mb-5 text-white shadow-md group-hover:scale-110 transition">
                <s.icon className="w-8 h-8" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {s.desc}
              </p>

              {/* Bottom Accent */}
              <div className="mt-5 h-1 w-0 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-14">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md">
            Book Free Counseling
          </button>
        </div>

      </div>
    </section>
  );
};

export default CounselingProcessIndia;