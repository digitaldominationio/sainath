import { motion } from "framer-motion";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

// Scroll to top function
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-20 pb-10 mt-20 relative overflow-hidden">

      {/* Soft Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-700/10 via-cyan-600/5 to-transparent blur-3xl"></div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12 z-10"
      >
        {/* Left Section */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-3">SAINATH TRUST</h3>
          <p className="text-gray-400 leading-relaxed">
            Empowering communities through education, sustainability and
            humanitarian work. Join us in making a better tomorrow.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4 mt-5">
            <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-teal-600/30 hover:text-white transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-teal-600/30 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" className="p-2 rounded-lg bg-white/10 hover:bg-teal-600/30 hover:text-white transition">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-400">
            {["About Us", "Our Services", "Gallery", "Donate"].map((item, index) => {
              const paths = {
                "About Us": "/about",
                // "Our Services": "/services",
                "Gallery": "/gallery",
                "Donate": "/donate"
              };

              return (
                <motion.li
                  key={index}
                  whileHover={{ x: 5, color: "#14b8a6" }}
                  transition={{ type: "spring", stiffness: 200 }}
                  className="cursor-pointer"
                >
                  <Link
                    to={paths[item]}
                    onClick={scrollTop}
                    className="hover:text-teal-400 transition"
                  >
                    {item}
                  </Link>
                </motion.li>
              );
            })}
          </ul>
        </div>


        {/* Contact */}
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">Contact</h3>

          <div className="space-y-3 text-gray-400">
            <p className="flex items-center gap-2">
              <MapPin size={18} className="text-teal-300" /> Odisha, India
            </p>
            <p className="flex items-center gap-2">
              <Phone size={18} className="text-teal-300" /> +91 9876543210
            </p>
            <p className="flex items-center gap-2">
              <Mail size={18} className="text-teal-300" /> info@sainathtrust.org
            </p>
          </div>
        </div>
      </motion.div>

      {/* Divider Line */}
      <div className="relative mt-12">
        <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>
      </div>

      {/* Bottom Text */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center text-gray-500 text-sm mt-6"
      >
        © {new Date().getFullYear()} Sainath Educational & Charitable Trust — All Rights Reserved.
      </motion.p>
    </footer>
  );
}
