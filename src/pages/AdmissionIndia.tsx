import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Link,NavLink} from "react-router-dom";
import DomainMoreSections from "./DomainMoreSections";

/* ===================== COLLEGE DATA ===================== */
const COLLEGE_LIST: Record<string, string[]> = {
  Engineering: [
    "IIT Delhi",
    "IIT Bombay",
    "NIT Trichy",
    "BITS Pilani",
    "DTU",
    "NSUT",
    "IIIT Hyderabad",
    "VIT Vellore",
    "Manipal University",
  ],
  Medical: [
    "AIIMS Delhi",
    "CMC Vellore",
    "JIPMER",
    "KGMU",
    "namc Delhi",
    "AFMC Pune",
    "IMS BHU",
    "Grant Medical College",
    "SRM Medical College",
  ],
  Management: [
    "IIM Ahmedabad",
    "IIM Bangalore",
    "IIM Calcutta",
    "XLRI",
    "FMS Delhi",
    "SPJIMR",
    "MDI Gurgaon",
    "NMIMS",
    "Symbiosis Pune",
  ],
  "Post Graduation": [
    "JNU",
    "Delhi University",
    "TISS",
    "Jamia Millia",
    "University of Hyderabad",
    "BHU",
    "Calcutta University",
    "Pune University",
    "Anna University",
  ],
};

/* ===================== MAIN PAGE ===================== */
export default function AdmissionIndia() {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-[#FFF9F5] text-gray-800">
      <Navbar />
      <MovingBanner />


      

      <main className="pt-28 pb-32 max-w-7xl mx-auto px-4">

{/* BACK TO HOME */}
<div className="pt-24 max-w-7xl mx-auto px-4">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
  >
    ← Back to Home
  </Link>
</div>

        {!activeField ? (
          <>
            <SectionCard
              title="Engineering Admissions"
              description="End-to-end guidance for B.Tech, B.E and M.Tech admissions in top engineering colleges across India."
              points={[
                "Career counselling & branch selection",
                "College shortlisting based on rank & budget",
                "JEE Main / JEE Advanced counselling support",
                "Direct & management quota guidance",
                "Documentation & admission confirmation support",
              ]}
              destinations={["IITs", "NITs", "State Colleges", "Private Universities"]}
              onExplore={() => setActiveField("Engineering")}
              
            />

            <SectionCard
              title="Medical Admissions"
              description="Complete support for NEET-based admissions and counselling into top medical institutions."
              points={[
                "NEET counselling guidance",
                "Seat matrix and cut-off analysis",
                "Verified medical colleges",
                "Transparent admission process",
                "End-to-end documentation support",
              ]}
              destinations={["AIIMS", "Govt Colleges", "Private Medical"]}
              onExplore={() => setActiveField("Medical")}
            />

            <SectionCard
              title="Management Admissions"
              description="Strategic guidance for BBA & MBA admissions in India’s leading management institutes."
              points={[
                "Profile evaluation for MBA/BBA",
                "College shortlisting & ROI analysis",
                "CAT / XAT / CMAT counselling",
                "Management quota assistance",
                "Interview & GD preparation",
              ]}
              destinations={["IIMs", "Top B-Schools"]}
              onExplore={() => setActiveField("Management")}
            />

            <SectionCard
              title="Post Graduation"
              description="Advance your academic journey with expert guidance for postgraduate admissions."
              points={[
                "University & course mapping",
                "CUET-PG / GATE counselling",
                "Application & SOP guidance",
                "Verified universities only",
                "Post-admission support",
              ]}
              destinations={["Central Universities", "State Universities"]}
              onExplore={() => setActiveField("Post Graduation")}
            />
          </>
        ) : (
          <CollegeView field={activeField} onBack={() => setActiveField(null)} />
        )}
      </main>

      <MobileFloatingMenu />
      <Footer />
      <AnimationStyles />
    </div>
  );
}

/* ===================== NAVBAR ===================== */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      
      {/* LOGO */}
      <Link to="/" className="text-xl font-bold text-orange-600">
        Career<span className="text-gray-800">4S</span>
      </Link>

      {/* NAV LINKS (DESKTOP ONLY) */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          About
        </NavLink>

        <NavLink
          to="/offerings"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Offerings
        </NavLink>

        <NavLink
          to="/know-more"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Know More
        </NavLink>

        <NavLink
          to="/why-us"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Why Us
        </NavLink>
      </div>

      {/* CTA BUTTON */}
      <Link
        to="/contact"
        className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition"
      >
        Free Consultation
      </Link>
    </div>
  </nav>
);
/* ===================== MOVING BANNER ===================== */
const MovingBanner = () => (
  <div className="fixed top-16 left-0 right-0 z-40 bg-orange-500 text-white overflow-hidden">
    <div className="marquee py-2 text-sm md:text-base font-medium">
      Admissions Open 2025 • Engineering • Medical • Management • PG • Apply Now
    </div>
  </div>
);

