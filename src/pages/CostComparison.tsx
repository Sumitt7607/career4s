import { motion } from "framer-motion";

const costs = [
  { country: "🇺🇸 USA", tuition: "$30,000–$60,000/yr", living: "$15,000–$25,000/yr", total: "₹37–70 Lakh/yr" },
  { country: "🇬🇧 UK", tuition: "£20,000–£38,000/yr", living: "£12,000–£15,000/yr", total: "₹33–55 Lakh/yr" },
  { country: "🇨🇦 Canada", tuition: "C$20,000–$40,000/yr", living: "C$12,000–$18,000/yr", total: "₹20–38 Lakh/yr" },
  { country: "🇩🇪 Germany", tuition: "€0–€1,500/yr", living: "€10,000–$12,000/yr", total: "₹8–12 Lakh/yr" },
  { country: "🇦🇺 Australia", tuition: "A$30,000–$45,000/yr", living: "A$20,000–$25,000/yr", total: "₹27–38 Lakh/yr" },
  { country: "🇮🇪 Ireland", tuition: "€12,000–€25,000/yr", living: "€10,000–€14,000/yr", total: "₹18–32 Lakh/yr" },
];

export default function CostComparison() {
  return (
    <section className="py-16 bg-gradient-to-b from-orange-50 to-white">
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Budget Planning
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Cost Comparison by Country
          </h2>
        </motion.div>

        {/* Table */}
        <div className="overflow-x-auto rounded-xl shadow-lg border border-orange-100">
          <table className="w-full min-w-[600px] bg-white">

            {/* Head */}
            <thead className="bg-orange-500 text-white">
              <tr>
                <th className="text-left p-3 sm:p-4 text-sm">Country</th>
                <th className="text-left p-3 sm:p-4 text-sm">Tuition Fees</th>
                <th className="text-left p-3 sm:p-4 text-sm">Living Cost</th>
                <th className="text-left p-3 sm:p-4 text-sm">Total (INR)</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {costs.map((c, i) => (
                <motion.tr
                  key={c.country}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b last:border-none hover:bg-orange-50 transition"
                >
                  <td className="p-3 sm:p-4 font-semibold text-gray-800">
                    {c.country}
                  </td>
                  <td className="p-3 sm:p-4 text-gray-600 text-sm">
                    {c.tuition}
                  </td>
                  <td className="p-3 sm:p-4 text-gray-600 text-sm">
                    {c.living}
                  </td>
                  <td className="p-3 sm:p-4 font-semibold text-orange-600">
                    {c.total}
                  </td>
                </motion.tr>
              ))}
            </tbody>

          </table>
        </div>

      </div>
    </section>
  );
}