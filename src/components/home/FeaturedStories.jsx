import { motion } from "framer-motion";

export default function FeaturedStories() {
  const stories = [
    {
      title: "Digital Literacy in Rural Schools",
      description: "Empowered 500+ students with computer education in remote villages of Odisha.",
      image: "/stories/1.jpg",
      impact: "85% improved digital skills",
      category: "Education"
    },
    {
      title: "Sustainable Farming Revolution",
      description: "Trained 200+ farmers in organic farming techniques, increasing yield by 40%.",
      image: "/stories/2.jpg",
      impact: "200+ families benefited",
      category: "Agriculture"
    },
    {
      title: "Healthcare Camps Initiative",
      description: "Provided free medical checkups and treatment to 1000+ underserved community members.",
      image: "/stories/3.jpg",
      impact: "1000+ lives touched",
      category: "Healthcare"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.9
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    },
    hover: {
      y: -10,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300
      }
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Impact <span className="text-teal-600">Stories</span>
          </h2>
          <p className="text-gray-600 mt-4 text-xl max-w-2xl mx-auto">
            Real stories of transformation and hope from the communities we serve
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {stories.map((story, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="
                bg-white rounded-2xl shadow-lg hover:shadow-2xl 
                border border-gray-100 overflow-hidden
                transition-all duration-300 cursor-pointer
                group
              "
            >
              {/* Image Container */}
              <div className="relative h-48 bg-gradient-to-br from-teal-400 to-blue-500 overflow-hidden">
                <img
                  src={story.image}
                  alt={story.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-sm font-medium text-teal-700">
                    {story.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-teal-600 transition-colors">
                  {story.title}
                </h3>
                <p className="text-gray-600 mt-3 leading-relaxed">
                  {story.description}
                </p>
                
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-teal-600 font-semibold text-sm">
                    {story.impact}
                  </span>
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="
                      text-teal-600 font-medium text-sm 
                      flex items-center gap-1 group
                    "
                  >
                    Read More
                    <span className="group-hover:translate-x-1 transition-transform">
                      →
                    </span>
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Stories Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-8 py-4 rounded-full bg-teal-600 text-white 
              font-semibold shadow-lg hover:shadow-xl
              transition-all duration-300
            "
          >
            View All Success Stories
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}