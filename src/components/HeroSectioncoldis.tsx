import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Star, Users, Award } from "lucide-react";
import { motion } from "framer-motion";

const HeroSectioncoldis = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 overflow-hidden">
      {/* ===== Animated Background ===== */}
      <motion.div
        className="absolute -top-40 -left-40 w-[500px] h-[500px] bg-orange-400/20 rounded-full blur-3xl"
        animate={{ x: [0, 80, 0], y: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 -right-40 w-[600px] h-[600px] bg-pink-400/10 rounded-full blur-3xl"
        animate={{ x: [0, -70, 0], y: [0, -40, 0] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-14 items-center">
          {/* ================= LEFT ================= */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-white/70 backdrop-blur border shadow-sm">
              <Star className="w-4 h-4 text-orange-600 fill-orange-600" />
              <span className="text-sm font-semibold">
                India’s #1 Admission Consulting
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Your Dream{" "}
              <span className="bg-gradient-to-r from-orange-500 to-pink-500 bg-clip-text text-transparent">
                University
              </span>{" "}
              Awaits
            </h1>

            {/* Subtitle */}
            <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
              Get expert guidance for admissions in top Indian & global universities.
              Trusted by <span className="font-semibold text-foreground">10,000+</span>{" "}
              students worldwide.
            </p>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg hover:scale-[1.03] transition-transform group"
              >
                Book Free Consultation
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>

              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50"
              >
                <Play className="w-5 h-5 mr-2" />
                Watch Success Stories
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 pt-8 border-t">
              {[
                { icon: Users, value: "10,000+", label: "Students Placed" },
                { icon: Award, value: "98%", label: "Success Rate" },
                { icon: Star, value: "4.9/5", label: "Client Rating", fill: true },
              ].map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-12 h-12 rounded-full bg-orange-500/10 flex items-center justify-center">
                      <Icon
                        className={`w-6 h-6 text-orange-600 ${
                          stat.fill ? "fill-orange-600" : ""
                        }`}
                      />
                    </div>
                    <div>
                      <p className="text-2xl font-bold">{stat.value}</p>
                      <p className="text-sm text-muted-foreground">
                        {stat.label}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}
{/* ================= RIGHT ================= */}
<motion.div
  initial={{ opacity: 0, x: 60 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 0.9 }}
  className="relative hidden lg:flex justify-center"
>
  {/* Image Wrapper */}
  <div className="relative h-[520px] w-[420px] rounded-3xl overflow-hidden shadow-2xl">
<img
  src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80"
  alt="Happy graduates celebrating"
  className="h-full w-full object-cover"
/>


    {/* Gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />

    {/* Floating Card – LEFT */}
    <motion.div
      animate={{ y: [0, -10, 0] }}
      transition={{ duration: 4, repeat: Infinity }}
      className="absolute -left-12 top-16 bg-white rounded-xl p-4 shadow-xl flex items-center gap-3"
    >
      <img
        src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face"
        className="w-12 h-12 rounded-full object-cover"
      />
      <div>
        <p className="text-sm font-semibold">Rahul Sharma</p>
        <p className="text-xs text-muted-foreground">
          Admitted to Stanford
        </p>
      </div>
    </motion.div>

    {/* Floating Card – RIGHT */}
    <motion.div
      animate={{ y: [0, 12, 0] }}
      transition={{ duration: 5, repeat: Infinity }}
      className="absolute -right-10 bottom-16 bg-white rounded-xl px-4 py-3 shadow-xl"
    >
      <p className="text-sm font-semibold">🎓 500+ Admissions</p>
    </motion.div>
  </div>
</motion.div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectioncoldis;
