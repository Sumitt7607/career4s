import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Globe, BookOpen, Users, Award, ArrowRight, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import Services from "./Services";
import NoticeCard from "./NoticeCard";
import { AdmissionTicker } from "./AdmissionTicker";
import { useNavigate } from "react-router-dom";
import WhatsApp from "@/components/WhatsApp";
import { link } from "fs";
import NoticeBoard from "./NoticeBoard";
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
  { value: "5000+", label: "Students Guided" },
  { value: "500+", label: "Partner Colleges" },
  { value: "5+", label: "Branches " },
  { value: "30+", label: "Expert counselors" },
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
                    <p className="text-xs text-right">
  click to explore more
</p>

                      </div>
                      
                    ))}
                  </div>
              <div className="mt-6 flex items-center gap-4 p-4 rounded-xl bg-primary/10">

  {/* Student Images */}
  <div className="flex -space-x-3">
    {[
       "/1stboy.jpg",
      "/2ndboy.jpg",
      "/3rd student.avif",
      "/4thboy.avif",
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

<NoticeBoard/>

      <Services />      
      

{/* <NoticeCard/> */}
      




    </div>
  );
};

export default Index;
