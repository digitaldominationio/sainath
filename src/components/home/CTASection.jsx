import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function CTASection() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const navigate = useNavigate();

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      y: -2,
      transition: {
        type: "spring",
        stiffness: 400
      }
    },
    tap: { scale: 0.95 }
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -5,
      scale: 1.05,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className="relative py-20 bg-gradient-to-br from-teal-600 via-blue-600 to-purple-700 text-white overflow-hidden">
      {/* Background Animation */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-0 left-0 w-72 h-72 bg-teal-400/10 rounded-full blur-3xl"
          animate={{
            x: [-100, 300, -100],
            y: [0, 100, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl"
          animate={{
            x: [100, -200, 100],
            y: [0, -150, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto text-center px-6 z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Heading */}
          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold"
          >
            Join Our <span className="text-cyan-300">Movement</span> of Change
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            variants={itemVariants}
            className="mt-6 text-xl text-teal-100 max-w-3xl mx-auto leading-relaxed"
          >
            Every action you take creates ripples of transformation. Together, we're building 
            sustainable communities, empowering individuals, and creating lasting impact across Odisha.
          </motion.p>

          {/* Enhanced CTA Buttons */}
          <motion.div
            variants={containerVariants}
            className="mt-12 flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.button
              variants={buttonVariants}
              onClick={() =>{
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate('/contact')
              }}
              whileHover="hover"
              whileTap="tap"
              className="
                px-12 py-4 rounded-2xl bg-white text-teal-700 font-bold text-lg
                shadow-2xl hover:shadow-3xl transition-all duration-300
                relative overflow-hidden group
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                🤝 Become a Volunteer
                <motion.span
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 transform translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              onClick={() =>{
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate('/donate')
              }}
              whileHover="hover"
              whileTap="tap"
              className="
                px-12 py-4 rounded-2xl bg-gradient-to-r from-yellow-400 to-orange-500 
                text-white font-bold text-lg shadow-2xl hover:shadow-3xl
                transition-all duration-300 relative overflow-hidden group
              "
            >
              <span className="relative z-10 flex items-center gap-3">
                💝 Donate Now
                <motion.span
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  ❤️
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
            </motion.button>

            <motion.button
              variants={buttonVariants}
              onClick={() =>{
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate('/contact')
              }}
              whileHover="hover"
              whileTap="tap"
              className="
                px-12 py-4 rounded-2xl bg-transparent border-2 border-white/50
                text-white font-bold text-lg hover:bg-white/10
                transition-all duration-300 backdrop-blur-sm
              "
            >
              📞 Partner With Us
            </motion.button>
          </motion.div>

          {/* Enhanced Stats Section */}
          <motion.div
            variants={containerVariants}
            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {[
              { number: "5000+", label: "Lives Transformed", icon: "👥" },
              { number: "150+", label: "Projects Completed", icon: "✅" },
              { number: "20+", label: "Districts Reached", icon: "🗺️" },
              { number: "50+", label: "Active Volunteers", icon: "🌟" }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                variants={statsVariants}
                whileHover="hover"
                className="
                  bg-white/10 backdrop-blur-lg rounded-2xl p-6 
                  border border-white/20 hover:border-white/40
                  transition-all duration-300 cursor-default
                "
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <p className="text-3xl font-bold text-cyan-300">{item.number}</p>
                <p className="text-teal-100 text-sm mt-2 font-medium">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Badges */}
          <motion.div
            variants={itemVariants}
            className="mt-12 flex flex-wrap justify-center gap-8 items-center text-teal-200"
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">Transparent Operations</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">80G Tax Benefits</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm font-medium">FCRA Certified</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}