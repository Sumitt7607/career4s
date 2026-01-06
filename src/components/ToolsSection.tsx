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

        {/* College Predictor Tool */}
        {selectedTool === "predictor" && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden"
          >
            <div className="p-6 md:p-8 bg-gradient-to-r from-blue-500 to-indigo-500">
              <div className="flex items-center gap-3 mb-2">
                <Building2 className="w-8 h-8 text-white" />
                <h3 className="text-2xl font-bold text-white">College Predictor</h3>
              </div>
              <p className="text-white/80">Enter your rank and preferences to find matching colleges</p>
            </div>

            <div className="p-6 md:p-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Exam</label>
                  <Select defaultValue="jee-main">
                    <SelectTrigger>
                      <SelectValue placeholder="Select exam" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="jee-main">JEE Main</SelectItem>
                      <SelectItem value="jee-adv">JEE Advanced</SelectItem>
                      <SelectItem value="neet">NEET</SelectItem>
                      <SelectItem value="cuet">CUET</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Category</label>
                  <Select defaultValue="general">
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="general">General</SelectItem>
                      <SelectItem value="obc">OBC-NCL</SelectItem>
                      <SelectItem value="sc">SC</SelectItem>
                      <SelectItem value="st">ST</SelectItem>
                      <SelectItem value="ews">EWS</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Branch Preference</label>
                  <Select defaultValue="cs">
                    <SelectTrigger>
                      <SelectValue placeholder="Select branch" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cs">Computer Science</SelectItem>
                      <SelectItem value="ee">Electrical Engineering</SelectItem>
                      <SelectItem value="me">Mechanical Engineering</SelectItem>
                      <SelectItem value="ce">Civil Engineering</SelectItem>
                      <SelectItem value="ec">Electronics & Comm.</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Home State</label>
                  <Select defaultValue="delhi">
                    <SelectTrigger>
                      <SelectValue placeholder="Select state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="delhi">Delhi</SelectItem>
                      <SelectItem value="maharashtra">Maharashtra</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                      <SelectItem value="tamil-nadu">Tamil Nadu</SelectItem>
                      <SelectItem value="up">Uttar Pradesh</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <label className="text-sm font-medium">Your Expected Rank</label>
                  <span className="text-2xl font-bold text-primary">{rank[0].toLocaleString()}</span>
                </div>
                <Slider
                  value={rank}
                  onValueChange={setRank}
                  min={1}
                  max={100000}
                  step={1}
                  className="py-4"
                />
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>1</span>
                  <span>50,000</span>
                  <span>1,00,000</span>
                </div>
              </div>

              <Button 
                className="w-full gradient-saffron text-primary-foreground py-6 text-lg"
                onClick={() => setShowResults(true)}
              >
                <Search className="w-5 h-5 mr-2" /> Predict Colleges
              </Button>

              {/* Results */}
              {showResults && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-8 pt-8 border-t border-border"
                >
                  <h4 className="text-xl font-bold mb-6">Predicted Colleges for Rank {rank[0].toLocaleString()}</h4>
                  <div className="space-y-4">
                    {sampleColleges.map((college, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors"
                      >
                        <div className="flex items-center gap-4">
                          <div className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                            college.chance >= 90 ? 'bg-green-100 text-green-india' :
                            college.chance >= 70 ? 'bg-yellow-100 text-yellow-600' :
                            'bg-red-100 text-red-500'
                          }`}>
                            <span className="font-bold">{college.chance}%</span>
                          </div>
                          <div>
                            <h5 className="font-semibold">{college.name}</h5>
                            <p className="text-sm text-muted-foreground">{college.branch}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Closing Rank</p>
                          <p className="font-bold text-primary">{college.closingRank.toLocaleString()}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                  <Button variant="outline" className="w-full mt-6">
                    View All 50+ Matching Colleges <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}

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
                  <Select defaultValue="jee-main">
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
                  <Input type="number" placeholder="Enter your score (0-300)" />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Percentile</label>
                  <Input type="number" placeholder="Enter percentile (0-100)" />
                </div>
              </div>

              <Button className="w-full gradient-saffron text-primary-foreground py-6 text-lg">
                <Calculator className="w-5 h-5 mr-2" /> Calculate Rank
              </Button>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Expected Rank (Best)</p>
                  <p className="text-3xl font-bold text-green-india">2,500</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Expected Rank (Avg)</p>
                  <p className="text-3xl font-bold text-primary">3,200</p>
                </div>
                <div className="text-center p-6 bg-secondary/50 rounded-xl">
                  <p className="text-sm text-muted-foreground mb-2">Expected Rank (Safe)</p>
                  <p className="text-3xl font-bold text-orange-500">4,000</p>
                </div>
              </div>
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
