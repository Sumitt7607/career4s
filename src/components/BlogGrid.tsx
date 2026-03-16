import { blogs } from "@/data/blogs";
import BlogCard from "./BlogCard";

const BlogGrid = () => {
  return (
    <section id="blogs" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-12 text-center">
          <h2 className="font-display text-3xl font-bold text-foreground md:text-4xl">
            Latest <span className="text-primary">Guides & Blogs</span>
          </h2>
          <p className="mt-3 text-muted-foreground">
            Expert advice to help you navigate your study abroad journey
          </p>
        </div>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog, i) => (
            <BlogCard key={blog.id} blog={blog} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;
