import { motion } from "framer-motion";
import { useState } from "react";


import { 
  Calculator, TrendingUp, Building2, BarChart3, 
  ArrowRight, Search, ChevronDown, Sparkles
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Footer } from "./Footer";

const tools = [
//   {
//     id: "predictor",
//     name: "College Predictor",
//     description: "Find colleges based on your rank and preferences",
//     icon: Building2,
//     color: "from-blue-500 to-indigo-500",
//   },
  {
    id: "rank",
    name: "Rank Calculator",
    description: "Estimate your rank based on expected score",
    icon: Calculator,
    color: "from-green-500 to-teal-500",
  },
  {
    id: "cutoff",
    name: "Cutoff Trends",
    description: "Analyze category-wise cutoff trends over years",
    icon: TrendingUp,
    color: "from-orange-500 to-red-500",
  },
//   {
//     id: "compare",
//     name: "Compare Colleges",
//     description: "Side-by-side comparison of colleges",
//     icon: BarChart3,
//     color: "from-purple-500 to-pink-500",
//   },
];

const sampleColleges = [
  { name: "IIT Bombay", branch: "Computer Science", category: "General", closingRank: 68, chance: 95 },
  { name: "IIT Delhi", branch: "Computer Science", category: "General", closingRank: 85, chance: 88 },
  { name: "IIT Madras", branch: "Computer Science", category: "General", closingRank: 110, chance: 82 },
  { name: "IIT Kanpur", branch: "Computer Science", category: "General", closingRank: 145, chance: 75 },
  { name: "IIT Kharagpur", branch: "Computer Science", category: "General", closingRank: 180, chance: 70 },
  { name: "NIT Trichy", branch: "Computer Science", category: "General", closingRank: 2500, chance: 98 },
  { name: "NIT Warangal", branch: "Computer Science", category: "General", closingRank: 3200, chance: 96 },
];

