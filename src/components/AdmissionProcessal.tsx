import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Stethoscope,
  BookOpen,
  ClipboardList,
  FileText,
  UserCheck,
  CreditCard,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

type CourseType = "engineering" | "medical" | "postgraduate" | "management";

const courses: { id: CourseType; label: string; icon: React.ReactNode; description: string }[] = [
  {
    id: "engineering",
    label: "Engineering",
    icon: <GraduationCap className="w-6 h-6" />,
    description: "B.Tech / B.E. programs across multiple disciplines",
  },
  {
    id: "medical",
    label: "Medical",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "MBBS, BDS & allied health science programs",
  },
  {
    id: "postgraduate",
    label: "Post Graduation",
    icon: <BookOpen className="w-6 h-6" />,
    description: "M.Tech, MD, MS & MBA programs",
  },
  {
    id: "management",
    label: "Management",
    icon: <ClipboardList className="w-6 h-6" />,
    description: "BBA, MBA & executive management programs",
  },
];

const steps: Record<CourseType, { title: string; description: string; icon: React.ReactNode; details: string[] }[]> = {
  engineering: [
    {
      title: "Check Eligibility",
      description: "Verify your qualification criteria",
      icon: <ClipboardList className="w-5 h-5" />,
      details: [
        "Minimum 60% in 10+2 (PCM)",
        "Valid JEE Main / State CET score",
        "Age: No upper age limit for most universities",
        "Domicile certificate (for state quota)",
      ],
    },
    {
      title: "Online Application",
      description: "Fill and submit your application form",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "Register on the official admission portal",
        "Fill in personal, academic & contact details",
        "Upload scanned documents (photo, signature, marksheets)",
        "Select preferred branches in order of priority",
      ],
    },
    {
      title: "Entrance Exam / Counselling",
      description: "Appear for exam and attend counselling rounds",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Download admit card from the portal",
        "Appear for JEE Main / State CET exam",
        "Check merit list and cutoff ranks",
        "Attend online or offline counselling rounds",
        "Lock your preferred college and branch choice",
      ],
    },
    {
      title: "Document Verification",
      description: "Submit original documents for verification",
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: [
        "10th & 12th marksheets and certificates",
        "Transfer certificate & migration certificate",
        "Category / caste certificate (if applicable)",
        "Income certificate (for fee concession)",
        "Aadhar card & passport-size photographs",
      ],
    },
    {
      title: "Fee Payment & Confirmation",
      description: "Pay admission fees and confirm your seat",
      icon: <CreditCard className="w-5 h-5" />,
      details: [
        "Pay first-year tuition & hostel fees online",
        "Download provisional admission letter",
        "Report to the allotted college on the given date",
        "Complete biometric & ID card registration",
      ],
    },
  ],
  medical: [
    {
      title: "Check Eligibility",
      description: "Meet the NEET eligibility criteria",
      icon: <ClipboardList className="w-5 h-5" />,
      details: [
        "Minimum 50% in 10+2 (PCB) — 40% for reserved categories",
        "Valid NEET-UG qualified score",
        "Age: 17 years as on 31st December of admission year",
        "Indian nationality or NRI / OCI status for NRI quota",
      ],
    },
    {
      title: "NEET Registration & Exam",
      description: "Register for NEET and appear for the exam",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "Register on NTA official portal (neet.nta.nic.in)",
        "Fill application form with correct details",
        "Upload photo, signature & left thumb impression",
        "Download admit card and appear for NEET-UG",
      ],
    },
    {
      title: "Counselling (MCC / State)",
      description: "Participate in centralised or state counselling",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Register for MCC (AIQ) or State counselling",
        "Fill choice of colleges and courses",
        "Seat allotment based on NEET rank & preferences",
        "Accept or reject the allotted seat within deadline",
        "Multiple rounds of counselling (Round 1, 2, Mop-up)",
      ],
    },
    {
      title: "Document Verification",
      description: "Physical verification at allotted college",
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: [
        "NEET scorecard & admit card",
        "10th & 12th original marksheets",
        "Allotment letter from counselling authority",
        "Medical fitness certificate",
        "Character certificate from previous institution",
      ],
    },
    {
      title: "Fee Payment & Admission",
      description: "Complete fee payment and join the college",
      icon: <CreditCard className="w-5 h-5" />,
      details: [
        "Pay tuition fee as per government / management quota",
        "Submit anti-ragging affidavit (online)",
        "Collect ID card and hostel allotment",
        "Attend orientation program",
      ],
    },
  ],
  postgraduate: [
    {
      title: "Check Eligibility",
      description: "Verify PG entrance requirements",
      icon: <ClipboardList className="w-5 h-5" />,
      details: [
        "Bachelor's degree with minimum 55% (50% for reserved)",
        "Valid GATE / CAT / NEET-PG / GPAT score",
        "Relevant undergraduate discipline",
        "Work experience (if required by specific program)",
      ],
    },
    {
      title: "Entrance Exam Registration",
      description: "Register and prepare for PG entrance tests",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "Register for GATE / CAT / NEET-PG as applicable",
        "Fill application with academic and personal details",
        "Upload required documents and photograph",
        "Pay the examination fee online",
      ],
    },
    {
      title: "Exam & Result",
      description: "Appear for exam and check results",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Download admit card before exam date",
        "Appear for the entrance examination",
        "Check results and download scorecard",
        "Apply to universities using your valid score",
      ],
    },
    {
      title: "University Application & Interview",
      description: "Apply to universities and attend interviews",
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: [
        "Apply to preferred universities / IITs / IIMs / AIIMS",
        "Shortlisting based on entrance score & academic record",
        "Attend GD / PI rounds (for MBA programs)",
        "Written test or research proposal (for M.Tech / MD)",
      ],
    },
    {
      title: "Admission & Enrollment",
      description: "Confirm admission and complete enrollment",
      icon: <CreditCard className="w-5 h-5" />,
      details: [
        "Accept offer letter and pay seat confirmation fee",
        "Submit original documents for verification",
        "Pay full tuition and hostel fees",
        "Complete enrollment and attend orientation",
      ],
    },
  ],
  management: [
    {
      title: "Check Eligibility",
      description: "Verify management program requirements",
      icon: <ClipboardList className="w-5 h-5" />,
      details: [
        "Minimum 50% in graduation (any discipline for MBA)",
        "10+2 with 50% for BBA programs",
        "Valid CAT / MAT / XAT / CMAT / ATMA score (for MBA)",
        "Work experience preferred for executive MBA programs",
      ],
    },
    {
      title: "Entrance Exam Registration",
      description: "Register for management entrance tests",
      icon: <FileText className="w-5 h-5" />,
      details: [
        "Register for CAT / MAT / XAT / GMAT as applicable",
        "Fill application form with academic & work details",
        "Upload photograph, signature & required documents",
        "Pay examination fee and download admit card",
      ],
    },
    {
      title: "GD / PI & Selection",
      description: "Group discussion and personal interview rounds",
      icon: <UserCheck className="w-5 h-5" />,
      details: [
        "Shortlisting based on entrance exam percentile",
        "Attend Group Discussion (GD) round",
        "Appear for Personal Interview (PI) with panel",
        "Written Ability Test (WAT) in select institutes",
        "Final merit list based on composite score",
      ],
    },
    {
      title: "Document Verification",
      description: "Submit documents for verification",
      icon: <CheckCircle2 className="w-5 h-5" />,
      details: [
        "Graduation marksheets and degree certificate",
        "Entrance exam scorecard & admit card",
        "Work experience letters (if applicable)",
        "Category / EWS certificate (if applicable)",
        "Passport-size photographs & ID proof",
      ],
    },
    {
      title: "Fee Payment & Enrollment",
      description: "Confirm your seat and complete enrollment",
      icon: <CreditCard className="w-5 h-5" />,
      details: [
        "Pay seat acceptance fee within deadline",
        "Pay full tuition & hostel fees",
        "Submit anti-ragging affidavit online",
        "Attend orientation and induction program",
        "Collect ID card and course material",
      ],
    },
  ],
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" as const } },
};