/* ===================== SECTION CARD ===================== */
const SectionCard = ({
  title,
  description,
  points,
  destinations,
  onExplore,
}: {
  title: string;
  description: string;
  points: string[];
  destinations: string[];
  onExplore: () => void;
}) => (
  <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fade">
    <div>
      <span className="inline-block mb-3 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
        Get into Your Dream College
      </span>

      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6">{description}</p>

      <ul className="space-y-3 mb-6">
        {points.map((p) => (
          <li key={p} className="flex items-start gap-3">
            <span className="text-orange-500 font-bold">✔</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onExplore}
        className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
      >
        Get Started →
      </button>
    </div>

    <div
      onClick={onExplore}
      className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl shadow-xl animate-slide cursor-pointer hover:scale-[1.03] transition"
    >
      <div className="p-6">
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <p className="mb-3 text-white/90">Top Destinations:</p>

        <div className="flex flex-wrap gap-3">
          {destinations.map((d) => (
            <span
              key={d}
              className="px-4 py-2 bg-white/20 rounded-full text-sm"
            >
              {d}
            </span>
          ))}
        </div>

        <div className="mt-6 text-sm underline">
          Click to explore colleges →
        </div>
      </div>
    </div>
  </section>
);

/* ===================== COLLEGE VIEW ===================== */
/* ===================== COLLEGE VIEW ===================== */
const CollegeView = ({
  field,
  onBack,
}: {
  field: string;
  onBack: () => void;
}) => {
  const [showMore, setShowMore] = useState(false);

  const colleges = COLLEGE_LIST[field] || [];

  // First 8 always visible, 9th on View More
  const visibleColleges = showMore
    ? colleges.slice(0, 9)
    : colleges.slice(0, 8);

  return (
    <section className="px-3 sm:px-4">
      {/* Back */}
      <button
        onClick={onBack}
        className="mb-5 sm:mb-6 text-orange-600 font-medium hover:underline"
      >
        ← Back to Admissions
      </button>

      {/* Heading */}
      <h3 className="text-xl sm:text-2xl font-bold mb-6 sm:mb-8">
        Colleges for{" "}
        <span className="text-orange-600">{field}</span>
      </h3>

      {/* COLLEGE GRID */}
      <div
        className="
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-4
          gap-5 sm:gap-6 lg:gap-8
        "
      >
        {visibleColleges.map((college, index) => (
          <CollegeCard key={college} name={college} delay={index} />
        ))}
      </div>

      {/* VIEW MORE */}
      {colleges.length > 8 && (
        <div className="mt-8 sm:mt-10 text-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="
              px-7 py-2.5 rounded-full
              border-2 border-orange-500
              text-orange-600 font-semibold
              transition-all duration-300
              hover:bg-orange-500 hover:text-white
            "
          >
            {showMore ? "View Less" : "View More"}
          </button>
        </div>
      )}

      {/* NEXT SECTIONS */}
      <div className="mt-12 sm:mt-16">
        <DomainMoreSections field={field} />
      </div>

      {/* ANIMATIONS */}
      <style>{`
        @keyframes cardIn {
          from {
            transform: translateY(18px) scale(0.97);
          }
          to {
            transform: translateY(0) scale(1);
          }
        }

        .animate-card {
          animation: cardIn 0.5s ease both;
        }
      `}</style>
    </section>
  );
};
/* ===================== COLLEGE CARD ===================== */
const CollegeCard = ({
  name,
  delay,
}: {
  name: string;
  delay: number;
}) => {
  return (
    <div
      className="
        group relative bg-white rounded-2xl
        p-4 sm:p-5
        border border-orange-100
        shadow-sm
        transition-all duration-500
        hover:-translate-y-2 hover:shadow-xl
        animate-card
      "
      style={{ animationDelay: `${delay * 0.07}s` }}
    >
      {/* TOP STRIP */}
      <div className="absolute top-0 left-0 w-full h-1 bg-orange-500 rounded-t-2xl" />

      {/* LOGO PLACEHOLDER */}
      <div
        className="
          h-20 sm:h-24 rounded-lg mb-4
          bg-gradient-to-br from-orange-50 to-orange-100
          flex items-center justify-center
          text-orange-600 font-semibold
          text-xs sm:text-sm
          text-center px-3
          transition-transform duration-500
          group-hover:scale-105
        "
      >
        {name}
      </div>

      {/* NAME */}
      <h4 className="font-semibold text-sm sm:text-base text-gray-900">
        {name}
      </h4>

      {/* META */}
      <p className="text-xs text-gray-500 mt-1">
        AICTE / UGC Approved
      </p>

      {/* CTA */}
      <button
        className="
          mt-4 w-full py-2 rounded-lg
          bg-orange-500 text-white text-sm font-medium
          transition-all duration-300
          hover:bg-orange-600
        "
      >
        View Details
      </button>
    </div>
  );
};





/* ===================== MOBILE FLOATING MENU ===================== */
const MobileFloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        className={`fixed bottom-28 right-4 z-50 flex flex-col gap-3 md:hidden transition-all ${
          open
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-10 pointer-events-none"
        }`}
      >
        {["Home", "About", "Offerings", "know More","Why Us"].map((item) => (
          <div
            key={item}
            className={`px-4 py-3 rounded-full shadow-lg ${
              item === "Contact"
                ? "bg-orange-500 text-white"
                : "bg-white text-gray-700"
            }`}
          >
            {item}
          </div>
        ))}
      </div>

      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white text-3xl shadow-xl md:hidden"
      >
        {open ? "×" : "+"}
      </button>
    </>
  );
};

