import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";
import {
  Clock,
  Laptop,
  IndianRupee,
  Globe,
  Award,
  Users,
} from "lucide-react";

/* ================= TYPES ================= */

interface Feature {
  icon: ReactNode;
  title: string;
  description: string;
}

/* ================= DATA ================= */

const features: Feature[] = [
  {
    icon: <Clock className="h-10 w-10 text-orange-600" />,
    title: "Flexible Schedule",
    description:
      "Learn at your own pace with flexible schedules designed for working professionals.",
  },
  {
    icon: <Laptop className="h-10 w-10 text-orange-600" />,
    title: "Study From Anywhere",
    description:
      "Attend classes, access materials, and submit exams from anywhere in the world.",
  },
  {
    icon: <IndianRupee className="h-10 w-10 text-orange-600" />,
    title: "Affordable Fees",
    description:
      "Distance education programs are cost-effective compared to regular courses.",
  },
  {
    icon: <Globe className="h-10 w-10 text-orange-600" />,
    title: "UGC-DEB Approved",
    description:
      "All programs are approved and recognized across India and abroad.",
  },
  {
    icon: <Award className="h-10 w-10 text-orange-600" />,
    title: "Career-Focused Programs",
    description:
      "Industry-relevant curriculum that improves employability and growth.",
  },
  {
    icon: <Users className="h-10 w-10 text-orange-600" />,
    title: "Expert Academic Support",
    description:
      "Guidance and mentoring from experienced faculty and counselors.",
  },
];

/* ================= VARIANTS ================= */

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

const FeaturesSection = () => {
  return (
    <section className="py-20 bg-background overflow-hidden">
      <div className="container">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Why Choose Distance Learning?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Transform your career without putting your life on hold. Distance
            education offers flexibility, affordability, and recognition.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.03 }}
              className="group relative rounded-2xl border bg-card p-8 transition-all hover:shadow-xl hover:border-orange-500/30"
            >
              <div className="mb-4">{feature.icon}</div>

              <h3 className="mb-3 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="text-muted-foreground">
                {feature.description}
              </p>

              <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-orange-500/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesSection;
