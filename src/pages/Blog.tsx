import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowRight, User, Tag } from "lucide-react";
import { Helmet } from "react-helmet-async";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Navbar } from "@/components/Navbar";
import { FloatingNav } from "@/components/FloatingNav";
import { Footer } from "@/components/Footer";

const blogPosts = [
  {
    title: "How AI is Transforming Education in 2026",
    excerpt:
      "Artificial Intelligence is transforming the way students learn. From AI tutors to personalized learning platforms, education is becoming smarter and more accessible.",
    category: "Education Technology",
    author: "Nexcore Research",
    date: "Feb 2026",
    readTime: "9 min read",
    slug: "ai-transforming-education",
    featured: true,
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995",
  },
  {
    title: "Top Career Options After 12th in 2026",
    excerpt:
      "Choosing the right career after class 12 can define your future. Fields like AI, Data Science, Cybersecurity and Digital Marketing are growing rapidly.",
    category: "Career Guidance",
    author: "Career Experts",
    date: "Feb 2026",
    readTime: "8 min read",
    slug: "career-options-after-12th",
    featured: true,
    image:
      "https://collegevidya.com/blog/wp-content/uploads/2022/01/career-options-after-12th-science.jpg",
  },
  {
    title: "Best Countries to Study Abroad in 2026",
    excerpt:
      "Studying abroad provides global exposure and excellent career opportunities. Countries like Canada, Germany, UK and Australia offer world class universities.",
    category: "Study Abroad",
    author: "Global Education Team",
    date: "Jan 2026",
    readTime: "10 min read",
    slug: "best-countries-study-abroad",
    featured: false,
    image:
      "https://scholarszone.com.bd/wp-content/uploads/2025/05/Best-Countries-to-Study-Abroad.jpg.webp",
  },
  {
    title: "Highest Paying Engineering Fields in 2026",
    excerpt:
      "Fields like AI Engineering, Robotics, Cloud Computing and Cybersecurity are among the highest paying engineering careers today.",
    category: "Engineering Careers",
    author: "Industry Experts",
    date: "Jan 2026",
    readTime: "7 min read",
    slug: "highest-paying-engineering-fields",
    featured: false,
    image:
      "https://www.naukri.com/campus/career-guidance/wp-content/uploads/2025/03/Screenshot-2025-03-07-171745-768x522.png ",
  },
  {
    title: "Digital Skills Every Student Should Learn",
    excerpt:
      "Students must develop future ready skills like coding, AI tools, communication and problem solving to stay ahead in the job market.",
    category: "Future Skills",
    author: "Tech Career Team",
    date: "Jan 2026",
    readTime: "9 min read",
    slug: "digital-skills-for-students",
    featured: false,
    image:
      "https://i.pinimg.com/736x/30/a9/ca/30a9cabd817dda9ee9e69552e81ed856.jpg",
  },
];

const Blog = () => {
  return (
    <div className="min-h-screen bg-background">
      <Helmet>
        <title>Education Blog | Career Guidance & Study Abroad</title>
        <meta
          name="description"
          content="Explore expert articles on career guidance, college admissions and study abroad opportunities."
        />
      </Helmet>

      <Navbar />
      <FloatingNav />

      <section className="pt-28 pb-16 bg-muted/40">
        <div className="container mx-auto px-4 text-center max-w-3xl">
          <h1 className="text-5xl font-bold mb-4">
            Education <span className="text-primary">Blog</span>
          </h1>

          <p className="text-muted-foreground text-lg">
            Discover insights on career guidance, study abroad and modern education trends.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Featured Articles</h2>

          <div className="grid md:grid-cols-2 gap-8">
            {blogPosts
              .filter((post) => post.featured)
              .map((post) => (
                <Card key={post.slug} className="overflow-hidden hover:shadow-xl transition">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />

                  <CardContent className="p-6">
                    <span className="text-primary text-sm font-medium">
                      {post.category}
                    </span>

                    <h3 className="text-xl font-bold mt-2 mb-2">
                      <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>

                    <p className="text-muted-foreground text-sm mb-4">
                      {post.excerpt}
                    </p>

                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User size={14} /> {post.author}
                      </span>

                      <span className="flex items-center gap-1">
                        <Calendar size={14} /> {post.date}
                      </span>

                      <span className="flex items-center gap-1">
                        <Clock size={14} /> {post.readTime}
                      </span>
                    </div>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10">Latest Articles</h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.slug} className="overflow-hidden hover:shadow-lg transition">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-40 object-cover"
                />

                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <Tag size={14} />
                    <span className="text-primary text-sm">{post.category}</span>
                  </div>

                  <h3 className="font-semibold mb-2">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h3>

                  <p className="text-sm text-muted-foreground mb-4">
                    {post.excerpt}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="text-primary flex items-center gap-1 text-sm font-medium"
                  >
                    Read Article <ArrowRight size={14} />
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Need Career Guidance?</h2>

          <p className="text-muted-foreground mb-8">
            Talk with our experts and get personalized advice for college admissions and career planning.
          </p>

          <Button asChild size="lg">
            <Link to="/contact">
              Get Expert Advice <ArrowRight className="ml-2" />
            </Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;