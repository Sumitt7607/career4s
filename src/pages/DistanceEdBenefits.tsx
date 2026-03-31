import {
  Laptop,
  BookOpen,
  Video,
  Headphones,
  FileText,
  Users
} from "lucide-react";

const benefits = [
  {
    icon: Laptop,
    title: "Study From Anywhere",
    desc: "Access course materials and attend classes from anywhere with internet.",
  },
  {
    icon: BookOpen,
    title: "UGC-DEB Approved",
    desc: "All courses are approved by UGC Distance Education Bureau.",
  },
  {
    icon: Video,
    title: "Recorded Lectures",
    desc: "Watch video lectures at your own pace, anytime, anywhere.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    desc: "Get help from dedicated student support executives throughout.",
  },
  {
    icon: FileText,
    title: "Valid Degree",
    desc: "Distance degrees hold the same value as regular degrees for jobs & further studies.",
  },
  {
    icon: Users,
    title: "Work + Study",
    desc: "Perfect for working professionals who want to upgrade qualifications.",
  },
];

const DistanceEdBenefits = () => {
  return (
    <section className="section-padding bg-cream">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Distance Learning
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Benefits of{" "}
            <span className="text-gradient-saffron">
              Distance Education
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="flex gap-4 p-6 bg-white rounded-2xl 
              shadow-md hover:shadow-xl transition duration-300 
              hover:-translate-y-1"
            >
              <div className="w-12 h-12 bg-gradient-saffron rounded-xl flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-white" />
              </div>

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
                href="https://wa.me/919650831008?text=Hello%20I%20want%20distance%20education%20details"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg transition"
            >
                Get Free Guidance
            </a>
            </div> */}

      </div>
    </section>
  );
};

export default DistanceEdBenefits;