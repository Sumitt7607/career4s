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
    desc: "Attend real-time classes with expert faculty and live interaction.",
  },
  {
    icon: PlayCircle,
    title: "Recorded Courses",
    desc: "Access high-quality recorded lectures anytime, anywhere.",
  },
  {
    icon: MessageSquare,
    title: "Doubt Clearing Sessions",
    desc: "Regular doubt-solving sessions to strengthen concepts.",
  },
  {
    icon: Users,
    title: "One-to-One Mentoring",
    desc: "Personalized mentoring tailored to your career goals.",
  },
  {
    icon: Clock,
    title: "Exam Preparation Batches",
    desc: "Structured batches with mock tests and performance analysis.",
  },
  {
    icon: Languages,
    title: "Language Training",
    desc: "IELTS, TOEFL & spoken English training by certified experts.",
  },
];

const OnlineClassesPage = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* ================= HERO ================= */}
      <section className="py-24 border-b">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-primary/10 text-primary">
              Online Learning
            </span>

            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Interactive <span className="text-primary">Online Classes</span>
              <br />
              Built for Modern Learners
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-xl leading-relaxed">
              Learn anytime, anywhere with expert instructors, live interaction,
              recorded sessions, and personalized mentoring — all in one place.
            </p>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-3xl bg-primary/10 translate-x-4 translate-y-4 -z-10" />
            <img
              src="https://images.unsplash.com/photo-1584697964403-b5c1e45b1b67?auto=format&fit=crop&w=1200&q=80"
              alt="Online Classes"
              className="rounded-3xl shadow-xl"
            />
          </motion.div>
        </div>
      </section>

      {/* ================= FEATURES ================= */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ staggerChildren: 0.12 }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {classes.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                whileHover={{ y: -8 }}
                className="group relative p-8 rounded-3xl border bg-white shadow-sm hover:shadow-xl transition-all"
              >
                {/* ICON */}
                <div className="h-14 w-14 flex items-center justify-center rounded-xl bg-primary/10 text-primary mb-6 group-hover:scale-110 transition">
                  <c.icon className="h-7 w-7" />
                </div>

                {/* TEXT */}
                <h3 className="text-xl font-semibold tracking-tight mb-3 text-gray-900">
                  {c.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {c.desc}
                </p>

                {/* HOVER RING */}
                <div className="absolute inset-0 rounded-3xl ring-1 ring-primary/0 group-hover:ring-primary/20 transition" />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default OnlineClassesPage;
