import { useEffect, useRef, useState } from "react";
import { GraduationCap, CheckCircle2, ArrowRight, BookOpen, Award, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const stats = [
  { label: "Universities", value: "500+", icon: BookOpen },
  { label: "Students Placed", value: "25,000+", icon: Users },
  { label: "Success Rate", value: "98%", icon: Award },
  { label: "Years Experience", value: "15+", icon: Star },
];

const features = [
  "Direct admission to top medical & engineering colleges",
  "MBBS, BDS, BAMS, MD, MS & more programs",
  "Transparent process with guaranteed seat confirmation",
  "Personalized counseling & complete documentation support",
  "Affordable fee structure with flexible payment options",
  "Pan-India coverage across all major states",
];

const colleges = [
  { name: "AIIMS", location: "New Delhi", tag: "Medical" },
  { name: "IIT Bombay", location: "Mumbai", tag: "Engineering" },
  { name: "MAMC", location: "Delhi", tag: "Medical" },
  { name: "CMC Vellore", location: "Tamil Nadu", tag: "Medical" },
  { name: "NIT Trichy", location: "Tamil Nadu", tag: "Engineering" },
  { name: "JIPMER", location: "Puducherry", tag: "Medical" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) setInView(true);
    }, { threshold });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

const ManagementQuotaAdmission = () => {
  const hero = useInView();
  const statsSection = useInView();
  const featuresSection = useInView();
  const collegesSection = useInView();
  const ctaSection = useInView();

  return (
    <section className="relative overflow-hidden bg-white">
      
      {/* Background blobs */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 h-[500px] w-[500px] rounded-full bg-orange-400/20 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 -right-40 h-[400px] w-[400px] rounded-full bg-orange-500/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-0 left-1/3 h-[300px] w-[300px] rounded-full bg-amber-400/20 blur-3xl animate-pulse" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-20">

        {/* HERO */}
        <div ref={hero.ref} className={`text-center transition-all duration-1000 ${hero.inView ? "opacity-100" : "opacity-0 translate-y-10"}`}>
          
          <span className="inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-1.5 text-sm font-semibold text-orange-600 mb-6">
            <GraduationCap className="h-4 w-4" />
            Management Quota Admissions 2025
          </span>

          <h2 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
            Your Gateway to{" "}
            <span className="bg-gradient-to-r from-orange-500 to-orange-400 bg-clip-text text-transparent">
              Top Indian Colleges
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Secure your seat in India's premier medical & engineering institutions through management quota.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            {/* <Button className="h-12 rounded-full bg-gradient-to-r from-orange-500 to-orange-400 px-8 text-white shadow-lg hover:scale-105 transition">
              Get Free Counseling <ArrowRight className="ml-1 h-4 w-4" />
            </Button>

            <Button variant="outline" className="h-12 rounded-full border-orange-400 px-8 text-orange-500 hover:bg-orange-50">
              View Colleges
            </Button> */}
          </div>
        </div>

        {/* STATS */}
        <div ref={statsSection.ref} className="mt-20 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {stats.map((stat, i) => (
            <div key={i} className="rounded-2xl bg-white border border-gray-200 p-6 text-center shadow hover:shadow-lg transition">
              <stat.icon className="mx-auto mb-3 h-8 w-8 text-orange-500" />
              <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* FEATURES */}
        <div ref={featuresSection.ref} className="mt-20 grid lg:grid-cols-2 gap-12 items-center">
          
          <div>
            <h3 className="text-3xl font-bold text-gray-900">
              Why Choose <span className="text-orange-500">Our Services?</span>
            </h3>

            <ul className="mt-8 space-y-4">
              {features.map((f, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="text-green-500 mt-1" />
                  <span className="text-gray-700">{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Process Card */}
          <div className="rounded-3xl bg-gradient-to-br from-orange-500 to-orange-400 p-1">
            <div className="rounded-3xl bg-white p-8">
              <h4 className="font-bold text-gray-900 mb-6">Admission Process</h4>

              {["Apply & Consult", "College Selection", "Seat Confirmation"].map((step, i) => (
                <div key={i} className="flex items-center gap-4 mb-4">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-full text-white ${
                    i === 0 ? "bg-orange-500" : i === 1 ? "bg-orange-400" : "bg-green-500"
                  }`}>
                    {i + 1}
                  </div>
                  <span className="text-gray-800">{step}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* COLLEGES */}
        {/* <div ref={collegesSection.ref} className="mt-20">
          <h3 className="text-center text-3xl font-bold text-gray-900">
            Top <span className="text-orange-500">Institutions</span>
          </h3>

          <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {colleges.map((c, i) => (
              <div key={i} className="rounded-2xl border border-gray-200 bg-white p-6 hover:shadow-lg transition">
                <span className="text-xs bg-orange-100 text-orange-500 px-3 py-1 rounded-full">
                  {c.tag}
                </span>
                <h4 className="mt-3 text-xl font-bold text-gray-900">{c.name}</h4>
                <p className="text-sm text-gray-500">{c.location}</p>
              </div>
            ))}
          </div>
        </div> */}

        {/* CTA */}
        <div ref={ctaSection.ref} className="mt-20 rounded-3xl bg-gradient-to-r from-orange-500 to-orange-400 p-10 text-center">
          <h3 className="text-3xl font-bold text-white">Ready to Secure Your Future?</h3>
          <p className="text-white/80 mt-4">
            Connect with our experts today for a free consultation.
          </p>

          <div className="mt-8 flex justify-center gap-4 flex-wrap">
        {/* /    */}

            {/* <Button variant="outline" className="border-white text-white px-8 py-3 rounded-full hover:bg-white/10">
              Call Now
            </Button> */}
          </div>
        </div>

      </div>
    </section>
  );
};

export default ManagementQuotaAdmission;