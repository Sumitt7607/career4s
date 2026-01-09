import { motion } from "framer-motion";
import { Footer } from "@/components/Footer";

interface CourseDomain {
  title: string;
  image: string;
  branches: string[];
  description: string;
}

const courseDomains: CourseDomain[] = [
  {
    title: "Engineering",
    image: "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    description:
      "Industry-oriented engineering programs designed for future technologies and core technical expertise.",
    branches: [
      "Computer Science Engineering",
      "Mechanical Engineering",
      "Civil Engineering",
      "Electrical Engineering",
      "Electronics & Communication",
      "Artificial Intelligence",
      "Data Science",
    ],
  },
  {
    title: "Medical & Healthcare",
    image: "https://images.unsplash.com/photo-1580281657527-47b9b43c76c9",
    description:
      "Healthcare programs focused on hospital administration, diagnostics, and public health systems.",
    branches: [
      "Healthcare Administration",
      "Medical Laboratory Technology",
      "Hospital Management",
      "Public Health",
      "Health Informatics",
    ],
  },
  {
    title: "Management",
    image: "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    description:
      "Management programs that build leadership, strategic thinking, and business decision-making skills.",
    branches: [
      "MBA Marketing",
      "MBA Finance",
      "MBA HR",
      "MBA Operations",
      "MBA IT",
      "Business Analytics",
    ],
  },
  {
    title: "Post Graduation",
    image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    description:
      "Advanced postgraduate programs to deepen specialization and accelerate career growth.",
    branches: ["M.Tech", "MBA", "MCA", "M.Com", "MA"],
  },
];

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  show: { y: 0, opacity: 1 },
};

const CoursesSection = () => {
  return (
    <>
      <section id="courses" className="relative py-32 bg-white overflow-hidden">
        
        {/* BACKGROUND GLOW */}
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-orange-200/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -left-40 w-[500px] h-[500px] bg-orange-300/20 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4">
          
          {/* HEADING */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
            className="text-center mb-32"
          >
            <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-orange-600 to-orange-400 bg-clip-text text-transparent mb-6">
              Courses We Offer
            </h2>
            <p className="text-xl text-gray-700 max-w-4xl mx-auto">
              Discover flexible, future-ready UG & PG programs crafted for
              ambitious learners and working professionals.
            </p>
          </motion.div>

          {/* ZIG-ZAG */}
          <div className="space-y-36">
            {courseDomains.map((domain, index) => {
              const reverse = index % 2 !== 0;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className={`grid md:grid-cols-2 gap-16 items-center`}
                >
                  {/* TEXT */}
                  <motion.div
                    variants={container}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className={reverse ? "md:order-2" : ""}
                  >
                    <motion.h3
                      variants={item}
                      className="text-4xl font-bold text-orange-600 mb-6"
                    >
                      {domain.title}
                    </motion.h3>

                    <motion.p
                      variants={item}
                      className="text-lg text-gray-700 mb-8"
                    >
                      {domain.description}
                    </motion.p>

                    <motion.ul
                      variants={container}
                      className="space-y-4 text-lg"
                    >
                      {domain.branches.map((branch, i) => (
                        <motion.li
                          key={i}
                          variants={item}
                          className="flex items-center gap-3 text-gray-800"
                        >
                          <span className="text-orange-600 text-2xl">➤</span>
                          {branch}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </motion.div>

                  {/* IMAGE */}
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    whileHover={{ scale: 1.06, rotate: 0.5 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className={`rounded-[2.5rem] overflow-hidden shadow-2xl border border-orange-200 ${
                      reverse ? "md:order-1" : ""
                    }`}
                  >
                    <img
                      src={domain.image}
                      alt={domain.title}
                      className="w-full h-[360px] object-cover"
                    />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default CoursesSection;
