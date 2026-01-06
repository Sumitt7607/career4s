import { useState } from "react";
import { 
  FileImage, 
  PenTool, 
  AlertCircle, 
  Smartphone, 
  ShieldCheck,
  ChevronDown,
  CheckCircle2
} from "lucide-react";
import { cn } from "@/lib/utils";

const guidelines = [
  {
    id: "format",
    icon: FileImage,
    title: "Document Format Requirements",
    content: [
      "All photocopies should be on A4 size paper",
      "Documents should be clear and legible with no torn edges",
      "Color photocopies preferred for marksheets and certificates",
      "Photographs: 3.5cm x 4.5cm, white background, recent (within 6 months)",
      "PDF scans should be 150-300 DPI for clarity",
      "Each document file size: maximum 500KB for online submissions",
    ],
  },
  {
    id: "attestation",
    icon: PenTool,
    title: "Attestation Guidelines",
    content: [
      "Self-Attestation: Sign with date on each photocopy saying 'Self-Attested'",
      "Gazetted Officer: Required for category certificates and affidavits",
      "Notary Attestation: Needed for gap year affidavits and undertakings",
      "Write 'True Copy' along with signature for legal documents",
      "College verification: Original documents verified and returned same day",
      "Keep original attestation letters for future reference",
    ],
  },
  {
    id: "mistakes",
    icon: AlertCircle,
    title: "Common Mistakes to Avoid",
    content: [
      "Don't submit expired certificates (especially EWS valid for 1 year)",
      "Avoid name mismatches across documents - use affidavit if needed",
      "Don't forget to get TC counter-signed from DEO if changing state",
      "Never submit unclear or blurred photocopies",
      "Don't miss provisional certificate if final degree not issued",
      "Avoid last-minute preparation - start collecting documents early",
    ],
  },
  {
    id: "digital",
    icon: Smartphone,
    title: "Digital Document Preparation",
    content: [
      "Use CamScanner or Adobe Scan for high-quality mobile scans",
      "File naming convention: Name_DocumentType_Year (e.g., Rahul_12thMarksheet_2024)",
      "Keep all files in a single folder with clear subfolders",
      "Store backup copies in Google Drive or DigiLocker",
      "Maintain both JPG and PDF versions of each document",
      "Verify DigiLocker integration for direct verification by universities",
    ],
  },
  {
    id: "verification",
    icon: ShieldCheck,
    title: "Verification Process",
    content: [
      "Original documents are verified during admission counseling",
      "Board verification takes 7-15 days after admission",
      "Online verification through NAD (National Academic Depository)",
      "Keep contact details of previous institutions for verification queries",
      "University may directly contact your school for confirmation",
      "Collect receipt for every original document submitted",
    ],
  },
];

const DocumentGuidelines = () => {
  const [expandedId, setExpandedId] = useState<string | null>("format");

  return (
    <section id="guidelines" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Guidelines
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Document Preparation Guidelines
          </h2>
          <p className="text-muted-foreground text-lg">
            Follow these guidelines to ensure your documents meet all requirements 
            and avoid rejection during the admission process.
          </p>
        </div>

        {/* Accordion Guidelines */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {guidelines.map((guideline, index) => (
              <div
                key={guideline.id}
                className={cn(
                  "border border-border rounded-xl overflow-hidden bg-card transition-all duration-300",
                  expandedId === guideline.id && "shadow-lg border-primary/30"
                )}
              >
                <button
                  onClick={() => setExpandedId(
                    expandedId === guideline.id ? null : guideline.id
                  )}
                  className="w-full flex items-center gap-4 p-5 text-left hover:bg-muted/50 transition-colors"
                >
                  <div className="p-3 rounded-xl bg-primary/10 text-primary">
                    <guideline.icon className="w-6 h-6" />
                  </div>
                  <span className="flex-1 text-lg font-semibold text-foreground">
                    {guideline.title}
                  </span>
                  <ChevronDown
                    className={cn(
                      "w-5 h-5 text-muted-foreground transition-transform duration-300",
                      expandedId === guideline.id && "rotate-180"
                    )}
                  />
                </button>

                <div
                  className={cn(
                    "overflow-hidden transition-all duration-300",
                    expandedId === guideline.id ? "max-h-[600px]" : "max-h-0"
                  )}
                >
                  <div className="border-t border-border p-5 bg-muted/20">
                    <ul className="space-y-3">
                      {guideline.content.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3"
                        >
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-foreground/90">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quick Tips Grid */}
        <div className="max-w-4xl mx-auto mt-14">
          <h3 className="text-xl font-display font-semibold text-foreground mb-6 text-center">
            Quick Tips for Success
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { emoji: "📁", tip: "Create a checklist and tick off each document" },
              { emoji: "📱", tip: "Save digital copies in DigiLocker" },
              { emoji: "📅", tip: "Check validity dates of all certificates" },
              { emoji: "✍️", tip: "Ensure consistent name spelling" },
              { emoji: "📋", tip: "Keep 5 sets of photocopies ready" },
              { emoji: "🔍", tip: "Verify information matches across all docs" },
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-3 p-4 rounded-xl bg-card border border-border 
                         hover:border-primary/30 hover:shadow-sm transition-all duration-200"
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-sm text-foreground/90">{item.tip}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DocumentGuidelines;
