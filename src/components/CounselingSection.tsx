import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Users, Building2, Stethoscope, MapPin, ArrowRight, 
  CheckCircle2, Clock, FileText, AlertCircle, ChevronRight,
  Download, ExternalLink, HelpCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { NewsSection } from "./NewsSection";

const counselingTypes = [
  {
    id: "josaa",
    name: "JoSAA Counseling",
    fullName: "Joint Seat Allocation Authority",
    icon: Building2,
    color: "from-orange-500 to-red-500",
    description: "Centralized counseling for IITs, NITs, IIITs, and other GFTIs",
    seats: "50,000+",
    institutions: "114",
    rounds: "6 Rounds",
    timeline: [
      { step: 1, title: "Registration & Choice Filling", duration: "7-10 days", status: "active" },
      { step: 2, title: "Mock Allotment", duration: "2 days", status: "upcoming" },
      { step: 3, title: "Choice Locking", duration: "2 days", status: "upcoming" },
      { step: 4, title: "Round 1 Allotment", duration: "Instant", status: "upcoming" },
      { step: 5, title: "Reporting & Document Verification", duration: "5-7 days", status: "upcoming" },
      { step: 6, title: "Subsequent Rounds", duration: "As per schedule", status: "upcoming" },
    ],
    documents: [
      "JEE Main/Advanced Rank Card",
      "Class 10 Certificate/Marksheet",
      "Class 12 Certificate/Marksheet",
      "Category Certificate (if applicable)",
      "PwD Certificate (if applicable)",
      "Passport Size Photographs",
      "Aadhaar Card",
      "Fee Payment Receipt",
    ],
    tips: [
      "Fill maximum choices for better allocation chances",
      "Research colleges thoroughly before choice filling",
      "Keep all original documents ready",
      "Don't freeze option in early rounds unless confident",
      "Check previous year cutoffs for realistic expectations",
    ],
    institutions_list: [
      { name: "Indian Institutes of Technology (IITs)", count: 23 },
      { name: "National Institutes of Technology (NITs)", count: 31 },
      { name: "Indian Institutes of Information Technology (IIITs)", count: 26 },
      { name: "Government Funded Technical Institutions (GFTIs)", count: 34 },
    ],
  },
  {
    id: "csab",
    name: "CSAB Counseling",
    fullName: "Central Seat Allocation Board",
    icon: Users,
    color: "from-blue-500 to-indigo-500",
    description: "Special rounds for NITs, IIITs, and GFTIs after JoSAA",
    seats: "10,000+",
    institutions: "91",
    rounds: "2 Special Rounds",
    timeline: [
      { step: 1, title: "Registration Opens", duration: "After JoSAA", status: "active" },
      { step: 2, title: "Choice Filling", duration: "4-5 days", status: "upcoming" },
      { step: 3, title: "Special Round 1", duration: "Instant", status: "upcoming" },
      { step: 4, title: "Reporting", duration: "3 days", status: "upcoming" },
      { step: 5, title: "Special Round 2", duration: "Instant", status: "upcoming" },
      { step: 6, title: "Final Reporting", duration: "3 days", status: "upcoming" },
    ],
    documents: [
      "JEE Main Rank Card",
      "JoSAA Withdrawal/Non-allotment Proof",
      "Class 10 & 12 Certificates",
      "Category Certificate",
      "Domicile Certificate (for HS quota)",
      "Photographs & ID Proof",
    ],
    tips: [
      "Apply only if not satisfied with JoSAA allotment",
      "Home State quota available for eligible candidates",
      "Fee refund available if withdrawing properly",
      "Last chance for NIT/IIIT admission in current year",
    ],
    institutions_list: [
      { name: "National Institutes of Technology (NITs)", count: 31 },
      { name: "Indian Institutes of Information Technology (IIITs)", count: 26 },
      { name: "Government Funded Technical Institutions (GFTIs)", count: 34 },
    ],
  },
  {
    id: "mcc",
    name: "MCC Counseling",
    fullName: "Medical Counselling Committee",
    icon: Stethoscope,
    color: "from-green-500 to-teal-500",
    description: "Centralized counseling for AIIMS, JIPMER, and 15% AIQ medical seats",
    seats: "1 Lakh+",
    institutions: "700+",
    rounds: "4 Rounds + Stray",
    timeline: [
      { step: 1, title: "Registration & Choice Filling", duration: "10 days", status: "active" },
      { step: 2, title: "Round 1 Allotment", duration: "Instant", status: "upcoming" },
      { step: 3, title: "Reporting to College", duration: "5 days", status: "upcoming" },
      { step: 4, title: "Round 2 Allotment", duration: "Instant", status: "upcoming" },
      { step: 5, title: "Mop-up Round", duration: "As per schedule", status: "upcoming" },
      { step: 6, title: "Stray Vacancy Round", duration: "Final", status: "upcoming" },
    ],
    documents: [
      "NEET Scorecard & Admit Card",
      "NEET Rank Letter",
      "Class 10 & 12 Marksheets",
      "Permanent/Provisional Registration",
      "Category/EWS Certificate",
      "Domicile Certificate",
      "Medical Fitness Certificate",
      "Character Certificate",
    ],
    tips: [
      "Research college infrastructure and faculty",
      "Consider deemed universities as backup options",
      "State counseling runs parallel - manage both",
      "Bond conditions vary by state - check carefully",
      "PG course options depend on UG college",
    ],
    institutions_list: [
      { name: "AIIMS Institutions", count: 23 },
      { name: "Central Government Colleges", count: 47 },
      { name: "Deemed Universities", count: 50 },
      { name: "State Government Colleges (15% AIQ)", count: 580 },
    ],
  },
  {
    id: "state",
    name: "State Counseling",
    fullName: "State-level Admission Counseling",
    icon: MapPin,
    color: "from-purple-500 to-pink-500",
    description: "State-wise counseling for engineering, medical, and other courses",
    seats: "5 Lakh+",
    institutions: "5000+",
    rounds: "Multiple",
    timeline: [
      { step: 1, title: "State Registration", duration: "Varies by state", status: "active" },
      { step: 2, title: "Document Verification", duration: "5-7 days", status: "upcoming" },
      { step: 3, title: "Choice Filling", duration: "5-10 days", status: "upcoming" },
      { step: 4, title: "Seat Allotment", duration: "Round-wise", status: "upcoming" },
      { step: 5, title: "Fee Payment & Reporting", duration: "3-5 days", status: "upcoming" },
      { step: 6, title: "Upgradation Rounds", duration: "Multiple", status: "upcoming" },
    ],
    documents: [
      "State Entrance Exam Scorecard",
      "Domicile Certificate (mandatory)",
      "Class 10 & 12 Certificates",
      "Category Certificate",
      "Income Certificate",
      "Migration Certificate",
    ],
    tips: [
      "Domicile is crucial for state quota seats",
      "Each state has different counseling authority",
      "Management quota fees are higher",
      "Some states accept JEE/NEET scores directly",
      "Check lateral entry options for diploma holders",
    ],
    institutions_list: [
      { name: "State Engineering Colleges", count: "2000+" },
      { name: "State Medical Colleges", count: "300+" },
      { name: "Private Engineering Colleges", count: "2500+" },
      { name: "Private Medical Colleges", count: "200+" },
    ],
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

export function CounselingSection() {
  const [selectedCounseling, setSelectedCounseling] = useState("josaa");
  const activeCounseling = counselingTypes.find(c => c.id === selectedCounseling);

  return (
    <>
  
    <section id="counseling" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Users className="w-3 h-3 mr-1" /> Counseling Guide
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Complete <span className="text-gradient-saffron">Counseling</span> Information
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Step-by-step guidance for all major counseling processes. From JoSAA to state-level admissions, 
            we've got you covered with timelines, documents, and expert tips.
          </p>
        </motion.div>

        {/* Counseling Type Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
        >
          {counselingTypes.map((counseling) => (
            <motion.div
              key={counseling.id}
              variants={itemVariants}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedCounseling(counseling.id)}
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 ${
                selectedCounseling === counseling.id
                  ? "border-primary bg-card shadow-xl"
                  : "border-border bg-card/50 hover:border-primary/50"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${counseling.color} flex items-center justify-center mb-4`}>
                <counseling.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-1">{counseling.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{counseling.description}</p>
              <div className="flex items-center justify-between text-sm">
                <span className="text-primary font-medium">{counseling.seats} Seats</span>
                <ChevronRight className="w-4 h-4 text-muted-foreground" />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Selected Counseling Details */}
        {activeCounseling && (
          <motion.div
            key={activeCounseling.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            {/* Header */}
            <div className={`bg-gradient-to-r ${activeCounseling.color} p-6 md:p-8`}>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-3 mb-2">
                    <activeCounseling.icon className="w-8 h-8 text-white" />
                    <h3 className="text-2xl md:text-3xl font-bold text-white">{activeCounseling.name}</h3>
                  </div>
                  <p className="text-white/80">{activeCounseling.fullName}</p>
                </div>
                <div className="flex gap-3">
                  <Button variant="secondary" className="bg-white/20 text-white hover:bg-white/30">
                    <Download className="w-4 h-4 mr-2" /> Brochure
                  </Button>
                  <Button className="bg-white text-foreground hover:bg-white/90">
                    Official Portal <ExternalLink className="ml-2 w-4 h-4" />
                  </Button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4 mt-6">
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white">{activeCounseling.seats}</p>
                  <p className="text-sm text-white/70">Total Seats</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white">{activeCounseling.institutions}</p>
                  <p className="text-sm text-white/70">Institutions</p>
                </div>
                <div className="bg-white/10 backdrop-blur rounded-lg p-4 text-center">
                  <p className="text-2xl font-bold text-white">{activeCounseling.rounds}</p>
                  <p className="text-sm text-white/70">Counseling Rounds</p>
                </div>
              </div>
            </div>

            {/* Content Tabs */}
            <div className="p-6 md:p-8">
              <Tabs defaultValue="process" className="space-y-6">
                <TabsList className="grid grid-cols-4 w-full max-w-2xl">
                  <TabsTrigger value="process">Process</TabsTrigger>
                  <TabsTrigger value="documents">Documents</TabsTrigger>
                  <TabsTrigger value="institutions">Institutions</TabsTrigger>
                  <TabsTrigger value="tips">Tips</TabsTrigger>
                </TabsList>

                {/* Process Tab */}
                <TabsContent value="process" className="space-y-6">
                  <h4 className="text-xl font-semibold mb-4">Counseling Timeline</h4>
                  <div className="space-y-4">
                    {activeCounseling.timeline.map((step, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-4"
                      >
                        <div className="relative">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                            step.status === "active" 
                              ? "bg-primary text-primary-foreground" 
                              : "bg-secondary text-muted-foreground"
                          }`}>
                            {step.step}
                          </div>
                          {idx !== activeCounseling.timeline.length - 1 && (
                            <div className="absolute top-10 left-1/2 w-0.5 h-12 -translate-x-1/2 bg-border" />
                          )}
                        </div>
                        <div className="flex-1 pb-8">
                          <div className="bg-secondary/50 rounded-lg p-4">
                            <div className="flex items-center justify-between mb-2">
                              <h5 className="font-semibold">{step.title}</h5>
                              {step.status === "active" && (
                                <Badge className="bg-green-india text-white">Active</Badge>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Clock className="w-4 h-4" />
                              <span>{step.duration}</span>
                            </div>
                            {step.status === "active" && (
                              <Progress value={45} className="mt-3 h-2" />
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Documents Tab */}
                <TabsContent value="documents" className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">Required Documents</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {activeCounseling.documents.map((doc, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        className="flex items-center gap-3 p-4 bg-secondary/50 rounded-lg"
                      >
                        <CheckCircle2 className="w-5 h-5 text-green-india shrink-0" />
                        <span>{doc}</span>
                      </motion.div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
                    <div className="flex items-start gap-3">
                      <AlertCircle className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <div>
                        <h5 className="font-semibold mb-1">Important Note</h5>
                        <p className="text-sm text-muted-foreground">
                          Keep both original and photocopies of all documents. Self-attested copies may be required. 
                          Some documents need to be uploaded during registration.
                        </p>
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Institutions Tab */}
                <TabsContent value="institutions" className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <Building2 className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">Participating Institutions</h4>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {activeCounseling.institutions_list.map((inst, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02 }}
                        className="p-5 bg-secondary/50 rounded-xl border border-border hover:border-primary/50 transition-colors"
                      >
                        <div className="flex items-center justify-between">
                          <div>
                            <h5 className="font-semibold mb-1">{inst.name}</h5>
                            <p className="text-sm text-muted-foreground">Institutions</p>
                          </div>
                          <div className="text-3xl font-bold text-primary">{inst.count}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>

                {/* Tips Tab */}
                <TabsContent value="tips" className="space-y-6">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-5 h-5 text-primary" />
                    <h4 className="text-xl font-semibold">Expert Tips</h4>
                  </div>
                  <div className="space-y-3">
                    {activeCounseling.tips.map((tip, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 p-4 bg-secondary/50 rounded-lg"
                      >
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                          <span className="text-sm font-bold text-primary">{idx + 1}</span>
                        </div>
                        <p className="text-muted-foreground">{tip}</p>
                      </motion.div>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-8 pt-6 border-t border-border">
                <Button className="gradient-saffron text-primary-foreground">
                  Start Registration <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline">Download Complete Guide</Button>
                <Button variant="outline">Join Counseling Group</Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
    <NewsSection />
      </>
  );
}
