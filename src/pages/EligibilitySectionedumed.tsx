import { motion } from "framer-motion";
import { FileCheck, GraduationCap } from "lucide-react";

const docs = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate",
  "Graduation Marksheet (for PG courses)",
  "Aadhaar Card",
  "Passport Size Photos",
  "Migration / Transfer Certificate",
  "Category Certificate (if applicable)",
  "Experience Letter (if applicable)",
];

const eligibility = [
  { program: "B.Tech", criteria: "12th Pass with PCM (45% min)" },
  { program: "M.Tech", criteria: "B.Tech/BE (50% min)" },
  { program: "Diploma", criteria: "10th Pass (35% min)" },
  { program: "BCA", criteria: "12th Pass (Any Stream)" },
  { program: "MCA", criteria: "BCA/B.Sc IT (50% min)" },
  { program: "MBA", criteria: "Graduation (50% min)" },
];

const cardAnimation = {
  hidden: { opacity: 0, y: 30 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.4,
    },
  }),
};

const EligibilitySectionedumed = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-16">

          {/* Eligibility */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Eligibility
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Eligibility <span className="text-primary">Criteria</span>
            </h2>

            <div className="space-y-4">
              {eligibility.map((e, i) => (
                <motion.div
                  key={i}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>

                  <div className="text-base md:text-lg">
                    <span className="font-semibold text-foreground">
                      {e.program}:
                    </span>{" "}
                    <span className="text-muted-foreground">
                      {e.criteria}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Documents */}
          <div>
            <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
              Documents
            </p>

            <h2 className="text-3xl md:text-5xl font-bold leading-tight mb-8">
              Documents <span className="text-primary">Required</span>
            </h2>

            <div className="space-y-4">
              {docs.map((d, i) => (
                <motion.div
                  key={i}
                  variants={cardAnimation}
                  initial="hidden"
                  whileInView="show"
                  custom={i}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.03 }}
                  className="flex items-center gap-4 p-5 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-primary/20 transition-all"
                >
                  <div className="bg-primary/10 p-3 rounded-full">
                    <FileCheck className="w-6 h-6 text-primary" />
                  </div>

                  <span className="text-base md:text-lg text-foreground/90">
                    {d}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default EligibilitySectionedumed;