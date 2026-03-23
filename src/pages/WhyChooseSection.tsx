import { motion } from "framer-motion";
import { Shield, Clock, IndianRupee, ThumbsUp, Headphones, TrendingUp } from "lucide-react";

const reasons = [
  { icon: Shield, title: "100% Transparency", desc: "No hidden charges. Complete clarity on fees and process." },
  { icon: Clock, title: "Timely Updates", desc: "Regular updates on application status and deadlines." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Quality guidance at student-friendly prices." },
  { icon: ThumbsUp, title: "Proven Track Record", desc: "98% success rate with 5000+ successful admissions." },
  { icon: Headphones, title: "24/7 Support", desc: "Round the clock support via call, chat and email." },
  { icon: TrendingUp, title: "Data-Driven Approach", desc: "Decisions backed by placement data and college rankings." },
];

const WhyChooseSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-[#FF9933] uppercase tracking-widest">
          Why Us
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mt-3">
          Why Students <span className="text-[#FF9933]">Trust Us</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
            className="flex gap-4 p-4 rounded-lg hover:bg-orange-50 transition"
          >
            
            {/* Icon box */}
            <div className="w-12 h-12 rounded-lg bg-[#FF9933] flex items-center justify-center flex-shrink-0">
              <r.icon className="w-6 h-6 text-white" />
            </div>

            {/* Text */}
            <div>
              <h3 className="font-display font-bold text-gray-900 mb-1">
                {r.title}
              </h3>
              <p className="text-sm text-gray-600">
                {r.desc}
              </p>
            </div>

          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseSection;