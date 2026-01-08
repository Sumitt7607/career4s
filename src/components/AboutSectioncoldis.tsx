import { Button } from "@/components/ui/button";
import { CheckCircle, Target, Heart, Lightbulb, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Personalized Approach",
    description: "Every student is unique. We create customized strategies tailored to your individual goals and circumstances.",
  },
  {
    icon: Heart,
    title: "Student-First Philosophy",
    description: "Your success is our priority. We're committed to supporting you at every step of your journey.",
  },
  {
    icon: Lightbulb,
    title: "Expert Knowledge",
    description: "Our counselors have extensive experience with admissions at top universities worldwide.",
  },
];

const achievements = [
  "10+ Years of Experience",
  "50+ Partner Universities",
  "98% Visa Success Rate",
  "24/7 Support Available",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Image */}
          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500&fit=crop"
                alt="Team of education consultants"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 gradient-saffron rounded-xl opacity-20" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-xl" />
            
            {/* Experience Badge */}
            <div className="absolute -right-4 md:-right-8 top-1/2 transform -translate-y-1/2 bg-card p-6 rounded-xl shadow-lg border border-border">
              <p className="text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Years of Excellence</p>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-1 bg-secondary text-secondary-foreground rounded-full text-sm font-medium mb-4">
                About Us
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Guiding Dreams to{" "}
                <span className="text-gradient-saffron">Reality</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Since 2014, Admission Destiny has been helping students achieve their 
                dreams of studying at world-renowned universities. Our team of experienced 
                counselors brings together expertise in international education, admissions 
                processes, and visa regulations to provide you with unmatched guidance.
              </p>
            </div>

            {/* Values */}
            <div className="space-y-6">
              {values.map((value) => (
                <div key={value.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">{value.title}</h3>
                    <p className="text-muted-foreground text-sm">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements List */}
            <div className="grid grid-cols-2 gap-3">
              {achievements.map((achievement) => (
                <div key={achievement} className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-sm text-foreground">{achievement}</span>
                </div>
              ))}
            </div>

            <Button className="gradient-saffron text-primary-foreground hover:opacity-90 group">
              Learn More About Us
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
