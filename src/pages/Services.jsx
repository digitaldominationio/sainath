// NGO.jsx — Full NGO page with 12 services
// TailwindCSS + framer-motion only (no extra CSS)

import React from "react";
import { motion } from "framer-motion";

const SERVICES = [
  {
    key: "tree-plantation",
    title: "Tree Plantation & Environmental Protection",
    short: "Large-scale plantation, sapling drives, and community climate action.",
    details: [
      "Organize sapling distribution and community plantation events.",
      "Run plastic-free and waste management awareness campaigns.",
      "Work with schools & villages for long-term tree care and biodiversity."
    ],
    img: "/plantation.jpg"
  },
  {
    key: "old-age",
    title: "Old Age Support & Senior Care",
    short: "Home visits, medical camps, food & emotional support for the elderly.",
    details: [
      "Regular health camps and checkups for elders.",
      "Home-care visits, food kits, and mobility aids distribution.",
      "Counselling and social inclusion programs to reduce isolation."
    ],
    img: "/oldage.jpg"
  },
  {
    key: "child-welfare",
    title: "Child Welfare / Orphanage Support",
    short: "Shelter, education, nutrition and emotional care for vulnerable children.",
    details: [
      "Support orphanages with food, clothing and sanitation.",
      "Provide school material, tuition support and mentorship.",
      "Child protection programs, counseling and recreational activities."
    ],
    img: "/childwelfare.jpg"
  },
  {
    key: "disaster-relief",
    title: "Flood Relief / Disaster Relief",
    short: "Rapid-response relief, temporary shelter, medical aid and rehabilitation.",
    details: [
      "Emergency food, clean water and shelter during disasters.",
      "Coordinate with local authorities for rescue and relief.",
      "Long-term rehabilitation and reconstruction support."
    ],
    img: "/floodrelief.jpg"
  },
  {
    key: "rehabilitation",
    title: "Rehabilitation Work",
    short: "Reintegration & recovery programs for displaced or marginalized people.",
    details: [
      "Create rehabilitation pathways (skill training & livelihood support).",
      "Provide counselling and social reintegration programs.",
      "Coordinate housing and legal aid where required."
    ],
    img: "/rehabilitation.jpg"
  },
  {
    key: "women-empowerment",
    title: "Women Empowerment",
    short: "Skill building, SHG formation, financial literacy and livelihood support.",
    details: [
      "Run vocational & entrepreneurship training for women.",
      "Support SHG formation and market linkages.",
      "Financial literacy and small-business seed support."
    ],
    img: "/womenempowerment.jpg"
  },
  {
    key: "animal-welfare",
    title: "Animal Welfare",
    short: "Rescue, vaccination drives and care for street and abandoned animals.",
    details: [
      "Street animal rescue & first aid programs.",
      "Vaccination drives and community awareness on animal care.",
      "Partner with vets and shelters for long-term rehabilitation."
    ],
    img: "/animalwelfare.jpg"
  },
  {
    key: "health-camps",
    title: "Health Camps & Medical Support",
    short: "Free medical camps, screening, medicines & referral support.",
    details: [
      "Organize primary health camps and specialist outreach clinics.",
      "Eye checkups, dental camps and maternal-child health programs.",
      "Create referral linkages to hospitals and diagnostics."
    ],
    img: "/healthcamps.jpg"
  },
  {
    key: "community-dev",
    title: "Community Development",
    short: "Village development – WASH, infrastructure, livelihoods and microprojects.",
    details: [
      "Improve water & sanitation (WASH) infrastructure in villages.",
      "Support community-driven projects (micro-irrigation, storage, etc.).",
      "Promote participatory planning and local governance capacity."
    ],
    img: "/communitydevelopment.jpg"
  },
  {
    key: "env-protection",
    title: "Environmental Protection",
    short: "Ecosystem preservation, cleanups and sustainable farming education.",
    details: [
      "River/shore clean-ups, and anti-pollution awareness.",
      "Promote sustainable & regenerative agriculture practices.",
      "Teach composting, soil health and water-conservation techniques."
    ],
    img: "/environmentalprotection.jpg"
  },
  {
    key: "food-dist",
    title: "Food Distribution & Hunger Relief",
    short: "Community kitchens, ration kits and emergency food parcels.",
    details: [
      "Run community kitchens and meal drives for migrants & needy families.",
      "Provide ration kits to households during crises.",
      "Coordinate seasonal food programs (festivals, harvest lean periods)."
    ],
    img: "/fooddistribution.jpg"
  },
  {
    key: "skill-training",
    title: "Skill Training for Rural Youth",
    short: "Job-oriented training, digital skills and entrepreneurship programs.",
    details: [
      "Short-term employability courses and digital literacy programs.",
      "Link youth to internships, apprenticeships and local jobs.",
      "Support micro-entrepreneurship and startup mentorship."
    ],
    img: "/skilldevelopment.jpg"
  },
];

