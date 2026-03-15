import React, { useEffect, useState } from "react";

import { BlogSection } from "@/data/blogData";

interface TableOfContentsProps {
  sections: BlogSection[];
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ sections }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        });
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );

    sections.forEach((_, i) => {
      const el = document.getElementById(`section-${i}`);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [sections]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav className="sticky top-24" aria-label="Table of Contents">
      <h4 className="font-display text-sm font-bold text-foreground uppercase tracking-wider mb-4">
        Table of Contents
      </h4>
      <ul className="space-y-2 border-l-2 border-border">
        {sections.map((section, i) => {
          const id = `section-${i}`;
          const isActive = activeId === id;
          return (
            <li key={i}>
              <button
                onClick={() => scrollTo(id)}
                className={`block text-left text-sm pl-4 py-1 -ml-[2px] border-l-2 transition-colors duration-200 ${
                  isActive
                    ? "border-primary text-primary font-medium"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {section.heading}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default TableOfContents;
