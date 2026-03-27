import React from "react";

const counsellingTypes = [
  {
    title: "AIQ Counselling (15%)",
    points: [
      "Conducted by MCC (Medical Counselling Committee)",
      "Covers 15% seats of all Government Colleges",
      "Open for students across India",
      "Includes Central Universities (BHU, AMU, DU)",
      "No domicile required",
    ],
    icon: "🇮🇳",
  },
  {
    title: "State Counselling (85%)",
    points: [
      "Conducted by respective state authorities",
      "Covers 85% seats of state government colleges",
      "Domicile required for eligibility",
      "Includes private colleges in the state",
      "Fees varies state-wise",
    ],
    icon: "🏛️",
  },
  {
    title: "Deemed Universities",
    points: [
      "Counselling conducted by MCC",
      "Open to all India students",
      "Higher fee structure compared to govt colleges",
      "Includes colleges like Manipal, SRM",
      "No domicile restriction",
    ],
    icon: "🏫",
  },
  {
    title: "Private Colleges",
    points: [
      "Covered under state counselling",
      "Higher fees than government colleges",
      "Management quota seats available",
      "Eligibility depends on state rules",
      "Good infrastructure & facilities",
    ],
    icon: "💼",
  },
  {
    title: "Central Universities",
    points: [
      "Includes BHU, AMU, DU medical colleges",
      "Counselling via MCC",
      "All India eligibility",
      "High cutoff due to limited seats",
      "Affordable fee structure",
    ],
    icon: "🎓",
  },
  {
    title: "ESIC / AFMC",
    points: [
      "Special counselling process",
      "ESIC seats through MCC",
      "AFMC has separate selection process",
      "Includes interview & medical test",
      "Service bond may be applicable",
    ],
    icon: "⚕️",
  },
];

const InfoNeetCoun = () => {
  return (
    <div className="bg-white py-16 px-6">
      
      {/* Heading */}
      <div className="text-center mb-14">
        <h1 className="text-4xl font-extrabold text-orange-500 mb-3">
          NEET Counselling Types
        </h1>
        <p className="text-gray-600 text-lg">
          Detailed information about all counselling options
        </p>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {counsellingTypes.map((item, index) => (
          <div
            key={index}
            className="group bg-orange-50 border border-orange-200 rounded-2xl p-6 shadow-md transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
          >
            {/* Icon */}
            <div className="text-4xl mb-4 group-hover:scale-125 transition">
              {item.icon}
            </div>

            {/* Title */}
            <h2 className="text-xl font-bold text-orange-600 mb-4">
              {item.title}
            </h2>

            {/* Points */}
            <ul className="space-y-2 text-gray-700 text-sm">
              {item.points.map((point, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-orange-500">✔</span>
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Bottom Animation Line */}
            <div className="mt-4 h-1 w-0 bg-orange-500 transition-all duration-300 group-hover:w-full"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InfoNeetCoun;