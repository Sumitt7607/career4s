import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { motion } from "framer-motion";

const faqs = [
  { q: "What is Career4s?", a: "Career4s is India's leading admission consultancy specializing in post-graduation admissions across MBA, M.Tech, MCA, M.Sc, and 50+ other PG programs." },
  { q: "Is the initial consultation free?", a: "Yes! We offer a completely free first consultation where we analyse your profile and suggest the best colleges and courses for you." },
  { q: "Do you guarantee admission?", a: "While we cannot guarantee admission to specific colleges, our 98% success rate speaks for itself. We ensure you get into a college that matches your profile." },
  { q: "What are your fees?", a: "Our fees vary based on the services you choose. We offer transparent pricing with no hidden charges. Contact us for a detailed fee structure." },
  { q: "Do you help with education loans?", a: "Yes, we have partnerships with leading banks and NBFCs to help you secure education loans at competitive interest rates." },
  { q: "Can you help students from any city?", a: "Absolutely! We serve students across 30+ cities and also offer online consultations for students in remote locations." },
  { q: "How early should I start the process?", a: "We recommend starting at least 6-12 months before the admission cycle for the best results, but we also handle last-minute admissions." },
  { q: "Do you help with hostel and accommodation?", a: "Yes, we provide complete relocation support including hostel bookings, PG accommodations, and city orientation." },
];

const FAQSectionps = () => (
  <section id="faq" className="py-20 bg-background">
    <div className="container mx-auto px-4 max-w-3xl">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
        <span className="text-sm font-semibold text-primary uppercase tracking-widest">FAQ</span>
        <h2 className="text-3xl md:text-5xl font-display font-bold text-foreground mt-3">Frequently Asked <span className="text-gradient-saffron">Questions</span></h2>
      </motion.div>
      <Accordion type="single" collapsible className="space-y-3">
        {faqs.map((f, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="bg-card border border-border rounded-xl px-5">
            <AccordionTrigger className="font-display font-semibold text-foreground text-left">{f.q}</AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  </section>
);

export default FAQSectionps;
