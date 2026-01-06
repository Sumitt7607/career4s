import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FileText,
  GraduationCap,
  Wallet,
  Languages,
  Users,
  Award,
  Stamp,
  Heart,
} from "lucide-react";
import { Footer } from "../components/Footer";

const documents = [
  {
    icon: GraduationCap,
    title: "Academic Transcripts",
    description:
      "Official mark sheets and degree certificates from all institutions attended.",
    required: true,
  },
  {
    icon: Stamp,
    title: "Valid Passport",
    description:
      "Must have minimum 6 months validity beyond your intended stay.",
    required: true,
  },
  {
    icon: FileText,
    title: "Statement of Purpose",
    description:
      "A compelling essay explaining your goals, motivations, and why you chose the program.",
    required: true,
  },
  {
    icon: Users,
    title: "Letters of Recommendation",
    description:
      "2–3 letters from professors or employers vouching for your abilities.",
    required: true,
  },
  {
    icon: Wallet,
    title: "Financial Documents",
    description:
      "Bank statements, sponsor letters, or scholarship proof showing financial capability.",
    required: true,
  },
  {
    icon: Languages,
    title: "Language Proficiency",
    description:
      "IELTS, TOEFL, PTE, or Duolingo scores as per university requirements.",
    required: true,
  },
  {
    icon: Award,
    title: "Resume / CV",
    description:
      "A detailed summary of your education, experience, and achievements.",
    required: false,
  },
  {
    icon: Heart,
    title: "Medical & Insurance",
    description:
      "Health clearance certificates and mandatory student insurance.",
    required: false,
  },
];

const DocumentsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });

  return (
    <>
      <section className="relative py-28 overflow-hidden bg-gradient-to-b from-background to-secondary/30">
        {/* subtle background glow */}
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
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold mb-6">
              📄 Essential Checklist
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Documents for{" "}
              <span className="text-orange-500">Admission Abroad</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Keep these documents ready to ensure a smooth and successful
              international admission process.
            </p>
          </motion.div>

          {/* Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {documents.map((doc, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <div className="relative h-full rounded-3xl border border-orange-100 bg-white/70 backdrop-blur-xl p-7 shadow-md hover:shadow-xl transition-all">
                  {/* required tag */}
                  {doc.required && (
                    <span className="absolute top-4 right-4 text-xs font-semibold px-3 py-1 rounded-full bg-orange-100 text-orange-600">
                      Required
                    </span>
                  )}

                  {/* icon */}
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition">
                    <doc.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-lg font-bold mb-3 group-hover:text-orange-600 transition">
                    {doc.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {doc.description}
                  </p>

                  {/* hover overlay */}
                  <div className="absolute inset-0 rounded-3xl bg-gradient-to-t from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-20"
          >
            <p className="text-muted-foreground mb-6 text-lg">
              Confused about documentation? Let our experts guide you step by
              step.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold shadow-lg hover:shadow-orange-500/30 transition"
            >
              Get Document Assistance
            </motion.button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default DocumentsSection;
