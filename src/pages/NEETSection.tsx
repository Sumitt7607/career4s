import { motion } from "framer-motion";
import { BookOpen, Target, Award, TrendingUp, FileText, Users } from 'lucide-react';

const neetServices = [
  { icon: Target, title: 'Score Prediction', desc: 'AI-based college prediction from your NEET score.' },
  { icon: Award, title: 'Rank Analysis', desc: 'Detailed analysis of cutoffs and your ranking chances.' },
  { icon: TrendingUp, title: 'Counseling Strategy', desc: 'Best strategy for AIQ and state counseling rounds.' },
  { icon: FileText, title: 'Choice Filling', desc: 'Expert assistance in choice filling for best results.' },
  { icon: Users, title: 'Mock Counseling', desc: 'Practice sessions to prepare for real counseling.' },
  { icon: BookOpen, title: 'Cutoff Database', desc: 'Access to 5 years of NEET cutoff data for all colleges.' },
];

// 🔥 animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
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

const NEETSection = () => (
  <section id="neet" className="py-16 md:py-20 bg-gradient-to-br from-orange-600 via-orange-500 to-yellow-500 text-white relative overflow-hidden">
    
    {/* 🔥 background glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-white/10 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-14"
      >
        <span className="text-sm uppercase tracking-widest text-white/80 font-semibold">
          NEET Counseling
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
          Expert NEET Counseling & Guidance
        </h2>

        <p className="text-white/80 max-w-2xl mx-auto">
          Navigate the complex NEET counseling process with our expert guidance and proven strategies.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {neetServices.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.03 }}
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 hover:border-white/40 transition-all duration-300 shadow-md hover:shadow-2xl"
          >
            <s.icon className="w-8 h-8 mb-4 text-white" />

            <h3 className="text-lg font-semibold mb-2">
              {s.title}
            </h3>

            <p className="text-sm text-white/80">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default NEETSection;