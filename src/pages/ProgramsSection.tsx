import { motion } from "framer-motion";

const programs = [
  { name: "MBA / PGDM", fields: "Marketing, Finance, HR, Operations, IT, International Business" },
  { name: "M.Tech / ME", fields: "Computer Science, Mechanical, Civil, Electronics, AI/ML" },
  { name: "MCA", fields: "Software Development, Data Science, Cybersecurity" },
  { name: "M.Sc", fields: "Physics, Chemistry, Mathematics, Biotechnology, Data Science" },
  { name: "MA", fields: "Economics, Psychology, English, Political Science, Sociology" },
  { name: "M.Com", fields: "Accounting, Finance, Taxation, Banking" },
  { name: "LLM", fields: "Corporate Law, Criminal Law, Constitutional Law" },
  { name: "M.Pharm", fields: "Pharmaceutics, Pharmacology, Pharmaceutical Chemistry" },
  { name: "M.Ed", fields: "Education Management, Curriculum Development" },
  { name: "MFA", fields: "Fine Arts, Applied Arts, Visual Communication" },
  { name: "M.Des", fields: "Industrial Design, UX/UI Design, Fashion Design" },
  { name: "MPH", fields: "Public Health, Epidemiology, Health Management" },
];

const ProgramsSection = () => (
  <section id="programs" className="py-28 bg-gradient-to-b from-orange-50 via-white to-orange-100">
    
    <div className="container mx-auto px-6">
      
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-20"
      >
        <span className="text-sm font-semibold text-orange-500 uppercase tracking-[3px]">
          Programs
        </span>

        <h2 className="text-4xl md:text-6xl font-extrabold mt-4 leading-tight">
          PG Programs{" "}
          <span className="bg-gradient-to-r from-orange-500 to-yellow-400 text-transparent bg-clip-text">
            We Cover
          </span>
        </h2>

        <p className="text-gray-500 mt-4 text-lg max-w-2xl mx-auto">
          Explore a wide range of postgraduate programs designed to shape your future with top-tier career opportunities.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {programs.map((p, i) => (
          
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            
            className="relative group p-[2px] rounded-2xl bg-gradient-to-r from-orange-400 via-orange-500 to-yellow-400 hover:scale-105 transition-all duration-300"
          >
            
            <div className="bg-white rounded-2xl p-6 h-full shadow-lg group-hover:shadow-2xl transition-all duration-300">
              
              {/* Title */}
              <h3 className="text-xl font-bold text-orange-600 mb-3">
                {p.name}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[3px] bg-gradient-to-r from-orange-400 to-yellow-400 mb-4 rounded-full"></div>

              {/* Fields */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {p.fields}
              </p>

            </div>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default ProgramsSection;