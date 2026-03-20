import { motion } from "framer-motion";
import { Globe, IndianRupee, GraduationCap, CheckCircle2 } from "lucide-react";

const StudyAbroadComparison = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-6xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            India vs Abroad
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-5">
            Study in <span className="text-orange-600">India</span> vs Abroad
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
            Compare the benefits, costs, and opportunities to choose the best path for your postgraduate journey.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* India Card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-500 to-orange-600 flex items-center justify-center text-white shadow-md">
                <GraduationCap className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Study in India
              </h3>
            </div>

            {/* Points */}
            <ul className="space-y-4 text-gray-600 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <IndianRupee className="w-5 h-5 text-orange-500 mt-1" />
                Average cost: ₹2L – ₹20L total
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                No visa hassles or international expenses
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                Strong domestic placement network
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                Close to family & support system
              </li>
            </ul>

            {/* Bottom Accent */}
            <div className="mt-6 h-1 w-0 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
          </motion.div>

          {/* Abroad Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white border border-orange-100 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300"
          >
            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-r from-orange-400 to-orange-500 flex items-center justify-center text-white shadow-md">
                <Globe className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">
                Study Abroad
              </h3>
            </div>

            {/* Points */}
            <ul className="space-y-4 text-gray-600 text-sm md:text-base">
              <li className="flex items-start gap-3">
                <IndianRupee className="w-5 h-5 text-orange-500 mt-1" />
                Average cost: ₹15L – ₹60L+ total
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                Global exposure & networking
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                Better international career opportunities
              </li>

              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-green-500 mt-1" />
                Higher ROI in some industries
              </li>
            </ul>

            {/* Bottom Accent */}
            <div className="mt-6 h-1 w-0 bg-orange-500 rounded-full group-hover:w-full transition-all duration-500"></div>
          </motion.div>

        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md">
            Get Free Counseling
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default StudyAbroadComparison;