import { motion } from "framer-motion";

const tableAnimation = {
  hidden: { opacity: 0, y: 40 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
};

const rows = [
  ["Flexibility", "✅ Study Anytime", "❌ Fixed Schedule"],
  ["Cost", "✅ Affordable", "❌ Expensive"],
  ["Location", "✅ From Home", "❌ Must Relocate"],
  ["Job + Study", "✅ Possible", "❌ Difficult"],
  ["Degree Value", "✅ UGC Approved", "✅ UGC Approved"],
  ["Placements", "✅ Available", "✅ Available"],
  ["Faculty", "✅ Industry Experts", "✅ Campus Faculty"],
];

const ComparisonSectioneduon = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
          Comparison
        </p>

        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
          Online vs <span className="text-primary">Offline</span> Education
        </h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Choose the best learning method based on flexibility, cost, and career goals.
        </p>
      </div>

      {/* Table */}
      <motion.div
        variants={tableAnimation}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="overflow-x-auto max-w-5xl mx-auto"
      >
        <table className="w-full rounded-3xl overflow-hidden backdrop-blur-lg bg-white/5 border border-white/10 shadow-2xl">

          {/* Header */}
          <thead>
            <tr className="bg-gradient-to-r from-primary to-purple-500 text-white">
              <th className="p-5 text-left text-base md:text-lg font-semibold">
                Feature
              </th>
              <th className="p-5 text-center text-base md:text-lg font-semibold">
                Online
              </th>
              <th className="p-5 text-center text-base md:text-lg font-semibold">
                Offline
              </th>
            </tr>
          </thead>

          {/* Body */}
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-white/10 hover:bg-white/10 transition-all duration-300"
              >
                <td className="p-5 font-semibold text-foreground text-sm md:text-base">
                  {row[0]}
                </td>

                <td className="p-5 text-center text-sm md:text-base">
                  {row[1]}
                </td>

                <td className="p-5 text-center text-sm md:text-base">
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

export default ComparisonSectioneduon;