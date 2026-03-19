import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import patternBg from "@/assets/pattern-bg.png";

const StickyWhatsApp = () => (
  <a
    href="https://wa.me/919999999999"
    target="_blank"
    rel="noopener"
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 flex items-center justify-center shadow-2xl hover:scale-110 transition-transform"
  >
    <span className="text-2xl">💬</span>
  </a>
);

const CTABanner = () => (
  <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 relative overflow-hidden">
    
    {/* Background Pattern */}
    <img
      src={patternBg}
      alt=""
      className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none"
    />

    <div className="container mx-auto px-4 relative z-10">

      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center text-white"
      >
        <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
          Confused About Which Course to Choose?
        </h2>

        <p className="text-white/90 text-lg max-w-2xl mx-auto mb-8">
          BBA, BCA, B.Com, MBA or PGDM — let our experts help you pick the perfect program.
          Book your FREE 30-minute counseling session today!
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4">

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-white text-orange-600 font-bold text-lg px-10 py-6 shadow-2xl hover:bg-gray-100">
              Book Free Counseling
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a href="https://wa.me/919999999999" target="_blank" rel="noopener">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white/10 font-semibold text-lg px-10 py-6"
              >
                💬 Chat on WhatsApp
              </Button>
            </a>
          </motion.div>

        </div>
      </motion.div>

    </div>
  </section>
);

export { StickyWhatsApp };
export default CTABanner;