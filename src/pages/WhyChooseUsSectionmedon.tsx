import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  'No Hidden Charges — Complete Fee Transparency',
  'Direct Tie-ups with 500+ Medical Colleges',
  'NEET Score-Based College Prediction Tool',
  'Free Counseling for Eligible Students',
  'Dedicated Counselor Assigned to Each Student',
  'End-to-End Admission Process Management',
  'Post-Admission Support & Guidance',
  'Scholarship & Loan Assistance',
  'Legal Support for Admission Disputes',
  'Pan-India & International Coverage',
];

// 🔥 animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 }
  }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const WhyChooseUsSectionmedon = () => (
  <section className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
    <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">

      {/* LEFT SIDE */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          Why Choose Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-6">
          Why <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            10,000+ Students
          </span> Trust Us
        </h2>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 group"
            >
              <CheckCircle2 className="w-5 h-5 text-primary mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
              <p className="text-foreground/80 group-hover:text-foreground transition-colors">
                {r}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* RIGHT SIDE CARD */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        whileHover={{ scale: 1.02 }}
        className="relative"
      >
        <div className="rounded-3xl p-8 bg-gradient-to-r from-orange-500 to-yellow-500 text-white shadow-xl">

          <h3 className="text-2xl font-bold mb-4">
            Get Free Counseling Today!
          </h3>

          <p className="mb-6 opacity-90">
            Speak with our expert counselors and get a personalized admission roadmap — absolutely free.
          </p>

          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-orange-500 px-6 py-3 rounded-full font-semibold hover:bg-white/90 transition"
          >
            Book Free Session
          </a>

        </div>
      </motion.div>

    </div>
  </section>
);

export default WhyChooseUsSectionmedon;