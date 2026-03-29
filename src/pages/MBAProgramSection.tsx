import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const specializations = [
  "Marketing",
  "Finance",
  "HR",
  "IT Management",
  "Operations",
  "International Business",
  "Healthcare",
  "Data Analytics",
];

const MBAProgramSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#fff7ed] to-white"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

        {/* 🔥 LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            MBA Program
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-4 leading-tight">
            Get Your <span className="text-orange-500">MBA Degree</span> <br />
            Without Leaving Your Job
          </h2>

          <p className="text-gray-600 mb-6">
            We help you get admission in top UGC-DEB approved universities for MBA programs. Complete your degree while working with full expert support.
          </p>

          {/* 🔥 Specializations */}
          <div className="grid grid-cols-2 gap-3">
            {specializations.map((s, i) => (
              <motion.div
                key={s}
                initial={{ opacity: 0, x: -10 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.05 }}
                className="flex items-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4 text-orange-500" />
                <span className="text-sm text-gray-700">{s}</span>
              </motion.div>
            ))}
          </div>

          {/*  */}

        </motion.div>

        {/*  */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">

            {/*  */}
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center">
                <Sparkles className="w-7 h-7 text-white" />
              </div>
            </div>

            <h3 className="text-xl font-bold text-center mb-6">
              MBA Quick Details
            </h3>

            <div className="space-y-4">
              {[
                ["Duration", "2 Years"],
                ["Eligibility", "Graduation"],
                ["Fees", "₹30K - ₹1.5L / Year"],
                ["Mode", "Online + Distance"],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between border-b border-gray-100 pb-3"
                >
                  <span className="text-gray-500">{k}</span>
                  <span className="font-semibold text-orange-500">{v}</span>
                </div>
              ))}
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MBAProgramSection;