import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ShieldCheck } from "lucide-react";

const accreditations = [
  "UGC-DEB Approved",
  "NAAC Accredited",
  "AICTE Recognized",
  "WES Approved",
  "NIRF Ranked",
  "AIU Member"
];

const Accreditations = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-20 bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500"
    >
      <div className="container mx-auto px-4">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <span className="text-sm font-bold text-white/80 uppercase tracking-wider">
            Accreditations
          </span>

          <h2 className="text-4xl font-heading font-bold text-white mt-3">
            Only Recognized & Approved Universities
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-wrap justify-center gap-6">
          {accreditations.map((a, i) => (
            <div
              key={i}
              className={`flex items-center gap-3 px-6 py-4 rounded-xl 
              bg-white/10 backdrop-blur-md border border-white/20 
              text-white shadow-lg hover:scale-105 transition-all duration-300 
              animate-on-scroll-scale ${isVisible ? "visible" : ""}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <ShieldCheck className="w-6 h-6 text-white" />
              <span className="font-semibold">{a}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Accreditations;