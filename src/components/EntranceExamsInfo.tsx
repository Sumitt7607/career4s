import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const exams = [
  { name: "CAT", full: "Common Admission Test", for: "MBA / PGDM", by: "IIMs", month: "November" },
  { name: "MAT", full: "Management Aptitude Test", for: "MBA", by: "AIMA", month: "Feb/May/Sep/Dec" },
  { name: "GATE", full: "Graduate Aptitude Test", for: "M.Tech / PSU Jobs", by: "IITs/IISc", month: "February" },
  { name: "CMAT", full: "Common Management Admission Test", for: "MBA", by: "NTA", month: "March" },
  { name: "XAT", full: "Xavier Aptitude Test", for: "MBA", by: "XLRI", month: "January" },
  { name: "NIMCET", full: "NIT MCA Common Entrance", for: "MCA", by: "NITs", month: "June" },
];

const EntranceExamsInfo = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Entrance Exams
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Key <span className="text-orange-600">Entrance Exams</span> for PG
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Discover the most important entrance exams you need to crack
            for top postgraduate programs in India.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {exams.map((e, i) => (
            <motion.div
              key={e.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className="group bg-white border border-orange-100 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Top */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md group-hover:scale-110 transition">
                  <BookOpen className="w-6 h-6" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    {e.name}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {e.full}
                  </p>
                </div>
              </div>

              {/* Info */}
              <div className="space-y-2 text-sm text-gray-600">
                <p>
                  <span className="font-semibold text-gray-900">For:</span>{" "}
                  {e.for}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Conducted by:</span>{" "}
                  {e.by}
                </p>
                <p>
                  <span className="font-semibold text-gray-900">Exam Month:</span>{" "}
                  {e.month}
                </p>
              </div>

              {/* Bottom Accent */}
              <div className="mt-5 h-1 w-0 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EntranceExamsInfo;