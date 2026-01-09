import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Career4SLogo from "../Career4SLogo";
import {
  BookOpen,
  Settings,
  Monitor,
  GraduationCap,
  HelpCircle,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Courses", href: "/content", icon: <BookOpen className="h-5 w-5" /> },
  { label: "Services", href: "/services", icon: <Settings className="h-5 w-5" /> },
  {
    label: "Online Classes",
    href: "/online-classes",
    icon: <Monitor className="h-5 w-5" />,
  },
  {
    label: "University",
    href: "/universities",
    icon: <GraduationCap className="h-5 w-5" />,
  },
  {
    label: "Why Online",
    href: "/why-online",
    icon: <HelpCircle className="h-5 w-5" />,
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled
            ? "bg-background/95 backdrop-blur shadow-md py-2"
            : "bg-background/80 backdrop-blur py-4"
        )}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between">
            {/* Logo */}
            <NavLink to="/" className="flex items-center gap-3">
              <div className="h-11 w-11 rounded-xl gradient-saffron flex items-center justify-center">
                {/* <GraduationCap className="h-6 w-6 text-primary-foreground" /> */}
                
              </div>
              <div className=" block">
                <h1 className="text-xl font-bold text-gradient-saffron">
                  <Career4SLogo />
                </h1>
                <p className="text-[10px] text-muted-foreground uppercase">
                  
                </p>
              </div>
            </NavLink>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-2 text-sm font-semibold transition-colors",
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-primary"
                    )
                  }
                >
                  {item.icon}
                  {item.label}
                </NavLink>
              ))}
            </div>

            {/* CTA + Mobile Button */}
            <div className="flex items-center gap-3">
              <Button className="hidden sm:flex gradient-saffron text-white font-bold px-6">
                Apply Now
              </Button>

              {/* Mobile Toggle */}
              <button
                onClick={() => setMobileOpen(true)}
                className="lg:hidden p-2 rounded-md border"
              >
                <Menu className="h-6 w-6" />
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* ================= MOBILE MENU ================= */}
      {/* Overlay */}
      
      {mobileOpen && (
   
        <div
        
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-72 bg-background z-50",
          "transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setMobileOpen(false)}>
            <X className="h-6 w-6" />
          </button>
        </div>

        {/* Links */}
        <nav className="flex flex-col p-4 gap-2">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.href}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                cn(
                  "flex items-center gap-3 px-4 py-3 rounded-md font-semibold transition",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "hover:bg-muted"
                )
              }
            >
              {item.icon}
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-4 border-t">
          <NavLink
            to="/apply"
            onClick={() => setMobileOpen(false)}
            className="block text-center w-full py-3 rounded-md bg-primary text-primary-foreground font-bold"
          >
            Apply Now
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Navbar;
