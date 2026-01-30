import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

import Career4SLogo from "./Career4SLogo";


export const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-background border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20 lg:h-24">

          {/* LOGO */}
          <Career4SLogo />

          {/* LOGO */}
          {/* <Link to="/" className="flex items-center">
                  <img
              src="/image.png"
              alt="Career4S Logo"
              className="h-14 lg:h-18 w-auto object-contain"
            />
          </Link> */}

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            <NavItem to="/">Home</NavItem>
            <NavItem to="/about">About</NavItem>
            <NavItem to="/offering">Our Services</NavItem>
            {/* <NavItem to="/testimonials">Testimonials</NavItem> */}
          </div>

          {/* DESKTOP CTA */}
          <div className="hidden lg:flex">
            <Button
              asChild
              className="gradient-primary hover:opacity-90 transition-opacity"
            >
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden p-2 rounded-md border"
            aria-label="Open Menu"
          >
            ☰
          </button>
        </div>

        {/* MOBILE MENU */}
        {open && (
          <div className="lg:hidden mt-3 bg-white rounded-xl shadow-lg border">
            <div className="flex flex-col p-4 gap-4">
              <MobileItem to="/" onClick={() => setOpen(false)}>
                Home
              </MobileItem>
              <MobileItem to="/about" onClick={() => setOpen(false)}>
                About
              </MobileItem>
              <MobileItem to="/offering" onClick={() => setOpen(false)}>
                Our services
              </MobileItem>
              {/* <MobileItem to="/know-more" onClick={() => setOpen(false)}>
                Know More
              </MobileItem> */}

              <Button
                asChild
                className="gradient-primary w-full"
              >
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Book Consultation
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

/* ===================== NAV ITEM ===================== */
const NavItem = ({
  to,
  children,
}: {
  to: string;
  children: React.ReactNode;
}) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `text-base font-medium transition-colors ${
        isActive
          ? "text-orange-600"
          : "text-foreground hover:text-orange-600"
      }`
    }
  >
    {children}
  </NavLink>
);

/* ===================== MOBILE ITEM ===================== */
const MobileItem = ({
  to,
  children,
  onClick,
}: {
  to: string;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <Link
    to={to}
    onClick={onClick}
    className="text-base font-medium text-foreground hover:text-orange-600"
  >
    {children}
  </Link>
);
