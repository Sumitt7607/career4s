import React from "react";
import { FileText, GraduationCap, Award, ClipboardCheck } from "lucide-react";

const EligibilitySectionabman = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Eligibility <span className="text-orange-500">Criteria</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              General eligibility requirements for management programs abroad. Specific criteria vary by university.
            </p>
          </div>

          {/* Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: GraduationCap,
                title: "Academic Background",
                items: [
                  "Bachelor's degree (any discipline)",
                  "Minimum GPA: 3.0/4.0 (varies)",
                  "Academic transcripts required",
                ],
              },
              {
                icon: FileText,
                title: "Test Scores",
                items: [
                  "GMAT: 600+ (top schools 700+)",
                  "GRE: Accepted by most schools",
                  "IELTS: 6.5+ / TOEFL: 90+",
                ],
              },
              {
                icon: Award,
                title: "Work Experience",
                items: [
                  "MBA: 2-5 years preferred",
                  "MIM: 0-2 years",
                  "EMBA: 8+ years",
                ],
              },
              {
                icon: ClipboardCheck,
                title: "Documents Required",
                items: [
                  "Statement of Purpose",
                  "Letters of Recommendation (2-3)",
                  "Updated Resume/CV",
                  "Academic Transcripts",
                ],
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white border border-orange-100 rounded-2xl p-6 
                           hover:shadow-xl hover:border-orange-400 hover:-translate-y-1 
                           transition-all duration-300 animate-card"
              >
                {/* Icon */}
                <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="text-white" size={22} />
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-gray-800 mb-4">
                  {item.title}
                </h3>

                {/* List */}
                <ul className="space-y-2">
                  {item.items.map((it, j) => (
                    <li
                      key={j}
                      className="text-sm text-gray-600 flex items-start gap-2"
                    >
                      <span className="text-orange-500 mt-1">•</span> {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Animation CSS */}
      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes cardAnim {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-card {
          animation: cardAnim 0.8s ease forwards;
        }
      `}</style>
    </>
  );
};

export default EligibilitySectionabman;