const steps = [
  {
    step: "01",
    title: "Connect With Us",
    desc: "Call or WhatsApp our experts to get started with your admission journey.",
  },
  {
    step: "02",
    title: "Free Expert Counseling",
    desc: "Get personalized guidance based on your career goals and academic background.",
  },
  {
    step: "03",
    title: "Course & University Selection",
    desc: "We help you choose the best UGC-approved course and university.",
  },
  {
    step: "04",
    title: "Document Submission",
    desc: "Submit your documents online for quick verification.",
  },
  {
    step: "05",
    title: "Application & Fee Payment",
    desc: "We handle your application and assist with secure fee payment (EMI available).",
  },
  {
    step: "06",
    title: "Admission Confirmation",
    desc: "Receive your admission letter and start your learning journey.",
  },
];

const AdmissionProcessposdis = () => {
  return (
    <section id="process" className="section-padding bg-cream">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Admission Process
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Simple & Fast <span className="text-gradient-saffron">Process</span>
          </h2>
          <p className="text-muted-foreground mt-4">
            Get admission in top universities in just a few easy steps.
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-4xl mx-auto relative">

          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-border"></div>

          {steps.map((s, i) => (
            <div
              key={s.step}
              className={`flex items-start md:items-center gap-6 mb-12 ${
                i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >

              {/* Content */}
              <div className="flex-1">
                <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition duration-300">
                  <h3 className="text-lg font-bold text-foreground">
                    {s.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-2">
                    {s.desc}
                  </p>
                </div>
              </div>

              {/* Step Circle */}
              <div className="w-12 h-12 md:w-14 md:h-14 bg-gradient-saffron rounded-full flex items-center justify-center text-white font-bold text-sm md:text-lg shadow-lg z-10">
                {s.step}
              </div>

              {/* Empty Space */}
              <div className="flex-1 hidden md:block"></div>
            </div>
          ))}
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-12">
          <a
            href="https://wa.me/919650831008?text=Hello%20I%20want%20admission%20help"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg transition"
          >
            Get Free Counseling
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default AdmissionProcessposdis;