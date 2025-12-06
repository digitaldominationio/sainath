import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function FocusAreas() {
  const areas = [
    {
      title: "Education & Digital Literacy",
      text: "Comprehensive education programs and digital skills training for youth and adults in underserved communities.",
      icon: "🎓",
      color: "from-blue-500 to-cyan-500",
      stats: "2000+ Students Trained",
      link: "/services/education-training"
    },
    {
      title: "Sustainable Agriculture",
      text: "Modern farming techniques, organic practices, and market access support for small-scale farmers.",
      icon: "🌾",
      color: "from-green-500 to-emerald-500",
      stats: "500+ Farmers Empowered",
      link: "/services/ngo"
    },
    {
      title: "Child Welfare & Nutrition",
      text: "Holistic child development programs focusing on education, healthcare, nutrition, and safe environments.",
      icon: "👶",
      color: "from-pink-500 to-rose-500",
      stats: "1000+ Children Supported",
      link: "/services/ngo"

    },
    {
      title: "Healthcare Access",
      text: "Medical camps, health awareness campaigns, and healthcare infrastructure development in rural areas.",
      icon: "🏥",
      color: "from-red-500 to-orange-500",
      stats: "50+ Medical Camps",
      link: "/services/ngo"
    },
    {
      title: "Environmental Sustainability",
      text: "Afforestation, waste management, and climate resilience programs for greener communities.",
      icon: "🌳",
      color: "from-emerald-500 to-teal-500",
      stats: "10,000+ Trees Planted",
      link: "/services/ngo"
    },
    {
      title: "Women Empowerment",
      text: "Skill development, entrepreneurship training, and leadership programs for women and girls.",
      icon: "💪",
      color: "from-purple-500 to-pink-500",
      stats: "300+ Women Trained",
      link: "/services/ngo"
    }
  ];

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };
  const navigate = useNavigate();

  const cardAnim = {
    hidden: { 
      opacity: 0, 
      y: 50, 
      scale: 0.9,
      rotateX: 10 
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      rotateX: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-teal-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Our <span className="text-teal-600">Focus Areas</span>
          </h2>
          <p className="text-gray-600 mt-4 text-xl max-w-3xl mx-auto">
            Comprehensive programs addressing critical needs and creating sustainable impact across multiple sectors
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {areas.map((item, index) => (
            <motion.div
              key={item.title}
              variants={cardAnim}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { type: "spring", stiffness: 300 }
              }}
              onClick={()=> 
                {window.scrollTo({ top: 0, behavior: "smooth" })
                navigate(item.link)
              }}
              className="
                group relative bg-white rounded-2xl p-8 
                shadow-lg hover:shadow-2xl border border-gray-100
                transition-all duration-300 cursor-pointer
                overflow-hidden
              "
            >
              {/* Gradient Overlay on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Animated Icon */}
              <motion.div
                whileHover={{ 
                  scale: 1.1,
                  rotate: [0, -5, 5, 0]
                }}
                transition={{ duration: 0.5 }}
                className={`
                  w-16 h-16 flex items-center justify-center rounded-2xl
                  bg-gradient-to-br ${item.color} text-white text-2xl
                  shadow-lg group-hover:shadow-xl
                  transition-all duration-300
                `}
              >
                {item.icon}
              </motion.div>

              <h3 className="text-xl font-bold text-gray-900 mt-6 group-hover:text-teal-600 transition-colors">
                {item.title}
              </h3>

              <p className="text-gray-600 mt-3 leading-relaxed">
                {item.text}
              </p>

              <div className="mt-4 flex items-center justify-between">
                <span className="text-sm font-semibold text-teal-600">
                  {item.stats}
                </span>
                <motion.div
                  whileHover={{ x: 3 }}
                  className="text-gray-400 group-hover:text-teal-500 transition-colors"
                >
                  →
                </motion.div>
              </div>

              {/* Bottom Border Animation */}
              <div className="absolute bottom-0 left-0 w-0 h-1 bg-gradient-to-r from-teal-500 to-cyan-500 group-hover:w-full transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-2xl p-8 border border-teal-100">
            <h3 className="text-2xl font-bold text-gray-900">
              Ready to Make a Difference?
            </h3>
            <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
              Join us in creating lasting change. Your support can transform lives and build better communities.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                window.scrollTo({ top: 0, behavior: "smooth" });
                navigate('/services/education-training')
              }}
              className="mt-6 px-8 py-3 rounded-full bg-teal-600 text-white font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore All Programs
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}