import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, Clock, User } from "lucide-react";
import { blogs } from "@/data/blogs";

import Newsletter from "@/components/Newsletter";

const BlogDetailab = () => {
  const { blogab } = useParams();
  const blog = blogs.find((b) => b.id === blogab);

  if (!blog) {
    return (
      <div className="flex min-h-screen flex-col">
       
        <div className="container flex flex-1 items-center justify-center py-20 text-center">
          <div>
            <h1 className="font-display text-3xl font-bold text-foreground">Blog Not Found</h1>
            <Link to="/" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
       
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
    
      <article className="flex-1">
        {/* Hero */}
        <div className="relative h-64 md:h-96">
          <img src={blog.image} alt={blog.title} className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-foreground/50" />
          <div className="absolute inset-0 flex items-end">
            <div className="container pb-8">
              <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                {blog.category}
              </span>
              <h1 className="mt-3 font-display text-3xl font-bold text-primary-foreground md:text-5xl">
                {blog.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Meta */}
        <div className="container py-6">
          <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4 text-primary" /> {blog.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4 text-primary" /> {blog.date}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4 text-primary" /> {blog.readTime}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="container max-w-3xl pb-16">
          {blog.content.map((para, i) => (
            <p key={i} className="mb-5 text-base leading-relaxed text-foreground/90">
              {para}
            </p>
          ))}
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-secondary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to All Blogs
          </Link>
        </div>
      </article>
      <Newsletter />

    </div>
  );
};

export default BlogDetailab;
