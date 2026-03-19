import { motion } from "framer-motion";

const comparisons = [
  { aspect: "Duration", bba: "3 Years", bca: "3 Years", bcom: "3 Years", mba: "2 Years", pgdm: "2 Years" },
  { aspect: "Eligibility", bba: "10+2 Any Stream", bca: "10+2 with Maths", bcom: "10+2 Commerce", mba: "Graduation", pgdm: "Graduation" },
  { aspect: "Avg Fees", bba: "₹2-8L Total", bca: "₹1-6L Total", bcom: "₹15K-3L Total", mba: "₹5-25L Total", pgdm: "₹8-25L Total" },
  { aspect: "Avg Salary", bba: "₹4-8 LPA", bca: "₹3-10 LPA", bcom: "₹3-7 LPA", mba: "₹8-30 LPA", pgdm: "₹8-25 LPA" },
  { aspect: "Top Exam", bba: "CUET/IPMAT", bca: "CUET/IPU CET", bcom: "CUET/DU", mba: "CAT/GMAT", pgdm: "CAT/XAT" },
  { aspect: "Career Focus", bba: "General Mgmt", bca: "IT + Mgmt", bcom: "Finance/Acct", mba: "Leadership", pgdm: "Industry" },
  { aspect: "Higher Studies", bba: "MBA/PGDM", bca: "MCA/MBA", bcom: "M.Com/MBA/CA", mba: "PhD/DBA", pgdm: "PhD/CXO" },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const ComparisonSectionin = () => (
  <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-orange-600 font-bold text-sm tracking-widest uppercase mb-3">
          Course Comparison
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          BBA vs BCA vs B.Com vs{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            MBA vs PGDM
          </span>
        </h2>

        <p className="text-gray-600 max-w-2xl mx-auto">
          Side-by-side comparison to help you choose the right program
        </p>
      </motion.div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl shadow-xl border border-orange-100">
        <table className="w-full min-w-[700px] text-sm">

          {/* Header */}
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <th className="text-left py-4 px-4 font-bold">Aspect</th>
              {["BBA", "BCA", "B.Com", "MBA", "PGDM"].map((h) => (
                <th key={h} className="text-center py-4 px-3 font-bold">
                  {h}
                </th>
              ))}
            </tr>
          </thead>

          {/* Body */}
          <motion.tbody
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {comparisons.map((row, i) => (
              <motion.tr
                key={row.aspect}
                variants={rowVariant}
                whileHover={{
                  scale: 1.01,
                  backgroundColor: "#fff7ed",
                }}
                className={`border-b border-orange-100 ${
                  i % 2 === 0 ? "bg-white" : "bg-orange-50"
                }`}
              >
                <td className="py-3 px-4 font-semibold text-gray-800">
                  {row.aspect}
                </td>

                <td className="py-3 px-3 text-center text-gray-600">{row.bba}</td>
                <td className="py-3 px-3 text-center text-gray-600">{row.bca}</td>
                <td className="py-3 px-3 text-center text-gray-600">{row.bcom}</td>
                <td className="py-3 px-3 text-center text-gray-600 font-semibold text-orange-600">{row.mba}</td>
                <td className="py-3 px-3 text-center text-gray-600">{row.pgdm}</td>
              </motion.tr>
            ))}
          </motion.tbody>
        </table>
      </div>

    </div>
  </section>
);

export default ComparisonSectionin;