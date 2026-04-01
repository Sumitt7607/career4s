import { motion } from "framer-motion";
import {
  Cpu, Database, Brain, Wifi, Cog, Zap,
  Code, Server, Shield, Cloud, Monitor, Smartphone
} from "lucide-react";

const branches = [
  { icon: Cpu, name: "Computer Science", code: "CSE" },
  { icon: Zap, name: "Electrical Engineering", code: "EE" },
  { icon: Cog, name: "Mechanical Engineering", code: "ME" },
  { icon: Database, name: "Data Science", code: "DS" },
  { icon: Brain, name: "Artificial Intelligence", code: "AI/ML" },
  { icon: Wifi, name: "Electronics & Comm.", code: "ECE" },
  { icon: Code, name: "Information Technology", code: "IT" },
  { icon: Server, name: "Civil Engineering", code: "CE" },
  { icon: Shield, name: "Cyber Security", code: "CS" },
  { icon: Cloud, name: "Cloud Computing", code: "CC" },
  { icon: Monitor, name: "Software Engineering", code: "SE" },
  { icon: Smartphone, name: "IoT & Embedded", code: "IoT" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

const EngineeringBranchesSection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Engineering Branches
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Explore <span className="text-primary">Specializations</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Choose from a wide range of modern engineering fields and build your dream career.
          </p>
        </div>

        {/* Grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          {branches.map((b, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl" />

              {/* Icon */}
              <div className="relative z-10 w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-primary transition">
                <b.icon className="w-8 h-8 text-primary group-hover:text-white transition" />
              </div>

              {/* Text */}
              <h3 className="relative z-10 font-semibold text-foreground text-base md:text-lg">
                {b.name}
              </h3>

              <p className="relative z-10 text-sm text-muted-foreground mt-1">
                {b.code}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default EngineeringBranchesSection;