export function ToolsSection() {
  const [selectedTool, setSelectedTool] = useState("predictor");
  const [rank, setRank] = useState<number[]>([100]);
  const [showResults, setShowResults] = useState(false);

// ❌ DELETE FROM HERE
const [rankExam, setRankExam] = useState("jee-main");
const [expectedScore, setExpectedScore] = useState("");
const [expectedPercentile, setExpectedPercentile] = useState("");
const [rankResult, setRankResult] = useState<null | {
  best: number;
  avg: number;
  safe: number;
}>(null);


const calculateRank = () => {
  let maxScore = 300;
  let totalCandidates = 1000000;

  if (rankExam === "neet") {
    maxScore = 720;
    totalCandidates = 2000000;
  }
  if (rankExam === "cat") {
    maxScore = 198;
    totalCandidates = 300000;
  }

  let baseRank = totalCandidates;

  if (expectedScore) {
    const score = Number(expectedScore);
    baseRank = Math.max(
      1,
      Math.round(totalCandidates * (1 - score / maxScore))
    );
  } else if (expectedPercentile) {
    const percentile = Number(expectedPercentile);
    baseRank = Math.round(
      totalCandidates * (1 - percentile / 100)
    );
  }

  setRankResult({
    best: Math.round(baseRank * 0.8),
    avg: baseRank,
    safe: Math.round(baseRank * 1.25),
  });
};




  return (
    <>
    
    <section id="tools" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <Badge variant="secondary" className="mb-4">
            <Sparkles className="w-3 h-3 mr-1" /> Interactive Tools
          </Badge>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Smart <span className="text-gradient-saffron">Prediction</span> Tools
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Use our AI-powered tools to predict your college, calculate your expected rank, 
            analyze cutoff trends, and compare institutions.
          </p>
        </motion.div>

        {/* Tool Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -5 }}
              onClick={() => setSelectedTool(tool.id)}
              className={`cursor-pointer rounded-xl p-6 border-2 transition-all duration-300 ${
                selectedTool === tool.id
                  ? "border-primary bg-secondary shadow-xl"
                  : "border-border bg-card hover:border-primary/50"
              }`}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center mb-4`}>
                <tool.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-bold text-lg mb-2">{tool.name}</h3>
              <p className="text-sm text-muted-foreground">{tool.description}</p>
            </motion.div>
          ))}
        </div>

      
  

        {/* Rank Calculator Tool */}
        {selectedTool === "rank" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8 bg-gradient-to-r from-green-500 to-teal-500">
              <div className="flex items-center gap-3 mb-2">
                <Calculator className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Rank Calculator</h3>
              </div>
              <p className="text-white/80">Estimate your rank based on your expected score</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
  <div className="space-y-2">
  <label className="text-sm font-medium">Exam</label>

  <Select value={rankExam} onValueChange={setRankExam}>
    <SelectTrigger>
      <SelectValue placeholder="Select exam" />
    </SelectTrigger>

    <SelectContent>
      <SelectItem value="jee-main">JEE Main</SelectItem>
      <SelectItem value="neet">NEET</SelectItem>
      <SelectItem value="cat">CAT</SelectItem>
    </SelectContent>
  </Select>
</div>


                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Score</label>
                  <Input
  type="number"
  value={expectedScore}
  onChange={(e) => setExpectedScore(e.target.value)}
  placeholder="Enter your score"
/>

                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Percentile</label>
                 <Input
  type="number"
  value={expectedPercentile}
  onChange={(e) => setExpectedPercentile(e.target.value)}
  placeholder="Enter percentile (0-100)"
/>

                </div>
              </div>

    <Button
  className="w-full gradient-saffron text-primary-foreground py-6 text-lg"
  onClick={calculateRank}
>
  <Calculator className="w-5 h-5 mr-2" /> Calculate Rank
</Button>
{rankResult && (
  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="text-center p-6 bg-secondary/50 rounded-xl">
      <p className="text-sm text-muted-foreground mb-2">Expected Rank (Best)</p>
      <p className="text-3xl font-bold text-green-india">
        {rankResult.best.toLocaleString()}
      </p>
    </div>

    <div className="text-center p-6 bg-secondary/50 rounded-xl">
      <p className="text-sm text-muted-foreground mb-2">Expected Rank (Avg)</p>
      <p className="text-3xl font-bold text-primary">
        {rankResult.avg.toLocaleString()}
      </p>
    </div>

    <div className="text-center p-6 bg-secondary/50 rounded-xl">
      <p className="text-sm text-muted-foreground mb-2">Expected Rank (Safe)</p>
      <p className="text-3xl font-bold text-orange-500">
        {rankResult.safe.toLocaleString()}
      </p>
    </div>
  </div>
)}



            </div>
          </motion.div>
        )}

        {/* Cutoff Trends Tool */}
        {selectedTool === "cutoff" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8 bg-gradient-to-r from-orange-500 to-red-500">
              <div className="flex items-center gap-3 mb-2">
                <TrendingUp className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">Cutoff Trends</h3>
              </div>
              <p className="text-white/80">Analyze category-wise cutoff trends over the years</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium">College</label>
                  <Select defaultValue="iit-b">
                    <SelectTrigger>
                      <SelectValue placeholder="Select college" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="iit-b">IIT Bombay</SelectItem>
                      <SelectItem value="iit-d">IIT Delhi</SelectItem>
                      <SelectItem value="iit-m">IIT Madras</SelectItem>
                      <SelectItem value="nit-t">NIT Trichy</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Branch</label>
                  <Select defaultValue="cse">
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cse">Computer Science</SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select defaultValue="all">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Categories</SelectItem>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC-NCL</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <Button className="w-full gradient-saffron text-primary-foreground py-6 text-lg mb-8">
                <TrendingUp className="w-5 h-5 mr-2" /> View Trends
              </Button>

              {/* Trend Chart Placeholder */}
              <div className="bg-secondary/50 rounded-xl p-8">
                <h4 className="text-lg font-semibold mb-6 text-center">IIT Bombay - CSE Cutoff Trends (2021-2025)</h4>
                <div className="h-64 flex items-end justify-between gap-4">
                  {[68, 72, 65, 70, 68].map((value, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ height: 0 }}
                      animate={{ height: `${value}%` }}
                      transition={{ delay: idx * 0.2, duration: 0.5 }}
                      className="flex-1 bg-gradient-to-t from-primary to-primary/50 rounded-t-lg relative group"
                    >
                      <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {value}
                      </div>
                      <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-muted-foreground">
                        {2021 + idx}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Compare Colleges Tool */}
      
      </div>
    </section>
    <Footer />
    </>
  );
}
