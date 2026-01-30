import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Briefcase, Users, Trophy, BookOpen, Mail, X, Menu } from "lucide-react";

const navItems = [
  { name: "Home", path: "/", icon: Home },
  { name: "Services", path: "/services", icon: Briefcase },
  { name: "About", path: "/about", icon: Users },
  // { name: "Stories", path: "/success-stories", icon: Trophy },
  // { name: "Blog", path: "/blog", icon: BookOpen },
  { name: "Contact", path: "/contact", icon: Mail },
];

export const FloatingNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <div className="lg:hidden fixed bottom-6 right-6 z-50">
      {/* Navigation Items */}
      <div
        className={`absolute bottom-16 right-0 flex flex-col gap-3 transition-all duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {navItems.map((item, index) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className={`flex items-center gap-3 px-4 py-3 rounded-full shadow-lg transition-all duration-300 ${
                isActive
                  ? "gradient-primary text-primary-foreground"
                  : "bg-card text-foreground hover:bg-muted"
              }`}
              style={{
                animationDelay: `${index * 50}ms`,
                transform: isOpen ? "translateY(0) scale(1)" : "translateY(20px) scale(0.8)",
                opacity: isOpen ? 1 : 0,
                transition: `all 0.3s ease-out ${index * 50}ms`,
              }}
            >
              <Icon className="w-5 h-5" />
              <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>
            </Link>
          );
        })}
      </div>

      {/* FAB Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full gradient-primary shadow-lg flex items-center justify-center transition-all duration-300 hover:shadow-xl hover:scale-105 ${
          isOpen ? "rotate-45" : "rotate-0"
        }`}
        aria-label="Toggle navigation"
      >
        {isOpen ? (
          <X className="w-6 h-6 text-primary-foreground" />
        ) : (
          <Menu className="w-6 h-6 text-primary-foreground" />
        )}
      </button>
    </div>
  );
};
