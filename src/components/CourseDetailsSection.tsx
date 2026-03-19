import { motion } from "framer-motion";
import { BookOpen, Calculator, Code, Briefcase, TrendingUp, Award } from "lucide-react";

const courses = [
  {
    icon: BookOpen,
    title: "BBA",
    subtitle: "Bachelor of Business Administration",
    desc: "The foundation of business education. Learn management principles, marketing, finance, and HR.",
    careers: "Management Trainee, Business Analyst, Marketing Executive, HR Associate",
    avgSalary: "₹4-8 LPA",
    topExams: "CUET, IPMAT, SET, NPAT, Christ Entrance",
  },
  {
    icon: Code,
    title: "BCA",
    subtitle: "Bachelor of Computer Applications",
    desc: "Combine technology with management. Master programming, databases, and IT management.",
    careers: "Software Developer, System Analyst, Web Developer, IT Consultant",
    avgSalary: "₹3-10 LPA",
    topExams: "CUET, IPU CET, AIMA UGAT, University Entrance",
  },
  {
    icon: Calculator,
    title: "B.Com",
    subtitle: "Bachelor of Commerce",
    desc: "Deep dive into accounting, taxation, finance, and business law for a strong commerce career.",
    careers: "Accountant, Auditor, Financial Analyst, Tax Consultant, CA/CS",
    avgSalary: "₹3-7 LPA",
    topExams: "CUET, DU JAT, College-Level Entrance",
  },
  {
    icon: Briefcase,
    title: "MBA",
    subtitle: "Master of Business Administration",
    desc: "The gold standard of management education.",
    careers: "Consultant, Product Manager, Investment Banker, Brand Manager",
    avgSalary: "₹8-30 LPA",
    topExams: "CAT, GMAT, XAT, SNAP, NMAT, CMAT",
  },
  {
    icon: TrendingUp,
    title: "PGDM",
    subtitle: "Post Graduate Diploma in Management",
    desc: "Industry-focused alternative to MBA.",
    careers: "Strategy Consultant, Operations Manager, Business Development",
    avgSalary: "₹8-25 LPA",
    topExams: "CAT, XAT, GMAT, CMAT, MAT",
  },
  {
    icon: Award,
    title: "Executive MBA",
    subtitle: "For Working Professionals",
    desc: "Fast-track leadership program.",
    careers: "Senior Manager, Director, VP, CXO Level Roles",
    avgSalary: "₹20-50 LPA",
    topExams: "GMAT, GRE, Institute-Specific Tests",
  },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const CourseDetailsSection = () => (
  <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-3">
          Course Deep Dive
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Understand Each{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Program
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Detailed breakdown of eligibility, career scope, salary, and top entrance exams
        </p>
      </div>

      {/* Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        animate="show"
        className="space-y-8"
      >
        {courses.map((c) => (
          <motion.div
            key={c.title}
            variants={cardVariant}
            whileHover={{
              scale: 1.02,
              boxShadow: "0px 10px 30px rgba(255,115,0,0.2)",
            }}
            className="bg-white border border-orange-100 rounded-2xl p-6 md:p-8 grid md:grid-cols-[auto_1fr] gap-6 items-start transition-all duration-300"
          >
            {/* Icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-orange-600 flex items-center justify-center shadow-md">
              <c.icon className="w-8 h-8 text-white" />
            </div>

            {/* Content */}
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-2">
                <h3 className="text-2xl font-bold text-gray-900">
                  {c.title}
                </h3>
                <span className="text-sm text-gray-500">
                  — {c.subtitle}
                </span>
              </div>

              <p className="text-gray-600 text-sm mb-4">
                {c.desc}
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                  <p className="text-xs font-bold text-orange-600 mb-1">
                    Career Options
                  </p>
                  <p className="text-xs text-gray-700">{c.careers}</p>
                </div>

                <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                  <p className="text-xs font-bold text-orange-600 mb-1">
                    Avg Salary
                  </p>
                  <p className="text-lg font-bold text-orange-700">
                    {c.avgSalary}
                  </p>
                </div>

                <div className="bg-orange-50 rounded-xl p-3 border border-orange-100">
                  <p className="text-xs font-bold text-orange-600 mb-1">
                    Top Exams
                  </p>
                  <p className="text-xs text-gray-700">{c.topExams}</p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default CourseDetailsSection;