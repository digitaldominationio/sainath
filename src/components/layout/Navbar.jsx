// import { useState, useRef, useEffect } from "react";
// import { Link, useLocation, useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo3.png";
// import { ChevronDown } from "lucide-react";

// export default function Navbar() {
//   const [open, setOpen] = useState(false);
//   const [openServices, setOpenServices] = useState(false);
//   const servicesRef = useRef(null);
//   const aboutRef = useRef(null);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const handleNavigation = (path) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     navigate(path);
//   };

//   const handleNavigation1 = (path) => {
//     window.scrollTo({ top: 0, behavior: "smooth" });
//     navigate(path);
//   }

//   // Updated navigation order (Services placed after About)
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "About", path: "/about" },
//   ];

//   const serviceLinks = [
//     { name: "NGO", path: "/services/ngo" },
//     { name: "Finance", path: "/services/finance" },
//     { name: "Education & Training", path: "/services/education-training" },
//   ];

//   const aboutLinks = [
//     { name: "About Us", path: "/about" },
//     { name: "Chairman's Message", path: "/message" },
//   ];

//   const otherLinks = [
//     { name: "Gallery", path: "/gallery" },
//     { name: "Contact", path: "/contact" },
//     { name: "Donate", path: "/donate" },
//   ];

//   useEffect(() => {
//     function handleClickOutside(event) {
//       if (servicesRef.current && !servicesRef.current.contains(event.target)) {
//         setOpenServices(false);
//       }
//     }
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   useEffect(() => {
//     setOpen(false);
//     setOpenServices(false);
//   }, [location.pathname]);

//   return (
//     <nav className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center relative">

//       {/* Logo */}
//       <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavigation("/")}>
//         <img
//           src={logo}
//           alt="logo"
//           className="h-12 w-auto object-contain scale-[2.3]"
//           style={{ transformOrigin: "left center" }}
//         />
//       </div>

//       {/* Desktop Menu */}
//       <ul className="hidden md:flex gap-8 font-medium items-center">

//         {/* Home & About */}
//         {navLinks.map((link) => (
//           <li key={link.name}>
//             <button
//               onClick={() => handleNavigation(link.path)}
//               className="hover:text-teal-600 pb-1"
//             >
//               {link.name}
//             </button>
//           </li>
//         ))}

//         {/* SERVICES DROPDOWN NEXT TO ABOUT */}
//         <li className="relative" ref={servicesRef}>
//           <button
//             onClick={() => setOpenServices(!openServices)}
//             className="flex items-center gap-1 hover:text-teal-600 transition"
//           >
//             Services
//             <ChevronDown
//               size={18}
//               className={`transition-transform duration-200 ${
//                 openServices ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {openServices && (
//             <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
//               {serviceLinks.map((service) => (
//                 <li key={service.name}>
//                   <button
//                     onClick={() => handleNavigation(service.path)}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {service.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>

//           {/* ABOUT DROPDOWN */}
//         <li className="relative" ref={aboutRef}>
//           <button
//             onClick={() => setOpenServices(!openServices)}
//             className="flex items-center gap-1 hover:text-teal-600 transition"
//           >
//             About
//             <ChevronDown
//               size={18}
//               className={`transition-transform duration-200 ${
//                 openServices ? "rotate-180" : ""
//               }`}
//             />
//           </button>

//           {openServices && (
//             <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
//               {aboutLinks.map((service) => (
//                 <li key={service.name}>
//                   <button
//                     onClick={() => handleNavigation1(service.path)}
//                     className="block w-full text-left px-4 py-2 hover:bg-gray-100"
//                   >
//                     {service.name}
//                   </button>
//                 </li>
//               ))}
//             </ul>
//           )}
//         </li>

//         {/* Remaining Links */}
//         {otherLinks.map((link) => (
//           <li key={link.name}>
//             <button
//               onClick={() => handleNavigation(link.path)}
//               className="hover:text-teal-600 pb-1"
//             >
//               {link.name}
//             </button>
//           </li>
//         ))}

//       </ul>

//       {/* Mobile Menu Button */}
//       <button className="md:hidden text-3xl" onClick={() => setOpen(!open)}>
//         ☰
//       </button>

//       {/* Mobile Menu */}
//       {open && (
//         <ul className="absolute top-16 left-0 w-full bg-white shadow p-5 space-y-4 font-medium md:hidden z-50">

//           {/* Home & About */}
//           {navLinks.map((link) => (
//             <li key={link.name}>
//               <button
//                 onClick={() => handleNavigation(link.path)}
//                 className="block py-2 hover:text-teal-600 w-full text-left"
//               >
//                 {link.name}
//               </button>
//             </li>
//           ))}

//           {/* Mobile Services Dropdown */}
//           <li ref={servicesRef}>
//             <button
//               onClick={() => setOpenServices(!openServices)}
//               className="flex items-center gap-2 py-2 w-full text-left hover:text-teal-600"
//             >
//               Services
//               <ChevronDown
//                 size={18}
//                 className={`transition-transform duration-200 ${
//                   openServices ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {openServices && (
//               <ul className="pl-4 mt-2 space-y-2">
//                 {serviceLinks.map((service) => (
//                   <li key={service.name}>
//                     <button
//                       onClick={() => handleNavigation(service.path)}
//                       className="block py-1 hover:text-teal-600 w-full text-left"
//                     >
//                       {service.name}
//                     </button>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>

//           {/* Remaining Links */}
//           {otherLinks.map((link) => (
//             <li key={link.name}>
//               <button
//                 onClick={() => handleNavigation(link.path)}
//                 className="block py-2 hover:text-teal-600 w-full text-left"
//               >
//                 {link.name}
//               </button>
//             </li>
//           ))}

//         </ul>
//       )}
//     </nav>
//   );
// }

import { useState, useRef, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/images/logo3.png";
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
    { name: "NGO", path: "/services/ngo" },
    { name: "Finance", path: "/services/finance" },
    { name: "Education & Training", path: "/services/education-training" },
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
              className="hover:text-teal-600 pb-1 cursor-pointer"
            >
              {link.name}
            </button>
          </li>
        ))}

        {/* SERVICES DROPDOWN */}
        <li className="relative" ref={servicesRef}>
          <button
            onClick={() => {
              setOpenServices(!openServices);
              setOpenAbout(false); // close About
            }}
            className="flex items-center gap-1 hover:text-teal-600 transition cursor-pointer"
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

        {/* ABOUT DROPDOWN */}
        <li className="relative" ref={aboutRef}>
          <button
            onClick={() => {
              setOpenAbout(!openAbout);
              setOpenServices(false); // close Services
            }}
            className="flex items-center gap-1 hover:text-teal-600 transition cursor-pointer"
          >
            About
            <ChevronDown
              size={18}
              className={`transition-transform duration-200 ${
                openAbout ? "rotate-180" : ""
              }`}
            />
          </button>

          {openAbout && (
            <ul className="absolute top-8 left-0 bg-white shadow-lg border rounded-md w-48 py-2 z-50">
              {aboutLinks.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => handleNavigation(item.path)}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-100"
                  >
                    {item.name}
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

          {/* Mobile SERVICES dropdown */}
          <li>
            <button
              onClick={() => setOpenServices(!openServices)}
              className="flex items-center gap-2 py-2 w-full text-left hover:text-teal-600"
            >
              Services
              <ChevronDown
                size={18}
                className={`${openServices ? "rotate-180" : ""} transition`}
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

          {/* Mobile ABOUT dropdown */}
          <li>
            <button
              onClick={() => setOpenAbout(!openAbout)}
              className="flex items-center gap-2 py-2 w-full text-left hover:text-teal-600"
            >
              About
              <ChevronDown
                size={18}
                className={`${openAbout ? "rotate-180" : ""} transition`}
              />
            </button>

            {openAbout && (
              <ul className="pl-4 mt-2 space-y-2">
                {aboutLinks.map((item) => (
                  <li key={item.name}>
                    <button
                      onClick={() => handleNavigation(item.path)}
                      className="block py-1 hover:text-teal-600 w-full text-left"
                    >
                      {item.name}
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
