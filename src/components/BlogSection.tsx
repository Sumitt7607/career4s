import React from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "@/data/blogData";

const BlogSection = () => {
  return (
    <section id="blog" className="section-padding">
      <div className="container-wide">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-primary">
            Blog & Resources
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3 text-foreground">
            Latest Articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map((p) => (
            <Link to={`/blog/${p.slug}`} key={p.slug} className="block">
              <article className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-card-warm transition-all duration-200">
                <img
                  src={p.image}
                  alt={p.imageAlt}
                  loading="lazy"
                  className="h-40 w-full object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
                      {p.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {p.date}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {p.excerpt}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
