import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, FileText, Phone, BookOpen, Award, Headphones } from "lucide-react";

const services = [
  { icon: GraduationCap, title: "Admission Guidance", desc: "Complete guidance for online/distance education admissions in top universities" },
  { icon: FileText, title: "Documentation Help", desc: "Assistance with all admission documents, forms, and verification process" },
  { icon: Phone, title: "Free Counseling", desc: "One-on-one career counseling to help you choose the right course" },
  { icon: BookOpen, title: "Course Selection", desc: "Expert advice on selecting courses matching your career goals" },
  { icon: Award, title: "University Selection", desc: "We help you pick UGC/AICTE/NAAC approved universities" },
  { icon: Headphones, title: "Post-Admission Support", desc: "Continued support for exam preparation and academic guidance" },
];

const ServicesSectiononlinma = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="services" ref={ref} className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">

        <h2 className="text-3xl font-bold text-center mb-4">
          Our <span className="text-orange-500">Services</span>
        </h2>

        <p className="text-center text-gray-500 mb-10">
          Everything you need for a smooth admission journey
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <div
              key={i}
              className={`bg-white rounded-xl p-6 shadow-md transition-all duration-500 hover:shadow-xl hover:-translate-y-2 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="w-12 h-12 flex items-center justify-center bg-orange-500 text-white rounded-lg mb-4">
                <service.icon className="w-6 h-6" />
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {service.title}
              </h3>

              <p className="text-gray-500 text-sm">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSectiononlinma;