import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/common/ServiceCard";
import { educationData } from "../data/educationData";

export default function EducationAndTraining() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO SECTION */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-700 leading-tight">
              Education & Training Programs
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              At <span className="font-semibold text-teal-700">PlacementOdisha Skill Academy</span>,
              we empower students, youth, and professionals with structured, industry-aligned,
              and skill-based training programs designed to build strong careers and brighter futures.
            </p>

            <p className="text-gray-600">
              Our mission is to provide accessible, practical and employment-oriented training
              that creates real opportunities across Odisha and beyond.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex justify-center"
          >
            <img
              src="/education1.jpg"
              className="w-full max-w-lg rounded-2xl shadow-lg object-cover"
              alt="Education Training"
            />
          </motion.div>
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow p-10 border border-gray-200 relative">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            Why Choose PlacementOdisha Skill Academy?
          </h2>

          <ul className="space-y-4 text-gray-700 text-lg leading-relaxed">
            <li>✔ 13+ years of experience in training, recruitment, and manpower sourcing.</li>
            <li>✔ Strong industry partnerships across India with real career pathways.</li>
            <li>✔ Practical, scenario-based, and project-driven learning approach.</li>
            <li>✔ Focus on complete development — communication, personality & skills.</li>
            <li>✔ Programs aligned with NAPS, MSME, Skill India & national frameworks.</li>
          </ul>

          {/* Decorative image (your own existing image) */}
          <img
            src="/105.png"
            className="absolute right-6 top-6 w-40 opacity-25 rounded-xl"
            alt="Decorative"
          />
        </div>
      </section>

      {/* PROFESSIONAL TRAINING SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Professional & Corporate Training
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            image="/EducationandTraining/1.jpeg"
            title="Corporate Training"
            description="Customized learning modules to enhance employee performance and organizational productivity."
          />

          <ServiceCard
            image="/EducationandTraining/2.jpeg"
            title="On-Premise Classroom Training"
            description="Interactive classroom-based sessions with guided practice and real-time trainer support."
          />

          <ServiceCard
            image="/EducationandTraining/3.jpeg"
            title="Virtual Online Training"
            description="Live structured online programs with trainer interaction, tasks, reviews & assessments."
          />
        </div>
      </section>

      {/* SKILL DEVELOPMENT SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Skill Development Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          <ServiceCard
            image="/EducationandTraining/4.jpeg"
            title="Soft Skills & Behavioural Training"
            description="Public speaking, communication, teamwork, leadership, customer handling & workplace behaviour."
          />

          <ServiceCard
            image="/EducationandTraining/5.jpeg"
            title="Industry-Specific Skill Modules"
            description="Job-oriented training for Retail, Banking, ITES, BPO, Hospitality and more with practical exposure."
          />
          <ServiceCard
            image="/EducationandTraining/2.jpeg"
            title="Skill Growth Workshops"
            description="Short-term workshops focused on enhancing specific skills like MS Office, Digital Literacy, etc."
          />
        </div>
      </section>

      {/* EDUCATION & DIGITAL LITERACY SECTION */}
      <section className="w-full bg-teal-50 py-20 border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              Education & Digital Literacy
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              {educationData.objective}
            </p>
          </div>

          {/* FOCUS AREAS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {educationData.focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:-translate-y-1"
              >
                <div className="text-5xl mb-6 bg-teal-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto md:mx-0">
                  {area.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-4 text-center md:text-left">
                  {area.title}
                </h3>
                <ul className="space-y-3">
                  {area.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-gray-600">
                      <span className="mr-2 text-teal-500 mt-1.5 text-lg">•</span>
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* OUTCOMES */}
          <div className="bg-teal-700 rounded-3xl p-10 md:p-14 text-white shadow-xl relative overflow-hidden">
            {/* Decorative Circle */}
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-teal-600 rounded-full opacity-50 blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-teal-500 rounded-full opacity-50 blur-3xl"></div>

            <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center relative z-10">
              Outcome & Impact
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
              {educationData.outcomes.map((outcome, index) => (
                <div
                  key={index}
                  className="bg-white/10 rounded-xl p-6 backdrop-blur-md border border-white/20 hover:bg-white/20 transition duration-300 flex items-center justify-center text-center h-full"
                >
                  <p className="font-semibold text-lg tracking-wide">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PLACEMENT TRAINING */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-10">
          Placement Orientation Training
        </h2>

        <ServiceCard
          image="/EducationandTraining/6.jpeg"
          title="Job Placement Orientation Program"
          description="A complete job-readiness pathway with GD practice, interview handling, résumé building, mock interviews, aptitude sessions & communication strengthening."
        />
      </section>

      

      {/* FOOTER MESSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl text-gray-500">Led by Visionaries</h3>
        <h2 className="text-4xl font-bold text-teal-700 mt-2">
          Enabling Talent, Empowering Futures
        </h2>
        <p className="text-gray-600 mt-4">
          PlacementOdisha Skill Academy is committed to creating opportunities
          for every learner to grow, succeed and build a better tomorrow.
        </p>
      </section>

    </div>
  );
}
