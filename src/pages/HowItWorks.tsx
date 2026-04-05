import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { PhoneCall, ClipboardList, FileCheck, PartyPopper } from "lucide-react";

const steps = [
  { icon: PhoneCall, title: "Free Consultation", desc: "Connect with our expert counselor for a free session" },
  { icon: ClipboardList, title: "Course & University Selection", desc: "We help you pick the best match for your career" },
  { icon: FileCheck, title: "Application & Documentation", desc: "We handle the entire paperwork and application" },
  { icon: PartyPopper, title: "Admission Confirmed!", desc: "Get your admission letter and start your journey" },
];

const HowItWorks = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 bg-gradient-to-b from-orange-50 to-white"
    >
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-bold text-orange-500 uppercase tracking-wider">
            How It Works
          </span>

          <h2 className="text-4xl md:text-5xl font-heading font-bold text-gray-900 mt-3">
            4 Simple Steps to Your Dream Degree
          </h2>
        </div>

        {/* Steps */}
        <div className="grid md:grid-cols-4 gap-10 relative">

          {/* Line */}
          <div className="hidden md:block absolute top-16 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-orange-400 via-orange-500 to-amber-500" />

          {steps.map((s, i) => (
            <div
              key={i}
              className={`relative text-center transition-all duration-500 animate-on-scroll ${
                isVisible ? "visible" : ""
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >

              {/* Icon Circle */}
              <div className="w-16 h-16 mx-auto rounded-full 
              bg-gradient-to-r from-orange-500 to-amber-500 
              flex items-center justify-center mb-6 
              shadow-lg hover:scale-110 transition-all duration-300 
              ring-4 ring-white">

                <s.icon className="w-8 h-8 text-white" />
              </div>

              {/* Step Number */}
              <div className="text-sm font-bold text-orange-500 mb-2">
                Step {i + 1}
              </div>

              {/* Title */}
              <h3 className="text-lg font-heading font-bold text-gray-900 mb-2">
                {s.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600">
                {s.desc}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;