/* ===================== ANIMATIONS ===================== */
const AnimationStyles = () => (
  <style>{`
    .animate-fade { animation: fade .6s ease forwards; }
    .animate-slide { animation: slide .6s ease forwards; }
    .marquee {
      white-space: nowrap;
      animation: marquee 14s linear infinite;
      padding-left: 100%;
      display: inline-block;
    }
    .no-scrollbar::-webkit-scrollbar { display: none; }
    .no-scrollbar { scrollbar-width: none; }
    @keyframes fade { from {opacity:0} to {opacity:1} }
    @keyframes slide { from {opacity:0; transform:translateY(20px)} to {opacity:1} }
    @keyframes marquee { 0% {transform:translateX(0)} 100% {transform:translateX(-100%)} }
  `}</style>
);




















































// import { useState } from "react";
// import { Footer } from "@/components/Footer";
// import { Link } from "react-router-dom";

// /* ===================== COLLEGE DATA ===================== */
// const COLLEGE_LIST: Record<string, string[]> = {
//   Engineering: ["IIT Delhi", "IIT Bombay", "NIT Trichy", "BITS Pilani"],
//   Medical: ["AIIMS Delhi", "CMC Vellore", "JIPMER"],
//   Management: ["IIM Ahmedabad", "IIM Bangalore", "XLRI"],
//   "Post Graduation": ["JNU", "Delhi University", "TISS"],
// };

// /* ===================== MAIN PAGE ===================== */
// export default function AdmissionIndia() {
//   const [activeField, setActiveField] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-[#FFF9F5] text-gray-800">
//       <Navbar />
//       <MovingBanner />

//       <main className="pt-28 pb-32 max-w-7xl mx-auto px-4">
//         {!activeField ? (
//           <>
           

//              <SectionCard
//   title="Engineering Admissions"
//   description="End-to-end guidance for B.Tech, B.E and M.Tech admissions in top engineering colleges across India."
//   points={[
//     "Career counselling & branch selection",
//     "College shortlisting based on rank & budget",
//     "JEE Main / JEE Advanced counselling support",
//     "Direct & management quota guidance",
//     "Documentation & admission confirmation support",
//   ]}
//   destinations={["IITs", "NITs", "State Colleges", "Private Universities"]}
//   onExplore={() => setActiveField("Engineering")}
// />




//             <SectionCard
//               title="Medical Admissions"
//               description="Complete support for NEET-based admissions and counselling into top medical institutions."
//               points={[
//                 "NEET counselling guidance",
//                 "Seat matrix and cut-off analysis",
//                 "Verified medical colleges",
//                 "Transparent admission process",
//                 "End-to-end documentation support",
//               ]}
//               destinations={["AIIMS", "Govt Colleges", "Private Medical"]}
//               onExplore={() => setActiveField("Medical")}
//             />

