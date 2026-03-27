import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const fees = [
  { program: "MBBS (Distance)", annual: "₹1,50,000 - ₹3,00,000", total: "₹8,00,000 - ₹16,00,000" },
  { program: "BDS (Dental)", annual: "₹1,00,000 - ₹2,50,000", total: "₹5,00,000 - ₹12,00,000" },
  { program: "BAMS / BHMS / BUMS", annual: "₹80,000 - ₹1,50,000", total: "₹4,00,000 - ₹8,00,000" },
  { program: "B.Sc Nursing", annual: "₹50,000 - ₹1,00,000", total: "₹2,00,000 - ₹4,00,000" },
  { program: "B.Pharm / D.Pharm", annual: "₹40,000 - ₹80,000", total: "₹1,60,000 - ₹3,20,000" },
  { program: "BPT / BMLT", annual: "₹45,000 - ₹90,000", total: "₹1,80,000 - ₹3,60,000" },
  { program: "MD / MS / PG", annual: "₹2,00,000 - ₹5,00,000", total: "₹6,00,000 - ₹15,00,000" },
  { program: "MBA Hospital Mgmt", annual: "₹60,000 - ₹1,20,000", total: "₹1,20,000 - ₹2,40,000" },
];

const FeeStructureSectionmedis = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Fee Structure
        </h2>
        <p className="text-gray-600 mt-3">
          Transparent & affordable fee structure with EMI options.
        </p>
      </div>

      {/* Table */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="overflow-x-auto max-w-5xl mx-auto rounded-2xl shadow-lg border border-orange-100"
      >
        <table className="w-full">
          <thead>
            <tr className="bg-orange-600 text-white">
              <th className="text-left p-4 font-semibold">Program</th>
              <th className="text-left p-4 font-semibold">Annual Fee</th>
              <th className="text-left p-4 font-semibold">Total Fee</th>
            </tr>
          </thead>

          <tbody>
            {fees.map((f, i) => (
              <tr
                key={f.program}
                className={`${
                  i % 2 === 0 ? "bg-orange-50" : "bg-white"
                } hover:bg-orange-100 transition`}
              >
                <td className="p-4 font-medium text-gray-800">
                  {f.program}
                </td>
                <td className="p-4 text-gray-600">{f.annual}</td>
                <td className="p-4 text-gray-600">{f.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.div>

      {/* CTA Button */}
      <div className="text-center mt-10">
        <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-xl shadow-md">
          Download Fee Brochure
        </Button>
      </div>

    </div>
  </section>
);

export default FeeStructureSectionmedis;