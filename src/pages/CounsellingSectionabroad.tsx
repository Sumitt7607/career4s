import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  MessageCircle,
  Search,
  FileText,
  Plane,
  Headphones,
  Star,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "../components/Footer";

/* ================= DATA ================= */
const services = [
  {
    icon: MessageCircle,
    title: "Free Initial Consultation",
    description:
      "Get expert advice on your study abroad journey with zero commitment.",
    features: ["Career assessment", "Country selection", "Budget planning"],
  },
  {
    icon: Search,
    title: "University Shortlisting",
    description:
      "Personalized university and course selection based on your profile.",
    features: ["Profile evaluation", "Course matching", "Scholarship guidance"],
  },
  {
    icon: FileText,
    title: "Application Assistance",
    description:
      "End-to-end support to build strong and successful applications.",
    features: ["SOP drafting", "Document review", "Application submission"],
  },
  {
    icon: Plane,
    title: "Visa & Travel Support",
    description:
      "Expert help for visa filing and smooth travel preparation.",
    features: ["Mock interviews", "Document checklist", "Travel guidance"],
  },
  {
    icon: Headphones,
    title: "Pre-Departure Briefing",
    description:
      "Everything you need to settle confidently in a new country.",
    features: ["Cultural tips", "Accommodation help", "Banking guidance"],
  },
  {
    icon: Star,
    title: "Post-Arrival Support",
    description:
      "We continue to support you even after you reach your destination.",
    features: ["24/7 helpline", "Local connections", "Emergency support"],
  },
];

const CounsellingSectionAbroad = () => {
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
              <Sparkles className="w-4 h-4" /> Expert Guidance
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Counselling for{" "}
              <span className="text-orange-500">Admission Abroad</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              From first consultation to successful settlement, our counsellors
              guide you at every stage.
            </p>
          </motion.div>

          {/* Services */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl bg-white/80 backdrop-blur-xl border border-orange-100 p-8 shadow-md hover:shadow-xl transition-all">
                  {/* Icon */}
                  <motion.div
                    whileHover={{ rotate: 8, scale: 1.1 }}
                    className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center mb-6 shadow-lg"
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </motion.div>

                  <h3 className="text-xl font-bold mb-3 group-hover:text-orange-600 transition">
                    {service.title}
                  </h3>

                  <p className="text-muted-foreground mb-6">
                    {service.description}
                  </p>

                  <ul className="space-y-3">
                    {service.features.map((feature, fIndex) => (
                      <motion.li
                        key={fIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.3 + fIndex * 0.1 }}
                        className="flex items-center gap-3 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-orange-500 flex-shrink-0" />
                        <span className="text-muted-foreground">
                          {feature}
                        </span>
                      </motion.li>
                    ))}
                  </ul>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="mt-20 text-center"
          >
            <div className="inline-flex flex-col sm:flex-row items-center gap-6 px-10 py-8 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-xl">
              <div className="text-left">
                <h3 className="text-2xl font-bold mb-1">
                  Ready to Begin Your Journey?
                </h3>
                <p className="text-white/80">
                  Book a free counselling session with Career4S experts.
                </p>
              </div>

              <Button
                size="lg"
                className="bg-white text-orange-600 font-semibold hover:bg-white/90 shadow-lg"
              >
                Book Free Session
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CounsellingSectionAbroad;
