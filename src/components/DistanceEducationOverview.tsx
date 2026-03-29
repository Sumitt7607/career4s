import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";

const benefits = [
  "Get admission in UGC-DEB approved universities without confusion",
  "Complete your degree while working or managing your daily routine",
  "No need to visit college — fully online & distance process",
  "Affordable fees with EMI options for easy payment",
  "Valid degree for private jobs, promotions & government exams",
  "Full support for admission, exams, assignments & LMS access",
];

const DistanceEducationOverview = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">

        {/* 🔥 LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Distance Education
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6 leading-tight">
            Get Admission Without <br />
            <span className="text-orange-500">Stress & Confusion</span>
          </h2>

          <p className="text-gray-600 mb-8 leading-relaxed">
            We help students and working professionals get admission in the right university without any hassle. From course selection to final enrollment, our experts handle everything for you.
          </p>

          {/* 🔥 Benefits */}
          <div className="space-y-4">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className="flex items-center gap-3"
              >
                <CheckCircle2 className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <span className="text-gray-700">{b}</span>
              </motion.div>
            ))}
          </div>

          {/* 🔥 CTA */}
        
        </motion.div>

        {/* 🔥 RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="relative"
        >
          <div className="bg-orange-50 rounded-3xl p-10 relative shadow-lg">

            {/* Decorative */}
            <div className="absolute -top-5 -right-5 w-20 h-20 rounded-2xl bg-orange-200 opacity-50" />
            <div className="absolute -bottom-5 -left-5 w-16 h-16 rounded-xl bg-orange-300 opacity-40" />

            {/* 🔥 TOP ICON */}
            <div className="flex justify-center mb-6">
              <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center shadow-md">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
            </div>

            {/* 🔥 TRUST POINTS (Better than simple stats) */}
            <div className="space-y-5">
              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-orange-500">✔ 10+ Years Experience</p>
                <p className="text-sm text-gray-600">Trusted admission consultants across India</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-orange-500">✔ 50,000+ Students Guided</p>
                <p className="text-sm text-gray-600">Successfully helped students achieve their goals</p>
              </div>

              <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition">
                <p className="font-semibold text-orange-500">✔ 500+ Universities</p>
                <p className="text-sm text-gray-600">Wide network of top UGC approved universities</p>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default DistanceEducationOverview;