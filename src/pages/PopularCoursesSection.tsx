import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const courses = [
  { name: "MBA", duration: "2 Years", fee: "₹40,000/sem", popular: true },
  { name: "BBA", duration: "3 Years", fee: "₹25,000/sem", popular: false },
  { name: "MCA", duration: "2 Years", fee: "₹35,000/sem", popular: true },
  { name: "BCA", duration: "3 Years", fee: "₹20,000/sem", popular: false },
  { name: "M.Com", duration: "2 Years", fee: "₹15,000/sem", popular: false },
  { name: "BA", duration: "3 Years", fee: "₹10,000/sem", popular: false },
  { name: "MA", duration: "2 Years", fee: "₹12,000/sem", popular: false },
  { name: "B.Com", duration: "3 Years", fee: "₹12,000/sem", popular: false },
];

const PopularCoursesSection = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="courses" ref={ref} className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-3">
          Popular <span className="text-orange-500">Courses</span>
        </h2>

        <p className="text-center text-gray-500 mb-14">
          Choose from 200+ UGC approved online & distance learning courses
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {courses.map((c, i) => (
            <div
              key={i}
              className={`
                relative group p-8 rounded-2xl bg-white border border-gray-200
                transition-all duration-500
                hover:shadow-xl hover:-translate-y-2 hover:border-orange-400
                ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
              `}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {/* Hot Tag */}
              {c.popular && (
                <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                  Hot 🔥
                </span>
              )}

              {/* Course Name */}
              <h3 className="text-2xl font-bold mb-3 group-hover:text-orange-500 transition-colors">
                {c.name}
              </h3>

              {/* Duration */}
              <p className="text-gray-500 mb-2">
                {c.duration}
              </p>

              {/* Fee */}
              {/* <p className="text-orange-500 font-semibold text-lg">
                {c.fee}
              </p> */}

              {/* Bottom line hover effect */}
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-orange-500 group-hover:w-full transition-all duration-500 rounded-b-2xl"></div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default PopularCoursesSection;