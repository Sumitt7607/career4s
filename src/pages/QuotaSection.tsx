import { motion } from "framer-motion";
import { Users, Shield, Globe, Award } from 'lucide-react';

const quotas = [
  {
    icon: Users,
    title: 'All India Quota (AIQ)',
    desc: '15% seats reserved for national-level counseling through MCC.',
    features: ['Centralized counseling', 'National-level competition', 'Top government colleges']
  },
  {
    icon: Shield,
    title: 'State Quota',
    desc: '85% seats allotted through respective state counseling.',
    features: ['State domicile required', 'State counseling body', 'Lower cutoffs']
  },
  {
    icon: Award,
    title: 'Management Quota',
    desc: 'Transparent management quota admissions in private colleges.',
    features: ['No donation', 'Legal process', 'NMC approved']
  },
  {
    icon: Globe,
    title: 'NRI Quota',
    desc: 'Special quota for NRI candidates and their children.',
    features: ['NRI sponsorship', 'Foreign currency fees', 'Limited seats']
  },
];

// 🔥 animations
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

const QuotaSection = () => (
  <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">

    {/* glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          Admission Quotas
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
          Understanding <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Admission Quotas
          </span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Learn about different admission pathways in medical colleges and choose the best option based on your eligibility and NEET score.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 gap-6"
      >
        {quotas.map((q, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.02 }}
            className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-2xl group"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            {/* header */}
            <div className="flex items-center gap-3 mb-4 relative z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-yellow-500 flex items-center justify-center shadow-md">
                <q.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold">{q.title}</h3>
            </div>

            {/* desc */}
            <p className="text-sm text-muted-foreground mb-4 relative z-10">
              {q.desc}
            </p>

            {/* features */}
            <ul className="space-y-2 relative z-10">
              {q.features.map((f, j) => (
                <li key={j} className="flex items-center gap-2 text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {f}
                </li>
              ))}
            </ul>

            {/* badge */}
            <span className="absolute top-4 right-4 text-[10px] bg-orange-500 text-white px-2 py-1 rounded-full">
              Popular
            </span>

          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default QuotaSection;