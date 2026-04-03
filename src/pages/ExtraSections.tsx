import { motion } from "framer-motion";
import {
  Monitor, Building2, GraduationCap, Globe2, Landmark, Award,
  Briefcase, HeartHandshake, Wallet, BadgeCheck, Laptop,
  Smartphone, Wifi, Video, Newspaper, BookOpen
} from "lucide-react";

// 🔥 Animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.12
    }
  }
};



// ================== SECTION 1 ==================
export const DeemedUniversities = () => {
  const unis = [
    "Manipal University (MAHE)", "Amity University Online", "NMIMS Global Access",
    "Symbiosis Centre for Distance Learning", "Jain University Online", "LPU Online",
    "DY Patil University Online", "Chandigarh University Online",
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto">

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl font-bold">Top Online Universities</h2>
        </motion.div>

        <motion.div
          variants={stagger}
          initial="hidden"
          whileInView="show"
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {unis.map((u, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-xl border bg-white/5 backdrop-blur-md hover:border-primary/40 flex items-center gap-3"
            >
              <Landmark className="w-5 h-5 text-primary" />
              <span className="text-sm">{u}</span>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};


// ================== SECTION 2 ==================
export const GovtVsPrivate = () => (
  <section className="py-16 bg-muted/30">
    <div className="container mx-auto">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold">Online vs Distance vs Regular</h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid md:grid-cols-3 gap-6"
      >
        {[
          { title: "Online", icon: Monitor },
          { title: "Distance", icon: Building2 },
          { title: "Regular", icon: GraduationCap },
        ].map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            className="p-6 rounded-xl border bg-card text-center"
          >
            <c.icon className="w-10 h-10 text-primary mx-auto mb-3" />
            <h3 className="font-bold">{c.title}</h3>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);


// ================== SECTION 3 ==================
export const ScholarshipSection = () => (
  <section className="py-16 bg-background">
    <div className="container mx-auto">

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        className="text-center mb-10"
      >
        <h2 className="text-3xl font-bold">Scholarships</h2>
      </motion.div>

      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {[1,2,3,4].map((_, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -5 }}
            className="p-6 rounded-xl border bg-card text-center"
          >
            <Wallet className="w-8 h-8 text-primary mx-auto mb-2" />
            <h3 className="font-bold">Scholarship</h3>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);


// ================== CTA ==================
export const CTABanner = () => (
  <section className="py-20 bg-primary text-white text-center">

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
    >
      <h2 className="text-3xl font-bold mb-4">
        Start Your Online Degree Today!
      </h2>

      <button className="px-6 py-3 bg-white text-primary rounded-lg">
        Enroll Now
      </button>
    </motion.div>

  </section>
);