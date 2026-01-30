"use client";

import {
  motion,
  useScroll,
  useTransform,
  useInView,
  useMotionValue,
  animate,
} from "framer-motion";


import {
  CheckCircle,
  Briefcase,
  FileText,
  GraduationCap,
  TrendingUp,
  DollarSign,
  Home,
  BookOpen,
  Code,
  Stethoscope,
  Building2,
  Star,
  Quote,
  ChevronRight,
  MessageCircle,
  Play,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRef, useEffect, useState } from "react";

interface Props {
  country: string;
}

/* ===================== IMAGES ===================== */
const COUNTRY_IMAGES: Record<string, string> = {
  canada: "/canda.webp",
  usa: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29",
  uk: "https://images.unsplash.com/photo-1464021025634-49b81a77a858?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  australia: "/australia.webp",
  ireland:"/ireland.webp",
  france:"https://media.istockphoto.com/id/508093315/photo/college-students-in-a-classroom.jpg?s=1024x1024&w=is&k=20&c=teodtFRDebunlf27QtGHwn1jrHAax97ne72c5XaQwg0=",
  germany: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b",
  default: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1",
};

const AnimatedNumber = ({ value }: { value: number }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  const motionValue = useMotionValue(0);
  const rounded = useTransform(motionValue, (v) =>
    Math.floor(v).toLocaleString()
  );

  useEffect(() => {
    if (!inView) return;

    const controls = animate(motionValue, value, {
      duration: 1.5,
      ease: [0.22, 1, 0.36, 1],
    });

    return controls.stop;
  }, [inView, value, motionValue]);

  return <motion.span ref={ref}>{rounded}</motion.span>;
};









/* ===================== COUNTER ===================== */
const AnimatedCounter = ({
  end,
  suffix = "",
}: {
  end: number;
  suffix?: string;
}) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const timer = setInterval(() => {
      start += Math.ceil(end / 60);
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else setCount(start);
    }, 16);
    return () => clearInterval(timer);
  }, [inView, end]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ===================== ANIMATIONS ===================== */
const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
};

