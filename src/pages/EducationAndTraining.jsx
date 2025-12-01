import React from "react";
import { motion } from "framer-motion";
import ServiceCard from "../components/common/ServiceCard";

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
              At <span className="font-semibold text-teal-700">Placement Odisha Skill Academy</span>, 
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
              src="/EducationandTraining/8.png"
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
            Why Choose Placement Odisha Skill Academy?
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
            src="/EducationandTraining/7.png"
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
        </div>

        <div className="text-center mt-12">
          <img
            src="/EducationandTraining/2.jpeg"
            className="w-72 mx-auto rounded-2xl shadow-lg"
            alt="Skill Growth"
          />
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

      {/* RESOURCES SECTION */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">
          Training Resources & PPTs
        </h2>

        <div className="bg-white rounded-2xl shadow p-10 border border-gray-200">
          <p className="text-gray-700 text-lg">
            Coming Soon — You will be able to download training materials, guides, PPTs, worksheets,
            and session resources directly from this section.
          </p>
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl text-gray-500">Led by Visionaries</h3>
        <h2 className="text-4xl font-bold text-teal-700 mt-2">
          Enabling Talent, Empowering Futures
        </h2>
        <p className="text-gray-600 mt-4">
          Placement Odisha Skill Academy is committed to creating opportunities
          for every learner to grow, succeed and build a better tomorrow.
        </p>
      </section>

    </div>
  );
}
