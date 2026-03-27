import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Stethoscope, Microscope, Briefcase, HeartPulse, TrendingUp, Globe2,
  Laptop2, Users, CalendarCheck, BookOpenCheck,
  MapPin, GraduationCap
} from "lucide-react";

/* 🔥 Career Guidance */
export const CareerGuidanceSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-600">Career Guidance</h2>
        <p className="text-gray-600 mt-2">Choose your ideal medical career path.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          { icon: Stethoscope, title: "Clinical Practice" },
          { icon: Microscope, title: "Research" },
          { icon: Briefcase, title: "Healthcare Mgmt" },
          { icon: HeartPulse, title: "Public Health" },
          { icon: TrendingUp, title: "Entrepreneurship" },
          { icon: Globe2, title: "Global Jobs" },
        ].map((c, i) => (
          <motion.div
            key={c.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className="p-6 bg-orange-50 border border-orange-100 rounded-2xl text-center hover:shadow-lg"
          >
            <c.icon className="mx-auto mb-3 text-orange-600" />
            <h3 className="font-semibold">{c.title}</h3>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

/* 🔥 Online Support */
export const OnlineSupportSection = () => (
  <section className="py-20 bg-orange-50">
    <div className="container mx-auto px-4">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-600">Online Support</h2>
        <p className="text-gray-600">24/7 student assistance system.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { icon: Laptop2, title: "Portal" },
          { icon: Users, title: "Live Chat" },
          { icon: CalendarCheck, title: "Calls" },
          { icon: BookOpenCheck, title: "Study Groups" },
        ].map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-white rounded-2xl border border-orange-100 text-center"
          >
            <s.icon className="mx-auto mb-3 text-orange-600" />
            <h3 className="font-semibold">{s.title}</h3>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

/* 🔥 State Wise */
export const StateWiseSection = () => {
  const states = ["Delhi NCR","Maharashtra","Karnataka","Tamil Nadu","UP","Rajasthan"];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">

        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-orange-600">Our Network</h2>
          <p className="text-gray-600">Colleges across India</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {states.map((s) => (
            <div key={s} className="p-4 bg-orange-50 border rounded-xl text-center">
              <MapPin className="mx-auto text-orange-600 mb-1" />
              <span className="text-sm">{s}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

/* 🔥 Working Professionals CTA */
export const WorkingProfessionalsSection = () => (
  <section className="py-20 bg-orange-600 text-white text-center">
    <div className="container mx-auto px-4">

      <h2 className="text-3xl font-bold mb-4">
        For Working Professionals
      </h2>

      <p className="mb-6">
        Upgrade your degree without leaving your job.
      </p>

      <Button
        className="bg-white text-orange-600 hover:bg-gray-100"
        onClick={() => window.open("https://wa.me/917607696315")}
      >
        Start Now
      </Button>

    </div>
  </section>
);

/* 🔥 Placement Section */
export const PlacementSection = () => (
  <section className="py-20 bg-white">
    <div className="container mx-auto px-4">

      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-orange-600">Placement Support</h2>
        <p className="text-gray-600">We help you build your career</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          "Resume Building",
          "Interview Prep",
          "Hospital Tie-ups",
          "Career Portal"
        ].map((p, i) => (
          <motion.div
            key={p}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="p-6 bg-orange-50 border rounded-2xl text-center"
          >
            <GraduationCap className="mx-auto text-orange-600 mb-2" />
            <h3 className="font-semibold">{p}</h3>
          </motion.div>
        ))}
      </div>

    </div>
  </section>
);

/* 🔥 Final CTA */
export const CTASection = () => (
  <section className="py-20 bg-orange-600 text-white text-center">
    <div className="container mx-auto px-4">

      <h2 className="text-3xl font-bold mb-4">
        Start Your Medical Career Today
      </h2>

      <p className="mb-6">
        Join thousands of successful students.
      </p>

      <div className="flex justify-center gap-4 flex-wrap">
        <Button className="bg-white text-orange-600">
          Apply Now
        </Button>

        <Button
          className="border border-white"
          onClick={() => window.open("tel:7607696315")}
        >
          Call Now
        </Button>
      </div>

    </div>
  </section>
);