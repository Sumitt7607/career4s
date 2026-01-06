import { motion } from "framer-motion";
import { useState } from "react";

import { 
  GraduationCap, Stethoscope, Building2, Briefcase, Cpu, Scale, 
  BookOpen, ArrowRight, Clock, Users, Calendar, FileText,
  ChevronDown, ChevronUp, CheckCircle2, TrendingUp
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ToolsSection } from "./ToolsSection";

const exams = [
  {
    id: "jee",
    name: "JEE Main & Advanced",
    category: "Engineering",
    icon: GraduationCap,
    color: "from-orange-500 to-red-500",
    bgColor: "bg-orange-50",
    description: "Joint Entrance Examination for admission to IITs, NITs, IIITs and other centrally funded technical institutions.",
    registrations: "13 Lakh+",
    examDate: "Jan & Apr 2026",
    level: "National",
    eligibility: [
      "Passed 10+2 with Physics, Chemistry & Mathematics",
      "Minimum 75% marks (65% for SC/ST)",
      "Age limit: Born on or after October 1, 2001",
      "Maximum 3 attempts in consecutive years",
    ],
    syllabus: [
      { subject: "Physics", topics: "Mechanics, Electrodynamics, Optics, Modern Physics, Thermodynamics" },
      { subject: "Chemistry", topics: "Physical, Organic, Inorganic Chemistry" },
      { subject: "Mathematics", topics: "Algebra, Calculus, Coordinate Geometry, Trigonometry" },
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours",
      questions: "90 Questions",
      marking: "+4 for correct, -1 for wrong",
      sections: "Physics (30), Chemistry (30), Maths (30)",
    },
    importantDates: [
      { event: "Registration Starts", date: "Nov 2025" },
      { event: "Registration Ends", date: "Dec 2025" },
      { event: "Admit Card", date: "Jan 2026" },
      { event: "Exam Date (Session 1)", date: "Jan 22-31, 2026" },
      { event: "Result", date: "Feb 2026" },
    ],
    cutoffs: {
      general: "90-100",
      obc: "75-85",
      sc: "50-60",
      st: "45-55",
    },
  },
  {
    id: "neet",
    name: "NEET-UG",
    category: "Medical",
    icon: Stethoscope,
    color: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
    description: "National Eligibility cum Entrance Test for admission to MBBS, BDS, AYUSH, Nursing, and other medical courses.",
    registrations: "20 Lakh+",
    examDate: "May 2026",
    level: "National",
    eligibility: [
      "Passed 10+2 with Physics, Chemistry, Biology/Biotechnology",
      "Minimum 50% marks (40% for SC/ST/OBC)",
      "Age: 17 years as on Dec 31 of admission year",
      "No upper age limit",
    ],
    syllabus: [
      { subject: "Physics", topics: "Class 11 & 12 NCERT Physics" },
      { subject: "Chemistry", topics: "Class 11 & 12 NCERT Chemistry" },
      { subject: "Biology", topics: "Class 11 & 12 NCERT Botany & Zoology" },
    ],
    examPattern: {
      mode: "Pen & Paper Based (OMR)",
      duration: "3 Hours 20 Minutes",
      questions: "200 Questions (180 to attempt)",
      marking: "+4 for correct, -1 for wrong",
      sections: "Physics (50), Chemistry (50), Biology (100)",
    },
    importantDates: [
      { event: "Registration Starts", date: "Feb 2026" },
      { event: "Registration Ends", date: "Mar 2026" },
      { event: "Admit Card", date: "Apr 2026" },
      { event: "Exam Date", date: "May 4, 2026" },
      { event: "Result", date: "Jun 2026" },
    ],
    cutoffs: {
      general: "720-650",
      obc: "640-600",
      sc: "550-500",
      st: "520-480",
    },
  },
  {
    id: "cuet",
    name: "CUET-UG",
    category: "University",
    icon: Building2,
    color: "from-blue-500 to-indigo-500",
    bgColor: "bg-blue-50",
    description: "Common University Entrance Test for admission to undergraduate programs in Central Universities and other participating institutions.",
    registrations: "15 Lakh+",
    examDate: "May-Jun 2026",
    level: "National",
    eligibility: [
      "Passed or appearing in 10+2 examination",
      "No minimum percentage required for eligibility",
      "Subject-specific criteria by universities",
    ],
    syllabus: [
      { subject: "Section IA", topics: "13 Languages" },
      { subject: "Section IB", topics: "20 Languages" },
      { subject: "Section II", topics: "27 Domain Specific Subjects" },
      { subject: "Section III", topics: "General Test" },
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      duration: "45 mins per slot",
      questions: "50 Questions per subject",
      marking: "+5 for correct, -1 for wrong",
      sections: "Languages, Domain, General Test",
    },
    importantDates: [
      { event: "Registration Starts", date: "Feb 2026" },
      { event: "Registration Ends", date: "Mar 2026" },
      { event: "Exam Date", date: "May-Jun 2026" },
      { event: "Result", date: "Jul 2026" },
    ],
    cutoffs: {
      general: "95-100%ile",
      obc: "90-95%ile",
      sc: "80-85%ile",
      st: "75-80%ile",
    },
  },
  {
    id: "cat",
    name: "CAT",
    category: "Management",
    icon: Briefcase,
    color: "from-purple-500 to-pink-500",
    bgColor: "bg-purple-50",
    description: "Common Admission Test for admission to MBA/PGDM programs at IIMs and other top B-schools in India.",
    registrations: "3 Lakh+",
    examDate: "Nov 2026",
    level: "National",
    eligibility: [
      "Bachelor's degree with minimum 50% marks (45% for SC/ST)",
      "Final year students can also apply",
      "No age limit",
    ],
    syllabus: [
      { subject: "VARC", topics: "Reading Comprehension, Para Summary, Jumbles" },
      { subject: "DILR", topics: "Data Interpretation, Logical Reasoning, Puzzles" },
      { subject: "QA", topics: "Arithmetic, Algebra, Geometry, Number System" },
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      duration: "2 Hours",
      questions: "66 Questions",
      marking: "+3 for correct, -1 for wrong (MCQs only)",
      sections: "VARC (24), DILR (20), QA (22)",
    },
    importantDates: [
      { event: "Registration Starts", date: "Aug 2026" },
      { event: "Registration Ends", date: "Sep 2026" },
      { event: "Admit Card", date: "Oct 2026" },
      { event: "Exam Date", date: "Nov 2026" },
      { event: "Result", date: "Dec 2026" },
    ],
    cutoffs: {
      general: "99+%ile",
      obc: "95+%ile",
      sc: "85+%ile",
      st: "80+%ile",
    },
  },
  {
    id: "gate",
    name: "GATE",
    category: "Engineering PG",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
    bgColor: "bg-cyan-50",
    description: "Graduate Aptitude Test in Engineering for M.Tech/ME admissions in IITs, NITs and PSU recruitments.",
    registrations: "9 Lakh+",
    examDate: "Feb 2026",
    level: "National",
    eligibility: [
      "Bachelor's degree in Engineering/Technology",
      "Master's degree in relevant Science subjects",
      "Final year students can also apply",
    ],
    syllabus: [
      { subject: "General Aptitude", topics: "Verbal & Numerical Ability" },
      { subject: "Engineering Math", topics: "Linear Algebra, Calculus, Probability" },
      { subject: "Core Subject", topics: "Subject-specific technical topics" },
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      duration: "3 Hours",
      questions: "65 Questions",
      marking: "+1/+2 for correct, -0.33/-0.66 for wrong",
      sections: "General Aptitude (15), Subject (50)",
    },
    importantDates: [
      { event: "Registration Starts", date: "Sep 2025" },
      { event: "Registration Ends", date: "Oct 2025" },
      { event: "Exam Date", date: "Feb 1-16, 2026" },
      { event: "Result", date: "Mar 2026" },
    ],
    cutoffs: {
      general: "25-30",
      obc: "22-27",
      sc: "16-20",
      st: "16-20",
    },
  },
  {
    id: "clat",
    name: "CLAT",
    category: "Law",
    icon: Scale,
    color: "from-amber-500 to-orange-500",
    bgColor: "bg-amber-50",
    description: "Common Law Admission Test for admission to National Law Universities (NLUs) for undergraduate and postgraduate law programs.",
    registrations: "70,000+",
    examDate: "Dec 2025",
    level: "National",
    eligibility: [
      "Passed 10+2 with minimum 45% marks (40% for SC/ST)",
      "No age limit for UG courses",
      "Law graduate for PG course",
    ],
    syllabus: [
      { subject: "English", topics: "Reading Comprehension, Grammar, Vocabulary" },
      { subject: "GK & Current Affairs", topics: "Static GK, Current Events" },
      { subject: "Legal Reasoning", topics: "Legal Principles, Passages" },
      { subject: "Logical Reasoning", topics: "Analytical Reasoning" },
      { subject: "Quantitative", topics: "Basic Mathematics" },
    ],
    examPattern: {
      mode: "Computer Based Test (CBT)",
      duration: "2 Hours",
      questions: "120 Questions",
      marking: "+1 for correct, -0.25 for wrong",
      sections: "English, GK, Legal, Logical, Quant",
    },
    importantDates: [
      { event: "Registration Starts", date: "Jul 2025" },
      { event: "Registration Ends", date: "Nov 2025" },
      { event: "Exam Date", date: "Dec 1, 2025" },
      { event: "Result", date: "Dec 2025" },
    ],
    cutoffs: {
      general: "110-115",
      obc: "100-105",
      sc: "85-90",
      st: "80-85",
    },
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function ExamsSection() {
  const [selectedExam, setSelectedExam] = useState<string | null>("jee");
  const [expandedExam, setExpandedExam] = useState<string | null>(null);

  const activeExam = exams.find(e => e.id === selectedExam);

  return (
    <>
   
    <section id="exams" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <BookOpen className="w-3 h-3 mr-1" /> Entrance Exams
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            All Major <span className="text-gradient-saffron">Entrance Exams</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive information about India's top entrance examinations. Get details on eligibility, 
            syllabus, exam pattern, important dates, and preparation tips.
          </p>
        </motion.div>

        {/* Exam Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12"
        >
          {exams.map((exam) => (
            <motion.div
              key={exam.id}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              onClick={() => setSelectedExam(exam.id)}
              className={`relative cursor-pointer rounded-xl p-4 border-2 transition-all duration-300 ${
                selectedExam === exam.id
                  ? "border-primary bg-secondary shadow-lg"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${exam.color} flex items-center justify-center mb-3`}>
                <exam.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-semibold text-sm mb-1">{exam.name}</h3>
              <p className="text-xs text-muted-foreground">{exam.category}</p>
              {selectedExam === exam.id && (
                <motion.div
                  layoutId="activeExam"
                  className="absolute inset-0 border-2 border-primary rounded-xl"
                />
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Exam Details */}
        {activeExam && (
          <motion.div
            key={activeExam.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            {/* Exam Header */}
            <div className={`bg-gradient-to-r ${activeExam.color} p-6 md:p-8`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                    <activeExam.icon className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{activeExam.name}</h3>
                    <p className="text-white/80">{activeExam.description}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    Download Syllabus
                  </Button>
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    Apply Now <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <Users className="w-5 h-5 text-white/80 mb-2" />
                  <p className="text-xl font-bold text-white">{activeExam.registrations}</p>
                  <p className="text-sm text-white/70">Registrations</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <Calendar className="w-5 h-5 text-white/80 mb-2" />
                  <p className="text-xl font-bold text-white">{activeExam.examDate}</p>
                  <p className="text-sm text-white/70">Exam Date</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <Clock className="w-5 h-5 text-white/80 mb-2" />
                  <p className="text-xl font-bold text-white">{activeExam.examPattern.duration}</p>
                  <p className="text-sm text-white/70">Duration</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4">
                  <FileText className="w-5 h-5 text-white/80 mb-2" />
                  <p className="text-xl font-bold text-white">{activeExam.level}</p>
                  <p className="text-sm text-white/70">Level</p>
                </div>
              </div>
            </div>

            {/* Exam Content */}
            <div className="p-6 md:p-8">
              <Accordion type="single" collapsible defaultValue="eligibility" className="space-y-4">
                {/* Eligibility */}
                <AccordionItem value="eligibility" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">Eligibility Criteria</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <ul className="space-y-3 ml-14">
                      {activeExam.eligibility.map((item, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-india mt-0.5 shrink-0" />
                          <span className="text-muted-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>

                {/* Syllabus */}
                <AccordionItem value="syllabus" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <BookOpen className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">Syllabus</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="ml-14 space-y-4">
                      {activeExam.syllabus.map((item, idx) => (
                        <div key={idx} className="bg-secondary/50 rounded-lg p-4">
                          <h4 className="font-semibold text-primary mb-2">{item.subject}</h4>
                          <p className="text-sm text-muted-foreground">{item.topics}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Exam Pattern */}
                <AccordionItem value="pattern" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">Exam Pattern</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="ml-14 grid grid-cols-1 md:grid-cols-2 gap-4">
                      {Object.entries(activeExam.examPattern).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                          <span className="text-muted-foreground capitalize">{key.replace(/([A-Z])/g, ' $1')}</span>
                          <span className="font-medium">{value}</span>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Important Dates */}
                <AccordionItem value="dates" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">Important Dates</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="ml-14">
                      <div className="relative">
                        {activeExam.importantDates.map((item, idx) => (
                          <div key={idx} className="flex items-center gap-4 pb-4 last:pb-0">
                            <div className="relative">
                              <div className="w-4 h-4 rounded-full bg-primary" />
                              {idx !== activeExam.importantDates.length - 1 && (
                                <div className="absolute top-4 left-1/2 w-0.5 h-full -translate-x-1/2 bg-border" />
                              )}
                            </div>
                            <div className="flex-1 flex justify-between items-center p-3 bg-secondary/50 rounded-lg">
                              <span className="text-muted-foreground">{item.event}</span>
                              <Badge variant="outline">{item.date}</Badge>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>

                {/* Cutoffs */}
                <AccordionItem value="cutoffs" className="border rounded-lg px-4">
                  <AccordionTrigger className="hover:no-underline py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                        <TrendingUp className="w-5 h-5 text-primary" />
                      </div>
                      <span className="font-semibold">Expected Cutoffs</span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-4">
                    <div className="ml-14 grid grid-cols-2 md:grid-cols-4 gap-4">
                      {Object.entries(activeExam.cutoffs).map(([category, value]) => (
                        <div key={category} className="text-center p-4 bg-secondary/50 rounded-lg">
                          <p className="text-2xl font-bold text-primary mb-1">{value}</p>
                          <p className="text-sm text-muted-foreground uppercase">{category}</p>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                <Button className="gradient-saffron text-primary-foreground">
                  Start Preparation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline">Download Previous Papers</Button>
                <Button variant="outline">Join Study Group</Button>
                <Button variant="outline">Get Notifications</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>

    <ToolsSection />
    
     </>
  );
}
