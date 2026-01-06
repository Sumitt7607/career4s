import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileCheck,
  Building,
  Calendar,
  Fingerprint,
  Video,
  Stamp,
  Plane,
  CheckCircle2,
  Sparkles,
} from "lucide-react";
import { Footer } from "../components/Footer";

/* ================= DATA ================= */
const visaSteps = [
  {
    icon: FileCheck,
    title: "Document Preparation",
    description:
      "Collect offer letter, academic records, financial proof, and all mandatory documents.",
    duration: "1–2 weeks",
  },
  {
    icon: Building,
    title: "Pay Visa Fee",
    description:
      "Complete visa fee payment via the official embassy or consulate portal.",
    duration: "1 day",
  },
  {
    icon: Calendar,
    title: "Book Appointment",
    description:
      "Schedule your visa interview at the nearest embassy or visa application center.",
    duration: "Variable",
  },
  {
    icon: Fingerprint,
    title: "Biometrics",
    description:
      "Submit fingerprints and photograph for biometric verification.",
    duration: "1 day",
  },
  {
    icon: Video,
    title: "Visa Interview",
    description:
      "Attend interview and confidently explain your academic and financial plan.",
    duration: "15–30 mins",
  },
  {
    icon: Stamp,
    title: "Visa Processing",
    description:
      "Application undergoes verification. Track your status online.",
    duration: "2–8 weeks",
  },
  {
    icon: CheckCircle2,
    title: "Visa Approval",
    description:
      "Receive passport with visa stamp and verify all details.",
    duration: "1–3 days",
  },
  {
    icon: Plane,
    title: "Ready to Travel",
    description:
      "Book flights, pack essentials, and prepare for your study abroad journey.",
    duration: "Your choice",
  },
];

const VisaProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <>
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
        {/* Ambient glow */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-400/10 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 relative z-10">
          {/* Header */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center max-w-3xl mx-auto mb-20"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 font-semibold text-sm mb-6">
              <Sparkles className="w-4 h-4" /> Visa Guidance
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Complete{" "}
              <span className="text-orange-500">Visa Process</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              A clear step-by-step roadmap to help you secure your student visa
              smoothly and confidently.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visaSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="relative group"
              >
                {/* Connector (desktop only) */}
                {index < visaSteps.length - 1 && index % 4 !== 3 && (
                  <div className="absolute top-10 -right-4 w-8 h-[2px] bg-gradient-to-r from-orange-400 to-transparent hidden lg:block" />
                )}

                <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-orange-100 p-7 shadow-md hover:shadow-xl transition-all">
                  {/* Step number */}
                  <span className="absolute top-4 right-5 text-5xl font-extrabold text-orange-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-5 shadow-lg"
                  >
                    <step.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-lg font-bold mb-2 group-hover:text-orange-600 transition">
                    {step.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {step.description}
                  </p>

                  <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-50 text-orange-600 text-xs font-semibold">
                    ⏱ {step.duration}
                  </span>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Note */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mt-20 text-center"
          >
            <div className="inline-block px-8 py-6 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl">
              <p className="font-medium">
                Visa rules differ by country.{" "}
                <strong>Career 4S</strong> experts guide you personally for a
                hassle-free visa experience.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default VisaProcess;
