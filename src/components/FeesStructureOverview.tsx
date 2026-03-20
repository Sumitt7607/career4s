import { motion } from "framer-motion";
import { IndianRupee } from "lucide-react";

const fees = [
  { program: "MBA", govt: "₹50K – ₹2L/year", private: "₹2L – ₹10L/year", premium: "₹10L – ₹25L/year" },
  { program: "MCA", govt: "₹30K – ₹1L/year", private: "₹1L – ₹4L/year", premium: "₹4L – ₹8L/year" },
  { program: "M.Tech", govt: "₹40K – ₹1.5L/year", private: "₹1.5L – ₹6L/year", premium: "₹6L – ₹12L/year" },
  { program: "M.Com", govt: "₹15K – ₹50K/year", private: "₹50K – ₹2L/year", premium: "₹2L – ₹4L/year" },
];

const FeesStructureOverview = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Fee Structure
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 md:mb-5">
            Transparent <span className="text-orange-600">Fee Comparison</span>
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Compare fee ranges across government, private, and premium institutions
            to plan your postgraduate journey wisely.
          </p>
        </motion.div>

        {/* Mobile Hint */}
        <p className="text-xs text-gray-400 mb-3 text-center md:hidden">
          👉 Swipe left/right to view full table
        </p>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto scrollbar-thin scrollbar-thumb-orange-400 scrollbar-track-orange-100"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">

            <table className="min-w-[650px] w-full text-left">
              
              {/* Head */}
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <th className="p-4 md:p-5 text-xs md:text-sm font-semibold">Program</th>
                  <th className="p-4 md:p-5 text-xs md:text-sm font-semibold">Government</th>
                  <th className="p-4 md:p-5 text-xs md:text-sm font-semibold">Private</th>
                  <th className="p-4 md:p-5 text-xs md:text-sm font-semibold">Premium</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {fees.map((f, i) => (
                  <tr
                    key={f.program}
                    className={`transition hover:bg-orange-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-orange-50/40"
                    }`}
                  >
                    <td className="p-4 md:p-5 font-bold text-gray-900 flex items-center gap-2 text-sm md:text-base">
                      <IndianRupee className="w-4 h-4 text-orange-500" />
                      {f.program}
                    </td>

                    <td className="p-4 md:p-5 text-xs md:text-sm text-gray-600">
                      {f.govt}
                    </td>

                    <td className="p-4 md:p-5 text-xs md:text-sm text-gray-600">
                      {f.private}
                    </td>

                    <td className="p-4 md:p-5 text-xs md:text-sm text-gray-600 font-semibold">
                      {f.premium}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default FeesStructureOverview;   