import { motion } from "framer-motion";
import {
  Shield,
  Clock,
  Users,
  BookMarked,
  Headphones,
  Award,
  CheckCircle,
  Wallet,
} from "lucide-react";

const reasons = [
  {
    icon: Shield,
    title: "UGC-DEB Approved",
    desc: "All our partner universities are recognized and verified.",
  },
  {
    icon: Clock,
    title: "Flexible Learning",
    desc: "Study anytime, anywhere with flexible schedules.",
  },
  {
    icon: Users,
    title: "Expert Counselors",
    desc: "Get guidance from experienced admission experts.",
  },
  {
    icon: BookMarked,
    title: "Multiple Courses",
    desc: "Choose from a wide range of medical programs.",
  },
  {
    icon: Headphones,
    title: "Full Support",
    desc: "We assist you at every step of admission.",
  },
  {
    icon: Award,
    title: "Trusted Consultancy",
    desc: "Thousands of students successfully guided.",
  },
  {
    icon: CheckCircle,
    title: "Transparent Process",
    desc: "No hidden charges, 100% clarity.",
  },
  {
    icon: Wallet,
    title: "Affordable Fees",
    desc: "Budget-friendly options with easy plans.",
  },
];

const WhyChooseUsSectiondismed = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
          Why Choose Us?
        </h2>
        <p className="text-gray-600 mt-3">
          Here's what makes us different from others.
        </p>
      </div>

      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((r, i) => (
          <motion.div
            key={r.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05 }}
            className="text-center p-6 rounded-2xl bg-orange-50 border border-orange-100 hover:shadow-lg transition"
          >
            {/* Icon */}
            <div className="w-14 h-14 rounded-full bg-orange-100 flex items-center justify-center mx-auto mb-4">
              <r.icon className="h-7 w-7 text-orange-600" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2 text-gray-800">
              {r.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-gray-600">
              {r.desc}
            </p>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

export default WhyChooseUsSectiondismed;