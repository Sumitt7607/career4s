import { motion } from "framer-motion";
import { DollarSign, BookOpen, Globe2, Award, Clock, Users } from "lucide-react";

const reasons = [
{
icon: DollarSign,
title: "Affordable Fees",
desc: "MBBS abroad costs a fraction of private medical colleges in India, starting from just ₹15-25 Lakhs total.",
},
{
icon: BookOpen,
title: "No Donation / Capitation",
desc: "Admission based on merit only. No hefty donations or capitation fees required.",
},
{
icon: Globe2,
title: "Global Exposure",
desc: "Experience diverse cultures, advanced medical practices, and build an international network.",
},
{
icon: Award,
title: "NMC / WHO Recognized",
desc: "Universities are recognized by NMC (India), WHO, and other global medical authorities.",
},
{
icon: Clock,
title: "Simple Admission Process",
desc: "Many universities have a straightforward admission process after NEET qualification.",
},
{
icon: Users,
title: "English Medium",
desc: "Courses are taught fully in English by experienced international faculty members.",
},
];

const WhyMBBSAbroad = () => (

  <section className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 text-center">

```
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      Why Study <span className="text-orange-600">MBBS Abroad</span>?
    </h2>

    <p className="text-lg text-gray-600 mb-14 max-w-3xl mx-auto">
      Discover the advantages that make international medical education
      one of the smartest choices for aspiring doctors.
    </p>
  </motion.div>

  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

    {reasons.map((r, i) => (
      <motion.div
        key={r.title}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: i * 0.1 }}
        className="bg-white border border-orange-100 rounded-2xl p-8 text-left shadow-lg hover:shadow-xl transition"
      >
        <div className="w-14 h-14 rounded-xl bg-orange-100 flex items-center justify-center mb-5">
          <r.icon className="text-orange-600" size={28} />
        </div>

        <h3 className="text-xl font-semibold mb-3 text-gray-800">
          {r.title}
        </h3>

        <p className="text-gray-600 leading-relaxed text-sm">
          {r.desc}
        </p>
      </motion.div>
    ))}

  </div>

</div>
```

  </section>
);

export default WhyMBBSAbroad;
