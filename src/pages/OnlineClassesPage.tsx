import { motion } from "framer-motion";
import {
  Radio,
  PlayCircle,
  MessageSquare,
  Users,
  Clock,
  Languages,
} from "lucide-react";

const classes = [
  {
    icon: Radio,
    title: "Live Interactive Classes",
    desc: "Real-time classes with expert faculty and instant interaction.",
  },
  {
    icon: PlayCircle,
    title: "Recorded Courses",
    desc: "High-quality recorded lessons you can access anytime.",
  },
  {
    icon: MessageSquare,
    title: "Doubt Clearing Sessions",
    desc: "Regular doubt sessions to keep your learning on track.",
  },
  {
    icon: Users,
    title: "One-to-One Mentoring",
    desc: "Personal guidance tailored to your career goals.",
  },
  {
    icon: Clock,
    title: "Exam Preparation Batches",
    desc: "Structured batches with tests, analysis & mentoring.",
  },
  {
    icon: Languages,
    title: "Language Training",
    desc: "IELTS, TOEFL & spoken English with certified trainers.",
  },
];

const OnlineClassesPage = () => {
  return (
    <div className="relative overflow-hidden">
      {/* HERO */}
      <div className="bg-gradient-to-r from-primary/90 to-indigo-600 text-white py-24">
        <div className="container mx-auto text-center px-4">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-extrabold mb-4"
          >
            Online Classes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-lg text-white/90"
          >
            Learn anytime, anywhere with industry experts and personalized
            mentoring.
          </motion.p>
        </div>
      </div>

      {/* CONTENT */}
      <div className="container mx-auto py-20 px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {classes.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative p-8 rounded-2xl border bg-background hover:shadow-xl transition-all duration-300"
            >
              <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition">
                <c.icon className="h-7 w-7" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {c.title}
              </h3>

              <p className="text-muted-foreground text-sm leading-relaxed">
                {c.desc}
              </p>

              {/* Hover Glow */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-primary/0 group-hover:ring-primary/20 transition" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OnlineClassesPage;
