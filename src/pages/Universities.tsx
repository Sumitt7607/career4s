import { useParams, NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Footer } from "@/components/Footer";
import UniversityInsightsSection from "./UniversityInsightsSection";
import { MapPin, Users, Trophy, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

/* ===================== TYPES ===================== */
export interface University {
  name: string;
  country: string;
  logo: string;
  ranking: number;
  studentsCount: string;
  acceptanceRate: string;
  tuitionRange: string;
  programs: string[];
  featured?: boolean;
}

/* ===================== DATA ===================== */
const DATA = {
  engineering: {
    canada: ["University of Toronto", "UBC", "McGill"],
    uk: ["Oxford", "Cambridge", "Imperial College London"],
    usa: ["MIT", "Stanford University", "Caltech"],
    australia: ["University of Melbourne", "Monash University"],
    germany: ["TU Munich", "RWTH Aachen"],
    ireland: ["Trinity College Dublin"],
  },
  medical: {
    uk: ["King’s College London", "University of Edinburgh"],
    philippines: ["AMA School of Medicine"],
    russia: ["Moscow State Medical University"],
    georgia: ["Tbilisi State Medical University"],
    kazakhstan: ["Kazakh National Medical University"],
  },
  management: {
    usa: ["Harvard Business School", "Stanford GSB"],
    uk: ["London Business School", "Oxford Saïd"],
    canada: ["Rotman School of Management"],
    france: ["INSEAD"],
    singapore: ["NUS Business School"],
  },
  "post-graduation": {
    canada: ["University of Toronto", "UBC"],
    germany: ["TU Munich"],
    australia: ["University of Sydney"],
    netherlands: ["University of Amsterdam"],
    sweden: ["Lund University"],
  },
};

/* ===================== FLAG IMAGES ===================== */
const FLAG_IMAGES: Record<string, string> = {
  canada: "https://flagcdn.com/w80/ca.png",
  uk: "https://flagcdn.com/w80/gb.png",
  usa: "https://flagcdn.com/w80/us.png",
  australia: "https://flagcdn.com/w80/au.png",
  germany: "https://flagcdn.com/w80/de.png",
  ireland: "https://flagcdn.com/w80/ie.png",
  philippines: "https://flagcdn.com/w80/ph.png",
  russia: "https://flagcdn.com/w80/ru.png",
  georgia: "https://flagcdn.com/w80/ge.png",
  kazakhstan: "https://flagcdn.com/w80/kz.png",
  france: "https://flagcdn.com/w80/fr.png",
  singapore: "https://flagcdn.com/w80/sg.png",
  netherlands: "https://flagcdn.com/w80/nl.png",
  sweden: "https://flagcdn.com/w80/se.png",
};

/* ===================== UNIVERSITY IMAGES ===================== */
const UNIVERSITY_IMAGES: Record<string, string> = {
  "University of Toronto":
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
  UBC: "https://images.unsplash.com/photo-1596495577886-d920f1fb7238",
  McGill: "https://images.unsplash.com/photo-1588072432836-e10032774350",
  Oxford: "https://images.unsplash.com/photo-1528909514045-2fa4ac7a08ba",
  Cambridge: "https://images.unsplash.com/photo-1590012314607-cda9d9c5a47b",
  "Imperial College London":
    "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  MIT: "https://images.unsplash.com/photo-1562774053-701939374585",
  "Stanford University":
    "https://images.unsplash.com/photo-1580537659466-0a9bfa916a54",
  Caltech: "https://images.unsplash.com/photo-1581091870627-3e0cdfbb679c",
  default:
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
};

/* ===================== NAVBAR ===================== */
const Navbar = () => (
  <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b">
    <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
      <Link to="/" className="text-xl font-bold text-orange-600">
        Career<span className="text-gray-800">4S</span>
      </Link>

      <div className="hidden md:flex gap-8 font-medium">
        {["Home", "About", "Universities", "Gallery", "Contact"].map((item) => (
          <NavLink
            key={item}
            to="#"
            className="text-gray-700 hover:text-orange-600 transition"
          >
            {item}
          </NavLink>
        ))}
      </div>

      <button className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition">
        Apply
      </button>
    </div>
  </nav>
);

/* ===================== UNIVERSITY CARD (UNCHANGED) ===================== */
const UniversityCard = ({
  university,
  index,
}: {
  university: University;
  index: number;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, delay: index * 0.05 }}
    whileHover={{ y: -6 }}
    className="group bg-white rounded-xl border border-orange-100 overflow-hidden cursor-pointer hover:border-orange-400 hover:shadow-xl transition-all"
  >
    {university.featured && (
      <div className="absolute top-2 left-2 z-10">
        <Badge className="bg-orange-500 text-white text-xs">Featured</Badge>
      </div>
    )}

    <div className="absolute top-2 right-2 z-10">
      <Badge variant="secondary" className="text-xs font-bold">
        #{university.ranking}
      </Badge>
    </div>

    <div className="h-28 bg-gradient-to-br from-orange-200 to-orange-50 relative">
      <img
        src={university.logo}
        alt={university.name}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 w-16 h-16 rounded-full border-4 border-white shadow-md object-cover"
      />
    </div>

    <div className="pt-10 p-4">
      <h3 className="font-bold text-sm mb-1 group-hover:text-orange-600">
        {university.name}
      </h3>

      <div className="flex items-center gap-1 text-xs text-gray-500 mb-3">
        <MapPin className="w-3 h-3" />
        {university.country}
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs mb-3">
        <div className="flex items-center gap-1">
          <Users className="w-3 h-3 text-orange-500" />
          {university.studentsCount}
        </div>
        <div className="flex items-center gap-1">
          <Trophy className="w-3 h-3 text-orange-500" />
          {university.acceptanceRate}
        </div>
      </div>

      <div className="flex items-center gap-1 text-xs font-medium mb-3">
        <DollarSign className="w-3 h-3 text-orange-500" />
        {university.tuitionRange}
      </div>

      <Button className="w-full h-8 text-xs bg-orange-500 hover:bg-orange-600 text-white">
        View Details
      </Button>
    </div>
  </motion.div>
);

