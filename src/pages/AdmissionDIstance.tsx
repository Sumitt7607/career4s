import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { NavLink } from "react-router-dom";
import Career4SLogo from "@/components/Career4SLogo";
import MobileNavbar from "@/components/MobileNavbar";
import {
  ArrowRight,
  BookOpen,
  Users,
  Award,
  Clock,
  GraduationCap,
  Briefcase,
  Stethoscope,
} from "lucide-react";
import { motion } from "framer-motion";

const domains = [
  {
    name: "Engineering",
    path: "/distance/engineering",
    icon: GraduationCap,
    description: "B.Tech, M.Tech & Technical Programs",
  },
  {
    name: "Management",
    path: "/distance/management",
    icon: Briefcase,
    description: "MBA, BBA, PGDM & Business Studies",
  },
  {
    name: "Medical",
    path: "/distance/medical",
    icon: Stethoscope,
    description: "Healthcare & Allied Programs",
  },
  {
    name: "Post Graduation",
    path: "/distance/PostGraduation",
    icon: BookOpen,
    description: "MA, MSc, MCom & PG Degrees",
  },
];

const fadeSoft = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};



const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Universities", path: "/universities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-orange-600">
          <Career4SLogo />
             </Link>
{/* 
        <div className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-700 hover:text-orange-600 transition"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div> */}

        <Link
          to="/contact"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition shadow"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};






const AdmissionDistance = () => {
  return (
    <>
        <Navbar />  
      {/* ================= HERO ================= */}
      {/* ================= HERO ================= */}
<section className="relative overflow-hidden bg-white py-24 border-b">
  {/* Subtle moving background */}
  <motion.div
    aria-hidden
    className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-orange-400/10 blur-3xl"
    animate={{ x: [0, 60, 0], y: [0, 40, 0] }}
    transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
  />

  <motion.div
    aria-hidden
    className="absolute top-1/2 -right-40 h-[500px] w-[500px] rounded-full bg-orange-300/10 blur-3xl"
    animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
    transition={{ duration: 36, repeat: Infinity, ease: "linear" }}
  />

  <motion.div
    aria-hidden
    className="absolute bottom-0 left-1/3 h-[360px] w-[360px] rounded-full bg-neutral-400/10 blur-3xl"
    animate={{ y: [0, -40, 0] }}
    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
  />

  {/* Content */}
  <div className="container relative text-center max-w-4xl">
    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeSoft}
      transition={{ duration: 0.4 }}
      className="mb-5 inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm text-muted-foreground bg-white/70 backdrop-blur"
    >
      <Award className="h-4 w-4 text-orange-600" />
      UGC-DEB Approved Distance Universities
    </motion.div>

    <motion.h1
      initial="hidden"
      animate="visible"
      variants={fadeSoft}
      transition={{ delay: 0.1 }}
      className="text-4xl sm:text-5xl font-bold text-foreground mb-6"
    >
      Distance Education Admissions
      <span className="block text-orange-600 mt-2">
        2026 Open Now
      </span>
    </motion.h1>

    <motion.p
      initial="hidden"
      animate="visible"
      variants={fadeSoft}
      transition={{ delay: 0.2 }}
      className="text-lg text-muted-foreground mb-10"
    >
      Enroll in India’s top UGC-approved distance learning universities.
      Flexible schedules, affordable fees, and industry-recognized degrees.
    </motion.p>

    <motion.div
      initial="hidden"
      animate="visible"
      variants={fadeSoft}
      transition={{ delay: 0.3 }}
      className="flex justify-center gap-8 mb-12 text-sm text-muted-foreground"
    >
      <div className="flex items-center gap-2">
        <BookOpen className="h-5 w-5 text-orange-600" />
        1000+ Courses
      </div>
      <div className="flex items-center gap-2">
        <Users className="h-5 w-5 text-orange-600" />
        2M+ Learners
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-orange-600" />
        Flexible Learning
      </div>
    </motion.div>

  </div>
</section>

      {/* ================= DOMAIN SECTION ================= */}
      <section className="bg-muted/30 py-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeSoft}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl font-semibold text-foreground">
              Choose Your Study Domain
            </h2>
            <p className="mt-4 text-muted-foreground">
              Select a discipline to explore available universities and programs.
            </p>
          </motion.div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {domains.map((domain, i) => {
              const Icon = domain.icon;
              return (
                <motion.div
                  key={domain.name}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeSoft}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={domain.path}
                    className="block h-full rounded-xl border bg-white p-6 hover:border-orange-600 hover:shadow-md transition"
                  >
                    <Icon className="h-8 w-8 text-orange-600 mb-4" />

                    <h3 className="text-lg font-semibold mb-2">
                      {domain.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-6">
                      {domain.description}
                    </p>

                    <span className="inline-flex items-center text-sm font-medium text-orange-600">
                      View Colleges
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
        <Footer />
    </>
  );
};

export default AdmissionDistance;
