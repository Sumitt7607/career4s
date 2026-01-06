import { 
  Download, 
  FileText, 
  FileSpreadsheet, 
  FileSignature,
  ExternalLink,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const sampleDocuments = [
  {
    id: 1,
    title: "Application Form Template",
    description: "Standard college admission application form with all required fields",
    type: "PDF",
    icon: FileText,
    category: "Forms",
    popular: true,
  },
  {
    id: 2,
    title: "Gap Year Affidavit",
    description: "Legal affidavit format for students with educational gaps",
    type: "DOC",
    icon: FileSignature,
    category: "Affidavit",
    popular: true,
  },
  {
    id: 3,
    title: "Character Certificate",
    description: "Template for character certificate from institution head",
    type: "PDF",
    icon: FileText,
    category: "Certificate",
    popular: false,
  },
  {
    id: 4,
    title: "Anti-Ragging Undertaking",
    description: "Mandatory anti-ragging declaration for students and parents",
    type: "PDF",
    icon: FileSignature,
    category: "Undertaking",
    popular: true,
  },
  {
    id: 5,
    title: "Medical Fitness Format",
    description: "Standard medical fitness certificate format for admissions",
    type: "PDF",
    icon: FileText,
    category: "Certificate",
    popular: false,
  },
  {
    id: 6,
    title: "Income Declaration",
    description: "Self-declaration format for family income details",
    type: "DOC",
    icon: FileSpreadsheet,
    category: "Declaration",
    popular: false,
  },
  {
    id: 7,
    title: "Hostel Application",
    description: "Standard hostel accommodation request form",
    type: "PDF",
    icon: FileText,
    category: "Forms",
    popular: false,
  },
  {
    id: 8,
    title: "Name Correction Affidavit",
    description: "Affidavit for name/DOB correction across documents",
    type: "DOC",
    icon: FileSignature,
    category: "Affidavit",
    popular: true,
  },
];

const categories = ["All", "Forms", "Affidavit", "Certificate", "Declaration", "Undertaking"];

const SampleDocuments = () => {
  return (
    <section id="samples" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Downloads
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Sample Documents & Templates
          </h2>
          <p className="text-muted-foreground text-lg">
            Download ready-to-use templates and sample documents. 
            Fill in your details and submit with your application.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-all duration-200",
                category === "All"
                  ? "bg-primary text-primary-foreground shadow-saffron"
                  : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
              )}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {sampleDocuments.map((doc, index) => (
            <div
              key={doc.id}
              className="group relative bg-card border border-border rounded-xl p-5 
                       hover:border-primary/30 hover:shadow-saffron transition-all duration-300"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              {/* Popular Badge */}
              {doc.popular && (
                <span className="absolute -top-2 -right-2 px-2 py-1 text-xs font-medium 
                               bg-primary text-primary-foreground rounded-full shadow-lg">
                  Popular
                </span>
              )}

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 
                            group-hover:bg-primary/20 transition-colors">
                <doc.icon className="w-6 h-6 text-primary" />
              </div>

              {/* Content */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {doc.type}
                  </span>
                  <span className="px-2 py-0.5 text-xs rounded bg-muted text-muted-foreground">
                    {doc.category}
                  </span>
                </div>
                <h3 className="font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {doc.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {doc.description}
                </p>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex-1 gap-1.5 hover:border-primary hover:text-primary"
                >
                  <Eye className="w-4 h-4" />
                  Preview
                </Button>
                <Button
                  size="sm"
                  className="flex-1 gap-1.5 gradient-saffron border-0 hover:opacity-90"
                >
                  <Download className="w-4 h-4" />
                  Download
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* DigiLocker CTA */}
        {/* <div className="max-w-4xl mx-auto mt-14">
          <div className="flex flex-col md:flex-row items-center gap-6 p-6 rounded-2xl bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border border-primary/20">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
              <FileSignature className="w-8 h-8 text-primary" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-lg font-semibold text-foreground mb-1">
                
              </h3>
              <p className="text-muted-foreground">
                Get verified digital documents directly from issuing authorities. 
                Accepted by all government universities and many private institutions.
              </p>
            </div>
            <Button
              variant="outline"
              className="flex-shrink-0 gap-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
            >
              Visit DigiLocker
              <ExternalLink className="w-4 h-4" />
            </Button>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default SampleDocuments;
