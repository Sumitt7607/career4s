import {
  GraduationCap,
  Code,
  Briefcase,
  Calculator,
  Globe,
  BookOpen,
} from "lucide-react";
import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

const courses = [
  {
    icon: GraduationCap,
    title: "Undergraduate Courses",
    desc: "B.Tech, BBA, BCA, BA, B.Sc and more UG programs.",
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1200",
  },
  {
    icon: BookOpen,
    title: "Postgraduate Courses",
    desc: "MBA, M.Tech, MCA, MA, M.Sc & specialized PG degrees.",
    image:
      "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1200",
  },
  {
    icon: Code,
    title: "Professional Courses",
    desc: "Industry-oriented programs for skill development.",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=1200",
  },
  {
    icon: Calculator,
    title: "Commerce & Management",
    desc: "Accounting, finance, business & management studies.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1200",
  },
  {
    icon: Globe,
    title: "Study Abroad Programs",
    desc: "International degrees & global certifications.",
    image:
      "https://images.unsplash.com/photo-1502920514313-52581002a659?q=80&w=1200",
  },
  {
    icon: Briefcase,
    title: "Career-Oriented Courses",
    desc: "Job-ready programs with certifications & placement focus.",
    image:
      "https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200",
  },
];

const CoursesPage = () => {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative pt-32 pb-24 overflow-hidden">
        {/* background glow */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 blur-3xl rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 blur-3xl rounded-full" />

        <div className="relative container mx-auto px-4 text-center max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            Explore Our{" "}
            <span className="text-gradient">Courses</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-muted-foreground text-lg"
          >
            Choose from a wide range of academic and career-focused programs
            designed to build your future.
          </motion.p>
        </div>
      </section>

      {/* ===== COURSES GRID ===== */}
      <section className="pb-28">
        <div className="container mx-auto px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {courses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.12 }}
                whileHover={{ scale: 1.03 }}
                className="group relative rounded-3xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
              >
                {/* IMAGE */}
                <div className="absolute inset-0">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-black/55" />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-end">
                  {/* icon */}
                  <div className="w-14 h-14 rounded-xl bg-primary/30 backdrop-blur flex items-center justify-center mb-4">
                    <course.icon className="w-7 h-7 text-white" />
                  </div>

                  <h3 className="text-2xl font-semibold text-white mb-2">
                    {course.title}
                  </h3>

                  <p className="text-white/80 text-sm mb-5">
                    {course.desc}
                  </p>

                  {/* CTA */}
                  <div className="flex items-center gap-2 text-sm font-semibold text-primary-foreground opacity-0 group-hover:opacity-100 transition">
                    View Details →
                  </div>
                </div>

                {/* glow on hover */}
                <div className="pointer-events-none absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursesPage;
