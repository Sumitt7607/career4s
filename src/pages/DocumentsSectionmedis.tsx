import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const docs = [
  "10th Marksheet & Certificate",
  "12th Marksheet & Certificate",
  "Graduation Marksheets (for PG)",
  "NEET Score Card (if applicable)",
  "Transfer Certificate",
  "Migration Certificate",
  "Character Certificate",
  "Passport Size Photographs (6 copies)",
  "Aadhar Card / ID Proof",
  "Caste Certificate (if applicable)",
  "Income Certificate (for scholarship)",
  "Medical Fitness Certificate",
];

const DocumentsSectionmedis = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Documents Required
        </h2>
        <p className="text-gray-600 mt-3">
          Keep these documents ready for a smooth admission process.
        </p>
      </div>

      {/* Documents Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 max-w-5xl mx-auto">
        {docs.map((d, i) => (
          <motion.div
            key={d}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.04 }}
            className="flex items-center gap-3 bg-orange-50 border border-orange-100 rounded-xl p-4 hover:shadow-md transition"
          >
            {/* Icon */}
            <div className="w-10 h-10 rounded-lg bg-orange-100 flex items-center justify-center">
              <FileText className="h-5 w-5 text-orange-600" />
            </div>

            {/* Text */}
            <span className="text-sm font-medium text-gray-700">
              {d}
            </span>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default DocumentsSectionmedis;