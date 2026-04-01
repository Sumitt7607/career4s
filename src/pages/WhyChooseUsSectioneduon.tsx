import { motion } from "framer-motion";
import {
  Lightbulb, Users, Clock, Shield, HeadphonesIcon,
  TrendingUp, Award, Heart, Zap, Target,
  BookOpen, Globe
} from "lucide-react";

const reasons = [
  { icon: Shield, title: "100% Verified", desc: "Only UGC & AICTE approved universities" },
  { icon: Clock, title: "Quick Admission", desc: "Get admitted within 7 working days" },
  { icon: HeadphonesIcon, title: "24/7 Support", desc: "Round the clock student helpline" },
  { icon: TrendingUp, title: "Career Growth", desc: "Placement assistance after completion" },
  { icon: Award, title: "Quality Education", desc: "Industry-relevant curriculum" },
  { icon: Heart, title: "Student First", desc: "Personalized guidance for every student" },
  { icon: Zap, title: "Fast Process", desc: "Hassle-free documentation & enrollment" },
  { icon: Target, title: "Goal Oriented", desc: "Focused approach to your career goals" },
  { icon: BookOpen, title: "Rich Content", desc: "Comprehensive study materials included" },
  { icon: Globe, title: "Learn Anywhere", desc: "Study from any location, any device" },
  { icon: Users, title: "Community", desc: "Join 10,000+ successful alumni" },
  { icon: Lightbulb, title: "Innovation", desc: "Latest EdTech learning tools" },
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

const WhyChooseUsSectioneduon = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
            Why Choose Us
          </p>

          <h2 className="text-3xl md:text-5xl font-bold">
            Why Students <span className="text-primary">Trust Us</span>
          </h2>

          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Discover why thousands of students choose us for their education journey.
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
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              variants={item}
              whileHover={{ scale: 1.05 }}
              className="relative p-6 rounded-3xl backdrop-blur-xl bg-white/5 border border-white/10 shadow-xl hover:shadow-primary/20 transition-all duration-300 group cursor-pointer overflow-hidden"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition duration-300 rounded-3xl" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary transition">
                <r.icon className="w-7 h-7 text-primary group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="relative z-10 font-semibold text-foreground text-base md:text-lg mb-1">
                {r.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm text-muted-foreground">
                {r.desc}
              </p>

            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default WhyChooseUsSectioneduon;