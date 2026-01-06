import { useState } from "react";
import { 
  GraduationCap, 
  User, 
  FileCheck, 
  Camera,
  ChevronDown,
  Check
} from "lucide-react";
import { cn } from "@/lib/utils";

const documentCategories = [
  {
    id: "academic",
    icon: GraduationCap,
    title: "Academic Documents",
    description: "Educational certificates and marksheets",
    color: "bg-primary/10 text-primary",
    documents: [
      { name: "10th Class Marksheet", required: true, note: "Original + 2 photocopies" },
      { name: "10th Class Certificate", required: true, note: "Board issued certificate" },
      { name: "12th Class Marksheet", required: true, note: "Original + 2 photocopies" },
      { name: "12th Class Certificate", required: true, note: "For UG admissions" },
      { name: "Graduation Degree/Provisional", required: false, note: "For PG admissions" },
      { name: "Migration Certificate", required: true, note: "From previous institution" },
      { name: "Transfer Certificate (TC)", required: true, note: "Counter-signed if applicable" },
    ],
  },
  {
    id: "identity",
    icon: User,
    title: "Identity & Address Proof",
    description: "Government-issued identification documents",
    color: "bg-blue-500/10 text-blue-600",
    documents: [
      { name: "Aadhaar Card", required: true, note: "Self-attested copy" },
      { name: "PAN Card", required: false, note: "For scholarship purposes" },
      { name: "Passport", required: false, note: "Required for international programs" },
      { name: "Domicile Certificate", required: true, note: "For state quota admissions" },
      { name: "Birth Certificate", required: false, note: "As age proof if needed" },
    ],
  },
  {
    id: "category",
    icon: FileCheck,
    title: "Category Certificates",
    description: "Reservation and quota related documents",
    color: "bg-green-500/10 text-green-600",
    documents: [
      { name: "Caste Certificate (SC/ST/OBC)", required: false, note: "Issued by Tehsildar" },
      { name: "EWS Certificate", required: false, note: "Valid for current financial year" },
      { name: "PWD Certificate", required: false, note: "40% or above disability" },
      { name: "Income Certificate", required: false, note: "For fee concession" },
      { name: "Non-Creamy Layer Certificate", required: false, note: "For OBC category" },
    ],
  },
  {
    id: "additional",
    icon: Camera,
    title: "Additional Documents",
    description: "Photographs and other supporting documents",
    color: "bg-purple-500/10 text-purple-600",
    documents: [
      { name: "Passport-size Photographs", required: true, note: "6-8 copies, white background" },
      { name: "Character Certificate", required: true, note: "From school/college principal" },
      { name: "Gap Certificate/Affidavit", required: false, note: "If gap in education" },
      { name: "Entrance Exam Scorecard", required: true, note: "JEE/NEET/CAT/GATE etc." },
      { name: "Provisional Allotment Letter", required: true, note: "From counseling portal" },
      { name: "Medical Fitness Certificate", required: false, note: "For medical/sports courses" },
    ],
  },
];

const RequiredDocuments = () => {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("academic");

  return (
    <section id="required" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Checklist
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Required Documents
          </h2>
          <p className="text-muted-foreground text-lg">
            Complete list of documents you need to prepare for your college admission. 
            Keep originals safe and carry multiple photocopies.
          </p>
        </div>

        {/* Document Categories */}
        <div className="max-w-4xl mx-auto space-y-4">
          {documentCategories.map((category, catIndex) => (
            <div
              key={category.id}
              className={cn(
                "border border-border rounded-xl overflow-hidden bg-card transition-all duration-300",
                expandedCategory === category.id && "shadow-saffron border-primary/30"
              )}
              style={{ animationDelay: `${catIndex * 0.1}s` }}
            >
              {/* Category Header */}
              <button
                onClick={() => setExpandedCategory(
                  expandedCategory === category.id ? null : category.id
                )}
                className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
              >
                <div className={cn("p-3 rounded-xl", category.color)}>
                  <category.icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {category.description}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-sm text-muted-foreground hidden sm:block">
                    {category.documents.length} documents
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      expandedCategory === category.id && "rotate-180"
                    )}
                  />
                </div>
              </button>

              {/* Documents List */}
              <div
                className={cn(
                  "overflow-hidden transition-all duration-300",
                  expandedCategory === category.id ? "max-h-[1000px]" : "max-h-0"
                )}
              >
                <div className="border-t border-border bg-muted/30 p-5">
                  <ul className="space-y-3">
                    {category.documents.map((doc, docIndex) => (
                      <li
                        key={doc.name}
                        className="flex items-start gap-3 p-3 rounded-lg bg-card border border-border/50 
                                 hover:border-primary/30 hover:shadow-sm transition-all duration-200"
                      >
                        <div className={cn(
                          "mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0",
                          doc.required 
                            ? "bg-primary/20 text-primary" 
                            : "bg-muted text-muted-foreground"
                        )}>
                          <Check className="w-3 h-3" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-medium text-foreground">
                              {doc.name}
                            </span>
                            {doc.required ? (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary font-medium">
                                Required
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 text-xs rounded-full bg-muted text-muted-foreground">
                                If Applicable
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-muted-foreground mt-1">
                            {doc.note}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pro Tip */}
        <div className="max-w-4xl mx-auto mt-10">
          <div className="flex items-start gap-4 p-5 rounded-xl bg-saffron-light border border-primary/20">
            <div className="p-2 rounded-lg bg-primary/20 text-primary flex-shrink-0">
              <FileCheck className="w-5 h-5" />
            </div>
            <div>
              <h4 className="font-semibold text-foreground mb-1">Pro Tip</h4>
              <p className="text-sm text-muted-foreground">
                Always carry your original documents along with 3-4 sets of self-attested photocopies. 
                Keep digital scans of all documents in your phone for quick reference.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RequiredDocuments;
