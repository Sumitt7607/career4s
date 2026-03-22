import React from "react";

const ComparisonSectionabman = () => {
  return (
    <>
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              MBA vs MIM vs <span className="text-orange-500">EMBA</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Not sure which program is right for you? Compare the key differences.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto animate-slideUp">
            <table className="w-full bg-white rounded-2xl border border-orange-100 overflow-hidden shadow-sm text-sm">

              {/* Header */}
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="px-6 py-4 text-center font-semibold">MBA</th>
                  <th className="px-6 py-4 text-center font-semibold">MIM</th>
                  <th className="px-6 py-4 text-center font-semibold">EMBA</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {[
                  ["Duration", "1-2 Years", "1-2 Years", "18-24 Months"],
                  ["Work Experience", "3-5 Years", "0-2 Years", "8+ Years"],
                  ["Average Age", "27-30", "22-25", "35-40"],
                  ["Format", "Full-time", "Full-time", "Part-time/Modular"],
                  ["Avg. Cost", "$80K-$200K", "$20K-$80K", "$100K-$200K"],
                  ["GMAT Required", "Yes (680+)", "Optional/Lower", "Often Waived"],
                  ["Career Switch", "Ideal", "Good", "Not Typical"],
                  ["Avg. Salary Post", "$150K+", "$70K+", "$200K+"],
                ].map((row, i) => (
                  <tr
                    key={i}
                    className={`${
                      i % 2 === 0 ? "bg-orange-50" : "bg-white"
                    } border-t hover:bg-orange-100 transition`}
                  >
                    {row.map((cell, j) => (
                      <td
                        key={j}
                        className={`px-6 py-3 ${
                          j === 0
                            ? "font-semibold text-gray-800"
                            : "text-center text-gray-600"
                        }`}
                      >
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>

            </table>
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

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease forwards;
        }

        .animate-slideUp {
          animation: slideUp 1s ease forwards;
        }
      `}</style>
    </>
  );
};

export default ComparisonSectionabman;