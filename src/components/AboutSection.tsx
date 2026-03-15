import consultantImg from "@/assets/consultant.jpg";
import { CheckCircle } from "lucide-react";

const points = [
  "Professional guidance for college admissions",
  "Support for engineering, medical and management courses",
  "Help with entrance exam information and counseling",
  "Guidance for selecting the right college and course",
  "Assistance with application and admission process",
  "Dedicated support for students and parents",
];

const AboutSection = () => (
  <section id="about" className="section-padding">
    <div className="container-wide">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-card-warm">
            <img
              src={consultantImg}
              alt="Education consultant helping student"
              className="w-full h-auto object-cover"
            />
          </div>

          <div className="absolute -bottom-6 -right-6 bg-gradient-saffron rounded-xl p-6 shadow-saffron hidden md:block">
            <div className="text-3xl font-display font-bold text-primary-foreground">
              Expert
            </div>
            <div className="text-sm text-primary-foreground/80">
              Admission Guidance
            </div>
          </div>
        </div>

        <div>
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            About Us
          </span>

          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 mb-6 text-foreground">
            Your Trusted Partner in{" "}
            <span className="text-gradient-saffron">
              College Admission Guidance
            </span>
          </h2>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            We help students and parents make the right decisions for higher
            education. Our platform provides reliable information about colleges,
            courses, entrance exams, and the admission process so students can
            choose the best path for their future.
          </p>

          <div className="space-y-3">
            {points.map((p) => (
              <div key={p} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-foreground text-sm">{p}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default AboutSection;