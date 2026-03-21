import { motion } from "framer-motion";
import { MapPin, Utensils, Bus, Wifi } from "lucide-react";

const tips = [
  { icon: MapPin, title: "Finding Accommodation", desc: "University dorms, shared apartments, or homestays — we guide you through options, budgets, and lease agreements." },
  { icon: Utensils, title: "Food & Lifestyle", desc: "Indian grocery stores, student meal plans, and budget-friendly cooking tips for every destination country." },
  { icon: Bus, title: "Transport & Commute", desc: "Student transport passes, cycling culture, and public transit guides for your university city." },
  { icon: Wifi, title: "Banking & SIM", desc: "Setting up student bank accounts, mobile plans, and essential services before you arrive." },
];

export default function LivingAbroad() {
  return (
    <section className="py-16 bg-white">
      <div className="px-4 sm:px-8 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-sm font-semibold text-orange-600 uppercase tracking-wider mb-2">
            Life Abroad
          </p>
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-800">
            Living Abroad Guide
          </h2>
        </motion.div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tips.map((t, i) => (
            <motion.div
              key={t.title}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15 }}
              whileHover={{ scale: 1.05 }}
              className="p-6 rounded-2xl border border-orange-100 bg-gradient-to-b from-orange-50 to-white shadow-sm hover:shadow-lg transition-all text-center"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
                <t.icon className="w-7 h-7 text-orange-600" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-800 text-lg">
                {t.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                {t.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}