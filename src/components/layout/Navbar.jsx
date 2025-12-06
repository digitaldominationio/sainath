import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const servicesRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  // Updated navigation order (Services placed after About)
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
  ];

  const serviceLinks = [
    { name: "NGO", path: "/services/ngo" },
    { name: "Finance", path: "/services/finance" },
    { name: "Education & Training", path: "/services/education-training" },
  ];

  const otherLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (servicesRef.current && !servicesRef.current.contains(event.target)) {
        setOpenServices(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setOpen(false);
    setOpenServices(false);
  }, [location.pathname]);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">

      {/* Logo */}
      <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation("/")}>
        <img
          src={logo}
          alt="logo"
          className="h-12 w-auto object-contain scale-[2.3]"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium items-center">

        {/* Home & About */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleNavigation(link.path)}
              className="hover:text-teal-600 pb-1"
            >
              {link.name}
            </button>
          </li>
        ))}

        {/* SERVICES DROPDOWN NEXT TO ABOUT */}
        <li className="relative" ref={servicesRef}>
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
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Remaining Links */}
        {otherLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleNavigation(link.path)}
              className="hover:text-teal-600 pb-1"
            >
              {link.name}
            </button>
          </li>
        ))}

      </ul>

      {/* Mobile Menu Button */}
      <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
        ☰
      </button>

      {/* Mobile Menu */}
      {open && (
        <ul className="absolute top-16 left-0 w-full bg-white shadow p-5 space-y-4 font-medium md:hidden z-50">

          {/* Home & About */}
          {navLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link.path)}
                className="block py-2 hover:text-teal-600 w-full text-left"
              >
                {link.name}
              </button>
            </li>
          ))}

          {/* Mobile Services Dropdown */}
          <li ref={servicesRef}>
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
                    <button
                      onClick={() => handleNavigation(service.path)}
                      className="block py-1 hover:text-teal-600 w-full text-left"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Remaining Links */}
          {otherLinks.map((link) => (
            <li key={link.name}>
              <button
                onClick={() => handleNavigation(link.path)}
                className="block py-2 hover:text-teal-600 w-full text-left"
              >
                {link.name}
              </button>
            </li>
          ))}

        </ul>
      )}
    </nav>
  );
}
