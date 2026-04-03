import { motion } from "framer-motion";
import { CheckCircle2 } from 'lucide-react';

const criteria = [
  {
    course: 'MBBS',
    items: [
      '10+2 with Physics, Chemistry & Biology',
      'Minimum 50% marks (40% for SC/ST)',
      'NEET qualified (mandatory)',
      'Age: Minimum 17 years',
      'Indian / NRI / OCI eligible',
      'Valid ID & documents required'
    ]
  },
  {
    course: 'BDS',
    items: [
      '10+2 with PCB subjects',
      'Minimum 50% marks',
      'NEET qualification required',
      'Age: 17+ years',
      'Eligible for All India & State quota',
      'Dental Council norms applicable'
    ]
  },
  {
    course: 'BAMS/BHMS',
    items: [
      '10+2 with PCB background',
      'Minimum 50% marks',
      'NEET qualified',
      'Age: Minimum 17 years',
      'State quota eligibility varies',
     
    ]
  },
  {
    course: 'Abroad MBBS',
    items: [
      '10+2 with PCB',
      'Minimum 50% marks',
      'NEET qualification mandatory',
      'Valid passport required',
      'English proficiency (some countries)',
      'No donation / direct admission process'
    ]
  },
];

// animations
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
      staggerChildren: 0.12
    }
  }
};

const EligibilitySection = () => (
  <section className="relative py-20 bg-gradient-to-b from-background to-muted/30 overflow-hidden">
    
    {/* glow */}
    <div className="absolute top-0 left-0 w-72 h-72 bg-orange-400/20 blur-3xl rounded-full"></div>
    <div className="absolute bottom-0 right-0 w-72 h-72 bg-yellow-400/20 blur-3xl rounded-full"></div>

    <div className="max-w-7xl mx-auto px-4 relative z-10">

      {/* Heading */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <span className="text-primary font-semibold text-sm uppercase tracking-widest">
          Eligibility
        </span>

        <h2 className="text-3xl md:text-4xl font-bold mt-3 mb-4">
          <span className="bg-gradient-to-r from-orange-500 to-yellow-500 bg-clip-text text-transparent">
            Detailed Eligibility Criteria
          </span> for Medical Courses
        </h2>

        <p className="text-muted-foreground max-w-2xl mx-auto">
          Ensure you meet all required conditions before applying. Our experts guide you step-by-step to avoid rejection and maximize admission chances.
        </p>

        {/* stats */}
        <div className="flex justify-center gap-6 mt-6 flex-wrap">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">10K+</h3>
            <p className="text-xs text-muted-foreground">Students Guided</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">5000+</h3>
            <p className="text-xs text-muted-foreground">Colleges</p>
          </div>
          <div className="text-center">
            <h3 className="text-2xl font-bold text-primary">100%</h3>
            <p className="text-xs text-muted-foreground">Admission Support</p>
          </div>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {criteria.map((c, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            whileHover={{ y: -10, scale: 1.03 }}
            className="relative p-6 rounded-2xl bg-white/5 backdrop-blur-xl border border-white/10 hover:border-orange-400/40 transition-all duration-300 shadow-md hover:shadow-2xl group"
          >
            {/* glow */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

            <h3 className="text-xl font-bold text-primary mb-4 relative z-10">
              {c.course}
            </h3>

            <ul className="space-y-3 relative z-10">
              {c.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <span className="absolute top-4 right-4 text-[10px] bg-orange-500 text-white px-2 py-1 rounded-full">
              Updated
            </span>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default EligibilitySection;