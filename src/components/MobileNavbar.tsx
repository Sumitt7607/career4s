import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const MobileNavbar = () => {
  const [open, setOpen] = useState(false);

  const navItems = [
    { label: "Courses", path: "/courses-section" },
    { label: "Admission Process", path: "/admission-process" },
    { label: "Programs", path: "/programs-section" },
    { label: "Why Distance", path: "/why-distance-education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b md:hidden">
      <div className="h-16 px-4 flex items-center justify-between">
        <Link to="/" className="text-xl font-extrabold text-orange-600">
          Career<span className="text-gray-800">4S</span>
        </Link>

        <button onClick={() => setOpen(!open)}>
          {open ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {open && (
        <div className="bg-white shadow-lg border-t">
          <div className="flex flex-col px-6 py-4 gap-4 font-medium">
            {navItems.map((item) => (
              <NavLink
                key={item.label}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-700 hover:text-orange-600"
              >
                {item.label}
              </NavLink>
            ))}

            <Link
              to="/apply"
              onClick={() => setOpen(false)}
              className="mt-3 text-center bg-orange-500 text-white py-2 rounded-full text-sm"
            >
              Apply Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default MobileNavbar;
