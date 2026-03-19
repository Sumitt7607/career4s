import { motion } from "framer-motion";

const deadlines = [
  { exam: "CAT 2026", regStart: "Aug 2026", examDate: "29 Nov 2026(Expected)", resultDate: "Jan 2027", status: "Upcoming" },
  { exam: "XAT 2027", regStart: "July - Dec 2026", examDate: "3 Jan 2027(Expected)", resultDate: "Feb 2027", status: "Upcoming" },
  { exam: "CUET UG 2026", regStart: "Feb - March 2026", examDate: "May 2026", resultDate: "Jun - July 2026", status: "Open Now" },
  { exam: "IPMAT 2026(IIM Indore)", regStart: "feb - Mar 2026", examDate: "May 2026", resultDate: "Jun 2026", status: "Open Now" },
  { exam: "SNAP 2026", regStart: "Aug - Nov 2026", examDate: "Dec 2026(Multiple Slots)", resultDate: "Jan 2027", status: "Upcoming" },
  { exam: "NMAT 2026", regStart: "Aug - Oct 2026", examDate: "Oct-Dec 2026", resultDate: "Within 48 Hours", status: "Upcoming" },
  { exam: "SET 2026(Symbiosis)", regStart: "Dec2025 - April 2026 ", examDate: "May 2026", resultDate: "Jun 2026", status: "Open Now" },
  { exam: "GMAT", regStart: "Year-round", examDate: "On - Demand", resultDate: "Instant(Un-Official)", status: "Always Open" },
];

const containerVariant = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
    },
  },
};

const rowVariant = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4 },
  },
};

const DeadlinesSection = () => (
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
          Important Dates
        </p>

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
          Upcoming{" "}
          <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent">
            Exam Deadlines
          </span>
        </h2>

        <p className="text-gray-600 max-w-xl mx-auto">
          Never miss an important date — we track every deadline for you
        </p>
      </motion.div>

      {/* Table */}
      <div className="overflow-x-auto rounded-2xl border border-orange-100 shadow-xl">
        <table className="w-full min-w-[600px] text-sm">

          {/* Header */}
          <thead>
            <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
              <th className="text-left py-3 px-4 font-bold">Exam</th>
              <th className="text-center py-3 px-4 font-bold">Registration</th>
              <th className="text-center py-3 px-4 font-bold">Exam Date</th>
              <th className="text-center py-3 px-4 font-bold">Result</th>
              <th className="text-center py-3 px-4 font-bold">Status</th>
            </tr>
          </thead>

          {/* Body */}
          <motion.tbody
            variants={containerVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {deadlines.map((d, i) => (
              <motion.tr
                key={d.exam}
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
                  {d.exam}
                </td>

                <td className="py-3 px-4 text-center text-gray-600">
                  {d.regStart}
                </td>

                <td className="py-3 px-4 text-center text-gray-600">
                  {d.examDate}
                </td>

                <td className="py-3 px-4 text-center text-gray-600">
                  {d.resultDate}
                </td>

                <td className="py-3 px-4 text-center">
                  <span
                    className={`text-xs font-bold px-3 py-1 rounded-full ${
                      d.status === "Open Now" || d.status === "Always Open"
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {d.status}
                  </span>
                </td>
              </motion.tr>
            ))}
          </motion.tbody>

        </table>
      </div>

    </div>
  </section>
);

export default DeadlinesSection;