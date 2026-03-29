import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Target, Eye, Heart, GraduationCap } from "lucide-react";

const AboutUsdistman = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const data = [
    {
      icon: Target,
      title: "Our Mission",
      desc: "To make quality education accessible to every student across India through distance and online learning programs.",
    },
    {
      icon: Eye,
      title: "Our Vision",
      desc: "To become the most trusted education consultancy bridging the gap between students and top universities.",
    },
    {
      icon: Heart,
      title: "Our Values",
      desc: "Integrity, transparency, and student-first approach in every admission guidance we provide.",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#fff7ed] to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 TOP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-lg">
            <GraduationCap className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            About Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Who We <span className="text-orange-500">Are</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto leading-relaxed">
            With over 10+ years of experience, we are India's leading distance
            education consultancy helping thousands of students achieve their
            academic dreams.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {data.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ scale: 1.05 }}
              className="group bg-white rounded-2xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 text-center border border-gray-100"
            >
              <div className="w-16 h-16 mx-auto mb-5 rounded-xl bg-orange-500 flex items-center justify-center group-hover:rotate-6 transition">
                <item.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsdistman;