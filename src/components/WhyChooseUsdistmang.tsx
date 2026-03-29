import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Shield,
  Clock,
  IndianRupee,
  Headphones,
  FileCheck,
  TrendingUp,
  Award,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "100% Verified Universities",
    desc: "We only work with UGC-DEB approved universities ensuring your degree is valid and recognized.",
  },
  {
    icon: Clock,
    title: "Fast Admission Process",
    desc: "Get your admission completed within 24-48 hours without any hassle or delays.",
  },
  {
    icon: IndianRupee,
    title: "Lowest Fee Guarantee",
    desc: "We provide the best fee options with EMI support so you can study without financial stress.",
  },
  {
    icon: Headphones,
    title: "Dedicated Counselor",
    desc: "Get personal guidance from expert counselors from admission till course completion.",
  },
  {
    icon: FileCheck,
    title: "Complete Admission Support",
    desc: "From documentation to enrollment, we handle everything for a smooth admission experience.",
  },
  {
    icon: TrendingUp,
    title: "Career & Placement Help",
    desc: "We guide you not just for admission but also for your future career growth and opportunities.",
  },
];

const WhyChooseUsdistmang = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 TOP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
            <Award className="w-10 h-10 text-white" />
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
            Why Choose Us
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Get Admission Without <br />
            <span className="text-orange-500">Stress & Confusion</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            We simplify the admission process and help you choose the right university, course, and career path with expert guidance.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="group relative p-6 rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100 overflow-hidden"
            >
              <div className="absolute inset-0 bg-orange-100 opacity-0 group-hover:opacity-20 transition duration-300"></div>

              <div className="flex gap-4 relative z-10">
                <div className="w-14 h-14 rounded-xl bg-orange-500 flex items-center justify-center flex-shrink-0 group-hover:rotate-6 transition">
                  <item.icon className="w-7 h-7 text-white" />
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA (IMPORTANT FOR LEADS) */}
        {/* <div className="text-center mt-14">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg">
            Get Free Admission Counseling
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default WhyChooseUsdistmang;