import { motion } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";

const CTABanner = () => (
  <section className="py-28 bg-gradient-to-r from-orange-500 to-orange-600 text-white">
    <div className="max-w-6xl mx-auto px-4 text-center">

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* TITLE */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Ready to Start Your{" "}
          <span className="text-white">Medical Journey?</span>
        </h2>

        {/* DESCRIPTION */}
        <p className="text-lg md:text-xl text-orange-100 mb-10 max-w-3xl mx-auto">
          Admissions for <strong>MBBS 2026 intake</strong> are now open.  
          Book your free counselling session today and take the first step
          towards becoming a doctor.
        </p>

        {/* BUTTONS */}
        <div className="flex flex-wrap justify-center gap-5">

          <a
            href="/contact"
            className="flex items-center gap-2 bg-white text-orange-600 px-8 py-4 rounded-xl font-semibold text-lg shadow-lg hover:scale-105 transition"
          >
            Book Free Counselling
            <ArrowRight size={20} />
          </a>

          <a
            href="tel:+919910904008"
            className="flex items-center gap-2 border-2 border-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-orange-600 transition"
          >
            <Phone size={18} />
            Call Now
          </a>

        </div>
      </motion.div>

    </div>
  </section>
);

export default CTABanner;