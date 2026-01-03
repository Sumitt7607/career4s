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
    const obs = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setShow(true),
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
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

/* ================= NAVBAR ================= */
const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Universities", path: "/universities" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-orange-600">
          Career<span className="text-gray-800">4S</span>
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
          to="/apply"
          className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition"
        >
          Apply
        </Link>
      </div>
    </nav>
  );
};

/* ================= MAIN PAGE ================= */
const Index = () => {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gray-50 pt-16">
        {/* ================= HERO ================= */}
        <section className="relative overflow-hidden bg-white">
          <div className="relative container mx-auto px-4 py-24 text-center">
            <AnimatedSection>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
                Shape Your{" "}
                <span className="text-orange-500">Future</span>
                <br /> With Excellence
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12">
                Discover top colleges across Engineering, Medical, Management,
                and Post-Graduation programs.
              </p>
            </AnimatedSection>
          </div>
        </section>

        {/* ================= DOMAINS ================= */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <AnimatedSection>
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Choose Your Path
                </h2>
                <p className="text-muted-foreground">
                  Select your domain and explore top colleges
                </p>
              </div>
            </AnimatedSection>

            {/* HIGH VISIBILITY CARDS */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
              {domains.map((domain, i) => (
                <AnimatedSection key={domain.id} delay={i * 120}>
                  <Link
                    to={domain.path}
                    className="group block bg-white border border-gray-200
                               rounded-2xl p-8
                               shadow-sm
                               transition-all duration-500
                               hover:-translate-y-2 hover:shadow-xl"
                  >
                    {/* ICON */}
                    <div className="w-14 h-14 rounded-xl bg-orange-50
                                    flex items-center justify-center mb-6">
                      <domain.icon className="w-7 h-7 text-orange-500" />
                    </div>

                    {/* TITLE */}
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">
                      {domain.title}
                    </h3>

                    {/* DESCRIPTION */}
                    <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                      {domain.description}
                    </p>

                    {/* FOOTER */}
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-orange-500">
                        {domain.colleges} Colleges
                      </span>

                      <ArrowRight className="w-5 h-5 text-orange-500
                                             transition-transform duration-300
                                             group-hover:translate-x-1" />
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default Index;
