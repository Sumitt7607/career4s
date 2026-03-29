import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  GraduationCap,
  BookOpen,
  FileText,
  Users,
  Globe,
  Award,
  Clock,
  Headphones,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: GraduationCap,
    title: "Direct Admission Assistance",
    desc: "Get guaranteed admission in top UGC-DEB approved universities without any confusion or delays.",
  },
  {
    icon: BookOpen,
    title: "Right Course Selection",
    desc: "Confused between courses? We help you choose the best option based on your career goals.",
  },
  {
    icon: Users,
    title: "University Shortlisting",
    desc: "We suggest top universities based on your budget, eligibility, and future opportunities.",
  },
  {
    icon: FileText,
    title: "Complete Documentation Support",
    desc: "No need to worry about forms or paperwork — we handle everything for you.",
  },
  {
    icon: Clock,
    title: "Fast Track Admission",
    desc: "Complete your admission within 24-48 hours with our streamlined process.",
  },
  {
    icon: Headphones,
    title: "Personal Admission Counselor",
    desc: "Get 1-to-1 expert guidance from admission till course completion.",
  },
  {
    icon: Globe,
    title: "Online & Distance Learning Support",
    desc: "Full assistance for online classes, LMS access, and exam process.",
  },
  {
    icon: Award,
    title: "Valid Degree Guarantee",
    desc: "Get 100% recognized and approved degrees accepted for jobs and higher studies.",
  },
];

const ServicesMisMan = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="services"
      ref={ref}
      className="py-20 bg-gradient-to-b from-[#fff7ed] to-white"
    >
      <div className="max-w-7xl mx-auto px-4">

        {/* 🔥 TOP ICON */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <div className="w-20 h-20 rounded-full bg-orange-500 flex items-center justify-center shadow-xl">
            <Sparkles className="w-10 h-10 text-white" />
          </div>
        </motion.div>

        {/* 🔥 Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-orange-500 font-semibold text-sm uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-2 leading-tight">
            Everything You Need For <br />
            <span className="text-orange-500">Hassle-Free Admission</span>
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            From selecting the right course to getting admission and career support, we handle everything for you.
          </p>
        </motion.div>

        {/* 🔥 Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="group bg-white rounded-2xl p-6 text-center shadow-md hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-orange-100 group-hover:bg-orange-500 flex items-center justify-center mx-auto mb-4 transition-all duration-300">
                <item.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-lg mb-2">
                {item.title}
              </h3>

              {/* Desc */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔥 CTA */}
        {/* <div className="text-center mt-14">
          <button
            onClick={() => window.open("https://wa.me/91XXXXXXXXXX")}
            className="bg-orange-500 text-white px-8 py-3 rounded-xl font-semibold hover:bg-orange-600 transition shadow-lg"
          >
            Talk to Admission Expert
          </button>
        </div> */}

      </div>
    </section>
  );
};

export default ServicesMisMan;