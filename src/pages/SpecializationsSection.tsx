const SpecializationsSection = () => (
  <section className="py-16 bg-white">
    <div className="container mx-auto px-4">

      {/* Heading */}
      <div className="text-center mb-14">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          MBA <span className="text-orange-500">Specializations</span>
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Choose from a wide range of management specializations at top global schools.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {[
          "Finance", "Marketing", "Strategy", "Operations",
          "Entrepreneurship", "Consulting", "Healthcare Management", "Technology Management",
          "Supply Chain", "Human Resources", "International Business", "Business Analytics",
          "Sustainability", "Luxury Brand Mgmt", "Sports Management", "Real Estate",
        ].map((spec, i) => (
          <div
            key={i}
            className="bg-white border border-orange-100 rounded-xl p-4 text-center 
                       hover:border-orange-400 hover:shadow-md hover:-translate-y-1 
                       transition-all duration-300 cursor-pointer"
          >
            <span className="text-sm font-semibold text-gray-800">
              {spec}
            </span>
          </div>
        ))}
      </div>

    </div>
  </section>
);

export default SpecializationsSection;