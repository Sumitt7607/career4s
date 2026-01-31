import { useNavigate, NavLink, Link } from "react-router-dom";
import { Footer } from "@/components/Footer";
import  Career4SLogo  from "@/components/Career4SLogo";

/* ===================== MAIN PAGE ===================== */
export default function AdmissionAbroad() {
  const navigate = useNavigate();

  return (
    <>
      <Navbar />
      <MovingStrip />
 
      {/* MAIN CONTENT */}
      <div className="min-h-screen bg-gradient-to-b from-[#FFF6EE] to-white pt-[7.5rem] pb-32 px-4">
<div className="pt-18 max-w-7xl mx-auto px-4">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
  >
    ← Back to Home
  </Link>
</div>



        <div className="max-w-7xl mx-auto space-y-36">

          <AbroadDomainCard
            delay={0}
            title="Engineering Abroad"
            subtitle="Study Engineering Abroad"
            description="Pursue globally recognised engineering programs with advanced infrastructure, research exposure and high employability."
            image="/enginerring.jpg"
            stats={["1200+ Universities", "Top STEM Careers", "High ROI"]}
            points={[
              "Branch & country mapping",
              "Top global universities",
              "IELTS / TOEFL / GRE guidance",
              "Scholarships & funding support",
              "Post-study work opportunities",
            ]}
            onClick={() => navigate("/abroad-home/engineering")}
          />

          <AbroadDomainCard
            delay={0.15}
            title="Medical Abroad"
            subtitle="Global Medical Pathways"
            description="Access international medical education with modern clinical exposure and globally accepted degrees."
            image="/medical.webp"
            stats={["WHO Listed Colleges", "Clinical Exposure", "Global Practice"]}
            points={[
              "Eligibility & licensing guidance",
              "NEET-based counselling",
              "Verified universities only",
              "Clinical pathway support",
              "Visa & documentation assistance",
            ]}
            onClick={() => navigate("/abroad-home/medical")}
            reverse
          />

          <AbroadDomainCard
            delay={0.3}
            title="Management Abroad"
            subtitle="Build Global Leadership"
            description="Study management at world-renowned business schools with strong corporate networks."
            image="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80"
            stats={["Top B-Schools", "Global Network", "Leadership Roles"]}
            points={[
              "Profile & ROI evaluation",
              "GMAT / GRE preparation",
              "Top global B-Schools",
              "Interview & SOP guidance",
              "Career mentoring",
            ]}
            onClick={() => navigate("/abroad-home/management")}
          />

          <AbroadDomainCard
            delay={0.45}
            title="Post Graduation Abroad"
            subtitle="Advance Your Career"
            description="Specialised master’s and research programs aligned with future global career opportunities."
            image="https://images.unsplash.com/photo-1523580846011-d3a5bc25702b?auto=format&fit=crop&w=800&q=80"
            stats={["Research Focus", "Specialisation", "Global Recognition"]}
            points={[
              "Course & university shortlisting",
              "SOP & LOR assistance",
              "Research-focused universities",
              "Scholarship guidance",
              "Post-admission support",
            ]}
            onClick={() => navigate("/abroad-home/post-graduation")}
            reverse
          />

        </div>
      </div>
      
      <Footer />
      <AnimationStyles />
    </>
  );
}

/* ===================== NAVBAR ===================== */
/* ===================== NAVBAR ===================== */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b shadow-sm">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      
      {/* LOGO */}
      <Link to="/" className="text-xl font-bold text-orange-600">
        <Career4SLogo />
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
          
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          
        </NavLink>

        <NavLink
          to="/offerings"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
    
        </NavLink>

        <NavLink
          to="/know-more"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
      
        </NavLink>

        <NavLink
          to="/why-us"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          
        </NavLink>
          <NavLink
          to="/why-us"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
      
        </NavLink>
    <NavLink
          to="/why-us"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
        
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
/* ===================== MOVING STRIP ===================== */
const MovingStrip = () => (
  <div className="fixed top-16 left-0 right-0 z-40 bg-orange-500 text-white overflow-hidden">
    <div className="marquee-track">
      <span className="marquee-item">
        Study Abroad 2026 • Engineering • Medical • Management • Post Graduation •
        USA • UK • Canada • Australia • Germany • Apply Now
      </span>
      <span className="marquee-item">
        Study Abroad 2026 • Engineering • Medical • Management • Post Graduation •
        USA • UK • Canada • Australia • Germany • Apply Now
      </span>
    </div>
  </div>
);

