import { useParams, Link } from "react-router-dom";

/* ===================== PACKAGE DATA ===================== */

const PACKAGE_DETAILS = {
  engineering: {
    basic: {
      title: "standard Engineering Counselling Package",
      price: "₹30,000",
      features: [
       "Personalised college shortlisting based on JEE rank & preferences",
    "Detailed branch prediction analysis",
    "2 One-to-One expert counselling sessions (career + admission planning)",
    "Complete application form filling assistance",
    "State & Central counselling registration guidance",
    "Choice filling strategy planning",
    "Round-wise seat allotment support",
    "Document verification checklist & review",
    "Scholarship eligibility guidance",
    "Education loan assistance guidance",
    "Fee structure breakdown analysis",
    "Admission timeline planning & reminders",
    "WhatsApp & call support during counselling process",
    "Backup college strategy planning",
    "Final admission confirmation support",

        
      ],
    },
    premium: {
      title: "Premium Engineering Counselling",
      price: "₹50,000 – ₹5,00,000",
      features: [
           "Complete personalised admission planning strategy",
    "In-depth career profiling & branch suitability analysis",
    "Unlimited One-to-One expert counselling sessions",
    "Advanced college & branch prediction modelling",
    "End-to-end application form filling & submission support",
    "All India & State counselling registration assistance",
    "Strategic choice filling & round-wise optimisation",
    "Seat allotment tracking across all counselling rounds",
    "Dedicated admission manager for priority support",
    "Complete documentation preparation & verification",
    "Scholarship & financial aid maximisation guidance",
    "Education loan documentation & bank coordination guidance",
    "Management quota / NRI quota admission assistance (if applicable)",
    "Private & Deemed university admission handling",
    "Fee negotiation guidance (where applicable)",
    "Backup college & safety planning strategy",
    "Hostel & accommodation guidance",
    "Post-admission onboarding & reporting assistance",
    "24/7 WhatsApp & call support during counselling period",
    "Support till final admission confirmation & fee submission"
      ],
    },
  },

  medical: {
    basic: {
      title: "Basic Medical Counselling",
      price: "₹0,000",
      features: [
           "NEET score-based college shortlisting",
    "MBBS / BDS career guidance session",
    "2 One-to-One expert counselling sessions",
    "State counselling registration guidance",
    "All India Quota (AIQ) process overview",
    "Choice filling guidance (basic strategy)",
    "Document checklist & verification guidance",
    "Fee structure explanation & comparison",
    "Seat allotment result tracking support",
    "Basic scholarship eligibility guidance",
    "Counselling timeline planning & reminders",
    "WhatsApp support during counselling rounds",
      ],
    },
    premium: {
      title: "Premium Medical Counselling",
      price: "₹0,",
      features: [
        "Complete NEET strategy planning",
        "5+ counselling sessions",
        "Private & Deemed college support",
        "Seat allotment & documentation assistance",
      ],
    },
  },
  management: {
  basic: {
    title: "Basic Management Counselling",
    price: "₹15,000",
    features: [
      "Profile-based MBA / BBA college shortlisting",
      "Entrance exam guidance (CAT / MAT / XAT / CMAT)",
      "2 One-to-One expert counselling sessions",
      "Application form filling guidance",
      "College comparison & fee structure analysis",
      "Document checklist & verification support",
      "Basic scholarship eligibility guidance",
      "Admission timeline planning & reminders",
      "WhatsApp support during admission process"
    ],
  },
  premium: {
    title: "Premium Management Counselling",
    price: "₹40,000 – ₹2,00,000",
    features: [
      "Complete personalised MBA admission strategy",
      "Detailed profile evaluation & college fit analysis",
      "Unlimited One-to-One expert counselling sessions",
      "End-to-end application filling & submission",
      "GD / PI / WAT preparation sessions",
      "Resume & SOP building support",
      "Top B-School shortlist strategy",
      "Private & Direct MBA admission handling",
      "Round-wise admission tracking & follow-up",
      "Dedicated admission manager for priority support",
      "Scholarship & financial aid optimisation guidance",
      "Education loan assistance guidance",
      "Support till final admission confirmation"
    ],
  },
},
 "post graduation": {
  basic: {
    title: "Basic Post Graduation Counselling",
    price: "₹0,000",
    features: [
      "Profile-based MBA / BBA college shortlisting",
      "Entrance exam guidance (CAT / MAT / XAT / CMAT)",
      "2 One-to-One expert counselling sessions",
      "Application form filling guidance",
      "College comparison & fee structure analysis",
      "Document checklist & verification support",
      "Basic scholarship eligibility guidance",
      "Admission timeline planning & reminders",
      "WhatsApp support during admission process"
    ],
  },
  premium: {
    title: "Premium Graduation Counselling",
    price: "₹0,000",
    features: [
      "Complete personalised MBA admission strategy",
      "Detailed profile evaluation & college fit analysis",
      "Unlimited One-to-One expert counselling sessions",
      "End-to-end application filling & submission",
      "GD / PI / WAT preparation sessions",
      "Resume & SOP building support",
      "Top B-School shortlist strategy",
      "Private & Direct MBA admission handling",
      "Round-wise admission tracking & follow-up",
      "Dedicated admission manager for priority support",
      "Scholarship & financial aid optimisation guidance",
      "Education loan assistance guidance",
      "Support till final admission confirmation"
    ],
  },
},
};

/* ===================== MAIN COMPONENT ===================== */

export default function PackagePage() {
  const { field, packageType } = useParams();

  const lowerField = field?.toLowerCase();
  const lowerPackage = packageType?.toLowerCase();

  const data = PACKAGE_DETAILS[lowerField]?.[lowerPackage];

  /* ===================== INVALID ROUTE HANDLER ===================== */

  if (!data) {
    return (
      <div className="min-h-screen flex items-center justify-center text-xl font-semibold">
        Package Not Found
      </div>
    );
  }

  /* ===================== UI ===================== */

  return (
    <div className="min-h-screen py-20 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto bg-white shadow-2xl rounded-3xl p-12">

        {/* TITLE */}
        <h1 className="text-4xl font-bold text-center mb-4 capitalize">
          {data.title}
        </h1>

        {/* PRICE */}
        <p className="text-3xl text-center font-extrabold text-orange-600 mb-10">
          {data.price}
        </p>

        {/* FEATURES */}
        <div className="space-y-5">
          {data.features.map((feature, index) => (
            <div key={index} className="flex gap-3 items-start text-lg text-gray-700">
              <span className="w-3 h-3 mt-2 bg-orange-500 rounded-full flex-shrink-0" />
              {feature}
            </div>
          ))}
        </div>

        {/* CTA BUTTON */}
        <button className="mt-12 w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold text-lg transition">
          proceed To Payment
        </button>

        {/* BACK BUTTON */}
        {/* <Link
          to={`/${lowerField}`}
          className="block mt-6 text-center text-orange-600 font-semibold hover:underline"
        >
          ← Back to Packages
        </Link> */}

      </div>
    </div>
  );
}