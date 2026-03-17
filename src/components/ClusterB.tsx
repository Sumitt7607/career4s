import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

/* ===================== ROADMAP (HORIZONTAL CARDS) ===================== */
const Roadmap = () => {
  const steps = [
    { title: "NEET Exam", desc: "Appear for NEET UG exam" },
    { title: "Result", desc: "Score & AIR released" },
    { title: "Registration", desc: "Apply on MCC/State portals" },
    { title: "Choice Filling", desc: "Select colleges based on rank" },
    { title: "Seat Allotment", desc: "Round-wise results" },
    { title: "Reporting", desc: "Confirm admission in college" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-4xl md:text-5xl font-extrabold text-center mb-20">
          Admission Process
        </h2>

        <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition text-center border border-orange-100"
            >
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-orange-500 text-white rounded-full font-bold">
                {i + 1}
              </div>

              <h3 className="font-bold text-lg">{step.title}</h3>
              <p className="text-sm text-gray-600 mt-2">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== SCORE ANALYSIS ===================== */
const ScoreAnalysis = () => {
  const tiers = [
    { range: "700–720", tier: "Top AIIMS / JIPMER" },
    { range: "650–700", tier: "Top Govt Colleges" },
    { range: "550–650", tier: "State Govt Colleges" },
    { range: "450–550", tier: "Private Colleges" },
    { range: "137–450", tier: "Deemed / NRI" },
  ];

  return (
    <section className="py-32 bg-white">
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-extrabold text-center mb-16">
          NEET Score Analysis
        </h2>

        <div className="space-y-6">
          {tiers.map((t, i) => (
            <motion.div
              key={t.range}
              initial={{ opacity: 0, scaleX: 0 }}
              whileInView={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: i * 0.1 }}
              className="origin-left"
            >
              <div className="flex items-center gap-4">
                <span className="w-28 text-right font-bold">
                  {t.range}
                </span>

                <div className="flex-1 bg-orange-100 rounded-full h-12 overflow-hidden">
                  <div
                    className="h-full bg-orange-500 flex items-center px-4 text-white font-semibold rounded-full"
                    style={{ width: `${100 - i * 15}%` }}
                  >
                    {t.tier}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== MCC VS STATE (UPGRADED 🔥) ===================== */
const CounselingOverview = () => {
  const data = [
    {
      title: "MCC Counseling (All India Quota)",
      desc: "Centralized counseling conducted by MCC for top institutions across India.",
      points: [
        "15% All India Quota seats",
        "Includes AIIMS, JIPMER, ESIC",
        "Deemed & Central Universities",
        "Single registration portal",
        "Multiple rounds (R1, R2, Mop-up)",
        "Open for all India students",
      ],
    },
    {
      title: "State Counseling",
      desc: "Conducted by individual states for their local quota seats.",
      points: [
        "85% State quota seats",
        "Handled by state authorities",
        "Domicile required",
        "Separate application for each state",
        "Includes Govt & Private colleges",
        "Fees may vary by state",
      ],
    },
  ];

  return (
    <section className="py-32 bg-orange-50">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center mb-16">
          MCC vs State Counseling
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {data.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-xl hover:shadow-2xl transition border border-orange-100"
            >
              <h3 className="text-2xl font-bold text-orange-600 mb-3">
                {c.title}
              </h3>

              <p className="text-gray-600 mb-6">{c.desc}</p>

              <ul className="space-y-3">
                {c.points.map((p) => (
                  <li key={p} className="flex gap-3">
                    <CheckCircle2 className="text-orange-500 w-5 h-5 mt-1" />
                    <span className="text-gray-700">{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ===================== RESERVATION ===================== */
const ReservationGuide = () => {
  const categories = [
    { cat: "General / EWS", seats: "40.5%", note: "Includes 10% EWS reservation" },
    { cat: "OBC (NCL)", seats: "27%", note: "Non-creamy layer applicable" },
    { cat: "SC", seats: "15%", note: "Scheduled Caste quota" },
    { cat: "ST", seats: "7.5%", note: "Scheduled Tribe quota" },
    { cat: "PwD", seats: "5%", note: "Horizontal reservation across categories" },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-orange-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Reservation System
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Reservation & Quota Guide
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Understand how seats are distributed across categories in NEET counseling.
          </p>
        </div>

        {/* Cards Instead of Table */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {categories.map((c, i) => (
            <motion.div
              key={c.cat}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-lg border border-orange-100 hover:shadow-2xl hover:-translate-y-2 transition group"
            >
              {/* Category */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {c.cat}
              </h3>

              {/* Seats */}
              <p className="text-3xl font-extrabold text-orange-500 mb-4">
                {c.seats}
              </p>

              {/* Note */}
              <p className="text-gray-600 leading-relaxed">
                {c.note}
              </p>

              {/* Bottom Accent */}
              <div className="mt-6 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 rounded-full" />
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-20 bg-orange-100 rounded-3xl p-10 text-center shadow-inner">
          <h3 className="text-2xl font-bold text-orange-600 mb-3">
            Important Note ⚠️
          </h3>
          <p className="text-gray-700 max-w-3xl mx-auto">
            Reservation policies may vary slightly between All India Quota (MCC) 
            and State counseling. Always verify eligibility criteria before applying.
          </p>
        </div>
      </div>
    </section>
  );
};
/* ===================== FEE STRUCTURE ===================== */
const FeeStructure = () => {
  const data = [
    {
      type: "Government",
      tuition: "₹10K – ₹80K",
      hostel: "₹5K – ₹30K",
      other: "₹2K – ₹10K",
      total: "₹17K – ₹1.2L",
    },
    {
      type: "Private",
      tuition: "₹8L – ₹25L",
      hostel: "₹50K – ₹2L",
      other: "₹20K – ₹1L",
      total: "₹9L – ₹28L",
    },
    {
      type: "Deemed",
      tuition: "₹12L – ₹30L",
      hostel: "₹80K – ₹2.5L",
      other: "₹30K – ₹1.5L",
      total: "₹14L – ₹34L",
    },
    {
      type: "NRI Quota",
      tuition: "₹20L – ₹40L",
      hostel: "₹1L – ₹3L",
      other: "₹50K – ₹2L",
      total: "₹22L – ₹45L",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-orange-500 uppercase tracking-widest">
            Cost Breakdown
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Fee Structure Comparison
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-3xl shadow-xl border border-orange-100">
          <table className="w-full text-left bg-white">
            <thead className="bg-orange-100 text-gray-700">
              <tr>
                <th className="py-5 px-6">Type</th>
                <th className="py-5 px-6">Tuition / Yr</th>
                <th className="py-5 px-6">Hostel / Yr</th>
                <th className="py-5 px-6">Other Costs</th>
                <th className="py-5 px-6 text-orange-600 font-bold">Total / Yr</th>
              </tr>
            </thead>

            <tbody>
              {data.map((item, i) => (
                <motion.tr
                  key={item.type}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="border-b hover:bg-orange-50 transition"
                >
                  <td className="py-5 px-6 font-semibold">
                    {item.type}
                  </td>

                  <td className="py-5 px-6 text-gray-700">
                    {item.tuition}
                  </td>

                  <td className="py-5 px-6 text-gray-700">
                    {item.hostel}
                  </td>

                  <td className="py-5 px-6 text-gray-700">
                    {item.other}
                  </td>

                  <td className="py-5 px-6 text-orange-600 font-bold">
                    {item.total}
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 mt-6 text-sm">
          *Fees may vary based on college, state, and quota.
        </p>
      </div>
    </section>
  );
};



/* ===================== HOSTEL & INFRA ===================== */
import { BedDouble, Wifi, BookOpen, Dumbbell, Utensils, Hospital } from "lucide-react";

const HostelInfra = () => {
  const features = [
    {
      icon: <BedDouble />,
      title: "Comfortable Hostel Rooms",
      desc: "AC & Non-AC rooms with attached bathrooms and 24x7 water supply",
    },
    {
      icon: <Wifi />,
      title: "High-Speed Wi-Fi",
      desc: "24/7 internet connectivity across hostel & campus",
    },
    {
      icon: <BookOpen />,
      title: "Modern Libraries",
      desc: "Central library with 50,000+ books & digital resources",
    },
    {
      icon: <Hospital />,
      title: "Teaching Hospital",
      desc: "500+ bedded hospital for real clinical exposure",
    },
    {
      icon: <Dumbbell />,
      title: "Sports & Gym",
      desc: "Fully equipped gym, sports complex & recreation zones",
    },
    {
      icon: <Utensils />,
      title: "Healthy Food",
      desc: "Hygienic cafeteria with nutritious meals",
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-orange-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-20">
          <p className="text-orange-500 font-semibold uppercase tracking-widest">
            Campus Life
          </p>

          <h2 className="text-4xl md:text-5xl font-extrabold mt-4">
            Hostel & Infrastructure
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Experience world-class facilities designed to support academic excellence and comfortable living.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {features.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition border border-orange-100"
            >
              {/* Icon */}
              <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-orange-100 text-orange-500 mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Extra Highlights */}
        <div className="mt-20 bg-orange-100 rounded-3xl p-10 text-center">
          <h3 className="text-2xl font-bold mb-4 text-orange-600">
            Why Students Love These Campuses ❤️
          </h3>

          <p className="text-gray-700 max-w-3xl mx-auto">
            From comfortable hostels to advanced medical labs and real-time hospital exposure, 
            students get everything needed for both academic success and personal growth.
          </p>
        </div>
      </div>
    </section>
  );
};


/* ===================== EXPORT ===================== */
export const ClusterB = () => {
  return (
    <>
      <Roadmap />
      <ScoreAnalysis />
      <CounselingOverview />
        <FeeStructure />
            <HostelInfra /> 
      <ReservationGuide />
    </>
  );
};