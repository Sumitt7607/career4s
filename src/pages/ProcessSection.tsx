import { motion } from "framer-motion";

const steps = [
  { step: "01", title: "Free Consultation", desc: "Share your academic background, interests and aspirations with our counsellor." },
  { step: "02", title: "Profile Analysis", desc: "We evaluate your profile, scores, and preferences to shortlist ideal colleges." },
  { step: "03", title: "College Shortlisting", desc: "Receive a curated list of best-fit colleges with detailed comparisons." },
  { step: "04", title: "Application Filing", desc: "We handle form filling, document preparation, and timely submissions." },
  { step: "05", title: "Entrance & Interview Prep", desc: "Mock tests, GD practice, and interview coaching for selected colleges." },
  { step: "06", title: "Admission Confirmed", desc: "Seat confirmation, fee guidance, and hostel arrangement support." },
];

const ProcessSection = () => (
  <section id="process" className="py-20 bg-white">
    <div className="container mx-auto px-4">
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-sm font-semibold text-[#FF9933] uppercase tracking-widest">
          How It Works
        </span>

        <h2 className="text-3xl md:text-5xl font-display font-bold text-gray-900 mt-3">
          Our <span className="text-[#FF9933]">Admission Process</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((s, i) => (
          <motion.div
            key={s.step}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative bg-orange-50 rounded-xl p-6 border border-orange-100 hover:shadow-lg transition"
          >
            
            {/* Big step number */}
            <span className="text-5xl font-display font-bold text-[#FF9933]/10 absolute top-4 right-4">
              {s.step}
            </span>

            {/* Circle badge */}
            <div className="w-10 h-10 rounded-full bg-[#FF9933] flex items-center justify-center text-white font-bold text-sm mb-4">
              {s.step}
            </div>

            <h3 className="font-display font-bold text-lg text-gray-900 mb-2">
              {s.title}
            </h3>

            <p className="text-sm text-gray-600">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProcessSection;