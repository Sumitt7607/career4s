import { ArrowRight } from "lucide-react";

const programs = [
  { title: "MBA (Full-Time)", duration: "1-2 Years", desc: "The gold standard of management education. Transform your career with a full-time MBA from top global schools.", schools: "Harvard, Wharton, INSEAD, LBS" },
  { title: "Executive MBA", duration: "18-24 Months", desc: "For experienced professionals. Advance your career without leaving your job with weekend/modular formats.", schools: "Kellogg, Columbia, IE, IESE" },
  { title: "MIM (Masters in Management)", duration: "1-2 Years", desc: "Perfect for fresh graduates looking to kickstart their management career with a specialized master's degree.", schools: "HEC Paris, St Gallen, LSE, ESCP" },
  { title: "MS Management", duration: "1-2 Years", desc: "Specialized management programs focusing on analytics, strategy, operations, or entrepreneurship.", schools: "MIT Sloan, Duke, Michigan Ross" },
  { title: "MBA in Finance", duration: "1-2 Years", desc: "Specialized MBA with focus on corporate finance, investment banking, and financial management.", schools: "NYU Stern, Chicago Booth, LBS" },
  { title: "MBA in Marketing", duration: "1-2 Years", desc: "Build expertise in brand management, digital marketing, and consumer behavior at top schools.", schools: "Kellogg, Columbia, INSEAD" },
];

const ProgramsSectionabroaman = () => {
  return (
    <section id="programs" className="py-16 bg-white">
      <div className="container mx-auto px-4">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Management <span className="text-orange-500">Programs</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We guide students across all major management programs and specializations at the world's finest institutions.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((p, i) => (
            <div
              key={i}
              className="bg-white border border-orange-100 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:border-orange-400 transition-all duration-300 flex flex-col"
            >
              {/* Duration Badge */}
              <div className="mb-4">
                <span className="bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {p.duration}
                </span>
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {p.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-gray-600 mb-4 flex-1">
                {p.desc}
              </p>

              {/* Schools */}
              <div className="text-xs text-gray-500 mb-4">
                <span className="font-semibold text-gray-800">
                  Top Schools:
                </span>{" "}
                {p.schools}
              </div>

              {/* CTA */}
          
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProgramsSectionabroaman;