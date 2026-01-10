import { useParams, NavLink,useNavigate } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Footer } from "@/components/Footer";
import Career4SAbout from "./Career4SAbout";
import { Link } from "react-router-dom";
import Career4SLogo from "@/components/Career4SLogo";
import WhatsApp from "@/components/WhatsApp";

import {
  ArrowRight,
  GraduationCap,
  Users,
  Award,
  Sparkles,
  Rocket,
} from "lucide-react";
import { Button } from "@/components/ui/button";

/* ===================== MAIN PAGE ===================== */
export default function AbroadHome() {
  const { domain } = useParams();
  const navigate = useNavigate();

  return (
    <div className="relative overflow-hidden bg-background text-foreground">
      <Navbar />
      <WhatsApp />
      {/* ================= HERO ================= */}
      <section
        id="home"
        className="relative min-h-screen flex items-center pt-20 overflow-hidden"
      >
        {/* Animated Background */}
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute inset-0 noise" />

        {/* Floating Orbs */}
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-float-reverse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl animate-morph" />

        {/* Orbiting Dots */}
        <div className="absolute top-1/4 right-1/4 w-4 h-4 bg-primary rounded-full shadow-neon animate-orbit" />
        <div
          className="absolute bottom-1/3 left-1/3 w-3 h-3 bg-primary/70 rounded-full shadow-neon animate-orbit"
          style={{ animationDelay: "-5s" }}
        />

        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-8">
              {/* Badge */}
              <div className="inline-flex items-center gap-3 glass rounded-full px-5 py-2 animate-fade-up">
                <Sparkles className="w-4 h-4 text-primary animate-pulse" />
                <span className="text-sm uppercase tracking-wider text-primary">
                  Trusted by 10,000+ Students
                </span>
              </div>

              {/* Heading */}
              <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold leading-tight animate-fade-up">
                Shape Your <br />
                <span className="text-gradient">
                  {domain ? domain : "Global"} Future
                </span>
                <br />
                With Us
              </h1>

              {/* Description */}
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-up">
                Career4S Pvt Ltd combines{" "}
                <span className="text-primary font-semibold">
                  AI-powered guidance
                </span>{" "}
                with expert counselling to unlock your full potential.
              </p>

              {/* CTA BUTTONS (FIXED – NO VARIANT ERROR) */}
              <div className="flex flex-wrap gap-4 animate-fade-up">
                <Button
                  size="lg"
                  className="bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg"
                >
                  <Rocket className="w-5 h-5 mr-2" />
                  Launch Your Career
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                   <Button
  size="lg"
  variant="outline"
  className="border-primary text-primary hover:bg-primary/10"
  onClick={() => domain && navigate(`/universities/${domain}`)}
>
  Explore universities
</Button>

              </div>

              {/* STATS */}
              <div className="grid grid-cols-3 gap-6 pt-8 animate-fade-up">
                {[
                  { icon: GraduationCap, value: "10K+", label: "Students" },
                  { icon: Users, value: "500+", label: "Colleges" },
                  { icon: Award, value: "15+", label: "Years" },
                ].map((stat, index) => (
                  <div key={stat.label} className="group">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-2xl font-bold">
                        {stat.value}
                      </span>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT VISUAL */}
            <div className="relative hidden lg:flex items-center justify-center">
              <div className="relative w-[480px] h-[480px] animate-float">
                <div className="absolute inset-0 rounded-full border-2 border-primary/20 animate-border-glow" />
                <div className="absolute inset-6 rounded-full border border-primary/30 animate-rotate-slow" />
                <div
                  className="absolute inset-12 rounded-full border border-primary/20 animate-rotate"
                  style={{ animationDirection: "reverse" }}
                />

                <div className="absolute inset-20 rounded-full bg-gradient-card glass flex items-center justify-center shadow-neon">
                  <GraduationCap className="w-16 h-16 text-primary" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </section>
        {/* ================= ABOUT ================= */}
        <img src="/banner2.png" alt="image" />
        <Career4SAbout />
        

          <TestimonialsSection />
                <div className="w-full overflow-hidden">
  <div className="h-64 w-full overflow-hidden">
  
</div>

</div>




      {/* ================= OTHER SECTIONS (UNCHANGED) ================= */}
      <Footer />
      <AnimationStyles />

    </div>
  );
}

/* ===================== NAVBAR ===================== */
const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* LOGO (LEFT) */}
        <Link to="/" className="flex items-center">
          <Career4SLogo />
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 font-medium">
          {[
            { name: "Testimonials", to: "/testimonials" },
            { name: "Admission", to: "/admissionab" },
            { name: "Documents", to: "/doc" },
            { name: "Entrance Exams", to: "/exsec" },
            { name: "Contact", to: "/contact" },
                { name: "Visa process", to: "/visa" },
                    { name: "Counselling", to: "/counsellingab" },

          ].map((item) => (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                isActive
                  ? "text-primary font-semibold"
                  : "text-muted-foreground hover:text-primary transition"
              }
            >
              {item.name}
            </NavLink>
          ))}
        </div>

        {/* DESKTOP CTA */}
        <Link to='/contact' className="hidden md:block bg-primary text-primary-foreground hover:bg-primary/90">
          Free Consultation
        </Link >

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-foreground"
        >
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 px-6 py-6 font-medium">
            {[
                    { name: "Testimonials", to: "/testimonials" },
            { name: "Admission", to: "/admissionab" },
            { name: "Documents", to: "/doc" },
            { name: "Entrance Exams", to: "/exsec" },
            { name: "Contact", to: "/contact" },
                { name: "visa process", to: "/visa" },
                    { name: "Counselling", to: "/counsellingab" },
            ].map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                onClick={() => setOpen(false)}
                className="text-muted-foreground hover:text-primary transition"
              >
                {item.name}
              </NavLink>
            ))}

            <Link to='/contact' className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90">
              Free Consultation
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
<div className="w-full overflow-hidden">
  <img
    src="/aeroplane.png"
    alt="Divider"
    className="w-full block"
  />