/* ===================== DOMAIN CARD ===================== */
const AbroadDomainCard = ({
  title,
  
  description,
  image,
  stats,
  points,
  onClick,
  reverse = false,
  delay,
}: {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  stats: string[];
  points: string[];
  onClick: () => void;
  reverse?: boolean;
  delay: number;
}) => (
  <section
    className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center animate-slide"
    style={{ animationDelay: `${delay}s` }}
  >
    <div
      onClick={onClick}
      className={`relative mx-auto cursor-pointer w-[300px] h-[300px] rounded-full overflow-hidden shadow-xl hover:scale-105 transition ${reverse ? "lg:order-2" : ""}`}
    >
      <img src={image} className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-black/40 flex items-end justify-center p-6">
        {/* <h3 className="text-white font-semibold text-center">{subtitle}</h3> */}
      </div>
    </div>

    <div className={`${reverse ? "lg:order-1" : ""}`}>
      <h2 className="text-3xl font-bold mb-4">{title}</h2>
      <p className="text-gray-600 mb-6 max-w-xl">{description}</p>

      <div className="flex flex-wrap gap-3 mb-6">
        {stats.map((s) => (
          <span key={s} className="px-4 py-2 bg-orange-50 text-orange-600 rounded-full text-sm">
            {s}
          </span>
        ))}
      </div>

      <ul className="grid sm:grid-cols-2 gap-4 mb-8">
        {points.map((p) => (
          <li key={p} className="flex gap-3">
            <span className="text-orange-500">✔</span>
            <span>{p}</span>
          </li>
        ))}
      </ul>

      <button
        onClick={onClick}
        className="bg-orange-500 text-white px-8 py-3 rounded-full hover:bg-orange-600"
      >
        Explore Options →
      </button>
    </div>
  </section>
);

/* ===================== ANIMATIONS ===================== */
const AnimationStyles = () => (
  <style>{`
    .animate-slide {
      opacity: 0;
      animation: slideFade 0.9s ease forwards;
    }

    @keyframes slideFade {
      from { opacity: 0; transform: translateY(60px); }
      to { opacity: 1; transform: translateY(0); }
    }

    .marquee-track {
      display: flex;
      width: max-content;
      animation: marqueeScroll 18s linear infinite;
    }

    .marquee-item {
      white-space: nowrap;
      padding: 0.5rem 3rem;
      font-weight: 500;
    }

    @keyframes marqueeScroll {
      from { transform: translateX(0); }
      to { transform: translateX(-50%); }
    }
  `}</style>
);











































// import { useState } from "react";
// import { Footer } from "@/components/Footer";

// /* ================= DATA ================= */

// const DOMAINS = [
//   { name: "Engineering", icon: "⚙️", subtitle: "UG • PG • Research" },
//   { name: "Management", icon: "📊", subtitle: "BBA • MBA • Leadership" },
//   { name: "Medical", icon: "🩺", subtitle: "MBBS • Nursing • Health" },
//   { name: "Post Graduation", icon: "🎓", subtitle: "Masters • PhD • Specialisation" },
// ];

// const COUNTRIES = [
//   { name: "USA", flag: "🇺🇸", subtitle: "Ivy League & Tech Giants" },
//   { name: "UK", flag: "🇬🇧", subtitle: "Globally Ranked Universities" },
//   { name: "Canada", flag: "🇨🇦", subtitle: "High Visa Success Rate" },
//   { name: "Australia", flag: "🇦🇺", subtitle: "Study + Work Opportunities" },
// ];

