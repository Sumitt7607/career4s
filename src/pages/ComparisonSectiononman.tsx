import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle, X } from "lucide-react";

const rows = [
  { feature: "Flexibility", online: true, regular: false },
  { feature: "Lower Fees", online: true, regular: false },
  { feature: "Work While Studying", online: true, regular: false },
  { feature: "UGC Recognized", online: true, regular: true },
  { feature: "Same Degree Value", online: true, regular: true },
  { feature: "Campus Experience", online: false, regular: true },
  { feature: "Self-Paced Learning", online: true, regular: false },
];

const ComparisonSectiononman = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Online vs <span className="text-orange-500">Regular</span>
        </h2>

        <p className="text-center text-gray-500 mb-12">
          See why online education is the smarter choice
        </p>

        {/* Table */}
        <div
          className={`
            bg-white rounded-2xl overflow-hidden border border-gray-200 shadow-sm
            transition-all duration-500
            ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
          `}
        >

          {/* Header */}
          <div className="grid grid-cols-3 bg-gradient-to-r from-orange-500 to-orange-400 text-white font-semibold p-4 text-center">
            <div>Feature</div>
            <div>Online</div>
            <div>Regular</div>
          </div>

          {/* Rows */}
          {rows.map((r, i) => (
            <div
              key={i}
              className="grid grid-cols-3 items-center p-4 text-center border-t border-gray-200 hover:bg-orange-50 transition-all duration-300"
            >
              {/* Feature */}
              <div className="text-left font-medium text-sm">
                {r.feature}
              </div>

              {/* Online */}
              <div>
                {r.online ? (
                  <CheckCircle className="w-5 h-5 text-orange-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                )}
              </div>

              {/* Regular */}
              <div>
                {r.regular ? (
                  <CheckCircle className="w-5 h-5 text-orange-500 mx-auto" />
                ) : (
                  <X className="w-5 h-5 text-gray-400 mx-auto" />
                )}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ComparisonSectiononman;