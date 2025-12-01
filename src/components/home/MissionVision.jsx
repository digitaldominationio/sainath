import { motion } from "framer-motion";

export default function MissionVision() {
  // Fade-up animation
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Left slide card
  const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Right slide card
  const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  // Bottom section grow animation
  const scaleUp = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900">
            Our Mission & Vision
          </h2>

          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Driven by compassion, integrity and purpose — we are committed to creating
            lasting social change by empowering individuals and strengthening communities.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16">

          {/* Mission Card */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100 
                       hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-teal-200 text-4xl">
              🎯
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 mt-6">Our Mission</h3>

            <p className="text-gray-600 mt-4">
              To bridge the gap between education and industry by providing a 
              diverse range of skill-enhancement programs, including:
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔ Technical training for engineering graduates</li>
              <li>✔ Management and banking training</li>
              <li>✔ Human Resource & corporate readiness training</li>
              <li>✔ Online training programs accessible across locations</li>
            </ul>
          </motion.div>

          {/* Vision Card */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="p-10 bg-white rounded-3xl shadow-xl border border-gray-100 
                       hover:shadow-2xl transition"
          >
            <div className="w-16 h-16 flex items-center justify-center rounded-2xl bg-cyan-200 text-4xl">
              🌟
            </div>

            <h3 className="text-3xl font-semibold text-gray-900 mt-6">Our Vision</h3>

            <p className="text-gray-600 mt-4">
              To build a future where every student in Odisha is equipped with the knowledge, 
              confidence, and exposure needed to seize career opportunities and thrive in a 
              competitive professional world.
            </p>

            <ul className="mt-6 space-y-2 text-gray-700">
              <li>✔ Communities that are self-reliant & empowered</li>
              <li>✔ A world with equal opportunities for all</li>
              <li>✔ Sustainable development across Odisha</li>
              <li>✔ A greener and cleaner environment</li>
              <li>✔ Youth & women-led empowerment</li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom Block */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-20 text-center bg-white shadow-lg border border-gray-100 p-10 rounded-3xl"
        >
          <h3 className="text-3xl font-bold text-teal-700">
            Together, We Build a Better Tomorrow
          </h3>

          <p className="text-gray-600 max-w-2xl mx-auto mt-3">
            Your support helps us bring education, hope, and dignity to thousands.
            Join us in driving meaningful change.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
