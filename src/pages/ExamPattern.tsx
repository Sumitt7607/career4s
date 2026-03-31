import {
  CheckCircle,
  Laptop,
  FileText,
  PenTool,
  BookOpen
} from "lucide-react";

const ExamPattern = () => {
  const data = [
    {
      icon: Laptop,
      title: "Online Exams",
      desc: "Most universities now conduct exams online from home.",
    },
    {
      icon: PenTool,
      title: "Assignments",
      desc: "Internal assessments through assignments and projects.",
    },
    {
      icon: FileText,
      title: "Semester System",
      desc: "Courses divided into semesters with periodic evaluations.",
    },
    {
      icon: BookOpen,
      title: "Open Book Tests",
      desc: "Some universities offer open-book examination format.",
    },
    {
      icon: CheckCircle,
      title: "MCQ Based",
      desc: "Multiple choice questions for faster evaluation.",
    },
  ];

  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Assessments
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Exam{" "}
            <span className="text-gradient-saffron">
              Pattern & Assessment
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {data.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-5 bg-secondary rounded-xl 
              shadow-md hover:shadow-xl transition duration-300 
              hover:-translate-y-1"
            >
              <Icon className="h-6 w-6 text-primary flex-shrink-0 mt-1" />

              <div>
                <h3 className="font-bold text-foreground">{title}</h3>
                <p className="text-sm text-muted-foreground mt-1">
                  {desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <a
            href="https://wa.me/919650831008?text=Hello%20I%20want%20exam%20details"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Get Exam Details
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default ExamPattern;