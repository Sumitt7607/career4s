import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Calendar } from "lucide-react";

const timeline = [
  { month: "Jan-Mar", event: "January Batch Admissions", status: "Completed" },
  { month: "Apr-Jun", event: "April Batch Admissions", status: "Open Now 🔥" },
  { month: "Jul-Sep", event: "July Batch Admissions", status: "Coming Soon" },
  { month: "Oct-Dec", event: "October Batch Admissions", status: "Coming Soon" },
];

const AdmissionTimelineSectiononman = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Admission <span className="text-orange-500">Timeline</span>
        </h2>

        <p className="text-center text-gray-500 mb-12">
          Plan your admission with our intake schedule
        </p>

        {/* Timeline */}
        <div className="space-y-6">

          {timeline.map((t, i) => {
            const isOpen = t.status.includes("Open");

            return (
              <div
                key={i}
                className={`
                  flex items-center justify-between gap-4
                  p-6 rounded-2xl border transition-all duration-500
                  ${isOpen 
                    ? "border-orange-400 bg-orange-50 shadow-md" 
                    : "border-gray-200 bg-white"}
                  ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
                `}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                {/* Left */}
                <div className="flex items-center gap-4">

                  <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-orange-100">
                    <Calendar className="w-5 h-5 text-orange-500" />
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{t.month}</h3>
                    <p className="text-gray-500 text-sm">{t.event}</p>
                  </div>

                </div>

                {/* Status */}
                <span
                  className={`
                    text-sm font-semibold px-4 py-1.5 rounded-full
                    ${isOpen
                      ? "bg-gradient-to-r from-orange-500 to-orange-400 text-white"
                      : "bg-gray-100 text-gray-500"}
                  `}
                >
                  {t.status}
                </span>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default AdmissionTimelineSectiononman;