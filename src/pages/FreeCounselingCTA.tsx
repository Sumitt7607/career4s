import { Phone, ArrowRight } from "lucide-react";

const FreeCounselingCTA = () => (
  <section className="py-12 bg-gradient-saffron relative overflow-hidden">
    <div className="absolute inset-0">
      <div className="absolute -left-10 top-0 w-40 h-40 bg-primary-foreground/10 rounded-full animate-bounce-gentle" />
      <div className="absolute right-10 bottom-0 w-32 h-32 bg-primary-foreground/10 rounded-full animate-float" />
    </div>
    <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
      <div className="text-primary-foreground text-center md:text-left">
        <h3 className="text-2xl md:text-3xl font-bold">📞 Get Free Counseling Now!</h3>
        <p className="text-primary-foreground/80 mt-1">Talk to our expert counselor and get instant guidance</p>
      </div>
      <div className="flex gap-4">
        <a href="tel:+919910992965" className="flex items-center gap-2 bg-primary-foreground text-primary px-8 py-3 rounded-full font-bold hover:shadow-lg transition-all hover:scale-105">
          <Phone className="w-5 h-5" /> Call Now
        </a>
        <a href="/contact" className="flex items-center gap-2 border-2 border-primary-foreground text-primary-foreground px-8 py-3 rounded-full font-bold hover:bg-primary-foreground/10 transition-all">
          Enquire <ArrowRight className="w-5 h-5" />
        </a>
      </div>
    </div>
  </section>
);

export default FreeCounselingCTA;
