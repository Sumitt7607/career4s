import { Link } from "react-router-dom";
import { GraduationCap, Briefcase, Globe, BookOpen, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";
import { link } from "fs";
import Packages from "./Packages";
const services = [
{
  icon: GraduationCap,
  title: "Admissions India",
  subtitle: "Get into Your Dream College",
  link: "/admission-india",
  description:
    "Expert guidance for undergraduate and postgraduate admissions to top universities in India. From profile building to application submission, we handle it all.",
  features: [
    "Profile evaluation and gap analysis",
    "College shortlisting based on your profile",
    "Application strategy and essay guidance",
    "Interview preparation and mock sessions",
    "Document verification and submission",
  ],
  colleges: ["Engineering", "Medical", "Management", "post graduation" ],
},

 {
    icon: Globe,
    title: "Study Abroad",
    link: "/admission-abroad",
    subtitle: "Your Gateway to Global Education",
    description: "Complete end-to-end support for studying abroad. From university selection to visa processing, we make your international education dreams a reality.",
    features: [
      "Country and university selection guidance",
      "Application and SOP writing assistance",
      "Scholarship and financial aid support",
      "Visa application and interview prep",
      "Pre-departure briefing and support",
    ],
      colleges: ["Engineering", "Medical", "Management", "post graduation" ],

  },

{
  icon: Briefcase,
  title: "Online Education",
  link:"/admission-online",
  subtitle: "learn Anytime, Anywhere",
  description:
    "Flexible and high-quality online education programs designed to help students and professionals upskill, reskill, and achieve their academic and career goals from anywhere in the world.",
  features: [
    "Live and recorded expert-led classes",
    "Industry-relevant curriculum and certifications",
    "Interactive learning with assignments and quizzes",
    "Doubt-solving sessions and mentor support",
    "Flexible schedules with lifetime access to content",
  ],
  colleges: ["Engineering", "Medical", "Management", "post graduation" ],

},

{
  icon: BookOpen,
  title: "Distance Education",
  link: "/admission-distance",
  subtitle: "Learn Without Limits",
  description:
    "Flexible and recognized distance education programs designed for students and working professionals to earn degrees and certifications without attending regular classes.",
  features: [
    "UG, PG, diploma, and certification programs",
    "UGC/AICTE approved universities",
    "Self-paced learning with online study material",
    "Online exams and flexible schedules",
    "Dedicated academic and exam support",
  ],
  colleges: ["Engineering", "Medical", "Management", "post graduation" ],

}

];

const Services = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* <Navbar /> */}
      {/* <FloatingNav /> */}

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Our <span className="text-gradient">Services</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Comprehensive education and career guidance services designed to help you achieve your dreams. From college admissions to career planning, we've got you covered.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-20">
  <div className="container mx-auto px-4">
    <div className="space-y-20">
      {services.map((service, index) => (
        <AnimatedSection
          key={service.title}
          animation={index % 2 === 0 ? "slide-left" : "slide-right"}
        >
          <div
            className={`grid lg:grid-cols-2 gap-12 items-center ${
              index % 2 === 1 ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* LEFT CONTENT */}
            <div className={index % 2 === 1 ? "lg:order-2" : ""}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-4">
                <service.icon className="w-4 h-4" />
                {service.subtitle}
              </div>

              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                {service.title}
              </h2>

              <p className="text-muted-foreground text-lg mb-6">
                {service.description}
              </p>

              <ul className="space-y-3 mb-8">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button asChild className="gradient-primary">
                <Link to={service.link}>
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>

            {/* RIGHT CLICKABLE CARD */}
            <div className={index % 2 === 1 ? "lg:order-1" : ""}>
              <Link to={service.link} className="block group">
                <Card
                  className="
                    overflow-hidden
                    cursor-pointer
                    transition-all duration-300
                    group-hover:-translate-y-2
                    group-hover:shadow-2xl
                    group-hover:border-primary/40
                  "
                >
                  <CardHeader className="gradient-primary text-primary-foreground relative">
                    <span className="absolute top-4 right-4 text-xs opacity-80 group-hover:opacity-100">
                      View →
                    </span>

                    <div className="w-16 h-16 rounded-xl bg-background/20 flex items-center justify-center mb-4">
                      <service.icon className="w-8 h-8" />
                    </div>

                    <CardTitle className="text-2xl">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="p-6">
                    <p className="text-sm text-muted-foreground mb-4">
                      {index === 0 || index === 2
                        ? "Top Destinations:"
                        : "Perfect For:"}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {service.colleges.map((college) => (
                        <span
                          key={college}
                          className="px-3 py-1.5 rounded-full bg-muted text-sm font-medium"
                        >
                          {college}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>


      {/* Process Section */}
     <section className="relative py-24 overflow-hidden bg-muted/50">

  {/* Floating Gradient Blobs */}
  <div className="absolute -top-24 -left-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
  <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />

  <div className="relative container mx-auto px-4">

    {/* Header */}
    <AnimatedSection animation="slide-up" className="text-center mb-24">
      <h2 className="font-display text-4xl lg:text-5xl font-bold mb-4">
        Our <span className="text-gradient">Process</span>
      </h2>
      <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
        A smooth, transparent, and guided journey from confusion to clarity
      </p>
    </AnimatedSection>

    {/* Timeline */}
<div className="relative grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">


      {/* Animated Timeline Line */}
      <div className="hidden md:block absolute top-20 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />

      {[
  {
    step: "01",
    title: " Counseling",
    description:
      "Begin with a , personalized counseling session to understand your academic background, goals, and career aspirations.",
  },
  {
    step: "02",
    title: "Profile Evaluation",
    description:
      "Our experts evaluate your academic profile, interests, and strengths to identify the best-fit courses and universities.",
  },
  {
    step: "03",
    title: "University & Course Shortlisting",
    description:
      "We create a strategic shortlist of universities and programs aligned with your profile, budget, and future goals.",
  },
  {
    step: "04",
    title: "Application & Documentation",
    description:
      "Complete guidance for applications, SOPs, LORs, and document verification to ensure error-free submissions.",
  },
  {
    step: "05",
    title: "Admission & Beyond",
    description:
      "From offer letters to final enrollment, visa support, and post-admission guidance—we stay with you till success.",
  },
]
.map((item, index) => (
        <AnimatedSection
          key={item.step}
          animation="slide-up"
          delay={index * 180}
        >
          <div className="group relative rounded-3xl p-[1px] bg-gradient-to-br from-primary/30 to-transparent hover:from-primary hover:to-primary/20 transition-all duration-500">

            {/* Glass Card */}
            <div className="relative h-full rounded-3xl bg-background/70 backdrop-blur-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-3">

              {/* Step Badge */}
              <div className="absolute -top-6 left-1/2 -translate-x-1/2">
                <div className="w-14 h-14 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-bold text-lg shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
              </div>

              {/* Content */}
              <div className="pt-10 text-center">
                <h3 className="font-display text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Hover Glow */}
              <div className="pointer-events-none absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-primary/5" />
            </div>
          </div>
        </AnimatedSection>
      ))}
    </div>
  </div>
</section>


      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale">
            <div className="gradient-primary rounded-3xl p-8 lg:p-16 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Ready to Get Started?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Book a free consultation today and take the first step towards your dream career.
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
      </section>
 {/* <Packages/> */}
      <Footer />
    </div>
  );
};

export default Services;
