import { motion, Variants } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import {
  CheckCircle,
  Play,
  Target,
  Eye,
  Sparkles,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ================= CONTENT (CONSULTANCY) ================= */
const highlights = [
  "Personalized Admission Counseling",
  "Top Colleges in India & Abroad",
  "Expert Career & Course Guidance",
  "End-to-End Admission Support",
  "Scholarship & Financial Aid Assistance",
  "Visa & Documentation Support",
];

const affiliations = [
  { name: "UGC Approved Colleges", logo: "🏛️" },
  { name: "AICTE Institutions", logo: "🎓" },
  { name: "Global Universities", logo: "🌍" },
  { name: "Government Recognized", logo: "📜" },
  { name: "Trusted Since 1999", logo: "✅" },
];

/* ================= VARIANTS (TYPE SAFE) ================= */
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const fadeSide: Variants = {
  hidden: (direction: "left" | "right") => ({
    opacity: 0,
    x: direction === "left" ? -40 : 40,
  }),
  visible: (direction: "left" | "right") => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: "easeOut" },
  }),
};

/* ================= COMPONENT ================= */
export const AboutSectiononline = () => {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="about"
      className="relative py-20 lg:py-32 bg-background overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 pattern-grid opacity-40" />

      <div ref={ref} className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ================= LEFT : IMAGES ================= */}
          <motion.div
            variants={fadeSide}
            custom="left"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Column 1 */}
              <div className="space-y-4">
                <div className="rounded-2xl overflow-hidden shadow-elevated h-48">
                  <img
                    src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
                    alt="Student Counseling"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated h-64">
                  <img
                    src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80"
                    alt="Career Guidance"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Column 2 */}
              <div className="space-y-4 mt-8">
                <div className="rounded-2xl overflow-hidden shadow-elevated h-64">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80"
                    alt="Consultation Session"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden shadow-elevated h-48">
                  <img
                    src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80"
                    alt="Student Success"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* EXPERIENCE BADGE */}
            <motion.div
              variants={fadeUp}
              custom={0}
              initial="hidden"
              animate={isVisible ? "visible" : "hidden"}
              className="absolute -bottom-6 -right-6 bg-gradient-saffron text-primary-foreground p-6 rounded-2xl shadow-saffron"
            >
              <div className="text-4xl font-extrabold">25+</div>
              <div className="text-sm opacity-90">
                Years of Trusted Guidance
              </div>
            </motion.div>

            {/* PLAY BUTTON */}
            <motion.button
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                         w-20 h-20 rounded-full bg-primary flex items-center justify-center
                         shadow-saffron animate-pulse-glow"
            >
              <Play className="w-8 h-8 text-primary-foreground ml-1" />
            </motion.button>
          </motion.div>

          {/* ================= RIGHT : CONTENT ================= */}
          <motion.div
            variants={fadeSide}
            custom="right"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
              <Sparkles className="w-4 h-4" />
              <span className="text-sm font-medium">
                About Our Consultancy
              </span>
            </div>

            {/* Heading */}
 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-orange-500 mb-6 leading-tight">
  Guiding Students Towards{" "}
  <span className="text-orange-600">
    Right Career Choices
  </span>
</h2>



            {/* Description */}
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Established in 1999, we are a trusted education consultancy helping
              students make informed career decisions. From choosing the right
              course and college to securing admissions in top institutions
              across India and abroad, we provide complete guidance at every
              step of the admission journey.
            </p>

            {/* Mission & Vision */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              <div className="bg-card p-6 rounded-2xl border shadow-soft">
                <div className="w-12 h-12 bg-gradient-saffron rounded-xl flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Our Mission</h3>
                <p className="text-sm text-muted-foreground">
                  To guide students with transparent, ethical, and personalized
                  counseling that helps them secure admissions aligned with
                  their career goals.
                </p>
              </div>

              <div className="bg-card p-6 rounded-2xl border shadow-soft">
                <div className="w-12 h-12 bg-gradient-navy rounded-xl flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="font-semibold mb-2">Our Vision</h3>
                <p className="text-sm text-muted-foreground">
                  To become India’s most trusted education consultancy,
                  empowering students with clarity, confidence, and global
                  opportunities.
                </p>
              </div>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={item}
                  variants={fadeUp}
                  custom={i}
                  initial="hidden"
                  animate={isVisible ? "visible" : "hidden"}
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm">{item}</span>
                </motion.div>
              ))}
            </div>

            {/* Affiliations */}
            <div className="mb-8">
              <p className="text-sm text-muted-foreground mb-4">
                Trusted Network & Recognitions:
              </p>
              <div className="flex flex-wrap gap-4">
                {affiliations.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center gap-2 bg-muted px-4 py-2 rounded-full"
                  >
                    <span className="text-xl">{item.logo}</span>
                    <span className="text-sm font-medium">
                      {item.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Button
              size="lg"
              className="bg-gradient-saffron text-primary-foreground shadow-saffron hover:opacity-90"
            >
              Get Free Career Counseling
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
