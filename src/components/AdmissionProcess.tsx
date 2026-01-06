import { ClipboardList, FileCheck, Users, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "./Footer";

const steps = [
  {
    icon: ClipboardList,
    title: "Application / Inquiry",
    description: "Fill out our simple inquiry form with your academic details and preferred courses.",
    step: 1,
  },
  {
    icon: FileCheck,
    title: "Document Verification",
    description: "Submit your documents for verification. Our team reviews within 24-48 hours.",
    step: 2,
  },
  {
    icon: Users,
    title: "Counseling & College Selection",
    description: "Get personalized guidance from experts to choose the best college for you.",
    step: 3,
  },
  {
    icon: CheckCircle,
    title: "Admission Confirmation",
    description: "Complete the admission formalities and secure your seat at your dream college.",
    step: 4,
  },
];

export const AdmissionProcess = () => {
  return (
    <>
   
    <section className="py-16 px-4 bg-secondary">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
            Your Path to <span className="text-primary">Admission</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Simple 4-step process to get admitted to India's top colleges
          </p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden md:block absolute top-16 left-[12%] right-[12%] h-1 bg-border">
            <motion.div
              className="h-full bg-primary"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              viewport={{ once: true }}
            />
          </div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={step.step}
                className="relative flex flex-col items-center text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Icon Circle */}
                <motion.div
                  className="relative z-10 w-32 h-32 rounded-full bg-background border-4 border-primary flex items-center justify-center shadow-lg mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground font-bold flex items-center justify-center text-sm shadow-md">
                    {step.step}
                  </div>
                  
                  {/* Animated Glow */}
                  <motion.div
                    className="absolute inset-0 rounded-full bg-primary/20"
                    animate={{ scale: [1, 1.15, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
                  />
                  
                  <step.icon className="w-12 h-12 text-primary" strokeWidth={1.5} />
                </motion.div>

                {/* Content */}
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-[200px]">
                  {step.description}
                </p>

                {/* Mobile Connector */}
                {index < steps.length - 1 && (
                  <div className="md:hidden w-1 h-8 bg-primary/30 mt-4" />
                )}
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 1 }}
          viewport={{ once: true }}
        >
          <button className="px-8 py-3 bg-primary text-primary-foreground font-semibold rounded-full shadow-lg hover:shadow-xl transition-all hover:scale-105">
            Start Your Application
          </button>
        </motion.div>
      </div>
    </section>
    <Footer />
     </>
  );
};
