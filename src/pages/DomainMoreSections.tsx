
import { useEffect, useRef, useState } from "react";
/* ===================== SPACING PRESET ===================== */
// const SECTION = "py-8 sm:py-12";


/* ===================== PROPS ===================== */
interface DomainMoreSectionsProps {
  field: string;
}

interface FAQItem {
  q: string;
  a: string;
}

/* ===================== MAIN ===================== */
export default function DomainMoreSections({
  field,
}: DomainMoreSectionsProps) {
  return (
    <>
      
      {/* <ScrollSpyNav /> */}
      {/* <StickyEnquiryForm /> */}
      <LeadPopup />
      <WhatsAppCTA />

      <div className="mt-24 space-y-16">
        <Hero field={field} />
        
        <Workflow />
        <Offerings />
        <Achievements />
        <WhyCareer4S field={field} />
        <FAQ />
      </div>

      <GlobalStyles />
    </>
  );
}

/* ===================== HERO ===================== */
const Hero = ({ field }: { field: string }) => {
  const imgRef = useRef<HTMLImageElement | null>(null);
  useParallax(imgRef, 0.25);

  return (
    <section id="hero" className="relative h-[80vh] overflow-hidden rounded-3xl">
      <img
        ref={imgRef}
        src={HERO_IMAGES[field] ?? HERO_IMAGES.default}
        alt={field}
        className="absolute inset-0 w-full h-full object-cover scale-110"
      />
      <div className="absolute inset-0 bg-black/65" />

      <div className="relative z-10 h-full flex items-center justify-center text-center px-6 animate-fade-up">
        <div className="max-w-3xl text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            {field} Admissions
          </h1>
          <p className="text-xl text-white/90">
            Trusted guidance • Verified colleges • Real results
          </p>
          <button className="mt-8 px-10 py-4 rounded-full bg-orange-500 hover:bg-orange-600 transition">
            Get Free Consultation
          </button>
        </div>
      </div>
    </section>
  );
};




/* ===================== WORKFLOW ===================== */
/* ===================== WORKFLOW ===================== */

const WORKFLOW_STEPS = [
  {
    id: 1,
    title: "Identifying Student’s Aspirations",
    desc: "We understand your goals, preferences, and future plans before starting.",
  },
  {
    id: 2,
    title: "Shortlisting of Success",
    desc: "Based on exam score & profile, we create a personalized college list.",
  },
  {
    id: 3,
    title: "One-to-One Counselling Sessions",
    desc: "Dedicated expert guidance to clear doubts and make confident decisions.",
  },
  {
    id: 4,
    title: "Complete Tracking & Monitoring",
    desc: "End-to-end support till final admission confirmation.",
  },
];

const Workflow = () => (
  <section id="workflow" className="py-6">
    {/* Heading */}
    <div className="text-center mb-20">
      <span className="inline-block bg-yellow-400 px-6 py-2 font-bold text-xl rounded-md">
        Our Course Workflow
      </span>
      <p className="mt-4 text-gray-600">
        Shaping • Sprint • Iterations • Release
      </p>
    </div>

    {/* Steps */}
    <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16">
      {WORKFLOW_STEPS.map((step, index) => (
        <div key={step.id} className="relative text-center">
          {/* Arrow */}
          {index !== WORKFLOW_STEPS.length - 1 && (
            <svg
              className="hidden md:block absolute top-16 -right-24"
              width="120"
              height="80"
              fill="none"
            >
              <path
                d="M5 10 C 60 70, 60 70, 115 40"
                stroke="#9CA3AF"
                strokeWidth="2"
                strokeDasharray="6 6"
              />
              <path
                d="M110 35 L115 40 L110 45"
                stroke="#9CA3AF"
                strokeWidth="2"
              />
            </svg>
          )}

          {/* Floating Circle (MORE JUMP) */}
          <div
            className={`relative w-40 h-40 mx-auto flex items-center justify-center rounded-full
           bg-white 
border-2 border-orange-500/60 
shadow-lg shadow-orange-200/40

            animate-float animate-float-delay-${index}`}
          >
            <span className="text-5xl font-extrabold text-black">
              {step.id}
            </span>

            {/* Dotted Ring */}
            <span className="absolute inset-[-10px] rounded-full border-2 border-dashed border-gray-400" />
          </div>

          {/* Text */}
          <h3 className="mt-8 font-bold text-lg">{step.title}</h3>
          <p className="mt-3 text-gray-600 text-sm leading-relaxed">
            {step.desc}
          </p>
        </div>
      ))}
    </div>

    {/* FLOAT ANIMATION (STRONGER JUMP) */}
    <style>{`
      @keyframes floatY {
        0%   { transform: translateY(0); }
        30%  { transform: translateY(-22px); }
        60%  { transform: translateY(10px); }
        100% { transform: translateY(0); }
      }

      .animate-float {
        animation: floatY 3.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
      }

      .animate-float-delay-0 { animation-delay: 0s; }
      .animate-float-delay-1 { animation-delay: .4s; }
      .animate-float-delay-2 { animation-delay: .8s; }
      .animate-float-delay-3 { animation-delay: 1.2s; }
    `}</style>
  </section>
);



