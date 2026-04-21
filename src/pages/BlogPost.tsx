import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getRelatedPosts , getPostBySlug } from "@/data/blogData";
import TableOfContents from "@/components/TableOfContents";


const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug || "");

  if (!post) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-display font-bold text-foreground mb-4">Article Not Found</h1>
          <Link to="/" className="text-primary hover:underline">← Back to Home</Link>
        </div>
      </div>
    );
  }

  const related = getRelatedPosts(post.slug);

  return (
    <>
      {/* SEO meta via document title */}
      <MetaHead post={post} />

      <article className="min-h-screen bg-background">
        {/* Breadcrumbs + Back */}
        <div className="border-b border-border">
          <div className="container-wide section-padding !py-4">
            <nav className="flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
              <Link to="/" className="hover:text-primary transition-colors duration-200">Home</Link>
              <span>/</span>
              <Link to="/#blog" className="hover:text-primary transition-colors duration-200">Blog</Link>
              <span>/</span>
              <span className="text-foreground font-medium truncate max-w-[200px]">{post.title}</span>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <motion.header
          className="section-padding !pb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <div className="container-reading">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs font-medium text-primary bg-primary/10 px-3 py-1 rounded-full inline-flex items-center gap-1">
                <Tag className="w-3 h-3" />
                {post.category}
              </span>
              <span className="text-xs text-muted-foreground inline-flex items-center gap-1">
                <Calendar className="w-3 h-3" />
                {post.date}
              </span>
            </div>

            <h1 className="text-3xl md:text-5xl font-display font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>
          </div>

          <div className="container-wide mt-8">
            <img
              src={post.image}
              alt={post.imageAlt}
              className="w-full rounded-xl object-cover max-h-[400px]"
              loading="eager"
            />
          </div>
        </motion.header>

        {/* Content + Sidebar */}
        <div className="container-wide section-padding !pt-0">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_260px] gap-12">
            {/* Main Content */}
            <motion.div
              className="container-reading lg:max-w-none"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.1 }}
            >
              {post.content.map((section, i) => (
                <section key={i} id={`section-${i}`} className="mb-10 scroll-mt-24">
                  <h2 className="text-xl md:text-2xl font-display font-bold text-foreground mb-4">
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((p, j) => (
                    <p key={j} className="text-foreground/90 leading-relaxed mb-4 font-body">
                      {p}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 mb-4 ml-1">
                      {section.bullets.map((b, k) => (
                        <li key={k} className="flex gap-3 text-foreground/90 leading-relaxed font-body">
                          <span className="text-primary mt-1.5 shrink-0">•</span>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}

              {/* Back link */}
              <div className="pt-8 border-t border-border">
                <Link
                  to="/#blog"
                  className="inline-flex items-center gap-2 text-primary hover:underline font-medium transition-colors duration-200"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to All Articles
                </Link>
              </div>
            </motion.div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <TableOfContents sections={post.content} />
            </aside>
          </div>
        </div>

        {/* Related Articles */}
        <section className="section-padding bg-secondary/50">
          <div className="container-wide">
            <h2 className="text-2xl font-display font-bold text-foreground mb-8">
              Related Articles
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {related.map((r) => (
                <Link to={`/blog/${r.slug}`} key={r.slug} className="block">
                  <article className="group rounded-xl border border-border bg-card overflow-hidden hover:shadow-card-warm transition-all duration-200">
                    <img
                      src={r.image}
                      alt={r.imageAlt}
                      loading="lazy"
                      className="h-36 w-full object-cover"
                    />
                    <div className="p-5">
                      <span className="text-xs font-medium text-primary">{r.category}</span>
                      <h3 className="font-display text-base font-semibold text-foreground mt-1 group-hover:text-primary transition-colors duration-200">
                        {r.title}
                      </h3>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Newsletter CTA */}
        <section className="section-padding">
          <div className="container-reading text-center">
            <h2 className="text-2xl font-display font-bold text-foreground mb-3">
              Stay Updated on Exam Alerts & College News
            </h2>
            <p className="text-muted-foreground mb-6">
              Get the latest updates on entrance exams, admission deadlines, and career guidance delivered to your inbox.
            </p>
            <form
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
              onSubmit={(e) => {
                e.preventDefault();
                const email = (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value;
                if (!email) return;
                const message = `Newsletter Subscription Request from Career4S:\n\nEmail: ${email}`;
                const encodedMessage = encodeURIComponent(message);
                window.open(`https://wa.me/919910992965?text=${encodedMessage}`, "_blank");
                (e.currentTarget.elements.namedItem("email") as HTMLInputElement).value = "";
              }}
            >
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/30"
                aria-label="Email address for newsletter"
                required
              />
              <button
                type="submit"
                className="px-6 py-3 rounded-lg bg-accent text-accent-foreground font-semibold hover:bg-accent/90 transition-colors duration-200"
              >
                Subscribe
              </button>
            </form>
          </div>
        </section>
      </article>
    </>
  );
};

/* Lightweight meta head component */
const MetaHead: React.FC<{ post: ReturnType<typeof getPostBySlug> }> = ({ post }) => {
  React.useEffect(() => {
    if (!post) return;
    document.title = `${post.title} | EduPortal`;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", name);
        document.head.appendChild(el);
      }
      el.setAttribute("content", content);
    };
    setMeta("description", post.metaDescription);
    setMeta("keywords", post.keywords.join(", "));
  }, [post]);
  return null;
};

export default BlogPost;
