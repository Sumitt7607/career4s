import {
  FileText,
  GraduationCap,
  Calendar,
  CheckCircle2
} from "lucide-react";

const eligibility = [
  {
    icon: GraduationCap,
    title: "Educational Qualification",
    items: [
      "Bachelor's degree from a recognized university",
      "Minimum 50% aggregate (45% for reserved categories)",
      "Some courses accept lateral entry with work experience",
    ],
  },
  {
    icon: Calendar,
    title: "Age Criteria",
    items: [
      "No upper age limit for most distance PG courses",
      "Minimum 21 years for MBA programs",
      "Working professionals are welcome to apply",
    ],
  },
  {
    icon: FileText,
    title: "Documents Required",
    items: [
      "10th & 12th Mark Sheets",
      "Graduation Degree & Mark Sheets",
      "Aadhaar Card / ID Proof",
      "Passport Size Photos",
      "Migration / Transfer Certificate",
      "Caste Certificate (if applicable)",
    ],
  },
];

const EligibilitySectionposdis = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Requirements
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Eligibility &{" "}
            <span className="text-gradient-saffron">Documents</span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {eligibility.map(({ icon: Icon, title, items }) => (
            <div
              key={title}
              className="bg-secondary rounded-2xl p-8 h-full 
              shadow-md hover:shadow-xl transition duration-300 
              hover:-translate-y-1"
            >
              <Icon className="h-10 w-10 text-primary mb-4" />

              <h3 className="text-xl font-bold font-display text-foreground mb-4">
                {title}
              </h3>

              <ul className="space-y-3">
                {items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default EligibilitySectionposdis;