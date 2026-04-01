import { motion } from "framer-motion";

const timelineSteps = [
  { step: "Step 1", title: "Research & Explore", desc: "Browse courses, universities, and career options" },
  { step: "Step 2", title: "Connect With Us", desc: "Get free expert counselling and personalized guidance" },
  { step: "Step 3", title: "Choose Your Path", desc: "Select the perfect program that matches your goals" },
  { step: "Step 4", title: "Get Enrolled", desc: "Complete admission with our end-to-end support" },
  { step: "Step 5", title: "Learn & Grow", desc: "Access world-class online education from home" },
  { step: "Step 6", title: "Graduate & Succeed", desc: "Get your degree and start your dream career" },
];

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const item = {
  hidden: { opacity: 0, x: -40 },
  show: { opacity: 1, x: 0 },
};

const TimelineSection = () => (
  <section className="py-16 md:py-24 bg-gradient-to-b from-background to-secondary/30">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-16">
        <p className="text-primary font-semibold text-sm uppercase tracking-widest mb-2">
          Your Journey
        </p>

        <h2 className="text-3xl md:text-5xl font-bold">
          Path to <span className="text-primary">Success</span>
        </h2>

        <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
          Follow these simple steps to achieve your dream career with ease.
        </p>
      </div>

      {/* Timeline */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="max-w-3xl mx-auto"
      >
        {timelineSteps.map((step, i) => (
          <motion.div
            key={i}
            variants={item}
            className="flex gap-6 mb-10 last:mb-0"
          >
            {/* Left Circle */}
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-r from-primary to-purple-500 flex items-center justify-center text-white font-bold shadow-lg">
                {i + 1}
              </div>

              {i < timelineSteps.length - 1 && (
                <div className="w-1 h-full bg-gradient-to-b from-primary/40 to-transparent mt-2 rounded-full" />
              )}
            </div>

            {/* Content Card */}
            <div className="flex-grow p-5 rounded-2xl backdrop-blur-lg bg-white/5 border border-white/10 shadow-lg hover:shadow-primary/20 transition-all duration-300 hover:scale-[1.02]">
              
              <p className="text-xs text-primary font-semibold tracking-wide">
                {step.step}
              </p>

              <h3 className="text-lg md:text-xl font-bold text-foreground mt-1">
                {step.title}
              </h3>

              <p className="text-sm md:text-base text-muted-foreground mt-2">
                {step.desc}
              </p>

            </div>
          </motion.div>
        ))}
      </motion.div>

    </div>
  </section>
);

export default TimelineSection;