</div>
// ===================== TESTIMONIALS SECTION ===================== //
const TestimonialsSection = () => (
  <section className="py-20 bg-white">
    <div className="max-w-7xl mx-auto px-6">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <span className="inline-block mb-3 rounded-full bg-orange-100 text-orange-600 px-4 py-1 text-sm font-semibold">
          Testimonials
        </span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          What Our Students Say About Us
        </h2>
        <p className="mt-4 text-gray-500 text-base md:text-lg">
          Trusted by students worldwide for overseas education guidance and
          career counselling.
        </p>
      </div>

      {/* Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Ananya Sharma",
            country: "Canada",
            flag: "🇨🇦",
            text:
              "Career4S made my Canada admission journey effortless. From university shortlisting to visa approval, everything was handled professionally.",
          },
          {
            name: "Rohit Verma",
            country: "United Kingdom",
            flag: "🇬🇧",
            text:
              "Honest guidance and constant support. I successfully got admission in the UK and felt confident at every step of the process.",
          },
          {
            name: "Sneha Patel",
            country: "Australia",
            flag: "🇦🇺",
            text:
              "Very supportive team with deep knowledge of overseas education. Career4S helped me achieve my dream of studying in Australia.",
          },
        ].map((item, index) => (
          <div
            key={index}
            className="relative rounded-2xl border border-orange-100 bg-white p-6 shadow-sm hover:shadow-md transition"
          >
            {/* Quote Icon */}
            <div className="absolute -top-4 right-6 w-8 h-8 rounded-full bg-orange-500 text-white flex items-center justify-center text-xl font-bold">
              “
            </div>

            <p className="text-gray-600 leading-relaxed mb-6">
              {item.text}
            </p>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-lg">
                {item.flag}
              </div>
              <div>
                <p className="font-semibold text-gray-900">{item.name}</p>
                <p className="text-sm text-gray-500">
                  {item.country}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);



/* ===================== ANIMATIONS ===================== */
const AnimationStyles = () => (
  <style>{`
    .animate-fade-up {   
      animation: fadeUp 0.8s ease forwards;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(30px); }
      to { opacity: 1; transform: translateY(0); }
    }
  `}</style>
);
