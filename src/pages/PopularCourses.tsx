import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

const courses = [
  { name: "MBA", duration: "2 Years", fee: "₹30,000/Sem", popular: true },
  { name: "BBA", duration: "3 Years", fee: "₹15,000/Sem", popular: true },
  { name: "BCA", duration: "3 Years", fee: "₹12,000/Sem", popular: false },
  { name: "MCA", duration: "2 Years", fee: "₹25,000/Sem", popular: true },
  { name: "B.Com", duration: "3 Years", fee: "₹10,000/Sem", popular: false },
  { name: "M.Com", duration: "2 Years", fee: "₹15,000/Sem", popular: false },
  { name: "BA", duration: "3 Years", fee: "₹8,000/Sem", popular: false },
  { name: "MA", duration: "2 Years", fee: "₹12,000/Sem", popular: false },
];

const PopularCourses = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="courses"
      ref={ref}
      className="py-20 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 TOP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Courses
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Choose Your Course & <br />
            <span className="text-orange-500">Get Instant Admission</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Select the course that fits your career goals and get admission with expert guidance.
          </p>
        </motion.div>

        {/* 🔥 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {courses.map((c, i) => (
            <motion.div
              key={c.name}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              whileHover={{ scale: 1.05 }}
              className="relative bg-white rounded-2xl p-6 border border-gray-100 shadow-md hover:shadow-2xl transition-all duration-300 group"
            >
              {/* Popular Badge */}
              {c.popular && (
                <span className="absolute top-3 right-3 px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold shadow">
                  Popular
                </span>
              )}

              {/* Course Name */}
              <h3 className="text-2xl font-bold text-orange-500 mb-2">
                {c.name}
              </h3>

              {/* Details */}
              <p className="text-sm text-gray-600 mb-1">
                Duration: {c.duration}
              </p>
              <p className="text-sm font-semibold text-gray-800 mb-4">
                Fees: {c.fee}
              </p>

              {/* CTA */}
       
            </motion.div>
          ))}
        </div>



      </div>
    </section>
  );
};

export default PopularCourses;