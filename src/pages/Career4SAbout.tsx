import { CheckCircle, PenTool, Plane, Microscope, Building2 } from "lucide-react";
import { useParams } from "react-router-dom";

/* ===================== MAIN PAGE ===================== */
export default function Career4SAbout() {
  const { domain } = useParams();

  return (
    <div className="bg-white">

      {/* ===================== WHO WE ARE ===================== */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-start">

          {/* LEFT CONTENT */}
          <div>
            <span className="inline-block mb-4 text-sm font-semibold tracking-widest text-red-600 uppercase">
              Who We Are
            </span>

            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              Welcome To <span className="text-orange-600">Career 4S</span>
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              Career 4S is a trusted global education consultancy dedicated to
              guiding students toward international education opportunities.
              Our mission is to simplify the admission process through ethical,
              transparent, and personalized counselling.
            </p>

            <p className="text-gray-600 leading-relaxed mb-10">
              We partner with globally recognized universities across
              Engineering, Medical, Management and Post Graduation programs,
              ensuring long-term academic and career success.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-4 mb-12">
              {[
                "30+ Years of Combined Experience",
                "Helping 5,000+ Students Currently",
                "Top Government & Private Universities",
                "Personalized Career Guidance",
                "Transparent Admission Process",
                "World-Class Student Support",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-red-500 mt-1" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            {/* BADGES */}
            <div className="flex flex-wrap gap-8">
              <Badge title="30+" subtitle="Years Experience" />
              <Badge title="ISO" subtitle="Quality Focused" />
              <Badge title="Awarded" subtitle="Student Success" />
            </div>
          </div>

          {/* RIGHT FORM */}
          <div className="bg-[#0B2E45] rounded-2xl p-10 text-white shadow-xl">
            <h3 className="text-2xl font-bold mb-3">
              Dream With Career 4S
            </h3>

            <p className="text-sm text-gray-200 mb-8">
              Help us know you better. Fill in the details and our team will
              contact you within the next 24 hours.
            </p>

            <form className="space-y-5">
              <input className="input" placeholder="Name *" />
              <input className="input" placeholder="E-mail *" />
              <select className="input">
                <option>Select Your Country</option>
                <option>India</option>
                <option>USA</option>
                <option>UK</option>
                <option>Canada</option>
                <option>Australia</option>
              </select>

              <div className="flex gap-3">
                <input value="+91" readOnly className="w-20 input bg-gray-100" />
                <input className="flex-1 input" placeholder="Phone Number" />
              </div>

              <select className="input">
                <option>Select Your State</option>
              </select>

              <select className="input">
                <option>Select Your City</option>
              </select>

              <button className="w-full bg-orange-500 hover:bg-orange-600 transition text-white font-semibold py-3 rounded-lg">
                SUBMIT NOW
              </button>
            </form>
          </div>

        </div>
      </section>

      {/* ===================== SERVICES ===================== */}
      <ServicesSection domain={domain} />
    </div>
  );
}

/* ===================== SERVICES SECTION ===================== */
const ServicesSection = ({ domain }: { domain?: string }) => {
  const SERVICES: Record<string, any[]> = {
    medical: [
      {
        icon: PenTool,
        title: "100% Admission Support",
        desc: "Complete assistance from counselling to university admission.",
      },
      {
        icon: Plane,
        title: "Visa & Travel Arrangements",
        desc: "Hassle-free visa processing and best travel planning.",
      },
      {
        icon: Microscope,
        title: "FMGE / NExT Coaching",
        desc: "Expert coaching support throughout your medical education.",
      },
      {
        icon: Building2,
        title: "Hostels, Canteens & More",
        desc: "Comfortable accommodation and Indian food facilities.",
      },
    ],

    engineering: [
      {
        icon: PenTool,
        title: "University Shortlisting",
        desc: "Identify the best engineering universities globally.",
      },
      {
        icon: Plane,
        title: "Visa & Travel Assistance",
        desc: "Smooth visa processing and relocation support.",
      },
      {
        icon: Microscope,
        title: "Internships & Projects",
        desc: "Industry exposure and global internship opportunities.",
      },
      {
        icon: Building2,
        title: "Student Accommodation",
        desc: "Housing, meals and on-ground student support.",
      },
    ],

    management: [
      {
        icon: PenTool,
        title: "Profile Evaluation",
        desc: "Career-focused profile building and guidance.",
      },
      {
        icon: Plane,
        title: "Visa & Travel Support",
        desc: "Complete documentation and visa handling.",
      },
      {
        icon: Microscope,
        title: "Interview Preparation",
        desc: "Mock interviews and SOP development.",
      },
      {
        icon: Building2,
        title: "Campus Life Support",
        desc: "Accommodation and lifestyle assistance.",
      },
    ],

    "post-graduation": [
      {
        icon: PenTool,
        title: "Course & Research Mapping",
        desc: "Choose the right specialization and research focus.",
      },
      {
        icon: Plane,
        title: "Visa & Travel Help",
        desc: "End-to-end documentation and visa services.",
      },
      {
        icon: Microscope,
        title: "Academic Research Support",
        desc: "Thesis, projects and faculty mentorship.",
      },
      {
        icon: Building2,
        title: "Settlement Assistance",
        desc: "Accommodation and post-arrival support.",
      },
    ],
  };

  const list = SERVICES[domain || "medical"] || SERVICES.medical;

  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-sm uppercase tracking-widest text-red-600 font-semibold">
            How Do We Help?
          </span>
          <h2 className="text-4xl font-bold mt-3">
            Services at <span className="text-orange-600">Career 4S</span>
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mt-5">
            We support students not just till admission, but throughout their
            complete academic journey abroad.
          </p>
        </div>

        {/* SERVICES GRID */}
        <div className="grid lg:grid-cols-3 gap-14 items-center">
          <div className="space-y-12">
            {list.slice(0, 2).map((item) => (
              <ServiceItem key={item.title} {...item} />
            ))}
          </div>

          <div className="flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
              alt="Students"
              className="max-h-[420px] object-contain"
            />
          </div>

          <div className="space-y-12">
            {list.slice(2, 4).map((item) => (
              <ServiceItem key={item.title} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== SERVICE ITEM ===================== */
const ServiceItem = ({
  icon: Icon,
  title,
  desc,
}: {
  icon: any;
  title: string;
  desc: string;
}) => (
  <div className="flex gap-5">
    <div className="w-14 h-14 rounded-lg border-2 border-red-500 flex items-center justify-center">
      <Icon className="w-7 h-7 text-red-500" />
    </div>
    <div>
      <h4 className="text-xl font-semibold mb-2">{title}</h4>
      <p className="text-gray-600">{desc}</p>
    </div>
  </div>
);

/* ===================== BADGE ===================== */
const Badge = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => (
  <div className="flex flex-col items-center text-center">
    <div className="w-24 h-24 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 font-bold text-lg">
      {title}
    </div>
    <p className="mt-2 text-sm text-gray-600">{subtitle}</p>
  </div>
);

/* ===================== INPUT STYLE ===================== */
const inputClass =
  "w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none";

declare global {
  interface JSX {
    IntrinsicElements: {
      input: any;
      select: any;
    };
  }
}
