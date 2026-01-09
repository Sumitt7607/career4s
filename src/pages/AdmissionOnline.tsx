import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  Stethoscope,
  BarChart3,
  BookOpen,
  ArrowRight,
} from "lucide-react";
import { useEffect, useRef, useState, ReactNode } from "react";
import { Footer } from "@/components/Footer";

import Career4SLogo from "@/components/Career4SLogo";

/* ================= ANIMATED SECTION ================= */
const AnimatedSection = ({
  children,
  delay = 0,
}: {
  children: ReactNode;
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
        show ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
    >
      {children}
    </div>
  );
};

/* ================= DOMAIN DATA ================= */
const domains = [
  {
    id: "engineering",
    title: "Engineering",
    description: "Build the future with cutting-edge technology and innovation",
    icon: GraduationCap,
    colleges: "150+",
    path: "/engineering",
  },
  {
    id: "medical",
    title: "Medical",
    description: "Heal the world and make a difference in healthcare",
    icon: Stethoscope,
    colleges: "120+",
    path: "/medical",
  },
  {
    id: "management",
    title: "Management",
    description: "Lead organizations and drive business excellence",
    icon: BarChart3,
    colleges: "200+",
    path: "/management",
  },
  {
    id: "postgraduation",
    title: "Post Graduation",
    description: "Advance your expertise with specialized programs",
    icon: BookOpen,
    colleges: "180+",
    path: "/postgraduation",
  },
];

// /* ================= NAVBAR ================= */

const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Universities", path: "/universities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-orange-600">
          <Career4SLogo />
             </Link>
{/* 
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
        </div> */}

        <Link
          to="/apply"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition shadow"
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};



/* ================= MAIN PAGE ================= */
const AdmissionOnline = () => {
  return (
    <>
      <Navbar />
      {/* <Career4SLogo /> */}

      <main className="pt-16 min-h-screen bg-gray-50 overflow-hidden">
        {/* ================= HERO ================= */}
        <section className="relative bg-gradient-to-br from-orange-50 via-white to-orange-100">
          {/* Floating blobs */}
          <div className="absolute top-20 left-10 w-72 h-72 bg-orange-200/40 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-300/30 rounded-full blur-3xl animate-float" />

          <div className="relative max-w-7xl mx-auto px-4 py-32 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight">
                Shape Your{" "}
                <span className="relative text-orange-500">
                  Future
                  <span className="absolute left-0 -bottom-2 w-full h-1 bg-orange-400 rounded-full" />
                </span>
                <br /> With Excellence
              </h1>

              <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-12">
                Discover top colleges across Engineering, Medical, Management,
                and Post-Graduation programs.
              </p>

              <Link
                to="/apply"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-orange-600 transition shadow-lg hover:shadow-orange-400/40"
              >
                Start Your Journey
                <ArrowRight className="w-5 h-5" />
              </Link>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= DOMAINS ================= */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Choose Your Path
                </h2>
                <p className="text-gray-600">
                  Select your domain and explore top colleges
                </p>
              </div>
            </AnimatedSection>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {domains.map((domain, i) => (
                <AnimatedSection key={domain.id} delay={i * 120}>
                  <Link
                    to={domain.path}
                    className="group relative block rounded-3xl p-[2px]
                               bg-gradient-to-br from-orange-400/40 via-transparent to-orange-400/40
                               transition-all duration-500 hover:-translate-y-3"
                  >
                    <div className="relative bg-white rounded-3xl p-8 h-full shadow-md group-hover:shadow-xl transition">
                      <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center mb-6 group-hover:scale-110 transition">
                        <domain.icon className="w-8 h-8 text-orange-500" />
                      </div>

                      <h3 className="text-xl font-semibold text-gray-900 mb-3">
                        {domain.title}
                      </h3>

                      <p className="text-sm text-gray-600 mb-8 leading-relaxed">
                        {domain.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-orange-600 bg-orange-50 px-3 py-1 rounded-full">
                          🎓 {domain.colleges} Colleges
                        </span>

                        <ArrowRight className="w-5 h-5 text-orange-500 transition-transform duration-300 group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default AdmissionOnline;
