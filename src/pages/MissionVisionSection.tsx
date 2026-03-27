import { motion } from "framer-motion";
import { Target, Eye, Heart, Star } from "lucide-react";

const cards = [
  {
    icon: Target,
    title: "Our Mission",
    desc: "To make quality medical education accessible to every aspiring student through distance learning, bridging gaps in healthcare education across India.",
  },
  {
    icon: Eye,
    title: "Our Vision",
    desc: "To be India's most trusted admission consultancy, empowering the next generation of healthcare professionals through innovative education.",
  },
  {
    icon: Heart,
    title: "Our Values",
    desc: "Integrity, transparency, student-first approach, and commitment to quality education guide every decision we make.",
  },
  {
    icon: Star,
    title: "Our Promise",
    desc: "Honest guidance, verified partnerships, and full support from application to admission — no hidden process.",
  },
];

const MissionVisionSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          What Drives Us
        </h2>
        <p className="text-gray-600 mt-3">
          Our commitment to making medical education accessible to all.
        </p>
      </div>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="bg-orange-50 border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-4">
              <c.icon className="h-7 w-7 text-orange-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {c.title}
            </h3>

            {/* Desc */}
            <p className="text-gray-600 text-sm leading-relaxed">
              {c.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default MissionVisionSection;