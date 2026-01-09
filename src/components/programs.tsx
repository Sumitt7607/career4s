import {
  GraduationCap,
  Stethoscope,
  Briefcase,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { Link } from "react-router-dom";
import { Footer } from "@/components/Footer";

const programs = [
  {
    title: "Online Engineering Programs",
    description:
      "Industry-aligned B.Tech & M.Tech programs with flexible schedules and future-ready curriculum.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1581091215367-59ab6b8b4c66?auto=format&fit=crop&w=1400&q=80",
    link: "/engineering",
  },
  {
    title: "Online Medical Programs",
    description:
      "Healthcare, paramedical & medical programs designed for modern professionals.",
    icon: Stethoscope,
    image:
      "https://images.unsplash.com/photo-1580281657521-6c1c8c3f3b32?auto=format&fit=crop&w=1400&q=80",
    link: "/medical",
  },
  {
    title: "Online Management Programs",
    description:
      "Online MBA, BBA & executive programs to accelerate leadership careers.",
    icon: Briefcase,
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
    link: "/management",
  },
  {
    title: "Online Postgraduate Programs",
    description:
      "UGC-approved MA, M.Com, M.Sc & PG programs with complete flexibility.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1400&q=80",
    link: "/postgraduation",
  },
];

const Programs = () => {
  return (
    <>
      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-orange-50 via-white to-orange-100 py-28">
        {/* Glow blobs */}
        <div className="absolute -top-40 -right-40 w-[420px] h-[420px] bg-orange-400/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 -left-40 w-[420px] h-[420px] bg-orange-300/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 text-center">
          <span className="inline-flex items-center gap-2 mb-6 px-6 py-2 text-sm font-semibold rounded-full bg-orange-100 text-orange-600">
            🎓 Explore Programs
          </span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            World-Class Online <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Degree Programs
            </span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from UGC-approved online programs across Engineering, Medical,
            Management & Postgraduate disciplines — built for flexibility,
            affordability, and career success.
          </p>
        </div>
      </section>

      {/* ================= PROGRAMS ================= */}
      <section className="relative bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {programs.map((program) => {
              const Icon = program.icon;

              return (
                <div
                  key={program.title}
                  className="group relative rounded-3xl overflow-hidden
                             bg-white/70 backdrop-blur-xl border border-white/60
                             shadow-xl transition-all duration-500
                             hover:-translate-y-2 hover:shadow-2xl"
                >
                  {/* IMAGE */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={program.image}
                      alt={program.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />

                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Floating icon */}
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

                  {/* Glow on hover */}
                  <div
                    className="pointer-events-none absolute inset-0 opacity-0
                               group-hover:opacity-100 transition duration-500
                               bg-gradient-to-br from-orange-400/10 via-transparent to-orange-500/10"
                  />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Programs;
