import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const criteria = [
  {
    program: "B.Tech / B.E.",
    eligibility: "10+2 with Physics, Chemistry & Mathematics (Minimum 50%)",
    docs: "10th & 12th Marksheet, Aadhar Card, Passport Size Photo",
  },
  {
    program: "M.Tech",
    eligibility: "B.Tech / B.E. in relevant field (Minimum 55%)",
    docs: "Graduation Marksheet, Degree Certificate, ID Proof",
  },
  {
    program: "Diploma in Engineering",
    eligibility: "10th Pass (Minimum 45%)",
    docs: "10th Marksheet, Aadhar Card, Photo",
  },
  {
    program: "BCA",
    eligibility: "10+2 (Any Stream, Maths preferred)",
    docs: "10th, 12th Marksheet, ID Proof",
  },
  {
    program: "MCA",
    eligibility: "BCA / B.Sc IT / Graduation with Maths",
    docs: "Graduation Marksheet, Degree Certificate",
  },
  {
    program: "MBA (Tech)",
    eligibility: "Graduation in any discipline (Minimum 50%)",
    docs: "Degree Certificate, ID Proof, Resume (if required)",
  },
];

const EligibilitySectiondis = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Eligibility Criteria for Admission
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Check the minimum eligibility and required documents before applying for your preferred course.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {criteria.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-orange-100 rounded-3xl p-7 shadow-md hover:shadow-xl transition-all"
            >
              {/* Top Accent */}
              <div className="h-1 w-full bg-orange-500 rounded-full mb-5" />

              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {c.program}
              </h3>

              <div className="space-y-4">
                {/* Eligibility */}
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Eligibility
                    </p>
                    <p className="text-sm text-gray-600">
                      {c.eligibility}
                    </p>
                  </div>
                </div>

                {/* Documents */}
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900">
                      Required Documents
                    </p>
                    <p className="text-sm text-gray-600">
                      {c.docs}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EligibilitySectiondis;