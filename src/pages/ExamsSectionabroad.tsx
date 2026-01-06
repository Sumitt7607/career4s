import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  BookOpen,
  Clock,
  Target,
  Award,
  ChevronRight,
  Sparkles,
} from "lucide-react";
import { Footer } from "../components/Footer";

/* ================= DATA ================= */
const exams = [
  {
    category: "Language Proficiency",
    items: [
      {
        name: "IELTS",
        fullName: "International English Language Testing System",
        countries: ["UK", "Australia", "Canada", "NZ"],
        duration: "2h 45m",
        sections: ["Listening", "Reading", "Writing", "Speaking"],
        score: "0–9 bands",
        validity: "2 years",
      },
      {
        name: "TOEFL",
        fullName: "Test of English as a Foreign Language",
        countries: ["USA", "Canada", "Australia"],
        duration: "3h 30m",
        sections: ["Reading", "Listening", "Speaking", "Writing"],
        score: "0–120",
        validity: "2 years",
      },
      {
        name: "PTE",
        fullName: "Pearson Test of English",
        countries: ["Australia", "UK", "NZ", "Canada"],
        duration: "2h",
        sections: ["Speaking & Writing", "Reading", "Listening"],
        score: "10–90",
        validity: "2 years",
      },
      {
        name: "Duolingo",
        fullName: "Duolingo English Test",
        countries: ["USA", "UK", "Canada"],
        duration: "1h",
        sections: ["Adaptive Test", "Interview", "Writing Sample"],
        score: "10–160",
        validity: "2 years",
      },
    ],
  },
  {
    category: "Graduate Admissions",
    items: [
      {
        name: "GRE",
        fullName: "Graduate Record Examination",
        countries: ["USA", "UK", "Canada", "Germany"],
        duration: "3h 45m",
        sections: ["Verbal", "Quantitative", "Analytical Writing"],
        score: "260–340",
        validity: "5 years",
      },
      {
        name: "GMAT",
        fullName: "Graduate Management Admission Test",
        countries: ["USA", "UK", "Europe", "Asia"],
        duration: "3h 7m",
        sections: ["Quant", "Verbal", "Data Insights", "AWA"],
        score: "200–800",
        validity: "5 years",
      },
    ],
  },
  {
    category: "Undergraduate",
    items: [
      {
        name: "SAT",
        fullName: "Scholastic Assessment Test",
        countries: ["USA", "Canada"],
        duration: "2h 14m",
        sections: ["Reading & Writing", "Math"],
        score: "400–1600",
        validity: "5 years",
      },
      {
        name: "ACT",
        fullName: "American College Testing",
        countries: ["USA"],
        duration: "2h 55m",
        sections: ["English", "Math", "Reading", "Science"],
        score: "1–36",
        validity: "No expiry",
      },
    ],
  },
];

const ExamsSectionAbroad = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-120px" });
  const [activeExam, setActiveExam] = useState("IELTS");

  const allExams = exams.flatMap((c) => c.items);
  const selectedExam = allExams.find((e) => e.name === activeExam);

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
              <Sparkles className="w-4 h-4" /> Standardized Exams
            </span>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Entrance Exams for{" "}
              <span className="text-orange-500">Admission Abroad</span>
            </h2>

            <p className="text-lg text-muted-foreground">
              Explore globally accepted exams and understand which one fits your
              study destination.
            </p>
          </motion.div>

          {/* Layout */}
          <div className="grid lg:grid-cols-3 gap-10">
            {/* LEFT – Exams list */}
            <div className="space-y-8">
              {exams.map((category, ci) => (
                <motion.div
                  key={category.category}
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: ci * 0.1 }}
                >
                  <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                    {category.category}
                  </h4>

                  <div className="space-y-2">
                    {category.items.map((exam) => (
                      <motion.button
                        key={exam.name}
                        onClick={() => setActiveExam(exam.name)}
                        whileHover={{ x: 6 }}
                        className={`w-full flex justify-between items-center p-4 rounded-2xl border transition-all ${
                          activeExam === exam.name
                            ? "bg-gradient-to-r from-orange-500 to-orange-600 text-white shadow-lg"
                            : "bg-white/70 backdrop-blur border-orange-100 hover:border-orange-300"
                        }`}
                      >
                        <div>
                          <p className="font-bold">{exam.name}</p>
                          <p
                            className={`text-xs ${
                              activeExam === exam.name
                                ? "text-white/80"
                                : "text-muted-foreground"
                            }`}
                          >
                            {exam.countries.join(", ")}
                          </p>
                        </div>
                        <ChevronRight
                          className={`transition ${
                            activeExam === exam.name
                              ? "rotate-90"
                              : ""
                          }`}
                        />
                      </motion.button>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* RIGHT – Details */}
            <div className="lg:col-span-2">
              <AnimatePresence mode="wait">
                {selectedExam && (
                  <motion.div
                    key={selectedExam.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4 }}
                    className="rounded-3xl bg-white/80 backdrop-blur-xl border border-orange-100 p-10 shadow-xl"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div>
                        <h3 className="text-3xl font-extrabold text-orange-600">
                          {selectedExam.name}
                        </h3>
                        <p className="text-muted-foreground">
                          {selectedExam.fullName}
                        </p>
                      </div>

                      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-lg">
                        <BookOpen className="w-8 h-8 text-white" />
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid sm:grid-cols-3 gap-5 mb-10">
                      {[
                        {
                          icon: Clock,
                          label: "Duration",
                          value: selectedExam.duration,
                        },
                        {
                          icon: Target,
                          label: "Score",
                          value: selectedExam.score,
                        },
                        {
                          icon: Award,
                          label: "Validity",
                          value: selectedExam.validity,
                        },
                      ].map((item, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: i * 0.1 }}
                          className="p-5 rounded-2xl bg-orange-50"
                        >
                          <item.icon className="w-5 h-5 text-orange-600 mb-2" />
                          <p className="text-xs text-muted-foreground">
                            {item.label}
                          </p>
                          <p className="font-bold">{item.value}</p>
                        </motion.div>
                      ))}
                    </div>

                    {/* Sections */}
                    <h4 className="font-semibold mb-3">Test Sections</h4>
                    <div className="flex flex-wrap gap-2 mb-8">
                      {selectedExam.sections.map((s, i) => (
                        <motion.span
                          key={s}
                          initial={{ scale: 0.8, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: i * 0.08 }}
                          className="px-4 py-2 rounded-full bg-orange-100 text-orange-600 text-sm font-semibold"
                        >
                          {s}
                        </motion.span>
                      ))}
                    </div>

                    {/* Countries */}
                    <h4 className="font-semibold mb-3">Accepted In</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExam.countries.map((c) => (
                        <span
                          key={c}
                          className="px-3 py-1 rounded-lg bg-secondary text-sm font-medium"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ExamsSectionAbroad;
