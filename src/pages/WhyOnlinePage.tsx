import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";
import {
  Calendar,
  Globe,
  Wallet,
  Target,
  Lightbulb,
  Medal,
} from "lucide-react";

/* ================= DATA ================= */

const benefits = [
  {
    icon: Calendar,
    title: "Flexible Schedule",
    desc: "Study at your own pace without disturbing your daily routine.",
  },
  {
    icon: Globe,
    title: "Learn from Anywhere",
    desc: "Access world-class education from any corner of the globe.",
  },
  {
    icon: Wallet,
    title: "Affordable Education",
    desc: "Save money on travel, accommodation, and course fees.",
  },
  {
    icon: Target,
    title: "Global Faculty Access",
    desc: "Learn from experienced international mentors and trainers.",
  },
  {
    icon: Lightbulb,
    title: "Self-Paced Learning",
    desc: "Pause, rewind, and revisit lessons anytime you want.",
  },
  {
    icon: Medal,
    title: "Recognized Certifications",
    desc: "Earn certificates accepted by universities and employers.",
  },
];

/* ================= ANIMATIONS ================= */

const stagger = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0 },
};

const WhyOnlinePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* ================= MAIN ================= */}
      <main className="flex-grow">
        {/* ================= HERO ================= */}
        <motion.section
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[85vh] flex items-center justify-center text-white overflow-hidden"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1522202176988-66273c2fd55f)",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Animated overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80"
            animate={{ opacity: [0.6, 0.8, 0.6] }}
            transition={{ repeat: Infinity, duration: 6 }}
          />

          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="relative z-10 text-center px-4 max-w-3xl"
          >
            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-6xl font-extrabold mb-6"
            >
              Why Choose Online Education?
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg md:text-xl text-white/90"
            >
              Flexible, affordable & globally recognized learning designed
              for your future.
            </motion.p>
          </motion.div>
        </motion.section>

        {/* ================= BENEFITS ================= */}
<section className="container mx-auto py-28 px-4">
  {/* Heading */}
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, ease: "easeOut" }}
    className="text-center max-w-3xl mx-auto mb-20"
  >
    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">
      Benefits of Online Learning
    </h2>
    <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
      A smarter, more flexible way to build skills, earn credentials, and
      advance your career globally.
    </p>
  </motion.div>

  {/* Cards */}
  <motion.div
    initial="hidden"
    whileInView="show"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      show: { transition: { staggerChildren: 0.12 } },
    }}
    className="grid md:grid-cols-3 gap-12"
  >
    {benefits.map((b) => (
      <motion.div
        key={b.title}
        variants={{
          hidden: { opacity: 0, y: 30 },
          show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.45, ease: "easeOut" },
          },
        }}
        whileHover={{ y: -6 }}
        className="p-10 rounded-xl border border-border bg-background hover:shadow-xl transition-all"
      >
        {/* Icon */}
        <div className="h-16 w-16 flex items-center justify-center rounded-lg bg-primary/10 text-primary mb-8">
          <b.icon className="h-8 w-8" />
        </div>

        {/* Text */}
        <h3 className="text-xl md:text-2xl font-bold mb-4">
          {b.title}
        </h3>

        <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
          {b.desc}
        </p>
      </motion.div>
    ))}
  </motion.div>
</section>
        {/* ================= IMAGE + CONTENT ================= */}
        <section className="container mx-auto py-24 px-4 grid md:grid-cols-2 gap-16 items-center">
          <motion.img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3"
            alt="Online Learning"
            className="rounded-3xl shadow-2xl"
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          />
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Learn Smarter. Learn Better.
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Online education removes barriers and gives you control over
              your learning journey — anytime, anywhere.
            </p>

            <ul className="space-y-3 text-sm">
              <li>✔ Learn from global experts</li>
              <li>✔ Mobile-friendly classes</li>
              <li>✔ Career-focused programs</li>
              <li>✔ Industry-recognized certificates</li>
            </ul>
          </motion.div>
        </section>

        {/* ================= CTA ================= */}
        <motion.section
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-primary to-indigo-600 text-white py-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
            Ready to Start Your Learning Journey?
          </h2>
          <p className="text-white/90 mb-8">
            Join thousands of students building their future online.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 rounded-full bg-white text-primary font-bold shadow-xl"
          >
            Apply Now
          </motion.button>
        </motion.section>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
};

export default WhyOnlinePage;
