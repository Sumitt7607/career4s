import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles } from "lucide-react";

const steps = [
  "Talk to our admission expert via call or WhatsApp",
  "Get free personalized counseling based on your profile",
  "We shortlist the best course & university for you",
  "Submit your documents (we guide you step-by-step)",
  "We handle your complete admission process",
  "Receive confirmed admission & enrollment details",
  "Get full support for classes, exams & assignments",
];

const AdmissionProcessdisman = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="admissions"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-4xl mx-auto px-4">

        {/* 🔥 TOP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* 🔥 HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Admission Process
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Get Admission in <br />
            <span className="text-orange-500">Just 7 Easy Steps</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-xl mx-auto">
            From counseling to confirmed admission — we handle everything for you.
          </p>
        </motion.div>

        {/* 🔥 STEPS */}
        <div className="space-y-4">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="flex items-center gap-4 p-5 rounded-xl bg-white border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* 🔢 Step Number */}
              <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center flex-shrink-0 shadow">
                <span className="text-white text-sm font-bold">
                  {i + 1}
                </span>
              </div>

              {/* 📝 Step Text */}
              <p className="text-gray-700 font-medium">
                {step}
              </p>
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
};

export default AdmissionProcessdisman;