// const COLLEGES: Record<string, Record<string, string[]>> = {
//   Engineering: {
//     USA: ["MIT", "Stanford", "Caltech"],
//     UK: ["Imperial College", "Oxford"],
//     Canada: ["University of Toronto", "UBC"],
//     Australia: ["University of Melbourne"],
//   },
//   Management: {
//     USA: ["Harvard", "Wharton"],
//     UK: ["London Business School"],
//     Canada: ["Rotman School"],
//     Australia: ["Monash University"],
//   },
//   Medical: {
//     USA: ["Johns Hopkins"],
//     UK: ["Cambridge"],
//     Canada: ["McGill"],
//     Australia: ["University of Sydney"],
//   },
//   "Post Graduation": {
//     USA: ["UCLA", "NYU"],
//     UK: ["King’s College London"],
//     Canada: ["University of Alberta"],
//     Australia: ["ANU"],
//   },
// };

// /* ================= MAIN ================= */

// export default function AdmissionAbroad() {
//   const [domain, setDomain] = useState<string | null>(null);
//   const [country, setCountry] = useState<string | null>(null);

//   return (
//     <div className="min-h-screen bg-white text-gray-800">
//       <section className="pt-28 pb-24 max-w-7xl mx-auto px-6">
//         {/* HEADER */}
//         <h1 className="text-4xl md:text-5xl font-bold text-center text-orange-600 mb-4">
//           Study Abroad Admissions
//         </h1>
//         <p className="text-center text-gray-500 mb-16">
//           Choose domain → country → explore universities
//         </p>

//         {/* STEP 1 – DOMAIN */}
//         {!domain && (
//           <>
//             <SectionTitle title="Choose Education Domain" />
//             <ScrollableRow>
//               {DOMAINS.map((d, i) => (
//                 <CircleCard
//                   key={d.name}
//                   icon={d.icon}
//                   title={d.name}
//                   subtitle={d.subtitle}
//                   delay={i}
//                   onClick={() => setDomain(d.name)}
//                 />
//               ))}
//             </ScrollableRow>
//           </>
//         )}

//         {/* STEP 2 – COUNTRY */}
//         {domain && !country && (
//           <>
//             <Back onClick={() => setDomain(null)} />
//             <SectionTitle title={`Choose Country for ${domain}`} />
//             <ScrollableRow>
//               {COUNTRIES.map((c, i) => (
//                 <CircleCard
//                   key={c.name}
//                   icon={c.flag}
//                   title={c.name}
//                   subtitle={c.subtitle}
//                   delay={i}
//                   onClick={() => setCountry(c.name)}
//                 />
//               ))}
//             </ScrollableRow>
//           </>
//         )}

//         {/* STEP 3 – COLLEGES */}
//         {domain && country && (
//           <>
//             <Back onClick={() => setCountry(null)} />
//             <SectionTitle title={`${domain} Colleges in ${country}`} />

//             <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
//               {COLLEGES[domain][country].map((college, i) => (
//                 <div key={college} className="college-card animate-card" style={{ animationDelay: `${i * 0.08}s` }}>
//                   <h4 className="font-semibold text-lg">{college}</h4>
//                   <p className="text-sm text-gray-500 mt-2">
//                     Globally recognised university
//                   </p>
//                   <button className="apply-btn">Apply Now</button>
//                 </div>
//               ))}
//             </div>
//           </>
//         )}
//       </section>

//       <Footer />
//       <Styles />
//     </div>
//   );
// }

// /* ================= COMPONENTS ================= */

// const SectionTitle = ({ title }: { title: string }) => (
//   <h2 className="text-2xl md:text-3xl font-semibold text-center mb-10">
//     {title}
//   </h2>
// );

// const Back = ({ onClick }: { onClick: () => void }) => (
//   <button
//     onClick={onClick}
//     className="mb-10 text-orange-600 font-medium hover:underline"
//   >
//     ← Back
//   </button>
// );

