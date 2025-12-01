import { motion } from "framer-motion";

export default function ImpactStats() {
  const stats = [
    { number: "5000+", label: "People Supported" },
    { number: "150+",  label: "Projects Completed" },
    { number: "120+",  label: "Training Sessions" },
    { number: "20+",   label: "Districts Reached" },
  ];

  // Fade-up animation for header
  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Container for stagger effect
  const gridContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  // Stat box animation
  const statAnim = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 bg-white px-6">
      <div className="max-w-7xl mx-auto text-center">

        {/* Title */}
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Impact So Far
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="text-gray-600 max-w-xl mx-auto mt-3"
        >
          Every effort brings real change. These numbers reflect the lives touched
          and communities transformed through our initiatives.
        </motion.p>

        {/* Stats Grid */}
        <motion.div
          variants={gridContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12"
        >
          {stats.map((item, idx) => (
            <motion.div
              key={idx}
              variants={statAnim}
              whileHover={{ y: -5, scale: 1.04 }}
              transition={{ type: "spring", stiffness: 180 }}
              className="
                bg-gray-50 border border-gray-100 rounded-xl p-6 shadow-sm
                hover:shadow-md transition-all cursor-default
              "
            >
              <p className="text-4xl font-extrabold text-teal-600">
                {item.number}
              </p>
              <p className="text-gray-700 text-sm mt-2 font-medium">
                {item.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