/* ===================== PAGE ===================== */
export default function Universities() {
  const { domain, country } = useParams();
  const domainData = DATA[domain as keyof typeof DATA];

  if (!domainData) {
    return (
      <section className="min-h-screen pt-32 px-6">
        <h1 className="text-2xl font-bold">Domain not found</h1>
      </section>
    );
  }

  return (
    <>
      <Navbar />
     

      <section className=" pt-28 pb-12 bg-gradient-to-b from-[#FFF6EE] to-white">
      
     
        <div className="max-w-7xl mx-auto px-6">

          <h1 className="text-4xl font-bold mb-14 capitalize text-center">
            {domain?.replace("-", " ")} Admissions
          </h1>

          {/* ================= COUNTRY CHOOSING (ANIMATED ONLY HERE) ================= */}
          
          {!country && (
            <>  
<div className="mb-8">
      <Link
        to="/admission-abroad"
        className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
      >
        ← Back to Domains
      </Link>
    </div>



            <motion.div
              initial="hidden"
              animate="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: { staggerChildren: 0.25 },
                },
              }}
              className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
            >
              {Object.keys(domainData).map((c) => (
                <motion.div
                  key={c}
                  variants={{
                    hidden: { opacity: 0, y: 30 },
                    show: { opacity: 1, y: 0 },
                  }}
                  whileHover={{ scale: 1.05, y: -6 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <NavLink
                    to={`/universities/${domain}/${c}`}
                    className="block bg-white rounded-2xl border p-8 text-center hover:shadow-xl transition"
                  >
                    <img
                      src={FLAG_IMAGES[c]}
                      alt={c}
                      className="w-16 h-16 mx-auto mb-4 rounded-full border shadow-sm"
                    />

                    <h2 className="text-xl font-semibold capitalize">
                      {c}
                    </h2>

                    <p className="text-sm text-gray-500 mt-1">
                      Explore Universities
                    </p>
                  </NavLink>
                </motion.div>
              ))}
            </motion.div>
            </>
          )}

          {/* ================= UNIVERSITIES ================= */}
          {country && (
            <>
                <div className="pt-15 max-w-7xl mx-auto px-4">
  <Link
    to="/"
    className="inline-flex items-center gap-2 text-orange-600 font-medium hover:underline"
  >
    ← Back to Home
  </Link>
</div>
              <NavLink
                to={`/universities/${domain}`}
                className="text-orange-600 font-medium block mb-8"
              >
                ← Back to Countries
              </NavLink>

              <h2 className="text-3xl font-semibold mb-10 text-center capitalize flex items-center justify-center gap-3">
                <img
                  src={FLAG_IMAGES[country]}
                  alt={country}
                  className="w-8 h-8 rounded-full border shadow-sm"
                />
                Universities in {country}
              </h2>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {domainData[country]?.map((name, index) => (
                  <UniversityCard
                    key={name}
                    index={index}
                    university={{
                      name,
                      country,
                      logo:
                        UNIVERSITY_IMAGES[name] ||
                        UNIVERSITY_IMAGES.default,
                      ranking: 10 + index,
                      studentsCount: "20k+",
                      acceptanceRate: "15%",
                      tuitionRange: "$20k – $50k",
                      programs: ["Engineering", "Management", "Medical"],
                      featured: index === 0,
                    }}
                  />
                ))}
              </div>
            </>
          )}
        </div>
      </section>
      {country && <UniversityInsightsSection country={country} />}


      <Footer />
    </>
  );
}
