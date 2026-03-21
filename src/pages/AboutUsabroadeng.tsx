import { Award, Users, Target, Heart } from "lucide-react";

const values = [
  { 
    icon: Target, 
    title: "Mission-Driven", 
    desc: "Our mission is to help ambitious students secure admissions in top global universities with the right guidance and strategy." 
  },
  { 
    icon: Users, 
    title: "Personalized Guidance", 
    desc: "Every student is unique. We create customized admission plans based on your academic profile, goals, and budget." 
  },
  { 
    icon: Award, 
    title: "Proven Results", 
    desc: "We have successfully guided students to top universities across the USA, UK, Canada, Australia, and more." 
  },
  { 
    icon: Heart, 
    title: "Complete Support", 
    desc: "From counseling to visa and post-arrival support, we stay with you throughout your entire journey abroad." 
  },
];

export default function AboutUsabroadeng() {
  return (
    <section id="about" className="py-24 bg-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Content */}
          <div>
            <p className="text-sm font-semibold text-orange-500 uppercase tracking-wider mb-2">
              About Us
            </p>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              Turning Your Study Abroad Dreams Into Reality
            </h2>

            <p className="mt-4 text-gray-600 leading-relaxed">
              We are a dedicated overseas education consultancy helping students secure admissions in top international universities. With years of experience, we understand every step of the admission journey and guide you with clarity and confidence.
            </p>

            <p className="mt-3 text-gray-600 leading-relaxed">
              Our expert counselors specialize in engineering and other high-demand programs, ensuring you choose the right course, university, and career path for long-term success.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="bg-white p-6 rounded-xl border border-orange-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <v.icon className="w-8 h-8 text-orange-500 mb-3" />

                <h3 className="font-semibold text-gray-900">
                  {v.title}
                </h3>

                <p className="text-sm text-gray-600 mt-2">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}