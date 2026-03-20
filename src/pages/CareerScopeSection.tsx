import { motion } from "framer-motion";
import { Briefcase, Rocket, Globe, BarChart3 } from "lucide-react";

const scopes = [
  {
    icon: Briefcase,
    title: "Corporate Leadership",
    desc: "MBA graduates lead as managers, directors, and CXOs at top firms.",
  },
  {
    icon: Rocket,
    title: "Tech Innovation",
    desc: "MCA and M.Tech grads drive AI, blockchain, and cloud transformation.",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    desc: "PG from top Indian universities opens doors to international careers.",
  },
  {
    icon: BarChart3,
    title: "Entrepreneurship",
    desc: "Build your own startup with advanced business and tech knowledge.",
  },
];

const CareerScopeSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-orange-50 via-white to-orange-50">
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
            Career Scope
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Where Can <span className="text-orange-600">PG</span> Take You?
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Explore the vast career opportunities and growth paths after completing your postgraduate degree.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {scopes.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white border border-orange-100 rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
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
            Explore Career Options
          </button>
        </div>

      </div>
    </section>
  );
};

export default CareerScopeSection;