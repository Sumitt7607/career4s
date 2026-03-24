import { motion } from "framer-motion";
import {
  CalendarDays,
  PenLine,
  MessageCircle,
  Timer,
  CheckCircle,
} from "lucide-react";
import { type LucideIcon } from "lucide-react";

const items: { label: string; icon: LucideIcon }[] = [
  { label: "Weekend Classes", icon: CalendarDays },
  { label: "Flexible Exams", icon: PenLine },
  { label: "24/7 Online Support", icon: MessageCircle },
  { label: "Fast Track Completion", icon: Timer },
];

const WorkingProfessionalsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
              For Professionals
            </span>

            <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
              Designed for Working Professionals
            </h2>

            <p className="text-gray-600 mt-4 mb-6">
              Upgrade your qualification without leaving your job. Our flexible
              distance programs are built for professionals who want career growth
              alongside their work.
            </p>

            {/* Features */}
            <div className="grid grid-cols-2 gap-5">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white border border-orange-100 rounded-2xl p-5 text-center shadow-sm hover:shadow-md transition"
                >
                  <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center mx-auto mb-2">
                    <item.icon className="w-5 h-5 text-orange-600" />
                  </div>
                  <p className="text-sm font-semibold text-gray-800">
                    {item.label}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-orange-50 rounded-3xl p-8 border border-orange-100"
          >
            <h3 className="text-xl font-bold text-gray-900 mb-5">
              Who Should Apply?
            </h3>

            <div className="space-y-4">
              {[
                "Working professionals looking to upgrade their degree",
                "Entrepreneurs seeking technical knowledge",
                "Homemakers planning career restart",
                "Defence personnel & government employees",
                "Students unable to attend regular college",
                "IT professionals without formal qualification",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-orange-600 mt-1 shrink-0" />
                  <span className="text-sm text-gray-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default WorkingProfessionalsSection;