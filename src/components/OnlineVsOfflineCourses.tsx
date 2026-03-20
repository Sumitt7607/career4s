import { motion } from "framer-motion";
import { Monitor, Wifi, CheckCircle2, XCircle } from "lucide-react";

const comparison = [
  { feature: "Campus Experience", online: false, offline: true },
  { feature: "Flexible Schedule", online: true, offline: false },
  { feature: "Lower Fees", online: true, offline: false },
  { feature: "Networking Opportunities", online: false, offline: true },
  { feature: "Self-Paced Learning", online: true, offline: false },
  { feature: "Placement Support", online: true, offline: true },
  { feature: "Lab & Practicals", online: false, offline: true },
  { feature: "Work While Studying", online: true, offline: false },
];

const OnlineVsOfflineCourses = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-white via-orange-50 to-white">
      <div className="max-w-5xl mx-auto px-4 md:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <p className="text-orange-600 font-semibold text-sm uppercase tracking-widest mb-3">
            Online vs Offline
          </p>

          <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Which Mode is <span className="text-orange-600">Right for You?</span>
          </h2>

          <p className="text-gray-600 max-w-xl mx-auto text-sm md:text-lg">
            Compare key features of online and offline courses to choose what fits your lifestyle and career goals.
          </p>
        </motion.div>

        {/* Mobile Hint */}
        <p className="text-xs text-gray-400 mb-3 text-center md:hidden">
          👉 Swipe left/right to compare
        </p>

        {/* Table */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="overflow-x-auto"
        >
          <div className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">

            <table className="min-w-[500px] w-full text-left">

              {/* Header */}
              <thead>
                <tr className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                  <th className="p-4 text-xs md:text-sm font-semibold">Feature</th>

                  <th className="p-4 text-xs md:text-sm font-semibold text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Wifi className="w-4 h-4" /> Online
                    </div>
                  </th>

                  <th className="p-4 text-xs md:text-sm font-semibold text-center">
                    <div className="flex items-center justify-center gap-1">
                      <Monitor className="w-4 h-4" /> Offline
                    </div>
                  </th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {comparison.map((c, i) => (
                  <tr
                    key={c.feature}
                    className={`transition hover:bg-orange-50 ${
                      i % 2 === 0 ? "bg-white" : "bg-orange-50/40"
                    }`}
                  >
                    {/* Feature */}
                    <td className="p-4 text-sm md:text-base font-medium text-gray-900">
                      {c.feature}
                    </td>

                    {/* Online */}
                    <td className="p-4 text-center">
                      {c.online ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>

                    {/* Offline */}
                    <td className="p-4 text-center">
                      {c.offline ? (
                        <CheckCircle2 className="w-5 h-5 text-green-500 mx-auto" />
                      ) : (
                        <XCircle className="w-5 h-5 text-gray-300 mx-auto" />
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>

            </table>

          </div>
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-10">
          <button className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-md">
            Get Free Counseling
          </button>
        </div>

      </div>
    </section>
  );
};

export default OnlineVsOfflineCourses;