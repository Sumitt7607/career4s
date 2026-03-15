import React from "react";

const WebinarSection = () => {
  return (
    <section className="py-16 bg-orange-50">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-orange-600">
            Free Admission Webinar
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Join our daily webinar to learn about college admissions, entrance exams,
            and the best career options after 12th. Our experts guide students and
            answer live questions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* LEFT SIDE INFO */}
          <div className="space-y-5">

            <div className="flex items-start gap-4">
              <div className="text-2xl">🕒</div>
              <p className="text-gray-700">
                Webinar is conducted <strong>everyday at 3:00 PM</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📝</div>
              <p className="text-gray-700">
                First you need to <strong>fill the registration form</strong> to reserve your seat.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">📩</div>
              <p className="text-gray-700">
                After successful submission, you will get the <strong>meeting link</strong>.
              </p>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-2xl">🎓</div>
              <p className="text-gray-700">
                In the webinar we discuss <strong>college admissions, exams, scholarships and career guidance</strong>.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfKHT83haki-Yh1zDv4G-SM1dvSaseUyafvTXPl0kC1V6wNJA/viewform?usp=publish-editor
"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition"
            >
              Register for Webinar
            </a>

          </div>

          {/* RIGHT SIDE CARD */}
          <div className="bg-white shadow-lg rounded-xl p-8 border border-orange-100">

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Upcoming Session
            </h3>

            <div className="space-y-4 text-gray-700">

              <div>
                <p className="text-sm text-gray-500">Topic</p>
                <p className="font-medium">
                  College Admissions & Career Guidance
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Schedule</p>
                <p className="font-medium">
                  Everyday at 3:00 PM
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">Platform</p>
                <p className="font-medium">
                  Google Meet
                </p>
              </div>

            </div>
{/* 
            <a
              href="PASTE_YOUR_GOOGLE_FORM_LINK_HERE"
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center mt-6 bg-orange-500 text-white py-3 rounded-lg font-semibold hover:bg-orange-600 transition"
            >
              Join Webinar
            </a> */}

          </div>

        </div>

      </div>
    </section>
  );
};

export default WebinarSection;