import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
  Award,
  Users,
  BookOpen,
  Trophy,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "@/components/ui/NavbarOnline";


/* ================= NAVBAR ================= */
// const Navbar = () => {
//   const navItems = [
//     { label: "Home", path: "/" },
//     { label: "About", path: "/about" },
//     { label: "Universities", path: "/universities" },
//     { label: "Gallery", path: "/gallery" },
//     { label: "Contact", path: "/contact" },
//   ];

//   return (
//     <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur border-b">
//       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
//         <Link to="/" className="text-xl font-extrabold text-orange-600">
//           Career<span className="text-gray-800">4S</span>
//         </Link>

//         <div className="hidden md:flex gap-8 font-medium">
//           {navItems.map((item) => (
//             <NavLink
//               key={item.label}
//               to={item.path}
//               className={({ isActive }) =>
//                 isActive
//                   ? "text-orange-600 border-b-2 border-orange-600 pb-1"
//                   : "text-gray-700 hover:text-orange-600 transition"
//               }
//             >
//               {item.label}
//             </NavLink>
//           ))}
//         </div>

//         <Link
//           to="/apply"
//           className="bg-orange-500 text-white px-5 py-2 rounded-full text-sm hover:bg-orange-600 transition shadow"
//         >
//           Apply Now
//         </Link>
//       </div>
//     </nav>
//   );
// };

/* ================= FLOATING INFO ================= */
const floatingItems = [
  { icon: Award, label: "NAAC A++", top: "top-0 right-20" },
  { icon: Users, label: "15,000+ Alumni", top: "top-32 right-0" },
  { icon: BookOpen, label: "50+ Programs", top: "top-64 right-32" },
  { icon: Trophy, label: "#1 in Region", top: "top-96 right-8" },
];

/* ================= HERO SECTION ================= */
export const HeroSection = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 15,
    hours: 23,
    minutes: 45,
    seconds: 30,
  });

  /* Countdown */
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { days, hours, minutes, seconds } = prev;
        seconds--;
        if (seconds < 0) {
          seconds = 59;
          minutes--;
        }
        if (minutes < 0) {
          minutes = 59;
          hours--;
        }
        if (hours < 0) {
          hours = 23;
          days--;
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Navbar />

      <section
        id="home"
        className="relative w-full min-h-screen pt-16 flex items-center overflow-hidden"
      >
        {/* BACKGROUND IMAGE */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=2000&q=80"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/40 to-black/20" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">

            {/* LEFT */}
            <div className="text-white">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-orange-500/20 px-4 py-2 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse" />
                Admissions Open 2025–26
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight"
              >
                Shape Your{" "}
                <span className="text-orange-400">Future</span>{" "}
                With Excellence
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-lg text-white/80 max-w-xl mb-8"
              >
                India’s trusted admission guidance platform helping students
                get into top colleges with expert counselling.
              </motion.p>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="flex flex-wrap gap-4"
              >
                <Button className="bg-orange-500 text-white px-8 py-6 text-lg hover:bg-orange-600">
                  Apply Now <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="bg-orange-500 text-white px-8 py-6 text-lg hover:bg-white/10"
                >
                <PlayCircle className="mr-2 w-5 h-5" />
                  Virtual Tour
                </Button>
              </motion.div>

              {/* COUNTDOWN */}
              <div className="mt-10 bg-white/10 backdrop-blur rounded-xl p-6 inline-block">
                <p className="text-sm text-white/70 mb-3">
                  Application Deadline
                </p>
                <div className="flex gap-4">
                  {Object.entries(timeLeft).map(([k, v]) => (
                    <div key={k} className="text-center">
                      <div className="bg-orange-500/20 px-4 py-2 rounded-lg text-2xl font-bold">
                        {String(v).padStart(2, "0")}
                      </div>
                      <span className="text-xs uppercase text-white/60">
                        {k}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT FLOATING CARDS */}
            <div className="hidden lg:block relative h-[600px]">
              {floatingItems.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                  className={`absolute ${item.top} bg-white rounded-2xl p-6 shadow-xl`}
                  style={{ animation: `float ${3 + i}s ease-in-out infinite` }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 bg-orange-500 rounded-xl flex items-center justify-center text-white">
                      <item.icon />
                    </div>
                    <div>
                      <p className="text-lg font-bold">{item.label}</p>
                      <p className="text-sm text-gray-500">
                        Recognized Excellence
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

          </div>
        </div>
      </section>
    </>
  );
};
