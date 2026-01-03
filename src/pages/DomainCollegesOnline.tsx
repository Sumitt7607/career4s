import { useParams, Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./Herosection";
/* ================= COLLEGE DATA ================= */
const COLLEGES: Record<string, string[]> = {
  engineering: [
    "IIT Delhi",
    "IIT Bombay",
    "NIT Trichy",
    "BITS Pilani",
    "DTU Delhi",
    "NSUT Delhi",
  ],
  medical: [
    "AIIMS Delhi",
    "CMC Vellore",
    "KGMU Lucknow",
    "AFMC Pune",
    "IMS BHU",
  ],
  management: [
    "IIM Ahmedabad",
    "IIM Bangalore",
    "IIM Calcutta",
    "XLRI Jamshedpur",
    "FMS Delhi",
  ],
  postgraduation: [
    "Delhi University",
    "JNU",
    "TISS Mumbai",
    "Jamia Millia Islamia",
    "University of Hyderabad",
  ],
};

const DomainColleges = () => {
  const { domain } = useParams<{ domain: string }>();

  const colleges = domain ? COLLEGES[domain] : [];

  return (
    <>

      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="container mx-auto px-4">
            

          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center text-orange-500 font-medium mb-8"
          >
            ← Back 
          </Link>
          <HeroSection/>
          {/* HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12 capitalize">
            {domain} Colleges
          </h1>
        
          {/* COLLEGE LIST */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {colleges?.map((college) => (
              <div
                key={college}
                className="bg-white border border-gray-200
                           rounded-xl p-6
                           shadow-sm hover:shadow-lg
                           transition-all duration-300"
              >
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {college}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  Admission Open for 2026
                </p>

                <button
                  className="inline-flex items-center gap-2
                             text-orange-500 font-medium text-sm
                             hover:gap-3 transition-all"
                >
                  View Details <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>

          {/* EMPTY STATE */}
          {(!colleges || colleges.length === 0) && (
            <p className="text-gray-500">
              No colleges found for this domain.
            </p>
          )}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default DomainColleges;
