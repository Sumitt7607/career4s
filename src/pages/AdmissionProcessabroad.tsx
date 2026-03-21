const steps = [
  { num: "01", title: "Free Consultation", desc: "Share your academic background, interests, and aspirations. We assess your profile." },
  { num: "02", title: "Profile Evaluation", desc: "Comprehensive analysis of your GPA, test scores, extracurriculars, and research experience." },
  { num: "03", title: "University Shortlisting", desc: "Curated list of dream, target, and safe universities based on your profile and preferences." },
  { num: "04", title: "Document Preparation", desc: "SOP writing, LOR guidance, resume building, and all required documentation." },
  { num: "05", title: "Application Submission", desc: "Timely and error-free submission of applications across all shortlisted universities." },
  { num: "06", title: "Scholarship Applications", desc: "Identify and apply for all eligible scholarship and financial aid opportunities." },
  { num: "07", title: "Interview Preparation", desc: "Mock interviews and coaching for university and visa interviews." },
  { num: "08", title: "Visa Processing", desc: "Complete visa documentation, application filing, and interview preparation." },
  { num: "09", title: "Pre-Departure Briefing", desc: "Packing tips, cultural orientation, banking setup, and travel arrangements." },
  { num: "10", title: "Post-Arrival Support", desc: "Airport pickup coordination, initial settlement support, and ongoing mentorship." },
];

export default function AdmissionProcessabroad() {
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
            Process
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Your 10-Step Journey to Studying Abroad
          </h2>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="flex gap-4 p-6 rounded-xl bg-white border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              {/* Number Circle */}
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-orange-500 text-white flex items-center justify-center font-bold">
                {s.num}
              </div>

              {/* Content */}
              <div>
                <h3 className="font-semibold text-gray-900">
                  {s.title}
                </h3>
                <p className="text-sm text-gray-600 mt-1">
                  {s.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}