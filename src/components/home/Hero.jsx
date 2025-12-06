import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function Hero() {
  const buttonVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { type: "spring", stiffness: 400 } },
    tap: { scale: 0.95 }
  };
  const navigate = useNavigate();

  return (
<section
  className="relative w-full h-[90vh] min-h-[650px] flex items-center justify-center px-4 sm:px-6 overflow-hidden"
  style={{ fontFamily: "'Playfair Display', serif" }}
>


      {/* --- Background Image --- */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/Hero1.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* --- CONTENT --- */}
      <div className="relative z-10 text-center max-w-4xl mx-auto">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1 bg-white/20 text-white rounded-full text-sm mb-6 backdrop-blur-sm"
        >
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
          Transforming Lives Since 2010
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
        >
          <span className="text-white drop-shadow-lg block">
            Empowering Communities
          </span>
          <span className="text-teal-300 drop-shadow-lg block mt-2">
            Transforming Lives
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-white text-base md:text-lg max-w-2xl mx-auto mt-8 mb-10 leading-relaxed"
        >
          Building sustainable futures through education, agriculture, and
          community development across Odisha.
        </motion.p>

        {/* Stats */}
        
        {/* Buttons */}
        <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/contact")}
            className="px-8 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-md hover:bg-teal-600"
          >
            Get Involved →
          </motion.button>

          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            onClick={() => navigate("/donate")}
            className="px-8 py-3 bg-white/20 backdrop-blur-sm border border-white/40 text-white font-semibold rounded-lg hover:bg-white/30"
          >
            Donate Now ❤️
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
