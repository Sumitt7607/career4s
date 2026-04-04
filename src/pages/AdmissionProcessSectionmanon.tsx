import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const steps = [
  { step: "01", title: "Contact Us", desc: "Call or fill the form for free counseling" },
  { step: "02", title: "Choose Course", desc: "Select your preferred course & university" },
  { step: "03", title: "Submit Documents", desc: "Upload your documents for verification" },
  { step: "04", title: "Get Admitted", desc: "Receive your admission confirmation" },
];

const AdmissionProcessSectionmanon = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref}
      className="py-24 text-white"
      style={{
        background: "linear-gradient(90deg, #ff4d0d, #ff8a3d)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Admission Process
        </h2>

        <p className="text-white/80 mb-16">
          Simple 4-step admission process
        </p>

        {/* Steps */}
        <div className="relative grid grid-cols-1 md:grid-cols-4 gap-10">

          {/* Line */}
          <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-[2px] bg-white/30"></div>

          {steps.map((s, i) => (
            <div
              key={i}
              className={`
                relative text-center transition-all duration-500
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {/* Circle */}
              <div className="w-24 h-24 mx-auto rounded-full flex items-center justify-center text-3xl font-bold mb-5
                border-2 border-white/40
                bg-white/10 backdrop-blur-md
                hover:scale-110 transition-all duration-500">
                {s.step}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-2">
                {s.title}
              </h3>

              {/* Desc */}
              <p className="text-white/80 text-sm max-w-[200px] mx-auto">
                {s.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default AdmissionProcessSectionmanon;