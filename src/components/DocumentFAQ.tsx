import { useState } from "react";
import { ChevronDown, MessageCircle, Phone, Mail } from "lucide-react";
import { cn } from "@/lib/utils";

const faqs = [
  {
    question: "What if my name is different across documents?",
    answer: "You need to submit a Name Correction Affidavit on a ₹100 stamp paper, attested by a Notary. The affidavit should list all name variations and declare your correct legal name as per Aadhaar.",
  },
  {
    question: "Are self-attested photocopies acceptable?",
    answer: "Yes, most universities accept self-attested photocopies. Sign each copy with 'Self-Attested' written below your signature along with the date. Original documents are verified during physical admission.",
  },
  {
    question: "How do I get documents if my school/college has closed?",
    answer: "Contact the District Education Office (DEO) of the area where your school was located. They maintain records of closed institutions. You can also check if records were transferred to any nearby government school.",
  },
  {
    question: "Is DigiLocker document valid for admission?",
    answer: "Yes, DigiLocker documents are legally valid and accepted by most universities. They carry the same value as physical documents as per the IT Act 2000. However, keep physical copies as backup.",
  },
  {
    question: "What's the validity of EWS certificate?",
    answer: "EWS certificate is valid for 1 financial year (April 1 to March 31). You need to renew it every year. For admissions, ensure your certificate is valid for the current admission year.",
  },
  {
    question: "Can I submit documents after the admission deadline?",
    answer: "Most universities provide a grace period of 7-15 days for document submission after seat confirmation. However, fee payment must be done by the deadline. Check the specific university guidelines.",
  },
];

const DocumentFAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-14">
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              FAQs
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Common queries about admission documents answered by our experts.
            </p>
          </div>

          {/* FAQ Accordion */}
          <div className="space-y-3 mb-14">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className={cn(
                  "border border-border rounded-xl overflow-hidden bg-card transition-all duration-300",
                  openIndex === index && "border-primary/30 shadow-sm"
                )}
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <span className="flex-1 font-medium text-foreground">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-primary transition-transform duration-300 flex-shrink-0",
                      openIndex === index && "rotate-180"
                    )}
                  />
                </button>
                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    openIndex === index ? "max-h-48" : "max-h-0"
                  )}
                >
                  <div className="px-5 pb-5 text-muted-foreground">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="bg-card border border-border rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                Still Have Questions?
              </h3>
              <p className="text-muted-foreground">
                Our admission counselors are here to help you with document-related queries.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-3 gap-4">
              <a
                href="#"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 
                         border border-transparent hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Live Chat</div>
                  <div className="text-sm text-muted-foreground">Chat with us</div>
                </div>
              </a>
              
              <a
                href="tel:+911800123456"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 
                         border border-transparent hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Call Us</div>
                  <div className="text-sm text-muted-foreground">1800-123-456</div>
                </div>
              </a>
              
              <a
                href="mailto:help@admissionindia.com"
                className="flex items-center gap-3 p-4 rounded-xl bg-muted/50 hover:bg-primary/10 
                         border border-transparent hover:border-primary/30 transition-all duration-200 group"
              >
                <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="font-medium text-foreground">Email</div>
                  <div className="text-sm text-muted-foreground">Get support</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentFAQ;
