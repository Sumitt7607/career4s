import { motion } from "framer-motion";

const fees = [
{ country: "🇷🇺 Russia", tuition: "₹3-5L/year", hostel: "₹50K-1L/year", total: "₹18-25L", duration: "6 Years" },
{ country: "🇺🇿 Uzbekistan", tuition: "₹2.5-4L/year", hostel: "₹30K-60K/year", total: "₹15-20L", duration: "5 Years" },
{ country: "🇰🇿 Kazakhstan", tuition: "₹3.5-5L/year", hostel: "₹50K-1L/year", total: "₹20-30L", duration: "5 Years" },
{ country: "🇵🇭 Philippines", tuition: "₹3-5L/year", hostel: "₹60K-1.2L/year", total: "₹20-28L", duration: "5.5 Years" },
{ country: "🇬🇪 Georgia", tuition: "₹4-6L/year", hostel: "₹50K-80K/year", total: "₹22-30L", duration: "6 Years" },
{ country: "🇰🇬 Kyrgyzstan", tuition: "₹2-3L/year", hostel: "₹25K-50K/year", total: "₹12-18L", duration: "5 Years" },
];

const FeeStructure = () => (

  <section className="py-28 bg-white">
    <div className="max-w-6xl mx-auto px-4 text-center">

```
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <h2 className="text-4xl md:text-5xl font-bold mb-4">
      MBBS <span className="text-orange-600">Fee Structure</span>
    </h2>

    <p className="text-lg text-gray-600 mb-14">
      Transparent fee details — no hidden charges, no surprises.
    </p>
  </motion.div>

  <div className="overflow-x-auto">
    <table className="w-full bg-white rounded-2xl shadow-xl overflow-hidden">

      {/* HEADER */}
      <thead>
        <tr className="bg-orange-600 text-white text-lg">
          <th className="p-6 text-left font-semibold">Country</th>
          <th className="p-6 font-semibold">Tuition / Year</th>
          <th className="p-6 font-semibold">Hostel / Year</th>
          <th className="p-6 font-semibold">Total Course</th>
          <th className="p-6 font-semibold">Duration</th>
        </tr>
      </thead>

      {/* BODY */}
      <tbody className="text-lg">
        {fees.map((f, i) => (
          <tr
            key={f.country}
            className={`border-b ${
              i % 2 === 0 ? "bg-white" : "bg-orange-50"
            }`}
          >
            <td className="p-6 font-semibold text-gray-800">
              {f.country}
            </td>

            <td className="p-6 text-gray-600">
              {f.tuition}
            </td>

            <td className="p-6 text-gray-600">
              {f.hostel}
            </td>

            <td className="p-6 font-bold text-orange-600">
              {f.total}
            </td>

            <td className="p-6 text-gray-600">
              {f.duration}
            </td>
          </tr>
        ))}
      </tbody>

    </table>
  </div>

  <p className="text-sm text-gray-500 mt-6">
    *Fees are approximate and may change depending on university policies.
    Contact us for the latest fee details.
  </p>

</div>
```

  </section>
);

export default FeeStructure;
