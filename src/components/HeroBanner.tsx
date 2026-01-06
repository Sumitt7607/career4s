import { AnimatedCounter } from './AnimatedCounter';
import { ScrollReveal } from './ScrollReveal';
import { InquiryForm } from './InquiryForm';
import { GraduationCap, Building, CheckCircle, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

import graduationImg from '@/assets/graduation.jpg';
import { Footer } from './Footer';
export const HeroBanner = () => {
  return (
    <>
 
    <section className="relative min-h-screen bg-gradient-hero overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating shapes */}
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full animate-float blur-xl" />
        <div className="absolute top-40 right-20 w-32 h-32 bg-accent/10 rounded-full animate-float-delayed blur-2xl" />
        <div className="absolute bottom-32 left-1/4 w-24 h-24 bg-primary/5 rounded-full animate-float blur-lg" />
        <div className="absolute top-1/3 right-1/3 w-16 h-16 bg-accent/10 rounded-full animate-bounce-subtle" />
        
        {/* Decorative graduation caps */}
        <div className="absolute top-1/4 left-[15%] opacity-10 animate-float">
          <GraduationCap className="w-16 h-16 text-primary" />
        </div>
        <div className="absolute bottom-1/4 right-[10%] opacity-10 animate-float-delayed">
          <GraduationCap className="w-12 h-12 text-primary" />
        </div>
      </div>

      {/* Saffron accent bar at top */}
      <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-saffron" />

      <div className="container mx-auto px-4 pt-20 pb-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[calc(100vh-5rem)]">
          {/* Left content */}
          <div className="space-y-8">
            <ScrollReveal animation="slide-left">
              <span className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 text-primary rounded-full text-sm font-medium animate-pulse-glow">
                <span className="w-2 h-2 bg-primary rounded-full animate-ping" />
                Admissions Open 2025-26
              </span>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={100}>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Management Quota
                <span className="block text-gradient-saffron mt-2">
                  Admissions India
                </span>
              </h1>
            </ScrollReveal>

            <ScrollReveal animation="slide-left" delay={200}>
              <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
                Get guaranteed admission in India's top Medical, Engineering, and Management colleges through our hassle-free management quota process. 
                <span className="text-primary font-medium"> 100% genuine seats with transparent process.</span>
              </p>
            </ScrollReveal>

            {/* Feature pills */}
            <ScrollReveal animation="slide-left" delay={300}>
              <div className="flex flex-wrap gap-3">
                {["Top Colleges", "Guaranteed Seats", "Expert Guidance", "Pan India"].map((feature, i) => (
                  <span
                    key={feature}
                    className="flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-shadow"
                    style={{ animationDelay: `${i * 100}ms` }}
                  >
                    <CheckCircle className="w-4 h-4 text-accent" />
                    {feature}
                  </span>
                ))}
              </div>
            </ScrollReveal>

            {/* CTA Buttons */}
            <ScrollReveal animation="slide-left" delay={400}>
              <div className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-saffron hover:opacity-90 text-primary-foreground font-semibold px-8 py-6 rounded-xl shadow-saffron transition-all duration-300 hover:scale-105 hover:shadow-lg group"
                >
                  <Phone className="w-5 h-5 mr-2 animate-wiggle" />
                  Call Now: +91 98765 43210
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105"
                >
                  View All Colleges
                </Button>
              </div>
            </ScrollReveal>

            {/* Stats */}
            <ScrollReveal animation="fade-up" delay={500}>
              <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
                <div className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    <AnimatedCounter end={15000} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Students Placed</p>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    <AnimatedCounter end={500} suffix="+" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Partner Colleges</p>
                </div>
                <div className="text-center">
                  <div className="font-serif text-3xl md:text-4xl font-bold text-primary">
                    <AnimatedCounter end={98} suffix="%" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">Success Rate</p>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right side - Form */}
          <div className="lg:pl-8">
            <InquiryForm />
          </div>
        </div>
      </div>

      {/* Decorative image overlay */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
    <Footer />
       </>
  );
};
