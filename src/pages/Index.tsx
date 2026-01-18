import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Globe, BookOpen, Users, Award, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Services from "./Services";
import { AdmissionTicker } from "./AdmissionTicker";
import { useNavigate } from "react-router-dom";
import WhatsApp from "@/components/WhatsApp";
import { link } from "fs";
// const navigate = useNavigate();

const services = [
  {
    icon: GraduationCap,
    title: "Admissions India",
    description: "Expert guidance for admissions to top universities in India and abroad.",
    link: "/admission-india",
  },
  {
    icon: Briefcase,
    title: "Admissions Abroad ",
    description: "Personalized career mapping based on your skills, interests, and aspirations.",
    link: "/admission-abroad",
  },
  {
    icon: Globe,
    title: "Online Education",
    description: "Complete support for studying in USA, UK, Canada, Australia, and more.",
    link: "/admission-online",
  },
  {
    icon: BookOpen,
    title: "Distance Education",
    description: "Comprehensive coaching for JEE, NEET, CAT, GRE, GMAT, and other exams.",
    link:'/admission-distance',
  },
];

const stats = [
  { value: "15,000+", label: "Students Guided" },
  { value: "500+", label: "Partner Colleges" },
  { value: "98%", label: "Success Rate" },
  { value: "12+", label: "Years Experience" },
];

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Admitted to IIT Delhi",
    content: "Career 4S helped me navigate the complex JEE admission process. Their guidance was invaluable!",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    role: "MS at Stanford University",
    content: "From GRE prep to visa guidance, they handled everything. I'm now living my dream at Stanford.",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    role: "MBA at IIM Ahmedabad",
    content: "The career counseling sessions helped me discover my true calling. Forever grateful to the team!",
    rating: 5,
  },
];

const Index = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      {/* <FloatingNav /> */}
      <WhatsApp />  
      <AdmissionTicker />

      {/* Hero Section */}
      <section className="pt-14 sm:pt-20 lg:pt-32 pb-16 lg:pb-24 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm">
                  <Star className="w-4 h-4 fill-primary" />
                  Trusted by 10,000+ Students
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                  Your Journey to{" "}
                  <span className="text-gradient">Success</span>{" "}
                  Starts Here
                </h1>
                <p className="text-lg text-muted-foreground max-w-lg">
                  Expert admission counseling and career guidance to help you achieve your academic dreams. Let us be your partner in success.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="gradient-primary hover:opacity-90 text-lg px-8">
                    <Link to="/contact">
                      Book Free Consultation
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="text-lg px-8">
                    <Link to="/services">Explore Services</Link>
                  </Button>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <div className="relative">
                <div className="absolute inset-0 gradient-primary rounded-3xl blur-3xl opacity-20 animate-float"></div>
                <div className="relative bg-card rounded-3xl p-8 shadow-2xl border border-border">
                  <div className="grid grid-cols-2 gap-4">
                    {services.map((service, index) => (
                      <div
                        key={service.title}
                         onClick={() => service.link && navigate(service.link)} //
                        className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                      >
                        <service.icon className="w-8 h-8 text-primary mb-3" />
                        <h3 className="font-semibold text-sm">{service.title}</h3>
                      </div>
                    ))}
                  </div>
              <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-primary/10">
  {/* Student Images */}
  <div className="flex -space-x-3">
    {[
       "/1stboy.jpg",
      "/2ndboy.jpg",
      "public/3rd student.avif",
      "public/4thboy.avif",
    ].map((img, index) => (
      <img
        key={index}
        src={img}
        alt="student"
        className="w-10 h-10 rounded-full border-2 border-card object-cover shadow-sm"
      />
    ))}
  </div>

  {/* Text */}
  <div>
    <p className="font-semibold text-sm">Join 500+ students</p>
    <p className="text-xs text-muted-foreground">
      enrolled this month
    </p>
  </div>
