import { Button } from "@/components/ui/button";

const ComparisonTable = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container mx-auto">

        {/* Heading */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">
            Comparison
          </span>
          <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mt-2">
            Distance vs{" "}
            <span className="text-gradient-saffron">
              Regular Education
            </span>
          </h2>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full max-w-3xl mx-auto border-collapse rounded-xl overflow-hidden shadow-md">

            {/* Head */}
            <thead>
              <tr className="bg-gradient-saffron text-white">
                <th className="p-4 text-left font-bold">Feature</th>
                <th className="p-4 text-center font-bold">
                  Distance Education
                </th>
                <th className="p-4 text-center font-bold">
                  Regular Education
                </th>
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {[
                ["Flexibility", "✅ Study anytime", "❌ Fixed schedule"],
                ["Cost", "✅ ₹15K - 1.5L/year", "❌ ₹1L - 10L/year"],
                ["Work + Study", "✅ Yes", "❌ Difficult"],
                ["Degree Value", "✅ Equal (UGC)", "✅ Equal"],
                ["Attendance", "✅ No mandatory", "❌ 75% required"],
                ["Location", "✅ Anywhere", "❌ Campus only"],
                ["Eligibility", "✅ Relaxed", "❌ Competitive"],
              ].map(([feature, dist, reg], i) => (
                <tr
                  key={feature}
                  className={`${
                    i % 2 === 0 ? "bg-secondary" : "bg-white"
                  } hover:bg-orange-50 transition`}
                >
                  <td className="p-4 font-semibold text-foreground">
                    {feature}
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    {dist}
                  </td>
                  <td className="p-4 text-center text-sm text-muted-foreground">
                    {reg}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* CTA */}
        {/* <div className="text-center mt-10">
          <a
            href="https://wa.me/919650831008?text=Hello%20I%20want%20distance%20education"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 rounded-full shadow-lg">
              Choose Distance Education
            </Button>
          </a>
        </div> */}

      </div>
    </section>
  );
};

export default ComparisonTable;