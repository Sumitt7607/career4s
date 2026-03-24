import { motion } from "framer-motion";
import { CheckSquare } from "lucide-react";

const documents = [
  "10th Marksheet & Passing Certificate",
  "12th Marksheet & Passing Certificate",
  "Graduation Marksheet (For PG Courses)",
  "Degree / Provisional Certificate",
  "Aadhar Card (Front & Back)",
  "Passport Size Photographs (4–6 Copies)",
  "Migration Certificate (If Required)",
  "Transfer Certificate (TC)",
  "Caste / Category Certificate (If Applicable)",
  "Work Experience Certificate (For PG / MBA)",
];

const DocumentsRequiredSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Checklist
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Documents Required for Admission
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Keep these documents ready to ensure a quick and hassle-free admission process.
          </p>
        </div>

        {/* Checklist */}
        <div className="grid sm:grid-cols-2 gap-5">
          {documents.map((doc, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-3 bg-white border border-orange-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-all"
            >
              <CheckSquare className="w-5 h-5 text-orange-600 shrink-0" />
              <span className="text-sm md:text-base text-gray-700 font-medium">
                {doc}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default DocumentsRequiredSection;