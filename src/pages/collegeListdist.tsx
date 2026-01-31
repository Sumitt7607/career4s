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
    name: "BITS Pilani ",
    location: "Pilani",
    courses: ["M.Tech"],
    image:
      "https://th.bing.com/th/id/R.76c963abcda7035b2dd7d3f5708daa5c?rik=T8HE4hOjOZezsA&riu=http%3a%2f%2fgreenspacealliance.com%2fwp-content%2fuploads%2f2015%2f08%2fBITS-Pilani1.jpg&ehk=UXktyDowRsleB%2fRs%2brn2ameUB0SOm65ahNgociqZPhI%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    name: "Amity University ",
    location: "Noida",
    courses: ["M.Tech"],
    image:
      "https://askusedu.com/blogdashboard/wp-content/uploads/2024/02/Amity-University-300x154.webp",
  },
  {
    name: "Jain University",
    location: "Bangalore",
    courses: ["M.Tech"],
    image:
      "/jain.webp",
  },
  {
    name: "Sikkim Manipal University ",
    location: "Gangtok",
    courses: ["M.Tech"],
    image:
      "/maniopal.webp",
  },
  {
    name: "Lovely Professional University ",
    location: "Punjab",
    courses: ["M.Tech"],
    image:
      "https://www.indianuniversities.net/assets/uploadFiles/study/IMG_20220302_1619411.png",
  },
  {
    name: "UPES ",
    location: "Dehradun",
    courses: ["M.Tech"],
    image:
      "https://img.jagranjosh.com/images/2022/December/27122022/University-of-Petroleum-and-Energy-Studies-UPES-Dehradun-Campus-View-2.jpg",
  },
],

management: [
  {
    name: "NMIMS Global",
    location: "Mumbai",
    courses: ["MBA", "BBA"],
    image:
      "https://tse3.mm.bing.net/th/id/OIP.WukAD0V_yeccV1YK3gIoyAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Symbiosis Distance Learning",
    location: "Pune",
    courses: ["MBA", "PGDM"],
    image:
      "https://education.indianexpress.com/storage/images/8e28d188caa5ebd24ff4.jpg",
  },
  {
    name: "IGNOU",
    location: "New Delhi",
    courses: ["MBA", "BBA", "PGDM"],
    image:
      "https://digitallearning.eletsonline.com/wp-content/uploads/2021/07/IGNOU-extends-admission.jpg",
  },
  {
    name: "Amity University Online",
    location: "Noida",
    courses: ["MBA", "BBA"],
    image:
      "/amitty univeristy.webp",
  },
  {
    name: "IMT Centre for Distance Learning",
    location: "Ghaziabad",
    courses: ["PGDM", "Executive MBA"],
    image:
      "https://www.dialeducation.com/assets/images/gallery/gallery_1573794017.jpg",
  },
  {
    name: "LPU Distance Education",
    location: "Punjab",
    courses: ["MBA", "BBA"],
    image:
      "https://cache.careers360.mobi/media/article_images/2019/11/16/LPU_Law.jpg",
  },
  {
    name: "Annamalai University Distance Education",
    location: "Tamil Nadu",
    courses: ["MBA", "PGDM"],
    image:
      "https://tse1.mm.bing.net/th/id/OIP.KITcltqT1isjXRsw_XQ3VgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
],  



PostGraduation: [
  {
    name: "NMIMS Global",
    location: "Mumbai",
    courses: ["MBA", "PGDM"],
    image:
    "https://tse3.mm.bing.net/th/id/OIP.WukAD0V_yeccV1YK3gIoyAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Symbiosis Distance Learning",
    location: "Pune",
    courses: ["MBA", "PGDM"],
    image:
    "https://education.indianexpress.com/storage/images/8e28d188caa5ebd24ff4.jpg",
  },
  {
    name: "IGNOU",
    location: "New Delhi",
    courses: ["MBA", "MA", "MCom", "MCA"],
    image:
          "https://digitallearning.eletsonline.com/wp-content/uploads/2021/07/IGNOU-extends-admission.jpg",
  },
  {
    name: "Amity University O",
    location: "Noida",
    courses: ["MBA", "MCA", "MA"],
    image:
      "/amitty univeristy.webp",
  },
  {
    name: "IMT Centre for Distance Learning",
    location: "Ghaziabad",
    courses: ["PGDM", "Executive MBA"],
    image:
        "https://www.dialeducation.com/assets/images/gallery/gallery_1573794017.jpg",
  },
  {
    name: "LPU Distance Education",
    location: "Punjab",
    courses: ["MBA", "MCom", "MCA"],
    image:
      "https://cache.careers360.mobi/media/article_images/2019/11/16/LPU_Law.jpg",
  },
  {
    name: "Annamalai University Distance Education",
    location: "Tamil Nadu",
    courses: ["MBA", "MCom", "MA"],
    image:
      "https://tse1.mm.bing.net/th/id/OIP.KITcltqT1isjXRsw_XQ3VgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
],


medical: [
  {
    name: "IGNOU",
    location: "New Delhi",
    courses: [
      "PG Diploma in Hospital & Health Management",
      "PG Diploma in Public Health",
      "MSc Dietetics & Food Service Management"
    ],
    image:
   "https://digitallearning.eletsonline.com/wp-content/uploads/2021/07/IGNOU-extends-admission.jpg",
  },
  {
    name: "Annamalai University Distance Education",
    location: "Tamil Nadu",
    courses: [
      "MBA Hospital Management",
      "MSc Psychology",
      "PG Diploma in Medical Lab Technology"
    ],
    image:
      "https://tse1.mm.bing.net/th/id/OIP.KITcltqT1isjXRsw_XQ3VgHaE7?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Tamil Nadu Open University",
    location: "Chennai",
    courses: [
      "BSc Medical Laboratory Technology",
      "MSc Psychology",
      "PG Diploma in Health Sciences"
    ],
    image:
      "https://img.studyclap.com/img/institute/university/original/5340/tnou-chennai-525df8c190.jpg",
  },
  {
    name: "University of Madras – Institute of Distance Education",
    location: "Chennai",
    courses: [
      "MSc Clinical Psychology",
      "PG Diploma in Health Sciences"
    ],
    image:
     "https://distanceeducationschool.com/wp-content/uploads/2022/05/UNIVERSITY-OF-MADRAS.jpg"
  },
  {
    name: "Karnataka State Open University",
    location: "Mysuru",
    courses: [
      "MSc Psychology",
      "PG Diploma in Health Care Management"
    ],
    image:
     "https://tse4.mm.bing.net/th/id/OIP.LiRrA5QN2zrER5dTzNEjQgHaE4?rs=1&pid=ImgDetMain&o=7&rm=3"
  },
]







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
