import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const highlights = [
"4+ Years of Experience in MBBS Abroad Admissions",
"Official Representative of 50+ Top Universities",
"Complete End-to-End Guidance from Application to Graduation",
"NMC/WHO Recognized Universities Only",
"Transparent Process with No Hidden Charges",
"Dedicated Student Support Throughout the Course",
];

const AboutSectionmb = () => (

  <section id="about" className="py-28 bg-white">
    <div className="max-w-7xl mx-auto px-6">

```
  <div className="grid lg:grid-cols-2 gap-16 items-center">

    {/* IMAGE SIDE */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex justify-center"
    >
      <div className="relative w-full max-w-lg">
        <img
          src="/university-campus.jpg"
          alt="University campus"
          className="rounded-2xl w-full h-[420px] object-cover shadow-xl"
        />

        {/* EXPERIENCE BADGE */}
        <div className="absolute -bottom-6 -right-6 bg-orange-600 text-white rounded-xl px-6 py-5 shadow-lg">
          <p className="text-3xl font-bold leading-none">4+</p>
          <p className="text-sm">Years of Trust</p>
        </div>
      </div>
    </motion.div>

    {/* TEXT SIDE */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="flex flex-col justify-center"
    >
      <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
        About <span className="text-orange-600">MBBS Abroad</span>
      </h2>

      <p className="text-gray-600 mb-8 text-lg leading-relaxed">
        We are India's trusted MBBS abroad consultancy, helping aspiring
        doctors achieve their dreams of studying medicine at globally
        recognized universities. Our expert team provides complete
        guidance from university selection to final admission.
      </p>

      <div className="space-y-4">
        {highlights.map((h) => (
          <div key={h} className="flex items-start gap-3">
            <CheckCircle
              className="text-orange-600 mt-1 flex-shrink-0"
              size={22}
            />
            <span className="text-gray-700">{h}</span>
          </div>
        ))}
      </div>
    </motion.div>

  </div>

</div>
```

  </section>
);

export default AboutSectionmb;