//             <SectionCard
//               title="Management Admissions"
//               description="Strategic guidance for BBA & MBA admissions in India’s leading management institutes."
//               points={[
//                 "Profile evaluation for MBA/BBA",
//                 "College shortlisting & ROI analysis",
//                 "CAT / XAT / CMAT counselling",
//                 "Management quota assistance",
//                 "Interview & GD preparation",
//               ]}
//               destinations={["IIMs", "Top B-Schools"]}
//               onExplore={() => setActiveField("Management")}
//             />

//             <SectionCard
//               title="Post Graduation"
//               description="Advance your academic journey with expert guidance for postgraduate admissions."
//               points={[
//                 "University & course mapping",
//                 "CUET-PG / GATE counselling",
//                 "Application & SOP guidance",
//                 "Verified universities only",
//                 "Post-admission support",
//               ]}
//               destinations={["Central Universities", "State Universities"]}
//               onExplore={() => setActiveField("Post Graduation")}
//             />
//           </>
//         ) : (
//           <CollegeView
//             field={activeField}
//             onBack={() => setActiveField(null)}
//           />
//         )}
//       </main>

//       <MobileFloatingMenu />
//       <Footer />
//       <AnimationStyles />
//     </div>
//   );
// }

// /* ===================== NAVBAR ===================== */
// const Navbar = () => (
//   <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
//     <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
//       <h1 className="text-xl font-bold text-orange-600">
//         Career<span className="text-gray-800">4S</span>
//       </h1>

//       <Link to="/contact" className="hidden md:block bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600">
//         Free Consultation
//       </Link>
//     </div>
//   </nav>
// );

// /* ===================== MOVING BANNER ===================== */
// const MovingBanner = () => (
//   <div className="fixed top-16 left-0 right-0 z-40 bg-orange-500 text-white overflow-hidden">
//     <div className="marquee py-2 text-sm md:text-base font-medium">
//       Admissions Open 2025 • Engineering • Medical • Management • PG • Apply Now
//     </div>
//   </div>
// );

// /* ===================== SECTION CARD ===================== */
// const SectionCard = ({
//   title,
//   description,
//   points,
//   destinations,
//   onExplore,
// }: {
//   title: string;
//   description: string;
//   points: string[];
//   destinations: string[];
//   onExplore: () => void;
// }) => (
//   <section className="mb-20 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center animate-fade">
//     {/* LEFT CONTENT */}
//     <div>
//       <span className="inline-block mb-3 px-4 py-1 rounded-full bg-orange-100 text-orange-600 text-sm font-medium">
//         Get into Your Dream College
//       </span>

//       <h2 className="text-3xl font-bold mb-4">{title}</h2>
//       <p className="text-gray-600 mb-6">{description}</p>

//       <ul className="space-y-3 mb-6">
//         {points.map((p) => (
//           <li key={p} className="flex items-start gap-3">
//             <span className="text-orange-500 font-bold">✔</span>
//             <span>{p}</span>
//           </li>
//         ))}
//       </ul>

//       {/* BUTTON CLICK */}
//       <button
//         onClick={onExplore}
//         className="bg-orange-500 text-white px-6 py-3 rounded-lg hover:bg-orange-600"
//       >
//         Get Started →
//       </button>
//     </div>

//     {/* RIGHT ORANGE CARD (CLICKABLE FOR ENGINEERING TOO) */}
//     <div
//       onClick={onExplore}
//       className="bg-gradient-to-br from-orange-500 to-orange-400 text-white rounded-2xl shadow-xl animate-slide cursor-pointer hover:scale-[1.03] transition"
//     >
//       <div className="p-6">
//         <h3 className="text-2xl font-bold mb-4">{title}</h3>
//         <p className="mb-3 text-white/90">Top Destinations:</p>

//         <div className="flex flex-wrap gap-3">
//           {destinations.map((d) => (
//             <span
//               key={d}
//               className="px-4 py-2 bg-white/20 rounded-full text-sm"
//             >
//               {d}
//             </span>
//           ))}
//         </div>

//         <div className="mt-6 text-sm underline">
//           Click to explore colleges →
//         </div>
//       </div>
//     </div>
//   </section>
// );


// /* ===================== COLLEGE VIEW ===================== */
// const CollegeView = ({
//   field,
//   onBack,
// }: {
//   field: string;
//   onBack: () => void;
// }) => (
//   <div className="animate-fade">
//     <button onClick={onBack} className="mb-6 text-orange-600 font-medium">
//       ← Back to Admissions
//     </button>

