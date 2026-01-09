import { motion } from "framer-motion";
import { Footer } from "./Footer";
import {
  UserPlus,
  FileText,
  Upload,
  CreditCard,
  ClipboardCheck,
  GraduationCap,
} from "lucide-react";

const admissionSteps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Online Registration",
    description:
      "Register yourself using basic details like name, email, and mobile number.",
  },
  {
    step: "02",
    icon: FileText,
    title: "Fill Application Form",
    description:
      "Provide academic information and select your preferred course online.",
  },
  {
    step: "03",
    icon: Upload,
    title: "Upload Documents",
    description:
      "Securely upload mark sheets, ID proof, and other required documents.",
  },
  {
    step: "04",
    icon: CreditCard,
    title: "Pay Application Fee",
    description:
      "Make fast and secure online payment through trusted gateways.",
  },
  {
    step: "05",
    icon: ClipboardCheck,
    title: "Verification Process",
    description:
      "Our experts review and verify your submitted details and documents.",
  },
  {
    step: "06",
    icon: GraduationCap,
    title: "Admission Confirmation",
    description:
      "Receive confirmation and admission letter via email & dashboard.",
  },
];

const OnlineAdmission = () => {
  return (
    <>
      <section className="relative py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <span className="inline-block mb-4 px-5 py-1 text-sm font-semibold rounded-full bg-primary/10 text-primary">
              Admission Guide
            </span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900">
              Online Admission Process
            </h2>
            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              A simple, transparent, and fully online process designed to make
              your admission stress-free.
            </p>
          </motion.div>

          {/* Steps */}
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {admissionSteps.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative rounded-3xl border border-white/60 bg-white/70 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all"
                >
                  {/* Step Number */}
                  <span className="absolute top-6 right-6 text-6xl font-extrabold text-gray-200 group-hover:text-primary/20 transition">
                    {item.step}
                  </span>

                  {/* Icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-indigo-500 flex items-center justify-center mb-6 shadow-md">
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default OnlineAdmission;
