import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false); // mobile menu
  const [openServices, setOpenServices] = useState(false); // services dropdown

  // Main nav links (Services removed from here — added manually after About)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  const serviceLinks = [
    { name: "NGO", path: "/services/ngo" },
    { name: "Finance", path: "/services/finance" },
    { name: "Education & Training", path: "/services/education-training" },
  ];

  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">

      {/* Logo */}
      <div className="flex items-center gap-2">
        <img
          src={logo}
          alt="logo"
className="h-12 w-auto object-contain scale-[2.3] "
          style={{ transformOrigin: "left center" }}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium items-center">

        {/* HOME & ABOUT */}
        <li>
          <Link to="/" className="hover:text-teal-600 pb-1">Home</Link>
        </li>

        <li>
          <Link to="/about" className="hover:text-teal-600 pb-1">About</Link>
        </li>

        {/* SERVICES DROPDOWN (placed next to About) */}
        <li className="relative">
          <button
            onClick={() => setOpenServices(!openServices)}
            className="flex items-center gap-1 hover:text-teal-600 transition"
          >
            Services
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                openServices ? "rotate-180" : ""
              }`}
            />
          </button>

          {openServices && (
            <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <Link
                    to={service.path}
                    className="block px-4 py-2 hover:bg-gray-100"
                    onClick={() => setOpenServices(false)}
                  >
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Remaining NavLinks */}
        {navLinks
          .filter((l) => l.name !== "Home" && l.name !== "About")
          .map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="hover:text-teal-600 pb-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden text-3xl"
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow p-5 space-y-4 font-medium md:hidden z-50">

          {/* HOME */}
          <li>
            <Link to="/" onClick={() => setOpen(false)} className="block py-2 hover:text-teal-600">
              Home
            </Link>
          </li>

          {/* ABOUT */}
          <li>
            <Link to="/about" onClick={() => setOpen(false)} className="block py-2 hover:text-teal-600">
              About
            </Link>
          </li>

          {/* MOBILE SERVICES DROPDOWN */}
          <li>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-2 py-2 w-full text-left hover:text-teal-600"
            >
              Services
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  openServices ? "rotate-180" : ""
                }`}
              />
            </button>

            {openServices && (
              <ul className="pl-4 mt-2 space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <Link
                      to={service.path}
                      className="block py-1 hover:text-teal-600"
                      onClick={() => setOpen(false)}
                    >
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* REST NAVLINKS */}
          {navLinks
            .filter((l) => l.name !== "Home" && l.name !== "About")
            .map((link) => (
              <li key={link.name}>
                <Link
                  to={link.path}
                  className="block py-2 hover:text-teal-600"
                  onClick={() => setOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
        </ul>
      )}

    </nav>
  );
}
