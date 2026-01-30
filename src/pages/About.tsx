import { Users, Target, Heart, Award, CheckCircle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const team = [
  {
    name: "Vipul Kaushik",
    role: "Founder & CEO",
    bio: "20+ years in education consulting with expertise in international admissions.",
  },
  {
    name: "someone",
    role: "Head of Counseling",
    bio: "Former admissions officer at IIM with deep understanding of B-school applications.",
  },
  {
    name: "someone",
    role: "Study Abroad Director",
    bio: "Helped 2000+ students get admitted to universities in 15+ countries.",
  },
  {
    name: "someone",
    role: "Career Assessment Lead",
    bio: "Certified career counselor with expertise in psychometric evaluations.",
  },
];

const values = [
  {
    icon: Target,
    title: "Student-First Approach",
    description: "Every decision we make is centered around what's best for our students.",
  },
  {
    icon: Heart,
    title: "Genuine Care",
    description: "We treat every student like family and invest in their long-term success.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards in counseling and guidance.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingNav />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              About <span className="text-gradient">Career 4S</span>
            </h1>
       
          </AnimatedSection>
        </div>
      </section>




      {/* Mission & Vision */}
    <section className="py-20 bg-muted/50 relative overflow-hidden">
  <div className="container mx-auto px-4">
    <div className="grid md:grid-cols-2 gap-8">

      {/* ================= MISSION ================= */}
      <AnimatedSection animation="slide-left">
        <Card className="h-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <CardContent className="p-8">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6
                            transition-transform duration-500 group-hover:rotate-6 group-hover:scale-110">
              <Target className="w-7 h-7 text-primary-foreground animate-pulse" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-primary">
              Our Mission
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              To empower every student with the knowledge, guidance, and support
              they need to make informed decisions about their education and
              career, ensuring they reach their full potential.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

      {/* ================= VISION ================= */}
      <AnimatedSection animation="slide-right" delay={100}>
        <Card className="h-full group transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
          <CardContent className="p-8">
            <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-6
                            transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110">
              <Award className="w-7 h-7 text-primary-foreground animate-pulse" />
            </div>

            <h3 className="font-display text-2xl font-bold mb-4 transition-colors duration-300 group-hover:text-primary">
              Our Vision
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              To be India's most trusted education partner, creating a future
              where every student has access to world-class guidance and the
              opportunity to achieve their dreams.
            </p>
          </CardContent>
        </Card>
      </AnimatedSection>

    </div>
  </div>
</section>


      {/* Our Values */}
   <section className="py-20 relative overflow-hidden">
  <div className="container mx-auto px-4">

    {/* ================= HEADING ================= */}
    <AnimatedSection animation="slide-up" className="text-center mb-16">
      <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
        Our <span className="text-gradient">Values</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        The principles that guide everything we do
      </p>
    </AnimatedSection>

    {/* ================= VALUES GRID ================= */}
    <div className="grid md:grid-cols-3 gap-8">
      {values.map((value, index) => (
        <AnimatedSection
          key={value.title}
          animation="slide-up"
          delay={index * 120}
        >
          <Card className="h-full text-center group transition-all duration-500
                           hover:-translate-y-3 hover:shadow-2xl">
            <CardContent className="p-8">

              {/* ICON */}
              <div
                className="w-16 h-16 rounded-full gradient-primary
                           flex items-center justify-center mx-auto mb-6
                           transition-all duration-500
                           group-hover:scale-110 group-hover:rotate-6"
              >
                <value.icon className="w-8 h-8 text-primary-foreground animate-pulse" />
              </div>

              {/* TITLE */}
              <h3 className="font-display text-xl font-bold mb-3
                             transition-colors duration-300
                             group-hover:text-primary">
                {value.title}
              </h3>

              {/* DESCRIPTION */}
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>

            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>

  </div>
</section>


      {/* Our Team */}
     <section className="py-20 bg-muted/50 relative overflow-hidden">
  <div className="container mx-auto px-4">

    {/* ================= HEADING ================= */}
    <AnimatedSection animation="slide-up" className="text-center mb-16">
      <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
        Meet Our <span className="text-gradient">Team</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto">
        Expert counselors dedicated to your success
      </p>
    </AnimatedSection>

    {/* ================= TEAM GRID ================= */}
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {team.map((member, index) => (
        <AnimatedSection
          key={member.name}
          animation="slide-up"
          delay={index * 120}
        >
          <Card
            className="h-full group transition-all duration-500
                       hover:-translate-y-3 hover:shadow-2xl"
          >
            <CardContent className="p-6 text-center">

              {/* AVATAR */}
              <div
                className="w-24 h-24 rounded-full bg-muted mx-auto mb-4
                           flex items-center justify-center
                           transition-all duration-500
                           group-hover:scale-110 group-hover:ring-4 group-hover:ring-primary/30"
              >
                <Users className="w-12 h-12 text-primary transition-transform duration-500 group-hover:rotate-6" />
              </div>

              {/* NAME */}
              <h3
                className="font-semibold text-lg mb-1
                           transition-colors duration-300
                           group-hover:text-primary"
              >
                {member.name}
              </h3>

              {/* ROLE */}
              <p className="text-primary text-sm font-medium mb-3">
                {member.role}
              </p>

              {/* BIO */}
              <p className="text-muted-foreground text-sm leading-relaxed">
                {member.bio}
              </p>

            </CardContent>
          </Card>
        </AnimatedSection>
      ))}
    </div>

  </div>
</section>


      {/* Why Choose Us */}
     <section className="py-20 relative overflow-hidden">

  {/* ===== Subtle Animated Background Blobs ===== */}
  <div className="absolute top-10 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse" />
  <div className="absolute bottom-10 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />

  <div className="container mx-auto px-4 relative z-10">

    {/* ================= HEADING ================= */}
    <AnimatedSection animation="slide-up" className="text-center mb-12">
      <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
        Why <span className="text-gradient">Choose Us?</span>
      </h2>
      <p className="text-muted-foreground max-w-xl mx-auto">
        Everything you need for a confident academic journey
      </p>
    </AnimatedSection>

    {/* ================= FEATURES GRID ================= */}
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        "Personalized one-on-one counseling sessions",
        "Comprehensive psychometric assessments",
        "Expert guidance from former admission officers",
        "Strong network with top universities worldwide",
        "End-to-end support from application to visa",
        "Proven 98% success rate over 12 years",
      ].map((item, index) => (
        <AnimatedSection
          key={item}
          animation="slide-up"
          delay={index * 120}
        >
          <div
            className="group flex items-start gap-4 p-6 rounded-2xl
                       bg-muted/60 backdrop-blur
                       border border-border/50
                       transition-all duration-500
                       hover:-translate-y-2 hover:shadow-2xl
                       hover:border-primary/40"
          >
            {/* ICON */}
            <CheckCircle
              className="w-6 h-6 text-primary flex-shrink-0 mt-1
                         transition-all duration-500
                         group-hover:scale-110 group-hover:rotate-6"
            />

            {/* TEXT */}
            <span className="text-foreground leading-relaxed">
              {item}
            </span>
          </div>
        </AnimatedSection>
      ))}
    </div>

  </div>
</section>


      <Footer />
    </div>
  );
};

export default About;
