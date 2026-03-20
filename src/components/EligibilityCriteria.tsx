import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const criteria = [
  {
    program: "MBA",
    requirements: [
      "Bachelor's degree (any stream)",
      "Minimum 50% aggregate",
      "Valid CAT/MAT/CMAT/XAT score",
      "Work experience preferred (not mandatory)",
    ],
  },
  {
    program: "MCA",
    requirements: [
      "BCA / B.Sc (CS/IT) / B.Com (with Math)",
      "Minimum 50% aggregate",
      "Valid NIMCET / university entrance score",
      "Basic programming knowledge",
    ],
  },
  {
    program: "M.Tech",
    requirements: [
      "B.Tech / B.E. in relevant branch",
      "Minimum 55% aggregate",
      "Valid GATE score (for top colleges)",
      "Research aptitude preferred",
    ],
  },
];

const EligibilityCriteria = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
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
            Eligibility Criteria
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Am I <span className="text-orange-600">Eligible?</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore the eligibility requirements for top postgraduate programs
            in India and take the first step toward your career growth.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((c, i) => (
            <motion.div
              key={c.program}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group bg-white border border-orange-100 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Title */}
              <h3 className="text-2xl font-bold text-orange-600 mb-6 group-hover:scale-105 transition">
                {c.program}
              </h3>

              {/* List */}
              <ul className="space-y-4">
                {c.requirements.map((r) => (
                  <li
                    key={r}
                    className="flex items-start gap-3 text-gray-600 text-sm leading-relaxed"
                  >
                    <CheckCircle2 className="w-5 h-5 text-orange-500 shrink-0 mt-1" />
                    {r}
                  </li>
                ))}
              </ul>

              {/* Bottom line accent */}
              <div className="mt-6 h-1 w-0 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EligibilityCriteria;