/* ===================== COMPONENT ===================== */
export default function UniversityInsightsSection({ country }: Props) {
  const heroRef = useRef<HTMLDivElement | null>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yImage = useTransform(scrollYProgress, [0, 1], ["-4%", "4%"]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0.35]);

  const heroImage =
    COUNTRY_IMAGES[country.toLowerCase()] || COUNTRY_IMAGES.default;

  const whatsappUrl = `https://wa.me/919910992965text=Hi%20Career4S,%20I%20want%20guidance%20for%20studying%20in%20${country}`;

  const programs = [
    { icon: Code, title: "Computer Science", growth: "+35%" },
    { icon: Building2, title: "MBA", growth: "+25%" },
    { icon: Stethoscope, title: "Medicine", growth: "+20%" },
    { icon: TrendingUp, title: "Finance", growth: "+28%" },
  ];

  const testimonials = [
    {
      name: "Priya Sharma",
      university: "University of Toronto",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100",
      quote: "Career4S guided me at every step. Highly professional.",
    },
    {
      name: "Rahul Patel",
      university: "MIT",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100",
      quote: "From shortlisting to visa, everything was smooth.",
    },
    {
      name: "Aisha Khan",
      university: "Oxford University",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100",
      quote: "Clear guidance, real results. Strongly recommended.",
    },
  ];

  const costData = [
    { label: "Tuition / Year", value: 25000, max: 50000 },
    { label: "Living Cost / Year", value: 15000, max: 25000 },
    { label: "Books & Supplies", value: 1500, max: 3000 },
  ];

  const faqs = [
    {
      q: "What are the language requirements?",
      a: "Most universities require IELTS 6.5+ or TOEFL 90+.",
    },
    {
      q: "Can I work while studying?",
      a: "Yes, up to 20 hours/week during semesters.",
    },
    {
      q: "Are scholarships available?",
      a: "Yes, merit and need-based scholarships are available.",
    },
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <section className="bg-background overflow-hidden">
      {/* ================= HERO ================= */}
      <div ref={heroRef} className="relative h-[560px] sm:h-[520px] overflow-hidden">
        <motion.div style={{ y: yImage }}className="absolute inset-0 scale-[1.03]">
     <img
  src={heroImage}
  alt={country}
  className="w-full h-full object-cover"
  style={{
    transform: "translateZ(0)",
    backfaceVisibility: "hidden",
  }}
/>

        </motion.div>
        <motion.div
          style={{ opacity: heroOpacity }}
          className="absolute inset-0 bg-gradient-to-b from-background/10 via-background/40 to-background
"
        />
        <div className="absolute inset-0 flex items-end p-8 lg:p-16">
          <motion.div variants={fadeUp} initial="hidden" animate="show">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-4">
              <GraduationCap className="w-4 h-4" />
              International Education
            </span>
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">
              Study in <span className="gradient-text">{country}</span>
            </h1>
            <p className="text-muted-foreground max-w-xl mb-6">
              Universities, costs, careers & visa guidance — all in one place.
            </p>
            <div className="flex gap-4">
              {/* <Button className="glow-sm">
                Free Consultation <ChevronRight className="ml-2 w-4 h-4" />
              </Button>
              <Button variant="outline" className="glass">
                <Play className="w-4 h-4 mr-2" /> Watch Stories
              </Button> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* ================= STATS ================= */}
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="-mt-16 px-4 lg:px-8 grid grid-cols-2 lg:grid-cols-4 gap-6 relative z-10"
      >
        {[
          { label: "Universities", value: 100, s: "+" },
          { label: "Visa Success", value: 95, s: "%" },
          { label: "Students Placed", value: 5000, s: "+" },
          { label: "Countries", value: 25, s: "+" },
        ].map((s) => (
          <motion.div
            key={s.label}
            variants={scaleIn}
            whileHover={{ y: -8 }}
            className="glass rounded-2xl p-6 text-center"
          >
            <div className="text-3xl font-bold text-primary">
              <AnimatedCounter end={s.value} suffix={s.s} />
            </div>
            <div className="text-sm text-muted-foreground">{s.label}</div>
          </motion.div>
        ))}
      </motion.div>

      {/* ================= WHY + CAREER ================= */}
    <motion.div
  variants={staggerContainer}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-120px" }}
  className="grid lg:grid-cols-2 gap-8 px-4 lg:px-8 mt-20"
>
  {/* ================= WHY STUDY ================= */}
  <motion.div
    variants={fadeUp}
    initial={{ opacity: 0, y: 60, rotateX: 6 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{
      y: -10,
      scale: 1.01,
    }}
    className="glass p-8 rounded-3xl relative overflow-hidden group"
  >
    {/* ambient breathing glow */}
    <motion.div
      className="absolute -inset-32 bg-primary/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.1, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <h2 className="text-2xl font-bold mb-6 relative z-10">
      Why Study in {country}
    </h2>

    <ul className="space-y-5 relative z-10">
      {[
        "Globally recognised degrees",
        "Part-time work allowed",
        "World-class research",
        "Post-study work visas",
      ].map((t, i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.12,
            duration: 0.55,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          whileHover={{
            x: 10,
          }}
          className="flex gap-4 items-center group/item cursor-default"
        >
          <motion.span
            initial={{ scale: 0.8 }}
            whileHover={{
              scale: 1.3,
              rotate: 12,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="relative"
          >
            <CheckCircle className="text-primary w-5 h-5" />
          </motion.span>

          <motion.span
            whileHover={{ letterSpacing: "0.3px" }}
            transition={{ duration: 0.2 }}
            className="text-foreground/90"
          >
            {t}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  </motion.div>

  {/* ================= CAREER OUTCOMES ================= */}
  <motion.div
    variants={fadeUp}
    initial={{ opacity: 0, y: 60, rotateX: 6 }}
    whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
    transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    whileHover={{
      y: -10,
      scale: 1.01,
    }}
    className="glass p-8 rounded-3xl relative overflow-hidden group"
  >
    {/* ambient breathing glow */}
    <motion.div
      className="absolute -inset-32 bg-primary/20 rounded-full blur-3xl"
      animate={{ scale: [1, 1.12, 1] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
    />

    <h2 className="text-2xl font-bold mb-6 relative z-10">
      Career Outcomes
    </h2>

    <ul className="space-y-5 relative z-10">
      {[
        "Strong global employability",
        "Internships & placements",
        "High ROI degrees",
        "PR & settlement pathways",
      ].map((t, i) => (
        <motion.li
          key={t}
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.12,
            duration: 0.55,
            ease: [0.25, 0.8, 0.25, 1],
          }}
          whileHover={{
            x: 10,
          }}
          className="flex gap-4 items-center group/item cursor-default"
        >
          <motion.span
            whileHover={{
              scale: 1.3,
              rotate: -10,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
          >
            <Briefcase className="text-primary w-5 h-5" />
          </motion.span>

          <motion.span
            whileHover={{ letterSpacing: "0.3px" }}
            transition={{ duration: 0.2 }}
            className="text-foreground/90"
          >
            {t}
          </motion.span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
</motion.div>


      {/* ================= EVERYTHING ELSE (PROGRAMS, COST, TESTIMONIALS, PROCESS, FAQ, CTA) 
           👉 LEFT EXACTLY AS YOU PROVIDED, ONLY ANIMATED
      ================= */}

      {/* ================= PROGRAMS ================= */}
    <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-120px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  className="px-4 lg:px-8 mt-20"
>
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-10"
  >
    Popular Programs
  </motion.h2>

  <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
    {programs.map((p, i) => (
      <motion.div
        key={p.title}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: i * 0.08,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -14,
          scale: 1.03,
        }}
        className="glass p-6 rounded-2xl text-center relative overflow-hidden group cursor-pointer"
      >
        {/* Ambient breathing glow */}
        <motion.div
          className="absolute -inset-24 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Floating idle motion */}
        <motion.div
          animate={{ y: [0, -6, 0] }}
          transition={{
            duration: 4 + i,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative z-10"
        >
          {/* Icon */}
          <motion.div
            whileHover={{
              rotate: 8,
              scale: 1.25,
            }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
            className="flex justify-center mb-4"
          >
            <p.icon className="w-8 h-8 text-primary" />
          </motion.div>

          {/* Title */}
          <motion.h3
            whileHover={{ letterSpacing: "0.4px" }}
            transition={{ duration: 0.2 }}
            className="font-semibold mb-1"
          >
            {p.title}
          </motion.h3>

          {/* Growth */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-sm text-primary"
          >
            {p.growth} growth
          </motion.p>
        </motion.div>
      </motion.div>
    ))}
  </div>
</motion.div>


      {/* ================= COST ================= */}
      <motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
  className="px-4 lg:px-8 mt-20"
>
  <div className="glass p-10 rounded-3xl relative overflow-hidden">
    {/* subtle ambient background */}
    <motion.div
      className="absolute -inset-32 bg-primary/10 rounded-full blur-3xl"
      animate={{ scale: [1, 1.08, 1] }}
      transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
    />

    <h2 className="text-3xl font-bold mb-2 relative z-10">
      Cost Breakdown
    </h2>
    <p className="text-muted-foreground mb-8 relative z-10">
      Estimated annual costs for studying in {country}
    </p>

    <div className="relative z-10">
      {costData.map((c, i) => (
        <motion.div
          key={c.label}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.15,
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mb-6"
        >
          {/* Label + running value */}
          <div className="flex justify-between mb-2">
            <span>{c.label}</span>
            <span className="font-bold text-primary tabular-nums">
              $<AnimatedNumber value={c.value} />
            </span>
          </div>

          {/* Progress bar */}
          <div className="h-2 bg-muted rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${(c.value / c.max) * 100}%` }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.15 + 0.2,
                duration: 1.1,
                ease: "easeOut",
              }}
              className="h-full bg-gradient-to-r from-primary to-amber-500 rounded-full"
            />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</motion.div>


      {/* ================= TESTIMONIALS ================= */}
  <motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-120px" }}
  variants={{
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.12,
      },
    },
  }}
  className="px-4 lg:px-8 mt-20"
>
  {/* Heading */}
  <motion.h2
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    viewport={{ once: true }}
    className="text-3xl font-bold text-center mb-10"
  >
    What Our Students Say
  </motion.h2>

  <div className="grid md:grid-cols-3 gap-6">
    {testimonials.map((t, i) => (
      <motion.div
        key={t.name}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 0.6,
          delay: i * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        className="glass p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
      >
        {/* Ambient glow */}
        <motion.div
          className="absolute -inset-24 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100"
          animate={{ scale: [1, 1.15, 1] }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Quote icon */}
        <motion.div
          initial={{ rotate: -10, opacity: 0.3 }}
          whileHover={{ rotate: 0, scale: 1.15 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="relative z-10 mb-4"
        >
          <Quote className="w-8 h-8 text-primary/30 group-hover:text-primary transition-colors" />
        </motion.div>

        {/* Quote text */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 relative z-10 leading-relaxed"
        >
          “{t.quote}”
        </motion.p>

        {/* User */}
        <div className="flex items-center gap-4 relative z-10">
          <motion.img
            src={t.image}
            alt={t.name}
            className="w-12 h-12 rounded-full"
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 260, damping: 14 }}
          />
          <div>
            <div className="font-semibold">{t.name}</div>
            <div className="text-sm text-muted-foreground">
              {t.university}
            </div>
          </div>
        </div>
      </motion.div>
    ))}
  </div>
</motion.div>

      {/* ================= PROCESS + DOCS ================= */}
    {/* ================= PROCESS + DOCUMENTS ================= */}
<motion.div
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, margin: "-120px" }}
  variants={{
    hidden: {},
    show: { transition: { staggerChildren: 0.15 } },
  }}
  className="grid lg:grid-cols-2 gap-8 px-4 lg:px-8 mt-20"
>
  {/* ================= ADMISSION PROCESS ================= */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    className="glass p-8 rounded-3xl relative overflow-hidden"
  >
    <h2 className="text-2xl font-bold mb-6">Admission Process</h2>

    <ol className="space-y-5">
      {[
        "Profile Evaluation",
        "University Shortlisting",
        "Applications & SOP",
        "Visa Processing",
        "Pre-departure Briefing",
      ].map((s, i) => (
        <motion.li
          key={s}
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.1,
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ x: 6 }}
          className="flex gap-4 items-center cursor-default"
        >
          <motion.span
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{
              delay: i * 0.1,
              type: "spring",
              stiffness: 260,
              damping: 15,
            }}
            className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold"
          >
            {i + 1}
          </motion.span>
          <span>{s}</span>
        </motion.li>
      ))}
    </ol>
  </motion.div>

  {/* ================= DOCUMENTS REQUIRED ================= */}
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
    className="glass p-8 rounded-3xl relative overflow-hidden"
  >
    <h2 className="text-2xl font-bold mb-6">Documents Required</h2>

    <ul className="space-y-4">
      {[
        "Academic transcripts",
        "Passport",
        "Statement of Purpose",
        "Language scores",
        "Financial proof",
      ].map((d, i) => (
        <motion.li
          key={d}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{
            delay: i * 0.08,
            duration: 0.4,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{ x: 6 }}
          className="flex gap-3 items-center"
        >
          <motion.span
            whileHover={{ scale: 1.2, rotate: 6 }}
            transition={{ type: "spring", stiffness: 300, damping: 14 }}
          >
            <CheckCircle className="text-primary w-5 h-5" />
          </motion.span>
          <span>{d}</span>
        </motion.li>
      ))}
    </ul>
  </motion.div>
</motion.div>

{/* ================= FAQ ================= */}
<motion.div
  initial={{ opacity: 0 }}
  whileInView={{ opacity: 1 }}
  viewport={{ once: true, margin: "-120px" }}
  transition={{ duration: 0.6 }}
  className="px-4 lg:px-8 mt-20 max-w-3xl mx-auto"
>
  <motion.h2
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="text-3xl font-bold text-center mb-8"
  >
    FAQs
  </motion.h2>

  {faqs.map((f, i) => (
    <motion.div
      key={i}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: i * 0.1, duration: 0.4 }}
      className="glass rounded-xl mb-4 overflow-hidden"
    >
      <button
        onClick={() => setOpenFaq(openFaq === i ? null : i)}
        className="w-full flex justify-between p-6 text-left"
      >
        <span className="font-medium">{f.q}</span>
        <motion.span
          animate={{ rotate: openFaq === i ? 90 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <ChevronRight />
        </motion.span>
      </button>

      <motion.div
        initial={false}
        animate={{
          height: openFaq === i ? "auto" : 0,
          opacity: openFaq === i ? 1 : 0,
        }}
        transition={{ duration: 0.35, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-muted-foreground">{f.a}</div>
      </motion.div>
    </motion.div>
  ))}
</motion.div>

      {/* ================= CTA ================= */}
      <div className="mx-4 lg:mx-8 mt-20 mb-10 rounded-3xl bg-primary p-12 text-white">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Start Your Journey?
        </h2>
        <p className="mb-6">
          Talk to our experts about universities, costs & visas.
        </p>
        <a href={whatsappUrl} target="_blank">
          <Button className="bg-white text-black">
            <MessageCircle className="w-5 h-5 mr-2" />
            WhatsApp an Expert
          </Button>
        </a>
      </div>
    </section>
  );
}
