import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Free Counseling",
    desc: "Contact us for a free session to explore the best options for you.",
  },
  {
    num: "02",
    title: "Course Selection",
    desc: "Choose the right program based on your career goals.",
  },
  {
    num: "03",
    title: "Documentation",
    desc: "Submit required documents with our full guidance.",
  },
  {
    num: "04",
    title: "Application",
    desc: "We handle the complete application process for you.",
  },
  {
    num: "05",
    title: "Fee Payment",
    desc: "Secure and verified payment through official channels.",
  },
  {
    num: "06",
    title: "Enrollment",
    desc: "Get confirmation and start your learning journey.",
  },
];

const AdmissionProcessSectiondismid = () => (
  <section id="admissions" className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Admission Process
        </h2>
        <p className="text-gray-600 mt-3">
          Simple, transparent and hassle-free process in 6 steps.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.num}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.15 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="relative p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition"
          >
            {/* Big Number Background */}
            <span className="absolute top-3 right-4 text-6xl font-bold text-orange-100">
              {s.num}
            </span>

            {/* Step Circle */}
            <div className="w-12 h-12 rounded-full bg-orange-600 text-white flex items-center justify-center font-bold mb-4">
              {i + 1}
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {s.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600 leading-relaxed">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default AdmissionProcessSectiondismid;