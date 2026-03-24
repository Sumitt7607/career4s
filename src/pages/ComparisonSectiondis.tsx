import { motion } from "framer-motion";

const data = [
  ["Annual Fees", "₹40K – ₹1.2L", "₹1.5L – ₹5L"],
  ["Work While Study", "✔ Possible", "✖ Difficult"],
  ["Flexibility", "✔ High (Self-Paced)", "✖ Fixed Schedule"],
  ["Recognition", "✔ Approved Universities", "✔ Approved Universities"],
  ["Study Mode", "Online + Study Material", "Classroom Only"],
  ["Attendance", "No Strict Requirement", "Mandatory 75%+"],
  ["Location", "Study from Anywhere", "College Campus Required"],
  ["Best For", "Working Students", "Full-Time Students"],
];

const ComparisonSectiondis = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Distance vs Regular Engineering
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Compare both options and choose what fits your career goals best.
          </p>
        </div>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto overflow-x-auto"
        >
          <table className="w-full border border-orange-100 rounded-2xl overflow-hidden shadow-sm">
            
            {/* Head */}
            <thead>
              <tr className="bg-orange-500 text-white">
                <th className="p-4 text-left font-semibold">Feature</th>
                <th className="p-4 text-center font-semibold">Distance</th>
                <th className="p-4 text-center font-semibold">Regular</th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, i) => (
                <tr
                  key={i}
                  className={`${
                    i % 2 === 0 ? "bg-orange-50" : "bg-white"
                  } hover:bg-orange-100 transition`}
                >
                  <td className="p-4 text-sm font-semibold text-gray-900">
                    {row[0]}
                  </td>

                  <td className="p-4 text-sm text-center text-green-600 font-semibold">
                    {row[1]}
                  </td>

                  <td className="p-4 text-sm text-center text-gray-600">
                    {row[2]}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </motion.div>

      </div>
    </section>
  );
};

export default ComparisonSectiondis;