//     <h3 className="text-2xl font-bold mb-6">Colleges for {field}</h3>

//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {COLLEGE_LIST[field].map((college) => (
//         <div
//           key={college}
//           className="bg-white border rounded-xl p-5 shadow hover:shadow-xl transition animate-slide"
//         >
//           <h4 className="font-semibold text-lg">{college}</h4>
//           <p className="text-sm text-gray-500 mt-1">
//             Verified Partner Institution
//           </p>

//           <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded hover:bg-orange-600">
//             Apply via Career4S
//           </button>
//         </div>
//       ))}
//     </div>
//   </div>
// );

// /* ===================== MOBILE FLOATING MENU ===================== */
// const MobileFloatingMenu = () => {
//   const [open, setOpen] = useState(false);

//   return (
//     <>
//       <div
//         className={`fixed bottom-28 right-4 z-50 flex flex-col gap-3 md:hidden transition-all ${
//           open
//             ? "opacity-100 translate-x-0"
//             : "opacity-0 translate-x-10 pointer-events-none"
//         }`}
//       >
//         {["Home", "Admissions", "Abroad", "Contact"].map((item) => (
//           <div
//             key={item}
//             className={`px-4 py-3 rounded-full shadow-lg ${
//               item === "Contact"
//                 ? "bg-orange-500 text-white"
//                 : "bg-white text-gray-700"
//             }`}
//           >
//             {item}
//           </div>
//         ))}
//       </div>

//       <button
//         onClick={() => setOpen(!open)}
//         className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white text-3xl shadow-xl md:hidden"
//       >
//         {open ? "×" : "+"}
//       </button>
//     </>
//   );
// };

// /* ===================== ANIMATIONS ===================== */
// const AnimationStyles = () => (
//   <style>{`
//     .animate-fade {
//       animation: fade .6s ease forwards;
//     }
//     .animate-slide {
//       animation: slide .6s ease forwards;
//     }
//     .marquee {
//       white-space: nowrap;
//       animation: marquee 14s linear infinite;
//       padding-left: 100%;
//       display: inline-block;
//     }
//     @keyframes fade {
//       from { opacity: 0; }
//       to { opacity: 1; }
//     }
//     @keyframes slide {
//       from { opacity: 0; transform: translateY(20px); }
//       to { opacity: 1; transform: translateY(0); }
//     }
//     @keyframes marquee {
//       0% { transform: translateX(0); }
//       100% { transform: translateX(-100%); }
//     }
//   `}</style>
// );



























// import { useState } from "react";


// const COURSES = ["Engineering", "Management", "Medical", "Post Graduation"];
// const COLLEGES: Record<string, string[]> = {
//   Engineering: ["IIT Delhi", "IIT Bombay"],
//   Management: ["IIM Ahmedabad"],
//   Medical: ["AIIMS Delhi"],
//   "Post Graduation": ["JNU"],
// };

// export default function AdmissionIndia() {
//   const [course, setCourse] = useState<string | null>(null);

//   return (
//     <div>
      
//       <section className="pt-28 max-w-6xl mx-auto px-6">
//         <h2 className="text-3xl font-bold mb-8 text-orange-600">
//           Admission India
//         </h2>

//         {!course ? (
//           <div className="grid md:grid-cols-4 gap-6 animate-slide">
//             {COURSES.map((c) => (
//               <div
//                 key={c}
//                 onClick={() => setCourse(c)}
//                 className="cursor-pointer border p-6 rounded-xl shadow hover:shadow-xl"
//               >
//                 {c}
//               </div>
//             ))}
//           </div>
//         ) : (
//           <div className="animate-fade">
//             <h3 className="text-xl font-semibold mb-6">
//               Colleges for {course}
//             </h3>
//             <div className="grid md:grid-cols-3 gap-6">
//               {COLLEGES[course].map((clg) => (
//                 <div
//                   key={clg}
//                   className="border p-6 rounded-xl shadow"
//                 >
//                   {clg}
//                   <button className="mt-4 w-full bg-orange-500 text-white py-2 rounded">
//                     Apply
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}
//       </section>

//       <AnimationStyles />
//     </div>
//   );
// }

// const AnimationStyles = () => (
//   <style>{`
//     .animate-fade { animation: fade .6s ease forwards; }
//     .animate-slide { animation: slide .6s ease forwards; }
//     @keyframes fade { from {opacity:0} to {opacity:1} }
//     @keyframes slide { from {opacity:0; transform:translateY(20px)} to {opacity:1} }
//   `}</style>
// );