/* ===================== OFFERINGS ===================== */
const Offerings = () => {
  return (
    <section
      id="offerings"
      className="relative py-8 sm:py-12 bg-white overflow-hidden"
    >
      {/* Top Ribbon */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10">
        <span className="inline-block bg-orange-500 text-white px-6 sm:px-10 py-2 font-bold text-lg sm:text-2xl rounded-md">
          Our Innovative Offerings
        </span>
      </div>

      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center px-4 sm:px-6 mt-8">
        {/* LEFT CONTENT */}
        <div className="order-2 lg:order-1">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            <span className="text-orange-600">Career4S</span>
          </h2>

          <p className="text-gray-700 leading-relaxed mb-8 max-w-lg">
            Career4S is an exclusive career guidance platform providing
            innovative counselling solutions to help students secure the
            right admissions with confidence and clarity.
          </p>

          <div className="space-y-6 max-w-lg">
            <ValuePoint>
              End-to-end admission guidance for students seeking higher
              education in <b>India and Abroad</b>.
            </ValuePoint>

            <ValuePoint>
              Complete support from <b>career counselling</b> and
              <b> course selection</b> to <b>college shortlisting</b>,
              applications, and visa guidance.
            </ValuePoint>

            <ValuePoint>
              Ethical, transparent, and <b>future-ready decisions</b>
              guided by experienced career advisors.
            </ValuePoint>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="order-1 lg:order-2 flex justify-center">
          <div
            className="
              relative
              w-[280px] h-[280px]
              sm:w-[360px] sm:h-[360px]
              lg:w-[520px] lg:h-[520px]
              rounded-full
              bg-orange-400
              animate-spin-center
              flex items-center justify-center
            "
          >
            <div className="absolute inset-0 flex items-center justify-center animate-counter-spin">
              <div className="space-y-4 sm:space-y-6 bg-white/95 px-6 sm:px-8 py-6 sm:py-8 rounded-3xl shadow-xl">
                <Stat value="23,00,000+" label="NEET UG Aspirants" />
                <Stat value="2,28,500+" label="NEET PG Aspirants" />
                <Stat value="1,17,500+" label="MBBS Seats" />
                <Stat value="30,700+" label="MD Seats" />
                <Stat value="15,700+" label="MS Seats" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes spinCenter {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes counterSpin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(-360deg); }
        }
        .animate-spin-center {
          animation: spinCenter 28s linear infinite;
        }
        .animate-counter-spin {
          animation: counterSpin 28s linear infinite;
        }
      `}</style>
    </section>
  );
};


/* ===================== VALUE POINT ===================== */
const ValuePoint = ({ children }: { children: React.ReactNode }) => (
  <div className="flex items-start gap-4">
    <span className="w-3 h-3 mt-2 bg-orange-500 rounded-full flex-shrink-0" />
    <p className="text-gray-700 leading-relaxed">
      {children}
    </p>
  </div>
);

/* ===================== STAT ===================== */
const Stat = ({
  value,
  label,
}: {
  value: string;
  label: string;
}) => (
  <div className="flex items-center gap-3 sm:gap-4">
    <span className="w-3 h-3 bg-orange-500 rounded-full" />
    <div>
      <p className="font-bold text-gray-900 text-sm sm:text-base">
        {value}
      </p>
      <p className="text-xs sm:text-sm font-semibold text-gray-600">
        {label}
      </p>
    </div>
  </div>
);





/* ===================== ACHIEVEMENTS ===================== */
/* ===================== ACHIEVEMENTS ===================== */
const Achievements = () => {
  const stats = [
    {
      value: 700000,
      label: "Students Positively Impacted",
      icon: "student",
    },
    {
      value: 450000,
      label: "One-to-One Counselling Sessions",
      icon: "chat",
      highlight: true,
    },
    {
      value: 3000,
      label: "Seminars & Webinars",
      icon: "seminar",
    },
  ];

  return (
    <section
      id="achievements"
      className="py-28 bg-gradient-to-b from-orange-50 to-white"
    >
      {/* Heading */}
      <div className="text-center mb-20 animate-fade-up">
        <span className="inline-block bg-orange-500 text-white px-6 py-2 font-bold text-2xl rounded-md">
          Our Achievements
        </span>

        <div className="flex justify-center gap-2 mt-6 text-orange-500 text-xl">
          ★ ★ ★ ★ ★
        </div>

        <p className="mt-4 font-semibold text-lg text-gray-700">
          One of the Highest Rated Counselling Services
        </p>
      </div>

      {/* Cards */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-16 px-6">
        {stats.map((item, index) => (
          <AchievementCard
            key={item.label}
            item={item}
            delay={index}
          />
        ))}
      </div>

      {/* STYLES */}
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(40px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-up {
          animation: fadeUp 1s ease forwards;
        }

        @keyframes floatSoft {
          0% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0); }
        }
        .animate-float-soft {
          animation: floatSoft 5s ease-in-out infinite;
        }

        .delay-0 { animation-delay: 0s; }
        .delay-1 { animation-delay: .6s; }
        .delay-2 { animation-delay: 1.2s; }

        @keyframes accentPulse {
          0%,100% { height: 30%; }
          50% { height: 70%; }
        }
        .animate-accent {
          animation: accentPulse 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

/* ===================== ACHIEVEMENT CARD ===================== */
/* ===================== ACHIEVEMENT CARD ===================== */
const AchievementCard = ({
  item,
  delay,
}: {
  item: {
    value: number;
    label: string;
    icon: string;
    highlight?: boolean;
  };
  delay: number;
}) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          animateCount();
        }
      },
      { threshold: 0.4 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  const animateCount = () => {
    let start = 0;
    const end = item.value;
    const duration = 2200;
    const step = Math.ceil(end / (duration / 16));

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        start = end;
        clearInterval(timer);
      }
      setCount(start);
    }, 16);
  };

  return (
    <div
      ref={ref}
      className={`
        group relative rounded-3xl p-12 text-center
        bg-white shadow-lg border
        transition-all duration-500 ease-out
        hover:-translate-y-4 hover:shadow-2xl
        hover:bg-orange-50
        animate-fade-up animate-float-soft delay-${delay}
        ${item.highlight ? "border-orange-500" : "border-transparent"}
      `}
    >
      {/* ORANGE SIDE ACCENT */}
      <span
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          w-1.5 h-1/3 bg-orange-500 rounded-full
          transition-all duration-500
          group-hover:h-2/3 group-hover:bg-orange-600
          group-hover:shadow-[0_0_12px_rgba(249,115,22,0.8)]
        "
      />

      {/* Icon */}
      <div
        className="
          w-16 h-16 mx-auto mb-6 flex items-center justify-center rounded-xl
          bg-orange-100 text-orange-600
          transition-all duration-500
          group-hover:bg-orange-500 group-hover:text-white
          group-hover:scale-110
        "
      >
        {getAchievementIcon(item.icon)}
      </div>

      {/* Number */}
      <p
        className="
          text-4xl font-extrabold text-gray-900
          transition-colors duration-500
          group-hover:text-orange-600
        "
      >
        {count.toLocaleString()}+
      </p>

      {/* Label */}
      <p
        className="
          mt-3 font-medium text-gray-600
          transition-colors duration-500
          group-hover:text-gray-700
        "
      >
        {item.label}
      </p>
    </div>
  );
};


/* ===================== ICONS ===================== */
function getAchievementIcon(type: string) {
  switch (type) {
    case "student":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 14l9-5-9-5-9 5 9 5z" />
          <path d="M12 14l6.16-3.422A12.083 12.083 0 0112 21a12.083 12.083 0 01-6.16-10.422L12 14z" />
        </svg>
      );
    case "chat":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M8 10h8M8 14h6" />
          <path d="M21 12a9 9 0 11-4.219-7.588L21 3v9z" />
        </svg>
      );
    case "seminar":
      return (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M12 4v16M4 12h16" />
        </svg>
      );
    default:
      return null;
  }
}


/* ===================== WHY CAREER4S ===================== */
/* ===================== WHY CAREER4S ===================== */
const WhyCareer4S = ({ field }: { field: string }) => {
  return (
    <section
      id="why"
      className="py-28 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <span className="inline-block bg-orange-500 text-white px-8 py-2 rounded-md text-2xl font-bold">
            Why Career4S
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Why Choose Career4S for{" "}
            <span className="text-orange-600">{field}</span>?
          </h2>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-700 leading-relaxed">
            Career4S is a student-first admission consultancy trusted by
            thousands of aspirants across India and abroad. Our approach
            focuses on ethical guidance, data-driven counselling, and
            end-to-end admission support.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT – CONTENT */}
          <div className="space-y-8">
            <WhyPoint
              title="Ethical & Transparent Counselling"
              text="Career4S follows a zero-pressure, ethics-driven counselling model. Our advisors recommend institutions purely based on student profile, merit, and long-term career goals."
            />

            <WhyPoint
              title="Strong Institutional Network"
              text="With partnerships across reputed universities, colleges, and international institutions, Career4S provides verified and legitimate admission pathways for students."
            />

            <WhyPoint
              title="India & Abroad Admission Expertise"
              text="From top Indian institutions to international universities, Career4S supports admissions across multiple countries with complete application, documentation, and guidance."
            />

            <WhyPoint
              title="End-to-End Support"
              text="Our team assists students throughout the journey — from counselling and shortlisting to application, documentation, and final admission confirmation."
            />
          </div>

          {/* RIGHT – IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1400"
              alt="Career4S Counselling"
              className="rounded-3xl shadow-xl w-full object-cover"
            />

            {/* Floating Badge */}
            <div className="absolute -bottom-6 left-6 bg-white px-6 py-4 rounded-2xl shadow-lg border border-orange-100">
              <p className="font-bold text-orange-600">
                Trusted Career Guidance
              </p>
              <p className="text-sm text-gray-600">
                India & Abroad Admissions
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ===================== WHY POINT ===================== */
const WhyPoint = ({
  title,
  text,
}: {
  title: string;
  text: string;
}) => (
  <div className="relative pl-10">
    {/* Accent */}
    <span className="absolute left-0 top-2 w-2 h-10 bg-orange-500 rounded-full" />

    <h4 className="text-xl font-semibold text-gray-900">
      {title}
    </h4>

    <p className="mt-2 text-gray-700 leading-relaxed">
      {text}
    </p>
  </div>
);


/* ===================== FAQ ===================== */
/* ===================== FAQ (SAFE VERSION) ===================== */

const FAQS_DATA: FAQItem[] = [
  {
    q: "Is Career4S counselling free?",
    a: "Yes, Career4S offers an initial counselling session completely free of cost to help students understand admission options."
  },
  {
    q: "Which courses does Career4S provide admission support for?",
    a: "Career4S supports Engineering, Medical, Management, Post Graduation, and various professional courses."
  },
  {
    q: "Does Career4S help with admissions abroad?",
    a: "Yes, Career4S assists students with admissions abroad including counselling, applications, and guidance."
  },
  {
    q: "Are the colleges and universities verified?",
    a: "Career4S works only with verified and approved institutions to ensure safe and genuine admissions."
  },
  {
    q: "Do you help with entrance exam counselling?",
    a: "Yes, we guide students for exams such as JEE, NEET, CUET, CAT, and other entrance examinations."
  },
  {
    q: "Can Career4S help students with low entrance exam scores?",
    a: "Yes, we explore suitable colleges and alternative admission pathways based on student profile and eligibility."
  },
  {
    q: "Does Career4S support students after admission?",
    a: "Yes, Career4S provides post-admission guidance including documentation and onboarding support."
  },
  {
    q: "Can parents join the counselling sessions?",
    a: "Yes, parents are welcome to join counselling sessions for better clarity and informed decisions."
  },
  {
    q: "How can I start my counselling with Career4S?",
    a: "You can start by filling out the enquiry form or connecting with our counselling team directly."
  }
];

const FAQ = () => {
  return (
    <section
      id="faq"
      className="py-28 bg-gradient-to-b from-white to-orange-50"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <span className="inline-block bg-orange-500 text-white px-6 py-2 rounded-md text-xl font-bold">
            FAQs
          </span>

          <h2 className="mt-6 text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-700 max-w-2xl mx-auto">
            Common questions about admissions, counselling, and Career4S
            services in India and abroad.
          </p>
        </div>

        {/* FAQ LIST */}
        <div className="space-y-5">
          {FAQS_DATA.map((item, index) => (
            <FAQAccordion key={item.q} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FAQAccordion = ({
  item,
  index,
}: {
  item: FAQItem;
  index: number;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
        rounded-2xl bg-white border border-orange-100
        shadow-sm transition-all duration-300
        hover:shadow-lg
      "
      style={{ animationDelay: `${index * 0.05}s` }}
    >
      {/* QUESTION */}
      <button
        onClick={() => setOpen(!open)}
        className="
          w-full flex items-center justify-between
          px-6 py-5 text-left
          focus:outline-none
        "
      >
        <span className="text-lg font-semibold text-gray-900 pr-6">
          {item.q}
        </span>

        {/* ICON */}
        <span
          className={`
            flex items-center justify-center
            w-9 h-9 rounded-full
            border border-orange-300
            text-orange-500 font-bold text-xl
            transition-all duration-300
            ${open ? "rotate-45 bg-orange-500 text-white" : ""}
          `}
        >
          +
        </span>
      </button>

      {/* ANSWER */}
      <div
        className={`
          grid transition-all duration-300 ease-in-out
          ${open ? "grid-rows-[1fr] px-6 pb-6" : "grid-rows-[0fr] px-6"}
        `}
      >
        <div className="overflow-hidden">
          <p className="text-gray-700 leading-relaxed">
            {item.a}
          </p>
        </div>
      </div>
    </div>
  );
};


/* ===================== SHARED ===================== */
const ImageText = ({
  id,
  title,
  text,
  img,
  reverse,
}: {
  id: string;
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
}) => (
  <section id={id} className="grid md:grid-cols-2 gap-14 items-center">
    <img
      src={img}
      alt={title}
      className={`rounded-3xl shadow-lg ${reverse ? "md:order-2" : ""}`}
    />
    <div>
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-lg text-gray-600">{text}</p>
      <button className="mt-6 px-6 py-3 border border-orange-500 rounded-full text-orange-600 hover:bg-orange-500 hover:text-white transition">
        Explore More
      </button>
    </div>
  </section>
);

/* ===================== UTIL ===================== */
const Title = ({ text, light }: { text: string; light?: boolean }) => (
  <h2
    className={`text-4xl font-bold text-center mb-16 ${
      light ? "text-white" : ""
    }`}
  >
    {text}
  </h2>
);

/* ===================== STICKY FORM ===================== */
const StickyEnquiryForm = () => (
  <div className="hidden lg:block fixed top-32 right-6 z-50 w-80 bg-white rounded-2xl shadow-2xl animate-slide-in">
    <div className="bg-orange-500 text-white p-4 rounded-t-2xl font-semibold">
      Free Consultation
    </div>
    <form className="p-6 space-y-4">
      <input className="input" placeholder="Your Name" />
      <input className="input" placeholder="Phone Number" />
      <button className="w-full bg-orange-500 text-white py-3 rounded-lg">
        Request Callback
      </button>
    </form>
  </div>
);

/* ===================== POPUP ===================== */
/* ===================== LEAD POPUP ===================== */
const LeadPopup = () => {
  const [show, setShow] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    course: "",
    interest: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 6000);
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!form.name || !form.phone) {
      alert("Please fill required details");
      return;
    }

    console.log("Lead Data:", form); // later send to backend
    setShow(false);
  };

  return (
    <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center px-4">
      <div className="relative bg-white w-full max-w-md p-10 rounded-3xl animate-scale shadow-2xl">
        {/* ❌ Close Button */}
        <button
          onClick={() => setShow(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-black text-2xl"
        >
          ×
        </button>

        {/* Header */}
        <h3 className="text-3xl font-bold mb-2 text-center">
          Need Admission Help?
        </h3>
        <p className="text-gray-600 text-center mb-6">
          Tell us a few details so our expert can guide you better
        </p>

        {/* Form */}
        <div className="space-y-4">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Full Name *"
            className="input"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone Number *"
            className="input"
          />

          <select
            name="course"
            value={form.course}
            onChange={handleChange}
            className="input"
          >
            <option value="">Select Course</option>
            <option>Engineering</option>
            <option>Medical</option>
            <option>Management</option>
            <option>Post Graduation</option>
          </select>

          <select
            name="interest"
            value={form.interest}
            onChange={handleChange}
            className="input"
          >
            <option value="">Interested In</option>
            <option>Admission in India</option>
            <option>Admission Abroad</option>
            <option>Online Learning</option>
            <option>Distance Learning</option>
          </select>
        </div>

        {/* CTA */}
        <button
          onClick={handleSubmit}
          className="mt-8 w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-full font-semibold transition"
        >
          Talk to Expert
        </button>

        {/* Trust Text */}
        <p className="text-xs text-gray-500 text-center mt-4">
          🔒 Your information is safe & will not be shared
        </p>
      </div>
    </div>
  );
};


/* ===================== WHATSAPP ===================== */
const WhatsAppCTA = () => (
  <a
    href="https://wa.me/91XXXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="fixed bottom-6 left-6 bg-green-500 text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition z-50"
  >
    💬 WhatsApp
  </a>
);

/* ===================== SCROLL SPY ===================== */
const ScrollSpyNav = () => {
  const ids = ["hero", "workflow", "offerings", "achievements", "why", "faq"];
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const fn = () =>
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < 200)
          setActive(id);
      });

    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden lg:flex flex-col gap-3 z-40">
      {ids.map((id) => (
        <a
          key={id}
          href={`#${id}`}
          className={`w-3 h-3 rounded-full ${
            active === id ? "bg-orange-500" : "bg-gray-300"
          }`}
        />
      ))}
    </div>
  );
};