export default function NGO() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <section className="w-full bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-extrabold text-teal-700 leading-tight">
              What Our NGO Does
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed">
              Sainath Educational & Charitable Trust works across sectors — environment, health, disaster relief,
              education and livelihood — to create resilient communities and sustainable impact in Odisha.
            </p>

            <p className="text-gray-600">
              We design programs that are participatory, scalable and aligned to local needs — from tree plantation
              drives to skill training and emergency relief.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} className="flex justify-center">
            <img src="/education.jpg" className="w-full max-w-lg rounded-2xl shadow-lg object-cover" alt="NGO Banner" />
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID (overview cards) */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Core Programs</h2>
        <p className="text-gray-600 max-w-3xl mb-10 leading-relaxed">
          Below are the main areas where we focus our work. Click or scroll to read more about each program and how we implement impact on the ground.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES.map((s) => (
            <motion.div
              key={s.key}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-2xl border border-gray-100 shadow-md hover:shadow-xl transition-all"
            >
              <div className="w-14 h-14 rounded-full bg-teal-50 flex items-center justify-center text-2xl font-semibold text-teal-700 mb-4">
                {s.title.split(" ").slice(0,2).map(w => w[0]).join("")}
              </div>

              <h3 className="text-xl font-semibold text-gray-900">{s.title}</h3>
              <p className="text-gray-600 mt-3 text-sm leading-relaxed">{s.short}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* DETAILED SECTIONS (alternating layout) */}
      <section className="max-w-7xl mx-auto px-6 py-8 space-y-20">
        {SERVICES.map((s, idx) => (
          <div key={s.key} className="grid md:grid-cols-2 gap-10 items-center">
            {/* alternate image position */}
            {idx % 2 === 0 ? (
              <>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80" />
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{s.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{s.short}</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {s.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
              </>
            ) : (
              <>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{s.title}</h3>
                  <p className="text-gray-700 mb-4 leading-relaxed">{s.short}</p>
                  <ul className="list-disc ml-6 space-y-2 text-gray-700">
                    {s.details.map((d, i) => <li key={i}>{d}</li>)}
                  </ul>
                </div>
                <img src={s.img} alt={s.title} className="rounded-2xl shadow-lg object-cover w-full h-64 md:h-80" />
              </>
            )}
          </div>
        ))}
      </section>

      {/* IMPACT CALL-TO-ACTION */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-teal-700 mb-4">Join Us — Volunteer or Donate</h2>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
          Your support helps us plant trees, feed families, rehabilitate communities and empower youth.
          Help us touch more lives — donate, volunteer, or partner with Sainath Trust.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="/donate" className="px-6 py-3 rounded-full bg-teal-700 text-white font-semibold shadow hover:bg-teal-800 transition">
            Donate Now
          </a>
          <a href="/volunteer" className="px-6 py-3 rounded-full border border-teal-700 text-teal-700 font-semibold hover:bg-teal-50 transition">
            Volunteer With Us
          </a>
        </div>
      </section>

      {/* FOOTER MESSAGE */}
      <section className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h3 className="text-xl text-gray-500">Serving Odisha with heart & skill</h3>
        <h2 className="text-4xl font-bold text-teal-700 mt-2">Create impact — One community at a time</h2>
        <p className="text-gray-600 mt-4 max-w-3xl mx-auto leading-relaxed">
          We follow transparent processes, community consultation and evidence-based approaches to deliver real change.
        </p>
      </section>

    </div>
  );
}
