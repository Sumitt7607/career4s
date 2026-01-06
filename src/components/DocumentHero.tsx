import { FileText, CheckCircle, Download, BookOpen } from "lucide-react";

const quickLinks = [
  { icon: CheckCircle, label: "Required Documents", href: "#required" },
  { icon: BookOpen, label: "Guidelines", href: "#guidelines" },
  { icon: Download, label: "Sample Documents", href: "#samples" },
];

const DocumentHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-saffron-light via-background to-background py-20 lg:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-2xl translate-y-1/2 -translate-x-1/2" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6 opacity-0 animate-fade-up">
            <FileText className="w-4 h-4" />
            <span className="text-sm font-medium">Admission Documentation</span>
          </div>
          
          {/* Title */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-foreground mb-6 opacity-0 animate-fade-up stagger-1">
            Documents Required for{" "}
            <span className="text-gradient-saffron">College Admission</span>
          </h1>
          
          {/* Subtitle */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 opacity-0 animate-fade-up stagger-2">
            Your comprehensive guide to preparing all necessary documents for a successful admission process. 
            Stay organized and ensure a smooth application journey.
          </p>
          
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-4 opacity-0 animate-fade-up stagger-3">
            {quickLinks.map((link, index) => (
              <a
                key={link.label}
                href={link.href}
                className="group flex items-center gap-2 px-6 py-3 bg-card border border-border rounded-full 
                         hover:border-primary hover:shadow-saffron transition-all duration-300"
              >
                <link.icon className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
                <span className="font-medium text-foreground">{link.label}</span>
              </a>
            ))}
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-3xl mx-auto opacity-0 animate-fade-up stagger-4">
          {[
            { value: "15+", label: "Document Types" },
            { value: "5 Lakh+", label: "Students Helped" },
            { value: "500+", label: "Universities" },
            { value: "100%", label: "Verified Info" },
          ].map((stat, index) => (
            <div key={stat.label} className="text-center p-4">
              <div className="text-2xl md:text-3xl font-display font-bold text-primary mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DocumentHero;
