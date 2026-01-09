import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";

const programs = [
  {
    title: "Online Engineering Programs",
    description:
      "Industry-aligned B.Tech & M.Tech programs with flexible schedules and future-ready curriculum.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b8b4c66?auto=format&fit=crop&w=1400&q=80",
    link: "/distance/engineering",
  },
  {
    title: "Online Medical Programs",
    description:
      "Healthcare, paramedical & medical programs designed for modern professionals.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1580281657521-6c1c8c3f3b32?auto=format&fit=crop&w=1400&q=80",
    link: "/distance/medical",
  },
  {
    title: "Online Management Programs",
    description:
      "Online MBA, BBA & executive programs to accelerate leadership careers.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    link: "/distance/management",
  },
  {
    title: "Online Postgraduate Programs",
    description:
      "UGC-approved MA, M.Com, M.Sc & PG programs with complete flexibility.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    link: "/distance/postgraduation",
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { y: 40, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const Programs = () => {
  return (
    <>
      {/* ================= HERO ================= */}
{/* ================= HERO ================= */}
<section className="relative bg-white py-24">
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center"
  >
    {/* LEFT CONTENT */}
    <div>
      <span className="inline-block mb-4 px-4 py-1.5 text-sm font-semibold rounded-full bg-orange-100 text-orange-600">
        Distance Education Programs
      </span>

      <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
        Flexible & Recognized <br />
        <span className="text-orange-600">
          Distance Degree Programs
        </span>
      </h1>

      <p className="mt-6 text-lg text-gray-600 max-w-xl">
        Pursue UGC-approved distance education programs in Engineering,
        Medical, Management, and Postgraduate domains — designed for
        working professionals and modern learners.
      </p>
    </div>

    {/* RIGHT VISUAL */}
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative"
    >
      <div className="absolute inset-0 rounded-3xl bg-orange-100 -z-10 translate-x-4 translate-y-4" />

      <img
        src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80"
        alt="Distance Education"
        className="rounded-3xl shadow-xl"
      />
    </motion.div>
  </motion.div>
</section>

      {/* ================= PROGRAMS ================= */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
          >
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <motion.div
                  key={program.title}
                  variants={item}
                  whileHover={{ y: -10 }}
                  transition={{ type: "spring", stiffness: 120 }}
                  className="group relative rounded-3xl overflow-hidden
                             bg-white/70 backdrop-blur-xl border border-white/60
                             shadow-xl transition-all duration-500
                             hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    <div
                      className="absolute bottom-4 left-4 w-14 h-14
                                 rounded-2xl bg-white/90 backdrop-blur
                                 flex items-center justify-center
                                 text-orange-600 shadow-lg"
                    >
                      <Icon className="w-7 h-7" />
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-7">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      {program.title}
                    </h3>

                    <p className="text-gray-600 text-sm leading-relaxed mb-6">
                      {program.description}
                    </p>

                    <Link
                      to={program.link}
                      className="inline-flex items-center gap-2 text-sm font-semibold
                                 text-orange-600 group-hover:text-white
                                 px-6 py-3 rounded-full
                                 border border-orange-200
                                 group-hover:border-transparent
                                 bg-orange-50 group-hover:bg-gradient-to-r
                                 group-hover:from-orange-500 group-hover:to-orange-600
                                 transition-all duration-300"
                    >
                      View Programs
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>

                  <div
                    className="pointer-events-none absolute inset-0 opacity-0
                               group-hover:opacity-100 transition duration-500
                               bg-gradient-to-br from-orange-400/10 via-transparent to-orange-500/10"
                  />
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Programs;
