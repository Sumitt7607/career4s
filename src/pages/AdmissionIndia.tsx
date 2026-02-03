import { useState } from "react";
import { Footer } from "@/components/Footer";
import { Link,NavLink} from "react-router-dom";
import DomainMoreSections from "./DomainMoreSections";
import Career4SLogo from "@/components/Career4SLogo";
import { TestimonialsCarousel } from "@/components/TestimonialsCarousel";
import WhatsApp from "@/components/WhatsApp";
/* ===================== COLLEGE DATA ===================== */
type College = {
  name: string;
  image: string;
};

const COLLEGE_LIST: Record<string, College[]> = {

  Engineering: [
       {
      name: "IPU , Delhi",
      image: "https://d13loartjoc1yn.cloudfront.net/upload/institute/images/large/170110014313_ipu.webp",
    },
    //    {
    //   name: "Jac Delhi",
    //   image: "/bits.jpg",
    // },
    {
      name: "BITS Pilani",
      image: "/bits.jpg",
    },
    {
      name: "MIT Karnataka",
      image: "/mit.jpg",
    },
    {
      name: "SRM Chennai",
      image: "/srm.webp",
    },
    {
      name: "VIT Vellore",
      image: "/vit.webp",
    },
    {
      name: "Shiv Nadar Noida",
      image: "/shiv.webp",
    },
    {
      name: "Amrita University",
      image: "/amrita.webp",
    },
    {
      name: "Thapar Patiala",
      image: "/thapar.webp",
    },
    // {
    //   name: "Kalinga University",
    //   image: "/kalinga.webp",
    // },
     {
      name: "PICT, Pune",
      image: "/pict.jpg",
    },
      {
      name: "PESIT, Bengaluru",
      image: "/pesit.jpg",
    },
  ],
  Medical: [
    {
      name: "Kasturba Medical College (KMC), Manipal",
      image: "/ks.webp",
    },
    {
      name: "King George’s Medical University (KGMU), Lucknow",
      image: "/kg.webp",
    },
    {
      name: "Armed Forces Medical College (AFMC), Pune",
      image: "/afmc.webp",
    },
      {
      name: "Post Graduate Institute of Medical Education and Research (PGIMER), Chandigarh",
      image: "/pdimer.jpg",
    },
    {
      name: "Christian Medical College (CMC), Vellore",
      image: "/cmc.jpg",
    },
     {
      name: "Sanjay Gandhi Postgraduate Institute of Medical Sciences (SGPGIMS), Lucknow",
      image: "/sg.jpg",
    },
     {
      name: "Vardhman Mahavir Medical College & Safdarjung Hospital, Delhi",
      image: "/vm.avif",
    },
     {
      name: "Madras Medical College, Chennai",
      image: "/mdm.jpg",
    },
    {
      name: "St. John’s Medical College, Bengaluru",
      image: "/stjohn.jpg",
    }
  ],
  Management: [
    {
      name: "XLRI – Xavier School of Management, Jamshedpur",
      image: "/xlri.gif",
    },
    {
      name: "SP Jain Institute of Management & Research (SPJIMR), Mumbai",
      image: "/spijmr.jpg",
    },
     {
      name: "MDI – Management Development Institute, Gurugram",
      image: "/mdi.webp",
    },
     {
      name: "FMS – Faculty of Management Studies, Delhi University",
      image: "/fms.webp",
    },
     {
      name: "IIFT – Indian Institute of Foreign Trade, New Delhi",
      image: "/iift.jpg",
    },
     {
      name: "DMS IIT Delhi",
      image: "/dms.jpeg",
    },
     {
      name: "NMIMS – Narsee Monjee Institute of Management Studies, Mumbai",
      image: "/nmims.webp",
    },
      {
      name: "ISB – Indian School of Business (Hyderabad/Mohali)",
      image: "/isb.avif",
    },
  ],
  "Post Graduation": [
    {
      name: "Birla Institute of Technology and Science (BITS), Pilani",
      image: "/bits.jpg",
    },
    {
      name: "Vellore Institute of Technology (VIT)",
       image: "/vit.webp",
    },
      {
      name: "Jadavpur University",
      image: "/jd.jpg",
    },
      {
      name: "Delhi Technological University (DTU)",
      image: "/dtu.webp",
    },
      {
      name: "Thapar Institute of Engineering & Technology – Patiala",
       image: "/thapar.webp",
    },
      {
      name: "SRM Institute of Science and Technology",
      image: "/srm.webp",
    },

      {
      name: "Shiv Nadar University",
     image: "/shiv.webp",
    },
          {
      name: "UPES",
      image: "/upes.jpg",
    },
          {
      name: "Lovely Professional University (LPU)",
      image: "/lpu.jpg",
    },
      {
      name: "Chandigarh University (CU)",
      image: "/cu.webp",
    },
      {
      name: "NMIMS University",
 image: "/nmims.webp",
    },
      {
      name: "SASTRA University",
      image: "/sastra.jpg",
    },
     


  ],
};

