import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Search, MessageCircleQuestion, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const faqCategories = [
  { id: "all", label: "All" },
  { id: "admission", label: "Admission Process" },
  { id: "eligibility", label: "Eligibility" },
  { id: "fees", label: "Fees & Scholarships" },
  { id: "services", label: "Our Services" },
];

const faqs = [
  {
    category: "admission",
    question: "How does the college admission counselling process work?",
    answer:
      "We start with a one-on-one consultation to understand your academic profile, interests, and career goals. Then we shortlist colleges that match your profile, guide you through the application process, help with documentation, and support you until you secure admission.",
  },
  {
    category: "admission",
    question: "When should I start the admission process?",
    answer:
      "Ideally, you should start 6–12 months before the academic session begins. For engineering and medical admissions, start right after your board exams. Early preparation gives you more options and better chances at top colleges.",
  },
  {
    category: "admission",
    question: "Do you help with entrance exam preparation as well?",
    answer:
      "While our core service is admission counselling, we partner with reputed coaching institutes and can recommend the best preparation resources for exams like JEE, NEET, CUET, CAT, and state-level entrance tests.",
  },
  {
    category: "eligibility",
    question: "What minimum marks are required for top colleges?",
    answer:
      "Requirements vary by college and course. Generally, top-tier colleges expect 85%+ in board exams. However, many excellent colleges accept students with 60–75% marks. We help you find the best college that matches your academic profile.",
  },
  {
    category: "eligibility",
    question: "Can I get admission without an entrance exam?",
    answer:
      "Yes! Many private universities and colleges offer direct admission based on board exam scores and merit. We have tie-ups with several reputed institutions that offer management quota and direct admission seats.",
  },
  {
    category: "eligibility",
    question: "Is there an age limit for college admissions?",
    answer:
      "Age limits depend on the specific course and university regulations. Most undergraduate programs don't have strict age limits, but competitive exams like NEET may have specific age criteria. We'll guide you through all eligibility requirements.",
  },
  {
    category: "fees",
    question: "What are your consultancy fees?",
    answer:
      "Our consultation fees are affordable and vary based on the service package you choose. We offer a free initial consultation to understand your needs. Contact us for a detailed fee structure — we believe quality guidance should be accessible to all.",
  },
  {
    category: "fees",
    question: "Do you help with education loan assistance?",
    answer:
      "Absolutely! We assist students in securing education loans from leading banks and NBFCs. We help with documentation, guide you through the loan application process, and connect you with the right financial partners.",
  },
  {
    category: "fees",
    question: "Are there scholarships available through your consultancy?",
    answer:
      "We help identify and apply for merit-based, need-based, and sports scholarships offered by colleges and government bodies. Many of our students have secured partial to full scholarships at top institutions.",
  },
  {
    category: "services",
    question: "Which colleges and universities do you work with?",
    answer:
      "We work with 500+ colleges and universities across India, including top-ranked private and deemed universities. Our network spans engineering, medical, management, law, arts, and science colleges in all major cities.",
  },
  {
    category: "services",
    question: "Do you provide hostel and accommodation assistance?",
    answer:
      "Yes, we help students find safe and comfortable accommodation — whether it's on-campus hostels or nearby PG/rental options. We ensure you're settled comfortably before your classes begin.",
  },
  {
    category: "services",
    question: "What if I don't get admission in my preferred college?",
    answer:
      "We always prepare a backup plan with alternative colleges of similar ranking. Our high success rate of 98% ensures that every student gets placed in a good institution. We work with you until you're admitted.",
  },
];

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "all" || faq.category === activeCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="relative py-20 px-4 overflow-hidden bg-faq-gradient">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-saffron/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-saffron-deep/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-saffron/15 text-saffron-deep mb-4">
            <MessageCircleQuestion className="w-4 h-4" />
            <span className="text-sm font-semibold tracking-wide uppercase">
              Got Questions?
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-foreground mb-4 tracking-tight">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-saffron to-saffron-deep">
              Questions
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need to know about our college admission counselling
            services. Can't find your answer? Reach out to us!
          </p>
        </div>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-saffron/30 bg-background/80 backdrop-blur-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-saffron/50 focus:border-saffron transition-all duration-300"
          />
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-saffron to-saffron-deep text-white shadow-lg shadow-saffron/25"
                  : "bg-background/60 text-muted-foreground hover:bg-saffron/10 hover:text-saffron-deep border border-border"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <Accordion type="single" collapsible className="space-y-3">
            {filteredFaqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="border border-saffron/20 rounded-xl px-6 bg-background/70 backdrop-blur-sm hover:border-saffron/40 hover:shadow-md hover:shadow-saffron/5 transition-all duration-300 overflow-hidden"
                style={{ animationDelay: `${0.05 * index}s` }}
              >
                <AccordionTrigger className="text-left text-base font-semibold text-foreground hover:text-saffron-deep hover:no-underline py-5 [&[data-state=open]]:text-saffron-deep">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {filteredFaqs.length === 0 && (
            <div className="text-center py-12 text-muted-foreground">
              <MessageCircleQuestion className="w-12 h-12 mx-auto mb-3 opacity-40" />
              <p className="text-lg font-medium">No questions found</p>
              <p className="text-sm">Try a different search or category</p>
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="mt-14 text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-saffron/10 to-saffron-deep/10 border border-saffron/20">
            <h3 className="text-xl font-bold text-foreground mb-2">
              Still have questions?
            </h3>
            <p className="text-muted-foreground mb-5">
              Our expert counsellors are here to help you with your college
              admission journey.
            </p>
            <Button className="bg-gradient-to-r from-saffron to-saffron-deep hover:from-saffron-deep hover:to-saffron text-white px-8 py-3 rounded-xl shadow-lg shadow-saffron/25 transition-all duration-300 hover:shadow-xl hover:shadow-saffron/30 hover:-translate-y-0.5">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us Today
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
