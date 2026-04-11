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
      "Ideally, you should start 6–12 months before the academic session begins. Early preparation gives you more options and better chances at top colleges.",
  },
  {
    category: "admission",
    question: "Do you help with entrance exam preparation as well?",
    answer:
      "While our core service is counselling, we guide you to the best preparation resources for exams like JEE, NEET, CUET, etc.",
  },
  {
    category: "eligibility",
    question: "What minimum marks are required for top colleges?",
    answer:
      "Top colleges usually expect 85%+, but many good colleges accept 60–75%. We help you choose the best option.",
  },
  {
    category: "eligibility",
    question: "Can I get admission without an entrance exam?",
    answer:
      "Yes, many private universities offer direct admission based on board marks and merit.",
  },
  {
    category: "fees",
    question: "What are your consultancy fees?",
    answer:
      "We offer affordable packages with a free initial consultation.",
  },
  {
    category: "fees",
    question: "Do you help with education loans?",
    answer:
      "Yes, we assist with loan documentation and connect you with banks.",
  },
  {
    category: "services",
    question: "Which colleges do you work with?",
    answer:
      "We work with 500+ colleges across India in all major streams.",
  },
  {
    category: "services",
    question: "Do you provide hostel assistance?",
    answer:
      "Yes, we help you find safe accommodation near your college.",
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
    <section className="relative py-20 px-4 bg-white overflow-hidden">
      
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-600/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />

      <div className="relative max-w-4xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-100 text-orange-600 mb-4">
            <MessageCircleQuestion className="w-4 h-4" />
            <span className="text-sm font-semibold uppercase">
              Got Questions?
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-700">
              Questions
            </span>
          </h2>

          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Everything you need to know about our counselling services.
          </p>
        </div>

        {/* Search */}
        <div className="relative max-w-xl mx-auto mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search your question..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                activeCategory === cat.id
                  ? "bg-gradient-to-r from-orange-500 to-orange-700 text-white"
                  : "bg-white border text-gray-600 hover:bg-orange-50"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* FAQ */}
        <Accordion type="single" collapsible className="space-y-3">
          {filteredFaqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border border-orange-200 rounded-xl px-6"
            >
              <AccordionTrigger className="py-5 font-semibold text-gray-900 hover:text-orange-600">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="pb-5 text-gray-600">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA */}
        <div className="mt-14 text-center">
          <div className="p-8 bg-orange-50 border rounded-2xl">
            <h3 className="text-xl font-bold mb-2 text-gray-900">
              Still have questions?
            </h3>

            <p className="text-gray-600 mb-5">
              Talk to our experts today.
            </p>

            <Button className="bg-gradient-to-r from-orange-500 to-orange-700 text-white px-6 py-3 rounded-xl">
              <Phone className="w-4 h-4 mr-2" />
              Contact Us
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default FAQSection;