/* ===================== MAIN PAGE ===================== */
export default function AdmissionIndia() {
  const [activeField, setActiveField] = useState<string | null>(null);

  return (
    
    <div className="min-h-screen bg-[#FFF9F5] text-gray-800">

      {/* SHOW NAVBAR ONLY IN COLLEGE VIEW */}
      {activeField && <Navbar />}

      {/* MOVING BANNER ALSO ONLY WHEN COLLEGE VIEW */}
      {activeField && <MovingBanner />}

      <main className={`pb-32 max-w-7xl mx-auto px-4 ${activeField ? "pt-28" : "pt-16"}`}>
 
        {/* BACK TO HOME */}
         

        {!activeField && (
          <div className="pt-10 max-w-7xl mx-auto px-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
            >
              ← Back to Home
            </Link>
          </div>
        )}

        {!activeField ? (
          <>
          {/* LOGO FOR DOMAIN SELECTION */}
         
{/* LOGO FOR DOMAIN SELECTION */}
{!activeField && (
  <div className="absolute top-6 left-6 z-50">
    <Career4SLogo />
   
  </div>
)}


            {/* DOMAIN SELECTION VIEW (NO NAVBAR HERE) */}
           
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
{activeField && (
  <div className="animate-fade">
    <MobileFloatingMenu />
  </div>
)}

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
        <Career4SLogo />
      </Link>

      {/* NAV LINKS (DESKTOP ONLY) */}
      <div className="hidden md:flex items-center gap-8">
        <NavLink
          to="/testimonials"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Testimonials
        </NavLink>

        <NavLink
          to="/admission"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Admission
        </NavLink>

        <NavLink
          to="/documents"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Documents
        </NavLink>

        <NavLink
          to="/exams"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Entrance Exams
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Contact
        </NavLink>
          <NavLink
          to="/manage"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Management Quota
        </NavLink>
    <NavLink
          to="/counseling"
          className={({ isActive }) =>
            isActive
              ? "text-orange-600 font-medium"
              : "text-gray-700 hover:text-orange-600 font-medium"
          }
        >
          Counselling
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



// nav bar for admission india page







/* ===================== MOVING BANNER ===================== */
const MovingBanner = () => (
  <div className="fixed top-16 left-0 right-0 z-40 bg-orange-500 text-white overflow-hidden">
    <div className="marquee py-2 text-sm md:text-base font-medium">
      Admissions Open 2026 • Engineering • Medical • Management • PG • Apply Now
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
    ? colleges.slice(0, 12)
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
  <CollegeCard
    key={college.name}
    name={college.name}
    image={college.image}
    delay={index}
  />
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
  image,
  delay,
}: {
  name: string;
  image: string;
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
      {/* IMAGE */}
      <div className="h-24 sm:h-28 rounded-xl overflow-hidden mb-4 bg-gray-100">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>

      {/* NAME */}
      <h4 className="font-semibold text-sm sm:text-base text-gray-900">
        {name}
      </h4>

      {/* CTA */}
<a
  href="https://wa.me/919650831008?text=Hi%20I%20want%20to%20apply"
  target="_blank"
  rel="noopener noreferrer"
>
  <button
    className="
      mt-4 w-full py-2 rounded-lg
      bg-orange-500 text-white text-sm font-medium
      transition-all duration-300
      hover:bg-orange-600
    "
  >
    Apply Now
  </button>
</a>

    </div>
  );
};



/* ===================== MOBILE FLOATING MENU ===================== */
const MobileFloatingMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
    {/* MOBILE FLOATING MENU */}
<div
  className={`fixed bottom-28 left-4 z-50 flex flex-col gap-3 md:hidden transition-all duration-300 ${
    open
      ? "opacity-100 translate-x-0"
      : "opacity-0 translate-x-10 pointer-events-none"
  }`}
>
  <Link
    to="/testimonials"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Testimonials
  </Link>

  <Link
    to="/admission"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Admission
  </Link>

  <Link
    to="/documents"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Documents
  </Link>

  <Link
    to="/exams"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Entrance Exams
  </Link>

  <Link
    to="/contact"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Contact
  </Link>

  <Link
    to="/manage"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Management Quota
  </Link>

  <Link
    to="/counseling"
    onClick={() => setOpen(false)}
    className="px-4 py-3 rounded-full shadow-lg bg-white text-gray-700 hover:bg-orange-500 hover:text-white transition-all text-sm font-medium"
  >
    Counselling
  </Link>
</div>
<button
  onClick={() => setOpen(!open)}
  className="fixed bottom-6 left-6 z-50 w-14 h-14 rounded-full bg-orange-500 text-white text-3xl shadow-xl md:hidden"
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















































