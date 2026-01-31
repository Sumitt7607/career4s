import { useParams, Link } from "react-router-dom";
import { ArrowRight, GraduationCap } from "lucide-react";
import { Footer } from "@/components/Footer";
import { HeroSection } from "./Herosection";
import { useEffect, useRef, useState } from "react";
import { AboutSectiononline } from "./AboutSectiononline";
import { WhyChooseUsSection } from "./WhyChooseUsSection";
import { Button } from "@/components/ui/button";

import { AdmissionsSectionProcess } from "./AdmissionsSectionProcess";
import WhatsApp from "@/components/WhatsApp";
/* ================= COLLEGE DATA ================= */
const COLLEGES: Record<
  string,
  { name: string; image: string }[]
> = {
  engineering: [
    {
      name: "Manipal University Online",
      image:
        "/maniopal.webp",
    },
    {
      name: "Jain University",
      image:
        "/jain.webp",
    },
    {
      name: "Mangalayatan University",
      image:
        "/managal.webp",
    },
    {
      name: "Kalinga University",
      image:
        "/kalinga.webp",
    },
    {
      name: "PCCOE Pune",
      image:
        "/pccoe.jpg",
    },
    {
      name: "Amity University Online",
      image:
        "/amitty univeristy.webp",
    },
  ],

  medical: [
    {
      name: " Symbiosis School of Open & Distance Learning",
      image:
        "/symbossis.webp",
    },
    {
      name: "Jawaharlal Institute of Postgraduate Medical Education & Research (JIPMER)",
      image:
        "/jiop.webp",
    },
    {
      name: "King George’s Medical University (KGMU), Lucknow",
      image:
        "/kgmuluck.avif",
    },
    {
      name: "Christian Medical College (CMC), Vellore",
      image:
        "/cmcv.webp",
    },
    {
      name: "St John’s National Academy of Health Sciences, Bangalore",
      image:
        "/stjh.jpg",
    },
  ],

management: [
  {
    name: "XLRI Jamshedpur",
    image:
      "https://timespro.com/_next/image?url=https:%2F%2Ftimesproweb-static-backend-prod.s3.ap-south-1.amazonaws.com%2FXLRI_Jamshedpur_banner_de272950b4.webp&w=3840&q=75",
  },
  {
    name: "SP Jain Institute of Management & Research (SPJIMR)",
    image:
      "https://www.searchurcollege.com/exam/admin/search/gallery/college/col_226.jpg",
  },
  {
    name: "NMIMS University",
    image:
      "https://tse3.mm.bing.net/th/id/OIP.WukAD0V_yeccV1YK3gIoyAAAAA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "Symbiosis Institute of Business Management (SIBM)",
    image:
      "https://education.indianexpress.com/storage/images/8e28d188caa5ebd24ff4.jpg",
  },
  {
    name: "MDI Gurgaon",
    image:
      "https://gyaanarth.com/wp-content/uploads/2021/07/mdi-gurgaon-4.jpg",
  },
],


postgraduation: [
  {
    name: "Amity University",
    image:
      "https://askusedu.com/blogdashboard/wp-content/uploads/2024/02/Amity-University-300x154.webp",
  },
  {
    name: "Manipal Academy of Higher Education",
    image:
      "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Symbiosis International University",
    image:
      "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "VIT University",
    image:
      "https://tse2.mm.bing.net/th/id/OIP.72LN14E2M6bnupqvwEGH0AHaEA?rs=1&pid=ImgDetMain&o=7&rm=3",
  },
  {
    name: "UPES Dehradun",
    image:
      "https://img.jagranjosh.com/images/2022/December/27122022/University-of-Petroleum-and-Energy-Studies-UPES-Dehradun-Campus-View-2.jpg",
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
<Button
  asChild
  size="sm"
  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full"
>
<a
  href="https://wa.me/919650831008?text=Hello%20I%20want%20to%20apply"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition shadow inline-block"
>
  Apply Now
</a>

</Button>


                      {/* <button
                        className="inline-flex items-center gap-1 text-orange-500
                                   font-medium text-sm hover:gap-2 transition-all"
                      >
                        View Details <ArrowRight className="w-4 h-4" />
                      </button> */}
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
