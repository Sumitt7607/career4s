import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "Is distance education valid for government jobs?",
    a: "Yes! Distance education degrees from UGC-approved universities are valid for all government jobs, competitive exams, and further studies.",
  },
  {
    q: "Can I do a PG course while working?",
    a: "Absolutely! Distance education is designed for working professionals. You can study at your own pace without leaving your job.",
  },
  {
    q: "How long does the admission process take?",
    a: "With our fast-track process, you can get admitted within 24-48 hours after document submission and fee payment.",
  },
  {
    q: "Are EMI options available for fee payment?",
    a: "Yes, we offer flexible EMI options. You can pay semester-wise or via easy monthly installments.",
  },
  {
    q: "What is the difference between distance and online education?",
    a: "Distance education involves self-study with exams, while online includes live/recorded classes. Both are UGC-approved.",
  },
  {
    q: "Do I need to attend any physical classes?",
    a: "Most PG programs are fully online. Some universities may require exam center visits.",
  },
  {
    q: "Can I get a scholarship?",
    a: "Yes, scholarships are available for merit, SC/ST, and special categories. We help you apply.",
  },
  {
    q: "Is the degree accepted internationally?",
    a: "UGC-approved degrees are globally recognized, but acceptance varies by country.",
  },
  {
    q: "What study materials will I receive?",
    a: "You’ll get e-books, videos, LMS access, and complete digital study material.",
  },
  {
    q: "Can I change my course after admission?",
    a: "Yes, usually within the first semester (depends on university rules).",
  },
];

const FAQSectionposdis = () => {
  return (
    <section id="faq" className="section-padding bg-cream">
      <div className="container mx-auto max-w-3xl">

        {/* Heading */}
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            FAQs
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Frequently Asked{" "}
            <span className="text-gradient-saffron">
              Questions
            </span>
          </h2>
        </div>

        {/* Accordion */}
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="bg-white rounded-xl border px-6 
              hover:shadow-md transition duration-300"
            >
              <AccordionTrigger className="text-left font-semibold text-foreground hover:text-primary py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>


  
      </div>
    </section>
  );
};

export default FAQSectionposdis;