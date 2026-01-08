import { Button } from "@/components/ui/button";
import { ArrowRight, Phone, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      {/* ================= BACKGROUND ================= */}

      {/* Saffron Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500 via-orange-600 to-orange-500" />

      {/* Image Texture Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-10" />

      {/* Dark Overlay for Contrast */}
      <div className="absolute inset-0 bg-black/20" />

      {/* ================= CONTENT ================= */}
      <div className="relative z-10 container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Journey to Success?
          </h2>

          <p className="text-lg md:text-xl text-white/90 mb-10 leading-relaxed">
            Take the first step towards your dream university today.
            Book a free consultation with our expert counselors and
            discover the perfect path for your academic future.
          </p>

          {/* ================= BUTTONS ================= */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button
              size="lg"
              className="bg-white text-orange-600 hover:bg-white/90 shadow-lg group"
            >
              Book Free Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white/10"
            >
              View Success Stories
            </Button>
          </div>

          {/* ================= CONTACT INFO ================= */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center text-white">
            <a
              href="tel:+911234567890"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Phone className="w-5 h-5" />
              <span>+91 123 456 7890</span>
            </a>

            <span className="hidden sm:block opacity-70">|</span>

            <a
              href="mailto:info@admissiondestiny.com"
              className="flex items-center gap-2 hover:opacity-80 transition-opacity"
            >
              <Mail className="w-5 h-5" />
              <span>info@admissiondestiny.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
