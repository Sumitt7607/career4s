import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Wifi, Clock, IndianRupee, MapPin, Monitor, Award } from "lucide-react";

const benefits = [
  { icon: Wifi, title: "Study Anywhere", desc: "Learn from the comfort of your home" },
  { icon: Clock, title: "Flexible Schedule", desc: "Study at your own pace and time" },
  { icon: IndianRupee, title: "Affordable Fees", desc: "Much cheaper than regular courses" },
  { icon: MapPin, title: "No Relocation", desc: "No need to move to another city" },
  { icon: Monitor, title: "Digital Learning", desc: "Access world-class digital content" },
  { icon: Award, title: "Same Degree Value", desc: "UGC recognized, equal to regular degree" },
];

const OnlineBenefitsSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Benefits of <span className="text-orange-500">Online Education</span>
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Why thousands of students are choosing online learning
        </p>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-10">

          {benefits.map((b, i) => (
            <div
              key={i}
              className={`
                group flex gap-4 items-start p-5 rounded-xl
                transition-all duration-300
                hover:bg-orange-50 hover:shadow-md hover:-translate-y-1
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Icon Box */}
              <div className="w-12 h-12 flex items-center justify-center rounded-lg bg-orange-100 
                transition-all duration-300 group-hover:scale-110">
                <b.icon className="w-6 h-6 text-orange-500" />
              </div>

              {/* Content */}
              <div>
                <h3 className="font-bold text-lg mb-1 group-hover:text-orange-500 transition-colors">
                  {b.title}
                </h3>
                <p className="text-gray-500 text-sm">
                  {b.desc}
                </p>
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OnlineBenefitsSection;