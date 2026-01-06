import { Helmet } from "react-helmet";
import DocumentHero from "@/components/DocumentHero";
import RequiredDocuments from "@/components/RequiredDocuments";
import DocumentGuidelines from "@/components/DocumentGuidelines";
import SampleDocuments from "@/components/SampleDocuments";
import DocumentFAQ from "@/components/DocumentFAQ";
import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/Footer";

const Documents = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <Helmet>
        <title>Documents Required for College Admission in India 2024 | Admission India</title>
        <meta 
          name="description" 
          content="Complete checklist of documents required for college admission in India. Download sample formats, learn guidelines, and prepare your admission documents." 
        />
        <meta name="keywords" content="college admission documents, admission documents India, required documents for admission, admission checklist" />
      </Helmet>
      
      <main className="min-h-screen bg-background">
        <DocumentHero />
        <RequiredDocuments />
        <DocumentGuidelines />
        <SampleDocuments />
        <DocumentFAQ />
        
        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className={cn(
            "fixed bottom-6 right-6 p-3 rounded-full gradient-saffron text-primary-foreground shadow-saffron",
            "transition-all duration-300 hover:scale-110 z-50",
            showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      </main>
        <Footer />
    </>
  );
};

export default Documents;