/* ===================== PARALLAX ===================== */
function useParallax(
  ref: React.RefObject<HTMLElement>,
  speed: number
) {
  useEffect(() => {
    const handler = () => {
      if (ref.current) {
        ref.current.style.transform = `translateY(${
          window.scrollY * speed
        }px)`;
      }
    };
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, [ref, speed]);
}

/* ===================== DATA ===================== */
const HERO_IMAGES: Record<string, string> = {
  Engineering:
    "https://images.unsplash.com/photo-1581092334370-33227c12f1ce?auto=format&fit=crop&w=1600",
  Medical:
    "https://images.unsplash.com/photo-1580281657521-6b6f1c95fda7?auto=format&fit=crop&w=1600",
  Management:
    "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1600",
  "Post Graduation":
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600",
  default:
    "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1600",
};

const FAQS: FAQItem[] = [
  { q: "Is counselling free?", a: "Yes, first session is free." },
  { q: "Are colleges verified?", a: "Only approved institutions." },
  { q: "Do you help after admission?", a: "Yes, complete support." },
];

/* ===================== GLOBAL STYLES ===================== */
const GlobalStyles = () => (
  <style>{`
    .input{width:100%;padding:12px;border:1px solid #e5e7eb;border-radius:10px}
    .animate-fade-up{animation:fadeUp 1s ease forwards}
    .animate-scale{animation:scaleIn .6s ease forwards}
    .animate-slide-in{animation:slideIn .8s ease forwards}
    @keyframes fadeUp{from{opacity:0;transform:translateY(30px)}to{opacity:1}}
    @keyframes scaleIn{from{opacity:0;transform:scale(.8)}to{opacity:1}}
    @keyframes slideIn{from{opacity:0;transform:translateX(50px)}to{opacity:1}}
  `}</style>
);
