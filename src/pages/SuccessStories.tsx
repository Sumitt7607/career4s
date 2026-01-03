import { Link } from "react-router-dom";
import { Star, Quote, ArrowRight, GraduationCap, Globe, Briefcase } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const successStories = [
  {
    name: "Priya Sharma",
    achievement: "IIT Delhi - Computer Science",
    year: "2023",
    story: "I was lost about which engineering branch to choose. Career 4S not only helped me prepare for JEE but also guided me to choose CS based on my aptitude. Today, I'm living my dream at IIT Delhi!",
    category: "engineering",
    rating: 5,
  },
  {
    name: "Rahul Mehta",
    achievement: "Stanford University - MS Computer Science",
    year: "2023",
    story: "From GRE preparation to crafting the perfect SOP, Career 4S was with me every step. Their study abroad team's expertise in US admissions is unmatched. Stanford felt like a distant dream, now it's my reality.",
    category: "abroad",
    rating: 5,
  },
  {
    name: "Ananya Patel",
    achievement: "IIM Ahmedabad - MBA",
    year: "2022",
    story: "The career counseling sessions helped me realize my passion for business. The CAT coaching and interview prep were exceptional. Thank you, Career 4S, for making IIM-A possible!",
    category: "management",
    rating: 5,
  },
  {
    name: "Vikram Singh",
    achievement: "AIIMS Delhi - MBBS",
    year: "2023",
    story: "NEET preparation was challenging, but the structured approach and dedicated faculty at Career 4S made all the difference. Their bio-focused batches and regular tests were game-changers.",
    category: "medical",
    rating: 5,
  },
  {
    name: "Neha Gupta",
    achievement: "University of Toronto - Undergraduate",
    year: "2023",
    story: "As a first-generation study abroad student, I was overwhelmed. Career 4S guided me through everything - from university selection to visa. They even helped me secure a partial scholarship!",
    category: "abroad",
    rating: 5,
  },
  {
    name: "Arjun Reddy",
    achievement: "ISB Hyderabad - MBA",
    year: "2022",
    story: "After 5 years of work experience, I wanted to pursue an MBA. Career 4S helped me identify the right program, prepare for GMAT, and build a compelling application. ISB was the perfect fit!",
    category: "management",
    rating: 5,
  },
];

const stats = [
  { icon: GraduationCap, value: "15,000+", label: "Students Placed" },
  { icon: Globe, value: "25+", label: "Countries" },
  { icon: Briefcase, value: "₹500Cr+", label: "Scholarships Secured" },
];

const SuccessStories = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingNav />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Success <span className="text-gradient">Stories</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Real stories from real students who achieved their dreams with Career 4S. Their success is our greatest achievement.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 border-b border-border">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} animation="slide-up" delay={index * 100}>
                <div className="text-center">
                  <stat.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <p className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {successStories.map((story, index) => (
              <AnimatedSection key={story.name} animation="slide-up" delay={index * 100}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardContent className="p-6">
                    <Quote className="w-10 h-10 text-primary/20 mb-4" />
                    <p className="text-foreground mb-6 italic leading-relaxed">
                      "{story.story}"
                    </p>
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: story.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center text-primary-foreground font-semibold">
                        {story.name.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">{story.name}</p>
                        <p className="text-sm text-primary">{story.achievement}</p>
                        <p className="text-xs text-muted-foreground">Class of {story.year}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Video Testimonials Placeholder */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Video <span className="text-gradient">Testimonials</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Watch our students share their journey in their own words
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <AnimatedSection key={i} animation="scale" delay={i * 100}>
                <div className="aspect-video bg-muted rounded-xl flex items-center justify-center border border-border">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-full gradient-primary flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-primary-foreground ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-muted-foreground text-sm">Video Coming Soon</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center mb-12">
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Achievements</span>
            </h2>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "500+", label: "IIT/NIT Selections" },
              { value: "200+", label: "AIIMS/Medical Admissions" },
              { value: "300+", label: "IIM/MBA Placements" },
              { value: "1000+", label: "Study Abroad Success" },
            ].map((achievement, index) => (
              <AnimatedSection key={achievement.label} animation="slide-up" delay={index * 100}>
                <Card className="text-center">
                  <CardContent className="p-6">
                    <p className="text-3xl lg:text-4xl font-display font-bold text-primary mb-2">
                      {achievement.value}
                    </p>
                    <p className="text-muted-foreground text-sm">{achievement.label}</p>
                  </CardContent>
                </Card>
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
                Be Our Next Success Story
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Join thousands of students who achieved their dreams with Career 4S. Your success story starts here.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Start Your Journey
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SuccessStories;