</div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Stats Section */}
     <section className="relative py-20 bg-muted/50 overflow-hidden">
  <div className="container mx-auto px-4">

    {/* Background glow */}
    <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
    <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

    <div className="relative grid grid-cols-2 lg:grid-cols-4 gap-8">
      {stats.map((stat, index) => (
        <AnimatedSection
          key={stat.label}
          animation="slide-up"
          delay={index * 150}
        >
          <div className="group relative bg-background/70 backdrop-blur-xl border border-border rounded-2xl p-6 text-center shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2">

            {/* Value */}
            <p className="text-4xl lg:text-5xl font-display font-bold text-primary mb-2 transition-transform duration-500 group-hover:scale-110">
              {stat.value}
            </p>

            {/* Label */}
            <p className="text-muted-foreground font-medium tracking-wide">
              {stat.label}
            </p>

            {/* Hover glow */}
            <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>


      <Services />      


      
{/*       
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Comprehensive guidance for every step of your educational journey
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} animation="slide-up" delay={index * 100}>
                <Card className="group hover:shadow-xl transition-all duration-300 border-border hover:border-primary/50 h-full">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-xl gradient-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <service.icon className="w-7 h-7 text-primary-foreground" />
                    </div>
                    <h3 className="font-display font-semibold text-xl mb-2">{service.title}</h3>
                    <p className="text-muted-foreground mb-4">{service.description}</p>
                    <Link
                      to="/services"
                      className="inline-flex items-center text-primary font-medium hover:gap-2 transition-all"
                    >
                      Learn More <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>  */}

      {/* Why Choose Us */}
      {/* <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="slide-left">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-6">
                Why Choose <span className="text-gradient">Career 4S?</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                With over 12 years of experience, we've helped thousands of students achieve their dreams. Here's what sets us apart:
              </p>
              <ul className="space-y-4">
                {[
                  "Personalized guidance tailored to your goals",
                  "Expert counselors with industry experience",
                  "Strong network with 500+ partner institutions",
                  "End-to-end support from selection to admission",
                  "Proven track record with 98% success rate",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection animation="slide-right" delay={200}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <Card className="p-6 gradient-primary text-primary-foreground">
                    <Users className="w-10 h-10 mb-4" />
                    <p className="text-3xl font-bold">50+</p>
                    <p className="text-sm opacity-90">Expert Counselors</p>
                  </Card>
                  <Card className="p-6">
                    <Award className="w-10 h-10 text-primary mb-4" />
                    <p className="text-3xl font-bold text-foreground">15+</p>
                    <p className="text-sm text-muted-foreground">Industry Awards</p>
                  </Card>
                </div>
                <div className="space-y-4 mt-8">
                  <Card className="p-6">
                    <Globe className="w-10 h-10 text-primary mb-4" />
                    <p className="text-3xl font-bold text-foreground">25+</p>
                    <p className="text-sm text-muted-foreground">Countries Covered</p>
                  </Card>
                  <Card className="p-6 bg-foreground text-background">
                    <GraduationCap className="w-10 h-10 mb-4" />
                    <p className="text-3xl font-bold">1000+</p>
                    <p className="text-sm opacity-80">Scholarships Secured</p>
                  </Card>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section> */}

      {/* Testimonials */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Student <span className="text-gradient">Success Stories</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Hear from students who achieved their dreams with our guidance
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.name} animation="slide-up" delay={index * 100}>
                <Card className="h-full">
                  <CardContent className="p-6">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-foreground mb-6 italic">"{testimonial.content}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-muted flex items-center justify-center font-semibold text-primary">
                        {testimonial.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{testimonial.name}</p>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade" delay={400} className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <Link to="/success-stories">
                View All Success Stories
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale">
            <div className="gradient-primary rounded-3xl p-8 lg:p-16 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Start Your Journey?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Book a free consultation with our expert counselors and take the first step towards your dream career.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Book Free Consultation
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section> */}

      {/* <Footer /> */}
    </div>
  );
};

export default Index;
