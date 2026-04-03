import { motion } from "framer-motion";
import { CheckCircle, Target, Eye, Heart } from "lucide-react";

const points = [
  "10+ years of expertise in online education admission consulting",
  "Personalized counselling with dedicated admission experts",
  "Admissions only in UGC-DEB approved & NAAC accredited universities",
  "Strong network with top online universities across India",
  "Complete post-admission academic assistance and mentorship",
  "Flexible fee structure with EMI & scholarship support",
];

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const AboutSectiononmed = () => (
  <section id="about" className="relative py-16 md:py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
    
    {/* Background Glow */}
    <div className="absolute top-0 left-0 w-60 h-60 bg-primary/20 blur-3xl rounded-full -z-10"></div>
    <div className="absolute bottom-0 right-0 w-60 h-60 bg-purple-500/20 blur-3xl rounded-full -z-10"></div>

    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-14"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          About Us
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
          Transforming Education Journey
        </h2>

        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
          We are a trusted education consultancy helping students secure admissions in
          top UGC-approved online universities with complete transparency, guidance,
          and long-term academic support.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">

        {/* Left Points */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="space-y-4"
        >
          {points.map((p, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/5 backdrop-blur-md border border-white/10 hover:border-primary/40 transition-all duration-300"
            >
              <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
              <p className="text-muted-foreground text-sm">
                {p}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Right Cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-5"
        >
          {[
            {
              icon: Target,
              title: "Mission",
              desc: "Deliver accessible and career-focused online education solutions.",
            },
            {
              icon: Eye,
              title: "Vision",
              desc: "Become India's most trusted admission consultancy brand.",
            },
            {
              icon: Heart,
              title: "Values",
              desc: "Transparency, commitment, and student-first approach.",
            },
            {
              icon: CheckCircle,
              title: "Commitment",
              desc: "100% genuine admissions with full academic support.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ y: -6 }}
              className="p-5 rounded-xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-primary/40 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <item.icon className="w-7 h-7 text-primary mb-3" />
              <h3 className="text-base font-semibold mb-1">
                {item.title}
              </h3>
              <p className="text-xs text-muted-foreground">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </div>
  </section>
);

export default AboutSectiononmed;