const AdmissionProcessal = () => {
  const [activeCourse, setActiveCourse] = useState<CourseType>("engineering");
  const [expandedStep, setExpandedStep] = useState<number | null>(0);

  return (
    <section className="py-20 px-4 bg-warm-bg min-h-screen">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm tracking-wide mb-4">
            Step-by-Step Guide
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Admission <span className="text-primary">Process</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Follow our streamlined admission process to secure your seat in your dream course. Select a program below to view the detailed procedure.
          </p>
        </motion.div>

        {/* Course Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-14"
        >
          {courses.map((course) => (
            <button
              key={course.id}
              onClick={() => {
                setActiveCourse(course.id);
                setExpandedStep(0);
              }}
              className={`group relative flex items-center gap-3 px-6 py-4 rounded-xl border-2 transition-all duration-300 text-left ${
                activeCourse === course.id
                  ? "border-primary bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                  : "border-border bg-card text-foreground hover:border-primary/40 hover:shadow-md"
              }`}
            >
              <div
                className={`p-2 rounded-lg ${
                  activeCourse === course.id ? "bg-primary-foreground/20" : "bg-secondary"
                }`}
              >
                {course.icon}
              </div>
              <div>
                <div className="font-semibold text-base">{course.label}</div>
                <div
                  className={`text-xs ${
                    activeCourse === course.id ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {course.description}
                </div>
              </div>
              {activeCourse === course.id && (
                <motion.div
                  layoutId="activeIndicator"
                  className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-1 rounded-full bg-primary-foreground"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Steps Timeline */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCourse}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, y: -20 }}
            className="relative"
          >
            {/* Vertical line */}
            <div className="absolute left-6 md:left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

            {steps[activeCourse].map((step, index) => {
              const isExpanded = expandedStep === index;
              const isCompleted = expandedStep !== null && index < expandedStep;

              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative mb-6 md:pl-20 pl-0"
                >
                  {/* Step number circle (desktop) */}
                  <div
                    className={`hidden md:flex absolute left-3.5 md:left-3 w-10 h-10 rounded-full items-center justify-center font-bold text-sm border-2 z-10 transition-all duration-300 ${
                      isExpanded
                        ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/30"
                        : isCompleted
                        ? "bg-saffron-light text-foreground border-saffron-light"
                        : "bg-card text-muted-foreground border-border"
                    }`}
                  >
                    {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                  </div>

                  {/* Card */}
                  <button
                    onClick={() => setExpandedStep(isExpanded ? null : index)}
                    className={`w-full text-left rounded-2xl border-2 p-5 md:p-6 transition-all duration-300 ${
                      isExpanded
                        ? "bg-card border-primary shadow-xl shadow-primary/10"
                        : "bg-card border-border hover:border-primary/30 hover:shadow-md"
                    }`}
                  >
                    <div className="flex items-center gap-4">
                      {/* Mobile step number */}
                      <div
                        className={`md:hidden flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm border-2 ${
                          isExpanded
                            ? "bg-primary text-primary-foreground border-primary"
                            : isCompleted
                            ? "bg-saffron-light text-foreground border-saffron-light"
                            : "bg-secondary text-muted-foreground border-border"
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : index + 1}
                      </div>

                      <div
                        className={`p-2.5 rounded-xl ${
                          isExpanded ? "bg-primary/10 text-primary" : "bg-secondary text-muted-foreground"
                        }`}
                      >
                        {step.icon}
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-lg text-foreground">{step.title}</h3>
                        <p className="text-sm text-muted-foreground">{step.description}</p>
                      </div>
                      <ChevronRight
                        className={`w-5 h-5 text-muted-foreground transition-transform duration-300 ${
                          isExpanded ? "rotate-90" : ""
                        }`}
                      />
                    </div>

                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-5 pt-5 border-t border-border">
                            <ul className="space-y-3">
                              {step.details.map((detail, i) => (
                                <motion.li
                                  key={i}
                                  initial={{ opacity: 0, x: -10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{ delay: i * 0.08 }}
                                  className="flex items-start gap-3 text-sm text-foreground"
                                >
                                  <ArrowRight className="w-4 h-4 mt-0.5 text-primary flex-shrink-0" />
                                  <span>{detail}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </button>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default AdmissionProcessal;
