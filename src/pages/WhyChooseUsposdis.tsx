import {
  CheckCircle,
  Lightbulb,
  Heart,
  Medal,
  Clock,
  Banknote,
  ShieldCheck,
  Wifi
} from "lucide-react";

const reasons = [
  {
    icon: CheckCircle,
    title: "100% Genuine Admissions",
    desc: "We deal only with UGC-approved and recognized universities.",
  },
  {
    icon: Lightbulb,
    title: "Expert Counselors",
    desc: "Team of certified education counselors with 12+ years experience.",
  },
  {
    icon: Heart,
    title: "Student-First Approach",
    desc: "Your career goals drive our recommendations, not commissions.",
  },
  {
    icon: Medal,
    title: "Top University Partners",
    desc: "Direct partnerships with 50+ leading distance education universities.",
  },
  {
    icon: Clock,
    title: "Quick Admission",
    desc: "Get admitted within 24-48 hours with our fast-track process.",
  },
  {
    icon: Banknote,
    title: "Affordable Fees & EMI",
    desc: "Best fee structures with flexible EMI plans for all courses.",
  },
  {
    icon: ShieldCheck,
    title: "No Hidden Charges",
    desc: "Complete transparency in fees — what you see is what you pay.",
  },
  {
    icon: Wifi,
    title: "100% Online Process",
    desc: "Complete your admission from the comfort of your home.",
  },
];

const WhyChooseUsposdis = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            What Makes Us{" "}
            <span className="text-gradient-saffron">Different?</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="text-center p-6 rounded-2xl border border-border 
              hover:border-primary/30 transition-all duration-300 
              hover:shadow-lg group hover:-translate-y-1"
            >
              <div className="w-14 h-14 mx-auto bg-secondary rounded-full flex items-center justify-center mb-4 
              group-hover:bg-gradient-saffron transition-all duration-300">
                <Icon className="h-7 w-7 text-primary group-hover:text-white transition-colors" />
              </div>

              <h3 className="font-bold font-display text-foreground mb-2">
                {title}
              </h3>
              <p className="text-sm text-muted-foreground">{desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsposdis;