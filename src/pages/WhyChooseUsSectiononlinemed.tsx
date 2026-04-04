import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Shield, Clock, IndianRupee, ThumbsUp, Zap, Globe } from "lucide-react";

const reasons = [
  { icon: Shield, title: "UGC Approved", desc: "All universities are UGC/DEB approved" },
  { icon: Clock, title: "Quick Process", desc: "Get admitted within 48 hours" },
  { icon: IndianRupee, title: "Lowest Fees", desc: "Best price guarantee on all programs" },
  { icon: ThumbsUp, title: "100% Genuine", desc: "No hidden charges or fake promises" },
  { icon: Zap, title: "Instant Support", desc: "24/7 support via call, chat, and email" },
  { icon: Globe, title: "Pan India", desc: "Serving students across all states" },
];

const WhyChooseUsSectiononlinemed = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold mb-3">
          Why <span className="text-orange-500">Choose Us</span>
        </h2>

        <p className="text-gray-500 mb-14">
          Trusted by 50,000+ students across India
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {reasons.map((r, i) => (
            <div
              key={i}
              className={`
                p-8 rounded-2xl text-center
                transition-all duration-500
                hover:bg-[#e9dccf] hover:shadow-md hover:scale-105
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon */}
              <r.icon className="w-12 h-12 mx-auto mb-4 text-orange-500 transition-transform duration-300 group-hover:scale-110" />

              {/* Title */}
              <h3 className="font-bold text-lg mb-2">
                {r.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-500 text-sm">
                {r.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSectiononlinemed;