import { useParams, Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./Herosection";
import { useEffect, useRef, useState } from "react";
import { AboutSectiononline } from "./AboutSectiononline";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { AdmissionsSectionProcess } from "./AdmissionsSectionProcess";
import WhatsApp from "@/components/WhatsApp";
/* ================= COLLEGE DATA ================= */
const COLLEGES: Record<
  string,
  { name: string; image: string }[]
> = {
  engineering: [
    {
      name: "IIT Delhi",
      image:
        "https://images.unsplash.com/photo-1581091870627-3b6c1b0a9b2e?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "IIT Bombay",
      image:
        "https://images.unsplash.com/photo-1596495578060-6e0763fa8f5d?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "NIT Trichy",
      image:
        "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "BITS Pilani",
      image:
        "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "DTU Delhi",
      image:
        "https://images.unsplash.com/photo-1592066575517-58df903152f2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "NSUT Delhi",
      image:
        "https://images.unsplash.com/photo-1590012314607-cda9d9b699ae?auto=format&fit=crop&w=800&q=80",
    },
  ],

  medical: [
    {
      name: "AIIMS Delhi",
      image:
        "https://images.unsplash.com/photo-1582719478175-2d8f8d1a1c3f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "CMC Vellore",
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "KGMU Lucknow",
      image:
        "https://images.unsplash.com/photo-1600959907703-125ba1374a12?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "AFMC Pune",
      image:
        "https://images.unsplash.com/photo-1587502536263-9298c4e47dbd?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "IMS BHU",
      image:
        "https://images.unsplash.com/photo-1607746882042-944635dfe10e?auto=format&fit=crop&w=800&q=80",
    },
  ],

  management: [
    {
      name: "IIM Ahmedabad",
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "IIM Bangalore",
      image:
        "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "IIM Calcutta",
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "XLRI Jamshedpur",
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "FMS Delhi",
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
    },
  ],

  postgraduation: [
    {
      name: "Delhi University",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "JNU",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "TISS Mumbai",
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "Jamia Millia Islamia",
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80",
    },
    {
      name: "University of Hyderabad",
      image:
        "https://images.unsplash.com/photo-1607013251379-e6eecfffe234?auto=format&fit=crop&w=800&q=80",
    },
  ],
};

/* ================= ANIMATION WRAPPER ================= */
const FadeUp = ({
  children,
  delay = 0,
}: {
  children: React.ReactNode;
  delay?: number;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out ${
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {children}
    </div>
  );
};

/* ================= MAIN PAGE ================= */
const DomainColleges = () => {
  const { domain } = useParams<{ domain: string }>();
  const colleges = domain ? COLLEGES[domain] : [];

  return (
    <>
      <WhatsApp />
      <HeroSection />

      <div className="min-h-screen bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4">
          {/* BACK */}
          <Link
            to="/"
            className="inline-flex items-center text-orange-500 font-medium mb-10 hover:underline"
          >
            ← Back
          </Link>

          {/* HEADING */}
          <h1 className="text-3xl md:text-4xl font-bold mb-12 capitalize">
            {domain} Colleges
          </h1>

          {/* COLLEGE GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {colleges?.map((college, i) => (
              <FadeUp key={college.name} delay={i * 100}>
                <div
                  className="group bg-white border border-gray-200 rounded-2xl
                             overflow-hidden shadow-sm hover:shadow-xl
                             transition-all duration-500 hover:-translate-y-2"
                >
                  {/* IMAGE */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={college.image}
                      alt={college.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                    />
                    <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
                      Admission Open 2026
                    </span>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {college.name}
                    </h3>

                    <p className="text-sm text-gray-600 mb-4">
                      Trusted institution with excellent placement and academic
                      record.
                    </p>

                    {/* ACTIONS */}
                    <div className="flex items-center justify-between">
                      <Link
                        to="/apply"
                        className="inline-flex items-center gap-2 text-sm font-medium
                                   bg-orange-500 text-white px-4 py-2 rounded-full
                                   hover:bg-orange-600 transition"
                      >
                        Apply Now <GraduationCap className="w-4 h-4" />
                      </Link>

                      <button
                        className="inline-flex items-center gap-1 text-orange-500
                                   font-medium text-sm hover:gap-2 transition-all"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* EMPTY STATE */}
          {(!colleges || colleges.length === 0) && (
            <p className="text-gray-500 mt-12">
              No colleges found for this domain.
            </p>
          )}
        </div>
      </div>
      <AboutSectiononline />
      <WhyChooseUsSection />
      <AdmissionsSectionProcess />
      <Footer />
    </>
  );
};

export default DomainColleges;
