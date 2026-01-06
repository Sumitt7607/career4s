import React from 'react'
import { AnimatedSection } from '@/components/AnimatedSection'
import { ArrowRight, Star, BookOpen, Users, Globe, GraduationCap, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Navbar } from '@/components/Navbar';
import { Link, useNavigate } from 'react-router-dom';   
import { Footer } from '@/components/Footer';
function Offerings() {
     const navigate = useNavigate();
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
  },
];

  return (
    <div>
        <Navbar />
      
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
       "https://i.pravatar.cc/150?img=12",
      "https://i.pravatar.cc/150?img=47",
      "https://i.pravatar.cc/150?img=56",
      "https://i.pravatar.cc/150?img=64",
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
        <Footer />
    </div>

  )

}

export default Offerings
