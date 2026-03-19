import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const programs = [
  { title: "BBA", fullName: "Bachelor of Business Administration", schools: "Christ University, NMIMS, Symbiosis, IPU, St. Xavier's", duration: "3 Years", tag: "After 12th", eligibility: "10+2 with 50%+" },
  { title: "BCA", fullName: "Bachelor of Computer Applications", schools: "Christ University, Symbiosis, IPU, Amity, Chandigarh Univ", duration: "3 Years", tag: "Tech + Mgmt", eligibility: "10+2 with Maths" },
  { title: "B.Com", fullName: "Bachelor of Commerce", schools: "SRCC, St. Stephen's, Loyola, Christ, Hindu College", duration: "3 Years", tag: "Commerce", eligibility: "10+2 Commerce" },
  { title: "B.Com (Hons)", fullName: "B.Com Honours", schools: "SRCC, LSR, Hindu College, St. Xavier's, Presidency", duration: "3 Years", tag: "Advanced", eligibility: "10+2 Commerce 60%+" },
  { title: "MBA", fullName: "Master of Business Administration", schools: "IIMs, ISB, XLRI, FMS, MDI, SP Jain", duration: "2 Years", tag: "Most Popular", eligibility: "Graduation + CAT/GMAT" },
  { title: "PGDM", fullName: "Post Graduate Diploma in Management", schools: "IIMs, XLRI, MDI, IMT, FORE, Great Lakes", duration: "2 Years", tag: "Industry Focus", eligibility: "Graduation + Entrance" },
//   { title: "Executive MBA", fullName: "Executive MBA for Working Professionals", schools: "ISB, IIM-A, IIM-B, IIM-C, XLRI", duration: "1 Year", tag: "Working Pros", eligibility: "5+ Years Experience" },
  { title: "MIM", fullName: "Masters in Management", schools: "HEC Paris, LBS, St. Gallen, ESSEC", duration: "1-2 Years", tag: "Global", eligibility: "Graduation + GMAT" },
  { title: "Integrated MBA", fullName: "5-Year Integrated MBA", schools: "IIM Indore, IIM Ranchi, IIFT, NMIMS, Symbiosis", duration: "5 Years", tag: "After 12th", eligibility: "10+2 with 60%+" },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const ProgramsSectionIn = () => (
  <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-3">
          Programs We Cover
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Every Management{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Program
          </span>{" "}
          Under One Roof
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          From BBA after 12th to Executive MBA — we guide you through every management course in India & abroad
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={containerVariant}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {programs.map((p) => (
          <motion.div
            key={p.title}
            variants={cardVariant}
            whileHover={{
              scale: 1.05,
              boxShadow: "0px 10px 30px rgba(255,115,0,0.2)",
            }}
            className="bg-white rounded-2xl border border-orange-100 p-5 shadow-sm hover:shadow-xl transition-all group cursor-pointer relative overflow-hidden h-full"
          >
            {/* Tag */}
            {/* <span className="absolute top-3 right-3 text-xs font-bold bg-orange-500 text-white px-2 py-1 rounded-full">
              {p.tag}
            </span> */}

            {/* Title */}
            <h3 className="font-extrabold text-2xl text-orange-600 mb-1">
              {p.title}
            </h3>

            <p className="text-xs text-gray-500 mb-3">
              {p.fullName}
            </p>

            <p className="text-xs text-gray-600 mb-1">
              <span className="font-semibold text-gray-800">Top Colleges:</span> {p.schools}
            </p>

            <p className="text-xs text-gray-600 mb-1">
              <span className="font-semibold text-gray-800">Duration:</span> {p.duration}
            </p>

            <p className="text-xs text-gray-600 mb-3">
              <span className="font-semibold text-gray-800">Eligibility:</span> {p.eligibility}
            </p>
{/* 
            <div className="flex items-center gap-1 text-orange-600 font-semibold text-sm group-hover:gap-2 transition-all">
              Get Guidance <ArrowRight className="w-4 h-4" />
            </div> */}
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ProgramsSectionIn;