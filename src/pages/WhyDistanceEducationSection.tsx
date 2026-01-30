import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
interface Reason {
  title: string;
  description: string;
}

const reasons: Reason[] = [
  {
    title: "Learn Anytime, Anywhere",
    description:
      "Study at your own pace without location or time restrictions.",
  },
  {
    title: "Work While You Study",
    description:
      "Perfect for working professionals who want career growth without quitting their job.",
  },
  {
    title: "Affordable Education",
    description:
      "Lower fees compared to regular programs with flexible payment options.",
  },
  {
    title: "UGC Approved Degrees",
    description:
      "Earn valid and recognized degrees accepted across India and abroad.",
  },
  {
    title: "Online Exams & Materials",
    description:
      "Access recorded lectures, digital study material, and online examinations.",
  },
  {
    title: "Career Advancement",
    description:
      "Upgrade your skills and qualifications to unlock better career opportunities.",
  },
];

const WhyDistanceEducationSection = () => {
  return (
    <>
    <section
      id="why-distance"
      className="relative py-32 bg-white overflow-hidden"
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-20 -left-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 -right-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="text-center mb-28"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-600 mb-6">
            Why Distance Education?
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto">
            Distance education gives you the freedom to learn, grow, and succeed
            without compromising your personal or professional commitments.
          </p>
        </motion.div>

        {/* FLOW */}
        <div className="space-y-20">
          {reasons.map((reason, index) => {
            const reverse = index % 2 !== 0;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: reverse ? 120 : -120 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: true }}
                className={`flex flex-col md:flex-row items-center gap-12 ${
                  reverse ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* TEXT CARD */}
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 140 }}
                  className="bg-white border-2 border-orange-200 rounded-3xl p-8 shadow-xl max-w-xl"
                >
                  <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">
                    {reason.title}
                  </h3>
                  <p className="text-lg text-gray-700">
                    {reason.description}
                  </p>
                </motion.div>

                {/* ARROW */}
                <motion.div
                  animate={{ x: [0, 10, 0] }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="text-orange-600"
                >
                  <ArrowRight size={48} />
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
    <Footer/>
    </>
  );
};

export default WhyDistanceEducationSection;
