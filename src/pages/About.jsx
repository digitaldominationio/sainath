"use client";
import { motion } from "framer-motion";
import SectionTitle from "../components/common/SectionTitle";

export default function About() {
  // Reusable Animations
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const staggerContainer = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.15 },
    },
  };

  const scaleUp = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };


  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP SECTION */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-14 items-center"
        >

          {/* LEFT TEXT */}
          <motion.div variants={fadeUp}>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Empowering Communities.
              <span className="text-teal-600"> Transforming Lives.</span>
            </h1>

            <p className="text-lg text-gray-600 mt-6 leading-relaxed">
              Established in 2013, PlacementOdisha Skill Academy operates under
              the Sainath Educational and Charitable Trust with a strong
              mission: to support needy and meritorious students of Odisha with
              quality education and employability skills.
            </p>

            <p className="text-lg text-gray-600 mt-4 leading-relaxed">
              Our programs uplift underserved communities and provide access to
              opportunities that build a stronger, self-reliant society.
            </p>

            <div className="mt-8 flex gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-6 py-3 bg-teal-600 text-white rounded-xl font-medium shadow-md hover:bg-teal-700 transition"
              >
                Partner With Us
              </motion.a>

              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/gallery"
                className="px-6 py-3 border border-gray-300 rounded-xl font-medium text-gray-700 hover:bg-gray-100 transition shadow-sm"
              >
                View Our Work
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (lazy loaded) */}
          <motion.div
            variants={scaleUp}
            className="overflow-hidden rounded-2xl shadow-xl"
          >
            <motion.img
              src="/102.jpg"
              loading="lazy"
              className="w-full h-96 object-cover"
              alt="About Sainath"
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.4 }}
            />
          </motion.div>

        </motion.div>

        {/* MISSION & VISION */}
        <div className="mt-24 grid md:grid-cols-2 gap-10">
          {[
            {
              title: "Our Mission",
              text: "Over the past 13 years, we have expanded into consulting, training, recruitment, and government skill development projects such as Skill India, NAPS, MSME, and Startup India. We believe talent is not born—it is created through training and opportunity.",
            },
            {
              title: "Our Vision",
              text: "To bridge the gap between education and employment by offering technical training, management & banking programs, HR & corporate readiness training, and online learning accessible to all students in Odisha.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              whileHover={{ y: -3 }}
              transition={{ type: "spring", stiffness: 140 }}
              className="p-10 bg-gray-50 rounded-2xl border shadow-sm hover:shadow-lg transition cursor-pointer"
            >
              <h3 className="text-3xl font-bold text-gray-900">{item.title}</h3>
              <p className="text-gray-600 mt-4 leading-relaxed text-lg">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        {/* IMPACT STATISTICS */}
        <div className="mt-24">
          <SectionTitle
            title="Our Impact"
            subtitle="Real stories. Real change. Creating long-lasting impact across Odisha."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-3 gap-8 mt-12"
          >
            {[
              { number: "5000+", label: "Lives Impacted" },
              { number: "150+", label: "Projects Completed" },
              { number: "20+", label: "Districts Reached" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={scaleUp}
                whileHover={{ scale: 1.05, y: -3 }}
                className="p-10 rounded-xl bg-white border shadow-sm text-center hover:shadow-xl transition"
              >
                <h2 className="text-4xl font-extrabold text-teal-600">
                  {item.number}
                </h2>
                <p className="text-gray-600 mt-2">{item.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* GALLERY */}
        <div className="mt-24">
          <SectionTitle
            title="Our Work in Action"
            subtitle="Snapshots from our initiatives, events and community programs."
          />

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-6 mt-12"
          >
            {["about1", "about2", "about3"].map((img, i) => (
              <motion.img
                key={i}
                variants={fadeUp}
                src={`/about/${img}.jpg`}
                loading="lazy"
                className="rounded-xl shadow-md hover:shadow-xl hover:scale-[1.03] transition h-72 w-full object-cover"
                alt="Work"
              />
            ))}
          </motion.div>
        </div>

        {/* CTA SECTION */}
        <motion.div
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-24 p-14 bg-teal-600 rounded-3xl text-white text-center shadow-2xl relative overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-20"></div>

          <h2 className="text-3xl md:text-4xl font-bold relative z-10">
            Want to Support Our Mission?
          </h2>

          <p className="text-white/90 mt-4 text-lg max-w-2xl mx-auto relative z-10">
            Join us as a volunteer, donor, or partner and help transform lives
            through meaningful and sustainable initiatives.
          </p>

          <motion.a
            href="/contact"
            whileHover={{ scale: 1.07 }}
            whileTap={{ scale: 0.95 }}
            className="mt-8 inline-block px-8 py-3 bg-white text-teal-700 font-semibold rounded-xl hover:bg-gray-100 transition relative z-10"
          >
            Get Involved →
          </motion.a>
        </motion.div>

      </div>
    </section>
  );
}
