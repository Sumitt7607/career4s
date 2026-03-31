import { Button } from "@/components/ui/button";
import { BookOpen, Clock, IndianRupee } from "lucide-react";

const courseCategories = [
  {
    title: "MBA Programs",
    courses: ["MBA - General", "MBA - Finance", "MBA - Marketing", "MBA - HR", "MBA - IT", "MBA - Hospital Management"],
    duration: "2 Years",
    fee: "₹30,000 - ₹1,50,000",
  },
  {
    title: "MCA Programs",
    courses: ["MCA - General", "MCA - Data Science", "MCA - AI & ML", "MCA - Cyber Security"],
    duration: "2 Years",
    fee: "₹25,000 - ₹1,20,000",
  },
  {
    title: "MA Programs",
    courses: ["MA - English", "MA - Hindi", "MA - Political Science", "MA - History", "MA - Economics", "MA - Psychology", "MA - Sociology", "MA - Public Administration"],
    duration: "2 Years",
    fee: "₹15,000 - ₹80,000",
  },
  {
    title: "M.Com Programs",
    courses: ["M.Com - General", "M.Com - Accounting", "M.Com - Finance", "M.Com - Banking"],
    duration: "2 Years",
    fee: "₹15,000 - ₹70,000",
  },
  {
    title: "M.Sc Programs",
    courses: ["M.Sc - Mathematics", "M.Sc - Physics", "M.Sc - Chemistry", "M.Sc - Computer Science", "M.Sc - Data Science"],
    duration: "2 Years",
    fee: "₹20,000 - ₹1,00,000",
  },
  {
    title: "MSW / Other PG",
    courses: ["MSW - Social Work", "M.Lib - Library Science", "MJMC - Journalism", "M.Ed - Education"],
    duration: "2 Years",
    fee: "₹20,000 - ₹90,000",
  },
];

const CoursesSectionposdis = () => {
  return (
    <section id="courses" className="section-padding bg-cream">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Our Courses
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Popular <span className="text-gradient-saffron">PG Courses</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Choose from 200+ UGC-approved distance education courses across top universities.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courseCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-background rounded-2xl overflow-hidden shadow-md 
              hover:shadow-xl transition-all duration-300 hover:-translate-y-1 
              h-full flex flex-col"
            >
              {/* Top */}
              <div className="bg-gradient-saffron p-4">
                <h3 className="text-lg font-bold font-display text-white flex items-center gap-2">
                  <BookOpen className="h-5 w-5" /> {cat.title}
                </h3>
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col">
                <ul className="space-y-2 flex-1">
                  {cat.courses.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-1">•</span> {c}
                    </li>
                  ))}
                </ul>

                {/* Bottom */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-border text-sm">
                  <span className="flex items-center gap-1 text-muted-foreground">
                    <Clock className="h-4 w-4" /> {cat.duration}
                  </span>
                  <span className="flex items-center gap-1 font-semibold text-primary">
                    <IndianRupee className="h-4 w-4" /> {cat.fee}
                  </span>
                </div>

                {/* <Button
                  variant="saffronOutline"
                  size="sm"
                  className="mt-4 w-full"
                  asChild
                >
                  <a
                    href="https://wa.me/919650831008?text=Hello%20I%20want%20course%20details"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Enquire Now
                  </a>
                </Button> */}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CoursesSectionposdis;