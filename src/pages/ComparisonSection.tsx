import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

const ComparisonSection = () => (
  <section className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          MBBS India vs <span className="text-orange-600">MBBS Abroad</span>
        </h2>

        <p className="text-lg text-gray-600 mb-14">
          A clear comparison to help students choose the best medical career path.
        </p>
      </motion.div>

      <div className="overflow-x-auto">
        <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden max-w-5xl mx-auto">

          {/* HEADER */}
          <thead>
            <tr className="bg-orange-600 text-white text-lg">
              <th className="p-6 font-semibold text-left">Parameter</th>
              <th className="p-6 text-center font-semibold">India (Private)</th>
              <th className="p-6 text-center font-semibold">Abroad</th>
            </tr>
          </thead>

          {/* BODY */}
          <tbody className="text-lg">
            {[
              ["Total Fees", "₹50L - 1.5 Cr", "₹12L - 35L"],
              ["Donation / Capitation", true, false],
              ["Entrance Exam", "NEET (High Cutoff)", "NEET (Qualify Only)"],
              ["Medium of Instruction", "English", "English"],
              ["Global Recognition", false, true],
              ["Clinical Exposure", "Limited", "Extensive"],
              ["International Exposure", false, true],
              ["Admission Difficulty", "Very High", "Moderate"],
            ].map((row, i) => (
              <tr
                key={i}
                className={`border-b ${
                  i % 2 === 0 ? "bg-white" : "bg-orange-50"
                }`}
              >
                <td className="p-6 font-semibold text-gray-800">{row[0]}</td>

                <td className="p-6 text-center">
                  {typeof row[1] === "boolean" ? (
                    row[1] ? (
                      <Check className="mx-auto text-red-500" size={26} />
                    ) : (
                      <X className="mx-auto text-green-600" size={26} />
                    )
                  ) : (
                    <span className="text-gray-600">{row[1]}</span>
                  )}
                </td>

                <td className="p-6 text-center font-semibold text-orange-600">
                  {typeof row[2] === "boolean" ? (
                    row[2] ? (
                      <Check className="mx-auto text-green-600" size={26} />
                    ) : (
                      <X className="mx-auto text-red-500" size={26} />
                    )
                  ) : (
                    row[2]
                  )}
                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>
    </div>
  </section>
);

export default ComparisonSection;