// const ScrollableRow = ({ children }: { children: React.ReactNode }) => (
//   <div className="scroll-row">
//     {children}
//   </div>
// );

// const CircleCard = ({
//   icon,
//   title,
//   subtitle,
//   delay,
//   onClick,
// }: {
//   icon: string;
//   title: string;
//   subtitle: string;
//   delay: number;
//   onClick: () => void;
// }) => (
//   <div
//     className="circle-card animate-circle"
//     style={{ animationDelay: `${delay * 0.1}s` }}
//     onClick={onClick}
//   >
//     <div className="circle-icon">{icon}</div>
//     <h3 className="circle-title">{title}</h3>
//     <p className="circle-subtitle">{subtitle}</p>
//   </div>
// );

// /* ================= STYLES ================= */

// const Styles = () => (
//   <style>{`
//     /* ---------- SCROLL ROW ---------- */
//     .scroll-row {
//       display: flex;
//       gap: 28px;
//       overflow-x: auto;
//       padding: 10px 4px 30px;
//       scroll-snap-type: x mandatory;
//       scrollbar-width: none;
//     }

//     .scroll-row::-webkit-scrollbar {
//       display: none;
//     }

//     /* ---------- BIG CIRCLE CARD ---------- */
//     .circle-card {
//       min-width: 240px;
//       height: 240px;
//       border-radius: 50%;
//       background: white;
//       border: 2px solid #fff2e8;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: center;
//       text-align: center;
//       padding: 20px;
//       cursor: pointer;
//       scroll-snap-align: center;
//       transition: all 0.45s ease;
//       box-shadow: 0 12px 30px rgba(0,0,0,0.08);
//     }

//     .circle-card:hover {
//       transform: translateY(-14px) scale(1.08);
//       border-color: #f97316;
//       box-shadow: 0 30px 60px rgba(249,115,22,0.3);
//     }

//     .circle-icon {
//       width: 70px;
//       height: 70px;
//       border-radius: 50%;
//       background: #fff7ed;
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       font-size: 2.2rem;
//       margin-bottom: 10px;
//       transition: 0.4s ease;
//     }

//     .circle-card:hover .circle-icon {
//       background: #f97316;
//       color: white;
//       transform: scale(1.15);
//     }

//     .circle-title {
//       font-size: 1.2rem;
//       font-weight: 600;
//     }

//     .circle-subtitle {
//       font-size: 0.85rem;
//       color: #6b7280;
//       max-width: 160px;
//     }

//     /* ---------- ANIMATIONS ---------- */
//     @keyframes circleIn {
//       from {
//         opacity: 0;
//         transform: scale(0.85) translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: scale(1) translateY(0);
//       }
//     }

//     .animate-circle {
//       animation: circleIn 0.7s ease forwards;
//       opacity: 0;
//     }

//     @keyframes cardIn {
//       from {
//         opacity: 0;
//         transform: translateY(20px);
//       }
//       to {
//         opacity: 1;
//         transform: translateY(0);
//       }
//     }

//     .animate-card {
//       animation: cardIn 0.6s ease forwards;
//       opacity: 0;
//     }

//     /* ---------- COLLEGE CARD ---------- */
//     .college-card {
//       background: #fff;
//       border-radius: 16px;
//       padding: 24px;
//       border: 1px solid #f2f2f2;
//       transition: 0.35s ease;
//     }

//     .college-card:hover {
//       transform: translateY(-6px);
//       box-shadow: 0 16px 36px rgba(0,0,0,0.12);
//     }

//     .apply-btn {
//       margin-top: 14px;
//       width: 100%;
//       padding: 12px;
//       background: #f97316;
//       color: white;
//       border-radius: 10px;
//       font-weight: 500;
//     }

//     .apply-btn:hover {
//       background: #ea580c;
//     }

//     @media (max-width: 640px) {
//       .circle-card {
//         min-width: 200px;
//         height: 200px;
//       }
//     }
//   `}</style>
// );
