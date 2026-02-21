import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowUp } from "lucide-react";

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

interface LegalPageLayoutProps {
  title: string;
  lastUpdated: string;
  sections: Section[];
}

const AnimatedSection = ({ id, title, content, index }: Section & { index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 40 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      className="mb-10"
    >
      <h2 className="text-xl font-bold text-foreground mb-3 group cursor-default">
        <span className="border-b-2 border-primary/40 pb-1 group-hover:border-primary transition-colors duration-300">
          {title}
        </span>
      </h2>
      <div className="text-muted-foreground leading-relaxed space-y-3">{content}</div>
    </motion.section>
  );
};

const LegalPageLayout = ({ title, lastUpdated, sections }: LegalPageLayoutProps) => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
 <motion.header
  initial={{ opacity: 0, y: -30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="bg-gradient-to-r from-primary via-saffron-glow to-primary text-primary-foreground py-16 px-4"
>
        <div className="max-w-4xl mx-auto text-center">
          <Link to="/" className="text-sm font-medium opacity-80 hover:opacity-100 transition-opacity mb-4 inline-block">
            ← Back to Career4s
          </Link>
          <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight mb-3">{title}</h1>
          <p className="text-sm opacity-80">Last updated: {lastUpdated}</p>
        </div>
      </motion.header>

      <div className="max-w-4xl mx-auto px-4 py-12 flex flex-col lg:flex-row gap-10">
        {/* Table of Contents */}
        <motion.nav
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="lg:w-64 shrink-0"
        >
          <div className="lg:sticky lg:top-8">
            <h3 className="font-bold text-foreground mb-3 text-sm uppercase tracking-wider">Contents</h3>
            <ul className="space-y-2">
              {sections.map((s) => (
                <li key={s.id}>
                  <a
                    href={`#${s.id}`}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 block py-0.5"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById(s.id)?.scrollIntoView({ behavior: "smooth" });
                    }}
                  >
                    {s.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.nav>

        {/* Content */}
        <main className="flex-1 min-w-0">
          {sections.map((s, i) => (
            <AnimatedSection key={s.id} {...s} index={i} />
          ))}
        </main>
      </div>

      {/* Footer */}
      <footer className="border-t border-border bg-saffron-light py-8 px-4">
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Career4s. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/term" className="hover:text-primary transition-colors">Terms & Conditions</Link>
          </div>
        </div>
      </footer>

      {/* Back to top */}
      <motion.button
        initial={{ opacity: 0, scale: 0.8 }}
        animate={showTop ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 right-6 bg-primary text-primary-foreground p-3 rounded-full shadow-lg hover:shadow-xl transition-shadow z-50"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </motion.button>
    </div>
  );
};

export default LegalPageLayout;
