import { motion } from "framer-motion";
import {
  GraduationCap, FileCheck, Building2, Globe, BookOpen,
  HeartPulse, Scale, Banknote, ClipboardList, UserCheck,
  Phone, MapPin
} from 'lucide-react';

const services = [
  { icon: GraduationCap, title: 'MBBS Admission', desc: 'Complete guidance for MBBS admissions in government & private colleges.' },
  { icon: HeartPulse, title: 'BDS Admission', desc: 'Secure admission in top dental colleges across India.' },
  { icon: BookOpen, title: 'BAMS/BHMS Admission', desc: 'Ayurveda & Homeopathy medical college admissions.' },
  { icon: FileCheck, title: 'NEET Counseling', desc: 'Expert NEET counseling for state & all-India quota.' },
  { icon: Building2, title: 'Deemed University', desc: 'Admissions in deemed universities with best placement records.' },
  { icon: Globe, title: 'Abroad MBBS', desc: 'MBBS in Russia, Ukraine, Philippines, Georgia & more.' },
  { icon: Scale, title: 'Management Quota', desc: 'Transparent management quota admissions at affordable fees.' },
  { icon: Banknote, title: 'Education Loan', desc: 'Assistance with education loans and scholarship applications.' },
  { icon: ClipboardList, title: 'Document Support', desc: 'Complete documentation and verification assistance.' },
  { icon: UserCheck, title: 'Career Counseling', desc: 'Personalized career guidance for medical aspirants.' },
  { icon: Phone, title: '24/7 Support', desc: 'Round-the-clock support for students and parents.' },
  { icon: MapPin, title: 'College Visits', desc: 'Organized visits to medical colleges before admission.' },
];

// 🔥 animation configs
const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }
  }
};

const stagger = {
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const ServicesSection = () => (
  <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-background to-muted/30">
    <div className="max-w-7xl mx-auto px-4">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-12 md:mb-14"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          Our Services
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-3">
          Complete <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Admission Support
          </span>
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          From NEET counseling to final admission — we handle everything for your medical education journey.
        </p>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
      >
        {services.map((s, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-2xl cursor-pointer"
          >
            {/* Icon */}
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center mb-4 group-hover:bg-gradient-to-r from-orange-500 to-yellow-500 transition-all">
              <s.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors" />
            </div>

            {/* Title */}
            <h3 className="text-lg font-semibold mb-2">
              {s.title}
            </h3>

            {/* Desc */}
            <p className="text-sm text-muted-foreground">
              {s.desc}
            </p>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default ServicesSection;