import React from "react";

const CountryComparisonSection = () => {
  return (
    <>
      {/* Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="text-center mb-14 animate-fadeIn">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Country <span className="text-orange-500">Comparison</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Compare key factors across top study destinations to find your best fit.
            </p>
          </div>

          {/* Table */}
          <div className="overflow-x-auto animate-slideUp">
            <table className="w-full bg-white rounded-2xl border border-orange-100 overflow-hidden text-sm shadow-sm">
              
              {/* Header */}
              <thead>
                <tr className="bg-orange-500 text-white">
                  <th className="px-4 py-3 text-left font-semibold">Factor</th>
                  <th className="px-4 py-3 text-center">🇺🇸 USA</th>
                  <th className="px-4 py-3 text-center">🇬🇧 UK</th>
                  <th className="px-4 py-3 text-center">🇨🇦 Canada</th>
                  <th className="px-4 py-3 text-center">🇩🇪 Germany</th>
                </tr>
              </thead>

              {/* Body */}
              <tbody>
                {[
                  ["Avg. MBA Cost", "$80-200K", "£40-90K", "CAD 50-100K", "€5-30K"],
                  ["MBA Duration", "2 Years", "1 Year", "1-2 Years", "1.5-2 Years"],
                  ["Post-Study Work", "1-3 Years (OPT)", "2 Years", "3 Years (PGWP)", "18 Months"],
                  ["PR Pathway", "Moderate", "Limited", "Excellent", "Good"],
                  ["Avg. Post-MBA Salary", "$150K+", "£70K+", "CAD 90K+", "€65K+"],
                  ["Living Cost/Month", "$2-3K", "£1.5-2.5K", "CAD 1.5-2K", "€800-1.2K"],
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
                        className={`px-4 py-3 ${
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

export default CountryComparisonSection;