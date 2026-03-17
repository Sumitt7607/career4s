import { motion } from "framer-motion";
import { Search, Filter, MapPin, Building2, DollarSign, Bed, AlertTriangle, BarChart3, History } from "lucide-react";
import { useState } from "react";

// Section 11: College Predictor Tool
const CollegePredictor = () => {
  const [score, setScore] = useState("");
  const [state, setState] = useState("");
  const [category, setCategory] = useState("General");
  const [results, setResults] = useState<null | Array<{ name: string; chance: string }>>(null);

  const predict = () => {
    const s = parseInt(score);
    if (!s) return;
    const colleges = s >= 650
      ? [{ name: "AIIMS Delhi", chance: "High" }, { name: "MAMC Delhi", chance: "High" }, { name: "JIPMER Puducherry", chance: "Medium" }]
      : s >= 550
      ? [{ name: "GMC Nagpur", chance: "High" }, { name: "KGMU Lucknow", chance: "Medium" }, { name: "SMC Jaipur", chance: "Medium" }]
      : s >= 450
      ? [{ name: "KMC Manipal (Private)", chance: "High" }, { name: "SRM Chennai", chance: "High" }, { name: "Amrita Kochi", chance: "Medium" }]
      : [{ name: "Deemed Universities", chance: "High" }, { name: "NRI Quota Seats", chance: "Medium" }];
    setResults(colleges);
  };

  return (
    <section className="section-padding" id="college-predictor">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Utility</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">College Predictor Tool</h2>
        <div className="max-w-xl mx-auto p-2 bg-secondary rounded-lg">
          <div className="bg-card rounded-md p-6 card-shadow">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">NEET Score</label>
                <input type="number" value={score} onChange={(e) => setScore(e.target.value)} placeholder="Enter your NEET score (137-720)" className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Home State</label>
                <select value={state} onChange={(e) => setState(e.target.value)} className="w-full rounded-md border border-input bg-background px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option value="">Select State</option>
                  {["Andhra Pradesh", "Bihar", "Delhi", "Gujarat", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Punjab", "Rajasthan", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"].map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="text-sm font-semibold text-foreground mb-1.5 block">Category</label>
                <div className="flex flex-wrap gap-2">
                  {["General", "OBC", "SC", "ST", "EWS"].map((c) => (
                    <button key={c} onClick={() => setCategory(c)} className={`px-4 py-2 rounded-md text-sm font-medium transition-all ${category === c ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground hover:bg-muted"}`}>
                      {c}
                    </button>
                  ))}
                </div>
              </div>
              <motion.button onClick={predict} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="w-full py-3 bg-primary text-primary-foreground font-semibold rounded-md hover:shadow-lg transition-shadow">
                Predict My Colleges
              </motion.button>
            </div>
            {results && (
              <div className="mt-6 border-t border-border pt-6 space-y-3">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">Predicted Colleges</h3>
                {results.map((r) => (
                  <div key={r.name} className="flex items-center justify-between p-3 rounded-md bg-secondary">
                    <span className="font-medium text-foreground text-sm">{r.name}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded ${r.chance === "High" ? "bg-success/10 text-success" : "bg-warning/10 text-warning"}`}>{r.chance}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 12: Top Government Colleges
const GovtColleges = () => {
  const colleges = [
    { name: "AIIMS New Delhi", cutoff: "720-700", fees: "₹1,628/yr", seats: 107 },
    { name: "JIPMER Puducherry", cutoff: "690-660", fees: "₹8,275/yr", seats: 200 },
    { name: "MAMC Delhi", cutoff: "685-655", fees: "₹10,000/yr", seats: 250 },
    { name: "KGMU Lucknow", cutoff: "670-640", fees: "₹25,000/yr", seats: 250 },
    { name: "Grant Medical Mumbai", cutoff: "665-635", fees: "₹22,000/yr", seats: 200 },
    { name: "CMC Vellore", cutoff: "660-630", fees: "₹55,000/yr", seats: 100 },
  ];
  return (
    <section className="section-padding bg-card" id="govt-colleges">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Top Institutions</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Government Medical Colleges</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {colleges.map((c) => (
            <motion.div key={c.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="p-2 bg-secondary rounded-lg">
              <div className="bg-card rounded-md p-5 card-shadow">
                <h3 className="font-bold text-foreground mb-3">{c.name}</h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between"><span className="text-muted-foreground">Cut-off Range</span><span className="font-mono font-bold text-foreground tabular-nums">{c.cutoff}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Annual Fees</span><span className="font-mono font-semibold text-success tabular-nums">{c.fees}</span></div>
                  <div className="flex justify-between"><span className="text-muted-foreground">Total Seats</span><span className="font-mono font-semibold text-foreground tabular-nums">{c.seats}</span></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 13: Private Medical Colleges
const PrivateColleges = () => {
  const colleges = [
    { name: "KMC Manipal", fees: "₹23L/yr", rating: "A++" },
    { name: "Kasturba Medical Mangalore", fees: "₹20L/yr", rating: "A+" },
    { name: "SRM Chennai", fees: "₹18L/yr", rating: "A+" },
    { name: "Amrita Kochi", fees: "₹16L/yr", rating: "A" },
    { name: "MS Ramaiah Bangalore", fees: "₹22L/yr", rating: "A+" },
    { name: "DY Patil Mumbai", fees: "₹19L/yr", rating: "A" },
  ];
  return (
    <section className="section-padding" id="private-colleges">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Private Institutions</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Private Medical Colleges</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {colleges.map((c) => (
            <div key={c.name} className="p-2 bg-secondary rounded-lg">
              <div className="bg-card rounded-md p-5 card-shadow">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="font-bold text-foreground">{c.name}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-primary/10 text-primary">{c.rating}</span>
                </div>
                <p className="font-mono text-2xl font-bold text-foreground tabular-nums">{c.fees}</p>
                <p className="text-xs text-muted-foreground mt-1">Annual tuition (approx.)</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 14: Deemed Universities
const DeemedUniversities = () => (
  <section className="section-padding bg-card">
    <div className="section-container">
      <div className="max-w-3xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Centralized Counseling</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-8">Deemed Universities</h2>
        <div className="p-2 bg-secondary rounded-lg">
          <div className="bg-card rounded-md p-6 card-shadow">
            <p className="text-muted-foreground mb-6">
              Deemed universities conduct admissions through centralized counseling managed by the DGHS (Directorate General of Health Services). 
              These include prestigious institutions with their own counseling schedule.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {["MAHE Manipal", "SRM IST Chennai", "Amrita Vishwa", "DY Patil Pune", "Saveetha Chennai", "Bharati Vidyapeeth"].map((u) => (
                <div key={u} className="flex items-center gap-3 p-3 rounded-md bg-secondary">
                  <Building2 className="h-4 w-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-foreground">{u}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

// Section 15: State-wise Directory
const StateDirectory = () => {
  const states = [
    { name: "Maharashtra", colleges: 67, govtSeats: 5200 },
    { name: "Karnataka", colleges: 60, govtSeats: 4800 },
    { name: "Tamil Nadu", colleges: 53, govtSeats: 5100 },
    { name: "Uttar Pradesh", colleges: 52, govtSeats: 4600 },
    { name: "Rajasthan", colleges: 25, govtSeats: 3200 },
    { name: "Madhya Pradesh", colleges: 24, govtSeats: 2800 },
    { name: "Kerala", colleges: 31, govtSeats: 2400 },
    { name: "Gujarat", colleges: 28, govtSeats: 3600 },
    { name: "Andhra Pradesh", colleges: 28, govtSeats: 2600 },
    { name: "Telangana", colleges: 26, govtSeats: 2100 },
    { name: "West Bengal", colleges: 24, govtSeats: 2900 },
    { name: "Delhi", colleges: 10, govtSeats: 1800 },
  ];
  return (
    <section className="section-padding" id="state-directory">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">State-wise Data</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Medical Colleges by State</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 max-w-6xl mx-auto">
          {states.map((s) => (
            <div key={s.name} className="flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/30 transition-colors cursor-pointer">
              <MapPin className="h-5 w-5 text-primary shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.colleges} colleges • <span className="font-mono tabular-nums">{s.govtSeats.toLocaleString()}</span> govt seats</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 16: Fee Structure Table
const FeeStructure = () => {
  const fees = [
    { type: "Government", tuition: "₹10K–₹80K", hostel: "₹5K–₹30K", hidden: "₹2K–₹10K", total: "₹17K–₹1.2L" },
    { type: "Private", tuition: "₹8L–₹25L", hostel: "₹50K–₹2L", hidden: "₹20K–₹1L", total: "₹9L–₹28L" },
    { type: "Deemed", tuition: "₹12L–₹30L", hostel: "₹80K–₹2.5L", hidden: "₹30K–₹1.5L", total: "₹14L–₹34L" },
    { type: "NRI Quota", tuition: "₹20L–₹40L", hostel: "₹1L–₹3L", hidden: "₹50K–₹2L", total: "₹22L–₹45L" },
  ];
  return (
    <section className="section-padding bg-card" id="fees">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Cost Breakdown</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Fee Structure Comparison</h2>
        <div className="max-w-4xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Type</th>
                <th className="text-right py-3 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Tuition/yr</th>
                <th className="text-right py-3 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Hostel/yr</th>
                <th className="text-right py-3 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Other Costs</th>
                <th className="text-right py-3 font-semibold text-xs uppercase tracking-widest text-muted-foreground">Total/yr</th>
              </tr>
            </thead>
            <tbody>
              {fees.map((f) => (
                <tr key={f.type} className="border-b border-border hover:bg-secondary/50 transition-colors">
                  <td className="py-4 font-semibold text-foreground">{f.type}</td>
                  <td className="py-4 text-right font-mono tabular-nums text-foreground">{f.tuition}</td>
                  <td className="py-4 text-right font-mono tabular-nums text-muted-foreground">{f.hostel}</td>
                  <td className="py-4 text-right font-mono tabular-nums text-muted-foreground">{f.hidden}</td>
                  <td className="py-4 text-right font-mono font-bold tabular-nums text-primary">{f.total}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Section 17: Hostel & Infrastructure
const HostelInfra = () => {
  const features = [
    "AC & Non-AC rooms with attached bathrooms",
    "24/7 Wi-Fi connectivity across campus",
    "Modern anatomy & dissection halls",
    "Fully-equipped simulation labs",
    "Central library with 50,000+ volumes",
    "Sports complex & gymnasium",
    "On-campus hospital with 500+ beds",
    "Cafeteria with nutritious meals",
  ];
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Campus Life</p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Hostel & Infrastructure</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                <Bed className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <span className="text-sm text-foreground">{f}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Section 18: Bond Service Guide
const BondService = () => {
  const bonds = [
    { state: "Maharashtra", years: "1 year", penalty: "₹10L" },
    { state: "Rajasthan", years: "1 year", penalty: "₹20L" },
    { state: "Madhya Pradesh", years: "2 years", penalty: "₹25L" },
    { state: "Tamil Nadu", years: "2 years", penalty: "₹15L" },
    { state: "Karnataka", years: "1 year", penalty: "₹30L" },
    { state: "Uttar Pradesh", years: "3 years", penalty: "₹20L" },
  ];
  return (
    <section className="section-padding bg-card">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Important</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Bond & Service Requirements</h2>
        <div className="max-w-3xl mx-auto overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b-2 border-border">
                <th className="text-left py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">State</th>
                <th className="text-right py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Service Period</th>
                <th className="text-right py-3 text-xs font-semibold uppercase tracking-widest text-muted-foreground">Penalty if Broken</th>
              </tr>
            </thead>
            <tbody>
              {bonds.map((b) => (
                <tr key={b.state} className="border-b border-border">
                  <td className="py-3 font-semibold text-foreground">{b.state}</td>
                  <td className="py-3 text-right font-mono text-foreground tabular-nums">{b.years}</td>
                  <td className="py-3 text-right font-mono font-bold text-destructive tabular-nums">{b.penalty}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

// Section 19: Seat Matrix 2024
const SeatMatrix = () => {
  const data = [
    { round: "Round 1", total: 45000, filled: 38200, vacant: 6800 },
    { round: "Round 2", total: 6800, filled: 5100, vacant: 1700 },
    { round: "Mop-Up", total: 1700, filled: 1200, vacant: 500 },
    { round: "Stray", total: 500, filled: 420, vacant: 80 },
  ];
  return (
    <section className="section-padding" id="seat-matrix">
      <div className="section-container">
        <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-2 text-center">Real-Time Data</p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-foreground text-center mb-12">Seat Matrix 2025</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {data.map((d) => (
            <div key={d.round} className="p-2 bg-secondary rounded-lg">
              <div className="bg-card rounded-md p-5 card-shadow">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-bold text-foreground">{d.round}</h3>
                  <span className="text-xs font-bold px-2 py-1 rounded bg-success/10 text-success">{((d.filled / d.total) * 100).toFixed(1)}% Filled</span>
                </div>
                <div className="w-full h-3 bg-secondary rounded-full overflow-hidden">
                  <div className="h-full bg-primary rounded-full transition-all" style={{ width: `${(d.filled / d.total) * 100}%` }} />
                </div>
                <div className="flex justify-between mt-2 text-xs text-muted-foreground font-mono tabular-nums">
                  <span>Filled: {d.filled.toLocaleString()}</span>
                  <span>Vacant: {d.vacant.toLocaleString()}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Section 20: Previous Year Cut-offs
const PreviousCutoffs = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const cutoffs = [
    { college: "AIIMS Delhi", gen24: 720, gen25: 718, obc: 713, sc: 688, st: 668 },
    { college: "JIPMER Puducherry", gen24: 690, gen25: 688, obc: 678, sc: 648, st: 628 },
    { college: "MAMC Delhi", gen24: 685, gen25: 682, obc: 670, sc: 638, st: 612 },
    { college: "KGMU Lucknow", gen24: 670, gen25: 668, obc: 653, sc: 618, st: 598 },
    { college: "Grant Medical Mumbai", gen24: 665, gen25: 662, obc: 648, sc: 612, st: 588 },
    { college: "BHU Varanasi", gen24: 660, gen25: 657, obc: 642, sc: 608, st: 582 },
    { college: "SMS Jaipur", gen24: 645, gen25: 642, obc: 628, sc: 592, st: 568 },
    { college: "GMC Nagpur", gen24: 630, gen25: 627, obc: 612, sc: 578, st: 552 },
  ];

  const filtered = cutoffs.filter((c) =>
    c.college.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <section className="py-32 bg-gradient-to-b from-white to-orange-50">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold">
            NEET Cut-offs 2025
          </h2>
        </div>

        <div className="max-w-xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Search college..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 rounded-full border border-orange-200 focus:ring-2 focus:ring-orange-400 outline-none"
          />
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((c) => {
            const diff = c.gen25 - c.gen24;

            return (
              <div
                key={c.college}
                className="bg-white p-6 rounded-2xl shadow border border-orange-100"
              >
                <h3 className="font-bold mb-3">{c.college}</h3>

                <p className="mb-2">
                  Gen: {c.gen24} → {c.gen25}{" "}
                  <span className={diff < 0 ? "text-green-600" : "text-red-500"}>
                    {diff < 0 ? "↓" : "↑"}
                  </span>
                </p>

                <div className="flex gap-4 text-sm">
                  <span>OBC: {c.obc}</span>
                  <span>SC: {c.sc}</span>
                  <span>ST: {c.st}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export const ClusterC = () => (
  <>
    <CollegePredictor />
    {/* <GovtColleges /> */}
    {/* <PrivateColleges />
    <DeemedUniversities />
    <StateDirectory /> */}
    {/* <FeeStructure /> */}
    {/* <HostelInfra /> */}
    {/* <BondService /> */}
    <SeatMatrix />
    <PreviousCutoffs />
  </>
);
