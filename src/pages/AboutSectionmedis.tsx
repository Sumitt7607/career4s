const AboutSectionmedis = () => (
  <section id="about" className="py-16 bg-white">
    <div className="container mx-auto px-4">
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        
        {/* Image from Unsplash */}
        <div>
          <img
            src="https://th.bing.com/th/id/OIP.ZXUXXfmR8QxEGLg2L3dk-QHaEJ?o=7rm=3&rs=1&pid=ImgDetMain&o=7&rm=3"
            alt="Medical Campus"
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Content */}
        <div className="space-y-5">
          
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            About MedAdmissions
          </h2>

          <p className="text-gray-600 leading-relaxed">
            MedAdmissions is a trusted medical admission consultancy helping
            students secure seats in top medical and paramedical colleges across
            India. We guide students through every step of the admission process,
            ensuring transparency, reliability, and success.
          </p>

          <p className="text-gray-600 leading-relaxed">
            Our expertise lies in counseling, college selection, and complete
            admission assistance for distance, online, and regular programs.
            Whether you're a student or a working professional, we make medical
            education accessible and hassle-free.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-4 mt-6">
            {[
              { num: "30+", label: "expert counsellors" },
              { num: "10,000+", label: "Students Guided" },
              { num: "5+", label: "Branches" },
              { num: "24/7", label: "Admission Support" },
            ].map((s) => (
              <div
                key={s.label}
                className="bg-orange-50 border border-orange-100 rounded-xl p-4 text-center hover:shadow-md transition"
              >
                <div className="text-2xl font-bold text-orange-600">
                  {s.num}
                </div>
                <div className="text-sm text-gray-600">
                  {s.label}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </div>
  </section>
);

export default AboutSectionmedis;