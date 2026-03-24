import { motion } from "framer-motion";
import { Clock, IndianRupee, BookOpen } from "lucide-react";

const courses = [
  {
    name: "B.Tech",
    duration: "4 Years",
    fee: "₹60,000 – ₹1,20,000 / Year",
    subjects: "CSE, Civil, Mechanical, ECE, AI/ML",
    desc: "Regular & lateral entry options available in AICTE-approved colleges.",
  },
  {
    name: "M.Tech",
    duration: "2 Years",
    fee: "₹70,000 – ₹1,50,000 / Year",
    subjects: "CSE, Structural, VLSI, Data Science",
    desc: "Best for graduates aiming for specialization & higher salary roles.",
  },
  {
    name: "Diploma in Engineering",
    duration: "3 Years",
    fee: "₹30,000 – ₹80,000 / Year",
    subjects: "Polytechnic (All major branches)",
    desc: "After 10th option with direct pathway to B.Tech (lateral entry).",
  },
  {
    name: "B.E.",
    duration: "4 Years",
    fee: "₹50,000 – ₹1,00,000 / Year",
    subjects: "Mechanical, Civil, IT, Electrical",
    desc: "Similar to B.Tech with focus on core engineering fundamentals.",
  },
  {
    name: "BCA",
    duration: "3 Years",
    fee: "₹40,000 – ₹90,000 / Year",
    subjects: "Programming, Web Dev, Data Structures",
    desc: "Ideal for students interested in software & IT field.",
  },
  {
    name: "MCA",
    duration: "2 Years",
    fee: "₹60,000 – ₹1,20,000 / Year",
    subjects: "Software Dev, AI, Cloud Computing",
    desc: "Advanced IT program for high-level tech careers.",
  },
  {
    name: "MBA (Tech)",
    duration: "2 Years",
    fee: "₹80,000 – ₹2,00,000 / Year",
    subjects: "IT Management, Business Analytics",
    desc: "Blend of management + technical leadership skills.",
  },
  {
    name: "B.Sc (IT)",
    duration: "3 Years",
    fee: "₹30,000 – ₹70,000 / Year",
    subjects: "Networking, DBMS, Cyber Security",
    desc: "Strong base for IT & data-related careers.",
  },
];

const CoursesSectiondis = () => {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <span className="text-orange-600 font-semibold text-sm uppercase tracking-widest">
            Our Programs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 text-gray-900">
            Engineering & Tech Courses
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Explore verified engineering and technology programs with transparent fees and flexible options.
          </p>
        </div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all"
            >
              {/* Accent Line */}
              <div className="h-1 w-full bg-orange-500 rounded-full mb-4" />

              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {c.name}
              </h3>

              <p className="text-sm text-gray-600 mb-4">
                {c.desc}
              </p>

              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-orange-600" />
                  {c.duration}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <IndianRupee className="w-4 h-4 text-orange-600" />
                  {c.fee}
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <BookOpen className="w-4 h-4 text-orange-600" />
                  {c.subjects}
                </div>
              </div>

            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSectiondis;  