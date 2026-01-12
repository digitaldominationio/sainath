import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo4.png";
import { ChevronDown } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [openServices, setOpenServices] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const servicesRef = useRef(null);
  const aboutRef = useRef(null);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    navigate(path);
  };

  // Updated navigation order (Services placed after About)
  const navLinks = [
    { name: "Home", path: "/" },
    // { name: "About", path: "/about" },
  ];

  const serviceLinks = [
    { name: "NGO & Support", path: "/services/ngo" },
    { name: "Finance & Support", path: "/services/finance" },
    { name: "Skill Training & Support", path: "/services/education-training" },
  ];

  const aboutLinks = [
    { name: "About Us", path: "/about" },
    { name: "Chairman's Message", path: "/message" },
  ];

  const otherLinks = [
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" },
    { name: "Donate", path: "/donate" },
  ];

  // Close dropdowns on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        servicesRef.current &&
        !servicesRef.current.contains(event.target)
      ) {
        setOpenServices(false);
      }
      if (
        aboutRef.current &&
        !aboutRef.current.contains(event.target)
      ) {
        setOpenAbout(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdowns on page change
  useEffect(() => {
    setOpen(false);
    setOpenServices(false);
    setOpenAbout(false);
  }, [location.pathname]);

  return (
    <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">

      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavigation("/")}
      >
        <img
          src={logo}
          alt="logo"
          className="h-16 w-auto object-contain"
          style={{ transformOrigin: "left center" }}
        />
      </div>

      {/* Center Text: Trust Name & Registration Details */}
      <div className="hidden lg:flex flex-col items-center text-center mx-4">
        <h1 className="text-xl lg:text-2xl font-bold font-serif text-teal-900 tracking-wide">
          Sainath Education and Charitable Trust
        </h1>
        <p className="text-sm text-blue-900 font-medium tracking-wider mt-1">
          Regd No: <span className="font-mono font-bold text-blue-900">40601307468</span>
          <span className="mx-3">|</span>
          UAN: <span className="font-mono font-bold text-blue-900">OD11E0004078</span>
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-8 font-medium items-center">

        {/* Home & About */}
        {navLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleNavigation(link.path)}
              className="hover:text-teal-600 pb-1 cursor-pointer"
            >
              {link.name}
            </button>
          </li>
        ))}

        {/* ABOUT DROPDOWN: label navigates to /about; chevron toggles dropdown with Chairman's Message only */}
        <li className="relative" ref={aboutRef}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigation("/about")}
              className="hover:text-teal-600 pb-1 cursor-pointer"
            >
              About Us
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenAbout(!openAbout);
                setOpenServices(false);
              }}
              aria-label="Toggle about dropdown"
              className="flex items-center cursor-pointer hover:text-teal-600"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${openAbout ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {openAbout && (
            <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
              {aboutLinks
                .filter((item) => item.path === "/message")
                .map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                    >
                      {item.name}
                    </button>
                  </li>
                ))}
            </ul>
          )}
        </li>

        {/* SERVICES: label navigates to home focus area; chevron toggles dropdown with service links */}
        <li className="relative" ref={servicesRef}>
          <div className="flex items-center gap-2">
            <button
              onClick={() => handleNavigation("/#focus-areas")}
              className="hover:text-teal-600 pb-1 cursor-pointer"
            >
              Services
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setOpenServices(!openServices);
                setOpenAbout(false);
              }}
              aria-label="Toggle services dropdown"
              className="flex items-center cursor-pointer hover:text-teal-600"
            >
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${openServices ? "rotate-180" : ""}`}
              />
            </button>
          </div>

          {openServices && (
            <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-56 py-2 z-50">
              {serviceLinks.map((service) => (
                <li key={service.name}>
                  <button
                    onClick={() => handleNavigation(service.path)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100 cursor-pointer"
                  >
                    {service.name}
                  </button>
                </li>
              ))}
            </ul>
          )}
        </li>

        {/* Other Links */}
        {otherLinks.map((link) => (
          <li key={link.name}>
            <button
              onClick={() => handleNavigation(link.path)}
              className="hover:text-teal-600 pb-1 cursor-pointer"
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

          {/* Home & About Basic Links */}
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

          {/* Mobile ABOUT: label navigates to /about; chevron toggles dropdown showing Chairman's Message */}
          <li>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigation("/about")}
                className="py-2 w-full text-left hover:text-teal-600"
              >
                About Us
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenAbout(!openAbout);
                }}
                className="p-2 cursor-pointer hover:text-teal-600"
                aria-label="Toggle about dropdown"
              >
                <ChevronDown size={18} className={`${openAbout ? "rotate-180" : ""} transition`} />
              </button>
            </div>

            {openAbout && (
              <ul className="pl-4 mt-2 space-y-2">
                {aboutLinks
                  .filter((item) => item.path === "/message")
                  .map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleNavigation(item.path)}
                        className="block py-1 hover:text-teal-600 w-full text-left cursor-pointer"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
              </ul>
            )}
          </li>

          {/* Mobile SERVICES: label navigates to home focus area; chevron toggles dropdown */}
          <li>
            <div className="flex items-center justify-between">
              <button
                onClick={() => handleNavigation("/#focus-areas")}
                className="py-2 w-full text-left hover:text-teal-600"
              >
                Services
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenServices(!openServices);
                }}
                className="p-2 cursor-pointer hover:text-teal-600"
                aria-label="Toggle services dropdown"
              >
                <ChevronDown size={18} className={`${openServices ? "rotate-180" : ""} transition`} />
              </button>
            </div>

            {openServices && (
              <ul className="pl-4 mt-2 space-y-2">
                {serviceLinks.map((service) => (
                  <li key={service.name}>
                    <button
                      onClick={() => handleNavigation(service.path)}
                      className="block py-1 hover:text-teal-600 w-full text-left cursor-pointer"
                    >
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </li>

          {/* Other Links */}
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
