import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";

interface Step {
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    title: "Free Counselling",
    description:
      "Get expert guidance to choose the right course and university based on your career goals.",
  },
  {
    title: "Course Selection",
    description:
      "Select your preferred distance or online program from UGC-approved universities.",
  },
  {
    title: "Document Submission",
    description:
      "Upload required documents online quickly and securely.",
  },
  {
    title: "Fee Payment",
    description:
      "Pay fees online through safe and transparent payment options.",
  },
  {
    title: "Admission Confirmation",
    description:
      "Receive official confirmation and start your learning journey.",
  },
];

const AdmissionProcessSection = () => {
  return (
    <>
    

    <section
      id="admission-process"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-1/3 -left-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6">
            Distance Education Admission Process
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            A simple, transparent, and fully online admission process designed
            for working professionals and students.
          </p>
        </motion.div>

        {/* PROCESS FLOW */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{ once: true }}
              className="flex items-center gap-8"
            >
              {/* STEP CARD */}
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 140 }}
                className="bg-white border-2 border-orange-200 rounded-3xl p-6 w-[260px] shadow-lg hover:shadow-orange-200"
              >
                <div className="text-orange-600 font-bold text-sm mb-2">
                  STEP {index + 1}
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>
              </motion.div>

              {/* ARROW (NOT LAST ITEM) */}
              {index !== steps.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  animate={{ x: [0, 8, 0] }}
                  transition={{
                    duration: 1.2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="hidden md:block text-orange-600"
                >
                  <ArrowRight size={36} />
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
    <Footer />
        </>
  );
};

export default AdmissionProcessSection;
