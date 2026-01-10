import { useParams } from "react-router-dom";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import FeaturesSection from "./FeaturesSection";
import HeroSectioncoldis from "@/components/HeroSectioncoldis";
import AboutSection from "@/components/AboutSectioncoldis";
import CTASection from "@/components/CTASectioncoldis";
import { Link, NavLink } from "react-router-dom";
import MobileNavbar from "@/components/MobileNavbar";
import WhatsApp from "@/components/WhatsApp";
import Career4SLogo from "@/components/Career4SLogo";
/* ================= TYPES ================= */

interface College {
  name: string;
  location: string;
  courses: string[];
  image: string;
}

interface CollegeMap {
  [key: string]: College[];
}

/* ================= DATA ================= */
/* ================= NAVBAR ================= */
const Navbar = () => {
  const navItems = [
    { label: "Courses", path: "/courses-section" },
    { label: "Admission Process", path: "/admission-process" },
    //  { label: "", path: "/universities" },
    { label: "Programs", path: "/programs-section" },
    { label: "why distance", path: "/why-distance-education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-orange-600">
          <Career4SLogo />
        </Link>

        <div className="hidden md:flex gap-8 font-medium">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                isActive
                  ? "text-orange-600 border-b-2 border-orange-600 pb-1"
                  : "text-gray-700 hover:text-orange-600 transition"
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div> 

        <Link
          to="/contact"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition shadow"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};


















const collegesByDomain: CollegeMap = {
  engineering: [
    {
      name: "IGNOU",
      location: "New Delhi",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
      name: "Amity University Online",
      location: "Noida",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585",
    },
    {
      name: "LPU Distance Education",
      location: "Punjab",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
    {
      name: "Sikkim Manipal University",
      location: "Gangtok",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      name: "Jain University Online",
      location: "Bangalore",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    },
    {
      name: "UPES Online",
      location: "Dehradun",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
    },
    {
      name: "Chandigarh University Online",
      location: "Chandigarh",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
    },
    {
      name: "SRM Online",
      location: "Chennai",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    },
    {
      name: "BITS Pilani Online",
      location: "Pilani",
      courses: ["M.Tech"],
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    },
  ],

  management: [
    {
      name: "NMIMS Global",
      location: "Mumbai",
      courses: ["MBA", "BBA"],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      name: "Symbiosis Distance Learning",
      location: "Pune",
      courses: ["MBA", "PGDM"],
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    },
  ],



  PostGraduation: [
    {
      name: "NMIMS Global",
      location: "Mumbai",
      courses: ["MBA", "BBA"],
      image:
        "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    },
    {
      name: "Symbiosis Distance Learning",
      location: "Pune",
      courses: ["MBA", "PGDM"],
      image:
        "https://images.unsplash.com/photo-1556761175-129418cb2dfe",
    },
  ],




  medical: [
    {
      name: "IGNOU",
      location: "New Delhi",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1581090700227-1e37b190418e",
    },
    {
      name: "Amity University Online",
      location: "Noida",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1562774053-701939374585",
    },
    {
      name: "LPU Distance Education",
      location: "Punjab",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
    },
    {
      name: "Sikkim Manipal University",
      location: "Gangtok",
      courses: ["B.Tech", "M.Tech"],
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      name: "Jain University Online",
      location: "Bangalore",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a",
    },
    {
      name: "UPES Online",
      location: "Dehradun",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b",
    },
    {
      name: "Chandigarh University Online",
      location: "Chandigarh",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1596495578065-6e0763fa1178",
    },
    {
      name: "SRM Online",
      location: "Chennai",
      courses: ["B.Tech"],
      image:
        "https://images.unsplash.com/photo-1580582932707-520aed937b7b",
    },
    {
      name: "BITS Pilani Online",
      location: "Pilani",
      courses: ["M.Tech"],
      image:
        "https://images.unsplash.com/photo-1541339907198-e08756dedf3f",
    },
  ],








};

/* ================= COMPONENT ================= */

const CollegeListDist = () => {
  const { domain } = useParams<{ domain: string }>();
  const [showAll, setShowAll] = useState(false);

  const colleges = domain ? collegesByDomain[domain] : undefined;

  if (!colleges) {
    return (
      <>


        <div className="pt-32 text-center">
          <h2 className="text-2xl font-semibold">
            No colleges found for this domain
          </h2>
        </div>
        <Footer />
      </>
    );
  }

  const visibleColleges = showAll ? colleges : colleges.slice(0, 8);

  return (
    <>
      <Navbar />
      <MobileNavbar />
      <WhatsApp />
        <HeroSectioncoldis />   
      <section className="pt-32 pb-20 bg-muted/30">
        <div className="container">
          <h1 className="text-3xl font-bold text-center mb-12 capitalize">
            {domain?.replace("-", " ")} Colleges
          </h1>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {visibleColleges.map((college, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl border bg-white hover:shadow-lg transition"
              >
                {/* Image */}
                <div className="h-40 overflow-hidden">
                  <img
                    src={college.image}
                    alt={college.name}
                    className="h-full w-full object-cover hover:scale-110 transition-transform duration-300"
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold mb-1">
                    {college.name}
                  </h3>

                  <p className="flex items-center text-sm text-muted-foreground mb-2">
                    <MapPin className="h-4 w-4 mr-1" />
                    {college.location}
                  </p>

                  <p className="text-sm mb-4">
                    <span className="font-medium">Courses:</span>{" "}
                    {college.courses.join(", ")}
                  </p>

                  <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full">
                    Apply Now
                  </Button>
                </div>
              </div>
            ))}
          </div>

          {/* SEE MORE BUTTON */}
          {colleges.length > 8 && !showAll && (
            <div className="text-center mt-12">
              <Button
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white"
                onClick={() => setShowAll(true)}
              >
                See More Colleges
              </Button>
            </div>
          )}
        </div>
      </section>

      <FeaturesSection />
        <AboutSection />
        <CTASection />
      <Footer />
    </>
  );
};

export default CollegeListDist;
