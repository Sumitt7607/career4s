import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const criteria = [
  {
    level: "Undergraduate (B.Tech/BS)",
    items: [
      "12th grade with 60%+ in PCM/PCB",
      "SAT/ACT scores (for US)",
      "IELTS 6.0+ / TOEFL 80+",
      "Extracurricular activities",
      "Strong personal statement",
    ],
  },
  {
    level: "Postgraduate (MS/MEng)",
    items: [
      "B.Tech/BE with 65%+ or 7.0+ CGPA",
      "GRE 310+ (quantitative focus)",
      "IELTS 6.5+ / TOEFL 90+",
      "Research papers (preferred)",
      "Relevant internship/work experience",
    ],
  },
  {
    level: "Doctoral (PhD)",
    items: [
      "Master's degree in relevant field",
      "Strong research publications",
      "GRE 315+ (recommended)",
      "IELTS 7.0+ / TOEFL 100+",
      "Clear research proposal",
      "Professor connect (LoI)",
    ],
  },
];

export default function Eligibilityabroad() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-orange-50">
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Requirements
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Eligibility Criteria
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {criteria.map((c, i) => (
            <motion.div
              key={c.level}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.04 }}
              className="p-6 sm:p-8 rounded-2xl border border-orange-100 bg-white shadow-sm hover:shadow-xl transition-all"
            >
              {/* Title */}
              <h3 className="font-bold text-lg text-gray-800 mb-5">
                {c.level}
              </h3>

              {/* List */}
              <ul className="space-y-3">
                {c.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-gray-600"
                  >
                    <CheckCircle className="w-4 h-4 text-orange-500 mt-1 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}