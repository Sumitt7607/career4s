import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";
import { AnimatedSection } from "@/components/AnimatedSection";

const categories = [
  "All",
  "College Admissions",
  "Career Tips",
  "Study Abroad",
  "Exam Prep",
  "Success Stories",
];

const blogPosts = [
  {
    title: "Top 10 Tips to Crack JEE Main 2025",
    excerpt: "Expert strategies and study techniques to help you ace the JEE Main examination. Learn time management, important topics, and more.",
    category: "Exam Prep",
    author: "Dr. Rajesh Kumar",
    date: "Dec 20, 2024",
    readTime: "8 min read",
    featured: true,
  },
  {
    title: "Complete Guide to Studying in Canada",
    excerpt: "Everything you need to know about studying in Canada - from university selection to visa process and living costs.",
    category: "Study Abroad",
    author: "Amit Sharma",
    date: "Dec 18, 2024",
    readTime: "12 min read",
    featured: true,
  },
  {
    title: "How to Choose the Right Engineering Branch",
    excerpt: "Confused between CS, ECE, and Mechanical? This guide helps you understand which engineering branch suits you best.",
    category: "Career Tips",
    author: "Priya Verma",
    date: "Dec 15, 2024",
    readTime: "6 min read",
    featured: false,
  },
  {
    title: "NEET 2025: Subject-wise Preparation Strategy",
    excerpt: "Detailed breakdown of how to prepare for Physics, Chemistry, and Biology for NEET 2025 with recommended resources.",
    category: "Exam Prep",
    author: "Dr. Meera Patel",
    date: "Dec 12, 2024",
    readTime: "10 min read",
    featured: false,
  },
  {
    title: "Scholarship Opportunities for Indian Students Abroad",
    excerpt: "Comprehensive list of scholarships available for Indian students planning to study in USA, UK, Canada, and Australia.",
    category: "Study Abroad",
    author: "Amit Sharma",
    date: "Dec 10, 2024",
    readTime: "15 min read",
    featured: false,
  },
  {
    title: "Building a Strong Profile for IIM Admissions",
    excerpt: "Learn what IIMs look for in candidates beyond CAT scores - work experience, academics, and extracurriculars.",
    category: "College Admissions",
    author: "Priya Verma",
    date: "Dec 8, 2024",
    readTime: "7 min read",
    featured: false,
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <FloatingNav />

      {/* Hero Section */}
      <section className="pt-24 lg:pt-32 pb-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="text-center max-w-3xl mx-auto">
            <h1 className="font-display text-4xl lg:text-5xl font-bold mb-6">
              Blog & <span className="text-gradient">Resources</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Expert insights, tips, and guides to help you navigate your educational journey. Stay updated with the latest in admissions and career guidance.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 border-b border-border sticky top-16 lg:top-20 bg-background/95 backdrop-blur-md z-40">
        <div className="container mx-auto px-4">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors ${
                  category === "All"
                    ? "gradient-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="mb-8">
            <h2 className="font-display text-2xl font-bold">Featured Articles</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post, index) => (
                <AnimatedSection key={post.title} animation="slide-up" delay={index * 100}>
                  <Card className="h-full hover:shadow-xl transition-shadow overflow-hidden group">
                    <div className="aspect-video bg-muted relative">
                      <div className="absolute inset-0 gradient-primary opacity-80"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <span className="text-primary-foreground font-display text-xl font-bold text-center px-4">
                          {post.title}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                          {post.category}
                        </span>
                        <span className="text-muted-foreground text-xs">Featured</span>
                      </div>
                      <h3 className="font-display text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between text-sm text-muted-foreground">
                        <div className="flex items-center gap-4">
                          <span className="flex items-center gap-1">
                            <User className="w-4 h-4" />
                            {post.author}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {post.date}
                          </span>
                        </div>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {post.readTime}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </AnimatedSection>
              ))}
          </div>
        </div>
      </section>

      {/* All Posts */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="slide-up" className="mb-8">
            <h2 className="font-display text-2xl font-bold">All Articles</h2>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.title} animation="slide-up" delay={index * 50}>
                <Card className="h-full hover:shadow-lg transition-shadow group">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <Tag className="w-4 h-4 text-primary" />
                      <span className="text-primary text-sm font-medium">{post.category}</span>
                    </div>
                    <h3 className="font-display text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </CardContent>
                </Card>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection animation="fade" delay={300} className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Articles
              <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl font-bold mb-4">
                Subscribe to Our <span className="text-gradient">Newsletter</span>
              </h2>
              <p className="text-muted-foreground mb-8">
                Get the latest articles, tips, and updates delivered directly to your inbox.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <Button className="gradient-primary">Subscribe</Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <AnimatedSection animation="scale">
            <div className="gradient-primary rounded-3xl p-8 lg:p-16 text-center text-primary-foreground">
              <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">
                Need Personalized Guidance?
              </h2>
              <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
                Our expert counselors are here to help you with any questions about admissions, career, or study abroad.
              </p>
              <Button asChild size="lg" variant="secondary" className="text-lg px-8">
                <Link to="/contact">
                  Get Expert Advice
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

export default Blog;
