import { motion } from "framer-motion";
import { Target, Eye, Award, Users } from "lucide-react";

const values = [
  { icon: Target, title: "Our Mission", desc: "To empower every student with the right guidance to get into their dream post-graduation college." },
  { icon: Eye, title: "Our Vision", desc: "To be India's most trusted admission consultancy, bridging students with world-class education." },
  { icon: Award, title: "Our Promise", desc: "Transparent, ethical and result-oriented counselling with a proven track record." },
  { icon: Users, title: "Our Team", desc: "50+ experienced counsellors with deep knowledge of the Indian higher education landscape." },
];

const AboutSectionps = () => (
  <section id="about" className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-[#FF9933] uppercase tracking-widest">
          About Us
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mt-3">
          Why <span className="text-[#FF9933]">Career4s</span>?
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto mt-4">
          With over a decade of experience, Career4s has been the go-to admission consultancy
          for thousands of students aspiring for post-graduation excellence across India.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group bg-orange-50 rounded-2xl p-6 border border-orange-100 hover:shadow-xl hover:-translate-y-2 transition duration-300"
          >
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-[#FF9933] flex items-center justify-center mb-5 group-hover:scale-110 transition">
              <v.icon className="w-7 h-7 text-white" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-display font-bold text-gray-900 mb-2">
              {v.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {v.desc}
            </p>

          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default AboutSectionps;