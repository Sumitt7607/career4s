import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Search, FileText, Send, CheckCircle, Plane, GraduationCap } from "lucide-react";
import { Footer } from "./components/Footer";
const steps = [
  {
    icon: Search,
    title: "Research & Shortlist",
    description: "Explore universities, courses, and countries that align with your goals and budget.",
    color: "from-orange-400 to-amber-500",
  },
  {
    icon: FileText,
    title: "Prepare Documents",
    description: "Gather transcripts, SOP, LORs, and all required documents for your application.",
    color: "from-amber-500 to-yellow-500",
  },
  {
    icon: Send,
    title: "Submit Applications",
    description: "Apply to your shortlisted universities through their official portals or agents.",
    color: "from-yellow-500 to-orange-400",
  },
  {
    icon: CheckCircle,
    title: "Receive Offer Letter",
    description: "Get acceptance letters from universities and choose the best option for you.",
    color: "from-orange-400 to-red-400",
  },
  {
    icon: Plane,
    title: "Visa & Travel",
    description: "Complete visa formalities, book flights, and prepare for your journey abroad.",
    color: "from-red-400 to-orange-500",
  },
  {
    icon: GraduationCap,
    title: "Begin Your Journey",
    description: "Arrive at your dream university and start your international education adventure!",
    color: "from-orange-500 to-amber-400",
  },
];

const AdmissionProcess = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <>
  
    <section id="admission" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-saffron-light/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Step-by-Step Guide
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-4">
            Admission Process <span className="text-gradient">Abroad</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Your complete roadmap from choosing a course to stepping into your dream university.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-saffron-light to-primary hidden lg:block" />

          <div className="space-y-12 lg:space-y-0">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex flex-col lg:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${index % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <motion.div
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="p-6 rounded-2xl glass shadow-card hover:shadow-glow transition-all duration-300 group"
                  >
                    <div className={`flex items-center gap-4 mb-3 ${index % 2 === 0 ? "lg:flex-row-reverse" : ""}`}>
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-soft group-hover:scale-110 transition-transform`}>
                        <step.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="text-xl font-bold font-display">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground">{step.description}</p>
                  </motion.div>
                </div>

                {/* Center Number */}
                <div className="relative z-10 flex items-center justify-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
                    className="w-14 h-14 rounded-full bg-gradient-saffron shadow-glow flex items-center justify-center"
                  >
                    <span className="text-xl font-bold text-primary-foreground">{index + 1}</span>
                  </motion.div>
                </div>

                {/* Spacer for layout */}
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
    <Footer />
      </>
  );
};

export default AdmissionProcess;
