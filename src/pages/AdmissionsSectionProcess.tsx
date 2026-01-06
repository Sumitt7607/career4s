import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  ClipboardCheck,
  FileText,
  CreditCard,
  CheckCircle,
  Calendar,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= CONSULTANCY STEPS ================= */
const steps = [
  {
    step: 1,
    icon: ClipboardCheck,
    title: "Free Registration",
    description:
      "Register with us and share your basic academic and career preferences.",
    color: "bg-gradient-saffron",
  },
  {
    step: 2,
    icon: FileText,
    title: "Career Counseling",
    description:
      "Get one-on-one counseling to identify the right course, college, and country.",
    color: "bg-gradient-navy",
  },
  {
    step: 3,
    icon: FileText,
    title: "Application Assistance",
    description:
      "We help you fill applications and prepare documents accurately.",
    color: "bg-gradient-saffron",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Fee & Scholarship Guidance",
    description:
      "Guidance on fee structure, payment timelines, and scholarship options.",
    color: "bg-gradient-navy",
  },
  {
    step: 5,
    icon: CheckCircle,
    title: "Admission Confirmation",
    description:
      "Receive offer letters, confirmations, and next-step guidance.",
    color: "bg-gradient-saffron",
  },
];

/* ================= IMPORTANT DATES ================= */
const importantDates = [
  { event: "Counseling Starts", date: "January 2024" },
  { event: "Application Window", date: "February – April 2024" },
  { event: "Offer Letters", date: "May 2024" },
  { event: "Final Confirmations", date: "June 2024" },
  { event: "Visa Assistance", date: "June – July 2024" },
  { event: "Academic Session Begins", date: "July / August 2024" },
];

/* ================= MAIN COMPONENT ================= */
export const AdmissionsSectionProcess = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="admissions"
      className="relative py-20 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 pattern-dots opacity-30" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-600 px-4 py-2 rounded-full mb-6">
            <ClipboardCheck className="w-4 h-4" />
            <span className="text-sm font-medium">
              Admission Guidance Process
            </span>
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-orange-500">
            Your Admission Journey{" "}
            <span className="text-gradient-saffron">Made Simple</span>
          </h2>

          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We guide you step-by-step — from career counseling to final admission
            confirmation.
          </p>
        </motion.div>

        {/* ================= TIMELINE ================= */}
        <div className="relative max-w-4xl mx-auto mb-24">
          {/* Center Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-orange-100 -translate-x-1/2 hidden md:block" />

          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: index % 2 === 0 ? -60 : 60 }}
              animate={isVisible ? { opacity: 1, x: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              className={`relative flex items-center gap-8 mb-14 ${
                index % 2 === 0
                  ? "md:flex-row"
                  : "md:flex-row-reverse"
              }`}
            >
              {/* CONTENT */}
              <div
                className={`flex-1 ${
                  index % 2 === 0
                    ? "md:text-right"
                    : "md:text-left"
                }`}
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-white p-6 rounded-2xl border border-orange-100 shadow-soft inline-block"
                >
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {step.description}
                  </p>
                </motion.div>
              </div>

              {/* ICON CIRCLE (ICON SAFE) */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                className={`relative z-10 w-16 h-16 ${step.color}
                            rounded-full flex items-center justify-center
                            shadow-lg flex-shrink-0`}
              >
                {/* white backing */}
                <div className="absolute inset-2 bg-white rounded-full" />

                {/* icon */}
                <step.icon className="relative z-10 w-7 h-7 text-gray-900" />

                {/* step number */}
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-orange-500 text-white text-xs rounded-full flex items-center justify-center font-bold">
                  {step.step}
                </span>
              </motion.div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>

        {/* ================= IMPORTANT DATES ================= */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: steps.length * 0.15 + 0.2 }}
          className="max-w-2xl mx-auto text-center mb-10"
        >
          <h3 className="text-2xl font-bold text-orange-500 mb-4">
   
          </h3>
      
        </motion.div>
      </div>
    </section>
  );
};
